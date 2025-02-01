const SectionHeading = ({
  title,
  subTitle,
  styleTitle,
  styleSubtitle,
}: {
  title: string;
  subTitle: string;
  styleTitle?: string;
  styleSubtitle?: string;
}) => {
  return (
    <>
      <h4
        className={`text-blue-600 font-semibold uppercase tracking-wide ${styleSubtitle}`}
      >
        {subTitle}
      </h4>
      <h1
        className={`text-3xl lg:text-6xl font-semibold mt-4 text-heading text-pretty ${styleTitle}`}
      >
        {title}
      </h1>
    </>
  );
};

export default SectionHeading;
