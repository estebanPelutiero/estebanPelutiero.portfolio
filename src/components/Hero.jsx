import React from 'react'
import Layout from './Layout'
import HeroPic from '../assets/images/hero.webp'
import { TypeAnimation } from 'react-type-animation'
import { Button } from "@material-tailwind/react";
import { Link } from 'react-scroll';
import { IconButton } from "@material-tailwind/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <Layout id={'home'} className={'flex flex-col-reverse justify-center lg:flex-row items-center pt-20'}>

      <div className='w-full lg:w-1/2 font-secondary'>
        <div className='mb-4 lg:mb-2'>
          <h1 className='text-white text-6xl lg:text-[5.4rem] leading-none font-semibold text-center lg:text-start'>
            Esteban <br /> <span className='text-purple'>Pelutiero</span>
          </h1>
        </div>

          <span className='inline-block lg:hidden uppercase text-4xl lg:text-5xl text-white font-semibold text-center w-full'>
            Soy 
          </span>
        <div className='text-center lg:text-start uppercase text-4xl lg:text-5xl text-white font-semibold mb-4'>
        <span className='hidden lg:inline'>Soy </span>
          <TypeAnimation
            sequence={[
              "Desarrollador",
              2000,
              "Diseñador",
              2000,
              "Freelancer",
              2000,
            ]}
            speed={50}
            wrapper='span'
            className='text-purple'
            repeat={Infinity}
          />
        </div>

        <div className='text-white text-xl mb-8 text-center lg:text-start'>
          Desarrollador Frontend <br /> formado en Buenos Aires, Argentina
        </div>

        <div className='w-full flex justify-center items-center lg:justify-start gap-5'>
          <Button className='btn py-4 px-8 capitalize text-base font-medium font-primary rounded-full text-center'>
            <Link className='rounded-full' to='contact'>
              Contacto
            </Link>
          </Button>
          <IconButton size='md' className='rounded-full text-4xl bg-transparent'>
            <a href="#">
              <FaGithub />
            </a>
          </IconButton>
          <IconButton size='md' className='rounded-lg text-4xl bg-transparent'>
            <a href="#">
              <FaLinkedin />
            </a>
          </IconButton>
        </div>

      </div>

      <figure className='lg:w-1/2 flex items-center justify-center mb-6 lg:mb-0'>
        <img className='w-[68%]' src={HeroPic} alt="Esteban Pelutiero Portfolio | Frontend Developer" />
      </figure>

    </Layout>
  )
}

export default Hero