"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import DynamicIconSelector from "../components/DynamicIconSelector.js"
import NoData from "../components/NoData"

const Skills = () => {
    const [skills, setSkills] = useState<any[]>([]);
    const [loading, setLoading] = useState(false)

    const icon = "FaHtml5"

    useEffect(() => {
        const fetchSkills = async () => {
            setLoading(true)
            const res = await fetch('/api/skills')
            const data = await res.json()
            setSkills(data.data)
            setLoading(false)

        }

        fetchSkills()
    }, [])

    console.log(skills)
    return (
        <section className="relative h-[90vh] w-full">


            {
                <>
                    <h1 className="mt-4 text-4xl font-bold text-main  text-responsive mb-10 text-center">My Skills</h1>
                    {
                        loading ? (
                            <div className="loader">Loading
                                <span></span>
                            </div>
                        ) : skills?.length === 0 ? (
                            <NoData label="Create Your First Skill" />
                        ) :
                            <div
                                className="flex flex-wrap gap-2 max-sm:justify-center   "
                            >
                                {
                                    skills?.map((skill: any) => {
                                        return <div key={skill._id}
                                            className="min-w-[250px] bg-secondary rounded-md shadow-sm p-2 "
                                        >
                                            <div className=" flex justify-center  ">
                                                <DynamicIconSelector skillIcon={skill.skillIcon}
                                                    skillIconLibrary={skill.skillIconLibrary} />
                                                <p
                                                    className="text-blue-700 text-2xl capitalize font-bold  ml-2 "
                                                >
                                                    {skill.skillName}
                                                </p>

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