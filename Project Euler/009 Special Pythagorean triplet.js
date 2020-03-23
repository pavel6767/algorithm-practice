/*

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

given
a**2 + b**2 = c**2
c = sqrt(a**2 + b**2)

determine
>>>n
n = a+b+c
c = n-a-b


return a*b*c

merge
a**2 + b**2  = (n-a-b)**2
n**2 =   2an -2ab +2bn)
n**2 =   2(an -ab +bn)
n =   2n(a -ab/n +b)

n**2 -2bn = 2an -2ab
n**2 -2bn = 2a(n -b)
n**2 -2bn = 2a(n -b)
a = (n**2 -2bn)/2(n -b)
a = (24**2 -48b)/(48 -2b)

12
3+4+5 = 12
c = 5/12
b = 1/3
a = 1/4


24
c = 10
b = 8
a = 6
36+64 = sqrt(100) = 10 = c


*/

function specialPythagoreanTriplet(n) {
  let sumOfabc = n;

  // let a = Math.floor(n / 4);
  // let b = Math.ceil(n / 3);
  // let c = Math.floor(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
  let a, b, c, product;

  for (let i = 1; i < n / 3; i++) {
    a = i;
    for (let j = 1; j < n / 3; j++) {
      b = j;
      if (Math.sqrt(a * a + b * b) + a + b === n) {
        console.log('match');
        console.log('a ::', a);
        console.log('b ::', b);
        console.log('c ::', c);
      }
    }
  }
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  let res = a * b * c;
  return res;
}

let testCases = {
  24: 480,
  120: 49920,
  1000: 31875000,
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

tester(testCases, specialPythagoreanTriplet);
