import Image from "next/image";
import Count from "../components/Count";
import CountCard from "../components/CountCard";
import FeatureCard from "../components/FeatureCard";
import NavBar from "../components/NavBar";
import hero from "@/public/backgrounds/hero.jpg";

export default function Home() {
  return (
    <main>
      <section
        style={{
          background:
            "radial-gradient(59.82% 121.73% at -9.66% 130.31%, #00e9ea 0%, #1f80f0 52.08%, #005bc4 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 81%, 0% 100%)",
        }}
        className="h-[85vh] flex flex-col relative"
      >
        <NavBar />

        <div className="flex-grow flex items-center justify-between max-w-6xl w-full mx-auto relative z-10">
          <div className="text-white w-[60%]">
            <h1 className="text-7xl font-semibold text-balance tracking-wide leading-[100%]">
              Embrace the future of finance
            </h1>
            <p className="text-lg font-medium my-8">
              Reimagine financial services with AnyTech’s open platform,
              distributed banking solution that powers transformation
            </p>
            <button className="bg-[#FE8B53] rounded px-6 py-3 text-lg font-semibold">
              Reach Out to Us
            </button>
          </div>
        </div>

        <div
          className=" absolute right-0 top-0 w-[60%] h-full "
          style={{
            clipPath:
              "polygon(67% 0, 100% 0, 100% 68%, 80% 100%, 0 100%, 32% 51%)",
          }}
        >
          <Image className="object-cover h-full" src={hero} alt="" />
        </div>
        <div
          className="absolute right-0 top-0 w-full h-full"
          style={{
            background:
              "linear-gradient(190deg, #1f80f0 15.05%, rgba(31, 128, 240, 0) 30.39%)",
          }}
        ></div>
      </section>
    </main>
  );
}
