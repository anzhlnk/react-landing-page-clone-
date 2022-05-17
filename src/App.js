import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { imageHouse5, infoontheleft5, Section5 } from './fifthSection';
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
import {
  imageHouse4,
  infoontheright4,
  Section4,
  textandimg,
} from './forthSection';
import { imageHouse2, infoontheright, Section2 } from './secondSection';
import {
  imageHouse6,
  infoontheright6,
  Section6,
  textandimg6,
} from './sixthSection';
import { imageHouse3, infoontheleft2, Section3 } from './thirdSection';

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
            <p>Ultra-simple. Ultra-secure.</p>
            <div css={downloadButton}>
              <img src="/logo.webp" alt="logo" className="logoimage" />
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
        <span>
          <strong>Support</strong>
        </span>
      </button>
      {/* Section 2 */}
      <section2 css={Section2}>
        <div className="textandimg">
          <img src="/mobile-2.png" alt="houses 2" css={imageHouse2} />
          <div css={infoontheright}>
            <h2>Explore </h2>
            <p>
              Browse a list of curated, income-generating properties in top
              markets across the U.S. and diversify your portfolio.
            </p>
          </div>
        </div>
      </section2>
      {/* Section 3 */}
      <section3 css={Section3}>
        <div className="textandimg2">
          <div css={infoontheleft2}>
            <h2>Learn </h2>
            <p>
              Get all the details you need about a property to make informed
              decisions. Location information, financial data, disclosures,
              documents: it’s all there.
            </p>
          </div>
          <img src="/mobile-3.png" alt="houses 3" css={imageHouse3} />
        </div>
      </section3>
      {/* Section 4 */}
      <section4 css={Section4}>
        <div css={textandimg}>
          <img src="/mobile-4.png" alt="houses 2" css={imageHouse4} />
          <div css={infoontheright4}>
            <h2>Buy</h2>
            <p>
              Choose the number of shares you’d like in a property. Place your
              order. Did you just buy real estate in under five minutes? Yes,
              yes you did.
            </p>
          </div>
        </div>
      </section4>
      <section5 css={Section5}>
        <div className="textandimg5">
          <div css={infoontheleft5}>
            <h2>Manage</h2>
            <p>
              Check your shares and track your distributions all in one place.
              Leave behind the accounting struggles of traditional real estate
              for good.
            </p>
          </div>
          <img src="/mobile-5.png" alt="houses 5" css={imageHouse5} />
        </div>
      </section5>
      <section6 css={Section6}>
        <div css={textandimg6}>
          <img src="/mobile-6.png" alt="houses 6" css={imageHouse6} />
          <div css={infoontheright6}>
            <h2>Enjoy</h2>
            <p>
              Watch your wallet grow. Best of all, it’s hassle-free and
              fee-free. Welcome to the future of real estate investing.
            </p>
          </div>
        </div>
      </section6>
    </div>
  );
}

export default App;
