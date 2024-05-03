type Props = {
  title: string;
  description: string;
};

const DescriptionSection = ({ title, description }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-[20px] p-4 lg:p-6 lg:w-[35%] md:w-[35%] lg:place-content-center">
        <h1 className="text-[19px] lg:text-[48px] font-bold text-[black] lg:leading-10 md:leading-12">
          {title}
        </h1>
        <p className="text-[#373737] text-[15px] lg:text-[20px]">
          {description}
        </p>
      </div>
    </>
  );
};

export default DescriptionSection;
