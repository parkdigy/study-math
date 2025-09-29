import React from 'react';
import {
  DialogAlertProps,
  DialogInnerCommands,
  DialogConfirmProps,
  DialogCommands,
  DialogOnlyProps,
  DialogInnerProps,
} from './Dialog.types';
import {
  __addRef,
  __open,
  __openAlert,
  __openConfirm,
  __openErrorAlert,
  __openSuccessAlert,
  __openWarningAlert,
  __removeRef,
  __setIsHiding,
} from './Dialog.function';
import { useLocation } from 'react-router';
import { DialogModal } from './sub';
import './Dialog.scss';

let dialogId = 0;

const Dialog = () => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const location = useLocation();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [dialogs, setDialogs] = useState<DialogInnerProps[]>([]);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    setDialogs([]);
  }, [location]);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commandClose = useCallback((id: number): void => {
    setDialogs((old) => {
      const foundProps = old.find((p) => p.id === id);
      if (foundProps) {
        if (!foundProps.hide) {
          foundProps.hide = true;
        }
        return old.filter((p) => p.id !== id);
      }
      return old;
    });
  }, []);

  const commandSetLoading = useCallback((id: number, loading: boolean) => {
    setDialogs((old) => {
      const foundProps = old.find((p) => p.id === id);
      if (foundProps) {
        if (!foundProps.hide && foundProps.loading !== loading) {
          foundProps.loading = loading;
          return [...old];
        }
      }
      return old;
    });
  }, []);

  const makeReturnCommands = useCallback(
    (id: number): DialogCommands => {
      return {
        close() {
          commandClose(id);
        },
        setLoading(loading: boolean) {
          commandSetLoading(id, loading);
        },
      };
    },
    [commandClose, commandSetLoading]
  );

  const commandOpen = useCallback(
    (props: DialogOnlyProps) => {
      dialogId += 1;
      setDialogs((old) => [...old, { ...props, type: 'dialog', id: dialogId, hide: false }]);
      return makeReturnCommands(dialogId);
    },
    [makeReturnCommands]
  );

  const commandOpenAlert = useCallback(
    (dialogProps: DialogAlertProps) => {
      dialogId += 1;
      setDialogs((old) => [
        ...old,
        {
          ...dialogProps,
          type: 'alert',
          id: dialogId,
          hide: false,
          minWidth: 300,
          autoHide: ifUndefined(dialogProps.autoHide, true),
        },
      ]);
      return makeReturnCommands(dialogId);
    },
    [makeReturnCommands]
  );

  const commandOpenSuccessAlert = useCallback(
    (dialogProps: DialogAlertProps) => {
      dialogId += 1;
      setDialogs((old) => [
        ...old,
        {
          ...dialogProps,
          type: 'alert',
          id: dialogId,
          hide: false,
          icon: 'CheckCircle',
          iconColor: 'success',
          confirmButtonColor: 'success',
          minWidth: 300,
          autoHide: ifUndefined(dialogProps.autoHide, true),
        },
      ]);
      return makeReturnCommands(dialogId);
    },
    [makeReturnCommands]
  );

  const commandOpenWarningAlert = useCallback(
    (dialogProps: DialogAlertProps) => {
      dialogId += 1;
      setDialogs((old) => [
        ...old,
        {
          ...dialogProps,
          type: 'alert',
          id: dialogId,
          hide: false,
          icon: 'Error',
          iconColor: 'warning',
          confirmButtonColor: 'warning',
          minWidth: 300,
          autoHide: ifUndefined(dialogProps.autoHide, true),
        },
      ]);
      return makeReturnCommands(dialogId);
    },
    [makeReturnCommands]
  );

  const commandOpenErrorAlert = useCallback(
    (dialogProps: DialogAlertProps) => {
      dialogId += 1;
      setDialogs((old) => [
        ...old,
        {
          ...dialogProps,
          type: 'alert',
          id: dialogId,
          hide: false,
          icon: 'Error',
          color: 'error',
          minWidth: 300,
          autoHide: ifUndefined(dialogProps.autoHide, true),
        },
      ]);
      return makeReturnCommands(dialogId);
    },
    [makeReturnCommands]
  );

  const commandOpenConfirm = useCallback(
    (dialogProps: DialogConfirmProps) => {
      dialogId += 1;
      setDialogs((old) => [
        ...old,
        {
          ...dialogProps,
          type: 'confirm',
          id: dialogId,
          hide: false,
          icon: 'Help',
          iconColor: 'opacity40',
          minWidth: 300,
          autoHide: ifUndefined(dialogProps.autoHide, false),
        },
      ]);
      return makeReturnCommands(dialogId);
    },
    [makeReturnCommands]
  );

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const ref = useRef<DialogInnerCommands>({
    open: commandOpen,
    openAlert: commandOpenAlert,
    openSuccessAlert: commandOpenSuccessAlert,
    openWarningAlert: commandOpenWarningAlert,
    openErrorAlert: commandOpenErrorAlert,
    openConfirm: commandOpenConfirm,
  });

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    __addRef(ref);
    return () => {
      __removeRef(ref);
      __setIsHiding(false);
    };
  }, []);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleCancelClick = useCallback(
    (dialogProps: DialogInnerProps) => {
      dialogProps.onCancel && dialogProps.onCancel();
      commandClose(dialogProps.id);
    },
    [commandClose]
  );

  const handleConfirmClick = useCallback(
    (dialogProps: DialogInnerProps) => {
      const autoHide = ifUndefined(dialogProps.autoHide, false);
      dialogProps.onConfirm && dialogProps.onConfirm();
      if (autoHide) {
        commandClose(dialogProps.id);
      }
    },
    [commandClose]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return dialogs.length === 0 ? null : (
    <>
      {dialogs.map((dialogProps, index) => {
        return (
          <DialogModal
            key={index}
            {...dialogProps}
            onCancelClick={handleCancelClick}
            onConfirmClick={handleConfirmClick}
            onRequestClose={() => {
              __setIsHiding(true);
              setDialogs((old) => [...old]);
            }}
          />
        );
      })}
    </>
  );
};

Dialog.open = __open;
Dialog.openAlert = __openAlert;
Dialog.openSuccessAlert = __openSuccessAlert;
Dialog.openWarningAlert = __openWarningAlert;
Dialog.openErrorAlert = __openErrorAlert;
Dialog.openConfirm = __openConfirm;

export default Dialog;
