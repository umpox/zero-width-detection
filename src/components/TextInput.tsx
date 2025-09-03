import React from 'react';
import { css } from '@emotion/core';

interface TextInputProps {
  onChange: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
}

const style = css`
  width: 100%;
  padding: 0.3rem 0.5rem;
  font-size: 1rem;
  line-height: 2;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

/**
 * A styled text input component with customizable placeholder and accessibility label
 * @param props - Component props
 * @param props.onChange - Callback function called when input value changes
 * @param props.placeholder - Optional placeholder text for the input
 * @param props.ariaLabel - Accessibility label for screen readers (defaults to "Username")
 * @returns Styled text input element
 */
export const TextInput: React.FC<TextInputProps> = ({ onChange, placeholder, ariaLabel = "Username" }) => (
  <input
    css={style}
    onChange={event => onChange(event.target.value)}
    type="text"
    placeholder={placeholder}
    aria-label={ariaLabel}
  />
);
