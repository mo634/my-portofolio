"use client"

import { ChangeEvent, useRef, useState } from "react";

import createProjectImage from "/public/images/fill-project-info.jpg"
import Image from "next/image";
import axios from "axios";

import { Button } from "../components/ui/button";
import { FaUpload } from 'react-icons/fa';
import DropZone from "../components/DropZon";

const CreateProject = () => {
    // states 
    const [title, setTitle] = useState('');
    const [githubLink, setGithubLink] = useState('');
    const [description, setDescription] = useState('');
    const [livePreviewLink, setLivePreviewLink] = useState('');
    const [technologiesUsed, setTechnologiesUsed] = useState<string[]>([]);
    const [projectImage, setProjectImage] = useState("")
    const [projectImageId, setProjectImageId] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isImageUploaded, setIsImageUploaded] = useState("")
    // functions
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const project = {
            title,
            githubLink,
            description,
            livePreviewLink,
            technologiesUsed,
            projectImage,
            projectImageId
        };
        try {
            setIsLoading(true)
            console.log("project", project);

            const response = await fetch('/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(project),
            });

            const data = await response.json();

            if (data.success) {
                alert('Project created successfully!');
                // Reset form fields
                setTitle('');
                setGithubLink('');
                setDescription('');
                setLivePreviewLink('');
                setTechnologiesUsed([]);
                setProjectImage('');
                setProjectImageId('');
                setIsImageUploaded("");
            } else {
                alert(`Error: ${data.error}`);
            }

        }
        catch (error) {
            console.log("error while creating project", error);
        } finally {
            setIsLoading(false)
        }
    };




    return (
        <section className="flex gap-4 px-2 py-10 max-lg:flex-col max-lg:items-center w-full items-center justify-center">

            <div className="p-2 max-lg:w-auto  w-[25%] bg-secondary  h-full flex items-center justify-center border-2 border-dashed border-blue-700">
                <DropZone
                    setProjectImage={setProjectImage}
                    setProjectImageId={setProjectImageId}
                />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl w-full  flex-1 ">
                <div className="">
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                        Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="input-style"
                        placeholder="Enter project title"
                    />
                </div>
                <div>
                    <label className="input-label">
                        GitHub Link
                    </label>

                    <input
                        type="text"
                        value={githubLink}
                        onChange={(e) => setGithubLink(e.target.value)}
                        required
                        className="input-style"
                        placeholder="Enter github link"
                    />
                </div>
                <div>
                    <label className="input-label">
                        Description
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="input-style"
                        placeholder="Enter project description"
                    />
                </div>
                <div>
                    <label className="input-label">
                        Live Preview Link
                    </label>
                    <input
                        type="text"
                        value={livePreviewLink}
                        onChange={(e) => setLivePreviewLink(e.target.value)}
                        required
                        className="input-style"
                        placeholder="Enter live preview link"
                    />
                </div>
                <div>
                    <label className="input-label">
                        Technologies Used
                    </label>
                    <input
                        type="text"
                        value={technologiesUsed.join(', ')}
                        onChange={(e) => setTechnologiesUsed(e.target.value.split(',').map(tech => tech.trim()))}
                        required
                        className="input-style"
                        placeholder="Enter technologies used"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="
                        w-full duration-500
                        inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {
                            isLoading ? "Loading..." : "Create Project"
                        }
                    </button>
                </div>
            </form>
        </section>
    );
}

export default CreateProject