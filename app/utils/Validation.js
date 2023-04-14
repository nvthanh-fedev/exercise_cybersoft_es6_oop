export class Validation {
  constructor(dom) {
    this.dom = this.dom;
    this.inputName = dom.inputName;
    this.inputAddress = dom.inputAddress;
    this.inputEmail = dom.inputEmail;
    this.inputMath = dom.inputMath;
    this.inputPhysics = dom.inputPhysics;
    this.inputChemistry = dom.inputChemistry;
    this.inputNumberOfWorkingDay = dom.inputNumberOfWorkingDay;
    this.inputDailyWage = dom.inputDailyWage;
    this.inputCompanyName = dom.inputCompanyName;
    this.inputInvoiceinput = dom.inputInvoiceValue;
    this.inputRate = dom.inputRate;

    // Bind the `this` context for the `validateForm()` method
    this.validateForm = this.validateForm.bind(this);

    this.notification = "";
  }

  validateForm(stateTypeOfPerson) {
    this.notification = "";

    console.log("validation type ", stateTypeOfPerson);

    let valid = true;

    const nameValue = this.inputName.value.trim();
    const addressValue = this.inputAddress.value.trim();
    const emailValue = this.inputEmail.value.trim();

    if (nameValue === "" || !/^[a-zA-ZÀ-ỹ ]+$/.test(nameValue)) {
      this.notification += `
                <div class="mb-1">
                  <h6 style="color: red; margin: 0; padding: 0;">Tên</h6>
                  <p>Tên không hợp lệ.</p>
                </div>`;
      valid = false;
    } else {
      this.notification += "";
    }

    if (
      addressValue === "" ||
      !/^[a-zA-ZÀ-ỹ0-9\s#,'-\/.()]+$/.test(addressValue)
    ) {
      this.notification += `
                <div class="mb-1">
                  <h6 style="color: red; margin: 0; padding: 0;">Địa chỉ</h6>
                  <p>Địa chỉ không hợp lệ.</p>
                </div>`;
      valid = false;
    } else {
      this.notification += "";
    }

    if (
      emailValue === "" ||
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        emailValue
      )
    ) {
      this.notification += `
                <div class="mb-1">
                  <h6 style="color: red; margin: 0; padding: 0;">Email</h6>
                  <p>Sai định dạng email.</p>
                </div>`;
      valid = false;
    } else {
      this.notification += "";
    }

    if (stateTypeOfPerson === "student") {
      const mathScoreValue = +this.inputMath.value;
      const physicsScoreValue = +this.inputPhysics.value;
      const chemistryScoreValue = +this.inputChemistry.value;

      if (
        isNaN(mathScoreValue) ||
        mathScoreValue <= 0 ||
        mathScoreValue > 10 ||
        isNaN(physicsScoreValue) ||
        physicsScoreValue <= 0 ||
        physicsScoreValue > 10 ||
        isNaN(chemistryScoreValue) ||
        chemistryScoreValue <= 0 ||
        chemistryScoreValue > 10
      ) {
        this.notification += `
                <div class="mb-1">
                  <h6 style="color: red; margin: 0; padding: 0;">Điểm số</h6>
                  <p>Điểm phải có giá trị lớn hơn 0 và bé hơn 10.</p>
                </div>`;
        valid = false;
      } else {
        this.notification += "";
      }
    } else if (stateTypeOfPerson === "employee") {
      const numberOfWorkingDayValue = +this.inputNumberOfWorkingDay.value;
      const dailyWageValue = +this.inputDailyWage.value;

      if (
        isNaN(numberOfWorkingDayValue) ||
        numberOfWorkingDayValue <= 0 ||
        numberOfWorkingDayValue > 31
      ) {
        this.notification += `
                <div class="mb-1">
                  <h6 style="color: red; margin: 0; padding: 0;">Số ngày làm việc</h6>
                  <p>Số ngày làm việc phải có giá trị từ 0 đến 31 ngày.</p>
                </div>`;
        valid = false;
      } else {
        this.notification += "";
      }

      if (
        isNaN(dailyWageValue) ||
        dailyWageValue < 20 ||
        dailyWageValue > 300
      ) {
        this.notification += `
                <div class="mb-1">
                  <h6 style="color: red; margin: 0; padding: 0;">Lương/Ngày</h6>
                  <p>Lương 1 ngày phải nằm trong khoảng từ 20 đến 300 $.</p>
                </div>`;
        valid = false;
      } else {
        this.notification += "";
      }
    } else {
      const companyNameValue = this.inputCompanyName.value;
      const invoiceinputValue = +this.inputInvoiceinput.value;
      const rateValue = +this.inputRate.value;

      if (
        companyNameValue.length < 3 ||
        companyNameValue.length > 50 ||
        !/^[\p{L}\d\s,'-]{5,100}$/u.test(companyNameValue)
      ) {
        this.notification += `
                <div class="mb-1">
                  <h6 style="color: red; margin: 0; padding: 0;">Tên công ty</h6>
                  <p>Tên chỉ chứa ký tự chữ, chữ cái đầu viết hoa và có độ dài từ 3 đến 50 ký tự.</p>
                </div>`;
        valid = false;
      } else {
        this.notification += "";
      }

      if (isNaN(invoiceinputValue) || invoiceinputValue <= 1) {
        this.notification += `
                <div class="mb-1">
                  <h6 style="color: red; margin: 0; padding: 0;">Giá trị hoá đơn</h6>
                  <p>Trị giá hoá đơn không hợp lệ. Giá trị phải lớn hơn 1.</p>
                </div>`;
        valid = false;
      } else {
        this.notification += "";
      }

      if (isNaN(rateValue) || rateValue < 1 || rateValue > 5) {
        this.notification += `
                <div class="mb-1">
                  <h6 style="color: red; margin: 0; padding: 0;">Đánh wgiá</h6>
                  <p>Đánh giá phải nằm trong khoảng từ 1 đến 5 sao.</p>
                </div>`;
        valid = false;
      } else {
        this.notification += "";
      }
    }

    if (valid) {
      this.notification = "Thông tin người dùng hợp lệ.";
    } else {
      this.dom.myToastBody.innerHTML = this.notification;
    }

    return valid;
  }
}
