import React, { useContext } from "react";
import HeaderFilterButton from "./HeaderFilterButton";
import { HeaderContext } from "../contexts/HeaderContext";

const Header = () => {
  const { buttons } = useContext(HeaderContext);

  return (
    <div className="h-full flex items-center justify-around">
      {buttons.map((button) => (
        <HeaderFilterButton info={button} key={button.code} />
      ))}
    </div>
  );
};

export default Header;
