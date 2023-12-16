import React from "react";
import Layout from "./Layout";
import { FaGithub } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import Estudio from '../assets/images/estudio.webp';
import Bastion from '../assets/images/bastion.webp';
import Garden from '../assets/images/garden.webp';

const Work = () => {
  return (
    <Layout id={"work"} className={'pt-20'}>

      <div className='w-full h-fit flex flex-col justify-between'>

        {/* Work Text */}
        <div className='mb-10'>

          <h2 className='text-purple text-3xl font-primary uppercase mb-6'>
            Mis ultimos trabajos
          </h2>

          {/* <Button className='btn py-3 px-6 capitalize text-sm font-medium font-primary rounded-full text-center'>
            <a className="flex items-center gap-4" href="#">
              Ver todos
              <FaGithub size={25} />
            </a>
          </Button> */}

        </div>

        <article>
          {/* WORK 1 - ESTUDIO*/}
          <div className='lg:w-1/2 lg:h-auto group relative overflow-hidden border border-white/60 rounded-lg cursor-pointer'>
            <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-700' src={Estudio} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-20 transition-all duration-500 z-50'>
              <span className='text-gradient font-medium text-lg'>
                Diseño y desarrollo
              </span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-50'>
              <span className='text-xl text-white font-primary'>
                Abonjo | Estudio Jurídico
              </span>
            </div>
          </div>



        </article>


      </div>

      {/* Columna derecha */}

      <div className='flex flex-col justify-between'>
        <div className='lg:w-[450px] lg:h-auto group relative overflow-hidden border border-white/60 rounded-lg cursor-pointer'>

          {/* overlay */}
          <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>

          {/* img */}
          <img className='group-hover:scale-125 transition-all duration-700' src={Garden} alt="" />

          {/* pretitle */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient font-medium text-lg'>
              Diseño y desarrollo
            </span>
          </div>

          {/* title */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-50'>
            <span className='text-xl text-white font-primary'>
              Clean and Garden | Limpieza integral
            </span>
          </div>

        </div>

        {/* WORK 3 */}

        <div className='lg:w-[450px] lg:h-auto group relative overflow-hidden border border-white/60 rounded-lg cursor-pointer'>

          {/* overlay */}
          <div className='group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300'></div>

          {/* img */}
          <img className='group-hover:scale-125 transition-all duration-700' src={Bastion} alt="" />

          {/* pretitle */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-20 transition-all duration-500 z-50'>
            <span className='text-gradient font-medium text-lg'>
              Diseño y desarrollo
            </span>
          </div>

          {/* title */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-50'>
            <span className='text-xl text-white font-primary'>
              Bastión Jiu Jitsu
            </span>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Work;
