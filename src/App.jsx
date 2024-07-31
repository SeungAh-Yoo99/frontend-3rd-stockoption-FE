import { fetchStockRankingData } from "./api/api.js";

function App() {
  fetchDataAsync();

  return (
    <div>
      <h1>Check the console for data output</h1>
    </div>
  );
}

const fetchDataAsync = async () => {
  try {
    const result = await fetchStockRankingData('0001', '0');
    console.log(result); // 결과를 콘솔에 출력
  } catch (error) {
    console.error("Error fetching data:", error); // 오류를 콘솔에 출력
  }
};

export default App;
