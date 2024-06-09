import React, { useState } from 'react'
import Hedars from '../../utils/hedars/Hedars'
import axios from 'axios'

const Homepage = () => {
let [todo,setTodo] = useState({
    title : "",
    description : ""
})
let todoHandle = (e) => {
    let{name ,value} = e.target
    setTodo({...todo,[name]:value})
}
const [sendError , setSendError] = useState({
    title : "",
    description : ""
}) 
let add = async () => {
   if(!todo.title){
    setSendError({title : "Todo is Require"})
   }else if(!todo.description){
    setSendError({title : ""})
    setSendError({ description: "Description is Require"})
   }else{
    let res = await axios.post("http://localhost:5000/api/v1/user/todo",{
        title : todo.title,
        description : todo.description,
        user : ""
    })
    setTodo({
        title : "",
        description : ""
    })
   }
}
  return (
    <section className='bg-white '>
        <div className='max-w-container mx-auto'>
            <div className='w-[500px] m-auto bg-white shadow-black rounded-[10px]'>
                <Hedars level='h2' children='Todo List' className='text-[50px] text-center text-black font-[700]'/>
                <div className='mt-[30px]'>
                    <div className='mb-[20px]'>
                        <input className='w-[100%] py-[15px] px-[30px] outline-none border-[2px] border-color-[#000] rounded-[10px] text-4 text-black font-[600]' placeholder='inter your todo list' value={todo.title} name='title' type='text' onChange={todoHandle}/>
                        {sendError.title && <p className='text-4 text-[red] font-[600] mt-3'>{sendError.title}</p>}
                    </div>
                    <div className='mt-[10px]'>
                        <input className='w-[100%] py-[15px] px-[30px] outline-none border-[2px] border-color-[#000] rounded-[10px] text-4 text-black font-[600]' placeholder='inter your description' value={todo.description} name='description' type='text' onChange={todoHandle}/>
                        {sendError.description && <p className='text-4 text-[red] font-[600] mt-3'>{sendError.description}</p>}
                    </div>
                    <div className='flex items-center justify-center mt-[40px] w-[100%]'>
                        <button className='w-[100%] text-[22px] text-white font-[600] cursor-pointer rounded-[10px] py-3 bg-[#2be2d3] ' onClick={add}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Homepage