import React from 'react';
import { DialogModalProps as Props } from './DialogModal.types';
import Modal from 'react-modal';
import { ToastContainer } from '../../../../Toast';

export const DialogModal = ({ onCancelClick, onConfirmClick, onRequestClose, ...props }: Props) => {
  /********************************************************************************************************************
   * Props
   * ******************************************************************************************************************/

  const {
    type,
    color,
    icon: initIcon,
    iconColor: initIconColor,
    title: initTitle,
    content: initContent,
    contentColor,
    ph,
    pv,
    spacing,
    minWidth,
    maxWidth,
    reverseButtons,
    cancelLabel,
    cancelButtonColor,
    cancelButtonProps,
    confirmLabel,
    confirmButtonColor,
    confirmButtonProps,
    loading,
  } = props;

  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  let iconColor: IconProps['color'];
  let textColor: TProps['color'];
  let buttonColor: ButtonProps['color'];

  switch (color) {
    case 'primary':
    case 'secondary':
    case 'success':
    case 'warning':
    case 'error':
      iconColor = textColor = buttonColor = color;
      break;
    default:
      iconColor = textColor = color || theme.colors.text;
      buttonColor = 'primary';
      break;
  }

  const icon = initIcon ? (
    <Icon size={45} color={initIconColor || iconColor}>
      {initIcon}
    </Icon>
  ) : undefined;

  const title = initTitle ? (
    <div className='Dialog-title'>
      {icon}
      <T color={textColor} center>
        {initTitle}
      </T>
    </div>
  ) : null;

  const content = (
    <Box ph={ifUndefined(ph, 35)} pv={ifUndefined(pv, 30)}>
      {['string', 'number'].includes(typeof initContent) ? (
        <T center size={15} color={contentColor || textColor}>
          <pre>{initContent}</pre>
        </T>
      ) : (
        initContent
      )}
    </Box>
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Modal isOpen={true} portalClassName='Dialog' onRequestClose={() => onRequestClose(props)}>
      {type === undefined ? (
        <Stack center spacing={ifUndefined(spacing, 14)} minWidth={minWidth} maxWidth={maxWidth}>
          {title}
          {content}
        </Stack>
      ) : (
        <Stack center spacing={ifUndefined(spacing, 14)} minWidth={minWidth} maxWidth={maxWidth}>
          <Stack fullWidth>
            {title}
            {content}
            <Flex center row reverse={reverseButtons}>
              {type === 'confirm' && (
                <Box flex={1}>
                  <Button
                    {...cancelButtonProps}
                    fullWidth
                    height={45}
                    borderRadius={0}
                    disabled={loading}
                    color={ifUndefined(cancelButtonColor, 'opacity10')}
                    onClick={() => onCancelClick(props)}
                  >
                    {ifUndefined(cancelLabel, '취소')}
                  </Button>
                </Box>
              )}
              <Box flex={1}>
                <Button
                  {...confirmButtonProps}
                  fullWidth
                  height={45}
                  loading={loading}
                  borderRadius={0}
                  color={ifUndefined(confirmButtonColor, buttonColor)}
                  onClick={() => onConfirmClick(props)}
                >
                  {ifUndefined(confirmLabel, '확인')}
                </Button>
              </Box>
            </Flex>
          </Stack>
        </Stack>
      )}

      <Dialog />
      <ToastContainer />
    </Modal>
  );
};

export default DialogModal;
