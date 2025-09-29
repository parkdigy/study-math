import React from 'react';
import { FormUrlCommands, FormUrlProps as Props } from './FormUrl.types';
import { useForwardRef } from '@pdg/react-hook';
import { FormText, FormTextCommands } from '../FormText';
import { isUrl } from '@pdg/compare';

export const FormUrl = React.forwardRef<FormUrlCommands, Props>(({ className, name, onValidate, ...props }, ref) => {
  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [textCommands, setTextCommands] = useState<FormTextCommands>();

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo<FormUrlCommands | null>(() => (textCommands ? textCommands : null), [textCommands]);

  useForwardRef(ref, commands);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleValidate = useCallback(
    (value: string) => {
      if (notEmpty(value) && !isUrl(value)) {
        return '올바른 URL 형식이 아닙니다.';
      }

      if (onValidate) {
        return onValidate(value);
      } else {
        return false;
      }
    },
    [onValidate]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <FormText
      $custom
      $type='url'
      $commands={commands}
      type='url'
      className={classnames(className, 'FormUrl')}
      name={name}
      preventKeys={/[\s]/}
      onCommands={setTextCommands}
      onValidate={handleValidate}
      {...props}
    />
  );
});

export default FormUrl;
