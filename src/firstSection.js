/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const heroStyles = css`
  padding: 32px 24px 0px;
  background-image: url('/background.png');
  background-size: 1440px 869px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const navigationParent = css`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  width: 960px;
  cursor: pointer;
`;

export const logo = css`
  font-size: 38px;
  margin-right: 60px;
  margin-left: 12px;
`;

export const navigationMenu1 = css`
  display: flex;
  flex-direction: row;
  max-width: 381px;
  align-items: center;
  justify-content: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #ffff;
  }
  a.navigationList {
    margin: 0px 0px 0px 30px;
    font-size: 15px;
    font-weight: 300;
    letter-spacing: 1.35px;
    line-height: 38px;
  }
  a.navigationList:hover {
    text-decoration: underline;
    transition: width 2s;
  }
`;
export const navigationMenu2 = css`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: #ffff;
    font-size: 15px;
    font-weight: 300;
    letter-spacing: 1.35px;
    line-height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .signUp {
    font-weight: 700;
    display: inline-flex;
    background-color: #10ab53;
    padding: 0px 18px;
    background-color: #10ab53;
    margin-left: 30px;
    text-decoration: none;
    border-radius: 8px;
    line-height: 38px;
  }
`;

export const h3 = css``;

export const wrapperStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 960px;
  padding-top: 20px;
  .infoontheleft {
    margin-top: 198px;
  }

  h1 {
    color: #ffff;
    font-weight: 700;
    font-size: 48px;
    margin: 0 auto;
    letter-spacing: 0.8px;
  }
  p {
    text-align: left;
    color: #ffff;
    margin: 8px auto 32px;
    font-size: 24px;
    letter-spacing: 0.8px;
    font-weight: 600;
  }
`;

export const imageHouse = css`
  width: 100%;
  max-width: 592px;
`;
export const downloadButton = css`
  background: #fff;
  display: inline-flex;
  box-shadow: -30px 20px 50px 5px rgb(0 55 15 / 30%);
  border-radius: 8px;
  padding: 12px 24px;
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
export const supportButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0d8c44;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.6px;
  padding: 13px 22px;
  color: #ffff;
  border: none;
  cursor: pointer;
  position: fixed;
  bottom: 13px;
  right: 22px;
  svg {
    color: #ffff;
    fill: #ffff;
    padding-right: 8px;
  }
`;
