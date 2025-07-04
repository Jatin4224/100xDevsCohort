import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.in/api/",
});

export const fetchPosts = () => {
  return api.get("/products");
};

//to fetch the individual data
export const FetchIndvPost = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};
