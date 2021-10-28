import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App'
import 'tachyons';
// ^ Destructuring because robots doesn't export default

ReactDOM.render(
	// render WHAT
  <React.StrictMode>		
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  /* render WHERE ^. */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
