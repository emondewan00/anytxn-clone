import Count from "../components/Count";
import CountCard from "../components/CountCard";
import FeatureCard from "../components/FeatureCard";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="">
      <section
        style={{
          background:
            "radial-gradient(59.82% 121.73% at -9.66% 130.31%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)",
        }}
      >
        <NavBar />
      </section>

      <Count duration={3000} endNumber={100} startNumber={50} />
      <FeatureCard />
      <CountCard />
    </div>
  );
}
