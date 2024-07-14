import ProjectSection from '@/components/ProjectSection'
import React from 'react'
import projectImageParam from '/public/images/projectImage.png'
import { title } from 'process';
const Projects = () => {
    const projectsData = [
        {
            title:"mern project",
            projectImage:projectImageParam,
            githubLink: 'https://github.com/username/project1-repo',
            description: 'This is a description of the first project.',
            livePreviewLink: 'https://livepreview1.com',
            technologiesUsed: ['React', 'Next.js', 'Tailwind CSS'],
        },
        {
            title:"mern project",
            projectImage: projectImageParam,
            githubLink: 'https://github.com/username/project2-repo',
            description: 'This is a description of the second project.',
            livePreviewLink: 'https://livepreview2.com',
            technologiesUsed: ['JavaScript', 'Node.js', 'Express'],
        },
        {
            title:"mern project",
            projectImage: projectImageParam,
            githubLink: 'https://github.com/username/project2-repo',
            description: 'This is a description of the second project.',
            livePreviewLink: 'https://livepreview2.com',
            technologiesUsed: ['JavaScript', 'Node.js', 'Express'],
        },
        {
            title:"mern project",
            projectImage: projectImageParam,
            githubLink: 'https://github.com/username/project2-repo',
            description: 'This is a description of the second project.',
            livePreviewLink: 'https://livepreview2.com',
            technologiesUsed: ['JavaScript', 'Node.js', 'Express'],
        },
        {
            title:"mern project",
            projectImage: projectImageParam,
            githubLink: 'https://github.com/username/project2-repo',
            description: 'This is a description of the second project.',
            livePreviewLink: 'https://livepreview2.com',
            technologiesUsed: ['JavaScript', 'Node.js', 'Express'],
        },
    ];
    return (
        <section className=' bg-red-500 p-4 flex h-screen flex-wrap gap-2'>


            {projectsData.map((project, index) => (
                <ProjectSection
                    key={index}
                    title={project.title}
                    projectImage={project.projectImage}
                    githubLink={project.githubLink}
                    description={project.description}
                    livePreviewLink={project.livePreviewLink}
                    technologiesUsed={project.technologiesUsed}
                />
            ))}

        </section>
    )
}

export default Projects