import icon from "@/public/icons/ChevronRight.svg";
import Image from "next/image";

const FeatureCard = () => {
  return (
    <div className="bg-[#F8FCFF] p-8 rounded-[20px] max-w-96">
      <Image src={icon} width={32} height={32} alt="icon" />
      <h4 className="text-lg mt-6">Feature Title</h4>
      <p className="mt-6 text-[#164377] text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        quidem rerum rem neque culpa obcaecati iusto, eaque tempora quas
        reprehenderit.
      </p>
    </div>
  );
};

export default FeatureCard;
