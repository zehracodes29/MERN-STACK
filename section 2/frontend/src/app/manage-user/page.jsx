'use client'
import axios from 'axios';
import { User } from 'lucide-react';
import React, { useEffect, useState } from 'react'
const ManageUser = () => {
    const [userData,setUserData] = useState([]);

    const fetchUserData = async () => {
        const res = await axios.get('http://localhost:5000/user/getall')
        console.log(res.data)
        setUserData(res.data);
    };
    useEffect(() => {
        fetchUserData();
    }, []);//square bracket means it will run only once when component mounts

    return (
        <div className='min-h-screen'>
            <div className='container mx-auto py-10'>
                <h1 className='text-center text-red-600 font-bold text-3xl'>
                         Manage Users
                </h1>
                <div className=' border-amber-600 border-2 mt-5 grid grid-cols-3'>
                    {
                        userData.map((user) => {
                            return <div key={user._id} className='border-2 border-amber-600 p-4'>
                                <div className='text-bold text-2xl text-amber-800 flex'>
                                    <div className='text-fuchsia-700 text-3xl text-bold'>                              
                                          <User/>
</div>
                                    <div>
                                        <p>{user.name}</p>
                                    </div>

                                </div>

                            </div>

                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default ManageUser