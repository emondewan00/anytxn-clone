import SectionHeading from "./SectionHeading";
import TechPerson from "./TechPerson";
const FinancialTechInnovation = () => {
  return (
    <section className="grid md:grid-cols-2 items-center gap-8  py-12 max-w-[480px] md:max-w-6xl mx-auto">
      {/* Left Text Content */}
      <div className="px-4 lg:px-0  text-center lg:text-left">
        <SectionHeading
          subTitle="Powering the Future of Finance"
          title="Uncovering new ways to delight customers"
        />
        <TechPerson containerStyle="block md:hidden my-7" />
        <p className="text-heading mt-6 font-semibold">
          AnyTech is revolutionizing financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className="text-gray-600 mt-4">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="hidden md:block w-3/4 lg:w-8/10 relative mx-auto">
        <TechPerson />
      </div>
    </section>
  );
};

export default FinancialTechInnovation;
