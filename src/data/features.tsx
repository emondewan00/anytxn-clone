import { FaMicrochip } from "react-icons/fa6";
import { FaLightbulb, FaShareAlt } from "react-icons/fa";

export type FeatureType = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

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

export default featureData;
