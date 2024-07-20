"use client"
import React, { useState } from 'react'
import AdminAuth from './components/AdminAuth'
import { Button } from './components/ui/button'

const Home = () => {
  const [adminButton, setAdminButton] = useState(false)

  return (
    <section>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">



        {
          adminButton ?

            <AdminAuth /> :

            <>
              <h1 className="text-4xl font-bold text-main mb-4">Welcome to My Portfolio</h1>

              <Button
                onClick={() => { setAdminButton(true) }}
                className="bg-main bg-primary text-white py-2 px-4 rounded-lg hover:opacity-[.85] transition duration-300"
              >
                Are you admin?
              </Button>
            </>


        }
      </div>
    </section>
  )
}

export default Home