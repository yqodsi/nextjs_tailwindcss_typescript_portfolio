import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type Props = {
  text: string;
};

const ButtonInfo = ({ text }: Props) => {
  return (
    // <div className="group w-60 h-16 relative inline-block focus:outline-none focus:ring">
    //   <span className="w-60 h-16 absolute inset-0 translate-x-0 translate-y-0 bg-black transition-transform group-hover:translate-y-2 group-hover:translate-x-2"></span>

    //   <span className=" w-60 h-16 relative flex justify-center items-center border-2 border-current px-8 py-3 text-secondary text-sm font-bold uppercase tracking-widest">
    //     {text}
    //   </span>
    // </div>
    <div className="relative flex justify-center items-center h-14 w-40 overflow-hidden font-medium text-gray-600 bg-gray-100 border-2 border-secondary rounded-lg shadow-inner group">
      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
      <span className="relative font-semibold text-lg transition-colors duration-300 delay-200 group-hover:text-white ease">
        {text}
      </span>
    </div>
  );
};

export default ButtonInfo;
