function sockMerchant(n, ar) {
  let obj = {}
  let sum = 0;

  for(let i=0; i<n; i++) {
    let tempKey = ar[i]; 

    if(!obj.hasOwnProperty(tempKey)) {
      obj[tempKey] = 1
    } 
    else {
      obj[tempKey] += 1;
    }

    if (obj[tempKey] === 2) {
      sum++;
      obj[tempKey] = 0;
    }
  }
  return sum;
}

let arr = '10 20 20 10 10 30 50 10 20'.split(' ');
let n = arr.length;
// 3

console.log(sockMerchant(n, arr));