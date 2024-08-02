import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import Validation from "./LoginValidation";
import axios from "axios";
import "./styles.css";
import Navbar from './Navbar';


function Login() {

    const navigate= useNavigate();
    const [values, setValues] =useState({
        email : "",
        password : ""
    })
    const[errors, setErrors]=useState({})

    const handleInput=(event)=>{
        setValues(prev =>({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email==="" && errors.password === ""){
            axios.post("http://localhost:8081/login", values)
            .then(res => {
                if(res.data==="success"){
                    navigate("/startpage");
                    // window.location.href="http://localhost:8000/";
                }else{
                    alert("No record found")
                }
            })
            .catch(err=>console.log(err));
        }

    }
  return (

    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
          Welcome Back to Seamless Connections! 🔗
          </h1>
          <p className="primary-text">
          Log in to Start Connecting.
          </p>
        </div>
        <div className="home-image-section newbg bg-white p-3 rounded w-25">
            
            <h2>Log-In</h2>
            <form action='' onSubmit={handleSubmit} autoComplete="off">
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type="email" name="email" placeholder='Enter Email' className='form-control rounded-0' onChange={handleInput} />
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type="password" name="password" placeholder='Enter Password' className='form-control rounded-0' onChange={handleInput} />
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type="submit" className='btn btn-success w-100 rounded-0'><strong>Login</strong></button>
                <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'><strong>Create Account</strong></Link>
            </form>
        </div>
        </div>
        </div>
     
  );
}

export default Login