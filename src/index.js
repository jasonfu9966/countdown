import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainForm from './MainForm';
import AppHeader from './header';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppHeader />, document.getElementById('head'));
ReactDOM.render(<MainForm />, document.getElementById('table'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();