const FgGreen = '\x1b[32m';
const FgRed = '\x1b[31m';
module.exports = {
  oneInput: (cases, cb) => {
    let current;
    for (let i = 0; i < cases.length; i++) {
      current = cb(cases[i].in);
      console.log(`______________________________________`);
      console.log(`\ncase ${i + 1}`);
      console.log(`in:   ${JSON.stringify(cases[i].in)}`);
      console.log(`out:  ${JSON.stringify(cases[i].out)}`);
      if (JSON.stringify(cases[i].out) === JSON.stringify(current)) {
        console.log(FgGreen, 'pass');
      } else console.log(FgRed, `fail: ${JSON.stringify(current)}`);
    }
  },
  twoInput: (cases, cb) => {
    let current;
    for (let i = 0; i < cases.length; i++) {
      current = cb(cases[i].in, cases[i].in2);
      console.log(`______________________________________`);
      console.log(`\ncase ${i + 1}`);
      console.log(`in:   ${JSON.stringify(cases[i].in)}`);
      console.log(`out:  ${JSON.stringify(cases[i].out)}`);
      if (JSON.stringify(cases[i].out) === JSON.stringify(current)) {
        console.log(FgGreen, 'pass');
      } else console.log(FgRed, `fail: ${JSON.stringify(current)}`);
    }
  },
};
