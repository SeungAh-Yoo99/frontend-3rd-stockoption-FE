import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "react-js-pagination";

const dummyData = [
  {
    data_rank: 1,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 2,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 3,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 4,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 5,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 6,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 7,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 8,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 9,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 10,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 11,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 12,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 13,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 14,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 15,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 16,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 17,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 18,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 19,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 20,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 21,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 22,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 23,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 24,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 25,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 26,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 27,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 28,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 29,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 30,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 31,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 32,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 33,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 34,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
  {
    data_rank: 35,
    hts_kor_isnm: "삼성",
    stck_prpr: "800,000",
    prdy_vrss: "+400",
    prdy_vrss_sign: "+",
    prdy_ctrt: "+4%",
  },
];

const PaginationEx = () => {
  // 서버에서 응답받은 주식 리스트
  const [stockList, setStockList] = useState(dummyData);

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

  // 페이지가 바뀌면 currentList 다시 정의
  useEffect(() => {
    setCurrentList(stockList.slice(indexOfFirstItem, indexOfLastItem));
  }, [page]);

  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      {/* 필터 select box */}
      <div className="w-full h-8%"></div>
      {/* 목록 */}
      <div className="h-87% flex-glow pl-5 flex flex-col justify-start">
        {/* 타이틀 */}
        <div className="w-full h-10% grid grid-flow-col lg:grid-cols-5 grid-cols-5 gap-12 items-center">
          <div>데이터 순위</div>
          <div>HTS한글 종목명</div>
          <div>주식 현재가</div>
          <div>전일 대비</div>
          <div>전일 대비율</div>
        </div>
        {/* stock item 올 부분 */}
        {currentList.map((item) => (
          // StockItemForm 컴포넌트 부분
          <div
            className="w-full h-9% grid grid-flow-col lg:grid-cols-5 grid-cols-5 gap-12 items-center"
            key={item.data_rank}
          >
            <div>{item.data_rank}</div>
            <div>{item.hts_kor_isnm}</div>
            <div>{item.stck_prpr}</div>
            <div>{item.prdy_vrss}</div>
            <div>{item.prdy_ctrt}</div>
          </div>
        ))}
      </div>
      {/* 페이지 이동 버튼 */}
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
};

export default PaginationEx;
