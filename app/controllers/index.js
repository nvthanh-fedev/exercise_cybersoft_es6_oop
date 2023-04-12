import { ListPerson } from "../models/ListPerson.js";
import { Student } from "../models/Student.js";
import { Customer } from "../models/Customer.js";
import { Employee } from "../models/Employee.js";
import { Validation } from "../utils/Validation.js";

const personList = new ListPerson();
const valid = new Validation();

personList.getStore(); //lấy storage
// personList.renderTableSinhVien("#tbody-table-student");
// personList.renderTableNhanVien("#tbody-table-employee");
// personList.renderTableKhachHang("#tbody-table-customer");

window.addEventListener("load", (e) => {
  showAllStudent();
});

let statusTypePerson = "student";
let statusForm = "add";

const getElement = (selector) => document.querySelector(selector);

const btnShowTableStudent = getElement("#btn-show-std");
const btnShowTableEmployee = getElement("#btn-show-epl");
const btnShowTableCustomer = getElement("#btn-show-ctm");

const btnChucNangSua = getElement(".btn-chucnang-sua");
const btnChucNangThem = getElement(".btn-chucnang-them");

const elementsStudents = createAttributeArrayForIds("student");
const elementsEmployees = createAttributeArrayForIds("employee");
const elementsCustomers = createAttributeArrayForIds("customer");

const btnUpdateData = document.getElementById("btn-update-data");

const btnAddNewPerson = getElement("#btn-add-new-person");

const addStudentButton = getElement("#btn-add-student");
const addEmployeeButton = getElement("#btn-add-employee");
const addCustomerButton = getElement("#btn-add-customer");

const inputName = document.getElementById("inputName");
const inputAddress = document.getElementById("inputAddress");
const inputEmail = document.getElementById("inputEmail");
const inputMath = document.getElementById("inputMath");
const inputPhysics = document.getElementById("inputPhysics");
const inputChemistry = document.getElementById("inputChemistry");
const inputNumberOfWorkingDay = document.getElementById(
  "inputNumberOfWorkingDay"
);
const inputDailyWage = document.getElementById("inputDailyWage");
const inputCompanyName = document.getElementById("inputCompanyName");
const inputInvoiceinput = document.getElementById("inputInvoiceValue");
const inputRate = document.getElementById("inputRate");

const btnSortScoreAscending = document.getElementById(
  "btn-chucnang-sap-xep-diem-tang-dan"
);

// btnSortScoreAscending.addEventListener("click", () => {
//   personList.renderTableSinhVien("#tbody-table-student");
// });

addStudentButton.addEventListener("click", () => {
  statusForm = "add";
  statusTypePerson = "student";
  statusAddPerson();
  console.log(statusForm, "   ", statusTypePerson);
});

addEmployeeButton.addEventListener("click", () => {
  statusForm = "add";
  statusTypePerson = "employee";
  statusAddPerson();
  console.log(statusForm, "   ", statusTypePerson);
});

addCustomerButton.addEventListener("click", () => {
  statusForm = "add";
  statusTypePerson = "customer";
  statusAddPerson();
  console.log(statusForm, "   ", statusTypePerson);
});

function createAttributeArrayForIds(type) {
  const elements = document.querySelectorAll(`[id*=${type}]`);
  const attributeArray = [];
  elements.forEach((element) => {
    attributeArray.push(element.getAttribute("id"));
  });
  return attributeArray;
}

function toggleClassForElementsByIds(elementIds, addClass) {
  elementIds.map((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      if (addClass) {
        element.classList.add("d-none");
      } else {
        element.classList.remove("d-none");
      }
    }
  });
}

const showAllStudent = () => {
  statusTypePerson = "student";
  console.log(
    "🚀 ~ file: index.js:74 ~ showAllStudent ~ statusTypePerson:",
    statusTypePerson
  );
  toggleClassForElementsByIds(elementsStudents, false);
  toggleClassForElementsByIds(elementsEmployees, true);
  toggleClassForElementsByIds(elementsCustomers, true);
};

const showAllEmployee = () => {
  statusTypePerson = "employee";
  console.log(
    "🚀 ~ file: indexx.js:64 ~ showAllEmployee ~ statusTypePerson:",
    statusTypePerson
  );

  toggleClassForElementsByIds(elementsStudents, true);
  toggleClassForElementsByIds(elementsEmployees, false);
  toggleClassForElementsByIds(elementsCustomers, true);
};

const showAllCustomer = () => {
  statusTypePerson = "customer";
  console.log(
    "🚀 ~ file: indexx.js:73 ~ showAllCustomer ~ statusTypePerson:",
    statusTypePerson
  );

  toggleClassForElementsByIds(elementsStudents, true);
  toggleClassForElementsByIds(elementsEmployees, true);
  toggleClassForElementsByIds(elementsCustomers, false);
};

const titleWeb = document.getElementById("title-web");

const showTable = function (tableType, button) {
  if (tableType === "student") {
    showAllStudent();
    titleWeb.innerHTML = "Student managerment";
  } else if (tableType === "employee") {
    showAllEmployee();
    titleWeb.innerHTML = "Employee managerment";
  } else if (tableType === "customer") {
    showAllCustomer();
    titleWeb.innerHTML = "Customer managerment";
  }

  const buttons = [
    btnShowTableStudent,
    btnShowTableEmployee,
    btnShowTableCustomer,
  ];
  buttons.forEach(function (btn) {
    if (btn === button) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
};

btnShowTableStudent.addEventListener("click", function () {
  showTable("student", this);
});

btnShowTableEmployee.addEventListener("click", function () {
  showTable("employee", this);
});

btnShowTableCustomer.addEventListener("click", function () {
  showTable("customer", this);
});

btnAddNewPerson.addEventListener("click", function () {
  if (statusTypePerson === "student") {
    let newStudent = new Student(
      inputName.value,
      inputAddress.value,
      inputEmail.value,
      +inputMath.value,
      +inputPhysics.value,
      +inputChemistry.value
    );
    console.log("🚀 ~ file: index.js:172 ~ newStudent:", newStudent);

    let checkValidStudent = valid.validateForm("student");

    if (!checkValidStudent) {
      showToastValidation();
      return;
    }

    personList.addPerson(newStudent);
    personList.renderTableSinhVien("#tbody-table-student");
  } else if (statusTypePerson === "employee") {
    let newEmployee = new Employee(
      inputName.value,
      inputAddress.value,
      inputEmail.value,
      +inputNumberOfWorkingDay.value,
      +inputDailyWage.value
    );
    console.log("🚀 ~ file: index.js:172 ~ new employee:", newEmployee);

    let checkValidEmployee = valid.validateForm("employee");

    if (!checkValidEmployee) {
      showToastValidation();
      return;
    }

    personList.addPerson(newEmployee);
    personList.renderTableNhanVien("#tbody-table-employee");
  } else {
    let newCustomer = new Customer(
      inputName.value,
      inputAddress.value,
      inputEmail.value,
      inputCompanyName.value,
      +inputInvoiceinput.value,
      +inputRate.value
    );
    console.log("🚀 ~ file: index.js:172 ~ new employee:", newCustomer);

    let checkValidCustomer = valid.validateForm("customer");

    if (!checkValidCustomer) {
      showToastValidation();
      return;
    }

    personList.addPerson(newCustomer);
    personList.renderTableKhachHang("#tbody-table-customer");
  }

  showToastValidation();

  personList.saveListPersonsToLocalStorage();

  console.log("🚀 ~ file: indexx.js:187 ~ personList:", personList);
});

const showToastValidation = () => {
  var toastElList = [].slice.call(document.querySelectorAll(".toast"));
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl);
  });
  toastList.forEach((toast) => toast.show());
};

window.updateDataPerson = function () {
  console.log("cap nhat deee");
  if (statusTypePerson === "student") {
    let updateStudent = new Student(
      inputName.value,
      inputAddress.value,
      inputEmail.value,
      inputId.value,
      +inputMath.value,
      +inputPhysics.value,
      +inputChemistry.value
    );

    let checkValidStudent = valid.validateForm("student");

    if (!checkValidStudent) {
      showToastValidation();
      return;
    }

    personList.updatePerson(updateStudent, "student");

    console.log("🚀 ~ file: index.js:172 ~ updateStudent:", updateStudent);

    personList.renderTableSinhVien("#tbody-table-student");
  } else if (statusTypePerson === "employee") {
    let updateEmployee = new Employee(
      inputName.value,
      inputAddress.value,
      inputEmail.value,
      inputId.value,
      +inputNumberOfWorkingDay.value,
      +inputDailyWage.value
    );

    console.log("🚀 ~ file: index.js:172 ~ new employee:", updateEmployee);

    let checkValidEmployee = valid.validateForm("employee");

    if (!checkValidEmployee) {
      showToastValidation();
      return;
    }

    personList.updatePerson(updateEmployee, "employee");
    personList.renderTableNhanVien("#tbody-table-employee");
  } else {
    let updateCustomer = new Customer(
      inputName.value,
      inputAddress.value,
      inputEmail.value,
      inputId.value,
      inputCompanyName.value,
      +inputInvoiceinput.value,
      +inputRate.value
    );
    console.log("🚀 ~ file: index.js:172 ~ new customer:", updateCustomer);

    let checkValidCustomer = valid.validateForm("customer");

    if (!checkValidCustomer) {
      showToastValidation();
      return;
    }

    personList.updatePerson(updateCustomer, "customer");
    personList.renderTableKhachHang("#tbody-table-customer");
  }

  personList.saveListPersonsToLocalStorage();

  console.log("🚀 ~ file: indexx.js:187 ~ personList:", personList);
};

window.remove = function (id) {
  console.log("id xoaaaa", id);

  personList.removePerson(id);

  if (statusTypePerson === "student") {
    personList.renderTableSinhVien("#tbody-table-student");
  } else if (statusTypePerson === "employee") {
    personList.renderTableNhanVien("#tbody-table-employee");
  } else {
    personList.renderTableKhachHang("#tbody-table-customer");
  }

  personList.saveListPersonsToLocalStorage();
};

function statusAddPerson() {
  btnAddNewPerson.classList.remove("d-none");
  btnUpdateData.classList.add("d-none");
}

function statusUpdatePerson() {
  btnAddNewPerson.classList.add("d-none");
  btnUpdateData.classList.remove("d-none");
}

window.updatePerson = function (personId) {
  statusUpdatePerson();

  console.log("Updating person with ID:", personId);

  const formFields = {
    student: {
      name: inputName,
      address: inputAddress,
      email: inputEmail,
      id: inputId,
      mathScore: inputMath,
      physicsScore: inputPhysics,
      chemistryScore: inputChemistry,
    },
    employee: {
      name: inputName,
      address: inputAddress,
      email: inputEmail,
      id: inputId,
      workingDays: inputNumberOfWorkingDay,
      dailySalary: inputDailyWage,
    },
    customer: {
      name: inputName,
      address: inputAddress,
      email: inputEmail,
      id: inputId,
      companyName: inputCompanyName,
      orderValue: inputInvoiceinput,
      rating: inputRate,
    },
  };

  const person = personList.getPerson(personId);
  console.log("Person to update:", person);

  const formFieldsForPersonType = formFields[statusTypePerson];
  Object.entries(formFieldsForPersonType).forEach(([key, value]) => {
    value.value = person[key];
  });

  personList.saveListPersonsToLocalStorage();

  console.log("Updated person list:", personList);
};

let btnCloseModal = document.getElementById("btn-close-modal");
btnCloseModal.addEventListener("click", () => {
  $("#my-toast-id").toast("hide");

  document.getElementById("person-form").reset();
  inputId.placeholder = "Hệ thống tự động tạo mã";
});
