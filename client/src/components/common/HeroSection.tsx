import { MdOutlineFileDownload } from "react-icons/md";

const HeroSection = () => {
  return (
    <>
      <div className="w-full h-auto p-0 flex flex-col gap-[20px] sm:gap-[30px] sm:place-content-center sm:pt-[30px]">
        <h1 className="text-[white] font-extrabold text-[26px] sm:text-[56px] md:text-start lg:text-center">
          IMAGINE A PLACE...
        </h1>
        <p className="text-white text-[15px] sm:text-[20px] leading-6 lg:text-center md:text-start font-light sm:leading-10">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community.<br className="hidden sm:flex"></br> Where
          just you and a handful of friends can spend time together. A place
          that makes it easy<br className="hidden sm:flex"></br> to talk every
          day and hang out more often.
        </p>
        <div className="w-full items-start justify-start flex flex-col gap-[20px] z-[20]">
          <div className="w-[80%] sm:w-full h-auto flex place-content-center gap-[24px] flex-col sm:flex-row">
            <div className="w-auto h-[50px] p-6 sm:p-8 bg-[white] items-center justify-center flex rounded-[99em] cursor-pointer flex-row gap-[10px] place-content-center">
              <span className="">
                <MdOutlineFileDownload className="w-[25px] h-[25px] fill-black" />
              </span>
              <p className={`text-[black] capitalize font-[800] text-[14px]`}>
                Download for Windows
              </p>
            </div>
            <div className="w-auto h-[50px] p-6 sm:p-8 bg-[#2C2F33] items-center justify-center flex rounded-[99em] cursor-pointer flex-row gap-[10px] place-content-center">
              <p className={`text-[white] capitalize font-[800] text-[14px]`}>
                Open Discord in your browser
              </p>
            </div>
          </div>
          <div className="mt-0 sm:mt-[-20px] ml-0 sm:ml-[-100px] z-[10] flex items-start sm:justify-between sm:p-0">
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/644fab4df2dc8d7a9a081ebd_8a8375ab7908384e1fd6efe408284203.svg"
              loading="lazy"
              alt=""
              className="h-[90%] w-[100%] sm:w-[100%]"
            ></img>
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/644fab4db9ca0a124b73d4b7_c40c84ca18d84633a9d86b4046a91437.svg"
              loading="lazy"
              alt=""
              className="h-[80%] w-[80%] sm:w-[100%] hidden sm:flex"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
