import { IoMdAdd } from "react-icons/io"
import { Button } from "./ui/button"
import { Router } from "next/router"
import { useRouter } from "next/navigation"

const CreateSkill = () => {
    const router = useRouter()
    return (
        <button
            onClick={() => router.push("/create-skill")}
            className="bg-transparent hover:bg-blue-700  btn-admin-style">

            <IoMdAdd className="text-2xl" />
            create new skill
        </button>
    )
}

export default CreateSkill