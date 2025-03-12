import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/syed-musa-raza-zaidi-84a53317a/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/MusaZaidi110" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/_musa.zaidi/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
