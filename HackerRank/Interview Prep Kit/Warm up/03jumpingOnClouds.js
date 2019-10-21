function jumpingOnClouds(c) {
  let currInx = 0;
  let numJumps = 0;

  while(currInx < c.length-1) {
    currInx+=1;
    if(c[currInx] == '1' || c[currInx+1] == '0') {
      currInx++;
      console.log('jumping 2 to inx :: ', currInx)
    } else {
      console.log('jumping 1 to inx :: ', currInx)
    }
    numJumps++;
  }
  return numJumps;
}
  
  let input = "0 0 1 0 0 1 0".split(' ');
  
  
  // 4
  console.log(jumpingOnClouds(input));