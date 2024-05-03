import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import FooterMenu from "./FooterMenu";
import { menus } from "../../utils/menus";
import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <div className="grid md:grid-rows-3 grid-cols-1 lg:grid-cols-2 items-start justify-start bg-[#2C2F33] p-6 mt-[50px] text-white gap-[40px] pt-24">
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-row gap-[10px] items-center">
            <span className="text-[14px]">English</span>
            <span>
              <FaAngleDown />
            </span>
          </div>
          <div className="flex flex-row gap-[20px] ">
            <span>
              <FaXTwitter className="h-[25px] w-[25px]" />
            </span>
            <span>
              <FaInstagram className="h-[25px] w-[25px]" />
            </span>
            <span>
              <IoLogoFacebook className="h-[25px] w-[25px]" />
            </span>
            <span>
              <FaYoutube className="h-[25px] w-[25px]" />
            </span>
            <span>
              <IoLogoTiktok className="h-[25px] w-[25px]" />
            </span>
          </div>
        </div>
        <div className="grid md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 grid-cols-2 gap-[40px] lg:gap-[30px] md:pb-[30px] p-2">
          {menus.map((menu) => (
            <FooterMenu title={menu.title} links={menu.links} />
          ))}
        </div>
        <div className="flex flex-row justify-between border border-t-[#5865F2] border-[transparent] pt-8 pb-8">
          <div>
            <Logo />
          </div>
          <div className="w-auto lg:w-[295px] h-[40px] p-4 bg-[#5865F2] items-center justify-center flex rounded-[99em] cursor-pointer flex-row gap-[10px] place-content-center">
            <p className={`text-[white] capitalize font-[800] text-[12px]`}>
              Download
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
