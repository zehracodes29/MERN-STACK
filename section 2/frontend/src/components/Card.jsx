import React from 'react'
import MyButton from './MyButton';

const Card = ({ image, title, price, category }) => {
  return (
    <div className="border bg-white rounded-xl">
        <img className='rounded-t-xl' src={image} alt="" />
        <div className='p-4 space-y-3'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p>{category}</p>
            <p className='font-bold text-lg'>₹{price}</p>
            <div className="flex">
                <MyButton>Add to Cart</MyButton>
            </div>
            <button className='block ml-auto bg-blue-500 text-white px-3 py-1 rounded-lg'>Buy Now</button>
        </div>
    </div>
  )
}

export default Card;