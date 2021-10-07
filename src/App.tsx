import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { css } from '@emotion/core';

import { GithubStar } from './components/GithubStar';
import { TextInput } from './components/TextInput';
import { TextHighlight } from './components/TextHighlight';
import { usernameToZeroWidth } from './utils/usernameToZeroWidth';
import { zeroWidthToUsername } from './utils/zeroWidthToUsername';

const styles = {
  app: css`
    * {
      box-sizing: border-box;
      font-family: Ubuntu, Arial, Helvetica, sans-serif;
    }

    h2 {
      font-size: 28px;
    }

    height: 100vh;
    padding: 5% 10%;
  `,
  container: css`
    height: 100%;
  `,
  row: css`
    position: relative;
    min-height: 10%;
    padding-top: 25px;
  `,
  usernameReveal: css`
    height: 50px;
    justify-content: start;
  `,
  muted: css`
    color: #868e96;

    a {
      color: #007bff;
    }
  `,
};

const App = () => {
  const [hiddenUsername, setHiddenUsername] = useState('');
  const [revealedUsername, setRevealedUsername] = useState('');

  const transformUsername = (username: string) => setHiddenUsername(usernameToZeroWidth(username));

  const revealUsername = (username: string) => {
    // Replace all text except zero width characters
    const zeroWidthUsername = username.replace(/[^​‌‍﻿]/g, '');

    return setRevealedUsername(zeroWidthToUsername(zeroWidthUsername));
  };

  return (
    <div css={styles.app}>
      <div css={styles.container}>
        <div css={styles.row}>
          <GithubStar />
          <h2>1: Enter username:</h2>
          <TextInput placeholder="Username" onChange={transformUsername} />
        </div>

        <div css={styles.row}>
          <h2>2: Copy text below!</h2>
          <TextHighlight testId="confidentialText">
            Confidential Announcement: {hiddenUsername}
            This is some confidential text that you really shouldn't be sharing anywhere else.
          </TextHighlight>
        </div>

        <div css={styles.row}>
          <h2>3: Paste copied text here:</h2>
          <TextInput ariaLabel="Hidden Username" onChange={revealUsername} />
        </div>

        <div css={styles.row}>
          <h2>4: Your username is...</h2>
          <TextHighlight testId="revealedUsername" css={styles.usernameReveal}>{revealedUsername}</TextHighlight>
          {revealedUsername && (
            <p css={styles.muted}>
              Don't believe me? Try pasting the text here again in a different browser or through incognito mode.
              <a href="https://medium.com/@umpox/be-careful-what-you-copy-invisibly-inserting-usernames-into-text-with-zero-width-characters-18b4e6f17b66">
                How does this work?
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default hot(App);
