/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const footer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 1016px;
  }
`;
export const social = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
  a {
    padding: 0px 12px;
    text-decoration: none;
    color: #000;
  }
  a:hover {
    color: rgb(14 177 83);
    transition: color 0.2s ease 0s;
  }
  svg {
    height: 26px;
    width: 32.5px;
  }
`;

export const grid = css`
  margin: 40px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  p {
    font-weight: 500;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.62);
    margin: 24px 0px;
    letter-spacing: 0.5px;
  }
  a {
    text-decoration: none;
  }

  a > span {
    line-height: 30px;
    font-weight: 300;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.62);
    letter-spacing: 0.5px;
  }
  span:hover {
    color: rgb(14 177 83);
    transition: color 0.2s ease 0s;
  }
`;

export const featureImg = css`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 200px;
    height: 43px;
  }
`;
export const footerText = css`
  p {
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 0.5px;
    color: #8898aa;
    margin: 0px 0px 12px;
  }
`;

export const copyRight = css`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 0.5px;
    color: #8898aa;
    margin: 24px 0px 12px;
  }
`;

export const lineStyle = css`
  border-width: 1px;
  color: rgba(0, 0, 0, 0.07);
  border-top: 0.98px;
  margin: 36px 0px;
`;
