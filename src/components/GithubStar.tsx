import React from 'react';
import { css } from '@emotion/core';

const style = css`
  width: 150px;
  height: 30px;
  position: absolute;
  top: 25px;
  right: 0px;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const GithubStar = () => (
  <iframe
    title="github"
    css={style}
    src="https://ghbtns.com/github-btn.html?user=umpox&repo=zero-width-detection&type=star&count=true&size=large"
    frameBorder="0"
    scrolling="0"
  />
);
