import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  downloadButton,
  heroStyles,
  imageHouse,
  logo,
  navigationMenu1,
  navigationMenu2,
  navigationParent,
  supportButton,
  wrapperStyles,
} from './firstSection';

function App() {
  return (
    <div className="App">
      <div css={heroStyles}>
        <nav css={navigationParent}>
          <div css={navigationMenu1}>
            <a href="https://www.ark7.com/">
              <span css={logo}>ARK7</span>
            </a>
            <a href="https://www.ark7.com/app?ref=landingfolio#:~:text=About,-App">
              About
            </a>
            <a href="https://www.ark7.com/app?ref=landingfolio#:~:text=About-,App,-FAQ">
              App
            </a>
            <a href="https://www.ark7.com/app?ref=landingfolio#:~:text=App-,FAQ,-Login">
              FAQ
            </a>
          </div>
          <div css={navigationMenu2}>
            <a href="https://www.ark7.com/app?ref=landingfolio#:~:text=FAQ-,Login,-Sign%20Up">
              Login
            </a>
            <a
              href="https://www.ark7.com/app?ref=landingfolio#:~:text=Login-,Sign%20Up,-A%20New%20Way"
              className="signUp"
            >
              Sign Up
            </a>
          </div>
        </nav>
        <div css={wrapperStyles}>
          <div className="infoontheleft">
            <h1>A New Way to Invest in Real Estate </h1>
            <h2>Ultra-simple. Ultra-secure.</h2>
            <div css={downloadButton}>
              <img src="/logo.webp" alt="logo" className="logo" />
              <a href="https://www.ark7.com/app?ref=landingfolio#:~:text=simple.%20Ultra%2Dsecure.-,Get%20the%20App,-Explore">
                Get the App
              </a>
            </div>
          </div>
          <img src="/mobile-1.png" css={imageHouse} alt="a house" />
        </div>
      </div>
      <button css={supportButton}>
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          <g id="Layer_4">
            <path d="M11,12.3V13c0,0-1.8,0-2,0v-0.6c0-0.6,0.1-1.4,0.8-2.1c0.7-0.7,1.6-1.2,1.6-2.1c0-0.9-0.7-1.4-1.4-1.4 c-1.3,0-1.4,1.4-1.5,1.7H6.6C6.6,7.1,7.2,5,10,5c2.4,0,3.4,1.6,3.4,3C13.4,10.4,11,10.8,11,12.3z" />
            <circle cx="10" cy="15" r="1" />
            <path d="M10,2c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S5.6,2,10,2 M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0 L10,0z" />
          </g>
        </svg>
        <span>Support</span>
      </button>
    </div>
  );
}

export default App;
