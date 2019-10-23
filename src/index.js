import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.hydrate(
  <App title= "Track the Reg"/>,
  document.getElementById('mountNode'),
);