
 import React from "react";

import "./login.css"
   
export const LoginForm = ({formik,errormsg}) => {
// const {email,auth} = useSelector(s =>s.user);
      return (
        <div className="container" >
        <div className="intro" >
          <h1>
            login Page
          </h1>
        </div>
        <div className="form-div">
        <form onSubmit={formik.handleSubmit}>
    
  
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email... "
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? <p className="error">email not correct</p>:""}
              <label htmlFor="password">password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your Password... "
            onChange={formik.handleChange}
            value={formik.values.password}
          />
           {formik.errors.password && formik.touched.password ?  <p className="error">password not correct </p>:""}
          <button type="submit">Submit</button>
          {errormsg && <h3 className="error">{errormsg} </h3>}
        </form>
    
        </div>

        </div>
      );
    };
    
