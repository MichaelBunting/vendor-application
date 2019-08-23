import React from 'react';

import InputWrapper from './InputWrapper';
import { capitalize } from './helpers';

interface SelectProps {
  label?: string;
  name: string;
  options?: { [key: string]: string };
}

export default function Select({ label = '', name = '', options = {} }: SelectProps) {
  const id = `application${capitalize(name)}`;

  return (
    <InputWrapper
      {...{ id, label }}
    >
      <select className="application__input" id={id}>
        {Object.keys(options).map((optionName) => (
          <option key={optionName} value={options[optionName]}>
            {optionName}
          </option>
        ))}
      </select>
      <i className="application__input-icon fa fa-caret-down" />
    </InputWrapper>
  );
}
