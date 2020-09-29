const FgGreen = '\x1b[32m';
const FgRed = '\x1b[31m';

// console.log(FgGreen, 'green')
// console.log(FgRed, 'red')

function logger({ input, out, current, i }) {
  const pass = JSON.stringify(out) === JSON.stringify(current);
  const color = pass ? FgGreen : FgRed;

  console.log(`______________________________________`);
  console.log(color, `\ncase ${i + 1} : ${pass?'pass':'fail'}`);
  console.log(` in: ${JSON.stringify(input)}`);
  console.log(`out: ${JSON.stringify(out)}`);
  if (pass === false) {
    console.log(color, `    ${JSON.stringify(current)}`);
  }
}

const tester = {
  oneInput: (cases, cb) => {
    let current;

    for (let i = 0; i < cases.length; i++) {
      current = cb(cases[i].in);
      logger({
        input: cases[i].in,
        out: cases[i].out,
        current,
        i,
      });
    }
  },
  twoInput: (cases, cb) => {
    let current;

    for (let i = 0; i < cases.length; i++) {
      current = cb(cases[i].in, cases[i].in2);

      logger({
        input: cases[i].in,
        out: cases[i].out,
        current,
        i,
      });
    }
  },
};

module.exports = tester