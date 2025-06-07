import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn,  FaFacebook, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://linkedin.com/in/wayne-gilbert-wagiuw-712047270" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/waynewagiuw" Icon={FiGithub} />
      <SingleContactSocial link="https://www.facebook.com/share/18yLYiU1BZ/" Icon={FaFacebook} />
    </div>
  );
};

export default ContactSocial;
