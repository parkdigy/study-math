import { useDevFormControl } from '../FormControls';
import { Dev_FormOptionsOption, Dev_FormOptionsProps } from './Dev_FormOptions.types';
import { UseDevFormControlData } from '../FormControls/useDevFormControl';

export const useDevFormOptionMultiOptionControls = ({
  flatOptions,
  defaultData,
  optionProps,
  useCustomColor,
  useCustomBackgroundColor,
  useFormControlData,
}: {
  flatOptions: Dev_FormOptionsOption[];
  useFormControlData: UseDevFormControlData<any>;
} & Pick<Dev_FormOptionsProps, 'defaultData' | 'optionProps' | 'useCustomColor' | 'useCustomBackgroundColor'>) => {
  /********************************************************************************************************************
   * buttonVariant
   * ******************************************************************************************************************/
  const [buttonVariant, buttonVariantControl] = useDevFormControl(
    'buttonVariant',
    flatOptions.includes('buttonVariant'),
    defaultData?.buttonVariant,
    {
      ...useFormControlData,
      props: optionProps?.buttonVariant,
    }
  );

  /********************************************************************************************************************
   * iconButtonVariant
   * ******************************************************************************************************************/
  const [iconButtonVariant, iconButtonVariantControl] = useDevFormControl(
    'iconButtonVariant',
    flatOptions.includes('iconButtonVariant'),
    undefined,
    {
      ...useFormControlData,
      props: optionProps?.iconButtonVariant,
    }
  );

  /********************************************************************************************************************
   * alertType
   * ******************************************************************************************************************/
  const [alertType, alertTypeControl] = useDevFormControl(
    'alertType',
    flatOptions.includes('alertType'),
    defaultData?.alertType,
    {
      ...useFormControlData,
      props: optionProps?.alertType,
    }
  );

  /********************************************************************************************************************
   * color
   * ******************************************************************************************************************/
  const [color, colorControl] = useDevFormControl('color', flatOptions.includes('color'), defaultData?.color, {
    ...useFormControlData,
    props: useCustomColor ? { useCustomColor: true, ...optionProps?.color } : optionProps?.color,
  });

  /********************************************************************************************************************
   * backgroundColor
   * ******************************************************************************************************************/
  const [backgroundColor, backgroundColorControl] = useDevFormControl(
    'backgroundColor',
    flatOptions.includes('backgroundColor'),
    defaultData?.backgroundColor,
    {
      ...useFormControlData,
      props: useCustomBackgroundColor
        ? { useCustomColor: true, ...optionProps?.backgroundColor }
        : optionProps?.backgroundColor,
    }
  );

  /********************************************************************************************************************
   * size
   * ******************************************************************************************************************/
  const [size, sizeControl] = useDevFormControl('size', flatOptions.includes('size'), defaultData?.size, {
    ...useFormControlData,
    props: optionProps?.size,
  });

  /********************************************************************************************************************
   * fontWeight
   * ******************************************************************************************************************/
  const [fontWeight, fontWeightControl] = useDevFormControl(
    'fontWeight',
    flatOptions.includes('fontWeight'),
    defaultData?.fontWeight,
    {
      ...useFormControlData,
      props: optionProps?.fontWeight,
    }
  );

  /********************************************************************************************************************
   * tooltipPlace
   * ******************************************************************************************************************/
  const [tooltipPlace, tooltipPlaceControl] = useDevFormControl(
    'tooltipPlace',
    flatOptions.includes('tooltipPlace'),
    defaultData?.tooltipPlace,
    {
      ...useFormControlData,
      props: optionProps?.tooltipPlace,
    }
  );

  /********************************************************************************************************************
   * rotate
   * ******************************************************************************************************************/
  const [rotate, rotateControl] = useDevFormControl('rotate', flatOptions.includes('rotate'), defaultData?.rotate, {
    ...useFormControlData,
    props: optionProps?.rotate,
  });

  /********************************************************************************************************************
   * spacing
   * ******************************************************************************************************************/
  const [spacing, spacingControl] = useDevFormControl(
    'spacing',
    flatOptions.includes('spacing'),
    defaultData?.spacing,
    {
      ...useFormControlData,
      props: optionProps?.spacing,
    }
  );

  /********************************************************************************************************************
   * icon
   * ******************************************************************************************************************/
  const [icon, iconControl] = useDevFormControl('icon', flatOptions.includes('icon'), defaultData?.icon, {
    ...useFormControlData,
    props: optionProps?.icon,
  });

  /********************************************************************************************************************
   * iconPosition
   * ******************************************************************************************************************/
  const [iconPosition, iconPositionControl] = useDevFormControl(
    'iconPosition',
    flatOptions.includes('iconPosition'),
    defaultData?.iconPosition,
    {
      ...useFormControlData,
      props: optionProps?.iconPosition,
    }
  );

  /********************************************************************************************************************
   * iconSpacing
   * ******************************************************************************************************************/
  const [iconSpacing, iconSpacingControl] = useDevFormControl(
    'iconSpacing',
    flatOptions.includes('iconSpacing'),
    defaultData?.iconSpacing,
    {
      ...useFormControlData,
      props: optionProps?.iconSpacing,
    }
  );

  /********************************************************************************************************************
   * rows
   * ******************************************************************************************************************/
  const [rows, rowsControl] = useDevFormControl('rows', flatOptions.includes('rows'), defaultData?.rows, {
    ...useFormControlData,
    props: optionProps?.rows,
  });

  /********************************************************************************************************************
   * formCheckboxType
   * ******************************************************************************************************************/
  const [formCheckboxType, formCheckboxTypeControl] = useDevFormControl(
    'formCheckboxType',
    flatOptions.includes('formCheckboxType'),
    defaultData?.formCheckboxType,
    {
      ...useFormControlData,
      props: optionProps?.formCheckboxType,
    }
  );

  /********************************************************************************************************************
   * formRadioGroupType
   * ******************************************************************************************************************/
  const [formRadioGroupType, formRadioGroupTypeControl] = useDevFormControl(
    'formRadioGroupType',
    flatOptions.includes('formRadioGroupType'),
    defaultData?.formRadioGroupType,
    {
      ...useFormControlData,
      props: optionProps?.formRadioGroupType,
    }
  );

  /********************************************************************************************************************
   * formSelectSize
   * ******************************************************************************************************************/
  const [formSelectSize, formSelectSizeControl] = useDevFormControl(
    'formSelectSize',
    flatOptions.includes('formSelectSize'),
    defaultData?.formSelectSize,
    {
      ...useFormControlData,
      props: optionProps?.formSelectSize,
    }
  );

  /********************************************************************************************************************
   * currentPage
   * ******************************************************************************************************************/
  const [currentPage, currentPageControl] = useDevFormControl(
    'currentPage',
    flatOptions.includes('currentPage'),
    defaultData?.currentPage,
    {
      ...useFormControlData,
      props: optionProps?.currentPage,
    }
  );

  /********************************************************************************************************************
   * lastPage
   * ******************************************************************************************************************/
  const [lastPage, lastPageControl] = useDevFormControl(
    'lastPage',
    flatOptions.includes('lastPage'),
    defaultData?.lastPage,
    {
      ...useFormControlData,
      props: optionProps?.lastPage,
    }
  );

  /********************************************************************************************************************
   * listType
   * ******************************************************************************************************************/
  const [listType, listTypeControl] = useDevFormControl(
    'listType',
    flatOptions.includes('listType'),
    defaultData?.listType,
    {
      ...useFormControlData,
      props: optionProps?.listType,
    }
  );

  /********************************************************************************************************************
   * listVariant
   * ******************************************************************************************************************/
  const [listVariant, listVariantControl] = useDevFormControl(
    'listVariant',
    flatOptions.includes('listVariant'),
    defaultData?.listVariant,
    {
      ...useFormControlData,
      props: optionProps?.listVariant,
    }
  );

  /********************************************************************************************************************
   * chipVariant
   * ******************************************************************************************************************/
  const [chipVariant, chipVariantControl] = useDevFormControl(
    'chipVariant',
    flatOptions.includes('chipVariant'),
    defaultData?.chipVariant,
    {
      ...useFormControlData,
      props: optionProps?.chipVariant,
    }
  );

  /********************************************************************************************************************
   * Return
   * ******************************************************************************************************************/

  return {
    buttonVariant,
    buttonVariantControl,
    iconButtonVariant,
    iconButtonVariantControl,
    alertType,
    alertTypeControl,
    color,
    colorControl,
    backgroundColor,
    backgroundColorControl,
    size,
    sizeControl,
    fontWeight,
    fontWeightControl,
    tooltipPlace,
    tooltipPlaceControl,
    rotate,
    rotateControl,
    spacing,
    spacingControl,
    icon,
    iconControl,
    iconPosition,
    iconPositionControl,
    iconSpacing,
    iconSpacingControl,
    rows,
    rowsControl,
    formCheckboxType,
    formCheckboxTypeControl,
    formRadioGroupType,
    formRadioGroupTypeControl,
    formSelectSize,
    formSelectSizeControl,
    currentPage,
    currentPageControl,
    lastPage,
    lastPageControl,
    listType,
    listTypeControl,
    listVariant,
    listVariantControl,
    chipVariant,
    chipVariantControl,
  };
};
