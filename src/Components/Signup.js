import React, {useState} from 'react'
import {Link} from "react-router-dom"
import Validation from './SignupValidation'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import "./styles.css";
//import Signpic from "../Assets/sign-page.png";
//<noscript><img id ="sign" src={Signpic} alt="connect" /></noscript>


function Signup() {


    const [values, setValues] =useState({
        name :"",
        email : "",
        password : ""
    })
    const navigate=useNavigate();

    const[errors, setErrors]=useState({})

    const handleInput=(event)=>{
        setValues(prev =>({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name==="" && errors.email==="" && errors.password === ""){
            axios.post("http://localhost:8081/signup", values)
            .then(res => {
                navigate("/login")
            })
            .catch(err=>console.log(err));
        }

    }

  return (

    <div className="home-container">
      <Navbar />
      <div className="home-banner-container ">
        <div className="home-text-section signup-text">
          <h1 className="primary-heading">
          Ready to Connect The Cam ?🌐 
          </h1>
          <p className="primary-text">
          Sign Up To Dive into Seamless Networking With CamConnect!
          </p>
        </div>
        <div className='home-image-section newbg bg-white p-3 rounded w-25'>
            <h2>Sign-Up</h2>
            <form action='' onSubmit={handleSubmit} autoComplete="off">
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type="text" name="name" placeholder='Enter Name' className='form-control rounded-0' onChange={handleInput} />
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
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
                <button type="submit" className='btn btn-success w-100 rounded-0'><strong>Signup</strong></button>
                <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'><strong>Login</strong></Link>
            </form>
        </div>
        </div>
        </div>


  )
}

export default Signup