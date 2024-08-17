"use client"

import { useState } from "react";
import { Button } from "../components/ui/button";


const CreateSkill = () => {
    // states 
    const [skillName, setSkillName] = useState('');
    const [skillIcon, setSkillIcon] = useState('');
    const [skillIconLibrary, setSkillIconLibrary] = useState('');
    const [courseReferences, setCourseReferences] = useState('');
    const [message, setMessage] = useState('');

    // functions 
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        console.log("btn clicked")

        // init form data to send to api 
        const skillData = {
            skillName,
            skillIcon,
            skillIconLibrary,
            courseReferences: courseReferences.split(',').map((ref) => ref.trim()),
        };

        // start send api and handle response
        try {
            const response = await fetch('/api/skills', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(skillData),
            });
            const result = await response.json();

            if (result.success) {
                setMessage('Skill added successfully!');
                // Reset the form
                setSkillName('');
                setSkillIcon('');
                setSkillIconLibrary('');
                setCourseReferences('');
            } else {
                setMessage(`Error: ${result.error}`);
            }



        } catch (error: any) {

            setMessage(`Error: ${error.message}`);

        }



    }
    return (
        <section className=" h-[90vh] w-full flex flex-col items-center">

            <h1 className="mt-4 text-4xl font-bold text-main  text-responsive mb-10 text-center">
                Add New Skill
            </h1>

            <form onSubmit={handleSubmit} className="max-w-4xl ">


                <div className="">
                    <label htmlFor="skillName">Skill Name:</label>
                    <input
                        type="text"
                        id="skillName"
                        value={skillName}
                        onChange={(e) => setSkillName(e.target.value)}
                        required
                        className="input-style"
                    />
                </div>

                <div>
                    <label htmlFor="skillIcon">Skill Icon URL:</label>
                    <input
                        type="text"
                        id="skillIcon"
                        value={skillIcon}
                        onChange={(e) => setSkillIcon(e.target.value)}
                        className="input-style"
                    />
                </div>

                <div>
                    <label htmlFor="skillIconLibrary">Skill Icon Library:</label>
                    <input
                        type="text"
                        id="skillIconLibrary"
                        value={skillIconLibrary}
                        onChange={(e) => setSkillIconLibrary(e.target.value)}
                        className="input-style"
                    />
                </div>
                <div>
                    <label htmlFor="courseReferences">Course References (comma separated):</label>
                    <input
                        type="text"
                        id="courseReferences"
                        value={courseReferences}
                        onChange={(e) => setCourseReferences(e.target.value)}
                        required
                        className="input-style"
                    />
                </div>

                <Button type="submit" className="w-full my-2">Add Skill</Button>


            </form>

            {message && <p>{message}</p>}



        </section>
    )
}

export default CreateSkill