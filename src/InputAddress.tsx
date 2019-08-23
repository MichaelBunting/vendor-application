import React, { useState } from 'react';

import InputWrapper from './InputWrapper';
import { capitalize } from './helpers';

export default function InputAddress({ label = '' }: { label?: string }) {
  const name = 'addressLine1';
  const id = `application${capitalize(name)}`;

  const [secondLineActive, setSecondLineActive] = useState(false);

  return (
    <InputWrapper
      {...{ label, name, id }}
    >
      <input type="text" id={id} name={name} className="application__input" />
      {secondLineActive && (
        <input type="text" id="applicationAddressLine2" name="addressLine2" className="application__input" />
      )}
      <button
        type="button"
        className="application__input-action"
        onClick={() => { setSecondLineActive(!secondLineActive); }}
      >
        {secondLineActive ? '- Remove second line' : '+ Add a second line'}
      </button>
    </InputWrapper>
  );
}
