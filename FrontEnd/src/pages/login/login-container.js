
import { useState } from "react";
import { LoginForm } from "./login";
import { useFormik } from "formik";
import { LoaginWithAuth } from "../../api/auth";
import { LoginValidation } from "../../validation/login";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {saveUser} from '../../redux/userSlice'


export const LoginContainer = () => {
 const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMsg,setErrorMsg] = useState('');
  
  const onSubmit = async () => {
    const {email} = formik.values;
    try {
      let { data } = await LoaginWithAuth(email);
      const {status,user}= data;
       dispatch(saveUser({user,status}))
      navigate("/store");
    } catch (e) {
      setErrorMsg("you failed to login please register first...")
    }

  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: onSubmit,
  });

  return <LoginForm formik={formik} errormsg={errorMsg} />;
};
