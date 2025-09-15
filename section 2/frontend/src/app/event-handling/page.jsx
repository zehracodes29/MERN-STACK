'use client';
import React from 'react'

const EventHandling = () => {
  return (
    <div className='h-screen' onMouseMove={ (e) => {
      const box = document.getElementById('box');
      box.style.left = e.pageX -10 + 'px';
      box.style.top = e.pageY -10 + 'px';
    }}>
        <h1 className='text-center mt-10 text-3xl font-bold'>Event Handling Page</h1>
        <div className='bg-red-500 size-10 rounded-full absolute' id='box'>

        </div>
        <div className='container mx-auto mt-10 border p-10'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-5 ml-10' 
            onClick={() => alert('Button Clicked!')}>
                Click Me
            </button>
            <input type="text" 
            className='border p-2 mt-5 ml-10' 
            onChange={(e) => console.log(e.target.value)} />
            <input type="text"
             className='border p-2 mt-5 ml-10' 
             onKeyDown={(e) => console.log(e.code)} />


        </div>
    </div>
  )
}

export default EventHandling