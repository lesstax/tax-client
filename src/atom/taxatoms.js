import { atom } from "recoil";

export const loginedUser = atom({
  key: "loginedUser",
  default: {
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
  },
});
