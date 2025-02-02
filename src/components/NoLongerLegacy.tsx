import { IoIosArrowForward } from "react-icons/io";
import LegacySectionSvg from "./LegacySectionSvg";

const NoLongerLegacy = () => {
  return (
    <div
      className="h-[60vh] lg:h-[530px] w-full text-white flex relative overflow-hidden"
      style={{
        background:
          "radial-gradient(24.45% 88.58% at 23.57% 2%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)",
        clipPath: " polygon(0 0, 100% 29%, 100% 100%, 0% 100%)",
      }}
    >
      <div className="flex flex-col justify-center max-w-6xl w-full mx-auto px-8 lg:px-0 relative z-10">
        <h1 className="text-3xl lg:text-5xl font-bold tracking-wider">
          Legacy no longer
        </h1>
        <p className="text-xl my-4">
          Talk to us to find out how we can transform your organization for the
          feature
        </p>
        <div>
          <button className="bg-[#FE8B53] rounded pl-10 pr-8 py-3 text-lg font-semibold w-full lg:w-auto inline-flex items-center gap-x-2 justify-center lg:justify-start">
            Contact Us <IoIosArrowForward />
          </button>
        </div>
      </div>
      <LegacySectionSvg />
    </div>
  );
};

export default NoLongerLegacy;
