// pages/projects/page.js
"use client"
import React, { useEffect, useState } from 'react';


import { IoMdAdd } from 'react-icons/io';
import { useAppSelector } from '@/store/index.js';
import ProjectSection from '@/app/components/ProjectSection';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import { Button } from '../components/ui/button';
import NoData from '../components/NoData';
const Projects = () => {
    const [projectsData, setProjectsData] = useState<ProjectProps[]>([]);
    const [createProject, setCreateProject] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const isAdmin = useAppSelector((state) => (state as { admin: { isAdmin: boolean } }).admin.isAdmin);
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true)
                const response = await fetch('/api/projects');
                const { data } = await response.json();
                setProjectsData(data);
                console.log(data.length())

            } catch (error) {
                console.error('Error fetching projects:', error);
            }
            finally {
                setLoading(false)
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className="p-4 flex h-[90vh] w-full flex-wrap gap-2 ">

            {loading ? (
                <div className="loader bg-yellow-500 ">Loading
                    <span></span>
                </div>
            ) : projectsData?.length === 0 ? (
                <NoData label="Create Your First Project" 
                path="/create-project"
                />
            ) : <>
                {projectsData.map((project, index) => (
                    <ProjectSection
                        key={index}
                        _id={project?._id}
                        title={project?.title}
                        projectImage={project?.projectImage}
                        githubLink={project?.githubLink}
                        description={project?.description}
                        livePreviewLink={project?.livePreviewLink}
                        technologiesUsed={project?.technologiesUsed}

                        setProjectsData={setProjectsData} // Pass setProjectsData here
                    />
                )
                )
                }

            </>
            }
        </section>
    );
};

export default Projects;
