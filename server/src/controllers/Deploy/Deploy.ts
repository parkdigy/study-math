import express from 'express';
import { exec } from 'child_process';
import crypto from 'crypto';

export default {
  github(req: express.Request, res: express.Response) {
    const sendSuccess = (data: string) => {
      res.status(200).send({
        result: {
          c: 0,
          m: '성공적으로 배포되었습니다.',
        },
        data,
      });
    };

    const sendSkip = () => {
      res.status(200).send({
        result: {
          c: 1,
          m: 'skip',
        },
      });
    };

    const sendFail = (code: number, data: string) => {
      res.status(500).send({
        result: {
          c: code,
          m: '배포 중 오류가 발생했습니다.',
        },
        data,
      });
    };

    try {
      const githubSignature = req.headers['x-hub-signature'];
      if ((githubSignature || '') === '') {
        sendFail(-10, '서명 불일치');
        return;
      }

      if (process.env.DEPLOY_GITHUB_SECRET) {
        const hmac = crypto.createHmac('sha1', process.env.DEPLOY_GITHUB_SECRET);
        const computedSignature = `sha1=${hmac.update(JSON.stringify(req.body)).digest('hex')}`;
        if (githubSignature !== computedSignature) {
          sendFail(-11, '서명 불일치');
          return;
        }
      } else {
        sendFail(-999, 'DEPLOY_GITHUB_SECRET 값 없음');
      }

      const githubEvent = req.headers['x-github-event'];
      if (githubEvent !== 'push') {
        sendSkip();
        return;
      }

      const githubRef = req.body.ref;
      if (githubRef !== process.env.DEPLOY_GITHUB_REF) {
        sendSkip();
        return;
      }

      exec('cd .. && git pull 2>&1', (err, data, stderr) => {
        if (err) {
          sendFail(-12, err.message);
        } else if (stderr) {
          sendFail(-13, stderr);
        } else if (['error', 'fetal'].includes(data.substring(0, 5))) {
          sendFail(-14, data);
        } else {
          exec('cd .. && git rev-parse HEAD', (err2, stdout2, stderr2) => {
            if (err2) {
              sendFail(-15, err2.message);
            } else if (stderr2) {
              sendFail(-16, stderr2);
            } else {
              if (req.body.after.trim() === stdout2.replace(/\n/g, '').trim()) {
                sendSuccess(data);

                const checkText = 'Already up to date.';
                if (data.substring(0, checkText.length) !== checkText) {
                  exec('npm run install:prod && npm run pm2:reload');
                }
              } else {
                sendFail(-17, data);
              }
            }
          });
        }
      });
    } catch (err) {
      ll(err);
      sendFail(-99, '배포 중 오류가 발생했습니다.');
    }
  },
};
