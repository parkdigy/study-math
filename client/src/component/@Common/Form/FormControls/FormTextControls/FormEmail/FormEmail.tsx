import React from 'react';
import { FormEmailCommands, FormEmailProps as Props } from './FormEmail.types';
import { useForwardRef } from '@pdg/react-hook';
import { FormText, FormTextCommands } from '../FormText';
import { isEmail } from '@pdg/compare';

export const FormEmail = React.forwardRef<FormEmailCommands, Props>(
  ({ className, name, onValidate, invalidEmailErrorText = '올바른 이메일 형식이 아닙니다.', ...props }, ref) => {
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [textCommands, setTextCommands] = useState<FormTextCommands>();

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    const commands = useMemo<FormEmailCommands | null>(() => (textCommands ? textCommands : null), [textCommands]);

    useForwardRef(ref, commands);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleValidate = useCallback(
      (value: string) => {
        if (notEmpty(value) && !isEmail(value)) {
          return invalidEmailErrorText;
        }

        if (onValidate) {
          return onValidate(value);
        } else {
          return false;
        }
      },
      [invalidEmailErrorText, onValidate]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormText
        $custom
        $type='email'
        $commands={commands}
        type='text'
        inputMode='email'
        className={classnames(className, 'FormEmail')}
        name={name}
        preventKeys={/[\s]/g}
        onCommands={setTextCommands}
        onValidate={handleValidate}
        {...props}
      />
    );
  }
);

export default FormEmail;
