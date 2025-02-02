import Image from "next/image";
import Banner from "../components/Banner";
import CountCard from "../components/CountCard";
import FeatureCard from "../components/FeatureCard";
import FinancialTechInnovation from "../components/FinancialTechInnovation";
import FutureFinance from "../components/FutureFinance";
import Philosophy from "../components/Philosophy";
import { featureData } from "../data";
import logo from "@/public/logo.svg";
import NoLongerLegacy from "../components/NoLongerLegacy";
import UserIcons from "../components/UserIcons";
import UserIconsSlider from "../components/UserIconsSlider";

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
      <div>
        <UserIcons />
        <UserIconsSlider />
      </div>

      <NoLongerLegacy />

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
