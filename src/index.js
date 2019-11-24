import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Numbers from './numbers.js';
import Letters from './letters.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Numbers />, document.getElementById('numbers'));
ReactDOM.render(<Letters />, document.getElementById('letters'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();