/*

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false

*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/*
TODO
{
    cat: (
        cats : (catsand)
    )
}

sort dict
    binary search on subs[0]

>> s:string, wordDict:[]
<< bool

wordDict
    set
    vals can be used many times

s = "catsandog", // O(n*s.len) 
wordDict = ["cats", "dog", "sand", "and", "cat"] 

if(s "") return true
accum =''
iter s
    check if accum is in wordict
        check rest of substring recurs
            if(recurs(subst)) return true
        
return false?

"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
    in2:["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"],

iter s
  0
  accum a
  1
  accum aa
*/
var wordBreak = function(s, wordDict) {
  if(s.length === 0) return true
  
  let accum = ''
  for(let i=0; i<s.length; i++) {
      accum +=s[i]
      if(wordDict.includes(accum)){
          if(wordBreak(s.slice(i+1), wordDict) === true) return true
      }
  }
  
  return false
  
};

let cases = [
  // {
  //   in: "leetcode",
  //   in2:["leet", "code"],
  //   out: true,
  // },
  // {
  //   in: "applepenapple",
  //   in2:["apple", "pen"],
  //   out: true,
  // },
  // {
  //   in: "catsandog",
  //   in2:["cats", "dog", "sand", "and", "cat"],
  //   out: false,
  // },
  {
    in: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
    in2:["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"],
    out: false,
  },
];  

const tester = require('../tester');
tester.twoInput(cases, wordBreak);

module.exports = wordBreak;
