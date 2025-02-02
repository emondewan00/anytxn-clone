import Banner from "../components/Banner";
import CountCard from "../components/CountCard";
import FinancialTechInnovation from "../components/FinancialTechInnovation";
import FutureFinance from "../components/FutureFinance";
import Philosophy from "../components/Philosophy";
import NoLongerLegacy from "../components/NoLongerLegacy";
import UserIcons from "../components/UserIcons";
import UserIconsSlider from "../components/UserIconsSlider";
import AntechSolutions from "../components/AntechSolutions";
import Footer from "../components/Footer";
import FeatureSlider from "../components/FeatureSlider";

export default function Home() {
  return (
    <main className=" bg-white">
      <Banner />
      <FinancialTechInnovation />
      <Philosophy />
      <FeatureSlider />
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
