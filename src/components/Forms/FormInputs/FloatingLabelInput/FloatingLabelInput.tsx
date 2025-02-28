import React, { useState } from 'react';
import './FloatingLabelInput.scss';
import Eye from '../../../../assets/images/icons/eye.svg';

export enum InputType {
  TEXT = 'text',
  EMAIL = 'email',
  PASSWORD = 'password',
  NUMBER = 'number',
}

interface FloatingLabelInputProps {
  label: string;
  id: string;
  type?: InputType;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
  placeholder?: string;
  error?: any;
  errorMessage?: string;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> =React.memo(({
  label,
  id,
  type = InputType.TEXT,
  value,
  onChange,
  name,
  required = false,
  onBlur,
  placeholder,
  error,
  errorMessage,
}) => {
  // State for password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="floating-input-container">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onBlur={onBlur}
        className="floating-input"
        placeholder=""
      />
      <label htmlFor={id} className="floating-label">
        {label}
      </label>

      {type == InputType.PASSWORD && (
        <img
          className="toggle-password"
          src={Eye}
          alt={isPasswordVisible ? 'Hide password' : 'Show password'}
          onClick={togglePasswordVisibility}
        />
      )}
      {error && errorMessage && (
        <p className="text-danger small">{errorMessage}</p>
      )}
    </div>
  );
});

export default FloatingLabelInput;
