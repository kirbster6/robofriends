import React from 'react'; //Core of the package that does DOM manipulation
import ReactDOM from 'react-dom/client'; //Used for the DOM/websites, but we can also use React native which would render to mobile applications.
import './index.css';
import App from './containers/App';
import 'tachyons';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
