import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


ReactDOM.hydrate(
  <App title= "Track the Reg"/>,
  document.getElementById('mountNode'),
);