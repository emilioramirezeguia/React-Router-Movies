import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } "react-router-dom";

import './index.css';
import App from './App';

ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root'));
