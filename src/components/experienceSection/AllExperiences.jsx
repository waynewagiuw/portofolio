import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Hipster Officer",
    company: "UCIDOM",
    date: "2021-2022",
    responsibilities: [
      "Participating in building application.",
      "Explaining and facilitating UI/UX concepts.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "AI CORE TEAM",
    company: "GDSC UNKLAB",
    date: "2022 - 2024",
    responsibilities: [
      "Explaining and facilitating AI/ML concepts.",
      "Help students with their project weekly.",
      "Provide support for students through their learning journey.",
    ],
  },
  {
    job: "IT Support",
    company: "Bank Millenia",
    date: "2026 - now",
    responsibilities: [
      "Install and configure hardware and software.",
      "Provide technical support to employees.",
      "Troubleshoot network and system issues.",
      "Manage user accounts and access permissions.",
      "Monitor system performance and ensure uptime.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
