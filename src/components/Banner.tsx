import Image from "next/image";
import NavBar from "./NavBar";
import hero from "@/public/backgrounds/hero.jpg";
import { IoIosArrowForward } from "react-icons/io";
import HeroSvg from "./HeroSvg";
import HeroImage from "./HeroImage";

const Banner = () => {
  return (
    <div>
      <section
        style={{
          background:
            "radial-gradient(134.02% 81.35% at -9.66% 129.92%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)",
        }}
        className="h-[85vh] flex flex-col relative banner overflow-hidden"
      >
        <NavBar />

        <div className="flex-grow flex items-center justify-between max-w-6xl w-full mx-auto relative z-10 px-8 lg:px-0">
          <div className="text-white lg:w-[60%]">
            <h1 className="text-5xl lg:text-7xl font-semibold  tracking-wide leading-[100%] text-pretty">
              Embrace the future of finance
            </h1>
            <p className="text-lg font-medium my-8">
              Reimagine financial services with AnyTech’s open platform,
              distributed banking solution that powers transformation
            </p>
            <button className="bg-[#FE8B53] rounded pl-10 pr-8 py-3 text-lg font-semibold w-full lg:w-auto flex items-center gap-x-2 justify-center lg:justify-start">
              Reach Out to Us <IoIosArrowForward />
            </button>
          </div>
        </div>
        <HeroImage />
        <div
          className="absolute right-0 top-0 w-full h-full hidden lg:block"
          style={{
            background:
              "linear-gradient(190deg, #1f80f0 15.05%, rgba(31, 128, 240, 0) 30.39%)",
          }}
        ></div>
        <HeroSvg />
      </section>
      <div
        className="block lg:hidden translate-y-[-30%] -mb-[10%]"
        style={{
          clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0% 100%)",
        }}
      >
        <Image className="object-cover bg-cover w-full" src={hero} alt="" />
      </div>
    </div>
  );
};

export default Banner;
