'use client'
import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import FooterLayout from '../footer/FooterLayout'
import img from "./assets/sideAuthimage.png"
import Signin from './Signin'
import Signup from './Signup'


const main = () => {

  const [signup , setSignup] = useState(false)

  return (
    <div className="min-h-screen  flex flex-col w-full">
      <Navbar/>
      <div className=' flex justify-around mx-6  mt-12  items-center'>
        <div>
        <img src={img.src} className='md:h-[35rem] md:w-[35rem]' />
          </div>
         <div>
               {
                signup ? ( <>
                   <Signup   setSignup = {setSignup}/>
                </>) : (<>
                  <Signin setSignup={setSignup}/>
                </>)
               }
         </div>
      </div>
    
 <div className='mx-36'>
 <FooterLayout/>
 </div>
    </div>
  )
}

export default main