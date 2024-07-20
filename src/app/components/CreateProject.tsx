"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { IoMdAdd } from 'react-icons/io'
import { useAppSelector } from '@/store/index.js';
import { useRouter } from 'next/navigation';


const CreateNewProject = () => {
    const router = useRouter()
    const isAdmin = useAppSelector((state) => (state as { admin: { isAdmin: boolean } }).admin.isAdmin);

    const [createProject, setCreateProject] = useState(false)
    return (
        isAdmin && (
            <>
                {
                    createProject ?

                        router.push("/create-project")
                        :
                        <Button
                            onClick={() => { setCreateProject(true) }}
                        >
                            <IoMdAdd className="text-2xl" />
                            create new Project
                        </Button>
                }
            </>
        )
    )
}

export default CreateNewProject