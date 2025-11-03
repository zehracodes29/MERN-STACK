'use client'
import axios from 'axios';
import { Pencil, Trash2, User } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { motion } from 'motion/react';
import Link from 'next/link';
const ManageUser = () => {
    const [userData, setUserData] = useState([]);

    const fetchUserData = async () => {
        const res = await axios.get('http://localhost:5000/user/getall')
        console.log(res.data)
        setUserData(res.data);
    };
    useEffect(() => {
        fetchUserData();
    }, []);//square bracket means it will run only once when component mounts

    const deleteUser = async (id) => {
        console.log(id);
        const res = await axios.delete(`http://localhost:5000/user/delete/${id}`);
        toast.success("User DEleted successfully");
        fetchUserData();
    }

    return (
        <div className='min-h-screen bg-gray-100'>
            <div className='container mx-auto py-10'>
                <h1 className='text-center font-bold text-3xl'>
                    Manage Users
                </h1>
                <div className=' mt-5 grid grid-cols-3 gap-5'>
                    {
                        userData.map((user) => {
                            return <motion.div
                                whileHover={{ scale: 1.05 }}
                                initial={{ scale: 0.3, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}


                                key={user._id} className='shadow-xl rounded-md bg-white p-4'>
                                < div className=' flex gap-4 item-center'>
                                    <User size={100} />

                                    <div>
                                        <p>{user._id}</p>
                                        <p className='text-xl font-bold'>{user.name}</p>
                                        <p className='font-semibold'>{user.email}</p>
                                        <p>{user.city}</p>
                                        <div className='flex mt-5'>
                                            <button onClick={() => { deleteUser(user._id) }} className='p-1 rounded text-white bg-red-500'>
                                                <Trash2 />

                                            </button>
                                             <Link href={'/update-user/' + user._id}  className='p-2 rounded-md text-white bg-blue-500'>
                                                 <Pencil />

                                            </Link>

                                        </div>
                                    </div>

                                </div>

                            </motion.div>

                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default ManageUser;