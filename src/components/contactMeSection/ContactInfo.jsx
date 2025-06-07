import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="wagiuwwayne@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+62 822 1537 8469" Image={FiPhone} />
      <SingleInfo text="Kema Dua, Sulawesi Utara" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
