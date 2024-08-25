import api from "./apiService";

export const getBlogs = async () => {
  try {
    const url = "products";
    const response = await api.get(url, { signal: AbortController.signal });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
