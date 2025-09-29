import { useDevFormControl } from '../FormControls';
import { Dev_FormOptionsOption, Dev_FormOptionsProps } from './Dev_FormOptions.types';
import { UseDevFormControlData } from '../FormControls/useDevFormControl';

export const useDevFormOptionTextControls = ({
  flatOptions,
  defaultData,
  optionProps,
  useFormControlData,
}: {
  flatOptions: Dev_FormOptionsOption[];
  useFormControlData: UseDevFormControlData<any>;
} & Pick<Dev_FormOptionsProps, 'defaultData' | 'optionProps'>) => {
  /********************************************************************************************************************
   * title
   * ******************************************************************************************************************/
  const [title, titleControl] = useDevFormControl('title', flatOptions.includes('title'), defaultData?.title, {
    ...useFormControlData,
    props: optionProps?.title,
  });

  /********************************************************************************************************************
   * placeholder
   * ******************************************************************************************************************/
  const [placeholder, placeholderControl] = useDevFormControl(
    'placeholder',
    flatOptions.includes('placeholder'),
    defaultData?.placeholder,
    {
      ...useFormControlData,
      props: optionProps?.placeholder,
    }
  );

  /********************************************************************************************************************
   * url
   * ******************************************************************************************************************/
  const [url, urlControl] = useDevFormControl('url', flatOptions.includes('url'), defaultData?.url, {
    ...useFormControlData,
    props: optionProps?.url,
  });

  /********************************************************************************************************************
   * message
   * ******************************************************************************************************************/
  const [message, messageControl] = useDevFormControl(
    'message',
    flatOptions.includes('message'),
    defaultData?.message,
    {
      ...useFormControlData,
      props: optionProps?.message,
    }
  );

  /********************************************************************************************************************
   * helperText
   * ******************************************************************************************************************/
  const [helperText, helperTextControl] = useDevFormControl(
    'helperText',
    flatOptions.includes('helperText'),
    defaultData?.helperText,
    {
      ...useFormControlData,
      props: optionProps?.helperText,
    }
  );

  /********************************************************************************************************************
   * label
   * ******************************************************************************************************************/
  const [label, labelControl] = useDevFormControl('label', flatOptions.includes('label'), defaultData?.label, {
    ...useFormControlData,
    props: optionProps?.label,
  });

  /********************************************************************************************************************
   * Return
   * ******************************************************************************************************************/

  return {
    title,
    titleControl,
    placeholder,
    placeholderControl,
    url,
    urlControl,
    message,
    messageControl,
    helperText,
    helperTextControl,
    label,
    labelControl,
  };
};
