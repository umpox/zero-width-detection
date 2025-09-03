/**
 * Converts zero-width Unicode characters back to binary representation
 * Reverses the encoding: Zero Width Space → 1, Zero Width Non-Joiner → 0, 
 * Zero Width Joiner → space, splits on Zero Width No-Break Space
 * @param zeroWidthStr - String containing zero-width Unicode characters
 * @returns Binary string with spaces separating character codes
 */
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

/**
 * Converts space-separated binary string back to text
 * @param binaryStr - Space-separated binary string representation
 * @returns Original text string decoded from binary
 */
const binaryToText = (binaryStr: string) =>
  binaryStr
    .split(' ')
    .map(num => String.fromCharCode(parseInt(num, 2)))
    .join('');

/**
 * Decodes zero-width Unicode characters back to the original username
 * Reverses the encoding process to extract hidden usernames from text
 * @param zeroWidthUsername - String containing zero-width characters encoding a username
 * @returns The original username string that was encoded
 * @example
 * ```typescript
 * const decoded = zeroWidthToUsername(encodedString);
 * // Returns "john" if that was the original encoded username
 * ```
 */
export const zeroWidthToUsername = (zeroWidthUsername: string) => {
  const binaryUsername = zeroWidthToBinary(zeroWidthUsername);
  const textUsername = binaryToText(binaryUsername);
  return textUsername;
};
