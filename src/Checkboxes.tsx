import React, { useState } from 'react';

import { camelCase } from './helpers';

interface CheckboxesProps {
  name?: string;
  options: string[];
  checkboxRestrictions?(e: React.SyntheticEvent, checkedInputs: React.ReactNode[]): boolean;
}

export default function Checkboxes({ name = '', options, checkboxRestrictions }: CheckboxesProps) {
  const [checkedInputs, setCheckedInputs] = useState(new Map());

  const handleCheckboxClick = (e: React.SyntheticEvent) => {
    if (!checkboxRestrictions) return;

    const currentCheckedInputs = checkedInputs;
    const input = e.currentTarget as HTMLInputElement;

    if (input.checked) {
      if (checkboxRestrictions(e, [...checkedInputs.values()])) {
        currentCheckedInputs.set(input.value, input);
      }
    } else {
      currentCheckedInputs.delete(input.value);
    }

    setCheckedInputs(currentCheckedInputs);
  };

  return (
    <>
      {options.map((option) => {
        const optionValue = camelCase(option);

        return (
          <label className="application__check-container" key={optionValue}>
            <input
              type="checkbox"
              className="application__check-input"
              name={name}
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
