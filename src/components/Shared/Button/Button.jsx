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
  primary: ''
};

const Button = ({
  style = 'primary', // Default style to 'primary'
  className = '',
  children = '',
  onClick = ''
}) => {
  return (
    <button
      className={`${styles[style]} ${className}`} 
      onClick={onClick} 
    >
      {children}
    </button>
  );
};

export default Button;
