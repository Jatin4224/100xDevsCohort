import axios from "axios";

const api = axios.create({
  baseURL: "url",
});

export const fetchPosts = () => {
  return api.get("/post");
};
