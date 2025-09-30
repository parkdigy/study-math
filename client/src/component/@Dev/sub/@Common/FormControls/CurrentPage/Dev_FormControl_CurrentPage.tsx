import React from 'react';
import { Dev_FormControl_CurrentPageProps as Props } from './Dev_FormControl_CurrentPage.types';
import { FormRadioGroup, FormSelect } from '@ccomp';
import { Dev_PanelItem } from '../../Layout';

export const Dev_FormControl_CurrentPage = ({ variant = 'select', ...props }: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const selectItems = useMemo(
    () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 50, 97, 98, 99, 100, 998, 999, 1000, 9999].map((v) => lv(`${v}`, v)),
    []
  );

  const radioItems = useMemo(() => {
    return [...selectItems];
  }, [selectItems]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dev_PanelItem title='현제 페이지 (currentPage)' mt={-5}>
      {variant === 'select' ? (
        <FormSelect name='currentPage' items={selectItems} {...props} />
      ) : (
        <FormRadioGroup type='smallButton' name='currentPage' items={radioItems} {...props} />
      )}
    </Dev_PanelItem>
  );
};

export default React.memo(Dev_FormControl_CurrentPage);
