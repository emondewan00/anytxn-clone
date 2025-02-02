import Image from "next/image";
import { FaLinkedin, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logo from "@/public/logo.svg";

const AntechSolutions = () => {
  return (
    <section className="bg-[#002045] py-12 ">
      <div className="max-w-lg px-6  md:max-w-xl lg:max-w-6xl mx-auto flex justify-between">
        <Image src={logo} alt="logo" />
        <div className="hidden  lg:flex text-[#00E9EA] items-center">
          <p className="font-semibold text-lg pr-4 border-r py-4">
            Our Solutions
          </p>
          <ul className="flex gap-x-4 ml-4 font-medium">
            <li>AnyCaaS</li>
            <li>AnyBaaS</li>
            <li>AnyPaaS</li>
          </ul>
        </div>
        <div className="flex lg:hidden gap-x-4 text-blue-500">
          <FaLinkedin size={32} />
          <FaPhone size={32} />
          <MdEmail size={32} />
        </div>
      </div>
    </section>
  );
};

export default AntechSolutions;
