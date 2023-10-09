import React from 'react';

/**
 * Button Component
 *
 * A reusable button component with customizable styles and click event handling.
 *
 * @param {Object} props - The component's props.
 * @param {string} [props.style='primary'] - The style of the button.
 * @param {string} [props.className=''] - Additional CSS classes for the button.
 * @param {ReactNode} [props.children=''] - The content to be displayed inside the button.
 * @param {function} [props.onClick=''] - The onClick event handler for the button.
 *
 * @returns {ReactNode} The rendered button component.
 */

const styles = {
  primary: 'bg-primary2 text-white py-3 px-4 w-full font-nunito font-bold text-base',
  secondary: 'bg-primary2 text-white py-2 px-4 w-full font-nunito font-bold',
  small: 'bg-primary2 text-white py-1 px-4 w-full font-nunito font-normal',
  outline: 'border border-primary rounded-full py-2 px-4 text-base font-semibold text-primary font-nunito w-full',
};

const Button = ({
  style = 'primary', // Default style to 'primary'
  className = '',
  type = 'button',
  children = '',
  onClick
}) => {
  return (
    <button
      className={`${styles[style]} ${className} rounded-full`}
      onClick={onClick} type={type}
    >
      {children}
    </button>
  );
};

export default Button;
