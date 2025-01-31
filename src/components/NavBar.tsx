import logo from "@/public/logo.svg";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav>
      <Image className="h-12 w-12 " src={logo} alt="Logo" />
      <ul className="flex ml-auto">
        <li className="mr-4">
          <a href="#">Home</a>
        </li>
        <li className="mr-4">
          <a href="#">About</a>
        </li>
        <li className="mr-4">
          <a href="#">Services</a>
        </li>
        <li className="mr-4">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
