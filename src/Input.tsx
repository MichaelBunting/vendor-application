import React from 'react';

import InputWrapper from './InputWrapper';
import { capitalize } from './helpers';

interface InputProps {
  type?: string;
  label: string;
  name: string;
}

export default function Input({
  type = 'text',
  label,
  name,
}: InputProps) {
  const id = `application${capitalize(name)}`;

  return (
    <InputWrapper
      {...{ label, id }}
    >
      <input {...{ type, name, id }} className="application__input" />
    </InputWrapper>
  );
}
