class Person {
  constructor(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    // this.testScores = testScores.split(' ').map((n) => Number(n));
  }

  printPerson() {
    console.log(`Name: ${this.lastName}, ${this.firstName}`);
    console.log(`ID: ${this.id}`);
  }
}

class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here
  constructor(firstName, lastName, idNumber, testScores) {
    super(firstName, lastName, idNumber);
    this.testScores = testScores;
  }
  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here

  calculate() {
    let total = this.testScores.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
    let avg = total / this.testScores.length;
    let result;
    if (avg >= 90) {
      result = 'O';
    } else if (avg >= 80) {
      result = 'E';
    } else if (avg >= 70) {
      result = 'A';
    } else if (avg >= 55) {
      result = 'P';
    } else if (avg >= 40) {
      result = 'D';
    } else if (avg < 40) {
      result = 'T';
    }
    return result;
  }
}

let s = new Student('firstName', 'lastName', 007, [100, 80]);
s.printPerson();
s.calculate();
