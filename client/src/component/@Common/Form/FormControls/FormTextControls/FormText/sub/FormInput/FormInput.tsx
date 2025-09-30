import React from 'react';
import { FormInputProps as Props } from './FormInput.types';
import { ClearButton } from './sub';
import './FormInput.scss';

export const FormInput = React.forwardRef<HTMLInputElement, Props>(
  ({ error, onFocus, onBlur, endAdornment, clear, disabled, onClearClick, ...props }, ref) => {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [isFocus, setIsFocus] = useState(false);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocus(true);
        onFocus?.(e);
      },
      [onFocus]
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocus(false);
        onBlur?.(e);
      },
      [onBlur]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <div className={classnames('FormInput')} data-disabled={disabled} data-error={error} data-focused={isFocus}>
        <input ref={ref} disabled={disabled} onFocus={handleFocus} onBlur={handleBlur} {...props} />
        <Stack className='FormInput-right' row center>
          {clear && <ClearButton onClick={onClearClick} />}
          {endAdornment}
        </Stack>
      </div>
    );
  }
);

export default React.memo(FormInput) as typeof FormInput;
