import React from 'react'

const Card = () => {
  return (
    <div className="border bg-white rounded-xl">
        <img className='rounded-t-xl' src="/james-mckinven-tpuAo8gVs58-unsplash.jpg" alt="" />
        <div className='p-4 space-y-3'>
            <h1 className='text-2xl font-bold'>Asus Tuf 2025</h1>
            <p>Gaming Laptop</p>
            <p className='font-bold text-lg'>$2800</p>
            <button className='block ml-auto bg-blue-500 text-white px-3 py-1 rounded-lg'>Buy Now</button>
        </div>
    </div>
  )
}

export default Card;