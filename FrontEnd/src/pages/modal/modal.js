
 import React from "react";
 import "./modal.css"
    
 export const UpdatedForm = ({formik,errormsg,hidden,setHidden,currentuser}) => {
       return (
         <div className="modal-container" style={{display: hidden ? 'none':'block'}}  >
    
         <div className="modal-form">
             <button onClick={()=>{setHidden(true)}} style={{fontSize:'32px',width:"50px",height:'50px',position:"relative",right:'10px',margin:'12px 0 0 700px'}}>X</button>
         <form onSubmit={formik.handleSubmit}>
     
   
           <label htmlFor="email">Email Address</label>
           <div className="input-container">
           <input
             type="email"
             placeholder="your old Email... "
             value={currentuser.email}
             readOnly
           />
            <input
             id="email"
             name="email"
             type="email"
             placeholder="Enter your updated Email... "
             onChange={formik.handleChange}
             value={formik.values.email}
           />
           </div>
           {formik.errors.email && formik.touched.email ? <p className="error">email not correct</p>:""}
               <label htmlFor="password">firstname</label>

             <div className="input-container">
           <input
             type="text"
             placeholder="your old firstNamae... "
             value={currentuser.firstname}
           />
            <input
             id="firstname"
             name="firstname"
             type="text"
             placeholder="Enter your updated firstNamae... "
             onChange={formik.handleChange}
             value={formik.values.firstname}
           />
           </div>
            {formik.errors.password && formik.touched.password ?  <p className="error">password not correct </p>:""}
            <label htmlFor="lastname">last_name</label>
            <div >
            <div className="input-container">
           <input
             type="text"
             placeholder=" your old lastName... "
             value={currentuser.lastname}
             readOnly
           />
               <input
             id="lastname"
             name="lastname"
             type="text"
             placeholder="Enter your updated lastName... "
             onChange={formik.handleChange}
             value={formik.values.lastname}
           />
           </div>
           </div>
           <button type="submit">Edit User</button>
           {errormsg && <h3 className="error">{errormsg} </h3>}
         </form>
     
         </div>
 
         </div>
       );
     };
     
 