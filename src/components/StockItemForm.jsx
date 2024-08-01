import React from "react";

function StockItemForm({ item }) {
  let plusOrMinus = item.prdy_vrss_sign;
  if (plusOrMinus == "2") plusOrMinus = "+";
  else plusOrMinus = "";

  return (
    <>
      <div className="grid grid-flow-col row-span-${order.products.length} lg:grid-cols-5 grid-cols-5 gap-12 items-center ">
        <div>{item.data_rank}</div>
        <div>{item.hts_kor_isnm}</div>
        <div>{item.stck_prpr}</div>
        <div
          className={`${
            plusOrMinus === "+" ? "text-red-600" : "text-blue-600"
          }`}
        >{`${plusOrMinus}${item.prdy_vrss}`}</div>
        <div
          className={`${
            plusOrMinus === "+" ? "text-red-600" : "text-blue-600"
          }`}
        >{`${item.prdy_ctrt}%`}</div>
      </div>
    </>
  );
}

export default StockItemForm;
