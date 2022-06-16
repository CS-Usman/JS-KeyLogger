import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from './component/register';

import App from './component/app';

ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById('root')

)
