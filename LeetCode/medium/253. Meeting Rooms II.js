/*

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example1
  Input: intervals = [(0,30),(5,10),(15,20)]
  Output: 2
  Explanation:
  We need two meeting rooms
  room1: (0,30)
  room2: (5,10),(15,20)

Example2
  Input: intervals = [(2,7)]
  Output: 1
  Explanation:
  Only need one meeting room
*/

/*
  list meeting times
  have room for each meeting
  free room once meeting ends
  record running max of rooms needed

  [(0,30),(5,10),(15,20)]

  sort by start time

  meeting list = []
  iter meetings
      if meeting list not empty && earliest ending meeting is before current start time
        merge meetings [start, currentEnd]
      else
        add current meeting to list
      sort by earliest end time

  heap [max @ top of heap]
  iter meetings
    if top of heap 

*/

/*
[(0,30),(5,10),(15,20)]
sort by start time
record
iterate the intervals
  if curr start time is higher than earliest end time (no intersection)
    I can use that room
    modify room that has been freed to have curr end time
  else
    make a new room
  add to record earliest
  sort record by dec end time

sorted start times
  merge intervals that don't intersect
  add intervals that do intersect
  add to heap (curr end)
  let next = stack.pop()
  if curr start >= next end
      no new room
      next.end =  curr.end
  else
      stack.push(curr)
  stack.push(next)
  stack.sort(end decreasing)

*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */

const minMeetingRooms = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const minHeap = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i];
    let next = minHeap.pop();

    if (curr[0] >= next[1]) {
      if (curr[1] > next[1]) next[1] = curr[1];
    } else {
      minHeap.push(curr);
    }
    minHeap.push(next);
    minHeap.sort((a, b) => b[1] - a[1]);
  }
  return minHeap.length;
};

let cases = [
  {
    in: [
      [0, 30],
      [5, 10],
      [15, 20],
    ],
    out: 2,
  },
  {
    in: [[2, 7]],
    out: 1,
  },
  {
    in: [
      [65, 424],
      [351, 507],
      [314, 807],
      [387, 722],
      [19, 797],
      [259, 722],
      [165, 221],
      [136, 897],
    ],
    out: 7,
  },
];

function callback(meetings) {
  meetings = meetings.sort((a,b) => a[0]-b[0])
  let rooms = []
  for(let meet of meetings) {
    if(!rooms.length || rooms[rooms.length-1][1] > meet[0]) {
      rooms.push(meet)
    } else {
      rooms[rooms.length-1][1] = meet[1]
    }
    rooms = rooms.sort((a,b) => b[1]-a[1])
  }
  return rooms.length
}

const tester = require('../tester');
// tester.oneInput(cases, minMeetingRooms);
tester.oneInput(cases, callback);
