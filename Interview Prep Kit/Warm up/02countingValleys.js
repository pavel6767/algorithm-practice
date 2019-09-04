    function countingValleys(n, s) {

        let sum = 0;
        let currHeight = 0;

        for(let i=0; i<n; i++) {
            // whether up or down
            if(s[i] === 'U') {
                currHeight++;
                
                // check if came back from a valley
                if (currHeight === 0) {
                    sum++;
                }
            } else {
                currHeight--;
            }
        }
        return sum;
    }

let str = 'UDDDUDUU'
let len = str.length;

console.log(countingValleys(len, str));

// 8
// UDDDUDUU

// 1