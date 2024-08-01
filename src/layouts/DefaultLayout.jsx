import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div className="w-full h-full bg-bgMain">
      <div className="w-full h-full mx-auto min-w-[20rem] p-14 flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
