import { MdOutlineFileDownload } from "react-icons/md";

const Content = () => {
  return (
    <>
      <div className="w-full flex mt-[50px] bg-white flex-col p-4 lg:flex-row lg:w-[100%] lg:gap-[50px] lg:pt-20 lg:pb-20">
        <div className="lg:w-[50%] h-[100%]">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c18a9cff186bd3731704_Create%20an%20invite-only%20place%20where%20you%20belong.svg"
            loading="lazy"
            alt="Create an invite-only place where you belong"
            className=""
          ></img>
        </div>
        <div className="flex flex-col gap-[20px] p-4 lg:p-6 lg:w-[35%] lg:place-content-center">
          <h1 className="text-[19px] lg:text-[48px] font-bold text-[black] lg:leading-10">
            Create an invite-only place where you belong
          </h1>
          <p className="text-[#373737] text-[15px] lg:text-[20px]">
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </div>
      </div>

      <div className="w-full flex mt-[50px] bg-white lg:bg-[whitesmoke] flex-col p-4 lg:flex-row lg:w-[100%] lg:gap-[50px] lg:pt-20 lg:pb-20">
        <div className="flex flex-col gap-[20px] p-4 lg:p-6 lg:w-[35%] lg:place-content-center">
          <h1 className="text-[19px] lg:text-[48px] font-bold text-[black] lg:leading-10">
            Where hanging out is easy
          </h1>
          <p className="text-[#373737] text-[15px] lg:text-[20px]">
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </p>
        </div>
        <div className="lg:w-[50%] h-[100%]">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c1b717efff2306ef179e_Where%20hanging%20out%20is%20easy.svg"
            loading="lazy"
            alt="Where hanging out is easy"
          ></img>
        </div>
      </div>

      <div className="w-full flex mt-[50px] bg-white flex-col p-4 lg:flex-row lg:w-[100%] lg:gap-[50px] lg:pt-20 lg:pb-20">
        <div className="lg:w-[50%] h-[100%]">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c1d8348e5c81ca608138_From%20few%20to%20a%20fandom.svg"
            loading="lazy"
            alt="From few to a fandom"
          ></img>
        </div>
        <div className="flex flex-col gap-[20px] p-4 lg:p-6 lg:w-[35%] lg:place-content-center">
          <h1 className="text-[19px] lg:text-[48px] font-bold text-[black] lg:leading-10">
            From few to a fandom
          </h1>
          <p className="text-[#373737] text-[15px] lg:text-[20px]">
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </p>
        </div>
      </div>

      <div className="w-full flex mt-[50px] bg-[whitesmoke] flex-col p-4 lg:pt-20 lg:pb-20">
        <div className="flex flex-col gap-[20px] p-4">
          <h1 className="text-[22px] lg:text-[40px] font-extrabold text-[black] text-center">
            RELIABLE TECH FOR <br></br>STAYING CLOSE
          </h1>
          <p className="text-[#373737] text-[15px] lg:text-[20px] text-center">
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
        </div>
        <div className="flex w-auto place-content-center">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6582c202770f02752be44796_RELIABLE%20TECH%20FOR%20STAYING%20CLOSE.svg"
            loading="lazy"
            alt="RELIABLE TECH FOR STAYING CLOSE"
            className="w-[90%]"
          ></img>
        </div>
        <div className="flex gap-[20px] flex-col place-content-center">
          <div className="w-full mb-[-40px]">
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/625bd8c9aab9924849ad9c5e_a188414ce83f2454b9d71a47c3d95909%20(3).svg"
              loading="lazy"
              alt=""
              className=""
            ></img>
          </div>
          <h1 className="text-[20px] lg:text-[24px] font-extrabold text-[black] text-center">
            Ready to start your journey?
          </h1>
          <div className="flex place-content-center">
            <div className="w-auto lg:w-[295px] h-[50px] p-6 bg-[#5865F2] items-center justify-center flex rounded-[99em] cursor-pointer flex-row gap-[10px] place-content-center">
              <span className="">
                <MdOutlineFileDownload className="w-[25px] h-[25px] fill-white" />
              </span>
              <p className={`text-[white] capitalize font-[800] text-[12px]`}>
                Download for Windows
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
