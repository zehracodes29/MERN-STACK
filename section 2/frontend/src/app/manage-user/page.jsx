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
                <h1 className='text-center font-bold text-3xl'>
                         Manage Users
                </h1>
                <div className='mt-5 grid grid-cols-3'>
                    {
                        userData.map((user) => {
                            return <div key={user._id} className='border p-4'>
                                <div className='flex'>
                                    <User/>
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