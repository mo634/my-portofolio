"use client"
import React, { useState } from 'react'
import AdminAuth from './components/AdminAuth'
import { Button } from './components/ui/button'
import { FaDownload } from "react-icons/fa6";
import PersonalImage from "@/../public/images/MyPersonalImage.png"
import Image from 'next/image'
import Link from 'next/link'
import { RiAdminLine } from "react-icons/ri";

const Home = () => {
  const [adminButton, setAdminButton] = useState(false)

  return (
    <>

      <section className='mt-2 px-[40px] max-md:px-0 bg-gray-100 py-2 h-[90vh] w-full flex flex-col items-center justify-center' >

        <p className=" capitalize mt-8 text-4xl font-bold text-responsive mb-10 text-center">
          Welcome to My Portfolio
        </p>
        <div className="flex max-md:flex-col max-md:w-full max-md:justify-center bg-gradient-to-r from-gray-100 to-gray-300 gap-[50px] items-center p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 max-md:transform-none max-md:hover:scale-100">
          <div className="self-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl border-4 border-white overflow-hidden transform hover:scale-110 transition-transform duration-500 max-md:transform-none max-md:hover:scale-100">
            <Image
              className='rounded-full'
              alt='My Personal Image'
              src={PersonalImage}
              width={350}
              height={350}
            />
          </div>

          {/* start right side */}

          <div className="px-4 mb-2 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <h1 className='text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text max-md:text-center mb-6'>
                FullStack Developer
              </h1>

              <p className='text-gray-700 leading-relaxed max-md:line-clamp-5 max-md:text-center max-sm:text-sm'>
                Accomplished Junior Full Stack Developer with two years of hands-on experience in HTML5,<br />
                CSS3, JavaScript (ES6+), React.js, Next.js, and Express.js. Proficient in MySQL, MongoDB,<br />
                and Git, emphasizing data performance optimization and robust version control. Passionate<br />
                about the entire software development lifecycle and committed to leveraging emerging<br />
                technologies for continuous improvement and high-value project contributions.<br />
              </p>

            </div>
            <div className="flex gap-3 items-center justify-center">
              <Link href={"/files/MYCV.pdf"}
                target='_blank'
                rel="noopener noreferrer"
                download={true}>

                <Button
                  className='max-sm:hidden bg-secondary text-primary border-2 border-primary hover:bg-transparent hover:opacity-[.8] transition duration-300'
                >
                  <FaDownload className='mr-2 text-xl hover:text-blue-700 transition duration-500' />
                  Download Resume
                </Button>
                <FaDownload className='text-blue-700 max-sm:block hidden mr-2 text-xl hover:text-blue-700 transition duration-500' />
              </Link>

              <div className="">
                {
                  adminButton ?

                    <AdminAuth setAdminButton={setAdminButton} /> :

                    <>

                      <Button
                        onClick={() => { setAdminButton(!adminButton) }}
                        className="max-sm:hidden bg-main bg-primary text-white py-2 px-4 rounded-lg hover:opacity-[.85] transition duration-300"
                      >
                        Are you admin?
                      </Button>

                      <RiAdminLine className='text-blue-700 max-sm:block hidden text-3xl hover:text-blue-700 transition duration-500' />
                    </>

                }
              </div>
            </div>
          </div>

          {/* end right side */}
        </div>
      </section>
    </>
  )
}

export default Home