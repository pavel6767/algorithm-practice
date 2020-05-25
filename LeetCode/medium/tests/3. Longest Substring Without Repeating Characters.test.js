const lengthOfLongestSubstring = require('../3. Longest Substring Without Repeating Characters.js');

let cases = [
  { in: 'abcabcbb', out: 3 },
  { in: 'bbbbb', out: 1 },
  { in: 'pwwkew', out: 3 },
];

describe('3. lengthOfLongestSubstring', () => {
  for (let c of cases) {
    test(c.in, () => {
      expect(lengthOfLongestSubstring(c.in)).toBe(c.out);
    });
  }
});
