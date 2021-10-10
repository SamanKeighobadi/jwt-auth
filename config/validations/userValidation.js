const yup = require("yup");

const userValidation = yup.object().shape({
  email: yup
    .string()
    .email("Email not valid")
    .trim()
    .required("Email is required"),
  password: yup
    .string()
    .required("Passwrod is required")
    .min(4, "leat than 4 char")
    .max(100, "more than 100 char")
    .trim(),
});

module.exports = userValidation;
