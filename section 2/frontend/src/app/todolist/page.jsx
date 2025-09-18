'use client';

import React, { useState } from 'react'

const TodoList = () => {
    //let count =0;
  //const [count, setCount] = useState(0);

  const [taskList,setTaskList] = useState([
    {text : 'Learn Html', completed: true},
    {text : 'Learn Css', completed: false},
    {text : 'Learn Javascript', completed: false}
    {text : 'Learn React', completed: false}
  ]);
  return (
    <div className='min-h-screen p-10 bg-gray-100'>
        {/*<h1 className='text-3xl'>{count} </h1>
        <button className='border p-3'
        onClick={() => {setCount(count + 1); console.log(count);}}>
            add count
        </button>}*/}
        <div className='container mx-auto'>

            <h1 className='text-center font-bold text-3xl'>
                Todo List
                </h1>
            <div className='rounded border mt-10'>
                <div className='p-5'>
                    <input type="text"
                    className='border p-2 w-full rounded' />

                </div>
                <div className='border-t-1 p-5'>
                    <p className='text-center font-bold text-gray-500'>
                        No tasks to show here
                    </p>

            </div>
        </div>
    </div>
    </div>
  )
}

export default TodoList