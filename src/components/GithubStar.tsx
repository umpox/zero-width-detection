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

/**
 * GitHub star button component that displays an embedded GitHub star button
 * Shows star count for the zero-width-detection repository
 * Hidden on mobile devices (max-width: 500px)
 * @returns Embedded iframe containing GitHub star button
 */
export const GithubStar = () => (
  <iframe
    title="github"
    css={style}
    src="https://ghbtns.com/github-btn.html?user=umpox&repo=zero-width-detection&type=star&count=true&size=large"
    frameBorder="0"
    scrolling="0"
  />
);
