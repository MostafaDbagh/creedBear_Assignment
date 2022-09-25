
import { useState } from "react";
import { UpdatedForm } from "./modal";
import { useFormik } from "formik";
import { updateUser } from "../../api/auth";
import {  updateUserSchema } from "../../validation/updateuser";



export const ModalCantainer = ({hidden,sethidden,currentuser}) => {


  const [errorMsg,setErrorMsg] = useState('');

  const onSubmit = async () => {
    const {email,firstname,lastname} = formik.values;
    try {
      let { data } = await updateUser(currentuser.userId,
      email.length > 0 ?email: currentuser.email,
      firstname.length > 0 ?firstname: currentuser.firstname,
      lastname.length > 0 ?lastname: currentuser.lastname,
      );
      alert(data.message)
    
    } catch (e) {
      setErrorMsg("you failed to login please register first...")
    }

  };

  const formik = useFormik({
    initialValues: {
      email: "",
      firstname: "",
      lastname:''
    },
    validationSchema: updateUserSchema,
    onSubmit: onSubmit,
  });

  return <UpdatedForm formik={formik} errormsg={errorMsg} hidden={hidden}  setHidden={sethidden} currentuser={currentuser} />;
};
