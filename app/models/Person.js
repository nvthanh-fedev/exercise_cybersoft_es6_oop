export class Person {
  static count = 0;

  constructor(name, address, email, id) {
    this.name = name;
    this.address = address;
    this.id = id;
    this.email = email;
  }
}
