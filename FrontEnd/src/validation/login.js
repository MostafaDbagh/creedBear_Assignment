import * as Yup from "yup";

export const LoginValidation = Yup.object({
  email: Yup.string().email().required("email is required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters or more")
    .required("Password is required"),
});