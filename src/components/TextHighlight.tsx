import React from 'react';
import { css } from '@emotion/core';

const style = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: #e8e8e8;
  border-radius: 10px;
  padding: 20px;
  font-size: 20px;
`;

interface TextHighlightProps {
  /** Allows custom styling through Emotion */
  className?: string;
}

export const TextHighlight: React.FC<TextHighlightProps> = ({ children, className }) => (
  <div css={style} className={className}>
    <p>{children}</p>
  </div>
);
