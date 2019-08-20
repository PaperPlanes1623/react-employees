import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root'));


