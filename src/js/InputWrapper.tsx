import React from 'react';

interface InputWrapperProps {
  label?: string;
  id?: string;
  type?: string;
  children: React.ReactNode;
}

export default function InputWrapper({
  label = '',
  id = '',
  type = '',
  children,
}: InputWrapperProps) {
  return (
    <div className={`application__form-container${type ? ` application__form-container--${type}` : ''}`}>
      <label htmlFor={id} className="application__label">{label}</label>
      <div className="application__input-container">
        {children}
      </div>
    </div>
  );
}
