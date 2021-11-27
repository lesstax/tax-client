export const isEmptyOrSpaces = (str) => {
  return str === "" || /^\s+$/.test(str);
};

export const phoneNumberValidator = (phoneNumber) => {
  return !isEmptyOrSpaces(phoneNumber) && /^\d{10}$/.test(phoneNumber);
};

export const emailValidator = (emailAddress) => {
  return (
    !isEmptyOrSpaces(emailAddress) &&
    new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(emailAddress)
  );
};

export const validateForm = (userDetails) => {
  let valid = {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    formValid: false,
  };
  if (!isEmptyOrSpaces(userDetails.firstName)) {
    valid = { ...valid, firstName: "valid" };
  } else {
    valid = { ...valid, firstName: "invalid" };
  }
  if (!isEmptyOrSpaces(userDetails.lastName)) {
    valid = { ...valid, lastName: "valid" };
  } else {
    valid = { ...valid, lastName: "invalid" };
  }
  if (emailValidator(userDetails.email)) {
    valid = { ...valid, email: "valid" };
  } else {
    valid = { ...valid, email: "invalid" };
  }
  if (phoneNumberValidator(userDetails.mobileNumber)) {
    valid = { ...valid, mobileNumber: "valid" };
  } else {
    valid = { ...valid, mobileNumber: "invalid" };
  }
  if (!isEmptyOrSpaces(userDetails.password)) {
    valid = { ...valid, password: "valid" };
  } else {
    valid = { ...valid, password: "invalid" };
  }
  if (
    valid.firstName === "valid" &&
    valid.lastName === "valid" &&
    valid.email === "valid" &&
    valid.mobileNumber === "valid" &&
    valid.password === "valid"
  ) {
    valid = { ...valid, formValid: true };
  } else {
    valid = { ...valid, formValid: false };
  }
  return valid;
};
