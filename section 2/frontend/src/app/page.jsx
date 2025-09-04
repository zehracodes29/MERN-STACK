import Card from '@/components/Card';
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-3xl mt-8'>Welcome to Home</h1>
      <p style={{ color: 'red', fontSize: 20, textAlign:'center' }}>Using Inline CSS</p>
      
      <div className='m-10 grid grid-cols-3 gap-4'>
        <Card/>
        <Card/>
        <Card/>
        
      </div>

    </div>
  )
}

export default Home;
