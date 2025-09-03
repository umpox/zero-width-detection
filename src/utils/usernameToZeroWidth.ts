/**
 * Pads a binary string to 8 characters with leading zeros
 * @param num - Binary string to pad
 * @returns 8-character zero-padded binary string
 */
const zeroPad = (num: string) => '00000000'.slice(num.length) + num;

/**
 * Converts text to binary representation with space-separated 8-bit values
 * @param username - Text string to convert to binary
 * @returns Space-separated binary string representation
 */
const textToBinary = (username: string) =>
  username
    .split('')
    .map(char => zeroPad(char.charCodeAt(0).toString(2)))
    .join(' ');

/**
 * Converts binary string to zero-width Unicode characters
 * Maps: 1 → Zero Width Space (U+200B), 0 → Zero Width Non-Joiner (U+200C), 
 * space → Zero Width Joiner (U+200D), joined with Zero Width No-Break Space (U+FEFF)
 * @param binary - Binary string with spaces separating character codes
 * @returns String of invisible zero-width Unicode characters
 */
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

/**
 * Converts a username string into invisible zero-width Unicode characters
 * This allows embedding usernames invisibly within text for tracking purposes
 * @param username - The username string to encode
 * @returns String containing invisible zero-width characters representing the username
 * @example
 * ```typescript
 * const encoded = usernameToZeroWidth("john");
 * // Returns invisible characters that can be embedded in text
 * ```
 */
export const usernameToZeroWidth = (username: string) => {
  const binaryUsername = textToBinary(username);
  const zeroWidthUsername = binaryToZeroWidth(binaryUsername);
  return zeroWidthUsername;
};
