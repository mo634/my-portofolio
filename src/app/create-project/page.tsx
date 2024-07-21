"use client"

import { ChangeEvent, useState } from "react";

import createProjectImage from "/public/images/fill-project-info.jpg"
import Image from "next/image";
import axios from "axios";
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
    const [image, setImage] = useState<File | null>(null)

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

    const handleImageUploading = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmitImage = async (e: any) => {
        e.preventDefault()
        try {
            if (!image) return

            const formData = new FormData()
            formData.append('image', image)
            console.log("form data from frontend", formData)

            const response = await axios.post('/api/upload-image', formData)

            const data = await response.data

            console.log("data from backend after complete calling api ",
                data.data.secure_url
            )

            setProjectImage(data.data.secure_url)
            setProjectImageId(data.data.public_id)
        } catch (error) {
            console.log("error while uploading image", error)
        }
    }


    return (
        <section className="flex px-2 py-10 justify-center gap-5">
            <div className="">
                <Image src={createProjectImage} alt="Project Image" width={500} height={500}
                    className="object-cover rounded-md  shadow-md"
                />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl w-full  ">
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
                    {/*start  upload project image  */}
                    <div className="">
                        <input type="file"
                            onChange={handleImageUploading}
                        />
                        <button
                            onClick={handleSubmitImage}
                        >upload image </button>
                    </div>
                    {/*end   upload project image  */}

                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

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