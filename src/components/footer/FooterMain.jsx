import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },

    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
    {
      name: "Achievments",
      section: "achievments",
    },
  ];
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:text-center">
        <p className="text-3xl text-lightGrey ">Wayne Gilbert Wagiuw</p>
        <ul className="flex md:flex-row sm:flex-col md:mt-0 sm:mt-4 gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto md:mt-2 sm:mt-4 mb-12 text-sm text-lightBrown sm:text-center md:text-right">
        © Template by Abdelrahman Qassem
      </p>
    </div>
  );
};

export default FooterMain;
