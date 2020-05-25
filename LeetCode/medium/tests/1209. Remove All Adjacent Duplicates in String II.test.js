const removeDuplicates = require('../1209. Remove All Adjacent Duplicates in String II.js');

const cases = [
  { in: 'abcd', in2: 2, out: 'abcd' },
  { in: 'deeedbbcccbdaa', in2: 3, out: 'aa' },
  { in: 'pbbcggttciiippooaais', in2: 2, out: 'ps' },
  { in: 'nnwssswwnvbnnnbbqhhbbbhmmmlllm', in2: 3, out: 'vqm' },
];

describe('med 1209. Remove All Adjacent Duplicates in String II', () => {
  for (let c of cases) {
    test(c.in, () => {
      expect(removeDuplicates(c.in, c.in2)).toBe(c.out);
    });
  }
});
