import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Fetch paginated posts
export const fetchPosts = (pageNumber) => {
  return api.get(`/posts?_start=${pageNumber}&_limit=3`);
};

//to fetch the individual data
export const FetchIndvPost = async (id) => {
  const res = await api.get(`/posts/${id}`);
  return res.data;
};
