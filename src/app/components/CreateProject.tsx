"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { IoMdAdd } from 'react-icons/io'
import { useAppSelector } from '@/store';
import { useRouter } from 'next/navigation';
import { RootState } from '@/store';

const CreateNewProject = () => {
    const router = useRouter()
    const isAdmin = useAppSelector((state: RootState) => (state as { admin: { isAdmin: boolean } }).admin.isAdmin);

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