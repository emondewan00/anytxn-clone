const SectionHeading = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <>
      <h4 className="text-blue-600 font-semibold uppercase tracking-wide">
        {subTitle}
      </h4>
      <h1 className="text-3xl lg:text-6xl font-semibold mt-4 text-heading text-pretty">
        {title}
      </h1>
    </>
  );
};

export default SectionHeading;
