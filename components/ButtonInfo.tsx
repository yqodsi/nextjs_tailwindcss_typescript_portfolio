import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
type Props = {
  type: number;
  text: string;
  link: string;
  icon: React.ReactNode;
  color: string;
};

const ButtonInfo = ({ text, link, icon, type, color }: Props) => {
  return (
    // box shadow
    <div
      className={`flex bg-third mx-5 uppercase py-2 pl-2  items-center  gap-6 j cursor-pointer hover:scale-105 transform w-60 rounded-full transition duration-300 ease-in-out shadow-md`}
    >
      <div className="">{icon}</div>
      <p className="text-xl text-primary tracking-[6px] font-thin">{text}</p>
    </div>
  );
};

export default ButtonInfo;
