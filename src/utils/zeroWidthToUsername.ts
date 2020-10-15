const zeroWidthToBinary = (zeroWidthStr: string) =>
  zeroWidthStr
    .split('﻿')
    .map(char => {
      // invisible &#65279;
      if (char === '​') {
        // invisible &#8203;
        return '1';
      } else if (char === '‌') {
        // invisible &#8204;
        return '0';
      }
      return ' '; // split up binary with spaces;
    })
    .join('');

const binaryToText = (binaryStr: string) =>
  binaryStr
    .split(' ')
    .map(num => String.fromCharCode(parseInt(num, 2)))
    .join('');

export const zeroWidthToUsername = (zeroWidthUsername: string) => {
  const binaryUsername = zeroWidthToBinary(zeroWidthUsername);
  const textUsername = binaryToText(binaryUsername);
  return textUsername;
};
