import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import googlelogo  from '../../iamges/google.svg'
import todo from '../../iamges/todo-image.png'
import { Oval } from 'react-loader-spinner';
import Hedars from '../../utils/hedars/Hedars'

const Login = () => {
                //this useState recive the login data
    const [loginData , setLoginData] = useState({
        email : "",
        password : ""
    })

                //this useState send the error when user empty the input box and press the login button;
    const [sendError , setSendError] = useState({
        email : "",
        password : ""
    }) 

    const handelform = (e)=>{
        let {name , value} = e.target
        setLoginData({...loginData,[name]:value})
    }

         //email regex
  const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 

    const loginBtn = (e)=>{
        e.preventDefault();
        //react loder ture
        setReactLoder(true)
                //validation
        if(!loginData.email){
            setSendError({email:"Email is Require"})
        }else if(!loginData.email.match(emailregex)){
            setSendError({email : ""})
            setSendError({email : "Inter valid Email"})
        }else if(!loginData.password){
            setSendError({password : "Password is Require"})
        }else{
           console.log(loginData);
        }
    }

        //react loder
    let [ reactLoder , setReactLoder] = useState (false)
  return (
    <section className="w-[100%] h-[100%] bg-white">
        <div className='flex items-center justify-between w-[100%] h-[100%]'>
            <div className='w-[500px] bg-white m-auto'>
                <div className='w-[100%]  '>
                    <div className='text-left'>
                        <Hedars level='h2' children='Login your account' className='text-[50px] text-black font-[700] mb-2'/>
                        <Hedars level='p' children='Enter your credentials to access your account' className='text-4 text-black font-[400] mb-2'/>
                        <div className='flex items-center justify-center gap-x-[20px] py-[10px] border-[2px] border-color-[#000] w-[100%] rounded-[10px] cursor-pointer mt-[15px]'>
                            <img src={googlelogo} alt="not found" />
                            <Link className='text-6 text-black font-[600]' to='google'>Sign in with Google</Link>
                        </div>
                        <div className='text-center text-4 text-black mt-4'>or</div>
                    </div>
                    <form className='mt-10'>
                        <Hedars level='p' children="Email Address" className="text-left text-5 text-black mb-3"/>
                        <div className='w-[100%]'>
                            <input className='w-[100%] py-[15px] px-[30px] outline-none border-[2px] border-color-[#000] rounded-[10px] text-4 text-black font-[600]' type='email' placeholder='Enter your email' name="email" onChange={handelform}/>
                            {sendError.email && <p className='text-4 text-[red] font-[600] mt-3'>{sendError.email}</p>}
                        </div>
                        <Hedars level='p' children="password" className="text-left text-5 text-black mb-3 mt-4"/>
                        <div className='w-[100%]'>
                            <input className='w-[100%] py-[15px] px-[30px] outline-none border-[2px] border-color-[#000] rounded-[10px] text-4 text-black font-[600]' type='password' placeholder='Enter your password' name="password" onChange={handelform}/>
                            {sendError.password && <p className='text-4 text-[red] font-[600] mt-3'>{sendError.password}</p>}
                        </div>
                        <div className='w-[100%] text-right mt-4 '>
                            <Link className='text-4 text-black font-[600] cursor-pointer' to='forget'>Forget?</Link>
                        </div>
                        <div className=' mt-5 flex items-center justify-center p-[15px] bg-[#2be2d3] rounded-[10px]'>
                            {
                                reactLoder
                                ?
                                (<Oval
                                    visible={true}
                                    height="30"
                                    width="30"
                                    color="#fff"
                                    ariaLabel="oval-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="oval"
                                    />)
                                :
                                <button className='text-[22px] text-[#fff] font-[700] cursor-pointer' onClick={loginBtn}>Submit</button>
                            }
                        </div>
                        <div className='flex items-center justify-center gap-x-[8px] mt-[30px]'>
                            <Hedars level='p' children='Not a member?' className='text-[20px] text-[#000] font-[400]'/>
                            <Link className='text-[22px] text-[#2c7243] font-[700] cursor-pointer' to='/signup'>Create Account</Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className='w-[50%] h-[100vh]'>
                <img className='w-[100%] h-[100vh] object-cover' src={todo} alt="not found" />
            </div>
        </div>
    </section>
  )
}

export default Login