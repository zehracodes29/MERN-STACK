'use client';

import React, { useState } from 'react'

const TodoList = () => {
    //let count =0;
  //const [count, setCount] = useState(0);

  const [taskList,setTaskList] = useState([
    {text : 'Learn Html', completed: true},
    {text : 'Learn Css', completed: false},
    {text : 'Learn Javascript', completed: false},
    {text : 'Learn React', completed: false}
  ]);

  const addTask = (e) => {
      if (e.key === 'Enter') {
          console.log(e.target.value);
          const newTask ={text:e.target.value, completed:false};
          setTaskList([newTask, ...taskList]);
          e.target.value = "";
          
      }
  }
            //console.log(taskList);


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
                    onKeyDown={addTask}
                    placeholder='Add a new task'
                    className='border p-2 w-full rounded' />

                </div>
                <div className='border-t-1 p-5'>
                    {
                        taskList.map((task,index) => {
                            return <div key={index} className='flex justify-between items-center border-2 p-5 mb-3 rounded-lg'
                            style={{backgroundColor: task.completed ? 'lightgreen' : 'lightpink', borderColor: task.completed ? 'green' : 'red'}}>
                                <div>
                                    <input type="checkbox"
                                    checked={task.completed}
                                    onChange={(e) => {
                                        const temp = [...taskList];
                                        temp[index].completed = e.target.checked;
                                        setTaskList(temp);
                                        
                                    }}
                                    
                                    />
                                    <p>{task.text}</p>
                                </div>
                                <button className='bg-red-600 text-white px-3 py-2 rounded'>
                                    Delete
                                </button>
                            </div>
                        })
                    }

            </div>
        </div>
    </div>
    </div>
  )
}

export default TodoList;