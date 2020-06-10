/*

In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

 

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.

*/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
/*
>> words: [str]
>> order: str
<< bool

words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"

check each char i in curr vs next
    till curr<next
    while end of one word
    if same
        keep track (app vs apple)
(w[i]>w[i+1]) ret false

*/

/*
["hello","leetcode"]
j 0

*/
var isAlienSorted = function(words, order) {
    const h = {} 
    for(let i=0; i<order.length; i++) {
        h[order[i]] = i
    }
    
    for(let i=0; i<words.length-1; i++) {
        let j=0
        const first = words[i]
        const second = words[i+1]

        const shortest = first.length < second.length ? first.length : second.length 
        let comparing= true
        
        while(j < shortest && comparing) {
            comparing = false

            if(h[first[j]] > h[second[j]]) {
                return false
            } else if (h[first[j]] === h[second[j]]) {
                comparing  = true
                if(j+1 === shortest && first.length > second.length) return false
            }
            j++
        }
    }
    return true
};

let cases = [
    // {
    //   in: ["hello","leetcode"],
    //   in2:"worldabcefghijkmnpqstuvxyz",
    //   out: false,
    // },
    {
      in: ["word","world","row"],
      in2:"worldabcefghijkmnpqstuvxyz",
      out: false,
    },
    // {
    //   in: ["apple","app"],
    //   in2:"abcdefghijklmnopqrstuvwxyz",
    //   out: false,
    // },
  ];  
  
  const tester = require('../tester');
  tester.twoInput(cases, isAlienSorted);
  
  module.exports = isAlienSorted;
  