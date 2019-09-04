import React, { useState } from 'react';

import InputWrapper from './InputWrapper';

export default function InputFile({ label = '' }: { label?: string }) {
  const name = 'priceList';
  const id = 'applicationPriceList';

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e: React.SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    setSelectedFile(input.files[0].name);
  };

  return (
    <InputWrapper {...{ label, name, id }}>
      <label htmlFor={id} className="application__file application__input">
        <input type="file" name={name} id={id} className="application__file-input" accept=".xls, .pdf" onChange={handleFileChange} />
        <span className="application__file-placeholder">
          {!selectedFile ? (
            'Choose File'
          ) : (
            selectedFile
          )}
        </span>
        <i className="fa fa-upload application__input-icon" />
      </label>
    </InputWrapper>
  );
}
