/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
  title: string;
  links: any[];
};

const FooterMenu = ({ title, links }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-[20px] lg:w-auto">
        <span className="text-[#5865F2] text-[14px]">{title}</span>
        <ul className="list-none flex flex-col gap-[10px] text-[14px]">
          {links.map((link: string, index: number) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterMenu;
