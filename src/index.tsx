import React from 'react';

import Input from './Input';
import Select from './Select';
import InputAddress from './InputAddress';
import Checkboxes from './Checkboxes';
import InputFile from './InputFile';
import InputWrapper from './InputWrapper';

export default (): React.ReactElement => {
  const checkboxRestrictions = (e: React.SyntheticEvent, checkboxElements: React.ReactNode[]) => {
    const input = e.target as HTMLInputElement;

    if (input.checked && checkboxElements.length >= 3) {
      e.preventDefault();
      return false;
    }

    return true;
  };

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // const data = new FormData(e.currentTarget as HTMLFormElement);
  };

  return (
    <div className="application">
      <h1 className="application__header">Apply Now</h1>

      <form className="application__form" onSubmit={handleFormSubmit}>
        <div className="application__section application__section--inputs">
          <Input label="Contact Name" name="contactName" />
          <Input type="email" label="Email Address" name="email" />
          <Input label="Business Name" name="business" />
          <Input label="Website" name="website" required={false} />
          <Select
            label="Business Type"
            name="businessType"
            options={{
              Manufacturer: 'manufacturer',
              '3rd Party': '3rdparty',
              Foo: 'foo',
              Bar: 'bar',
            }}
          />
          <Input type="number" label="Phone Number" name="phone" />
          <InputAddress label="Address" />
          <Input type="number" label="Zip/Postal Code" name="zipcode" />
        </div>

        <div className="application__section application__section--checkboxes">
          <div className="application__section-heading">
            <h2 className="application__section-title">Primary Product Category(ies)</h2>
            <span className="application__section-subtitle">Select up to three</span>
          </div>

          <Checkboxes
            name="productCategories"
            options={[
              'Restaurant Equipment',
              'Concession & Food Truck Equipment',
              'Refrigeration Equipment',
              'Residential Kitchen Equipment',
              'Small Wares',
              'Storage & Transportation',
              'Tabletop & Serving',
              'Disposables',
              'Furniture',
              'Restaurant Dinnerware',
              'Food & Beverage',
              'Janitorial Supplies',
              'Chemical Products',
              'Office Products',
              'Industrial Supplies',
            ]}
            checkboxRestrictions={checkboxRestrictions}
          />
        </div>

        <div className="application__section application__section--checkboxes">
          <div className="application__section-heading">
            <h2 className="application__section-title">Product Certifications</h2>
          </div>


          <Checkboxes
            name="productCertifications"
            options={[
              'NSF International',
              'Underwriters Laboritory (UL)',
              'European Union (CE)',
              'Canadian Standards Association (CSA)',
              'Energy Star',
              'ETL Intertek',
              'Canadian Gas Association (CGA)',
              'NTEP',
              'ADA Compliant',
              'Plumbing and Drainage Institution (PDI)',
              'Green Seal Certified',
              'USGBC',
            ]}
          />
        </div>

        <div className="application__section application__section--inputs">
          <Select
            label="Product Country of Origin"
            name="countryOfOrigin"
            options={{
              'United States of America': 'USA',
              Australia: 'AU',
            }}
          />
          <Select
            label="Annual Sales"
            name="annualSales"
            options={{
              'Less Than $100,000': '<100k',
              '$100,000 - $500,000': '100k-500k',
              'Over $1,000,000': '>1m',
            }}
          />
          <InputFile label="Price List" />
          <Input type="number" label="SKU Count" name="skuCount" />
          <Select
            label="EDI Capability"
            name="ediCapability"
            options={{
              'EDI Compliant': 'compliant',
              'Not EDI Compliant': 'notCompliant',
            }}
          />
          <Input type="text" label="Image/Video Database" name="imgDatabase" />
          <InputWrapper label="Existing Customer Presence" id="applicationCustomerPresence" type="textarea">
            <textarea id="applicationCustomerPresence" rows={4} className="application__input application__input--textarea" name="customerPresence" />
          </InputWrapper>
        </div>

        <div className="application__section">
          <div>
            <button type="submit" className="application__submit">Apply to Sell</button>
          </div>
        </div>
      </form>
    </div>
  );
};
