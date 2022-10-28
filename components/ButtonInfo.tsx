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
    <div className="flex flex-col items-center justify-center">
      <button className="retro rbtn-big px-9"> About</button>
    </div>
  );
};

export default ButtonInfo;
