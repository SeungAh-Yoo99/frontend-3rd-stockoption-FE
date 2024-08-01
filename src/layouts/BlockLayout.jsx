import React from "react";

const BlockLayout = ({ children, height }) => {
  return (
    <div className={`w-full ${height} bg-bgComponent rounded-lg`}>
      {children}
    </div>
  );
};

export default BlockLayout;
