import { Person } from "./Person.js";

export class Employee extends Person {
  constructor(name, address, email, id, workingDays, dailySalary) {
    super(name, address, email, id);
    this.workingDays = workingDays;
    this.dailySalary = dailySalary;
  }

  salary = () => {
    return (this.workingDays * this.dailySalary).toFixed(2);
  };
}
