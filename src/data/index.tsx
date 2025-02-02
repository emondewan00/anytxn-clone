import { FaMicrochip } from "react-icons/fa6";
import { FaLightbulb, FaShareAlt } from "react-icons/fa";

type UserType = {
  id: number;
  img: string;
};
type FeatureType = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

type SubmenuItem = {
  id: number;
  name: string;
  path: string;
  icon: string;
};

type Route = {
  id: number;
  name: string;
  path: string;
  icon: string;
  submenu?: SubmenuItem[];
};

type SlideType = {
  id: number;
  title: string;
  subTitle: string;
  paragraphOne: string;
  paragraphTwo: string;
  img: string;
};

type CountType = {
  duration: number; // duration of the animation in milliseconds
  delay?: number; // delay in milliseconds
  startNumber?: number;
  endNumber: number;
};

type CountCardType = {
  id: number;
  suffix?: string;
  prefix?: string;
  details: string;
  count: CountType;
};

interface InfoCardType {
  subTitle: string;
  title: string;
  paragraph: string;
  subTitleColor?: string;
  containerStyle?: string;
  cardStyle?: string;
}

const ourUsers: UserType[] = [
  {
    id: 1,
    img: "https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=320&fm=webp",
  },
  {
    id: 2,
    img: "https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=320&fm=webp",
  },
  {
    id: 3,
    img: "https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=320&fm=webp",
  },
  {
    id: 4,
    img: "https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=320&fm=webp",
  },
  {
    id: 5,
    img: "https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=320&fm=webp",
  },
  {
    id: 6,
    img: "https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=320&fm=webp",
  },
  {
    id: 7,
    img: "https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=320&fm=webp",
  },
  {
    id: 9,
    img: "https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=320&fm=webp",
  },
  {
    id: 10,
    img: "https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=320&fm=webp",
  },
  {
    id: 11,
    img: "https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320&fm=webp",
  },
  {
    id: 12,
    img: "https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg?w=318&fm=webp",
  },
  {
    id: 13,
    img: "https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=320&fm=webp",
  },
  {
    id: 14,
    img: "https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=320&fm=webp",
  },
  {
    id: 15,
    img: "https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=320&fm=webp",
  },
  {
    id: 16,
    img: "https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=320&fm=webp",
  },
];

const featureData: FeatureType[] = [
  {
    id: 1,
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    icon: <FaShareAlt />,
    color: "#E9F3FF",
  },
  {
    id: 2,
    title: "Simplify the complex",
    description:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
    icon: <FaLightbulb />,
    color: "#D7F7F9",
  },
  {
    id: 3,
    title: "Cutting-edge tech",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
    icon: <FaMicrochip />,
    color: "#FFE2D5",
  },
];

const routes: Route[] = [
  {
    id: 1,
    name: "Solutions",
    path: "/solutions",
    icon: "",
    submenu: [
      {
        id: 1,
        name: "abc",
        path: "/abc",
        icon: "",
      },
      {
        id: 2,
        name: "xyz",
        path: "/xyz",
        icon: "",
      },
      {
        id: 3,
        name: "xyz",
        path: "/xyz",
        icon: "",
      },
    ],
  },
  {
    id: 2,
    name: "Services",
    path: "/services",
    icon: "",
  },
  {
    id: 3,
    name: "About Us",
    path: "/about-us",
    icon: "",
  },
];

const slidData: SlideType[] = [
  {
    id: 1,
    title: "Purpose-built financial services",
    subTitle: "customer focused",
    paragraphOne:
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system. ",
    paragraphTwo:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    img: "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=960&auto=format",
  },
  {
    id: 2,
    title: "Agile and adaptable for growth",
    subTitle: "Agile and adaptable",
    paragraphOne:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance. ",
    paragraphTwo:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    img: "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=960&auto=format",
  },
  {
    id: 3,
    title: "Manage compliance with ease ",
    subTitle: "compliance ready",
    paragraphOne:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management-through real-time risk monitoring solutions powered by Al and machine learning. ",
    paragraphTwo:
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    img: "https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=960&auto=format",
  },
  {
    id: 4,
    title: "Highly secure and safe",
    subTitle: "secure and safe",
    paragraphOne:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise. ",
    paragraphTwo:
      "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    img: "https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=960&auto=format",
  },
];

const countCards: CountCardType[] = [
  {
    id: 1,
    prefix: ">",
    details: "Years of Experience",
    count: { endNumber: 20, duration: 1000 },
  },
  {
    id: 2,
    suffix: "+",
    details: "Financial Institutes",
    count: { endNumber: 100, duration: 1000 },
  },
  {
    id: 3,
    prefix: ">",
    suffix: "m",
    details: "Customers Each",
    count: { endNumber: 200, duration: 1000 },
  },
];

const philosophyFeatureData: InfoCardType[] = [
  {
    subTitle: "core tech",
    title: "Artificial Intelligence",
    paragraph:
      "Using AI/ML to upgrade legacy processes, reduce cost, and improve efficiency.",
    subTitleColor: "text-blue-500",
    containerStyle:
      "flex items-center justify-center px-4 md:px-10 flex-col mx-auto bg-gradient-to-br from-[#E6F4FF] to-[#F8FCFF] rounded-lg shadow-md text-center",
  },
  {
    subTitle: "mechanism",
    title: "blockchain",
    paragraph: "Enhanced security by eliminating intermediaries.",
    subTitleColor: "text-[#F5956B]",
    containerStyle:
      "flex flex-col items-center justify-center mb-10 lg:mb-0 text-left relative z-10",
    cardStyle: "mechanism w-full text-center",
  },
  {
    subTitle: "infrastructure",
    title: "Cloud",
    paragraph: "Scale Resources easily on-demand.",
    subTitleColor: "text-[#38C4CB]",
    containerStyle: "md:flex items-center",
    cardStyle: "w-full lg:min-w-56",
  },
  {
    subTitle: "resource",
    title: "data",
    paragraph: "Valuable, actionable insights from mass data sources",
    subTitleColor: "text-[#F6D466]",
    containerStyle: "md:flex items-center text-left",
    cardStyle: "w-full! lg:min-w-56 text-center",
  },
];

export {
  type UserType,
  ourUsers,
  type FeatureType,
  featureData,
  type Route,
  routes,
  type SlideType,
  slidData,
  type CountType,
  countCards,
  type CountCardType,
  type InfoCardType,
  philosophyFeatureData,
};
