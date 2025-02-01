import Image from "next/image";
import Banner from "../components/Banner";
import CountCard from "../components/CountCard";
import FeatureCard from "../components/FeatureCard";
import FinancialTechInnovation from "../components/FinancialTechInnovation";
import FutureFinance from "../components/FutureFinance";
import Philosophy from "../components/Philosophy";
import { featureData, ourUsers } from "../data";
import { IoIosArrowForward } from "react-icons/io";
import logo from "@/public/logo.svg";

export default function Home() {
  return (
    <main className=" bg-white">
      <Banner />
      <FinancialTechInnovation />
      <Philosophy />
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-x-6 max-w-6xl mx-auto my-10">
        {featureData.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
      <FutureFinance />
      <CountCard />
      <div className="grid md:grid-cols-3 lg:grid-cols-5 relative max-w-6xl mx-auto items-center">
        {ourUsers.map((user) => (
          <Image
            src={user.img}
            className=" w-8/10"
            width={150}
            height={120}
            alt="user image "
            key={user.id}
          />
        ))}
      </div>

      <div
        className="h-[60vh] lg:h-[530px] w-full text-white flex "
        style={{
          background:
            "radial-gradient(24.45% 88.58% at 23.57% 2%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)",
          clipPath: " polygon(0 0, 100% 29%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="flex flex-col justify-center max-w-6xl w-full mx-auto px-8 lg:px-0">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-wider">
            Legacy no longer
          </h1>
          <p className="text-xl my-4">
            Talk to us to find out how we can transform your organization for
            the feature
          </p>
          <div>
            <button className="bg-[#FE8B53] rounded pl-10 pr-8 py-3 text-lg font-semibold w-full lg:w-auto inline-flex items-center gap-x-2 justify-center lg:justify-start">
              Contact Us <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>

      <section className="bg-[#002045] py-12 ">
        <div className="max-w-6xl mx-auto flex justify-between">
          <Image src={logo} alt="logo" />
          <div className="flex text-[#00E9EA] items-center">
            <p className="font-semibold text-lg pr-4 border-r py-4">
              Our Solutions
            </p>
            <ul className="flex gap-x-4 ml-4 font-medium">
              <li>AnyCaaS</li>
              <li>AnyBaaS</li>
              <li>AnyPaaS</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="border-b border-blue-800"></div>
      <footer className="bg-[#00152D] py-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-y-2 lg:gap-y-0 lg:flex-row lg:justify-between text-blue-600">
          <p className=" text-sm">
            <span className="font-bold">
              &copy; {new Date().getFullYear()} All rights reserved.
            </span>
            Any Technology Pte Ltd.
          </p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </main>
  );
}
