// pages/projects/page.js
"use client"
import React, { useEffect, useState } from 'react';
import ProjectSection from '@/components/ProjectSection';
import projectImage from '/public//images/projectImage.png';
const Projects = () => {
    const [projectsData, setProjectsData] = useState<ProjectProps[]>([]);

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
        <section className="p-4 flex min-h-screen flex-wrap gap-2 justify-center">
            {projectsData.length === 0 ? (
                <p>Loading...</p>
            ) : (
                projectsData.map((project, index) => (
                    <ProjectSection
                        key={index}
                        title={project?.title}
                        projectImage={projectImage}
                        githubLink={project?.githubLink}
                        description={project?.description}
                        livePreviewLink={project?.livePreviewLink}
                        technologiesUsed={project?.technologiesUsed}
                    />
                ))
            )}
        </section>
    );
};

export default Projects;
