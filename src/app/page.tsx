"use client"
import React, { useState } from 'react'
import AdminAuth from './components/AdminAuth'
import { Button } from './components/ui/button'
import { FaDownload } from "react-icons/fa6";
import PersonalImage from "@/../public/images/MyPersonalImage.png"
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  const [adminButton, setAdminButton] = useState(false)

  return (
    <section className='px-[40px] max-md:px-0 bg-gray-100 py-2 h-[90vh]'>
      <p className="mt-4 text-4xl font-bold text-main  text-responsive mb-10 text-center ">
        Welcome to My Portfolio
      </p>

      <div className="flex max-md:flex-col max-md:w-full  bg-gray-100 items-center gap-[50px] ">
        <div className=" bg-primary rounded-md shadow-md flex items-center justify-center border-2 border-blue-700 ">
          <Image
            className='self-center'
            alt='My Personal Image'
            src={PersonalImage}
            width={350}
            height={350}
          />

        </div>

        {/* start right side */}

        <div className="px-4 mb-2 flex flex-col gap-4  ">
          <div className="flex flex-col gap-4">
            <h1 className='text-2xl font-bold text-main  text-responsive mb-4 '>FullStack Developer</h1>

            <p className=' text-gray-700 leading-relaxed max-md:line-clamp-5'>
              Accomplished Junior Full Stack Developer with two years of hands-on experience in HTML5,<br />
              CSS3, JavaScript (ES6+), React.js, Next.js, and Express.js. Proficient in MySQL, MongoDB,<br />
              and Git, emphasizing data performance optimization and robust version control. Passionate<br />
              about the entire software development lifecycle and committed to leveraging emerging<br />
              technologies for continuous improvement and high-value project contributions.<br />
            </p>

          </div>
          <div className=" flex gap-3">
            <Link href={"/files/MYCV.pdf"}
              target='_blank'
              rel="noopener noreferrer"
              download={true}>

              <Button
                className=' bg-secondary text-primary border-2  border-primary hover:bg-transparent hover:opacity-[.8] transition duration-300'
              >
                <FaDownload className='mr-2 text-xl hover:text-blue-700 transition duration-500' />
                Download Resume
              </Button>
            </Link>

            <div className="">
              {
                adminButton ?

                  <AdminAuth setAdminButton={setAdminButton} /> :

                  <>


                    <Button
                      onClick={() => { setAdminButton(!adminButton) }}
                      className="bg-main bg-primary text-white py-2 px-4 rounded-lg hover:opacity-[.85] transition duration-300"
                    >
                      Are you admin?
                    </Button>
                  </>


              }
            </div>
          </div>
        </div>




        {/* end right side */}
      </div>
    </section>
  )
}

export default Home