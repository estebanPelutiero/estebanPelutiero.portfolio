import React from 'react'
import Layout from './Layout'
import AboutPic from '../assets/images/about.png'
import { DiReact, DiJsBadge, DiGit } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { FaFigma } from 'react-icons/fa'
import { Button } from '@material-tailwind/react';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <Layout id={'about'} className={'flex items-center pt-20'}>
      <figure className='hidden lg:flex justify-center w-2/5'>
        <img src={AboutPic} alt="Esteban Pelutiero | Desarrollador Frontend" />
      </figure>
      <div className='w-full lg:w-3/5'>
        <h2 className='text-purple text-3xl font-primary uppercase mb-6'>Sobre mi</h2>
        <p className='text-white font-secondary text-lg mb-3 pb-3 border-b-[0.5px] border-b-white/30'>Soy desarrollador frontend, y vengo haciendo freelance desde principios de 2022. En este rango de tiempo estuve involucrado en varios proyectos, en los cuales me encargué de traspolar las ideas de mis clientes en algo que puedan ver en la pantalla, para luego escuchar cuanto les gustó. <br /> Mis servicios engloban desde el diseño en lápiz y papel, hasta el desarrollo en código completo del sitio. <br /> Me encuentro en constante movimiento de aprendizaje, actualmente estoy cursando un bootcamp, para pasar de frontend a fullstack.</p>
        <h3 className='text-white font-primary text-lg mb-4 py-2'>
          Tencologías que utilizo actualmente
        </h3>
        <div className='flex flex-col items-center gap-8 lg:flex-row justify-between'>
          <figure className='flex items-center gap-8'>
            <DiReact color='white' size={45} />
            <SiTailwindcss color='white' size={45} />
            <DiGit color='white' size={50} />
            <DiJsBadge color='white' size={35} />
            <FaFigma color='white' size={35} />
          </figure>
          <Button className='btn py-4 px-8 capitalize text-base font-medium font-primary rounded-full text-center'>
            <Link to='contact'>
              Contacto
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default About