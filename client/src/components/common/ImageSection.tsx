type Props = {
  imgSrc: string;
};

const ImageSection = ({ imgSrc }: Props) => {
  return (
    <>
      <div className="lg:w-[50%] md:w-[50%] h-[100%]">
        <img
          src={imgSrc}
          loading="lazy"
          alt="Create an invite-only place where you belong"
          className=""
        ></img>
      </div>
    </>
  );
};

export default ImageSection;
