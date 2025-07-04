import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.in/api/",
});

export const fetchPosts = () => {
  return api.get("/products");
};
