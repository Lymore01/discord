/* eslint-disable @typescript-eslint/no-unused-vars */
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";
import { useState } from "react";
import { menuLinks } from "../../utils/menus";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center h-auto p-0 bg-[#5865F2] sm:pl-12 sm:pr-12">
        <div>
          <Logo />
        </div>
        <div className="hidden md:hidden lg:flex flex-row gap-[40px] text-[14px] list-none font-extrabold text-white">
          {menuLinks.map((link) => {
            return (
              <li className="cursor-pointer hover:underline" key={link.id}>
                {link.title}
              </li>
            );
          })}
        </div>
        <div className="w-auto flex flex-row gap-[20px] items-center justify-center">
          <div>
            <div className="w-auto h-[40px] sm:h-[30px] p-4 md:p-6 sm:p-5 bg-[#ffff] items-center justify-center flex rounded-[99em] cursor-pointer flex-row gap-[10px] place-content-center">
              <p
                className={`text-[black] capitalize font-extrabold text-[12px] sm:text-[12px] hover:text-[#5865F2]`}
              >
                Open Discord
              </p>
            </div>
          </div>
          <div
            className="h-full w-auto flex md:flex lg:hidden"
            onClick={handleClick}
          >
            <GiHamburgerMenu className="sm:w-[35px] w-[30px] sm:h-[35px] h-[30px] fill-white cursor-pointer" />
          </div>
        </div>
      </div>
      {isOpen && <Menu open={isOpen} />}
    </>
  );
};

export default NavigationBar;
