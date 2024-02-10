import * as yup from "yup";
export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d).+$/,
      "Must contain at least one letter and one number"
    )
    .required("Required"),
});
