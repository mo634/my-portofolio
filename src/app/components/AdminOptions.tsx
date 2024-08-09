"use client"
import { useAppSelector } from '@/store';
import React, { useState } from 'react'
import CreateNewProject from './CreateProject';
import DeleteAllProjects from './DeleteAllProjects';
import { MdArrowDropUp } from 'react-icons/md';
import CreateSkill from './CreateSkill';

const AdminOptions = () => {


    return (
        <div className='relative py-2 '>

            <div className=" w-full flex flex-col items-start " >

                <CreateNewProject />

                <CreateSkill />

                <DeleteAllProjects />


            </div>

        </div>
    )
}

export default AdminOptions