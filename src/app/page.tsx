import Banner from "../components/Banner";
import CountCard from "../components/CountCard";
import FeatureCard from "../components/FeatureCard";
import FinancialTechInnovation from "../components/FinancialTechInnovation";
import FutureFinance from "../components/FutureFinance";
import Philosophy from "../components/Philosophy";
import { featureData } from "../data";
import NoLongerLegacy from "../components/NoLongerLegacy";
import UserIcons from "../components/UserIcons";
import UserIconsSlider from "../components/UserIconsSlider";
import AntechSolutions from "../components/AntechSolutions";
import Footer from "../components/Footer";

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

      <AntechSolutions />
      <div className="border-b border-blue-800"></div>
      <Footer />
    </main>
  );
}
