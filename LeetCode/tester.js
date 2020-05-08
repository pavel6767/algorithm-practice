module.exports = function (cases, cb) {
  let current;
  for (let i = 0; i < cases.length; i++) {
    current = cb(cases[i].in);
    console.log(`______________________________________`);
    console.log(`\ncase ${i + 1}`);
    console.log(`in:  ${JSON.stringify(cases[i].in)}`);
    console.log(`out: ${JSON.stringify(cases[i].out)}`);
    console.log(
      JSON.stringify(cases[i].out) === JSON.stringify(current)
        ? 'pass'
        : `fail :${JSON.stringify(current)}`,
    );
  }
};
