import React from 'react';

import InputWrapper from './InputWrapper';
import { capitalize } from './helpers';
import useInputValidation from './useInputValidation';

interface InputProps {
  type?: string;
  label: string;
  name: string;
  required?: boolean;
}

export default function Input({
  type = 'text',
  label,
  name,
  required = true,
}: InputProps) {
  const inputValidator = (e: Event) => {
    const input = e.target as HTMLInputElement;

    if (input.value && input.value.replace(/\s/g, '')) {
      if (type === 'email') {
        if (/.+@(?:.+){2,}\.(?:.+){2,}/.test(input.value)) {
          return { success: true };
        }

        return { success: false, error: 'Invalid email address' };
      }
      return { success: true };
    }

    return { success: false, error: 'Input is required' };
  };

  const id = `application${capitalize(name)}`;
  let inputRef;
  let error;

  if (required) {
    [inputRef, error] = useInputValidation(inputValidator);
  }

  return (
    <InputWrapper
      {...{ label, id }}
    >
      <input {...{ type, name, id }} className="application__input" ref={inputRef} />
      {error && (
        <div className="application__form-error">
          {error}
        </div>
      )}
    </InputWrapper>
  );
}
