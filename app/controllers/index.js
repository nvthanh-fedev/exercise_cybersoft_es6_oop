import { ListPerson } from "../models/ListPerson.js";
import { Student } from "../models/Student.js";
import { Customer } from "../models/Customer.js";
import { Employee } from "../models/Employee.js";
import { Validation } from "../utils/Validation.js";
import { DOM } from "../models/DOM.js";
const personList = new ListPerson();
const valid = new Validation(DOM);
personList.getStore();

window.addEventListener("load", (e) => {
  showAllStudent();
});

let statusTypePerson = "student";
let statusForm = "add";
const elementsStudents = createAttributeArrayForIds("student");
const elementsEmployees = createAttributeArrayForIds("employee");
const elementsCustomers = createAttributeArrayForIds("customer");

DOM.btnSortNameStudent.addEventListener("click", () => {
  personList.renderTableSinhVien("#tbody-table-student", "name", true);
});
DOM.btnSortScoreStudent.addEventListener("click", () => {
  personList.renderTableSinhVien("#tbody-table-student", "average", true);
});
DOM.btnSortMathScoreStudent.addEventListener("click", () => {
  personList.renderTableSinhVien("#tbody-table-student", "math", true);
});
DOM.btnSortPhysicsScoreStudent.addEventListener("click", () => {
  personList.renderTableSinhVien("#tbody-table-student", "physics", true);
});
DOM.btnSortChemistryScoreStudent.addEventListener("click", () => {
  personList.renderTableSinhVien("#tbody-table-student", "chemistry", true);
});
DOM.btnSortNameEmployee.addEventListener("click", () => {
  personList.renderTableNhanVien("#tbody-table-employee", "name", true);
});
DOM.btnSortDays.addEventListener("click", () => {
  personList.renderTableNhanVien("#tbody-table-employee", "days", true);
});
DOM.btnSortSalaryPerDay.addEventListener("click", () => {
  personList.renderTableNhanVien("#tbody-table-employee", "salaryPerDay", true);
});
DOM.btnSortSalary.addEventListener("click", () => {
  personList.renderTableNhanVien("#tbody-table-employee", "salary", true);
});
DOM.btnSortNameCustomer.addEventListener("click", () => {
  personList.renderTableKhachHang("#tbody-table-customer", "name", true);
});
DOM.btnSortTriGiaHoaDon.addEventListener("click", () => {
  personList.renderTableKhachHang("#tbody-table-customer", "hd", true);
});
DOM.btnSortRate.addEventListener("click", () => {
  personList.renderTableKhachHang("#tbody-table-customer", "rate", true);
});
DOM.btnShowTableStudent.addEventListener("click", function () {
  showTable("student", this);
});

DOM.btnShowTableEmployee.addEventListener("click", function () {
  showTable("employee", this);
});

DOM.btnShowTableCustomer.addEventListener("click", function () {
  showTable("customer", this);
});
DOM.btnCloseModal.addEventListener("click", () => {
  $("#my-toast-id").toast("hide");

  document.getElementById("person-form").reset();
  inputId.placeholder = "Nhập mã";
});

DOM.inputSearch.addEventListener("input", () => {
  const value = DOM.inputSearch.value;
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
DOM.addStudentButton.addEventListener("click", () => {
  statusForm = "add";
  statusTypePerson = "student";
  statusAddPerson();
  console.log(statusForm, "   ", statusTypePerson);
});
DOM.addEmployeeButton.addEventListener("click", () => {
  statusForm = "add";
  statusTypePerson = "employee";
  statusAddPerson();
  console.log(statusForm, "   ", statusTypePerson);
});
DOM.addCustomerButton.addEventListener("click", () => {
  statusForm = "add";
  statusTypePerson = "customer";
  statusAddPerson();
  console.log(statusForm, "   ", statusTypePerson);
});
DOM.btnAddNewPerson.addEventListener("click", function () {
  if (statusTypePerson === "student") {
    let newStudent = new Student(
      DOM.inputName.value,
      DOM.inputAddress.value,
      DOM.inputEmail.value,
      inputId.value,
      +DOM.inputMath.value,
      +DOM.inputPhysics.value,
      +DOM.inputChemistry.value
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
      DOM.inputName.value,
      DOM.inputAddress.value,
      DOM.inputEmail.value,
      inputId.value,
      +DOM.inputNumberOfWorkingDay.value,
      +DOM.inputDailyWage.value
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
      DOM.inputName.value,
      DOM.inputAddress.value,
      DOM.inputEmail.value,
      inputId.value,
      DOM.inputCompanyName.value,
      +DOM.inputInvoiceinput.value,
      +DOM.inputRate.value
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

const showTable = function (tableType, button) {
  if (tableType === "student") {
    showAllStudent();
    DOM.titleWeb.innerHTML = "Student managerment";
  } else if (tableType === "employee") {
    showAllEmployee();
    DOM.titleWeb.innerHTML = "Employee managerment";
  } else if (tableType === "customer") {
    showAllCustomer();
    DOM.titleWeb.innerHTML = "Customer managerment";
  }

  const buttons = [
    DOM.btnShowTableStudent,
    DOM.btnShowTableEmployee,
    DOM.btnShowTableCustomer,
  ];
  buttons.forEach(function (btn) {
    if (btn === button) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
};

const showToastValidation = () => {
  var toastElList = [].slice.call(document.querySelectorAll(".toast"));
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl);
  });
  toastList.forEach((toast) => toast.show());
};

const statusAddPerson = () => {
  document.getElementById("inputId").disabled = false;
  DOM.btnAddNewPerson.classList.remove("d-none");
  DOM.btnUpdateData.classList.add("d-none");
};

const statusUpdatePerson = () => {
  document.getElementById("inputId").disabled = true;
  DOM.btnAddNewPerson.classList.add("d-none");
  DOM.btnUpdateData.classList.remove("d-none");
};

window.updateDataPerson = () => {
  console.log("cap nhat deee");

  if (statusTypePerson === "student") {
    const updateStudent = new Student(
      DOM.inputName.value,
      DOM.inputAddress.value,
      DOM.inputEmail.value,
      inputId.value,
      +DOM.inputMath.value,
      +DOM.inputPhysics.value,
      +DOM.inputChemistry.value
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
      DOM.inputName.value,
      DOM.inputAddress.value,
      DOM.inputEmail.value,
      inputId.value,
      +DOM.inputNumberOfWorkingDay.value,
      +DOM.inputDailyWage.value
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
      DOM.inputName.value,
      DOM.inputAddress.value,
      DOM.inputEmail.value,
      inputId.value,
      DOM.inputCompanyName.value,
      +DOM.inputInvoiceinput.value,
      +DOM.inputRate.value
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

window.updatePerson = function (personId) {
  statusUpdatePerson();

  console.log("Updating person with ID:", personId);

  const formFields = {
    student: {
      name: DOM.inputName,
      address: DOM.inputAddress,
      email: DOM.inputEmail,
      id: inputId,
      mathScore: DOM.inputMath,
      physicsScore: DOM.inputPhysics,
      chemistryScore: DOM.inputChemistry,
    },
    employee: {
      name: DOM.inputName,
      address: DOM.inputAddress,
      email: DOM.inputEmail,
      id: inputId,
      workingDays: DOM.inputNumberOfWorkingDay,
      dailySalary: DOM.inputDailyWage,
    },
    customer: {
      name: DOM.inputName,
      address: DOM.inputAddress,
      email: DOM.inputEmail,
      id: inputId,
      companyName: DOM.inputCompanyName,
      orderValue: DOM.inputInvoiceinput,
      rating: DOM.inputRate,
    },
  };

  const person = personList.getPerson(personId);
  console.log("Person to update:", person);

  const formFieldsForPersonType = formFields[statusTypePerson];
  console.log(
    "🚀 ~ file: index.js:422 ~ formFieldsForPersonType:",
    formFieldsForPersonType
  );
  Object.entries(formFieldsForPersonType).forEach(([key, domElement]) => {
    domElement.value = person[key];
  });
  personList.saveListPersonsToLocalStorage();
  console.log("Updated person list:", personList);
};

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
