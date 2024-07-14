// components/Project.js
import Image from 'next/image';
import Link from 'next/link';

const Project = ({title, projectImage, githubLink, description, livePreviewLink, technologiesUsed }:ProjectProps) => {
  return (
    <section className="h-fit bg-white dark:bg-gray-800 rounded-lg shadow-md">
      {/*start top section  */}
      <Image
        className="object-cover"
        src={projectImage}
        alt="Project Image"
        width={200}
        height={200}
      />
      {/* end top section */}

      {/* start bottom section */}
      <div className="p-6">
        
        <p className="uppercase tracking-wide text-sm text-[#020617]  font-semibold">{title}</p>
        <p className="mt-2 text-[#334155] dark:text-gray-300">{description}</p>


        <div className="mt-4">
          <h4 className="text-lg font-semibold text-primary dark:text-gray-100">Technologies Used:</h4>

          <ul className="">
            {technologiesUsed?.map((tech, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">{tech}</li>
            ))}
          </ul>


        </div>
        <div className="mt-4 flex justify-between">
          <Link href={livePreviewLink}>
            <p className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">Live Preview</p>
          </Link>
          <Link href={githubLink}>
            <p className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300">GitHub</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Project;
