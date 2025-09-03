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
  testId?: string;
}

/**
 * A styled container component for highlighting text content with a gray background
 * Used to display text that may contain hidden zero-width characters
 * @param props - Component props
 * @param props.children - Content to display inside the highlighted container
 * @param props.className - Optional CSS class name for additional styling
 * @param props.testId - Optional test ID for testing purposes
 * @returns Styled div container with highlighted background
 */
export const TextHighlight: React.FC<TextHighlightProps> = ({ children, className, testId }) => (
  <div css={style} className={className} data-testid={testId}>
    <p>{children}</p>
  </div>
);
