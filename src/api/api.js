import axios from "axios";

export const fetchStockRankingData = async (
  fid_input_iscd,
  fid_rank_sort_cls_code
) => {
  try {
    const response = await axios.get(`/api`, {
      params: {
        fid_input_iscd,
        fid_rank_sort_cls_code,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
