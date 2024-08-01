import React from 'react'

function StockItemForm({item}) {

  // const m = {
  //   dataRank : item.data_rank
  // }

  
  // const [plusOrMinus,setPlusOrMinus] = useState("2");
  let plusOrMinus = item.prdy_vrss_sign;
  if(plusOrMinus=="2")
    plusOrMinus="+";
  else
    plusOrMinus= "-";

  return (
    <>
      <div className= "grid grid-flow-col row-span-${order.products.length} lg:grid-cols-5 grid-cols-5 gap-12 items-center ">
        <div>{item.data_rank}</div>
        <div>{item.hts_kor_isnm}</div>
        <div>{item.stck_prpr}</div>
        <div>{`${plusOrMinus} ${item.prdy_vrss}`}</div>
        <div>{`${item.prdy_ctrt}%`}</div>
      </div>
      <div className="w-[100%] my-[1%] border-[1px] border-lightGray/5"></div>
    
    </>
  )
}

export default StockItemForm