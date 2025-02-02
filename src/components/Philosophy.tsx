import { InfoCardType, philosophyFeatureData } from "../data";
import SectionHeading from "./SectionHeading";

const InfoCard: React.FC<InfoCardType> = ({
  subTitle,
  title,
  paragraph,
  subTitleColor = "text-blue-500",
  containerStyle = "",
  cardStyle = "",
}) => {
  return (
    <div className={`relative ${containerStyle}`}>
      <div
        className={`shadow-xl shadow-[#D4E8F3] p-4 rounded bg-white ${cardStyle}`}
      >
        <p className={`${subTitleColor} uppercase font-semibold`}>{subTitle}</p>
        <h2 className="text-heading text-2xl font-semibold">{title}</h2>
      </div>
      <p className="text-slate-400 text-sm mt-4 px-4 text-pretty">
        {paragraph}
      </p>
    </div>
  );
};

const Philosophy: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center">
        <SectionHeading
          subTitle="Our Philosophy"
          title="Human-centred Innovation"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 mt-8 h-96 relative">
        <InfoCard {...philosophyFeatureData[0]} />
        <svg
          width="10"
          height="86"
          viewBox="0 0 18 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute rotate-90 top-1/3  left-[32%] "
        >
          <path
            d="M8.69238 0L0.0321289 15L17.3526 15L8.69238 0ZM8.69239 86L17.3526 71L0.0321312 71L8.69239 86ZM7.19238 13.5L7.19239 72.5L10.1924 72.5L10.1924 13.5L7.19238 13.5Z"
            fill="url(#paint0_linear_4250_2332)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_4250_2332"
              x1="-36.8066"
              y1="86"
              x2="-36.8066"
              y2="-4.15596e-07"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3B90F2">
                <animate
                  attributeName="stopColor"
                  values="#3B90F2; #FE8B53; #3B90F2"
                  dur="6s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0; 0.5; 1"
                  keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                />
              </stop>
              <stop offset="1" stopColor="#FE8B53">
                <animate
                  attributeName="stopColor"
                  values="#FE8B53; #3B90F2; #FE8B53"
                  dur="6s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0; 0.5; 1"
                  keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                />
              </stop>
            </linearGradient>
          </defs>
        </svg>

        <div className="rounded-lg shadow-md text-center bg-gradient-to-l from-[#E6F4FF] to-[#F8FCFF] px-4 md:px-10 md:flex w-full col-span-2 gap-x-16 relative ">
          <InfoCard {...philosophyFeatureData[1]} />
          <svg
            width="100"
            height="100"
            viewBox="0 0 117 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -rotate-90 bottom-3/14 left-4/14"
          >
            <path
              d="M8.99991 135L0.339653 120H17.6602L8.99991 135ZM116.014 3.5H37.9999V0.5H116.014V3.5ZM10.4999 31V121.5H7.49991V31H10.4999ZM37.9999 3.5C22.8121 3.5 10.4999 15.8122 10.4999 31H7.49991C7.49991 14.1553 21.1553 0.5 37.9999 0.5V3.5Z"
              fill="url(#paint0_linear_4250_2318)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4250_2318"
                x1="62.5072"
                y1="2"
                x2="62.5072"
                y2="135"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E9EA">
                  <animate
                    attributeName="stopColor"
                    values="#00E9EA; #FE925E; #00E9EA"
                    dur="6s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keyTimes="0; 0.5; 1"
                    keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                  />
                </stop>
                <stop offset="1" stopColor="#FE925E">
                  <animate
                    attributeName="stopColor"
                    values="#FE925E; #00E9EA; #FE925E"
                    dur="6s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keyTimes="0; 0.5; 1"
                    keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                  />
                </stop>
              </linearGradient>
            </defs>
          </svg>

          <svg
            width="100"
            height="100"
            viewBox="0 0 117 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -rotate-90 left-4/14 top-2/12"
          >
            <path
              d="M108 135L116.66 120H99.3398L108 135ZM0.985596 3.5H79.0001V0.5H0.985596V3.5ZM106.5 31V121.5H109.5V31H106.5ZM79.0001 3.5C94.1879 3.5 106.5 15.8122 106.5 31H109.5C109.5 14.1553 95.8447 0.5 79.0001 0.5V3.5Z"
              fill="url(#paint0_linear_4250_2317)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4250_2317"
                x1="54.4928"
                y1="2"
                x2="54.4928"
                y2="135"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FBBC05">
                  <animate
                    attributeName="stopColor"
                    values="#FBBC05; #FE925E; #FBBC05"
                    dur="6s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keyTimes="0; 0.5; 1"
                    keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                  />
                </stop>
                <stop offset="1" stopColor="#FE925E">
                  <animate
                    attributeName="stopColor"
                    values="#FE925E; #FBBC05; #FE925E"
                    dur="6s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keyTimes="0; 0.5; 1"
                    keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                  />
                </stop>
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-2 gap-x-4 lg:gap-x-0 md:flex md:flex-col justify-around ">
            <InfoCard {...philosophyFeatureData[2]} />
            <svg
              width="94"
              height="12"
              viewBox="0 0 94 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute rotate-90 translate-x-20"
            >
              <path
                d="M0 9L15 17.6603V0.339746L0 9ZM94 9L79 0.339746V17.6603L94 9ZM13.5 10.5H80.5V7.5H13.5V10.5Z"
                fill="url(#paint0_linear_4250_2331)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4250_2331"
                  x1="94"
                  y1="54.4989"
                  x2="-2.83255e-06"
                  y2="54.4989"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00E9EA">
                    <animate
                      attributeName="stopColor"
                      values="#00E9EA; #FBBC05; #00E9EA"
                      dur="6s"
                      repeatCount="indefinite"
                      calcMode="spline"
                      keyTimes="0; 0.5; 1"
                      keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                    />
                  </stop>
                  <stop offset="1" stopColor="#FBBC05">
                    <animate
                      attributeName="stopColor"
                      values="#FBBC05; #00E9EA; #FBBC05"
                      dur="6s"
                      repeatCount="indefinite"
                      calcMode="spline"
                      keyTimes="0; 0.5; 1"
                      keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                    />
                  </stop>
                </linearGradient>
              </defs>
            </svg>

            <InfoCard {...philosophyFeatureData[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
