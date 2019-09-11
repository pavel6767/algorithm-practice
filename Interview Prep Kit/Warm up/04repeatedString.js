
// naive approach

// function repeatedString(s, n) {

//   if(s.length === 1) {
//     if(s[0] === 'a') {
//       return n;
//     } else {
//       return 0;
//     }
//   }

//   let inx = 0;
//   let newStr = 0;
//   let count = 0;

//   while(newStr<(n+s.length)) {
//     newStr++;

//     if(s[inx] === 'a') {
//       count++;
//     }

//     inx++;
//     if(inx === s.length-1) {
//       inx=0;
//     }
//   }
//   return count;
// }


// opt 2
function repeatedString(s, n) {
  
  // worst/best case
  if(s.length === 1) {
    if(s[0] === 'a') {
      return n;
    } else {
      return 0;
    }
  }

  // count a's in s

  let oneRoundA = 0;
  for(let i = 0; i<s.length; i++) {
    if(s[i] === 'a') {
      oneRoundA++
    }
  }

  // count how many whole loops
  let len = s.length
  let wholeLoop = Math.floor(n/len);
  let leftOver = n%len;

  let result = oneRoundA * wholeLoop;

  

  let inx = 0;
  let newStr = 0;
  let count = 0;

  while(newStr<(leftOver)) {
    newStr++;

    if(s[inx] === 'a') {
      count++;
    }

    inx++;
    if(inx === s.length-1) {
      inx=0;
    }
  }

  result += count
  return result;
}

let str = "aba";
let num = 10;
// 7

console.log(repeatedString(str, num));