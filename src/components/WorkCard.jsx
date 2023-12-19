import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import { DiReact } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const WorkCard = ({ image, title, description, icon }) => {
  return (
    <Card className="w-full lg:max-w-[21rem] bg-white/10 backdrop-blur-xl">
      <CardHeader floated={false}>
        <img className="shadow-none" src={image} alt={title} />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography
            variant="h5"
            className="font-medium font-poppins text-purple uppercase"
          >
            {title}
          </Typography>
          <Typography
            className="text-base gap-1.5"
          >
            
            {icon}
          </Typography>
        </div>
        <Typography className="font-poppins pb-3 border-b-[1px] border-white/30" color="white">
          {description}
        </Typography>

        <div className="group mt-4 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="React">
            <span className="cursor-pointer text-white transition-color hover:text-purple">
              <DiReact size={40}/>
            </span>
          </Tooltip>
          <Tooltip content="Tailwind">
            <span className="cursor-pointer text-white transition-color hover:text-purple">
              <SiTailwindcss size={40}/>
            </span>
          </Tooltip>
        </div>
      </CardBody>

      <CardFooter className="flex items-center gap-6 pt-0">
        <Button className="bg-white/20 backdrop-blur-lg flex items-center justify-center gap-2 py-2 px-4 capitalize text-base text-white font-medium font-poppins rounded-full text-center" size="md" fullWidth={true}>
          Code
          <FaGithub size={18}/>
        </Button>
        <Button className="bg-white/20 backdrop-blur-lg flex items-center justify-center gap-2 py-2 px-4 capitalize text-base text-white font-medium font-poppins rounded-full text-center" size="md" fullWidth={true}>
          See live
          <FiExternalLink size={18} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WorkCard;
