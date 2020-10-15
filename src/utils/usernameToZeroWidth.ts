const zeroPad = (num: string) => '00000000'.slice(num.length) + num;

const textToBinary = (username: string) =>
  username
    .split('')
    .map(char => zeroPad(char.charCodeAt(0).toString(2)))
    .join(' ');

const binaryToZeroWidth = (binary: string) =>
  binary
    .split('')
    .map(binaryNum => {
      const num = parseInt(binaryNum, 10);
      if (num === 1) {
        return '​'; // invisible &#8203;
      } else if (num === 0) {
        return '‌'; // invisible &#8204;
      }
      return '‍'; // invisible &#8205;
    })
    .join('﻿'); // invisible &#65279;

export const usernameToZeroWidth = (username: string) => {
  const binaryUsername = textToBinary(username);
  const zeroWidthUsername = binaryToZeroWidth(binaryUsername);
  return zeroWidthUsername;
};
