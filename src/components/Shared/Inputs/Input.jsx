
/**
 * Input Component
 *
 * A reusable input component with customizable styles and attributes.
 *
 * @param {Object} props - The component's props.
 * @param {string} [props.style='style1'] - The style of the input.
 * @param {string} [props.className=''] - Additional CSS classes for the input.
 * @param {string} [props.id=''] - The HTML id attribute for the input.
 * @param {string} [props.name=''] - The HTML name attribute for the input.
 * @param {string} [props.value=''] - The value attribute for the input.
 * @param {function} [props.onChange=''] - The onChange event handler for the input.
 * @param {function} [props.onBlur=''] - The onBlur event handler for the input.
 * @param {Object} [props.rest={}] - Additional props to be spread onto the input element.
 * @param {ReactNode} [props.children=''] - The content to be displayed inside the input.
 *
 * @returns {ReactNode} The rendered input component.
 */
import React, { useRef } from 'react';
import searchIcon from '../../../assets/Icons/search.svg';
import plus from '../../../assets/Icons/plus.svg';
import minus from '../../../assets/Icons/minus.svg';
const styles = {
  primary: 'border border-label rounded-full text-primary2 placeholder-label text-sm leading-[1.375rem] font-nunito focus:border-primary4',
  secondary: 'border border-[#001E174d] rounded-full text-primary placeholder-primary text-sm leading-[1.375rem] font-nunito focus:border-primary4'
};
const labelStyle = {
  primary: 'text-primary1',
  secondary: 'text-primary',
}
const inputSize = {
  lg: 'py-3',
  md: 'py-2',
  sm: 'py-1'
}
const Input = ({
  style = 'primary',
  className = '',
  id = '',
  name = '',
  value,
  onChange,
  type = 'text',
  onBlur,
  rest = {},
  placeholder = '',
  size = 'md',
  label = '',
  error,
  min = 0,
  max
}) => {
  const quantityRef = useRef();
  const decrementHandler = () => {
    const current = Number(quantityRef.current.value);
    if (current > 0) {
      quantityRef.current.value = current - 1;
    }
  }
  const incrementHandler = () => {
    quantityRef.current.value = Number(quantityRef.current.value) + 1;
  }

  if (type === 'search') {
    return (
      <div className={`flex gap-2 items-center border px-4 border-label rounded-full ${className} ${inputSize[size]}`}>
        <img className={size === 'lg' ? 'h-6 w-6' : 'h-4 w-4'} src={searchIcon} alt="" />
        <input
          className={`text-label  focus:outline-none  `}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    );
  } else if (type === 'quantity') {
    return (
      <div className='flex flex-col'>
        <label className={`${labelStyle[style]} mb-1`} htmlFor={id}>{label}</label>

        <div className={`${styles[style]} ${className} ${inputSize[size]} px-6 ${error ? 'border-danger' : ''} flex items-center justify-between`} >
          <img className='cursor-pointer' onClick={() => decrementHandler(value)} src={minus} alt="" />
          <input
            className={` focus:outline-none w-full text-center`}
            ref={quantityRef}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            type={'number'}
            min={min}
            max={max}
            placeholder={placeholder}
            {...rest}
          />
          <img className='cursor-pointer' onClick={() => incrementHandler(value)} src={plus} alt="" />
        </div>
      </div>
    )
  } else {
    return (
      <div className='flex flex-col'>
        <label className={`${labelStyle[style]} mb-1`} htmlFor={id}>{label}</label>
        <input
          className={`${styles[style]} ${className} ${inputSize[size]} focus:outline-none px-6 ${error ? 'border-danger' : ''}`}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          min={min}
          max={max}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    );
  }
};

export default Input;

