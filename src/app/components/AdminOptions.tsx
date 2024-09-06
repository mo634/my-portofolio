"use client"
import { setAdmin, useAppDispatch, useAppSelector } from '@/store';
import React, { useState } from 'react'
import CreateNewProject from './CreateProject';
import DeleteAllProjects from './DeleteAllProjects';
import { MdArrowDropUp } from 'react-icons/md';
import CreateSkill from './CreateSkill';
import { TbLogout2 } from "react-icons/tb";
import { useRouter } from 'next/navigation';

const AdminOptions = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const isAdmin = useAppSelector((state) => (state as { admin: { isAdmin: boolean } }).admin.isAdmin);
    const logOut = () => {
        dispatch(setAdmin(false));
        router.push('/');
    }

    return (
        <div className='h-full relative p-2 bg-secondary '>

            <div className=" w-full flex flex-col items-start  h-full justify-between" >

                <div className="">
                    <CreateNewProject />

                    <CreateSkill />

                    <DeleteAllProjects />

                </div>
                <button onClick={logOut} className='btn-admin-style !w-auto'>
                    <TbLogout2 className='text-2xl mr-2' />
                    Logout
                </button>


            </div>

        </div>
    )
}

export default AdminOptions