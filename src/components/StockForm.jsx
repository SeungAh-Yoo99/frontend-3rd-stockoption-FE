import React from 'react'
import { fetchStockRankingData } from "../api/api.js";
import StockItemForm from './StockItemForm'
import StockFilter from './StockFilter'

function StockForm() {
  

  const fetchDataAsync = async () => {
    try {
      const result = await fetchStockRankingData('0001', '0');
      console.log(result[0]); // 결과를 콘솔에 출력
    } catch (error) {
      console.error("Error fetching data:", error); // 오류를 콘솔에 출력
    }
  };

  fetchDataAsync();

  return (
    <>
    <StockFilter ></StockFilter>
    <div className= "grid grid-flow-col  row-span-${order.products.length} lg:grid-cols-5 grid-cols-5 gap-12 items-center ">
        <div>data순위</div>
        <div>종목명</div>
        <div>현재가</div>
        <div>전일대비,전일대비부호</div>
        <div>전일대비율</div>
    </div>
    <div className="w-[100%] my-[1%] border-[1px] border-lightGray/30"></div>
    <div></div>
    <StockItemForm></StockItemForm>
    
    </>
  )
}

export default StockForm