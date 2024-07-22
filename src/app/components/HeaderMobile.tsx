"use client"
import { useAppSelector } from "@/store";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import AdminOptions from "./AdminOptions";
import { TbCircleLetterMFilled } from "react-icons/tb";

function HeaderMobile() {
    const isAdmin = useAppSelector((state) => (state as { admin: { isAdmin: boolean } }).admin.isAdmin);
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    console.log(isMenuClicked)
    return (
        <header className="  flex justify-between items-center bg-primary text-white p-2 md:hidden">
            {/* logo */}
            <h1
                className=""
            ><TbCircleLetterMFilled className="text-6xl text-blue-700 bg-secondary rounded-full" />

            </h1>

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

                    <div className={`opacity-0 ${isMenuClicked ? "opacity-100" : ""} transition duration-500`}>

                        <nav className="
                       
                            min-w-[200px] min-h-[200px]  z-10
                            absolute flex flex-col  gap-4 p-3 rounded-md bg-primary shadow-md 
                            top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 
                            ">
                            <div className={` ${isMenuClicked ? "block" : "hidden"}
                                cursor-pointer text-white text-right hover:text-2xl transition-all duration-200`}
                                onClick={() => setIsMenuClicked(!isMenuClicked)}
                            >X</div>
                            <Link href="/" className="link-style"
                                onClick={() => setIsMenuClicked(!isMenuClicked)}
                            >
                                Home
                            </Link>
                            <Link href="/skills" className="link-style"
                                onClick={() => setIsMenuClicked(!isMenuClicked)}
                            >
                                Skills
                            </Link>
                            <Link href="/projects" className="link-style"
                                onClick={() => setIsMenuClicked(!isMenuClicked)}
                            >
                                Projects
                            </Link>
                            <Link href="/about" className="link-style"
                                onClick={() => setIsMenuClicked(!isMenuClicked)}
                            >
                                About
                            </Link>
                            <span className=''
                                onClick={() => setIsMenuClicked(!isMenuClicked)}
                            >
                                {isAdmin && <AdminOptions />}
                            </span>


                        </nav>
                    </div>

                }



            </div>



        </header>
    )
}

export default HeaderMobile