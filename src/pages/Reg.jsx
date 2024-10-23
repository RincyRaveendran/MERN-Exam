import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registerApi } from '../../services/allApi';

function Reg() {
    const Navigate = useNavigate()
  const[userDetails,setUserDetails]=useState({
    username:"",
    email:"",
    password:""
  })
  console.log(userDetails);

  const handleRegister = async(e)=>{
    e.preventDefault()

    const{username,email,password}=userDetails
    if(!username || !email || !password){
      alert('please fill the form completely')
    }
    else{
      const result = await registerApi(userDetails)
      console.log(result);
      if(result.status==200){
        alert('registered successfully')
        setUserDetails({
          username:"",
          email:"",
          password:""
        })
        Navigate('/dashboard')

      }
      else{
        alert(result.response.data)
        setUserDetails({
          username:"",
          email:"",
          password:""
        })
        Navigate('/dashboard')
      }
      
    }

  }
  return (
    <>
    <div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form className='outline shadow p-5 mb-5 mt-5' action="" >
            <h5 className='text-center mt-2 mb-4'>Sign Up to Your Account</h5>

            <div className="mb-2 ">
              <input type="text" className='form-control' placeholder='User Name' onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} />
            </div>
            <div className="mb-2">
            <input type="text" className='form-control' placeholder='Email' onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}/>
            </div>
            <div className="mb-2">
            <input type="text" className='form-control' placeholder='Password'onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} />
            </div>
            <div className="mb-2 text-center">
            <button className='btn btn-primary' onClick={handleRegister}>Sign Up</button>
            </div>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
    
    </>
  )
}

export default Reg