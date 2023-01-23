import * as yup from "yup";

export const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
export const emailValidationRule = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .required("Required"),
 
});

export const basicSchemaRegister = yup.object().shape({
  userName:yup.string().min(3,"Name Must greeter than 3").max(30,"Your names is too much").required("Names Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  userPassword: yup
    .string()
    .min(5)
    .required("Required"),
    phone:yup.number().min(10, "minimum number is 10 digits").max(10,"Maximum number is 10 digits"),
});


