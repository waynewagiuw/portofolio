import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiPrisma, SiExpress, SiElementor } from "react-icons/si";
import { FaHtml5, FaNodeJs, FaGitAlt, FaDatabase, FaCss3Alt, FaReact, FaWordpress, FaCpanel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiCctv, BiSolidPrinter } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "PostgreSQL",
    icon: FaDatabase,
  },
  {
    skill: "Git",
    icon: FaGitAlt,
  },
  {
    skill: "NodeJs",
    icon: FaNodeJs,
  },
  {
    skill: "Express",
    icon: SiExpress,
  },
  {
    skill: "Prisma",
    icon: SiPrisma,
  },
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
    skill: "CCTV",
    icon: BiCctv,
  },
  {
    skill: "Printer",
    icon: BiSolidPrinter,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;