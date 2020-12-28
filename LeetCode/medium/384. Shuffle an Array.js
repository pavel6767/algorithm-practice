/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.original = [...nums]
  this.current = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.original
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const { current } = this
  for(let i=0; i<current.length; i++) {
    const randomIndex = Math.floor(Math.random()*current.length)
    const temp = current[randomIndex]
    current[randomIndex] = current[i]
    current[i] = temp
    // [current[i],current[randomIndex]] = [current[randomIndex], current[i]]
  }
  return current
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */