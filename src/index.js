import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter  as Router } from 'react-router-dom'; // Import HashRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Router basename="/FYP-24-S3-30-team-website"> Enable this if this was a subpages of a website*/}
  <Router>
      <App />
    </Router>
  </React.StrictMode>
);
