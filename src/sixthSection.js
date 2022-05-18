/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const Section6 = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  background-image: url('/background3.png');
  background-size: 1440px 870px;
  padding: 100px 24px 0px;
  height: 770px;

  .allContent {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 0px;
  }
`;

export const textandimg6 = css`
  width: 960px;
  display: flex;
  flex-flow: row;
  align-items: flex-start;
  justify-content: space-between;
`;
export const infoontheright6 = css`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: start;
  width: 327px;
  padding-top: 96px;

  h2 {
    margin: 0px;
    color: #ffff;
  }
  p {
    line-height: 24px;
    margin-top: 8px;
    margin-bottom: 0px;
    color: #ffff;
  }
`;

export const imageHouse6 = css`
  width: 100%;
  max-width: 460px;
  margin: 32px 86.5px 120px;
`;

export const donwloadApp = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
    color: #ffff;
    letter-spacing: 0.8px;
    margin: 0px;
  }
  span {
    font-size: 17px;
    line-height: 32px;
    font-weight: 700;
    color: #ffff;
    letter-spacing: 0.8px;
  }
`;
export const downloadButton6 = css`
  background: #fff;
  display: inline-flex;
  box-shadow: -30px 20px 50px 5px rgb(0 55 15 / 30%);
  border-radius: 8px;
  padding: 12px 24px;
  margin: 12px 0px 0px;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  a {
    text-decoration: none;
    letter-spacing: 0.8px;
    color: #10ab53;
    font-size: 17px;
    font-weight: 700;
  }
  .logoimage {
    width: 24px;
    border-radius: 2px;
    padding-right: 12px;
  }
`;
