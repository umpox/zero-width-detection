import React from 'react';
import { render, fireEvent, getNodeText } from '@testing-library/react';

import App from '../App';

describe('Zero Width Detection Flow', () => {
  let queries;

  beforeEach(async () => {
    queries = render(<App />);
  });

  it.each([
    /Enter username/,
    /Copy text below/,
    /Paste copied text here/,
    /Your username is/
  ])('renders %s step', (step) => {
    expect(queries.queryByText(step)).toBeInTheDocument();
  });

  it('username input field is initially empty', () => {
    const usernameInput = queries.getByLabelText('Username');
    expect(usernameInput.value).toBe('')
  });

  it('confidential text input field is initially empty', () => {
    const confidentialInput = queries.getByLabelText('Hidden Username');
    expect(confidentialInput.value).toBe('')
  });

  it('confidential text initially has no zero width characters', () => {
    const confidentialText = queries.getByTestId('confidentialText');

    // Match zero width characters
    expect(confidentialText.innerHTML.match(/[​‌‍﻿]/)).toBeNull();
  });

  describe('When a user enters text', () => {
    const username = 'Tom';

    beforeEach(async () => {
      const usernameInput = queries.getByLabelText('Username');
      fireEvent.change(usernameInput, { target: { value: username } })
    })

    it('injects zero width characters into confidential text', () => {
      const confidentialText = queries.getByTestId('confidentialText');

      // Match zero width characters
      expect(confidentialText.innerHTML.match(/[​‌‍﻿]/)).not.toBeNull();
    });

    it('converts zero width characters back to username when pasted', () => {
      const revealedUsername = queries.getByTestId('revealedUsername');
      // Check we have no output first
      expect(revealedUsername).not.toHaveTextContent();

      // Copy and paste confidential text into text input
      const copiedText = queries.getByTestId('confidentialText').innerHTML;
      fireEvent.change(queries.getByLabelText('Hidden Username'), { target: { value: copiedText } })

      // Check the initial username is now visible to the user
      expect(revealedUsername).toHaveTextContent('Tom');
      expect(queries.queryByText(/Don't believe me?/)).toBeInTheDocument();
    });
  });
});
