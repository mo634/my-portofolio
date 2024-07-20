// components/Project.js
import { RootState, useAppSelector } from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdAdd } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { Button } from './ui/button';
const Project = ({_id, title, projectImage, githubLink, description, livePreviewLink, technologiesUsed }: ProjectProps) => {

  const isAdmin = useAppSelector((state: RootState) => (state as { admin: { isAdmin: boolean } }).admin.isAdmin);

  console.log(_id)
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
      <div className="p-6">

        <p className="uppercase tracking-wide text-sm text-primary  font-semibold">{title}</p>
        <p className="mt-2 text-slate-500 text-sm">{description}</p>


        <div className="mt-4">
          <h4 className="text-lg font-semibold text-primary dark:text-gray-100">Technologies Used:</h4>

          <ul className=" flex gap-2 truncate">
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
            <FaGithub className='text-xl' />
          </Link>


        </div>
      </div>
    </section>
  );
};

export default Project;
