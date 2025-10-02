import React from 'react';
import { AllColors, getFriendlyNameOfSize, Sizes, Theme } from '@theme';
import util from '@util';
import app from '@app';
import { Divider, Grid, Tabs } from '@ccomp';
import { useLocation } from 'react-router';

const TabValue = ['size', 'color'] as const;
type TabValue = (typeof TabValue)[number];
const TabItems = [lv('크기 (Size)', 'size'), lv('색상 (Color)', 'color')] as Lv<
  string,
  TabValue,
  { disabled?: boolean }
>[];

export const Dev_Css = () => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const location = useLocation();

  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [activeTab, setActiveTab] = useState<TabValue>('size');

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    const hash = app.deHash(location);
    if (hash.sm && TabValue.includes(hash.sm as TabValue)) {
      setActiveTab(hash.sm as TabValue);
    } else {
      setActiveTab('size');
    }
  }, [location]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Panel spacing={20}>
      <TTitleLarge700 color='primary'>CSS</TTitleLarge700>

      <Tabs
        items={TabItems}
        value={activeTab}
        onChange={(v) => {
          v !== activeTab && app.navigate(`#m=css&sm=${v}`);
        }}
      />

      {activeTab === 'size' ? (
        <Grid cols={{ mobileLg: 2, tabletMd: 3, desktopSm: 4 }} spacing={10}>
          {Sizes.map((size, idx) => {
            const friendlyName = theme.css.names.sizes[getFriendlyNameOfSize(size)];
            const sizeInfo = theme.sizes[size];
            const fontVarName = `font-${size}`;
            const fontFriendlyVarName = `font-${friendlyName}`;
            const fontSizeVarName = `var(--size-${size}-font-size)`;
            const fontSizeFriendlyVarName = `var(--size-${friendlyName}-font-size)`;
            const lineHeightVarName = `var(--size-${size}-line-height)`;
            const lineHeightFriendlyVarName = `var(--size-${friendlyName}-line-height)`;

            return (
              <Col key={idx}>
                <Container>
                  <Stack spacing={10}>
                    <TTitleSmall color='primary' center>
                      {friendlyName} ({size})
                    </TTitleSmall>

                    <Divider />

                    {/* Font Size */}
                    <T center opacity={0.7}>
                      Font Size : {sizeInfo.fontSize}px
                      <br />
                      Line Height : {sizeInfo.lineHeight}
                    </T>
                    <CopyButton name={fontFriendlyVarName} />
                    <CopyButton name={fontVarName} />

                    <Divider />

                    {/* Font Size */}
                    <T center opacity={0.7}>
                      Font Size : {sizeInfo.fontSize}px
                    </T>
                    <CopyButton name={fontSizeFriendlyVarName} />
                    <CopyButton name={fontSizeVarName} />
                    <CopyButton name={`font-size-${friendlyName}`} />
                    <CopyButton name={`font-size-${size}`} />

                    <Divider />

                    {/* Line Height */}
                    <T center opacity={0.7}>
                      Line Height : {sizeInfo.lineHeight}
                    </T>
                    <CopyButton name={lineHeightFriendlyVarName} />
                    <CopyButton name={lineHeightVarName} />
                    <CopyButton name={`line-height-${friendlyName}`} />
                    <CopyButton name={`line-height-${size}`} />
                  </Stack>
                </Container>
              </Col>
            );
          })}
        </Grid>
      ) : activeTab === 'color' ? (
        <Grid cols={{ mobileLg: 2, tabletMd: 3, desktopSm: 4 }} spacing={10}>
          {AllColors.map((color, idx) => (
            <Col key={idx}>
              <Container>
                <Item color={color as keyof Theme['colors']} />
              </Container>
            </Col>
          ))}
        </Grid>
      ) : null}
    </Panel>
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

/********************************************************************************************************************
 * Container
 * ******************************************************************************************************************/

const Container = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();

  return (
    <Stack
      spacing={10}
      backgroundColor={theme.colors.background}
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
    <Stack spacing={10}>
      <Box backgroundColor={colorValue} color={onColorValue} pv={5} borderRadius={4} center>
        <T opacity={0.7}>{color}</T>
      </Box>

      <CopyButton name={theme.css.vars.colors[color]} />
      <CopyButton name={`color-${theme.css.names.colors[color]}`} />
      <CopyButton name={`background-color-${theme.css.names.colors[color]}`} />
    </Stack>
  );
};

export default Dev_Css;
