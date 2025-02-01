import Banner from "../components/Banner";
import CountCard from "../components/CountCard";
import FeatureCard from "../components/FeatureCard";
import FinancialTechInnovation from "../components/FinancialTechInnovation";
import Philosophy from "../components/Philosophy";
import featureData from "../data/features";

export default function Home() {
  return (
    <main className="pb-32 bg-white">
      <Banner />
      <FinancialTechInnovation />
      <Philosophy />
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-x-6 max-w-6xl mx-auto my-10">
        {featureData.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
      <CountCard />
    </main>
  );
}
