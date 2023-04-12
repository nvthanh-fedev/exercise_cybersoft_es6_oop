import { Person } from "./Person.js";

export class Customer extends Person {
  constructor(name, address, email, id, companyName, orderValue, rating) {
    super(name, address, email, id);
    this.companyName = companyName;
    this.orderValue = orderValue;
    this.rating = rating;
  }
}
