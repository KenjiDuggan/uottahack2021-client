import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import { Router as BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './store/index';
import history from './history';
 
render(
  <Provider store={store}>
    <BrowserRouter  history={history} >
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
