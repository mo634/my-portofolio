"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import DynamicIconSelector from "../components/DynamicIconSelector.js"
import NoData from "../components/NoData"
import { FaDeleteLeft } from "react-icons/fa6"
import { useAppSelector } from "@/store/index.js"

const Skills = () => {
    const [skills, setSkills] = useState<any[]>([]);
    const [loading, setLoading] = useState(false)
    const isAdmin = useAppSelector((state) => (state as { admin: { isAdmin: boolean } }).admin.isAdmin);


    const handleDeleteSkill = async (id: string) => {
        console.log("delete clicked", id)
        try {
            // Optimistically remove the skill from the state
            setSkills(prevSkills => prevSkills.filter(skill => skill._id !== id))

            const res = await fetch(`/api/skills?id=${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            setSkills(skills.filter((skill) => skill._id !== id))
        } catch (error) {
            console.error("Error deleting skill:", error)
        }
    }

    const fetchSkills = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/skills')
            const data = await res.json()
            setSkills(data.data)
        } catch (error) {
            console.error("Error fetching skills:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchSkills()
    }, [])

    console.log(skills)
    return (
        <section className="relative h-[90vh] w-full">


            {
                <>
                    <h1 className="mt-4 text-4xl font-bold text-main  text-responsive mb-10 text-center text-gradient">My Skills</h1>
                    {
                        loading ? (
                            <div className="loader">Loading
                                <span></span>
                            </div>
                        ) : skills?.length === 0 ? (
                            <NoData label="Create Your First Skill"
                                path="/create-skill"
                            />
                        ) :
                            <div
                                className="flex flex-wrap gap-2 max-sm:justify-center"
                            >
                                {
                                    skills?.map((skill: any) => {
                                        return <div key={skill._id}
                                            className="min-w-[250px] bg-secondary rounded-md shadow-sm p-2 "
                                        >
                                            <div className="relative flex justify-between items-center  ">

                                                <div className=" flex items-center justify-center flex-1">
                                                    <DynamicIconSelector skillIcon={skill.skillIcon}
                                                        skillIconLibrary={skill.skillIconLibrary} />
                                                    <p
                                                        className="text-blue-700 text-2xl capitalize font-bold  ml-2 "
                                                    >
                                                        {skill.skillName}
                                                    </p>
                                                </div>
                                                {isAdmin && (
                                                    <Button onClick={() => handleDeleteSkill(skill._id)}>
                                                        <AiFillDelete />
                                                    </Button>
                                                )}
                                            </div>
                                            <span className=" mt-[4px] block bg-primary w-[90px] h-[2px] m-auto "></span>

                                            <p className="">
                                                {skill.courseReferences?.map((course: any, index: any) => {
                                                    return <Link href={course} key={course._id} target="_blank"
                                                        className="
                                                
                                                overflow-hidden text-ellipsis text-nowrap 
                                              mt-4 mb-2  items-center flex gap-2"
                                                    >
                                                        <span
                                                            className=" block rounded-full bg-primary h-[5px] w-[5px]"></span>
                                                        <p className="hover:text-blue-700 transition duration-300">coures {index + 1}</p>
                                                    </Link>
                                                })}


                                            </p>
                                            <span className="block w-full bg-blue-700  h-[1px] m-auto "></span>

                                        </div>

                                    })
                                }</div>

                    }

                </>
            }

        </section>
    )
}

export default Skills