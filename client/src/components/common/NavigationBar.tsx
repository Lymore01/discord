import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationBar = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center h-auto p-0 bg-[#5865F2]">
        <div>
          <Logo />
        </div>
        <div className="w-auto flex flex-row gap-[20px] items-center justify-center">
          <div>
            <div className="w-auto h-[30px] p-6 bg-[#ffff] items-center justify-center flex rounded-[99em] cursor-pointer flex-row gap-[10px] place-content-center">
              <p className={`text-[black] capitalize font-[800] text-[12px]`}>
                Open Discord
              </p>
            </div>
          </div>
          <div className="h-full w-auto">
            <GiHamburgerMenu className="w-[35px] h-[35px] fill-white cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
