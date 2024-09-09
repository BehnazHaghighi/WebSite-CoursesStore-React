import api from "./apiService";

export const getProdacts = async () => {
  try {
    const url = "products";
    const response = await api.get(url, { signal: AbortController.signal });
    return response.data;
    // console.log(response.data)
  } catch (error) {
    console.log(error);
  }
};
