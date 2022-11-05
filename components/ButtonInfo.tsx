import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type Props = {
  type: number;
  text: string;
  link: string;
  icon: React.ReactNode;
  color: string;
};

const ButtonInfo = ({ text, link, icon,  color }: Props) => {
  return (
    <div className="">
      <button className="retro rbtn-big ">{text}</button>
    </div>
  );
};

export default ButtonInfo;
