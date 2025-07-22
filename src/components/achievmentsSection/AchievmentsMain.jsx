import AchievmentsText from "./AchievmentsText";
import SingleAchievment from "./SingleAchievment";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const achievments = [
  {
    name: "2nd Place",
    align: "right",
    image: "/images/secondwin.jpg", 
    link: "https://indoneris.amikompurwokerto.ac.id/competition/winner?y=2024",
  },
  {
    name: "Best Innovation Concept",
    align: "left",
    image: "/images/bestinovation.jpg",
    link: "https://indoneris.amikompurwokerto.ac.id/competition/winner?y=2024", 
  },

];

const AchievmentsMain = () => {
  return (
    <div id="achievments" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <AchievmentsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {achievments.map((achievment, index) => (
          <SingleAchievment
            key={index}
            name={achievment.name}
            align={achievment.align}
            image={achievment.image}
            link={achievment.link}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievmentsMain;
