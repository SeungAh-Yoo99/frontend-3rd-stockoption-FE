import React from "react";

function StockItemForm({ item }) {
  let isPlus = false;

  if (item.prdy_vrss_sign === "2") {
    isPlus = true;
  }

  return (
    <>
      <div className="grid grid-flow-col row-span-${order.products.length} lg:grid-cols-5 grid-cols-5 gap-12 items-center ">
        <div className="flex justify-center">{item.data_rank}</div>
        <div className="flex justify-center">{item.hts_kor_isnm}</div>
        <div className="flex justify-center">{item.stck_prpr}</div>
        <div
          className={`${
            isPlus ? "text-red-600" : "text-blue-600"
          } flex justify-center`}
        >{`${isPlus ? "▴" : "▾"}${
          item.prdy_vrss[0] !== "-"
            ? item.prdy_vrss
            : item.prdy_vrss.slice(1, item.prdy_vrss.length)
        }`}</div>
        <div
          className={`${
            isPlus ? "text-red-600" : "text-blue-600"
          } flex justify-center`}
        >{`${item.prdy_ctrt}%`}</div>
      </div>
    </>
  );
}

export default StockItemForm;
