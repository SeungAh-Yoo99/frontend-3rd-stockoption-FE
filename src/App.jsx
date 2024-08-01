import { useState } from "react";
import Header from "./components/Header";
import BlockLayout from "./layouts/BlockLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import { HeaderContext } from "./contexts/HeaderContext";
import { fetchStockRankingData } from "./api/api.js";
import PaginationEx from "./components/PaginationEx.jsx";
import StockForm from "./components/StockForm.jsx";
import "@/assets/components/pagination.css";

const headerButtons = [
  {
    code: "0000",
    name: "전체",
  },
  {
    code: "0001",
    name: "코스피",
  },
  {
    code: "1001",
    name: "코스닥",
  },
  {
    code: "2001",
    name: "코스피200",
  },
];

function App() {
 

  const [iscd, setIscd] = useState("0000");

  const changeIscd = (newIscd) => {
    setIscd(newIscd);
  };

  return (
    <>
      <DefaultLayout>
        {/* Header */}
        <BlockLayout height={"h-13%"}>
          <HeaderContext.Provider
            value={{ iscd, buttons: headerButtons, onClick: changeIscd }}
          >
            <Header></Header>
          </HeaderContext.Provider>
        </BlockLayout>
        {/* Body */}
        <BlockLayout height={"h-80%"}>
          {/* 여기에 Body 부분 컴포넌트 위치 */}
          <StockForm></StockForm>
        </BlockLayout>
      </DefaultLayout>
    </>
  );
}

const fetchDataAsync = async () => {
  try {
    const result = await fetchStockRankingData("0001", "0");
    console.log(result); // 결과를 콘솔에 출력
  } catch (error) {
    console.error("Error fetching data:", error); // 오류를 콘솔에 출력
  }
};

export default App;
