import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Formik,Form,Field } from "formik";
import * as Yup from "yup" ;

 


const signup=Yup.object().shape({
        
    firstname:Yup.string("enter a valid name").min(3,"name  can not be less than 3 characters" ).max(30,"name is too long").required("first name is required"),
  
    lastname:Yup.string("enter a valid name").min(3,"lastname  can not be less than 3 characters" ).max(30,"lastname is too long").required("last name is required"),
  
    email:Yup.string("email is invalid").email().required("Email is required"),
  
    
  
    password:Yup.string().required("password is required").min(6,"password can not be less than 6 characters").max(12,"password is too long"),
    confirmpassword:Yup.string().required("confirm password is required").min(6,"password can not be less than 6 characters").max(12,"password is too long")
    
  
  })


function Signup() {
    const [initialFormValues]=useState({
        firstname:"",
        lastname:"",
         
        email:"",
        password:"",
        confirmpassword:""
    })
    let navigate=useNavigate();

function handleSubmit(e){
    e.preventDefault();
   
     alert("Signup successful !! Enter the Login credentials.")
    navigate("/Login",true); 
    
}
    function handleChange(){
        navigate("/Login",true);
    } 

    return(

<div className="signup-block">
             <h1 className="signup">Sign up</h1>      
             <Formik validationSchema={signup}  initialValues={initialFormValues}  >
        {({errors,touched})=>(

            <Form >
                <div>
                <label> 
                <Field className="field" type="text" name="firstname" placeholder={" First name"} />
                </label>
               
                </div> 
                {errors.firstname && touched.firstname ? <div>{errors.firstname}</div>:null }
                <div>
                <label> 
                <Field className="field" type="text" name="lastname" placeholder={"Last name"} />
                </label>
                </div>
                {errors.lastname && touched.lastname ? <div>{errors.lastname}</div>:null }
                 


                <div><label > 

            <Field className="field" type="email" name="email" placeholder={"Email"} />
                </label></div>
                {errors.email && touched.email? <div>{errors.email}</div>:null }

                
                <div>
                    <label > 

            <Field className="field" type="password" name="password" placeholder={"Password"} />
                </label>
                
                </div>
                {errors.password && touched.password? <div>{errors.password}</div>:null }
                <div>
                    <label > 

            <Field className="field" type="password" name="confirmpassword" placeholder={"Confirm password"} />
                </label>
                
                </div>

                <p> Already have an account ?  <a onClick={handleChange} className={"login-here"} >Log In</a>  here.</p>
            <button onClick={handleSubmit} type="submit" className="signup-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg><a>Sign Up</a> </button>

            </Form>
        )}


    </Formik>
           
        
          
       </div>
            


    )
}

export default Signup;
