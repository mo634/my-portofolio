"use client"
import { useAppSelector } from "@/store";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import AdminOptions from "./AdminOptions";
import { TbCircleLetterMFilled } from "react-icons/tb";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

function HeaderMobile() {
    const isAdmin = useAppSelector((state) => (state as { admin: { isAdmin: boolean } }).admin.isAdmin);
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    return (
        <header className="relative z-10  flex justify-between items-center bg-primary text-white p-2 md:hidden">
            {/* logo */}
            <Link href={"/"}
                className=""
            ><TbCircleLetterMFilled className="text-6xl text-blue-700 bg-secondary rounded-full" />

            </Link>

            {/* menu */}

            <div className=" ">

                {
                    <div className=" cursor-pointer text-2xl"
                        onClick={() => setIsMenuClicked(!isMenuClicked)}
                    >

                        <GiHamburgerMenu

                            className={`${isMenuClicked ? "hidden" : "block"}`}
                        />


                    </div>

                }

                {

                    <div className={` ${isMenuClicked ? "fixed min-h-screen z-10 right-[50%]" : "hidden"} transition duration-500`}>

                        <nav className="

                            min-w-[200px] min-h-[200px]  
                            absolute flex flex-col  gap-4 p-3 rounded-md bg-primary shadow-md 
                            top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 
                            ">

                            <div className={` ${isMenuClicked ? "block" : "hidden"}
                                cursor-pointer text-white text-right hover:text-2xl transition-all duration-200`}
                                onClick={() => setIsMenuClicked(!isMenuClicked)}
                            >X</div>

                            {/*start  social links */}

                            <div className=" flex items-center justify-evenly">
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

                            <div className=" h-[2px] w-full bg-white"></div>
                            {/* end social links  */}



                            <Link href="/" className=""
                                onClick={() => setIsMenuClicked(!isMenuClicked)}
                            >
                                Home
                            </Link>
                            <Link href="/skills" className=""
                                onClick={() => setIsMenuClicked(!isMenuClicked)}
                            >
                                Skills
                            </Link>
                            <Link href="/projects" className=""
                                onClick={() => setIsMenuClicked(!isMenuClicked)}
                            >
                                Projects
                            </Link>
                            <Link href="/about" className=""
                                onClick={() => setIsMenuClicked(!isMenuClicked)}
                            >
                                About
                            </Link>


                        </nav>




                    </div>

                }



            </div>



        </header>
    )
}

export default HeaderMobile