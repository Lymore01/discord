import { MdOutlineFileDownload } from "react-icons/md";

const HeroSection = () => {
  return (
    <>
      <div className="w-full h-auto p-0 flex flex-col gap-[20px]">
        <h1 className="text-[white] font-extrabold text-[26px]">
          IMAGINE A PLACE...
        </h1>
        <p className="text-white text-[15px] leading-6">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="w-full items-start justify-start flex flex-col gap-[20px] z-[20]">
          <div className="w-auto h-[50px] p-6 bg-[white] items-center justify-center flex rounded-[99em] cursor-pointer flex-row gap-[10px] place-content-center">
            <span className="">
              <MdOutlineFileDownload className="w-[25px] h-[25px] fill-black" />
            </span>
            <p className={`text-[black] capitalize font-[800] text-[14px]`}>
              Download for Windows
            </p>
          </div>
          <div className="w-auto h-[50px] p-6 bg-[#2C2F33] items-center justify-center flex rounded-[99em] cursor-pointer flex-row gap-[10px] place-content-center">
            <p className={`text-[white] capitalize font-[800] text-[14px]`}>
              Open Discord in your browser
            </p>
          </div>
          <div className="mt-[-20px] ml-[-100px] z-[10] flex items-start">
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/644fab4df2dc8d7a9a081ebd_8a8375ab7908384e1fd6efe408284203.svg"
              loading="lazy"
              alt=""
              className="h-[80%] w-[80%]"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
