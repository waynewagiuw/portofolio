import SingleSkill from "./SingleSkill";
import {
  FaHtml5,
  FaReact,
  FaGitAlt,
  FaDatabase,
  FaWordpress,
  FaCpanel,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiPrisma, SiExpress, SiMysql, SiElementor } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiCctv, BiSolidPrinter } from "react-icons/bi";


const skills = [
  
  {
    skill: "WordPress",
    icon: FaWordpress,
  },
  {
    skill: "Elementor",
    icon: SiElementor,
  },
  {
    skill: "cPanel",
    icon: FaCpanel,
  },
  {
    skill: "Git",
    icon: FaGitAlt,
  },
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "CCTV",
    icon: BiCctv,
  },
  { 
    skill: "Printer", 
    icon: BiSolidPrinter,
  },
];

const AllSkillsDua = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkillsDua;