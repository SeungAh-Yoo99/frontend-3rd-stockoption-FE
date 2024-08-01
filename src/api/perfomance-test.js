import { fetchStockRankingData } from "./api";

export const performanceTest = async () => {
  const start = performance.now(); // 브라우저에서의 고해상도 타이머 시작

  await fetchDataAsync(); // 비동기 함수 호출

  const end = performance.now(); // 타이머 종료
  console.log(`fetchDataAsync took ${end - start} milliseconds`);
};

const fetchDataAsync = async () => {
  try {
    const result = await fetchStockRankingData("0002", "1");
    console.log(result); // 결과를 콘솔에 출력
  } catch (error) {
    console.error("Error fetching data:", error); // 오류를 콘솔에 출력
  }
};
