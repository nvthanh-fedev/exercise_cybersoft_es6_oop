import { Student } from "../models/Student.js";
import { Customer } from "../models/Customer.js";
import { Employee } from "../models/Employee.js";

export class ListPerson {
  constructor() {
    this.persons = [];
    this.init();
  }

  init = () => {
    const names = [
      "Caryln",
      "Angela",
      "Anne",
      "Andrea",
      "Glenda",
      "Fiona",
      "Grace",
      "Harry",
      "Isabelle",
      "Jack",
      "Bella",
      "Diana",
      "Gina",
      "Harmony",
      "Gabriela",
      "Wendy",
      "Joy",
    ];

    for (let i = 0; i < 3; i++) {
      const student = new Student(
        `Student ${names[Math.floor(Math.random() * names.length)]}`,
        `Address ${i}`,
        `student${i}@example.com`,
        `std${i}`,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1
      );

      const employee = new Employee(
        `Employee ${names[Math.floor(Math.random() * names.length)]}`,
        `Address ${i}`,
        `employee${i}@example.com`,
        `emp${i}`,
        Math.floor(Math.random() * 30) + 1,
        Math.floor(Math.random() * 100) + 1
      );

      const customer = new Customer(
        `Customer ${names[Math.floor(Math.random() * names.length)]}`,
        `Address ${i}`,
        `customer${i}@example.com`,
        `cus${i}`,
        `Company ${i}`,
        Math.floor(Math.random() * 1000) + 1,
        Math.floor(Math.random() * 5) + 1
      );

      this.persons.push(student, employee, customer);
    }

    this.saveListPersonsToLocalStorage();
    return this.persons;
  };

  addPerson = (person) => {
    this.persons.push(person);
  };

  removePerson = (id) => {
    this.persons = this.persons.filter((person) => person.id !== id);
  };

  updatePerson(personUpdate, typeOfPerson) {
    console.log(
      "🚀 ~ file: ListPerson.js:68 ~ ListPerson ~ updatePerson ~ personUpdate:",
      personUpdate
    );
    const index = this.persons.findIndex(
      (person) => person.id === personUpdate.id
    );

    this.persons.splice(index, 1, personUpdate);

    console.log(
      "personUpdate id is ",
      typeof personUpdate.id,

      "Type of person update is ",
      typeOfPerson,
      ". Index of that person is ",
      index
    );

    this.saveListPersonsToLocalStorage();
  }

  sortByFullName = () => {
    this.persons.sort((a, b) => {
      const nameA = a.name?.split(" ")?.pop();
      const nameB = b.name?.split(" ")?.pop();
      return nameA.localeCompare(nameB);
    });
  };

  getPerson(personId) {
    const person = this.persons.find((person) => person.id === personId);
    if (person) {
      console.log(`Found ${person.constructor.name} with ID ${person.id}`);
      return person;
    } else {
      console.log(`Person with ID ${personId} not found!`);
      return null;
    }
  }

  getStudents(personList) {
    return personList.filter((person) => {
      return (
        person.hasOwnProperty("mathScore") &&
        person.hasOwnProperty("physicsScore") &&
        person.hasOwnProperty("chemistryScore")
      );
    });
  }

  getStudentsSortScore (typeSort) {
    return getStudents(personList);
  }

  getEmployees(personList) {
    return personList.filter((person) => {
      return (
        person.hasOwnProperty("workingDays") &&
        person.hasOwnProperty("dailySalary")
      );
    });
  }

  getCustomers(personList) {
    return personList.filter((person) => {
      return (
        person.hasOwnProperty("companyName") &&
        person.hasOwnProperty("orderValue") &&
        person.hasOwnProperty("rating")
      );
    });
  }

  getPerson(id) {
    const person = this.persons.find((person) => person.id === id);
    return person;
  }

  renderTableSinhVien = (tableStudent) => {
    let htmlContent = "";
    let studentsList = this.getStudents(this.persons);
    console.log("List Students", studentsList);
    for (let student of studentsList) {
      let studentAssign = new Student();
      Object.assign(studentAssign, student);
      htmlContent += `
      <tr class="text-center align-middle">
        <td class="align-middle">${studentAssign.name}</td>
        <td class="align-middle">${studentAssign.address}</td>
        <td class="align-middle">${studentAssign.id}</td>
        <td class="align-middle">${studentAssign.email}</td>
        <td class="align-middle">${studentAssign.mathScore}</td>
        <td class="align-middle">${studentAssign.physicsScore}</td>
        <td class="align-middle">${studentAssign.chemistryScore}</td>
        <td class="align-middle">${studentAssign.averageScore()}</td>
        <td class="align-middle btn-chucNang">
          <button type="button" class="btn-chucnang-xoa btn btn-danger rounded-circle" 
          onclick="remove('${studentAssign.id}')">
            <i class="fa-solid fa-trash-can"></i>
          </button>
          <button type="button" class="btn-chucnang-sua btn btn-warning rounded-circle" 
          data-toggle="modal" data-target="#exampleModal" 
          onclick="updatePerson('${studentAssign.id}')">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </td>
      </tr>
    `;
    }
    document.querySelector(tableStudent).innerHTML = htmlContent;
    return htmlContent;
  };

  renderTableNhanVien = (tableEmployee) => {
    let htmlContent = "";
    let employeesList = this.getEmployees(this.persons);
    for (let employee of employeesList) {
      let employeeAssign = new Employee();
      Object.assign(employeeAssign, employee);
      htmlContent += `
      <tr class="text-center align-middle">
        <td class="align-middle">${employeeAssign.name}</td>
        <td class="align-middle">${employeeAssign.address}</td>
        <td class="align-middle">${employeeAssign.id}</td>
        <td class="align-middle">${employeeAssign.email}</td>
        <td class="align-middle">${employeeAssign.workingDays}</td>
        <td class="align-middle">${employeeAssign.dailySalary}</td>
        <td class="align-middle">${employeeAssign.salary()}</td>
        <td class="align-middle btn-chucNang">
          <button type="button" class="btn-chucnang-xoa btn btn-danger rounded-circle" 
          onclick="remove('${employeeAssign.id}')">
            <i class="fa-solid fa-trash-can"></i>
          </button>
          <button type="button" class="btn-chucnang-sua btn btn-warning rounded-circle" 
          data-toggle="modal" data-target="#exampleModal" 
          onclick="updatePerson('${employeeAssign.id}')">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </td>
      </tr>
    `;
    }
    document.querySelector(tableEmployee).innerHTML = htmlContent;
    return htmlContent;
  };

  renderTableKhachHang = (tableCustomer) => {
    let htmlContent = "";
    let customersList = this.getCustomers(this.persons);
    for (let customer of customersList) {
      let customerAssign = new Customer();
      Object.assign(customerAssign, customer);
      htmlContent += `
      <tr class="text-center align-middle">
        <td class="align-middle">${customerAssign.name}</td>
        <td class="align-middle">${customerAssign.address}</td>
        <td class="align-middle">${customerAssign.id}</td>
        <td class="align-middle">${customerAssign.email}</td>
        <td class="align-middle">${customerAssign.companyName}</td>
        <td class="align-middle">${customerAssign.orderValue}</td>
        <td class="align-middle">${customerAssign.rating}</td>
        <td class="align-middle btn-chucNang">
          <button type="button" class="btn-chucnang-xoa btn btn-danger rounded-circle" 
          onclick="remove('${customerAssign.id}')">
            <i class="fa-solid fa-trash-can"></i>
          </button>
          <button type="button" class="btn-chucnang-sua btn btn-warning rounded-circle" 
          data-toggle="modal" data-target="#exampleModal" 
          onclick="updatePerson('${customerAssign.id}')">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </td>
      </tr>
    `;
    }
    document.querySelector(tableCustomer).innerHTML = htmlContent;
    return htmlContent;
  };

  saveListPersonsToLocalStorage = () => {
    let stringArrayPersons = JSON.stringify(this.persons);
    localStorage.setItem("arrayPersons", stringArrayPersons);
  };

  getStore = () => {
    console.log("ListPerson getStore");
    if (localStorage.getItem("arrayPersons")) {
      let stringArrayPersons = localStorage.getItem("arrayPersons");
      // console.log("GetStore() stringArrayPerson ", stringArrayPersons);
      //Chuyển dữ liệu string về dạng object
      this.persons = JSON.parse(stringArrayPersons);

      console.log("GetStore() this.student ", this.persons);
      //Gọi hàm tạo giao diện từ mảng

      this.renderTableSinhVien("#tbody-table-student");
      this.renderTableNhanVien("#tbody-table-employee");
      this.renderTableKhachHang("#tbody-table-customer");
    }
  };

  getPerson(id) {
    return this.persons.find((person) => person.id === id);
  }
}
