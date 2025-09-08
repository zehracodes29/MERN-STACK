
import React from 'react'
import Card from '@/components/Card';
import MyButton from '@/components/MyButton';
const Home = () => {
  return (
    <div>
      <h1 className='text-center font-bold text-3xl mt-8'>Welcome to Home</h1>
      <p style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>Using Inline CSS</p>

      <div className='m-10 grid grid-cols-3 gap-4'>
        <Card image={"https://m.media-amazon.com/images/I/61CVKTNbMQL._SL1500_.jpg"} 
        title={"ASUS laptop"}
        price={"40000"}
        category={"laptop under 50000"} />
        <Card image={"https://m.media-amazon.com/images/I/71bagLp2sXL._SL1500_.jpg"}
        title={"HP Laptop"}
        price={"45000"}
        category={"laptop under 50000"} />
        <Card image={"https://m.media-amazon.com/images/I/71bagLp2sXL._SL1500_.jpg"}
        title={"Dell Laptop"}
        price={"50000"}
        category={"laptop under 50000"} />

      </div>
      <MyButton>click me</MyButton>
      <MyButton>Follow me</MyButton>

    </div>
  );
}

export default Home;
