import { ListPerson } from "../models/ListPerson.js";
import { Student } from "../models/Student.js";
import { Customer } from "../models/Customer.js";
import { Employee } from "../models/Employee.js";
import { Validation } from "../utils/Validation.js";

const personList = new ListPerson();
const valid = new Validation();

personList.getStore();
window.addEventListener("load", (e) => {
  showAllStudent();
});

let statusTypePerson = "student";
let statusForm = "add";

const getElement = (selector) => document.querySelector(selector);

const btnShowTableStudent = getElement("#btn-show-std");
const btnShowTableEmployee = getElement("#btn-show-epl");
const btnShowTableCustomer = getElement("#btn-show-ctm");

const elementsStudents = createAttributeArrayForIds("student");
const elementsEmployees = createAttributeArrayForIds("employee");
const elementsCustomers = createAttributeArrayForIds("customer");

const btnUpdateData = document.getElementById("btn-update-data");

const btnAddNewPerson = getElement("#btn-add-new-person");

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

const btnSortNameStudent = document.getElementById(
  "btn-chuc-nang-sap-xep-ten-giam-dan-student"
);

btnSortNameStudent.addEventListener("click", () => {
  personList.renderTableSinhVien("#tbody-table-student", "name", true);
});

const btnSortScoreStudent = document.getElementById(
  "btn-chuc-nang-sap-xep-diem-trung-binh-giam-dan-student"
);

btnSortScoreStudent.addEventListener("click", () => {
  personList.renderTableSinhVien("#tbody-table-student", "average", true);
});

const btnSortMathScoreStudent = document.getElementById(
  "btn-chuc-nang-sap-xep-diem-toan-giam-dan-student"
);

btnSortMathScoreStudent.addEventListener("click", () => {
  personList.renderTableSinhVien("#tbody-table-student", "math", true);
});

const btnSortPhysicsScoreStudent = document.getElementById(
  "btn-chuc-nang-sap-xep-diem-ly-giam-dan-student"
);

btnSortPhysicsScoreStudent.addEventListener("click", () => {
  personList.renderTableSinhVien("#tbody-table-student", "physics", true);
});

const btnSortChemistryScoreStudent = document.getElementById(
  "btn-chuc-nang-sap-xep-diem-hoa-giam-dan-student"
);

btnSortChemistryScoreStudent.addEventListener("click", () => {
  personList.renderTableSinhVien("#tbody-table-student", "chemistry", true);
});

const btnSortNameEmployee = document.getElementById(
  "btn-chuc-nang-sap-xep-ten-giam-dan-employee"
);

btnSortNameEmployee.addEventListener("click", () => {
  personList.renderTableNhanVien("#tbody-table-employee", "name", true);
});

const btnSortDays = document.getElementById(
  "btn-chuc-nang-sap-xep-so-ngay-lam-viec-giam-dan-employee"
);

btnSortDays.addEventListener("click", () => {
  personList.renderTableNhanVien("#tbody-table-employee", "days", true);
});

const btnSortSalaryPerDay = document.getElementById(
  "btn-chuc-nang-sap-xep-luong-tren-ngay-giam-dan-employee"
);

btnSortSalaryPerDay.addEventListener("click", () => {
  personList.renderTableNhanVien("#tbody-table-employee", "salaryPerDay", true);
});

const btnSortSalary = document.getElementById(
  "btn-chuc-nang-sap-xep-luong-giam-dan-employee"
);

btnSortSalary.addEventListener("click", () => {
  personList.renderTableNhanVien("#tbody-table-employee", "salary", true);
});

const btnSortNameCustomer = document.getElementById(
  "btn-chuc-nang-sap-xep-ten-giam-dan-customer"
);

btnSortNameCustomer.addEventListener("click", () => {
  personList.renderTableKhachHang("#tbody-table-customer", "name", true);
});

const btnSortTriGiaHoaDon = document.getElementById(
  "btn-chuc-nang-sap-xep-tri-gia-hoa-don-giam-dan-customer"
);

btnSortTriGiaHoaDon.addEventListener("click", () => {
  personList.renderTableKhachHang("#tbody-table-customer", "hd", true);
});

const btnSortRate = document.getElementById(
  "btn-chuc-nang-sap-xep-danh-gia-giam-dan-customer"
);

btnSortRate.addEventListener("click", () => {
  personList.renderTableKhachHang("#tbody-table-customer", "rate", true);
});

const addStudentButton = getElement("#btn-add-student");
addStudentButton.addEventListener("click", () => {
  statusForm = "add";
  statusTypePerson = "student";
  statusAddPerson();
  console.log(statusForm, "   ", statusTypePerson);
});

const addEmployeeButton = getElement("#btn-add-employee");
addEmployeeButton.addEventListener("click", () => {
  statusForm = "add";
  statusTypePerson = "employee";
  statusAddPerson();
  console.log(statusForm, "   ", statusTypePerson);
});
const addCustomerButton = getElement("#btn-add-customer");
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
  toggleClassForElementsByIds(elementsStudents, false);
  toggleClassForElementsByIds(elementsEmployees, true);
  toggleClassForElementsByIds(elementsCustomers, true);
};

const showAllEmployee = () => {
  statusTypePerson = "employee";
  toggleClassForElementsByIds(elementsStudents, true);
  toggleClassForElementsByIds(elementsEmployees, false);
  toggleClassForElementsByIds(elementsCustomers, true);
};

const showAllCustomer = () => {
  statusTypePerson = "customer";
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
      inputId.value,
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
    personList.renderTableSinhVien("#tbody-table-student", "default");
  } else if (statusTypePerson === "employee") {
    let newEmployee = new Employee(
      inputName.value,
      inputAddress.value,
      inputEmail.value,
      inputId.value,
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
    personList.renderTableNhanVien("#tbody-table-employee", "");
  } else {
    let newCustomer = new Customer(
      inputName.value,
      inputAddress.value,
      inputEmail.value,
      inputId.value,
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
    personList.renderTableKhachHang("#tbody-table-customer", "");
  }

  // showToastValidation();

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

window.updateDataPerson = () => {
  console.log("cap nhat deee");

  if (statusTypePerson === "student") {
    const updateStudent = new Student(
      inputName.value,
      inputAddress.value,
      inputEmail.value,
      inputId.value,
      +inputMath.value,
      +inputPhysics.value,
      +inputChemistry.value
    );
    const checkValidStudent = valid.validateForm("student");
    if (!checkValidStudent) {
      showToastValidation();
      return;
    }

    personList.updatePerson(updateStudent);
    console.log("🚀 ~ file: index.js:172 ~ updateStudent:", updateStudent);
    personList.renderTableSinhVien("#tbody-table-student", "default");
  } else if (statusTypePerson === "employee") {
    const updateEmployee = new Employee(
      inputName.value,
      inputAddress.value,
      inputEmail.value,
      inputId.value,
      +inputNumberOfWorkingDay.value,
      +inputDailyWage.value
    );
    console.log("🚀 ~ file: index.js:172 ~ new employee:", updateEmployee);

    const checkValidEmployee = valid.validateForm("employee");
    if (!checkValidEmployee) {
      showToastValidation();
      return;
    }

    personList.updatePerson(updateEmployee);
    personList.renderTableNhanVien("#tbody-table-employee");
  } else {
    const updateCustomer = new Customer(
      inputName.value,
      inputAddress.value,
      inputEmail.value,
      inputId.value,
      inputCompanyName.value,
      +inputInvoiceinput.value,
      +inputRate.value
    );
    console.log("🚀 ~ file: index.js:172 ~ new customer:", updateCustomer);

    const checkValidCustomer = valid.validateForm("customer");
    if (!checkValidCustomer) {
      showToastValidation();
      return;
    }

    personList.updatePerson(updateCustomer);
    personList.renderTableKhachHang("#tbody-table-customer");
  }

  personList.saveListPersonsToLocalStorage();
  console.log("🚀 ~ file: indexx.js:187 ~ personList:", personList);
};

window.remove = (id) => {
  console.log("id xoaaaa", id);
  personList.removePerson(id);
  if (statusTypePerson === "student") {
    personList.renderTableSinhVien("#tbody-table-student", "default");
  } else if (statusTypePerson === "employee") {
    personList.renderTableNhanVien("#tbody-table-employee");
  } else {
    personList.renderTableKhachHang("#tbody-table-customer");
  }
  personList.saveListPersonsToLocalStorage();
};

const statusAddPerson = () => {
  document.getElementById("inputId").disabled = false;
  btnAddNewPerson.classList.remove("d-none");
  btnUpdateData.classList.add("d-none");
};

const statusUpdatePerson = () => {
  document.getElementById("inputId").disabled = true;
  btnAddNewPerson.classList.add("d-none");
  btnUpdateData.classList.remove("d-none");
};

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

const btnCloseModal = document.getElementById("btn-close-modal");
btnCloseModal.addEventListener("click", () => {
  $("#my-toast-id").toast("hide");

  document.getElementById("person-form").reset();
  inputId.placeholder = "Nhập mã";
});

const inputSearch = document.querySelector("#input-search-keyword");

inputSearch.addEventListener("input", () => {
  const value = inputSearch.value;
  console.log(
    "🚀 ~ file: index.js:468 ~ inputSearch.addEventListener ~ value:",
    value
  );

  const slugTuKhoa = stringToSlug(value);

  if (statusTypePerson === "student") {
    const arrFilter = personList
      .getStudents(personList.persons)
      .filter((sv) => {
        const hoTen = stringToSlug(sv.name);
        return hoTen.search(slugTuKhoa) !== -1;
      });

    personList.onlyRenderTableSinhVien(
      arrFilter,
      "#tbody-table-student",
      "default"
    );
    return;
  } else if (statusTypePerson === "employee") {
    const arrFilter = personList
      .getEmployees(personList.persons)
      .filter((nv) => {
        const hoTen = stringToSlug(nv.name);
        return hoTen.search(slugTuKhoa) !== -1;
      });

    personList.onlyRenderTableNhanVien(
      arrFilter,
      "#tbody-table-employee",
      "default"
    );
    return;
  } else {
    const arrFilter = personList
      .getCustomers(personList.persons)
      .filter((kh) => {
        const hoTen = stringToSlug(kh.name);
        return hoTen.search(slugTuKhoa) !== -1;
      });

    personList.onlyRenderTableKhachHang(
      arrFilter,
      "#tbody-table-customer",
      "default"
    );
    return;
  }
});

function stringToSlug(title) {
  //Đổi chữ hoa thành chữ thường
  let slug = title.toLowerCase();

  //Đổi ký tự có dấu thành không dấu
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
  slug = slug.replace(/đ/gi, "d");
  //Xóa các ký tự đặt biệt
  slug = slug.replace(
    /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
    ""
  );
  //Đổi khoảng trắng thành ký tự gạch ngang
  slug = slug.replace(/ /gi, "-");
  //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
  //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
  slug = slug.replace(/\-\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-/gi, "-");
  slug = slug.replace(/\-\-/gi, "-");
  //Xóa các ký tự gạch ngang ở đầu và cuối
  slug = "@" + slug + "@";
  slug = slug.replace(/\@\-|\-\@|\@/gi, "");

  return slug;
}
