"use client"
import AdminOptions from './AdminOptions';
import { useAppSelector } from '@/store';
import { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";


const AdminPanel = () => {
    const isAdmin = useAppSelector((state) => (state as { admin: { isAdmin: boolean } }).admin.isAdmin);
    const [hideAdminPanel, setHideAdminPanel] = useState(false)
    return (
        isAdmin && (
            <aside className={`bg-secondary absolute  h-[90vh] p-4  ${hideAdminPanel ? "right-[-300px]" : "right-0"} 
             transition-all duration-300
            min-w-[300px]
            `}>
                <div className=" absolute top-1/2  transform -translate-y-1/2 left-[-25px] cursor-pointer"
                    onClick={() => setHideAdminPanel(!hideAdminPanel)}
                >
                    <IoIosArrowBack className='text-3xl bg-blue-700 text-white p-1 rounded-full' />
                </div>

                <h1
                    className='text-2xl font-bold text-main  text-responsive mb-4 text-blue-700 capitalize'
                >Admin Panel
                </h1>
                <span className=" mt-[4px] block bg-primary w-full h-[2px] m-auto "></span>

                {<AdminOptions />}
            </aside>

        )
    )
}

export default AdminPanel