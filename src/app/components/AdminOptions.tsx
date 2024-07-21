"use client"
import { useAppSelector } from '@/store';
import React, { useState } from 'react'
import CreateNewProject from './CreateProject';
import DeleteAllProjects from './DeleteAllProjects';
import { MdArrowDropUp } from 'react-icons/md';

const AdminOptions = () => {
    const isAdmin = useAppSelector((state) => (state as { admin: { isAdmin: boolean } }).admin.isAdmin);

    const [showAdminOptions, setShowAdminOptions] = useState(false)


    return (
        <div className='relative '>
            <div
                className=' cursor-pointer'
                onClick={() => setShowAdminOptions(!showAdminOptions)}
            >AdminOptions</div>


            {showAdminOptions && isAdmin && (

                <div className=" top-8 left-0 absolute bg-secondary p-2 rounded-md">
                    <MdArrowDropUp className='text-2xl  absolute top-[-14px] right-[50%] ' />

                    <p><CreateNewProject /></p>

                    <DeleteAllProjects />
                </div>
            )}
        </div>
    )
}

export default AdminOptions