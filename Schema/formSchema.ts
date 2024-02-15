import * as yup from "yup";
export const formSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  name: yup.string().required("Required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d).+$/,
      "Must contain at least one letter and one number"
    )
    .required("Required"),
  Referral: yup.string().required("Required"),
});
