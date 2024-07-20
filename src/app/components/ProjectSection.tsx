// components/Project.js
import { useAppSelector } from '@/store/index.js';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdAdd } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { Button } from './ui/button';
import { AiFillDelete } from "react-icons/ai";
import { useState } from 'react';
const Project = ({ _id, setProjectsData, title, projectImage, githubLink, description, livePreviewLink, technologiesUsed }: ProjectProps) => {

  const isAdmin = useAppSelector((state) => (state as { admin: { isAdmin: boolean } }).admin.isAdmin);
  const [isLoding, setIsLoding] = useState(false)
  const handleRemoveProject = async () => {
    console.log("clicked")
    try {
      setIsLoding(true)
      const response = await fetch(`/api/projects?id=${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
      setIsLoding(false)
      const data = await response.json()
      console.log(data)
      if (data.success) {
        setProjectsData((prevProjects) => prevProjects.filter(project => project._id !== _id));
      }

    } catch (error) {
      console.log("error while deleting project", error)
    } finally {
      setIsLoding(false)
    }

  }
  return (
    <section className="h-fit bg-secondary flex flex-col justify-between  w-[24%] dark:bg-gray-800 rounded-lg ">
      {/*start top section  */}
      <Image
        className="object-cover w-full"
        src={projectImage}
        alt="Project Image"
        width={200}
        height={150}
      />
      {/* end top section */}

      {/* start bottom section */}
      <div className="p-6 overflow-hidden">

        <p className="uppercase tracking-wide text-sm text-primary  font-semibold">{title}</p>
        <p className="mt-2 text-slate-500 text-sm  line-clamp-3">{description}</p>


        <div className="mt-4">
          <h4 className="text-lg font-semibold text-primary dark:text-gray-100">Technologies Used:</h4>

          <ul className=" flex gap-2 flex-wrap mt-2">
            {technologiesUsed?.map((tech, index) => (
              <div key={index} className=' liquid-wrapper'>
                <span>{index + 1}.{tech}</span>
                <div className="liquid"></div>
              </div>
            ))}
          </ul>


        </div>
        <div className="mt-4 flex justify-between items-center">
          <Link href={livePreviewLink}>
            <Button
              className='bg-blue-700 hover:bg-non hover:opacity-[0.9] transition-all duration-500'
            >
              Live Prview
            </Button>
          </Link>


          <Link href={githubLink}>
            <FaGithub className='text-2xl hover:scale-150 transition duration-300' />
          </Link>
          {
            isAdmin && (

              <div
                onClick={handleRemoveProject}

                className=" text-2xl hover:text-red-700 hover:scale-150 transition duration-300 cursor-pointer">
                <AiFillDelete />
              </div>

            )
          }

        </div>
      </div>
    </section>
  );
};

export default Project;
