import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Green Poin Mobile Application",
    align: "right",
    image: "/images/website-img-1.png", 
    link: "https://github.com/waynewagiuw/GreenPoin/tree/main",
  },
  
  {
    name: "Full Stack CRUD",
    align: "left",
    image: "/images/website-img-4.jpeg",
    link: "https://github.com/waynewagiuw/CRUD", 
  },
  {
    name: "ArtShop Front-End",
    align: "right",
    image: "/images/website-img-2.jpeg",
    link: "https://github.com/waynewagiuw/artshopcopy", 
  },
   {
    name: "Library API Back-End",
    align: "left",
    image: "/images/website-img-3.jpeg", 
    link: "https://github.com/waynewagiuw/library_api",
  },
  
  // {
  //   name: "Wyn_Art Patreon Website",
  //   align: "right",
  //   image: "/images/website-img-1w.jpg",
  //   link: "https://github.com/waynewagiuw/Wyn_Art_Patreon", 
  // },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            align={project.align}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
