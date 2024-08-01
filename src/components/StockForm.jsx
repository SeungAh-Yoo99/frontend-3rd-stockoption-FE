import React from 'react'
import { useState,useEffect } from 'react';
import { fetchStockRankingData } from "../api/api.js";
import StockItemForm from './StockItemForm'
import StockFilter from './StockFilter'




function StockForm() {

  const [items, setItems] = useState([]);
  const [selectedCategory, setSelected] = useState("high");

  const handleSelect = (e) => {
    let a= e.target.value;
    setSelected(a);
    console.log(a)
  };


  useEffect(() => {
  
    const fetchDataAsync = async () => {
    try {
      let result;
      result = await fetchStockRankingData('0001', selectedCategory === 'high' ? "0" : "1");
      setItems(result);
      // console.log(result);
  
    } catch (error) {
      console.error("Error fetching data:", error); // 오류를 콘솔에 출력
    }
  }
    
    fetchDataAsync();
},[selectedCategory]);


  return (
    <>
    <StockFilter handleFilter={handleSelect}></StockFilter>
    <div className= "grid grid-flow-col  row-span-${order.products.length} lg:grid-cols-5 grid-cols-5 gap-12 items-center ">
        <div>data순위</div>
        <div>종목명</div>
        <div>현재가</div>
        <div>전일대비</div>
        <div>전일대비율</div>
    </div>
    <div className="w-[100%] my-[1%] border-[1px] border-black/70"></div>
    <div></div>
   
    {items.map(item => <StockItemForm item={item} key={item.data_rank}/>)}

  
    
    </>
  )
}

export default StockForm