/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
  title: string;
  icon: any;
};

const Button = ({ title, icon }: Props) => {
  return (
    <>
      <div
        className={`w-auto p-4 ${
          icon === "" ? "h-[40px]" : "h-auto"
        }  bg-white items-center justify-center flex rounded-[99em] cursor-pointer flex-row gap-[10px] ${
          title === "Open Discord in your browser"
            ? "bg-[#2C2F33]"
            : "bg-white "
        }`}
      >
        <span className="">{icon}</span>
        <p
          className={`text-[#373737] capitalize font-[800] text-[12px] ${
            title === "Open Discord in your browser"
              ? "text-white font-bold"
              : "text-black "
          }`}
        >
          {title}
        </p>
      </div>
    </>
  );
};

export default Button;
