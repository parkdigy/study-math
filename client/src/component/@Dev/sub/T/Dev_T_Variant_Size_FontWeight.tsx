import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../@Common';
import { FriendlyNameSizes } from '@theme';
import util from '@util';

const Dev_T_Variant_Size_FontWeight = () => {
  return (
    <Dev_Panel>
      <Dev_PanelItem title='크기/두께 별 컴포넌트' row center spacing={10} wrap>
        {FriendlyNameSizes.map((size, idx) => (
          <React.Fragment key={idx}>
            <Divider />
            <Stack row center spacing={10} wrap>
              <Item size={size} />
              {new Array(9).fill(0).map((_, idx) => (
                <React.Fragment key={idx}>
                  <Divider vertical />
                  <Item size={size} fontWeight={((idx + 1) * 100) as any} />
                </React.Fragment>
              ))}
            </Stack>
          </React.Fragment>
        ))}
      </Dev_PanelItem>
    </Dev_Panel>
  );
};

export default React.memo(Dev_T_Variant_Size_FontWeight);

/********************************************************************************************************************
 * Item
 * ******************************************************************************************************************/

const Item = ({
  size,
  fontWeight,
}: {
  size: FriendlyNameSizes;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}) => {
  const camelCase = util.css.toVariableName(size);
  const componentName = `T${camelCase.charAt(0).toUpperCase() + camelCase.slice(1)}`;

  let Component: React.ElementType | null;
  switch (fontWeight) {
    case 100:
      Component =
        componentName === 'TCaption'
          ? TCaption100
          : componentName === 'TBodySmall'
            ? TBodySmall100
            : componentName === 'TBody'
              ? TBody100
              : componentName === 'TBodyLarge'
                ? TBodyLarge100
                : componentName === 'TTitleSmall'
                  ? TTitleSmall100
                  : componentName === 'TTitle'
                    ? TTitle100
                    : componentName === 'TTitleLarge'
                      ? TTitleLarge100
                      : componentName === 'THeadline'
                        ? THeadline100
                        : componentName === 'THeadlineLarge'
                          ? THeadlineLarge100
                          : null;
      break;
    case 200:
      Component =
        componentName === 'TCaption'
          ? TCaption200
          : componentName === 'TBodySmall'
            ? TBodySmall200
            : componentName === 'TBody'
              ? TBody200
              : componentName === 'TBodyLarge'
                ? TBodyLarge200
                : componentName === 'TTitleSmall'
                  ? TTitleSmall200
                  : componentName === 'TTitle'
                    ? TTitle200
                    : componentName === 'TTitleLarge'
                      ? TTitleLarge200
                      : componentName === 'THeadline'
                        ? THeadline200
                        : componentName === 'THeadlineLarge'
                          ? THeadlineLarge200
                          : null;
      break;
    case 300:
      Component =
        componentName === 'TCaption'
          ? TCaption300
          : componentName === 'TBodySmall'
            ? TBodySmall300
            : componentName === 'TBody'
              ? TBody300
              : componentName === 'TBodyLarge'
                ? TBodyLarge300
                : componentName === 'TTitleSmall'
                  ? TTitleSmall300
                  : componentName === 'TTitle'
                    ? TTitle300
                    : componentName === 'TTitleLarge'
                      ? TTitleLarge300
                      : componentName === 'THeadline'
                        ? THeadline300
                        : componentName === 'THeadlineLarge'
                          ? THeadlineLarge300
                          : null;
      break;
    case 400:
      Component =
        componentName === 'TCaption'
          ? TCaption400
          : componentName === 'TBodySmall'
            ? TBodySmall400
            : componentName === 'TBody'
              ? TBody400
              : componentName === 'TBodyLarge'
                ? TBodyLarge400
                : componentName === 'TTitleSmall'
                  ? TTitleSmall400
                  : componentName === 'TTitle'
                    ? TTitle400
                    : componentName === 'TTitleLarge'
                      ? TTitleLarge400
                      : componentName === 'THeadline'
                        ? THeadline400
                        : componentName === 'THeadlineLarge'
                          ? THeadlineLarge400
                          : null;
      break;
    case 500:
      Component =
        componentName === 'TCaption'
          ? TCaption500
          : componentName === 'TBodySmall'
            ? TBodySmall500
            : componentName === 'TBody'
              ? TBody500
              : componentName === 'TBodyLarge'
                ? TBodyLarge500
                : componentName === 'TTitleSmall'
                  ? TTitleSmall500
                  : componentName === 'TTitle'
                    ? TTitle500
                    : componentName === 'TTitleLarge'
                      ? TTitleLarge500
                      : componentName === 'THeadline'
                        ? THeadline500
                        : componentName === 'THeadlineLarge'
                          ? THeadlineLarge500
                          : null;
      break;
    case 600:
      Component =
        componentName === 'TCaption'
          ? TCaption600
          : componentName === 'TBodySmall'
            ? TBodySmall600
            : componentName === 'TBody'
              ? TBody600
              : componentName === 'TBodyLarge'
                ? TBodyLarge600
                : componentName === 'TTitleSmall'
                  ? TTitleSmall600
                  : componentName === 'TTitle'
                    ? TTitle600
                    : componentName === 'TTitleLarge'
                      ? TTitleLarge600
                      : componentName === 'THeadline'
                        ? THeadline600
                        : componentName === 'THeadlineLarge'
                          ? THeadlineLarge600
                          : null;
      break;
    case 700:
      Component =
        componentName === 'TCaption'
          ? TCaption700
          : componentName === 'TBodySmall'
            ? TBodySmall700
            : componentName === 'TBody'
              ? TBody700
              : componentName === 'TBodyLarge'
                ? TBodyLarge700
                : componentName === 'TTitleSmall'
                  ? TTitleSmall700
                  : componentName === 'TTitle'
                    ? TTitle700
                    : componentName === 'TTitleLarge'
                      ? TTitleLarge700
                      : componentName === 'THeadline'
                        ? THeadline700
                        : componentName === 'THeadlineLarge'
                          ? THeadlineLarge700
                          : null;
      break;
    case 800:
      Component =
        componentName === 'TCaption'
          ? TCaption800
          : componentName === 'TBodySmall'
            ? TBodySmall800
            : componentName === 'TBody'
              ? TBody800
              : componentName === 'TBodyLarge'
                ? TBodyLarge800
                : componentName === 'TTitleSmall'
                  ? TTitleSmall800
                  : componentName === 'TTitle'
                    ? TTitle800
                    : componentName === 'TTitleLarge'
                      ? TTitleLarge800
                      : componentName === 'THeadline'
                        ? THeadline800
                        : componentName === 'THeadlineLarge'
                          ? THeadlineLarge800
                          : null;
      break;
    case 900:
      Component =
        componentName === 'TCaption'
          ? TCaption900
          : componentName === 'TBodySmall'
            ? TBodySmall900
            : componentName === 'TBody'
              ? TBody900
              : componentName === 'TBodyLarge'
                ? TBodyLarge900
                : componentName === 'TTitleSmall'
                  ? TTitleSmall900
                  : componentName === 'TTitle'
                    ? TTitle900
                    : componentName === 'TTitleLarge'
                      ? TTitleLarge900
                      : componentName === 'THeadline'
                        ? THeadline900
                        : componentName === 'THeadlineLarge'
                          ? THeadlineLarge900
                          : null;
      break;
    default:
      Component =
        componentName === 'TCaption'
          ? TCaption
          : componentName === 'TBodySmall'
            ? TBodySmall
            : componentName === 'TBody'
              ? TBody
              : componentName === 'TBodyLarge'
                ? TBodyLarge
                : componentName === 'TTitleSmall'
                  ? TTitleSmall
                  : componentName === 'TTitle'
                    ? TTitle
                    : componentName === 'TTitleLarge'
                      ? TTitleLarge
                      : componentName === 'THeadline'
                        ? THeadline
                        : componentName === 'THeadlineLarge'
                          ? THeadlineLarge
                          : null;
      break;
  }

  return Component ? (
    <Tooltip
      place='top-start'
      content={`<${componentName}${ifUndefined(fontWeight, '')}>...</${componentName}${ifUndefined(fontWeight, '')}>`}
    >
      <Component wordBreak='break-all'>{`<${componentName}${ifUndefined(fontWeight, '')}>`}</Component>
    </Tooltip>
  ) : null;
};
