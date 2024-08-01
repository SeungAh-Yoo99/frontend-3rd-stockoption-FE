import React from "react";
import { useState, useEffect } from "react";
import { fetchStockRankingData } from "../api/api.js";
import StockItemForm from "./StockItemForm";
import StockFilter from "./StockFilter";
import Pagination from "react-js-pagination";

function StockForm({ iscd }) {
  // 서버에서 응답받은 주식 리스트
  const [stockList, setStockList] = useState([]);

  // 상승률순, 하락률순
  const [selectedCategory, setSelected] = useState("high");

  // 상승률, 하랄률 필터 변경
  const handleSelect = (e) => {
    let a = e.target.value;
    setSelected(a);
  };

  // 필터 변경 시, 새로운 데이터 요청 로직
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchStockRankingData(
          iscd,
          selectedCategory === "high" ? "0" : "1"
        );
        setStockList(result);
      } catch (error) {
        console.error("Error fetching data:", error); // 오류를 콘솔에 출력
      }
    };

    fetchDataAsync();
  }, [selectedCategory, iscd]);

  // 페이지네이션을 통해 보여줄 slice된 리스트
  const [currentList, setCurrentList] = useState(stockList);

  // 현재 페이지 번호
  const [page, setPage] = useState(1);

  // 페이지 당 게시글 개수
  const itemsPerPage = 10;

  // stockList에서 slice할 index 범위
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // 페이지 이동
  const changePageHandler = (page) => {
    setPage(page);
  };

  // 페이지가 바뀌거나 필터 변경으로 주식 리스트 변경 시, currentList 다시 정의
  useEffect(() => {
    setCurrentList(stockList.slice(indexOfFirstItem, indexOfLastItem));
  }, [page, stockList]);

  return (
    // <>
    //   <StockFilter handleFilter={handleSelect}></StockFilter>
    //   <div className="grid grid-flow-col  row-span-${order.products.length} lg:grid-cols-5 grid-cols-5 gap-12 items-center ">
    //     <div>data순위</div>
    //     <div>종목명</div>
    //     <div>현재가</div>
    //     <div>전일대비</div>
    //     <div>전일대비율</div>
    //   </div>
    //   <div className="w-[100%] my-[1%] border-[1px] border-black/70"></div>
    //   <div></div>

    //   {items.map((item) => (
    //     <StockItemForm item={item} key={item.data_rank} />
    //   ))}
    // </>
    <div className="w-full h-full flex flex-col justify-between items-center">
      {/* 필터 select box */}
      <div className="w-full h-8%">
        <StockFilter handleFilter={handleSelect}></StockFilter>
      </div>

      {/* 목록 */}
      <div className="w-full h-87% flex-glow pl-5 flex flex-col justify-start">
        {/* 타이틀 */}
        <div className="w-full h-10% grid grid-flow-col  row-span-${order.products.length} lg:grid-cols-5 grid-cols-5 gap-12 items-center ">
          <div>순위</div>
          <div>종목명</div>
          <div>현재가</div>
          <div>전일대비</div>
          <div>전일대비율</div>
        </div>
        {/* stock item 올 부분 */}
        {currentList.map((item) => (
          <StockItemForm item={item} key={item.data_rank} />
        ))}
      </div>
      <Pagination
        activePage={page} // 현재 페이지
        itemsCountPerPage={itemsPerPage} // 한 페이지 당 보여줄 아이템 갯수
        totalItemsCount={stockList.length} // 총 아이템 갯수
        pageRangeDisplayed={5} // paginator에 나타낼 페이지 범위
        prevPageText={"<"} // "이전"을 나타낼 텍스트
        nextPageText={">"} // "다음"을 나타낼 텍스트
        onChange={changePageHandler} // 페이지 변경을 핸들링하는 함수
        className="flex"
      />
    </div>
  );
}

export default StockForm;
