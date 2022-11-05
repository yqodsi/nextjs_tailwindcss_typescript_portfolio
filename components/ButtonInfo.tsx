import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type Props = {
  text: string;
};

const ButtonInfo = ({ text }: Props) => {
  return (
    <div className="">
      <button className="retro rbtn-big ">{text}</button>
    </div>
  );
};

export default ButtonInfo;
