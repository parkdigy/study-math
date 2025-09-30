import { useDevFormControl } from '../FormControls';
import { Dev_FormOptionsOption, Dev_FormOptionsProps } from './Dev_FormOptions.types';
import { UseDevFormControlData } from '../FormControls/useDevFormControl';

export const useDevFormOptionBooleanControls = ({
  flatOptions,
  defaultData,
  optionProps,
  useFormControlData,
}: {
  flatOptions: Dev_FormOptionsOption[];
  useFormControlData: UseDevFormControlData<any>;
} & Pick<Dev_FormOptionsProps, 'defaultData' | 'optionProps'>) => {
  /********************************************************************************************************************
   * loading
   * ******************************************************************************************************************/
  const [loading, loadingControl] = useDevFormControl(
    'loading',
    flatOptions.includes('loading'),
    defaultData?.loading,
    {
      ...useFormControlData,
      props: optionProps?.loading,
    }
  );

  /********************************************************************************************************************
   * disabled
   * ******************************************************************************************************************/
  const [disabled, disabledControl] = useDevFormControl(
    'disabled',
    flatOptions.includes('disabled'),
    defaultData?.disabled,
    {
      ...useFormControlData,
      props: optionProps?.disabled,
    }
  );

  /********************************************************************************************************************
   * reverse
   * ******************************************************************************************************************/
  const [reverse, reverseControl] = useDevFormControl(
    'reverse',
    flatOptions.includes('reverse'),
    defaultData?.reverse,
    {
      ...useFormControlData,
      props: optionProps?.reverse,
    }
  );

  /********************************************************************************************************************
   * required
   * ******************************************************************************************************************/
  const [required, requiredControl] = useDevFormControl(
    'required',
    flatOptions.includes('required'),
    defaultData?.required,
    {
      ...useFormControlData,
      props: optionProps?.required,
    }
  );

  /********************************************************************************************************************
   * showIcon
   * ******************************************************************************************************************/
  const [showIcon, showIconControl] = useDevFormControl(
    'showIcon',
    flatOptions.includes('showIcon'),
    defaultData?.showIcon,
    {
      ...useFormControlData,
      props: optionProps?.showIcon,
    }
  );

  /********************************************************************************************************************
   * hideTitle
   * ******************************************************************************************************************/
  const [hideTitle, hideTitleControl] = useDevFormControl(
    'hideTitle',
    flatOptions.includes('hideTitle'),
    defaultData?.hideTitle,
    {
      ...useFormControlData,
      props: optionProps?.hideTitle,
    }
  );

  /********************************************************************************************************************
   * onRetry
   * ******************************************************************************************************************/
  const [onRetry, onRetryControl] = useDevFormControl(
    'onRetry',
    flatOptions.includes('onRetry'),
    defaultData?.onRetry,
    {
      ...useFormControlData,
      props: optionProps?.onRetry,
    }
  );

  /********************************************************************************************************************
   * subControl
   * ******************************************************************************************************************/
  const [subControl, subControlControl] = useDevFormControl(
    'subControl',
    flatOptions.includes('subControl'),
    defaultData?.subControl,
    {
      ...useFormControlData,
      props: optionProps?.subControl,
    }
  );

  /********************************************************************************************************************
   * rules
   * ******************************************************************************************************************/
  const [rules, rulesControl] = useDevFormControl('rules', flatOptions.includes('rules'), defaultData?.rules, {
    ...useFormControlData,
    props: optionProps?.rules,
  });

  /********************************************************************************************************************
   * clearable
   * ******************************************************************************************************************/
  const [clearable, clearableControl] = useDevFormControl(
    'clearable',
    flatOptions.includes('clearable'),
    defaultData?.clearable,
    {
      ...useFormControlData,
      props: optionProps?.clearable,
    }
  );

  /********************************************************************************************************************
   * searchable
   * ******************************************************************************************************************/
  const [searchable, searchableControl] = useDevFormControl(
    'searchable',
    flatOptions.includes('searchable'),
    defaultData?.searchable,
    {
      ...useFormControlData,
      props: optionProps?.searchable,
    }
  );

  /********************************************************************************************************************
   * Return
   * ******************************************************************************************************************/

  return {
    loading,
    loadingControl,
    disabled,
    disabledControl,
    reverse,
    reverseControl,
    required,
    requiredControl,
    showIcon,
    showIconControl,
    hideTitle,
    hideTitleControl,
    onRetry,
    onRetryControl,
    subControl,
    subControlControl,
    rules,
    rulesControl,
    clearable,
    clearableControl,
    searchable,
    searchableControl,
  };
};
