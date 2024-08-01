import React, { useContext } from "react";
import { HeaderContext } from "../contexts/HeaderContext";

const HeaderFilterButton = ({ info }) => {
  const { iscd, onClick } = useContext(HeaderContext);

  const buttonClickHandler = () => {
    onClick(info.code);
  };

  return (
    <button
      className={`h-full flex-1 text-2xl cursor-pointer hover:bg-gray-200 hover:rounded-lg ${
        iscd === info.code ? "text-blue-500 font-bold" : ""
      }`}
      onClick={buttonClickHandler}
    >
      {info.name}
    </button>
  );
};

export default HeaderFilterButton;
