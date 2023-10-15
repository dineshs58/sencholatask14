import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


const Register = () => {
    const navigate=useNavigate()
    const [formData,setFormData]=useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        cpassword:''
    })
   
    const[errors,setErros]=useState({})
    const[valid,setValid]=useState(true)

    const handel =(e) =>{
        e.preventDefault();
        // console.log(formData)
        let isValid=true;
        let validationErros={}

        if (formData.fname===" " || formData.fname===null)
        {
            isValid=false;
            validationErros.fname="First Name Requerds:"
        }

        if (formData.lname===" " || formData.lname===null)
        {
            isValid=false;
            validationErros.lname="Last Name Requerds:"
        }

        if (formData.email===" " || formData.email===null)
        {
            isValid=false;
            validationErros.email="Email  Requerds:"
        }
        else if(!/\S+@\S+\.\S+/.test(formData.email)){
            isValid=false;
            validationErros.email="Currect Email Requerds:"
        }

        if (formData.password===" " || formData.password===null)
        {
            isValid=false;
            validationErros.password="Password Requerds:"
        }
        else if(formData.password.length<6)
        {
            isValid=false;
            validationErros.password="Password max 6 char Requerds:"
        }

        if (formData.cpassword !== formData.cpassword)
        {
            isValid=false;
            validationErros.cpassword="Conform Password max 6char Requerds:"
        }
        setErros(validationErros)
        setValid(isValid)

        if(Object.keys(validationErros).length===0)
        {
           
            axios.post("https://651ae52a340309952f0e03d2.mockapi.io/users",formData)
            .then(result=>{
                alert("Register Success Fully")
                navigate('/login')
            })
            .catch(err=>console.log(err))
        }
    }


  return (
   <>
   
      <div className='container'>
        <div className='row'>
          
            <div className='col-md-6 offset-md-3'>
           
                <div className='signup-form'>
                <div className='text-center'>
                <h1 className='face1'>facebook</h1>
            </div>
                    <form onSubmit={handel} className='mt-5 border p-4 bg-light shadow'>
                        <h2 className=' text-primary text-center'>Create a new account</h2>
                        <p className='calls mb-3'>Its quick and easy</p>
                        <div className='row'>
                            {
                                valid ? <></>  :
                                <span className='text-danger'>
                                    {errors.fname};
                                    {errors.lname};
                                    {errors.email};
                                    {errors.password};
                                    {errors.cpassword}
                                </span>
                            }
                            <div className='mb-3 col-md-6'>
                                
                                <input type='text' 
                                placeholder='Username' 
                                name='fname' 
                                className='form-control'
                               onChange={(e)=>setFormData({...formData,fname:e.target.value})} />
                            </div>

                            <div className='mb-3 col-md-6'>
                               
                                <input type='text' 
                                placeholder='Surname' 
                                name='lname' 
                                className='form-control'
                                onChange={(e)=>setFormData({...formData,lname:e.target.value})} />
                            </div>

                            <div className='mb-3 col-md-12'>
                                
                                <input type='email' 
                                placeholder='Mobile number or email address' 
                                name='email' 
                                className='form-control'
                                onChange={(e)=>setFormData({...formData,email:e.target.value})} />
                            </div>
                            <div className='mb-3 col-md-12'>
                               
                                <input type='password' 
                                placeholder='New Password' 
                                name='password' 
                                className='form-control'
                                onChange={(e)=>setFormData({...formData,password:e.target.value})} />
                            </div>
                            <div className='mb-3 col-md-12'>
                                <label>Date Of Birth<span className='text-danger'></span></label>
                                <input type='date' 
                                placeholder='Enter a Conform Password' 
                                name='' 
                                className='form-control'
                                onChange={(e)=>setFormData({...formData,cpassword:e.target.value})} />
                            </div>

                            {/* <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Gender<span className='errormsg'>*</span></label>
                                            <br></br>

                                            <label>Male</label>
                                            <input type="radio"   name="gender" value="male" className='form-contro' id-='checkss'></input>
                                           
                                            <label>FeMale</label>
                                            <input type="radio"  className='form-control'   name="gender" value="female"></input>
                                            

                                            <label>FeMale</label>
                                            <input type="radio"    name="gender" value="female" className='form-control'></input>
                                            
                                        </div>
                                    </div> */}
                            <p className='mt-5'>Facebook (sometimes shortened to FB) is a social networking service and website started in</p>
                            <div className='mb-3 mt-4 col-md-12 text-center'>
                               <button className='btns1 '>Sign Up</button>
                            </div>
                            <p className='text-center mt-3 text-dark'>If already account go to  <Link to="/login" className='logs'>Login</Link></p>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
      </div>
   
   </>
  )
}

export default Register