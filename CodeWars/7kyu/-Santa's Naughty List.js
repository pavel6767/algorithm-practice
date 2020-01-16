/*

Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day. Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.

Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not.

*/

function findChildren(santasList, children) {
  let res = [];
  let set = new Set(
    children.map((child) => child[0].toLowerCase() + child.slice(1)),
  );
  santasList = santasList.map(
    (child) => child[0].toLowerCase() + child.slice(1),
  );

  for (let i = 0; i < santasList.length; i++) {
    if (set.has(santasList[i])) {
      res.push(santasList[i]);
    }
    if (res.length === children.length) {
      break;
    }
  }
  return res;
}

const input1 = ['jASon', 'JAsoN', 'JaSON', 'jasON'];
const input2 = ['JasoN', 'jASOn', 'JAsoN', 'jASon', 'JASON'];
//["JAsoN", "jASon"]

console.log(findChildren(input1, input2));
