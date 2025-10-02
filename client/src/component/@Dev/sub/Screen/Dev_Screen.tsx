import React from 'react';
import {
  AllMaxScreens,
  AllMinScreens,
  DesktopScreenAliases,
  GeneralScreens,
  MobileScreenAliases,
  TabletScreenAliases,
} from '@theme';
import { Dev_Panel } from '../@Common';
import util from '@util';
import app from '@app';
import Code from '../@Common/Code';
import reactCode from './Dev_Screen.react.code.md';
import scssCode from './Dev_Screen.scss.code.md';

interface Props {}

const Dev_Screen = ({}: Props) => {
  return (
    <Panel spacing={20}>
      <TTitleLarge700 color='primary'>화면</TTitleLarge700>

      <Divider />

      <Dev_Panel>
        <Stack row stretchAlign spacing={10}>
          <Code customStyle={{ flex: 1 }}>{reactCode}</Code>
          <Code customStyle={{ flex: 1 }}>{scssCode}</Code>
        </Stack>
      </Dev_Panel>
      <Item type='mobile' />
      <Item type='tablet' />
      <Item type='desktop' />
    </Panel>
  );
};

export default Dev_Screen;

/********************************************************************************************************************
 * Item
 * ******************************************************************************************************************/

const Item = ({ type }: { type: 'mobile' | 'tablet' | 'desktop' }) => {
  const theme = useTheme();

  const aliases =
    type === 'mobile' ? MobileScreenAliases : type === 'tablet' ? TabletScreenAliases : DesktopScreenAliases;

  return (
    <Stack spacing={5}>
      <TTitleSmall700 color='textLighten'>
        {type.substring(0, 1).toUpperCase()}
        {type.slice(1)}
      </TTitleSmall700>

      <Grid cols={{ mobileLg: 2, desktop: 4 }} spacing={10}>
        {Object.keys(aliases).map((alias, idx) => {
          const [minAlias, maxAlias] = aliases[alias as keyof typeof aliases] as [AllMinScreens, AllMaxScreens];
          return (
            <Col key={idx}>
              <Dev_Panel>
                <Stack spacing={10} center>
                  <TTitleSmall600 color={contains(GeneralScreens, alias) ? 'success' : 'secondary'}>
                    {util.css.toCssName(alias)}
                  </TTitleSmall600>
                  <T>
                    {theme.screens[minAlias]}px ~ {theme.screens[maxAlias]}px
                  </T>
                  <Divider />

                  <CopyButton name={`screenSize.is.${alias}`} />
                  <CopyButton name={util.css.toCssVarName(minAlias, 'screen')} />
                  <CopyButton name={util.css.toCssVarName(maxAlias, 'screen')} />
                </Stack>
              </Dev_Panel>
            </Col>
          );
        })}
      </Grid>
    </Stack>
  );
};

/********************************************************************************************************************
 * CopyButton
 * ******************************************************************************************************************/

const CopyButton = ({ name }: { name: string }) => {
  const isVar = name.startsWith('var');

  return (
    <Box
      color='var(--color-text)'
      ph={10}
      pv={5}
      borderRadius={4}
      center
      fullWidth
      cursor='pointer'
      backgroundColor={
        isVar ? 'rgba(from var(--color-primary) r g b / 0.1)' : 'rgba(from var(--color-success) r g b / 0.1)'
      }
      onClick={() => app.copyToClipboard(name, `'${name}' ${isVar ? '변수명' : '클래스명'}이 복사되었습니다.`)}
    >
      <T>{name}</T>
    </Box>
  );
};
