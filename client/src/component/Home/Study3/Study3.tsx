import React from 'react';
import { Study3Props as Props } from './Study3.types';
import { useRefState } from '@pdg/react-hook';
import { SoundCorrect, SoundIncorrect } from '../../../@assets/sounds';
import { useScreenSize } from '@context';

export const Study3 = ({}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const screen = useScreenSize();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const buttonRef = useRef<HTMLButtonElement>(null);
  const correctSoundRef = useRef<HTMLAudioElement>(null);
  const incorrectSoundRef = useRef<HTMLAudioElement>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [operator1, setOperator1] = useState<'+' | '-' | '*' | '/'>('+');
  const [operator2, setOperator2] = useState<'+' | '-' | '*' | '/'>('+');
  const [inputAnswer, setInputAnswer] = useState('');
  const [answer, setAnswer] = useState(0);
  const [isShowAnswerRef, isShowAnswer, setIsShowAnswer] = useRefState(true);
  const [disabled, setDisabled] = useState(false);
  const [serialCorrectCount, setSerialCorrectCount] = useState(0);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    next();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handler = (e: any) => {
      if (!isShowAnswerRef.current) {
        if (contains(['Backspace', '-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], e.key)) {
          inputKey(e.key);
        }
      }
      if (e.key === 'Enter') {
        buttonRef.current?.click();
      }
    };

    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const next = useCallback(() => {
    let newNum1: number;
    let newNum2: number;
    let newNum3: number;
    let newAnswer: number;
    let newOperator1: '+' | '-' | '*' | '/';
    let newOperator2: '+' | '-' | '*' | '/';

    const operators = ['+', '-', '*', '/'];

    while (true) {
      newOperator2 = operators[Math.floor(Math.random() * operators.length)] as any;
      if (newOperator2 === '/') {
        newOperator1 = '/';
        newOperator2 = operators[Math.floor(Math.random() * operators.length)] as any;
      } else {
        newOperator1 = operators[Math.floor(Math.random() * operators.length)] as any;
      }

      if (newOperator1 === '*' && newOperator2 === '/') {
        newOperator1 = '/';
        newOperator2 = '*';
      } else if (newOperator1 === '/' && newOperator2 === '/') {
        while (newOperator2 === '/') {
          newOperator2 = operators[Math.floor(Math.random() * operators.length)] as any;
        }
      } else if (newOperator1 === '*' && newOperator2 === '*') {
        while (newOperator2 === '*') {
          newOperator2 = operators[Math.floor(Math.random() * operators.length)] as any;
        }
      } else if (newOperator1 === '+' && newOperator2 === '+') {
        while (newOperator2 === '+') {
          newOperator2 = operators[Math.floor(Math.random() * operators.length)] as any;
        }
      }

      newNum3 = Math.floor(Math.random() * 10) + 1;
      if (Math.random() < 0.5) newNum3 = -newNum3;

      if (newOperator2 === '/') {
        newNum2 = newNum3 * (Math.floor(Math.random() * 7) + 2);
      } else if (newOperator2 === '*') {
        newNum2 = Math.floor(Math.random() * 9) + 2;
      } else {
        newNum2 = Math.floor(Math.random() * 10) + 1;
      }
      if (Math.random() < 0.5) newNum3 = -newNum3;

      if (newOperator1 === '/') {
        newNum1 = newNum2 * (Math.floor(Math.random() * 7) + 2);
      } else if (newOperator1 === '*') {
        newNum1 = Math.floor(Math.random() * 9) + 2;
      } else {
        newNum1 = Math.floor(Math.random() * 10) + 1;
      }
      if (Math.random() < 0.5) newNum1 = -newNum1;

      if (newNum1 > 0 && newNum2 > 0 && newNum3 > 0) continue;

      newAnswer = 0;
      if (contains(['*', '/'], newOperator2) && contains(['+', '-'], newOperator1)) {
        switch (newOperator2) {
          case '*':
            newAnswer = newNum2 * newNum3;
            break;
          case '/':
            newAnswer = parseFloat((newNum2 / newNum3).toFixed(2));
            break;
        }

        switch (newOperator1) {
          case '+':
            newAnswer = newNum1 + newAnswer;
            break;
          case '-':
            newAnswer = newNum1 - newAnswer;
            break;
        }
      } else {
        switch (newOperator1) {
          case '+':
            newAnswer = newNum1 + newNum2;
            break;
          case '-':
            newAnswer = newNum1 - newNum2;
            break;
          case '*':
            newAnswer = newNum1 * newNum2;
            break;
          case '/':
            newAnswer = parseFloat((newNum1 / newNum2).toFixed(2));
            break;
        }

        switch (newOperator2) {
          case '+':
            newAnswer += newNum3;
            break;
          case '-':
            newAnswer -= newNum3;
            break;
          case '*':
            newAnswer *= newNum3;
            break;
          case '/':
            newAnswer = parseFloat((newAnswer / newNum3).toFixed(2));
            break;
        }
      }

      if (newAnswer === Math.floor(newAnswer)) break;
    }

    setNum1(newNum1);
    setNum2(newNum2);
    setNum3(newNum3);
    setOperator1(newOperator1);
    setOperator2(newOperator2);
    setAnswer(newAnswer);
    setIsShowAnswer(false);
    setInputAnswer('');
  }, [setIsShowAnswer]);

  const confirmAnswer = useCallback(() => {
    setIsShowAnswer(true);
    if (answer !== Number(inputAnswer)) {
      incorrectSoundRef.current?.play();
      setSerialCorrectCount(0);
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
      }, 3000);
    } else {
      correctSoundRef.current?.play();
      setSerialCorrectCount((prev) => prev + 1);
    }
  }, [answer, inputAnswer, setIsShowAnswer]);

  const inputKey = useCallback(
    (key: string) => {
      if (isShowAnswerRef.current) return;

      if (key === '0') {
        setInputAnswer((prev) => (prev === '' ? '0' : contains(['0', '-'], prev) ? prev : `${prev}0`));
      } else if (contains(['1', '2', '3', '4', '5', '6', '7', '8', '9'], key)) {
        setInputAnswer((prev) => (prev === '0' ? key : `${prev}${key}`));
      } else if (key === '-') {
        setInputAnswer((prev) =>
          prev.startsWith('-') ? prev.substring(1) : contains(['', '0'], prev) ? '-' : `-${prev}`
        );
      } else if (key === 'Backspace') {
        setInputAnswer((prev) => prev.slice(0, -1));
      }
    },
    [isShowAnswerRef]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  const isCorrect = Number(inputAnswer) === answer;
  const isMobile = screen.smallerThanOrEqual.mobile;

  const defaultFontSize = isMobile ? 30 : 60;
  const defaultSmallFontSize = isMobile ? 20 : 30;
  const defaultGap = isMobile ? 15 : 30;
  const correctIncorrectFontSize = isMobile ? 50 : 70;
  const correctIncorrectTop = isMobile ? -100 : -150;
  const buttonSize = isMobile ? 'xs' : 'xl';
  const buttonHeight = isMobile ? 60 : undefined;

  return (
    <Flex center gap={50} width={isMobile ? '100%' : undefined}>
      <Flex center>
        <Flex row center centerJustify fs={defaultFontSize} bold gap={defaultGap} relative c='textAccent'>
          {isShowAnswer && (
            <Box absolute fs={correctIncorrectFontSize} top={correctIncorrectTop}>
              {isCorrect ? '👍' : '❌'}
            </Box>
          )}
          <Box mh={num1 < 0 ? -defaultSmallFontSize : undefined}>{num1 < 0 ? `（${num1}）` : num1}</Box>
          <Box c='magenta'>{operator1 === '*' ? 'ⅹ' : operator1 === '/' ? '÷' : operator1}</Box>
          <Box mh={num2 < 0 ? -defaultSmallFontSize : undefined}>{num2 < 0 ? `（${num2}）` : num2}</Box>
          <Box c='magenta'>{operator2 === '*' ? 'ⅹ' : operator2 === '/' ? '÷' : operator2}</Box>
          <Box mh={num3 < 0 ? -defaultSmallFontSize : undefined}>{num3 < 0 ? `（${num3}）` : num3}</Box>
          <Box>=</Box>
          <Box c={isShowAnswer ? (isCorrect ? 'primary' : 'error') : 'secondary'}>
            {inputAnswer === '' ? '?' : inputAnswer}
          </Box>
        </Flex>
        {isShowAnswer && !isCorrect && (
          <Box fs={defaultSmallFontSize} bold gap={30} c='primary'>
            &nbsp;&nbsp;(정답: {answer})
          </Box>
        )}
      </Flex>

      <Grid cols={6} gap={10} width={isMobile ? '100%' : undefined}>
        {new Array(10).fill(0).map((_, i) => (
          <Col key={i}>
            <Button
              disabled={isShowAnswer}
              s={buttonSize}
              c='opacity10'
              h={buttonHeight}
              onClick={() => inputKey(i === 9 ? '0' : (i + 1).toString())}
            >
              <T fs={defaultSmallFontSize}>{i === 9 ? 0 : i + 1}</T>
            </Button>
          </Col>
        ))}
        <Col>
          <Button disabled={isShowAnswer} s={buttonSize} h={buttonHeight} c='opacity10' onClick={() => inputKey('-')}>
            <T fs={defaultSmallFontSize + 3}>{inputAnswer.startsWith('-') ? '+' : '-'}</T>
          </Button>
        </Col>
        <Col>
          <Button
            disabled={isShowAnswer}
            s={buttonSize}
            h={buttonHeight}
            c='opacity20'
            onClick={() => inputKey('Backspace')}
          >
            <T fs={defaultSmallFontSize}>🔙</T>
          </Button>
        </Col>
      </Grid>

      {serialCorrectCount > 0 && (
        <T s='x3l' bold c='success'>
          연속 정답 수 : <T900>{serialCorrectCount}</T900>
        </T>
      )}

      <Button
        ref={buttonRef}
        c={isShowAnswer ? 'secondary' : 'primary'}
        s='lg'
        disabled={disabled || (num1 !== 0 && (inputAnswer === '' || inputAnswer === '-'))}
        onClick={() => (isShowAnswer ? next() : confirmAnswer())}
      >
        {isShowAnswer ? '다음 문제' : '정답 보기'}
      </Button>

      <Box display='none'>
        <audio ref={correctSoundRef} controls src={SoundCorrect} />
        <audio ref={incorrectSoundRef} controls src={SoundIncorrect} />
      </Box>
    </Flex>
  );
};

export default Study3;
