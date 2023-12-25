import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { HiOutlineMap } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section id='contact' className='flex items-center lg:items-start flex-col h-fit mb-14 py-36 mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1050px]'>
        <div className='w-full mb-14'>
          <h2 className='text-purple text-xl font-poppins font-semibold uppercase mb-4 text-center lg:text-start'>Contact</h2>
          <h3 className='text-2xl text-gray-50 font-poppins font-bold mb-6 text-center lg:text-start'>Don't be shy! Hit me up! 👇</h3>
        </div>

        <div className='flex flex-col gap-8 lg:flex-row lg:gap-20'>

          <div className='flex flex-col lg:flex-row lg:text-start items-center text-center gap-4'>
            <div className='p-3 rounded-full border-2 border-purple/70 w-fit bg-white/10 backdrop-blur-lg shadow-lg shadow-purple/10'>
              <HiOutlineMap className='text-white' size={30}/>
            </div>
            <div>
              <h3 className='font-poppins font-semibold text-[17px] text-white mb-1'>Location</h3>
              <a className='flex items-center' 
              href="https://maps.app.goo.gl/s9ypTuZRvamYiyk79"
              target='_blank'
              rel='noopener noreferer'
              >
                <p className='font-poppins font-normal text-[17px] text-white/70 hover:text-purple ease-in-out duration-100'>Buenos Aires, Argentina</p>
              </a>
            </div>
          </div>

          <div className='flex flex-col text-center lg:text-start lg:flex-row items-center gap-4'>
            <div className='p-3 rounded-full border-2 border-purple/70 w-fit bg-white/10 backdrop-blur-lg shadow-lg shadow-purple/10'>
              <IoMailOutline className='text-white' size={30}/>
            </div>
            <div>
              <h3 className='font-poppins font-semibold text-[17px] text-white mb-1'>E-mail</h3>
              <a className='flex items-center' href="mailto:estebanpelutiero@gmail.com">
                <p className='font-poppins font-normal text-[17px] text-white/70 hover:text-purple ease-in-out duration-100'>estebanpelutiero@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className='w-full bg-white/5 backdrop-blur-lg py-12'>
        <div className='flex flex-col items-center gap-10 lg:flex-row lg:justify-between mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1050px]'>
          <p className='font-poppins font-semibold text-[17px] text-white text-center'>
            Copyright © 2023. All rights are reserved
          </p>
          <div className='flex gap-6'> 
            <a 
            href="https://github.com/estebanPelutiero"
            target='_blank'
            rel='noopener noreferer'
            >
              <FaGithub color='white' size={30} />
            </a>

            <a 
            href="https://www.linkedin.com/in/estebanpelutiero/"
            target='_blank'
            rel='noopener noreferer'
            >
              <FaLinkedin color='white' size={30} />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contact