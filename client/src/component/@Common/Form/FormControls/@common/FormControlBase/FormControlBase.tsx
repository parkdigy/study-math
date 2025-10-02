import React from 'react';
import { FormControlBaseProps as Props } from './FormControlBase.types';
import { useFormControlGroupState, useFormState } from '../../../FormContext';
import { useResizeDetector } from 'react-resize-detector';
import {
  FormControlContainer,
  FormControlContentContainer,
  FormErrorText,
  FormHelperText,
  FormTitle,
} from '../../../FormLayout';

export const FormControlBase = ({
  // FormControlCommonProps
  className,
  name,
  title,
  titleProps,
  titleWidth,
  hideTitle: initHideTitle,
  required,
  disabled,
  controlHelperText,
  helperText,
  error,
  hideError: initHideError,
  subControl,
  // FormControlBaseProps
  type,
  commands,
  spacing = 10,
  children,
  // BoxStyleProps
  ...boxStyleProps
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { hideTitle: formHideTitle, addControl, removeControl } = useFormState();
  const controlGroupState = useFormControlGroupState();
  const { titlePosition } = useFormState();

  /********************************************************************************************************************
   * ResizeDetector
   * ******************************************************************************************************************/

  const { ref: childrenRef, height: childrenHeight } = useResizeDetector<HTMLDivElement>({
    handleWidth: false,
    handleHeight: titlePosition === 'left',
  });

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    if (name) {
      addControl(type, name, commands);
      controlGroupState && controlGroupState.addControl(name);

      return () => {
        removeControl(name);
        controlGroupState && controlGroupState.removeControl(name);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, commands]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  // ll(type, name, childrenHeight);

  const hideTitle = initHideTitle || formHideTitle || !!controlGroupState;
  const hideError = initHideError || !!controlGroupState;

  return (
    <FormControlContainer className={classnames(className, 'FormControlBase')} gap={spacing} {...boxStyleProps}>
      {!hideTitle && notEmpty(title) && (
        <FormTitle
          labelProps={titleProps}
          height={titlePosition === 'left' ? childrenHeight : undefined}
          width={titleWidth}
          error={error !== false}
          required={required}
          disabled={disabled}
        >
          {title}
        </FormTitle>
      )}

      <FormControlContentContainer spacing={spacing}>
        <Stack
          className='FormControlBase-ControlContainer'
          ref={titlePosition === 'left' ? childrenRef : undefined}
          row
          center
          fullWidth
          spacing={10}
          relative
        >
          {children}
          {subControl}
        </Stack>
        {controlHelperText}
        {notEmpty(helperText) && <FormHelperText>{helperText}</FormHelperText>}
        {!hideError && typeof error === 'string' && notEmpty(error) && <FormErrorText>{error}</FormErrorText>}
      </FormControlContentContainer>
    </FormControlContainer>
  );
};

export default FormControlBase;
