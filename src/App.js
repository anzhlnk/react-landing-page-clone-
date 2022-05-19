import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { imageHouse5, sectionFive, textSectionFive } from './fifthSection';
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
  copyRight,
  featureImg,
  footer,
  footerText,
  grid,
  lineStyle,
  social,
} from './footer.js';
import {
  bcImage,
  contentSectionFour,
  imageHouse4,
  sectionFour,
  textSectionFour,
} from './forthSection';
import { imageHouse2, sectionTwo, textSectionTwo } from './secondSection';
import {
  contentSectionSix,
  downloadApp,
  downloadButtonSectionSix,
  imageHouse6,
  sectionSix,
  textSectionSix,
} from './sixthSection';
import { imageHouse3, sectionThree, textSectionThree } from './thirdSection';

function App() {
  return (
    <div className="App">
      <div css={heroStyles}>
        <nav css={navigationParent}>
          <div css={navigationMenu1}>
            <a href="https://www.ark7.com/">
              <span css={logo}>ARK7</span>
            </a>
            <a
              href="https://www.ark7.com/app?ref=landingfolio#:~:text=About,-App"
              className="navigationList"
            >
              About
            </a>
            <a
              href="https://www.ark7.com/app?ref=landingfolio#:~:text=About-,App,-FAQ"
              className="navigationList"
            >
              App
            </a>
            <a
              href="https://www.ark7.com/app?ref=landingfolio#:~:text=App-,FAQ,-Login"
              className="navigationList"
            >
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
          <div className="textSectionOne">
            <h1>A New Way to Invest in Real Estate </h1>
            <p>Ultra-simple. Ultra-secure.</p>
            <div css={downloadButton}>
              <img src="/logo.webp" alt="logo" className="logoImage" />
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
      <section2 css={sectionTwo}>
        <div className="content">
          <img src="/mobile-2.png" alt="houses 2" css={imageHouse2} />
          <div css={textSectionTwo}>
            <h2>Explore </h2>
            <p>
              Browse a list of curated, income-generating properties in top
              markets across the U.S. and diversify your portfolio.
            </p>
          </div>
        </div>
      </section2>
      {/* Section 3 */}
      <section3 css={sectionThree}>
        <div className="contentSectionThree">
          <div css={textSectionThree}>
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
      <section4 css={sectionFour}>
        <div css={bcImage}>
          <div css={contentSectionFour}>
            <img src="/mobile-4.png" alt="houses 2" css={imageHouse4} />
            <div css={textSectionFour}>
              <h2>Buy</h2>
              <p>
                Choose the number of shares you’d like in a property. Place your
                order. Did you just buy real estate in under five minutes? Yes,
                yes you did.
              </p>
            </div>
          </div>
        </div>
      </section4>
      <section5 css={sectionFive}>
        <div className="contentSectionFive">
          <div css={textSectionFive}>
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
      <section6 css={sectionSix}>
        <div className="contentSectionSix">
          <div css={contentSectionSix}>
            <img src="/mobile-6.png" alt="houses 6" css={imageHouse6} />
            <div css={textSectionSix}>
              <h2>Enjoy</h2>
              <p>
                Watch your wallet grow. Best of all, it’s hassle-free and
                fee-free. Welcome to the future of real estate investing.
              </p>
            </div>
          </div>
          <div css={downloadApp}>
            <p>Start Diversifying Today </p>
            <span> Now available on iOS</span>
            <div css={downloadButtonSectionSix}>
              <img
                src="/logo.webp"
                alt="logo"
                className="logoImageSectionSix"
              />
              <a href="https://www.ark7.com/app?ref=landingfolio#:~:text=simple.%20Ultra%2Dsecure.-,Get%20the%20App,-Explore">
                Get the App
              </a>
            </div>
          </div>
        </div>
      </section6>
      <footer css={footer}>
        <div className="content">
          <div css={social}>
            <a href="https://www.linkedin.com/company/ark7official">
              <svg
                role="img"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin"
                className="svg-inline--fa fa-linkedin fa-w-14 fa-fw"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </a>
            <a href="https://www.facebook.com/Ark7Official">
              <svg
                role="img"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-square"
                className="svg-inline--fa fa-facebook-square fa-w-14 fa-fw"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"
                />
              </svg>
            </a>
            <a href="https://twitter.com/Ark7Official">
              <svg
                role="img"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter-square"
                className="svg-inline--fa fa-twitter-square fa-w-14 fa-fw"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
                />
              </svg>
            </a>
          </div>
          <div css={featureImg}>
            <img src="/featured.svg" alt="featured" />
          </div>
          <div css={grid}>
            <p>NEW</p>
            <p>SUPPORT</p>
            <p>LEGAL</p>
            <a href="https://www.ark7.com/app?ref=landingfolio#:~:text=NEW-,APP,-IRA">
              <span>APP</span>
            </a>
            <a href="https://www.ark7.com/app?ref=landingfolio#:~:text=SUPPORT-,FAQ,-Step%2Dby%2Dstep">
              <span>FAQ</span>
            </a>
            <a href="https://www.ark7.com/app?ref=landingfolio#:~:text=LEGAL-,SEC%20Filings,-Terms%20%26%20Conditions">
              <span>SEC Filing</span>
            </a>
            <a href="https://www.ark7.com/app?ref=landingfolio#:~:text=APP-,IRA,-SUPPORT">
              <span>IRA</span>
            </a>
            <a href="https://www.ark7.com/app?ref=landingfolio#:~:text=Step%2Dby%2Dstep%20Instructions">
              <span>Step-by-step Instruction</span>
            </a>
            <a href="https://www.ark7.com/app?ref=landingfolio#:~:text=SEC%20Filings-,Terms%20%26%20Conditions,-Privacy%20Policy">
              <span>Terms & Conditions</span>
            </a>
            <span> </span>
            <a href="https://www.ark7.com/app?ref=landingfolio#:~:text=by%2Dstep%20Instructions-,Contact,-LEGAL">
              <span>Contact</span>
            </a>
            <a href="https://www.ark7.com/app?ref=landingfolio#:~:text=Terms%20%26%20Conditions-,Privacy%20Policy,-Important%20Messages">
              <span>Privacy Policy</span>
            </a>
          </div>
          <hr css={lineStyle} />
          <div css={footerText}>
            <p>Important Messages</p>
            <p>
              Ark7 Properties LLC is a wholly-owned subsidiary of Ark7 Inc.
              ("Ark7") located at 535 Mission Street, 14th Floor, San Francisco,
              CA 94105. Ark7 operates the www.ark7.com website and is not a
              broker-dealer or investment advisor. Only Accredited Investors as
              such term is defined by the Securities and Exchange Commission can
              invest in an offering circular through Ark7.
            </p>
            <p>
              Past performance is no guarantee of future results. Any historical
              returns, expected returns or probability projections may not
              reflect actual future performance. All securities involve risk and
              may result in partial or total loss. Investors of Ark7 understand
              and acknowledge 1) that investing in real estates, like investing
              in other fields, is risky and unpredictable; 2) that the real
              estate industry has its ups and downs; 3) that the real property
              you invest in might not result in a positive cash flow or perform
              as you expected; and 4) that the value of any real property you
              invest in may decline at any time and the future property value is
              unpredictable. Before making an investment decision with respect
              to any offering, prospective investors are advised to carefully
              read the related subscription and offering memorandum documents
              and to consult with their tax, legal and financial advisors. Ark7
              does not give investment advice or recommendations regarding any
              offering posted on the website.
            </p>
            <p>
              Any investment-related information contained herein has been
              secured from sources that Ark7 believes to be reliable, but we
              make no representations or warranties as to the accuracy or
              completeness of such information and accept no liability
              therefore. Meanwhile, hyperlinks to third-party sites, or
              reproduction of third-party articles, do not constitute an
              approval or endorsement by Ark7 of the linked or reproduced
              content.
            </p>
          </div>
          <div css={copyRight}>
            <span>© 2021 Ark7. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
