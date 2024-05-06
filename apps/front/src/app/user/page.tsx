'use client';
import React from 'react';
import axiosInstance from '../utilities/axiosInstance.interceptor';

async function getData() {
  await axiosInstance.get('/api/user/list').then((res) => {
    return res.data;
  });

  return null;
}
export default function UserPage() {
  const data = getData();
  console.log(data);
  return <div></div>;
}
