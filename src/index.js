import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import RootApp from './RootApp';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <RootApp />
  </Router>
)
