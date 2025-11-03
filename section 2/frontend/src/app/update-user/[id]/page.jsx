'use client';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import React, {useEffect, useState}from 'react';

const Updateuser = () => {

  const { id } = useParams();

  const fetchUserData = async () => {
    const res = await axios.get(`http://localhost:5000/user/getbyid/${id}`);
    console.log(res.data);
    setUserData(res.data);
  }

  useEffect(() => {
    fetchUserData();
  }, [])
  return (
    <div>Update-user</div>
  )
}

export default Updateuser;