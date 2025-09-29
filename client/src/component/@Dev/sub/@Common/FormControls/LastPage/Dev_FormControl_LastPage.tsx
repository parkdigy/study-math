import React from 'react';
import { Dev_FormControl_LastPageProps as Props } from './Dev_FormControl_LastPage.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_LastPage = ({ variant = 'select', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(
    () =>
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1000, 9999].map((v) => lv(`${v}`, v)),
    []
  );

  const radioItems = useMemo(() => {
    return [...selectItems];
  }, [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem title='마지막 페이지 (lastPage)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='lastPage' items={selectItems} {...props} />
      ) : (
        <FormRadioGroup name='lastPage' items={radioItems} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_LastPage);
