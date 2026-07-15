import { enqueueSnackbar } from 'notistack';

export default function useToast() {
  const toastMsg = ({
    message,
    variant,
    duration = 2500,
    top = true,
    right = true
  }) => {
    // Return the enqueueSnackbar function
    return enqueueSnackbar(message, {
      autoHideDuration: duration,
      variant,
      anchorOrigin: {
        vertical: top ? 'top' : 'bottom',
        horizontal: right ? 'right' : 'left'
      }
    });
  };

  return toastMsg;
}
