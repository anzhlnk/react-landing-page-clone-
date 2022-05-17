import './index.css';
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          background-color: #f7f7f7;
          margin: 0;
          font-family: 'Lato', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          width: 100%;
          color: #25252d;
          h2 {
            font-size: 36px;
          }
          p {
            font-size: 16px;
            letter-spacing: 0.5px;
            color: #171718;
            font-weight: 300;
          }
        }
        * ::before,
        ::after {
          box-sizing: border-box;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
