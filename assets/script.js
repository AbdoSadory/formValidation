console.log("hi");
const form = document.getElementById("form");
const firstName = document.getElementById("firstName-input");
const firstNameErrorMsg = document.getElementById("fName-error-msg");
const lastName = document.getElementById("lastName-input");
const lastNameErrorMsg = document.getElementById("lName-error-msg");
const email = document.getElementById("email-input");
const emailErrorMsg = document.getElementById("email-error-msg");
const phone = document.getElementById("phone-input");
const phoneErrorMsg = document.getElementById("phone-error-msg");
let chosenCountry = "";
const countrySelectErrorMsg = document.getElementById("country-error-msg");
const aboutTextarea = document.getElementById("about-textarea");
const aboutTextareaErrorMsg = document.getElementById("about-error-msg");
const cvInput = document.getElementById("cv-input");
const cvInputErrorMsg = document.getElementById("cv-error-msg");
const otherInput = document.getElementById("other-input");
const otherInputErrorMsg = document.getElementById("other-error-msg");
const checkAgreement = document.getElementById("agreement-checkbox");
const checkAgreementErrorMsg = document.getElementById("agreement-error-msg");
const submitMsg = document.getElementById("submit-msg");
const fileValidationRegEx = /(\.pdf)$/gi;
const selectWrapper = document.getElementById("wrapper");
selectWrapper.addEventListener("click", () => {
  const content = document.getElementById("content");
  content.style.visibility === "visible"
    ? (content.style.visibility = "hidden")
    : (content.style.visibility = "visible");
});
form.addEventListener("submit", (event) => {
  let fnameValidationState = firstNameValidation();
  let lnameValidationState = lastNameValidation();
  let phoneValidationState = phoneValidation();
  let countryValidationState = countryValidation();
  let emailValidationState = emailValidation();
  let aboutValidationState = aboutValidation();
  let cvFileValidationState = cvFileValidation();
  let otherFileValidationState = otherFileValidation();
  let agreementValidationState = agreementValidation();
  if (
    fnameValidationState &&
    lnameValidationState &&
    phoneValidationState &&
    emailValidationState &&
    countryValidationState &&
    aboutValidationState &&
    cvFileValidationState &&
    otherFileValidationState &&
    agreementValidationState
  ) {
    event.preventDefault();
    submitMsg.innerText = "submit is done";
  } else {
    event.preventDefault();
    submitMsg.innerText = "";
  }
});

const firstNameValidation = () => {
  if (firstName.value.length >= 3 && firstName.value.length <= 10) {
    firstNameErrorMsg.innerText = "";
    firstNameErrorMsg.style.display = "none";
    return "valid";
  } else {
    let msg = "invalid input, first name must between 3 - 10";
    firstNameErrorMsg.innerText = msg;
    firstNameErrorMsg.style.display = "block";
    return false;
  }
};

const lastNameValidation = () => {
  if (lastName.value.length >= 3 && lastName.value.length <= 10) {
    lastNameErrorMsg.innerText = "";
    lastNameErrorMsg.style.display = "none";
    return "valid";
  } else {
    let msg = "invalid input, last name must between 3 - 10";
    lastNameErrorMsg.innerText = msg;
    lastNameErrorMsg.style.display = "block";
    return false;
  }
};

const phoneValidation = () => {
  if (phone.value.length >= 9 && phone.value.length <= 12) {
    phoneErrorMsg.innerText = "";
    phoneErrorMsg.style.display = "none";
    return "valid";
  } else {
    let msg = "invalid input, phone must between 9 - 12";
    phoneErrorMsg.innerText = msg;
    phoneErrorMsg.style.display = "block";
    return false;
  }
};

const emailValidation = () => {
  if (email.value) {
    emailErrorMsg.innerText = "";
    emailErrorMsg.style.display = "none";
    return "valid";
  } else {
    let msg = "invalid input, you must enter email";
    emailErrorMsg.innerText = msg;
    emailErrorMsg.style.display = "block";
    return false;
  }
};

const chooseCountry = (selectedCountry) => {
  const selectedCountryElement = document.getElementById("selectedCountry");
  chosenCountry = selectedCountry.innerText;
  const countriesOptions = document.getElementsByClassName("country");
  for (const country of countriesOptions) {
    country.classList.remove("active");
  }
  selectedCountry.classList.toggle("active");
  selectedCountryElement.innerText = chosenCountry;
  console.log(chosenCountry);
};

const countryValidation = () => {
  if (!chosenCountry) {
    let msg = "invalid input, You must select country";
    countrySelectErrorMsg.innerText = msg;
    countrySelectErrorMsg.style.display = "block";
    return false;
  } else {
    countrySelectErrorMsg.innerText = "";
    countrySelectErrorMsg.style.display = "none";
    return "valid";
  }
};

const aboutValidation = () => {
  if (aboutTextarea.value.length > 10 && aboutTextarea.value.length < 100) {
    aboutTextareaErrorMsg.innerText = "";
    aboutTextareaErrorMsg.style.display = "none";
    return "valid";
  } else {
    let msg = "invalid input, You must write between 10 and 100 character";
    aboutTextareaErrorMsg.innerText = msg;
    aboutTextareaErrorMsg.style.display = "block";
    return false;
  }
};

const cvFileValidation = () => {
  let cvValidation =
    cvInput.value.match(fileValidationRegEx) &&
    cvInput.value.match(fileValidationRegEx).length;
  if (cvValidation) {
    cvInputErrorMsg.innerText = "";
    cvInputErrorMsg.style.display = "none";
    return "valid";
  } else {
    let msg = "You must upload pdf file";
    cvInputErrorMsg.innerText = msg;
    cvInputErrorMsg.style.display = "block";
    return false;
  }
};

const otherFileValidation = () => {
  let otherValidation =
    otherInput.value.match(fileValidationRegEx) &&
    otherInput.value.match(fileValidationRegEx).length;
  if (otherValidation) {
    otherInputErrorMsg.innerText = "";
    otherInputErrorMsg.style.display = "none";
    return "valid";
  } else {
    let msg = "You must upload pdf file";
    otherInputErrorMsg.innerText = msg;
    otherInputErrorMsg.style.display = "block";
    return false;
  }
};

const agreementValidation = () => {
  if (checkAgreement.checked) {
    checkAgreementErrorMsg.style.display = "none";
    checkAgreementErrorMsg.innerText = "";
    return true;
  } else {
    let msg = "You must agree";
    checkAgreementErrorMsg.innerText = msg;
    checkAgreementErrorMsg.style.display = "block";
    return false;
  }
};
