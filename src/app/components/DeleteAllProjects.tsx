import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { Button } from './ui/button'
const DeleteAllProjects = () => {
    const handleDeletAllProjects = async () => {
        try {
            const response = await fetch('/api/projects', {
                method: 'DELETE',
            })
            const data = await response.json()

            if (data.success) {
                window.location.reload() // Reload the page after successful deletion
            }

            console.log(data)
        } catch (error) {
            console.log("error while deleting all projects ", error)
        }
    }
    return (
        <Button className='hover:bg-transparent bg-transparent hover:cursor-pointer text-primary flex gap-1 px-1 transition duration-500 hover:bg-blue-700 hover:text-white'>
            <AiFillDelete className="text-2xl" />
            <span
                onClick={handleDeletAllProjects}
            > DeleteAllProjects</span>
        </Button>
    )
}

export default DeleteAllProjects