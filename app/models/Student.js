import { Person } from "./Person.js";

export class Student extends Person {
  constructor(
    name,
    address,
    email,
    id,
    mathScore,
    physicsScore,
    chemistryScore
  ) {
    super(name, address, email, id);
    this.mathScore = mathScore;
    this.physicsScore = physicsScore;
    this.chemistryScore = chemistryScore;
  }

  averageScore = () => {
    return this.mathScore === 0 &&
      this.physicsScore === 0 &&
      this.chemistryScore === 0
      ? 0
      : (
          (this.mathScore + this.physicsScore + this.chemistryScore) /
          3
        ).toFixed(1);
  };


  
}
