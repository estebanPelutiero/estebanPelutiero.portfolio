import React from 'react'
import Layout from './Layout'
import HeroPic from '../assets/images/hero.webp'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <Layout id={'home'} className={'flex items-center pt-20'}>
      <div className='w-1/2 font-secondary'>
        <div className='mb-4'>
          <h1 className='text-white text-[5.5rem] leading-none font-semibold'>Esteban <br /> <span className='text-purple'>Pelutiero</span></h1>
        </div>

        <div className='uppercase text-5xl text-white font-semibold mb-4'>
          <span className=''>Soy </span>
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

        <div className='text-white text-xl'>
          Desarrollador Frontend <br /> formado en Buenos Aires, Argentina
        </div>
      </div>

      <figure className='w-1/2 flex items-center justify-center'>
        <img className='w-[68%]' src={HeroPic} alt="Esteban Pelutiero Portfolio | Frontend Developer" />
      </figure>

    </Layout>
  )
}

export default Hero