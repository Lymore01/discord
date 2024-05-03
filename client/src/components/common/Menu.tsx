import { IoClose } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { menuLinks } from "../../utils/menus";
import { m_variants } from "../../utils/variants";

type Props = {
  open: boolean;
};

const Menu = ({ open }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!open);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={m_variants}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="w-[100%] flex items-end justify-end h-[100vh] bg-transparent fixed top-0 z-[30] overflow-y-hidden lg:hidden"
          >
            <motion.div className="w-[100%] sm:w-[50%] h-full bg-[white] rounded-lg flex flex-col p-4">
              <div className="w-full h-auto pb-2 border border-b-slate-300 border-transparent flex flex-row justify-between items-center sm:p-2">
                <div className="flex flex-row gap-[10px] items-center justify-center">
                  <div className="w-[150px] sm:w-[140px] h-auto p-2  bg-transparent">
                    <a
                      href="https://discord.com/"
                      data-track-nav="landing"
                      className=""
                    >
                      <img
                        src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/6257d377b13ff484638adb92_svg7.svg"
                        loading="lazy"
                        alt=""
                        className=""
                        style={{ opacity: 1, display: "block" }}
                      ></img>
                    </a>
                  </div>
                  <span className="text-[#5865F2] text-[14px] cursor-pointer">
                    Open Discord
                  </span>
                </div>
                <div
                  className="items-center h-full flex justify-center"
                  onClick={handleClick}
                >
                  <IoClose className="h-[25px] w-[25px] cursor-pointer" />
                </div>
              </div>
              <div className="mt-[10px] flex flex-col gap-[20px] list-none p-6 font-600 text-[15px]">
                {menuLinks.map((link) => {
                  return (
                    <li
                      className="cursor-pointer hover:underline font-semibold"
                      key={link.id}
                    >
                      {link.title}
                    </li>
                  );
                })}
              </div>
              <div className="h-full sm:h-full flex items-center justify-center w-full">
                <div className="w-full sm:w-[300px]  h-[30px] p-6 sm:p-6 bg-[#5865F2] items-center justify-center flex rounded-[99em] cursor-pointer flex-row gap-[10px] place-content-center">
                  <span className="">
                    <MdOutlineFileDownload className="w-[25px] h-[25px] fill-white" />
                  </span>
                  <p
                    className={`text-[white] capitalize font-[800] text-[14px]`}
                  >
                    Download
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
