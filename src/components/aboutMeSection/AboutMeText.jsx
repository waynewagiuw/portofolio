import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m a fresh graduate with a Bachelor’s degree in Informatics from Universitas Klabat.
        Passionate about building digital solutions through web and application development. 
        With a strong interest in full-stack development, I enjoy learning both front-end and back-end technologies to create complete and user-focused experiences. 
        I’m highly motivated, adaptable, and always eager to improve my skills through real-world projects and continuous learning. 
        My goal is to grow as a software Engineer and contribute to impactful, innovative products.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
