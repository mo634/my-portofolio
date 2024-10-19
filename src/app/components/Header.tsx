
"use client"
import { TbCircleLetterMFilled } from 'react-icons/tb';
import HeaderLinkComponent from './HeaderLinkComponent';
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { MdDarkMode } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

import Link from 'next/link';


const Header = () => {

  return (
    <header className="bg-primary max-md:hidden h-[10vh] shadow-md">
      <nav className="flex justify-around items-center h-full ">
        <TbCircleLetterMFilled className="text-5xl text-blue-700 bg-secondary rounded-full" />
        <HeaderLinkComponent />
        <div className=" flex items-center gap-4">
          <Link href="https://github.com/mo634">
            <FaGithub className="cursor-pointer text-2xl text-white transition-transform duration-300 transform hover:scale-125" />
          </Link>
          <Link href="www.linkedin.com/in/mohamed-mostafa-85405a291">
            <GrLinkedin className="cursor-pointer text-2xl text-white transition-transform duration-300 transform hover:scale-125" />
          </Link>

          <Link href={"https://www.youtube.com/@arabDevelopers312"} className=' bg-white rounded-md px-1' >
            <FaYoutube
              className=' text-3xl text-red-500 transition-transform duration-300 transform hover:scale-125 cursor-pointer'
            />
          </Link>
          {/* <MdDarkMode className="cursor-pointer text-2xl text-white transition-transform duration-300 transform hover:scale-125" /> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
