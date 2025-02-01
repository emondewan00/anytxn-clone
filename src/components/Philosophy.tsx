import SectionHeading from "./SectionHeading";

const FeatureCard = ({
  subTitle,
  title,
  paragraph,
  subTitleColor,
  containerStyle,
  cardStyle,
}: {
  subTitle: string;
  title: string;
  paragraph: string;
  subTitleColor: string;
  containerStyle?: string;
  cardStyle?: string;
}) => {
  return (
    <div className={`relative ${containerStyle}`}>
      <div
        className={`shadow-xl shadow-[#D4E8F3] p-4 rounded bg-white ${cardStyle}`}
      >
        <p
          className={`${
            subTitleColor ? subTitleColor : "text-blue-500"
          } uppercase font-semibold`}
        >
          {subTitle}
        </p>
        <h2 className="text-heading text-2xl font-semibold">{title}</h2>
      </div>
      <p className="text-slate-400 text-sm mt-4 px-4 text-pretty">
        {paragraph}
      </p>
    </div>
  );
};

const Philosophy = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center">
        <SectionHeading
          subTitle=" our Philosophy"
          title=" Human-centred innovation"
        />
      </div>
      <div
        className=" gap-x-20 grid grid-cols-1
        md:grid-cols-3 mt-8 h-96"
      >
        <div className=" rounded-lg shadow-md text-black text-center bg-gradient-to-br from-[#E6F4FF] to-[#F8FCFF] flex items-center justify-center px-10 flex-col ">
          <FeatureCard
            subTitle="core tech"
            title="Artificial Intelligence"
            paragraph="Using AI/ML to upgrade legacy processes,reduce cost,and improve efficiency."
            subTitleColor="text-blue-500"
          />
        </div>
        <div className="rounded-lg shadow-md text-black text-center  bg-gradient-to-l from-[#E6F4FF] to-[#F8FCFF] px-10 flex w-full col-span-2 gap-x-16">
          <div className="flex items-center flex-col justify-center ">
            <FeatureCard
              subTitle="mechanism"
              title="blockchain"
              paragraph="Enhanced security by eliminating intermediaries."
              subTitleColor="text-[#F5956B]"
              cardStyle="mechanism"
            />
          </div>
          <div className="flex flex-col justify-around ">
            <FeatureCard
              subTitle="infrastructure"
              title="Cloud"
              paragraph="Scale Resources easily on-demand."
              subTitleColor="text-[#38C4CB]"
              containerStyle="flex items-center"
              cardStyle="min-w-56 "
            />
            <FeatureCard
              subTitle="resource"
              title="data"
              paragraph="Valuable,actionable insights from mass data sources"
              subTitleColor="text-[#F6D466]"
              containerStyle="flex items-center"
              cardStyle="min-w-56 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
