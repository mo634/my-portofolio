"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { IoMdAdd } from 'react-icons/io'
import { useAppSelector } from '@/store/index.js';
import { useRouter } from 'next/navigation';


const CreateNewProject = () => {
    const router = useRouter()

    const [createProject, setCreateProject] = useState(false)
    return (

        <>

            <Button
                onClick={() => { setCreateProject(true) }}
                className='p-2  text-primary bg-transparent transition duration-500 hover:bg-blue-700 hover:text-white mb-2'
            >
                <IoMdAdd className="text-2xl" />
                create new Project
            </Button>

            {createProject && (router.push("/create-project"))}

        </>
    )
}

export default CreateNewProject