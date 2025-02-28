import React from 'react';
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
  name?: string;
  required?: boolean;
  placeholder?: string;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  id,
  type = InputType.TEXT,
  value,
  onChange,
  name,
  required = false,
  placeholder,
}) => {
  return (
    <div className="floating-input-container">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="floating-input"
        placeholder=""
      />
      <label htmlFor={id} className="floating-label">
        {label}
      </label>

      {type == InputType.PASSWORD && <img className='toggle-password' src={Eye} alt="toggle" />}
    </div>
  );
};

export default FloatingLabelInput;
