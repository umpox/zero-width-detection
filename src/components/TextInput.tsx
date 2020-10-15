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

export const TextInput: React.FC<TextInputProps> = ({ onChange, placeholder, ariaLabel = "Username" }) => (
  <input
    css={style}
    onChange={event => onChange(event.target.value)}
    type="text"
    placeholder={placeholder}
    aria-label={ariaLabel}
  />
);
