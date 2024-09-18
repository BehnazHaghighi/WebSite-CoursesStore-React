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

export const ordersPost = async (body) => {
  try {
    const url = "orders";
    const response = await api.post(url, body);
    return response;
  } catch (error) {
    throw error; // پرتاب خطا برای مدیریت در کامپوننت
  }
};
