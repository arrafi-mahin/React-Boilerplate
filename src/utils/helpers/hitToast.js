import { toast } from 'react-toastify';


/**
 * Display a toast notification with the specified message and variant.
 *
 * @param {string} message - The message to display in the toast notification.
 * @param {string} variant - The variant of the toast notification. Should be one of: 'info', 'success', 'warning', or 'error'.
 * @returns {void} - This function does not return a value.
 *
 * @throws {Error} If an invalid variant is provided, an error toast with the message 'Invalid Variant' will be displayed.
 * 
 * @example
 * // Basic usage:
 * import hitToast from "./Utils/helpers/hitToast";
 * 
 * hitToast('Hi there!','success');
 */
const hitToast = (message, variant) => {
    if (!['info', 'success', 'warning', 'error'].includes(variant)) return toast.error('Invalid Variant');
    return toast[variant](message);
};

export default hitToast;