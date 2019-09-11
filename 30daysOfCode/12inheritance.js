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

  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here
  constructor(firstName, lastName, id, testScores) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.testScores = testScores;
  }

  printPerson() {
    console.log(`Name: ${this.lastName}, ${this.firstName}`);
    console.log(`ID: ${this.id}`);
  }

  calculate() {
    let scores = this.testScores.split(' ');
    let total = this.scores.reduce((prev, curr) => {
      return prev + curr;
    }, 0);
    let avg = total / this.scores.length;

    let key;

    let result;
  }
}
