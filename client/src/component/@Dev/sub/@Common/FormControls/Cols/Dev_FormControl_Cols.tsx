import React from 'react';
import { Dev_FormControl_ColsProps as Props } from './Dev_FormControl_Cols.types';
import { FormCheckbox, FormRadioGroup, FormSelect, GridCols } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';
import { ScreenAlias, ScreenAliases } from '@theme';

const _selectColsItems: Lv<string, GridCols>[] = new Array(12).fill(0).map((_, i) => lv(`${i + 1}개`, i + 1));

const _radioGroupColsItems: Lv<string, GridCols>[] = new Array(12).fill(0).map((_, i) => lv(`${i + 1}개`, i + 1));
_radioGroupColsItems.unshift(lv('미지정(12개)', undefined));

export const Dev_FormControl_Cols = ({
  disabled,
  useResponsive,
  cols,
  responsiveCols,
  onChangeUseResponsive,
  onChangeCols,
  onChangeResponsiveCols,
}: Props) => {
  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  let colsOfSize: GridCols = 1;

  return (
    <Dev_PanelItem icon='ViewColumn' title='컬럼 수 (cols)' mt={-5}>
      <FormCheckbox
        name='isResponsiveCols'
        label='반응형 컬럼 수 사용'
        disabled={disabled}
        checked={useResponsive}
        onChange={onChangeUseResponsive}
        mb={3}
      />

      {useResponsive ? (
        <Grid cols={{ mobileSm: 2, mobileMd: 3, mobileLg: 4, tabletSm: 5, tabletMd: 7, desktopSm: 9 }} spacing={10}>
          {(Object.keys(ScreenAliases) as ScreenAlias[]).map((screen, idx) => {
            if (responsiveCols[screen] !== undefined) {
              colsOfSize = responsiveCols[screen];
            }
            return (
              <Col key={idx}>
                <FormSelect
                  title={`${screen}`}
                  placeholder={`${colsOfSize}개`}
                  name={screen}
                  items={_selectColsItems}
                  clearable
                  disabled={disabled}
                  value={responsiveCols[screen]}
                  onChange={(v) => onChangeResponsiveCols({ ...responsiveCols, [screen]: v })}
                />
              </Col>
            );
          })}
        </Grid>
      ) : (
        <FormRadioGroup
          name='cols'
          disabled={disabled}
          items={_radioGroupColsItems}
          value={cols}
          onChange={onChangeCols}
        />
      )}
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_Cols);
