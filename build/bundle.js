import React, { useState } from 'react';

function InputWrapper({
  label = '',
  id = '',
  type = '',
  children
}) {
  return React.createElement("div", {
    className: `application__form-container${type ? ` application__form-container--${type}` : ''}`
  }, React.createElement("label", {
    htmlFor: id,
    className: "application__label"
  }, label), React.createElement("div", {
    className: "application__input-container"
  }, children));
}

function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}
function camelCase(string) {
  return string.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Input({
  type = 'text',
  label,
  name
}) {
  const id = `application${capitalize(name)}`;
  return React.createElement(InputWrapper, {
    label,
    id
  }, React.createElement("input", _extends({
    type,
    name,
    id
  }, {
    className: "application__input"
  })));
}

function Select({
  label = '',
  name = '',
  options = {}
}) {
  const id = `application${capitalize(name)}`;
  return React.createElement(InputWrapper, {
    id,
    label
  }, React.createElement("select", {
    className: "application__input",
    id: id
  }, Object.keys(options).map(optionName => React.createElement("option", {
    key: optionName,
    value: options[optionName]
  }, optionName))), React.createElement("i", {
    className: "application__input-icon fa fa-caret-down"
  }));
}

function InputAddress({
  label = ''
}) {
  const name = 'addressLine1';
  const id = `application${capitalize(name)}`;
  const [secondLineActive, setSecondLineActive] = useState(false);
  return React.createElement(InputWrapper, {
    label,
    name,
    id
  }, React.createElement("input", {
    type: "text",
    id: id,
    name: name,
    className: "application__input"
  }), secondLineActive && React.createElement("input", {
    type: "text",
    id: "applicationAddressLine2",
    name: "addressLine2",
    className: "application__input"
  }), React.createElement("button", {
    type: "button",
    className: "application__input-action",
    onClick: () => {
      setSecondLineActive(!secondLineActive);
    }
  }, secondLineActive ? '- Remove second line' : '+ Add a second line'));
}

function Checkboxes({
  name = '',
  options,
  checkboxRestrictions
}) {
  const [checkedInputs, setCheckedInputs] = useState(new Map());

  const handleCheckboxClick = e => {
    if (!checkboxRestrictions) return;
    const currentCheckedInputs = checkedInputs;
    const input = e.currentTarget;

    if (input.checked) {
      if (checkboxRestrictions(e, [...checkedInputs.values()])) {
        currentCheckedInputs.set(input.value, input);
      }
    } else {
      currentCheckedInputs.delete(input.value);
    }

    setCheckedInputs(currentCheckedInputs);
  };

  return React.createElement(React.Fragment, null, options.map(option => {
    const optionValue = camelCase(option);
    return React.createElement("label", {
      className: "application__check-container",
      key: optionValue
    }, React.createElement("input", {
      type: "checkbox",
      className: "application__check-input",
      name: name,
      value: optionValue,
      id: `${optionValue}Checkbox`,
      onClick: handleCheckboxClick
    }), React.createElement("div", {
      className: "application__check"
    }, React.createElement("i", {
      className: "fa fa-check application__check-icon"
    })), React.createElement("span", {
      className: "application__check-label"
    }, option));
  }));
}

function InputFile({
  label = ''
}) {
  const name = 'priceList';
  const id = 'applicationPriceList';
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = e => {
    const input = e.target;
    setSelectedFile(input.files[0].name);
  };

  return React.createElement(InputWrapper, {
    label,
    name,
    id
  }, React.createElement("label", {
    htmlFor: id,
    className: "application__file application__input"
  }, React.createElement("input", {
    type: "file",
    name: name,
    id: id,
    className: "application__file-input",
    accept: ".xls, .pdf",
    onChange: handleFileChange
  }), React.createElement("span", {
    className: "application__file-placeholder"
  }, !selectedFile ? 'Choose File' : selectedFile), React.createElement("i", {
    className: "fa fa-upload application__input-icon"
  })));
}

var index = (() => {
  const checkboxRestrictions = (e, checkboxElements) => {
    const input = e.target;

    if (input.checked && checkboxElements.length >= 3) {
      e.preventDefault();
      return false;
    }

    return true;
  };

  return React.createElement("div", {
    className: "application"
  }, React.createElement("h1", {
    className: "application__header"
  }, "Apply Now"), React.createElement("form", {
    className: "application__form"
  }, React.createElement("div", {
    className: "application__section application__section--inputs"
  }, React.createElement(Input, {
    label: "Contact Name",
    name: "contactName"
  }), React.createElement(Input, {
    label: "Email Address",
    name: "email"
  }), React.createElement(Input, {
    label: "Business Name",
    name: "business"
  }), React.createElement(Input, {
    label: "Website",
    name: "website"
  }), React.createElement(Select, {
    label: "Business Type",
    name: "business",
    options: {
      Manufacturer: 'manufacturer',
      '3rd Party': '3rdparty',
      Foo: 'foo',
      Bar: 'bar'
    }
  }), React.createElement(Input, {
    type: "number",
    label: "Phone Number",
    name: "phone"
  }), React.createElement(InputAddress, {
    label: "Address"
  }), React.createElement(Input, {
    type: "number",
    label: "Zip/Postal Code",
    name: "zipcode"
  })), React.createElement("div", {
    className: "application__section application__section--checkboxes"
  }, React.createElement("div", {
    className: "application__section-heading"
  }, React.createElement("h2", {
    className: "application__section-title"
  }, "Primary Product Category(ies)"), React.createElement("span", {
    className: "application__section-subtitle"
  }, "Select up to three")), React.createElement(Checkboxes, {
    name: "productCategories",
    options: ['Restaurant Equipment', 'Concession & Food Truck Equipment', 'Refrigeration Equipment', 'Residential Kitchen Equipment', 'Small Wares', 'Storage & Transportation', 'Tabletop & Serving', 'Disposables', 'Furniture', 'Restaurant Dinnerware', 'Food & Beverage', 'Janitorial Supplies', 'Chemical Products', 'Office Products', 'Industrial Supplies'],
    checkboxRestrictions: checkboxRestrictions
  })), React.createElement("div", {
    className: "application__section application__section--checkboxes"
  }, React.createElement("div", {
    className: "application__section-heading"
  }, React.createElement("h2", {
    className: "application__section-title"
  }, "Product Certifications")), React.createElement(Checkboxes, {
    name: "productCertifications",
    options: ['NSF International', 'Underwriters Laboritory (UL)', 'European Union (CE)', 'Canadian Standards Association (CSA)', 'Energy Star', 'ETL Intertek', 'Canadian Gas Association (CGA)', 'NTEP', 'ADA Compliant', 'Plumbing and Drainage Institution (PDI)', 'Green Seal Certified', 'USGBC']
  })), React.createElement("div", {
    className: "application__section application__section--inputs"
  }, React.createElement(Select, {
    label: "Product Country of Origin",
    name: "countryOfOrigin",
    options: {
      'United States of America': 'USA',
      Australia: 'AU'
    }
  }), React.createElement(Select, {
    label: "Annual Sales",
    name: "annualSales",
    options: {
      'Less Than $100,000': '<100k',
      '$100,000 - $500,000': '100k-500k',
      'Over $1,000,000': '>1m'
    }
  }), React.createElement(InputFile, {
    label: "Price List"
  }), React.createElement(Input, {
    type: "number",
    label: "SKU Count",
    name: "skuCount"
  }), React.createElement(Select, {
    label: "EDI Capability",
    name: "ediCapability",
    options: {
      'EDI Compliant': 'compliant',
      'Not EDI Compliant': 'notCompliant'
    }
  }), React.createElement(Input, {
    type: "text",
    label: "Image/Video Database",
    name: "imgDatabase"
  }), React.createElement(InputWrapper, {
    label: "Existing Customer Presence",
    id: "applicationCustomerPresence",
    type: "textarea"
  }, React.createElement("textarea", {
    id: "applicationCustomerPresence",
    rows: 4,
    className: "application__input application__input--textarea"
  }))), React.createElement("div", {
    className: "application__section"
  }, React.createElement("div", null, React.createElement("button", {
    type: "submit",
    className: "application__submit"
  }, "Apply to Sell")))));
});

export default index;
