import { Student } from "../models/Student.js";
import { Customer } from "../models/Customer.js";
import { Employee } from "../models/Employee.js";

export class ListPerson {
  constructor() {
    this.persons = [];
    this.init();
  }

  init = () => {
    const ho = [
      "Nguyễn Thị",
      "Trần Thị",
      "Lê Thị",
      "Phạm Thị",
      "Hoàng Thị",
      "Huỳnh Thị",
      "Võ Thị",
      "Đặng Thị",
      "Bùi Thị",
      "Đỗ Thị",
      "Nguyễn Văn",
      "Trần Văn",
      "Lê Văn",
      "Phạm Văn",
      "Hoàng Văn",
      "Huỳnh Văn",
      "Võ Văn",
      "Đặng Văn",
      "Bùi Văn",
      "Đỗ Văn",
      "Nguyễn Xuân",
      "Trần Xuân",
      "Lê Xuân",
      "Phạm Xuân",
      "Hoàng Xuân",
      "Huỳnh Xuân",
      "Võ Xuân",
      "Đặng Xuân",
      "Bùi Xuân",
      "Đỗ Xuân",
    ];

    const ten = [
      "Huyền",
      "Phương",
      "Trang",
      "Hoa",
      "Linh",
      "Thảo",
      "Thanh",
      "Thu",
      "Ngọc",
      "Lan",
      "Mai",
      "Hà",
      "Anh",
      "Hương",
      "Tuyết",
      "Ánh",
      "Nhung",
      "Phúc",
      "Dương",
      "Kim",
      "Đức",
      "Trung",
      "Quân",
      "Hùng",
      "Tuấn",
      "Thắng",
      "Tùng",
      "Đăng",
      "Việt",
      "Minh",
    ];

    const hoTen = [];

    for (let i = 0; i < 30; i++) {
      const h = ho[Math.floor(Math.random() * ho.length)];
      const t = ten[Math.floor(Math.random() * ten.length)];
      hoTen.push(`${h} ${t}`);
    }

    const names = [...hoTen];

    for (let i = 0; i < 10; i++) {
      const student = new Student(
        `${names[Math.floor(Math.random() * names.length)]}`,
        `Địa chỉ ${i}`,
        `student${i}@example.com`,
        `std${i}`,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1
      );

      const employee = new Employee(
        `${names[Math.floor(Math.random() * names.length)]}`,
        `Địa chỉ ${i}`,
        `employee${i}@example.com`,
        `emp${i}`,
        Math.floor(Math.random() * 30) + 1,
        Math.floor(Math.random() * 100) + 1
      );

      const customer = new Customer(
        `${names[Math.floor(Math.random() * names.length)]}`,
        `Địa chỉ ${i}`,
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

  updatePerson(personUpdate) {
    console.log(
      "🚀 ~ file: ListPerson.js:68 ~ ListPerson ~ updatePerson ~ personUpdate:",
      personUpdate
    );
    const index = this.persons.findIndex(
      (person) => person.id === personUpdate.id
    );
    this.persons.splice(index, 1, personUpdate);
    this.saveListPersonsToLocalStorage();
  }

  getPerson(id) {
    return this.persons.find((person) => person.id === id);
  }

  getStudents(personList) {
    return personList.filter((person) => {
      return (
        "mathScore" in person &&
        "physicsScore" in person &&
        "chemistryScore" in person
      );
    });
  }

  getEmployees(personList) {
    return personList.filter((person) => {
      return "workingDays" in person && "dailySalary" in person;
    });
  }

  getCustomers(personList) {
    return personList.filter((person) => {
      return (
        "companyName" in person && "orderValue" in person && "rating" in person
      );
    });
  }

  sortStudentByAverageDecreaseScore = (students, isDecrease) => {
    students.sort((a, b) => {
      const avgScoreA = (a.mathScore + a.physicsScore + a.chemistryScore) / 3;
      const avgScoreB = (b.mathScore + b.physicsScore + b.chemistryScore) / 3;
      return isDecrease ? avgScoreB - avgScoreA : avgScoreA - avgScoreB;
    });
    return students;
  };

  sortStudentByMathDecreaseScore = (students, isDecrease) => {
    students.sort((a, b) =>
      isDecrease ? b.mathScore - a.mathScore : a.mathScore - b.mathScore
    );
    return students;
  };

  sortStudentByPhysicsDecreaseScore = (students, isDecrease) => {
    students.sort((a, b) =>
      isDecrease
        ? b.physicsScore - a.physicsScore
        : a.physicsScore - b.physicsScore
    );
    return students;
  };

  sortStudentByChemistryDecreaseScore = (students, isDecrease) => {
    students.sort((a, b) =>
      isDecrease
        ? b.chemistryScore - a.chemistryScore
        : a.chemistryScore - b.chemistryScore
    );
    return students;
  };

  sortEmployeeDaysDecrease = (employeesList, isDecrease) => {
    employeesList.sort((a, b) =>
      isDecrease ? b.workingDays - a.workingDays : a.workingDays - b.workingDays
    );
    return employeesList;
  };

  sortEmployeeSalaryPerDayDecrease = (employeesList, isDecrease) => {
    employeesList.sort((a, b) =>
      isDecrease ? b.dailySalary - a.dailySalary : a.dailySalary - b.dailySalary
    );
    return employeesList;
  };

  sortSalaryDecrease = (employeesList, isDecrease) => {
    employeesList.sort((a, b) => {
      const salaryA = a.workingDays * a.dailySalary;
      const salaryeB = b.workingDays * b.dailySalary;
      return isDecrease ? salaryeB - salaryA : salaryA - salaryeB;
    });
    return employeesList;
  };

  sortHdDecrease = (customersList, isDecrease) => {
    customersList.sort((a, b) =>
      isDecrease ? b.orderValue - a.orderValue : a.orderValue - b.orderValue
    );
    return customersList;
  };

  sortRateDecrease = (customersList, isDecrease) => {
    customersList.sort((a, b) =>
      isDecrease ? b.rating - a.rating : a.rating - b.rating
    );
    return customersList;
  };

  sortByName = (persons, isDecrease) => {
    if (isDecrease) {
      persons.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // Chuyển tên thành chữ in hoa để so sánh
        const nameB = b.name.toUpperCase(); // Chuyển tên thành chữ in hoa để so sánh
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else {
      persons.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // Chuyển tên thành chữ in hoa để so sánh
        const nameB = b.name.toUpperCase(); // Chuyển tên thành chữ in hoa để so sánh
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
    }
    return persons;
  };

  renderTableSinhVien = (tableStudent, statusRender, isDecrease) => {
    let htmlContent = "";
    let studentsList = this.getStudents(this.persons);

    if (isDecrease) {
      switch (statusRender) {
        case "name":
          studentsList = this.sortByName(studentsList, true);
          break;
        case "average":
          studentsList = this.sortStudentByAverageDecreaseScore(
            studentsList,
            true
          );
          break;
        case "math":
          studentsList = this.sortStudentByMathDecreaseScore(
            studentsList,
            true
          );
          break;
        case "physics":
          studentsList = this.sortStudentByPhysicsDecreaseScore(
            studentsList,
            true
          );
          break;
        case "chemistry":
          studentsList = this.sortStudentByChemistryDecreaseScore(
            studentsList,
            true
          );
          break;
        default:
          break;
      }
    } else {
      switch (statusRender) {
        case "name":
          studentsList = this.sortByName(studentsList, false);
          break;
        case "average":
          studentsList = this.sortStudentByAverageDecreaseScore(
            studentsList,
            false
          );
          break;
        case "math":
          studentsList = this.sortStudentByMathDecreaseScore(
            studentsList,
            false
          );
          break;
        case "physics":
          studentsList = this.sortStudentByPhysicsDecreaseScore(
            studentsList,
            false
          );
          break;
        case "chemistry":
          studentsList = this.sortStudentByChemistryDecreaseScore(
            studentsList,
            false
          );
          break;
        default:
          break;
      }
    }

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

  onlyRenderTableSinhVien = (arr, tableStudent) => {
    let htmlContent = "";
    let studentsList = arr;
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

  onlyRenderTableNhanVien = (arr, tableEmployee) => {
    let htmlContent = "";
    let employeeAssign = arr;
    console.log("List employee", employeeAssign);

    for (let employee of employeeAssign) {
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

  onlyRenderTableKhachHang = (arr, tableCustomer) => {
    let htmlContent = "";
    let customerAssign = arr;
    console.log("List Customer Find name", customerAssign);

    for (let customer of customerAssign) {
      let customerAssign = new Student();
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

  renderTableNhanVien = (tableEmployee, statusRender, isDecrease) => {
    let htmlContent = "";
    let employeesList = this.getEmployees(this.persons);
    console.log(
      "🚀 ~ file: ListPerson.js:429 ~ ListPerson ~ employeesList:",
      employeesList
    );

    if (isDecrease) {
      switch (statusRender) {
        case "name":
          employeesList = this.sortByName(employeesList, true);
          break;
        case "days":
          employeesList = this.sortEmployeeDaysDecrease(employeesList, true);
          break;
        case "salaryPerDay":
          employeesList = this.sortEmployeeSalaryPerDayDecrease(
            employeesList,
            true
          );
          break;
        case "salary":
          employeesList = this.sortSalaryDecrease(employeesList, true);
          break;
        default:
          break;
      }
    } else {
      switch (statusRender) {
        case "name":
          employeesList = this.sortByName(employeesList, false);
          break;
        case "days":
          employeesList = this.sortEmployeeDaysDecrease(employeesList, false);
          break;
        case "salaryPerDay":
          employeesList = this.sortEmployeeSalaryPerDayDecrease(
            employeesList,
            false
          );
          break;
        case "salary":
          employeesList = this.sortSalaryDecrease(employeesList, false);
          break;
        default:
          break;
      }
    }
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

  renderTableKhachHang = (tableCustomer, statusRender, isDecrease) => {
    let htmlContent = "";
    let customersList = this.getCustomers(this.persons);
    if (isDecrease) {
      switch (statusRender) {
        case "name":
          customersList = this.sortByName(customersList, true);
          break;
        case "hd":
          customersList = this.sortHdDecrease(customersList, true);
          break;
        case "rate":
          customersList = this.sortRateDecrease(customersList, true);
          break;
        default:
          break;
      }
    } else {
      switch (statusRender) {
        case "name":
          customersList = this.sortByName(customersList, false);
          break;
        case "hd":
          customersList = this.sortHdDecrease(customersList, false);
          break;
        case "rate":
          customersList = this.sortRateDecrease(customersList, false);
          break;
        default:
          break;
      }
    }

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
}
