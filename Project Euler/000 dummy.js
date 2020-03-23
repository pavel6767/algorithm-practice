/*

description

*/

// function

let testCases = {

};

function tester(testCases, call) {
  let current;
  for (let key in testCases) {
    current = call(key);
    console.log(`\n${key} ::: ${testCases[key]}`);
    if (testCases[key] === current) {
      console.log('pass');
    } else {
      console.error('fail :: ', current);
    }
  }
}

tester(testCases, function);
