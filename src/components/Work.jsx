import React from "react";
import Layout from "./Layout";
import { FaGithub, FaExternalLinkAlt  } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import Estudio from '../assets/images/estudio.webp';
import Bastion from '../assets/images/bastion.webp';
import Garden from '../assets/images/garden.webp';
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <Layout id={"work"} className={'py-20'}>

      <div className='w-full mb-14'>
        <h2 className='text-purple text-xl font-poppins font-semibold uppercase mb-4 text-center lg:text-start'>Portfolio 👜</h2>
        <h3 className='text-2xl text-gray-50 font-poppins font-bold mb-6 text-center lg:text-start'>Each project is a unique piece of development 🧩</h3>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
        <WorkCard
         image={Estudio}
         title={"Abonjo legal study"}
         icon={"⚖️"}
         description={"Landing page design and development for a law firm.The client's needs led this design towards minimalism and seriousness."}
        />
        <WorkCard
         image={Garden}
         title={"Clean & Garden"}
         icon={"🍃"}
         description={"Landing page design and development for a law firm.The client's needs led this design towards minimalism and seriousness."}
        />
        <WorkCard
         image={Bastion}
         title={"Bastion jiu jitsu"}
         icon={"🥋"}
         description={"Landing page design and development for a law firm.The client's needs led this design towards minimalism and seriousness."}
        />
       </div>

    </Layout>
  );
};

export default Work;
