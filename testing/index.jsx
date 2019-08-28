import React from 'react';
import ReactDOM from 'react-dom';
import VendorApplication from '../src/index';
import './index.scss';

ReactDOM.render(
  <VendorApplication
    formPostUrl="https://localhost/testing/index"
  />,
  document.getElementById('mount'),
);
