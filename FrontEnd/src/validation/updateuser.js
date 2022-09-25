import * as Yup from "yup";

export const updateUserSchema = Yup.object({
  email: Yup.string().email(),
  firstname: Yup.string(),
  lastname:Yup.string()
});