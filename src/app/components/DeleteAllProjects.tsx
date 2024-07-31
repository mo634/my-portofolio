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


        } catch (error) {
            console.log("error while deleting all projects ", error)
        }
    }
    return (
        <Button className='bg-transparent hover:bg-blue-700 btn-admin-style'>
            <AiFillDelete className="text-2xl" />
            <span
                onClick={handleDeletAllProjects}
            > DeleteAllProjects</span>
        </Button>
    )
}

export default DeleteAllProjects