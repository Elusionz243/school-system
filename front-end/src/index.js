/**
 * @Dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/**
 * @Elements
 */
import Layout from './components/Layout';

/**
 * @Styles
 */
import './index.css';

/**
 * Beginning of application
 * @returns {Root JSX Element}
 */
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);