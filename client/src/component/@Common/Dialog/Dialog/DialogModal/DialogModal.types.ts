import { DialogInnerProps } from '../Dialog.types';

export interface DialogModalProps extends DialogInnerProps {
  onCancelClick: (props: DialogInnerProps) => void;
  onConfirmClick: (props: DialogInnerProps) => void;
  onRequestClose: (props: DialogInnerProps) => void;
}
