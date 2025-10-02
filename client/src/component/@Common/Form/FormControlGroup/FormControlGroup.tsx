import React from 'react';
import { FormControlGroupProps as Props } from './FormControlGroup.types';
import {
  FormControlContainer,
  FormControlContentContainer,
  FormErrorText,
  FormHelperText,
  FormTitle,
} from '../FormLayout';
import { useResizeDetector } from 'react-resize-detector';
import { FormControlGroupContextProvider, FormControlGroupContextValue, useFormState } from '../FormContext';

export const FormControlGroup = ({
  children,
  title,
  required,
  helperText,
  error = false,
  defaultErrorMessage,
  showControlError,
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { titlePosition } = useFormState();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [controlNames, setControlNames] = useState<string[]>([]);
  const [controlsError, setControlsError] = useState<Dict<string | boolean>>({});

  /********************************************************************************************************************
   * ResizeDetector
   * ******************************************************************************************************************/

  const { ref: childrenRef, height: childrenHeight } = useResizeDetector<HTMLDivElement>({
    handleWidth: false,
    handleHeight: titlePosition === 'left',
  });

  /********************************************************************************************************************
   * Context
   * ******************************************************************************************************************/

  const contextValue = useMemo<FormControlGroupContextValue>(
    () => ({
      addControl(name: string) {
        setControlNames((prev) => {
          if (prev.includes(name)) {
            return prev;
          } else {
            return [...prev, name];
          }
        });
      },
      removeControl(name: string) {
        setControlNames((prev) => prev.filter((v) => v !== name));
      },
      onErrorChange(name, error) {
        setControlsError((prev) => ({ ...prev, [name]: error }));
      },
    }),
    []
  );

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const isError = useMemo(() => {
    if (error === false) {
      return (
        keys(controlsError).find((controlName) => {
          if (controlNames.includes(controlName)) {
            return controlsError[controlName] !== false;
          } else {
            return false;
          }
        }) !== undefined
      );
    } else {
      return true;
    }
  }, [controlNames, controlsError, error]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <FormControlGroupContextProvider value={contextValue}>
      <FormControlContainer>
        {notEmpty(title) && (
          <FormTitle required={required} error={isError} height={titlePosition === 'left' ? childrenHeight : undefined}>
            {title}
          </FormTitle>
        )}
        <FormControlContentContainer>
          <Stack
            ref={titlePosition === 'left' ? childrenRef : undefined}
            row
            center
            fullWidth
            spacing={10}
            wrap
            relative
          >
            {children}
          </Stack>
          {notEmpty(helperText) && <FormHelperText>{helperText}</FormHelperText>}
          {isError && typeof error === 'string' && notEmpty(error) ? (
            <FormErrorText>{error}</FormErrorText>
          ) : (
            isError &&
            !showControlError &&
            notEmpty(defaultErrorMessage) && <FormErrorText>{defaultErrorMessage}</FormErrorText>
          )}
          {isError &&
            showControlError &&
            keys(controlsError).map((controlName, idx) => {
              if (controlNames.includes(controlName)) {
                const controlError = controlsError[controlName];
                if (typeof controlError === 'string' && notEmpty(controlError)) {
                  return <FormErrorText key={idx}>{controlError}</FormErrorText>;
                }
              }
            })}
        </FormControlContentContainer>
      </FormControlContainer>
    </FormControlGroupContextProvider>
  );
};

export default FormControlGroup;
