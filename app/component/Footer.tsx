import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative bottom-0 w-full h-25 text-tennessee-orange py-8 flex justify-center space-x-4">
      <Link href="https://github.com/frankcampos" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-2xl hover:text-white" />
      </Link>
      <Link href="https://www.linkedin.com/in/frank-parada-campos-214a48229/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl hover:text-gray-400" />
      </Link>
    </div>
  );
};

export default Footer;