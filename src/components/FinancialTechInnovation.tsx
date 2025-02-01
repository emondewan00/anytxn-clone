import Image from "next/image";
import girlWithTab from "@/public/girl-with-tab.jpg";

const FinancialTechInnovation = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-8  py-12 max-w-6xl mx-auto">
      {/* Left Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h4 className="text-blue-600 font-semibold uppercase tracking-wide">
          Powering the Future of Finance
        </h4>
        <h1 className="text-6xl font-semibold mt-4 text-heading">
          Uncovering new ways to delight customers
        </h1>
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
      <div className="lg:w-1/2 relative">
        <div className="relative">
          <Image
            src={girlWithTab}
            alt="girl with tab"
            className="shadow-lg  w-[80%] object-cover"
          />
          {/* Floating Icons */}
          {/*credit card svg  */}
          <div className="absolute top-20 -left-7 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 74 75"
              height="75"
              width="74"
            >
              <circle
                fill="url(#paint0_linear_6332_13565)"
                r="36.6025"
                cy="37.5774"
                cx="37"
              ></circle>
              <circle fill="white" r="26.51" cy="38.2482" cx="36.9189"></circle>
              <path
                fill="black"
                d="M25.3214 27.4286C23.4964 27.4286 22 28.925 22 30.75V46.25C22 48.0664 23.4964 49.5714 25.3214 49.5714H49.6786C51.5036 49.5714 53 48.0751 53 46.25V30.75C53 28.925 51.495 27.4286 49.6786 27.4286H25.3214ZM25.3214 29.6429H49.6786C50.3013 29.6429 50.7857 30.1272 50.7857 30.75V46.25C50.7857 46.8728 50.3013 47.3572 49.6786 47.3572H25.3214C24.6987 47.3572 24.2143 46.8728 24.2143 46.25V30.75C24.2143 30.1186 24.69 29.6429 25.3214 29.6429ZM26.4286 34.0714V38.5H33.0714V34.0714H26.4286ZM35.2857 36.2857V38.5H48.5714V36.2857H35.2857ZM26.4286 42.9286V45.1429H28.6429V42.9286H26.4286ZM30.8571 42.9286V45.1429H35.2857V42.9286H30.8571ZM37.5 42.9286V45.1429H41.9286V42.9286H37.5ZM44.1429 42.9286V45.1429H48.5714V42.9286H44.1429Z"
              ></path>
              <path
                fill="url(#paint1_linear_6332_13565)"
                d="M25.3214 27.4286C23.4964 27.4286 22 28.925 22 30.75V46.25C22 48.0664 23.4964 49.5714 25.3214 49.5714H49.6786C51.5036 49.5714 53 48.0751 53 46.25V30.75C53 28.925 51.495 27.4286 49.6786 27.4286H25.3214ZM25.3214 29.6429H49.6786C50.3013 29.6429 50.7857 30.1272 50.7857 30.75V46.25C50.7857 46.8728 50.3013 47.3572 49.6786 47.3572H25.3214C24.6987 47.3572 24.2143 46.8728 24.2143 46.25V30.75C24.2143 30.1186 24.69 29.6429 25.3214 29.6429ZM26.4286 34.0714V38.5H33.0714V34.0714H26.4286ZM35.2857 36.2857V38.5H48.5714V36.2857H35.2857ZM26.4286 42.9286V45.1429H28.6429V42.9286H26.4286ZM30.8571 42.9286V45.1429H35.2857V42.9286H30.8571ZM37.5 42.9286V45.1429H41.9286V42.9286H37.5ZM44.1429 42.9286V45.1429H48.5714V42.9286H44.1429Z"
              ></path>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  y2="69"
                  x2="74"
                  y1="0.999999"
                  x1="32.5"
                  id="paint0_linear_6332_13565"
                >
                  <stop stopColor="#1F80F0"></stop>
                  <stop stopOpacity="0" stopColor="#FE8B53" offset="1"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  y2="52.0201"
                  x2="42.6046"
                  y1="26.9857"
                  x1="33.5143"
                  id="paint1_linear_6332_13565"
                >
                  <stop stopColor="#1F80F0"></stop>
                  <stop stopColor="#FE8B53" offset="1"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* growth svg */}
          <div className="absolute top-56 left-8 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 89 88"
              height="88"
              width="89"
            >
              <ellipse
                fill="url(#paint0_linear_6332_13566)"
                transform="rotate(90 44.5 44.0929)"
                ry="43.923"
                rx="43.557"
                cy="44.0929"
                cx="44.5"
              ></ellipse>
              <ellipse
                fill="white"
                ry="31.812"
                rx="31.5469"
                cy="43.812"
                cx="44.4036"
              ></ellipse>
              <path
                fill="black"
                d="M59.0334 27L51.2088 34.8387L43.1004 32.1204L35.0445 40.8651L26.9886 37.7887L26.0316 40.3067L35.8017 44.0259L43.8996 35.239L51.945 37.9151L60.9474 28.8964L59.0334 27ZM42.1538 43.817V60H44.8462V43.817H42.1538ZM58.3077 43.817V60H61V43.817H58.3077ZM36.7692 46.5142V60H39.4615V46.5142H36.7692ZM47.5385 46.5142V60H50.2308V46.5142H47.5385ZM26 49.2114V60H28.6923V49.2114H26ZM31.3846 49.2114V60H34.0769V49.2114H31.3846ZM52.9231 49.2114V60H55.6154V49.2114H52.9231Z"
              ></path>
              <path
                fill="url(#paint1_linear_6332_13566)"
                d="M59.0334 27L51.2088 34.8387L43.1004 32.1204L35.0445 40.8651L26.9886 37.7887L26.0316 40.3067L35.8017 44.0259L43.8996 35.239L51.945 37.9151L60.9474 28.8964L59.0334 27ZM42.1538 43.817V60H44.8462V43.817H42.1538ZM58.3077 43.817V60H61V43.817H58.3077ZM36.7692 46.5142V60H39.4615V46.5142H36.7692ZM47.5385 46.5142V60H50.2308V46.5142H47.5385ZM26 49.2114V60H28.6923V49.2114H26ZM31.3846 49.2114V60H34.0769V49.2114H31.3846ZM52.9231 49.2114V60H55.6154V49.2114H52.9231Z"
              ></path>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  y2="34.568"
                  x2="85.9511"
                  y1="41.093"
                  x1="15.4071"
                  id="paint0_linear_6332_13566"
                >
                  <stop stopColor="#1F80F0"></stop>
                  <stop stopOpacity="0" stopColor="#00E9EA" offset="1"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  y2="81.6327"
                  x2="59.0862"
                  y1="36"
                  x1="44"
                  id="paint1_linear_6332_13566"
                >
                  <stop stopColor="#1F80F0"></stop>
                  <stop stopColor="#00E9EA" offset="1"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* bank */}
          <div className="absolute top-28 right-16 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 116 115"
              height="115"
              width="116"
            >
              <ellipse
                style={{ mixBlendMode: "multiply" }}
                fill="url(#paint0_linear_6332_13567)"
                transform="matrix(1 0 0.00553366 0.999985 0 0)"
                ry="57.3747"
                rx="57.1917"
                cy="57.3747"
                cx="57.1917"
              ></ellipse>
              <ellipse
                fill="url(#paint1_linear_6332_13567)"
                transform="matrix(1 0 0.00553366 0.999985 0 0)"
                ry="57.3747"
                rx="57.1917"
                cy="57.3747"
                cx="57.1917"
              ></ellipse>
              <ellipse
                fill="white"
                ry="41.6207"
                rx="41.3556"
                cy="54.6234"
                cx="57.3827"
              ></ellipse>
              <path
                fill="url(#paint2_linear_6332_13567)"
                d="M55.4759 27.8738L34.4071 38.4739C33.1554 39.1039 32.5093 40.3881 32.5093 41.704V45.8649H36.0426V67.2041H32.5093V70.7607H53.7093V72.539C53.7093 75.4643 56.103 77.8738 59.0093 77.8738H80.2093C83.1156 77.8738 85.5093 75.4643 85.5093 72.539V58.3128C85.5093 55.3874 83.1156 52.978 80.2093 52.978H74.9093V45.8649H78.4426V44.0866V41.704C78.4426 40.3881 77.7965 39.1039 76.5448 38.4739L55.4759 27.8738ZM55.4759 31.8471L74.8886 41.6207C74.8935 41.6304 74.9093 41.6546 74.9093 41.704V42.3083H36.0426V41.704C36.0426 41.6546 36.0583 41.6235 36.0633 41.6137L55.4759 31.8471ZM55.4759 35.1953C55.0074 35.1953 54.558 35.3826 54.2267 35.7161C53.8954 36.0496 53.7093 36.5019 53.7093 36.9735C53.7093 37.4452 53.8954 37.8975 54.2267 38.231C54.558 38.5644 55.0074 38.7518 55.4759 38.7518C55.9445 38.7518 56.3939 38.5644 56.7252 38.231C57.0565 37.8975 57.2426 37.4452 57.2426 36.9735C57.2426 36.5019 57.0565 36.0496 56.7252 35.7161C56.3939 35.3826 55.9445 35.1953 55.4759 35.1953ZM39.5759 45.8649H43.1093V67.2041H39.5759V45.8649ZM46.6426 45.8649H64.3093V52.978H59.0093C56.103 52.978 53.7093 55.3874 53.7093 58.3128V67.2041H46.6426V45.8649ZM67.8426 45.8649H71.3759V52.978H67.8426V45.8649ZM59.0093 56.5345H80.2093C81.2038 56.5345 81.9759 57.3117 81.9759 58.3128V72.539C81.9759 73.54 81.2038 74.3172 80.2093 74.3172H59.0093C58.0148 74.3172 57.2426 73.54 57.2426 72.539V58.3128C57.2426 57.3117 58.0148 56.5345 59.0093 56.5345ZM71.3759 60.0911V63.6476H78.4426V60.0911H71.3759ZM60.7759 67.2041V70.7607H64.3093V67.2041H60.7759ZM67.8426 67.2041V70.7607H71.3759V67.2041H67.8426ZM74.9093 67.2041V70.7607H78.4426V67.2041H74.9093Z"
              ></path>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  y2="190.406"
                  x2="57.1917"
                  y1="0"
                  x1="57.1917"
                  id="paint0_linear_6332_13567"
                >
                  <stop stopColor="#F0FAFF"></stop>
                  <stop stopOpacity="0" stopColor="#F0FAFF" offset="1"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  y2="118.951"
                  x2="64.6714"
                  y1="19.6996"
                  x1="13.4075"
                  id="paint1_linear_6332_13567"
                >
                  <stop stopColor="#1F80F0"></stop>
                  <stop stopOpacity="0" stopColor="#9747FF" offset="1"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  y2="87.7504"
                  x2="69.1043"
                  y1="29.8738"
                  x1="48.0093"
                  id="paint2_linear_6332_13567"
                >
                  <stop stopColor="#1F80F0"></stop>
                  <stop stopColor="#9747FF" offset="1"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialTechInnovation;
