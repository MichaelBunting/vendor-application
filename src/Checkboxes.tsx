import React, { useState } from 'react';

import { camelCase } from './helpers';

interface CheckboxesProps {
  name?: string;
  options: string[];
  checkboxRestrictions?(e: React.SyntheticEvent, checkedInputs: React.ReactNode[]): boolean;
}

export default function Checkboxes({ name = '', options, checkboxRestrictions }: CheckboxesProps) {
  const [checkedInputs, setCheckedInputs] = useState(new Map());
  const [checkboxValues, setCheckboxValues] = useState('');

  const handleCheckboxClick = (e: React.SyntheticEvent) => {
    const currentCheckedInputs = checkedInputs;
    const input = e.currentTarget as HTMLInputElement;

    if (input.checked) {
      if (!checkboxRestrictions) {
        currentCheckedInputs.set(input.value, input);
      } else if (checkboxRestrictions(e, [...checkedInputs.values()])) {
        currentCheckedInputs.set(input.value, input);
      }
    } else {
      currentCheckedInputs.delete(input.value);
    }

    const currentCheckboxValues = [...currentCheckedInputs.values()].map((inputElement: HTMLInputElement) => inputElement.value).join(', ');

    setCheckedInputs(currentCheckedInputs);
    setCheckboxValues(currentCheckboxValues);
  };

  return (
    <>
      <input type="hidden" name={name} value={checkboxValues} />
      {options.map((option) => {
        const sanitizedOption = option.replace(/[^A-z0-9\s()]|\(\w+\)+/g, '');
        const optionValue = camelCase(sanitizedOption);

        return (
          <label className="application__check-container" key={optionValue}>
            <input
              type="checkbox"
              className="application__check-input"
              value={optionValue}
              id={`${optionValue}Checkbox`}
              onClick={handleCheckboxClick}
            />
            <div className="application__check">
              <i className="fa fa-check application__check-icon" />
            </div>
            <span className="application__check-label">
              {option}
            </span>
          </label>
        );
      })}
    </>
  );
}
