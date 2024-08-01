import { useState } from "react";
import Header from "./components/Header";
import BlockLayout from "./layouts/BlockLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import { HeaderContext } from "./contexts/HeaderContext";

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
        </BlockLayout>
      </DefaultLayout>
    </>
  );
}

export default App;
