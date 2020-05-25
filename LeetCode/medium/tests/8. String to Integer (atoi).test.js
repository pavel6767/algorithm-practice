const myAoti = require('../8. String to Integer (atoi).js');

describe('med 8. String to Integer (atoi)', () => {
  let cases = [
    { in: '42', out: 42 },
    { in: '   -42', out: -42 },
    { in: '4193 with words', out: 4193 },
    { in: 'words and 987', out: 0 },
    { in: '-91283472332', out: -2147483648 },
    { in: '   +0 123', out: 0 },
    { in: '2147483648', out: 2147483647 },
    { in: '-2147483648', out: -2147483648 },
    { in: '2147483800', out: 2147483647 },
    { in: '0-1', out: 0 },
    { in: '-5-', out: -5 },
  ];

  for (let c of cases) {
    test(c.in, () => {
      expect(myAoti(c.in)).toBe(c.out);
    });
  }
});
