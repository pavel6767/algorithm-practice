const UndergroundSystem = require('../1396. Design Underground System.js');

describe('med 1396. Design Underground System', () => {
  const undergroundSystem = new UndergroundSystem();
  undergroundSystem.checkIn(45, 'Leyton', 3);
  undergroundSystem.checkIn(32, 'Paradise', 8);
  undergroundSystem.checkIn(27, 'Leyton', 10);
  undergroundSystem.checkOut(45, 'Waterloo', 15);
  undergroundSystem.checkOut(27, 'Waterloo', 20);
  undergroundSystem.checkOut(32, 'Cambridge', 22);
  // undergroundSystem.getAverageTime('Paradise', 'Cambridge'); // return 14.00000. There was only one travel from "Paradise" (at time 8) to "Cambridge" (at time 22)
  test('paradise to Cambridge -> 14', () => {
    expect(undergroundSystem.getAverageTime('Paradise', 'Cambridge')).toBe(14);
  });
  // undergroundSystem.getAverageTime('Leyton', 'Waterloo'); // return 11.00000. There were two travels from "Leyton" to "Waterloo", a customer with id=45 from time=3 to time=15 and a customer with id=27 from time=10 to time=20. So the average time is ( (15-3) + (20-10) ) / 2 = 11.00000
  test('Leyton to Waterloo -> 11', () => {
    expect(undergroundSystem.getAverageTime('Leyton', 'Waterloo')).toBe(11);
  });
  undergroundSystem.checkIn(10, 'Leyton', 24);
  // undergroundSystem.getAverageTime('Leyton', 'Waterloo'); // return 11.00000
  test('Leyton to Waterloo -> 11', () => {
    expect(undergroundSystem.getAverageTime('Leyton', 'Waterloo')).toBe(11);
  });
  undergroundSystem.checkIn(10, 'Leyton', 24);
  undergroundSystem.checkOut(10, 'Waterloo', 38);
  // undergroundSystem.getAverageTime('Leyton', 'Waterloo'); // return 12.00000
  test('Leyton to Waterloo -> 12', () => {
    expect(undergroundSystem.getAverageTime('Leyton', 'Waterloo')).toBe(12);
  });
  undergroundSystem.checkIn(10, 'Leyton', 24);
  // for (let c of cases) {
  //   test(c.in, () => {
  //     expect(removeDuplicates(c.in, c.in2)).toBe(c.out);
  //   });
  // }
});
