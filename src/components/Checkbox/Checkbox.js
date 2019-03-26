import React from 'react';
// import './checkbox.scss';

const CheckBox = ({
  value,
  className = '',
  checked,
  onClick,
  label = '',
  id,
  disabled,
}) => (
  <div className={`checkbox checkbox-primary ${checked ? 'checked' : ''}`}>
    <input
      value={value}
      type="checkbox"
      id={`checkbox-${id}`}
      // checked={checked}
      disabled={disabled}
      onClick={onClick}
      className={className}
      autoCorrect="off"
      autoCapitalize="off"
      autoComplete="off"
    />
    <label htmlFor={`checkbox-${id}`}>{label}</label>
  </div>
);

export default CheckBox;
