import React, { ChangeEvent } from 'react';
import { FormFileCommands, FormFileProps as Props } from './FormFile.types';
import { FormControlBase } from '../@common';
import { useAutoUpdateState, useFirstSkipEffect, useForwardRef, useRefState, useTimeoutRef } from '@pdg/react-hook';
import { koreanAppendRul } from '@pdg/korean';
import { useFormControlGroupState, useFormState } from '../../FormContext';
import './FormFile.scss';

export const FormFile = React.forwardRef<FormFileCommands, Props>(
  (
    {
      // FormFileProps
      placeholder,
      hideEmptyErrorText,
      maxFileSize,
      accept,
      onFocus,
      onBlur,
      // FormControlCommonProps
      className,
      name,
      title,
      required,
      disabled: initDisabled,
      error: initError = false,
      onChange,
      onErrorChange,
      // FormControlBaseProps
      ...formControlBaseProps
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const id = useId();
    const { disabled: formDisabled } = useFormState();
    const controlGroupState = useFormControlGroupState();

    /********************************************************************************************************************
     * Timeout
     * ******************************************************************************************************************/

    const [, setValidateTimeout] = useTimeoutRef();

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const innerRef = useRef<HTMLTextAreaElement>(null);
    const inputFileRef = useRef<HTMLInputElement>(null);

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [error, setError] = useAutoUpdateState(initError);
    const [isRequiredError, setIsRequiredError] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [fileValue, setFileValue] = useState('');
    const [fileRef, file, _setFile] = useRefState<File>();

    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/

    const disabled = initDisabled || formDisabled;

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useFirstSkipEffect(() => {
      onErrorChange?.(error);
      controlGroupState && controlGroupState.onErrorChange(name, error);
    }, [error]);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const focus = useCallback(() => {
      innerRef.current?.focus();
    }, []);

    const validate = useCallback(() => {
      let error: string | boolean = false;
      let isRequiredError = false;

      if (required && !fileRef.current) {
        isRequiredError = true;
        if (hideEmptyErrorText) {
          error = true;
        } else {
          if (notEmpty(title)) {
            error = `${koreanAppendRul(title)} 입력하지 않았습니다.`;
          } else {
            error = '필수 입력 항목입니다.';
          }
        }
      }

      if (error === false) {
        setError(false);
        setIsRequiredError(false);
        return true;
      } else {
        setError(error);
        setIsRequiredError(isRequiredError);
        return false;
      }
    }, [fileRef, hideEmptyErrorText, required, setError, title]);

    const getFile = useCallback(() => {
      return file;
    }, [file]);

    const setFile = useCallback(
      (newFile: File | undefined) => {
        _setFile(newFile);

        if (newFile === undefined) {
          setFileValue('');
        }

        onChange?.(newFile);

        if (error !== false) {
          if (isRequiredError && newFile) {
            setError(false);
            setIsRequiredError(false);
          } else {
            setValidateTimeout(() => {
              validate();
            }, 500);
          }
        }
      },
      [_setFile, error, isRequiredError, onChange, setError, setValidateTimeout, validate]
    );

    const clear = useCallback(() => {
      setFile(undefined);
    }, [setFile]);

    const fileSizeCheck = useCallback(
      (file: File | string) => {
        if (maxFileSize) {
          return new Promise<void>((resolve, reject) => {
            if (file instanceof File) {
              if (file.size > maxFileSize) {
                Dialog.openAlert({
                  title: '파일 사이즈 초과',
                  content: `${getFileSizeText(maxFileSize)} 이하의 파일만 사용 가능합니다.\n(선택한 파일 사이즈 : ${getFileSizeText(file.size)})`,
                });
                reject();
              } else {
                resolve();
              }
            } else {
              resolve();
            }
          });
        } else {
          return Promise.resolve();
        }
      },
      [maxFileSize]
    );

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    const commands = useMemo<FormFileCommands>(
      () => ({ focus, validate, setError, getFile, clear }),
      [clear, focus, getFile, setError, validate]
    );

    useForwardRef(ref, commands);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLButtonElement>) => {
        setIsFocus(true);
        onFocus?.(e);
      },
      [onFocus]
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLButtonElement>) => {
        setIsFocus(false);
        onBlur?.(e);
        if (error) {
          validate();
        }
      },
      [error, onBlur, validate]
    );

    const handleFileChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        const file = (target.files as FileList)[0];

        setFileValue(target.value);

        fileSizeCheck(file)
          .then(() => {
            setFile(file);
          })
          .catch(() => {
            setFile(undefined);
          });
      },
      [fileSizeCheck, setFile]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <FormControlBase
        className={classnames(className, 'FormFile')}
        type='file'
        name={name}
        commands={commands}
        title={title}
        error={error}
        required={required}
        disabled={disabled}
        gap={8}
        focused={isFocus}
        {...formControlBaseProps}
      >
        <div className='FormFile__Body'>
          <div
            className={classnames(
              'FormFile__Url',
              disabled && 'FormFile__Url-disabled',
              !file && 'FormFile__Url-placeholder',
              error !== false && 'FormFile__Url-error'
            )}
          >
            <div className='FormFile__Url__Text'>{file ? file.name : ifEmpty(placeholder, <>&nbsp;</>)}</div>
            {file && !disabled && (
              <div className='FormFile__Url__Clear' onClick={clear}>
                <Box width={22} height={22}>
                  <svg
                    focusable='false'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='gray'
                  >
                    <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
                  </svg>
                </Box>
              </div>
            )}
          </div>
          <div>
            <button
              type='button'
              className={classnames('FormFile__FileSelectButton', disabled && 'FormFile__FileSelectButton-disabled')}
              disabled={disabled}
              tabIndex={disabled ? -1 : 0}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <label htmlFor={id}>파일 선택</label>
            </button>
            <input
              ref={inputFileRef}
              type='file'
              accept={accept}
              id={id}
              name={name}
              disabled={disabled}
              value={fileValue}
              onChange={handleFileChange}
            />
          </div>
        </div>
      </FormControlBase>
    );
  }
);

export default FormFile;

/********************************************************************************************************************
 * getFileSizeText
 * ******************************************************************************************************************/
function getFileSizeText(bytes: number, dp = 1) {
  const thresh = 1024;

  if (Math.abs(bytes) < thresh) {
    return `${bytes} Byte`;
  }

  const units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    u += 1;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

  return `${bytes.toFixed(dp)} ${units[u]}`;
}
