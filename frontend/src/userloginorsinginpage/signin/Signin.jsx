import React, { useState } from 'react'
import { Oval } from 'react-loader-spinner';
import registerimg from '../../iamges/todo-image.png'
import Hedars from '../../utils/hedars/Hedars'
import { useNavigate } from "react-router-dom";
import axios from 'axios'


const Signin = () => {
const navigate = useNavigate()
  const [signinData , setSigninData] = useState({
    name : "",
    email : "",
    password : "",
    conpass : ""
})

            //this useState send the error when user empty the input box and press the login button;
const [sendError , setSendError] = useState({
    name : "",
    email : "",
    password : "",
    conpass : ""
}) 

const handelform = (e)=>{
    let {name , value} = e.target
    setSigninData({...signinData,[name]:value})
}

     //email regex
const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 

    //password regex
const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

const signinBtn = async (e)=>{
    e.preventDefault();
            //validation
    if(!signinData.name){
        setSendError({name:"Fullname is Require"})
    }else if(!signinData.email){
        setSendError({name: ""})
        setSendError({email : "Email is Require"})
    }else if(!signinData.email.match(emailregex)){
        setSendError({email: ""})
        setSendError({email :"Inter valid Email"})
    }else if(!signinData.password){
        setSendError({email: ""})
        setSendError({password : "Passowrd is Require"})
    }else if(!signinData.password.match(password_pattern)){
        setSendError({password : ""})
        setSendError({password : "Strong Password"})
    }else if(!signinData.conpass){
        setSendError({password: ""})
        setSendError({conpass:"Confirm password is Require"})
    }else if( signinData.password != signinData.conpass){
        setSendError({conpass:""})
        setSendError({conpass : "Confirm Password Don't match"})
    }else{
        let res = await axios.post("http://localhost:5000/api/v1/user/register",{
            name : signinData.name,
            email : signinData.email,
            password : signinData.password
        })
        navigate("/")
        setSigninData({
            name : "",
            email : "",
            password : "",
            conpass : ""
        })
    }
}
// react loder state
let [loder , setLoder] = useState(false)
  return (
    <section className='w-[100%] h-[100%] bg-white'>
      <div className='flex items-center justify-between w-[100%] h-[100%]'>
          <div className='w-[50%] h-[100vh]'>
              <img  className='w-[100%] h-[100vh] object-cover' src={registerimg} alt="not found" />
          </div>
          <div className='w-[500px] bg-white m-auto'>
              <div className='w-[100%]'>
                  <div className='text-left mb-[50px]'>
                      <Hedars level='h2' children='Create your account' className='text-[50px] text-black font-[700] mb-2'/>
                      <Hedars level='p' children='Create your personal account' className='text-4 text-black font-[400] mb-2'/>
                  </div>
                  <form className='signin-form-box'>
                      <Hedars level='p' children="Full Name" className="text-left text-5 text-black mb-[15px]"/>
                      <div className='w-[100%]'>
                          <input className='w-[100%] py-[15px] px-[30px] outline-none border-[2px] border-color-[#000] rounded-[10px] text-4 text-black font-[600]' type='text' placeholder='Enter your name'  name="name" onChange={handelform}/>
                          {sendError.name && <p className='text-4 text-[red] font-[600] mt-3'>{sendError.name}</p>}
                      </div>
                      <Hedars level='p' children="Email Address" className="text-left text-5 text-black mt-[15px]"/>
                      <div className='mt-[15px]'>
                          <input className='w-[100%] py-[15px] px-[30px] outline-none border-[2px] border-color-[#000] rounded-[10px] text-4 text-black font-[600]' type='email' placeholder='Enter your email'  name="email" onChange={handelform}/>
                          {sendError.email && <p className='text-4 text-[red] font-[600] mt-3'>{sendError.email}</p>}
                      </div>
                      <Hedars level='p' children="password" className="text-left text-5 text-black mt-[15px]"/>
                      <div className='mt-[15px]'>
                          <input className='w-[100%] py-[15px] px-[30px] outline-none border-[2px] border-color-[#000] rounded-[10px] text-4 text-black font-[600]' type='password' placeholder='Enter your password'   name="password" onChange={handelform}/>
                          {sendError.password && <p className='text-4 text-[red] font-[600] mt-3'>{sendError.password}</p>}
                      </div>
                      <Hedars level='p' children="Confrim Password" className="text-left text-5 text-black mt-[15px]"/>
                      <div className='mt-[15px]'>
                          <input className='w-[100%] py-[15px] px-[30px] outline-none border-[2px] border-color-[#000] rounded-[10px] text-4 text-black font-[600]' type='password' placeholder='confrim-password' name="conpass" onChange={handelform}/>
                          {sendError.conpass && <p className='text-4 text-[red] font-[600] mt-3'>{sendError.conpass}</p>}
                      </div>
                      <div className=' mt-[30px] flex items-center justify-center p-[15px] bg-[#2be2d3] rounded-[10px]'>
                          {
                              loder
                              ?
                              (<Oval
                                  visible={true}
                                  height="25"
                                  width="25"
                                  color="#000"
                                  ariaLabel="oval-loading"
                                  wrapperStyle={{}}
                                  wrapperClass="oval"
                                  />)
                              :
                              <button className='text-[22px] text-[#fff] font-[700] cursor-pointer' onClick={signinBtn} text='signin'>Signin</button>
                          }
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Signin