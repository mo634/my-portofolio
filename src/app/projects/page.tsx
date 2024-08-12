// pages/projects/page.js
"use client"
import React, { useEffect, useState } from 'react';


import { IoMdAdd } from 'react-icons/io';
import { useAppSelector } from '@/store/index.js';
import ProjectSection from '@/app/components/ProjectSection';
import { useRouter } from 'next/navigation';
import TransitionEffectNavigation from '../components/TransitionEffectNavigation.jsx';

const Projects = () => {
    const [projectsData, setProjectsData] = useState<ProjectProps[]>([]);
    const [createProject, setCreateProject] = useState(false)
    const router = useRouter()
    const isAdmin = useAppSelector((state) => (state as { admin: { isAdmin: boolean } }).admin.isAdmin);
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects');
                const { data } = await response.json();
                setProjectsData(data);

            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className="p-4 flex min-h-screen w-full flex-wrap gap-2 ">
            <TransitionEffectNavigation />
            {projectsData.length === 0 ? (
                <div className="loader bg-yellow-500 ">Loading
                    <span></span>
                </div>
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
