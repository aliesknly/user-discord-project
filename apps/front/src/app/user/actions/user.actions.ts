'use server'

import axiosInstance from "../../utilities/axiosInstance.interceptor";

export async function getUserList() {

    const { data } = await axiosInstance.get('/api/user/list');

    return data || [];
}