import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-3xl mt-8'>Welcome to Home</h1>
      <p style={{ color: 'red', fontSize: 20, textAlign:'center' }}>Using Inline CSS</p>
      

      <img
        src="nico-smit-QnkzvFCxKrA-unsplash.jpg" 
        alt="" 
        style={{ display: 'block',  width: 300, height: 200, margin: '0 auto' }} 
      />
    </div>
  )
}

export default Home;
