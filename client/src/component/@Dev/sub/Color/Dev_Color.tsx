import React from 'react';
import { EtcColors, OpacityColors, OpacityReverseColors, TextColors, Theme } from '@theme';
import app from '@app';
import util from '@util';
import { Grid } from '@ccomp';

const Colors: [keyof Theme['colors'], keyof Theme['colors']][] = [
  ['primary', 'onPrimary'],
  ['secondary', 'onSecondary'],
  ['success', 'onSuccess'],
  ['warning', 'onWarning'],
  ['error', 'onError'],
] as const;

export const Dev_Color = () => {
  return (
    <Panel spacing={20}>
      <TTitleLarge700 color='primary'>Color</TTitleLarge700>

      <Divider />

      <Grid cols={{ mobileLg: 2, tabletSm: 3, tabletMd: 4, desktopSm: 5 }} spacing={10}>
        {Array.from(Colors.values()).map(([color, onColor], idx) => (
          <Col key={idx}>
            <Container key={idx}>
              <Item color={color} onColor={onColor} />
              <Item color={onColor} onColor={color} />
            </Container>
          </Col>
        ))}
        <Col>
          <Container>
            {TextColors.map((color, idx) => (
              <Item key={idx} color={color} />
            ))}
          </Container>
        </Col>
        <Col>
          <Container>
            {EtcColors.map((color, idx) => (
              <Item key={idx} color={color} />
            ))}
          </Container>
        </Col>
        <Col>
          <Container>
            {OpacityColors.map((color, idx) => (
              <Item key={idx} color={color} />
            ))}
          </Container>
        </Col>
        <Col>
          <Container>
            {OpacityReverseColors.map((color, idx) => (
              <Item key={idx} color={color} />
            ))}
          </Container>
        </Col>
      </Grid>
    </Panel>
  );
};

/********************************************************************************************************************
 * Container
 * ******************************************************************************************************************/

const Container = ({
  children,
  backgroundColor,
}: {
  children: ReactNode;
  backgroundColor?: BoxProps['backgroundColor'];
}) => {
  const theme = useTheme();

  return (
    <Stack
      spacing={10}
      backgroundColor={ifUndefined(backgroundColor, 'background')}
      p={10}
      border={`1px solid ${theme.colors.divider}`}
      borderRadius={10}
    >
      {children}
    </Stack>
  );
};

/********************************************************************************************************************
 * Item
 * ******************************************************************************************************************/

const Item = ({ color, onColor }: { color: keyof Theme['colors']; onColor?: keyof Theme['colors'] }) => {
  const theme = useTheme();

  const colorValue = theme.colors[color];
  const onColorValue = ifUndefined(onColor, util.color.getOnColor(colorValue));

  return (
    <Box
      backgroundColor={colorValue}
      color={onColorValue}
      pv={5}
      borderRadius={4}
      center
      cursor='pointer'
      onClick={() => app.copyToClipboard(colorValue, `'${colorValue}' 컬러 코드가 복사되었습니다.`)}
    >
      <T opacity={0.7}>{color}</T>
      <T>{colorValue}</T>
    </Box>
  );
};

export default Dev_Color;
