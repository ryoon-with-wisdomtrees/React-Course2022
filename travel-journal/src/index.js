// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

/* https://github.com/reactwg/react-18/discussions/5
  참고해서 바꿈
  */

import React from "react";
import "./index.css";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
// Create a root.
const root = ReactDOMClient.createRoot(container);
root.render(<App />);
