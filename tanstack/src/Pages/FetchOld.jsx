import React, { useEffect, useState } from "react";
import { fetchPosts } from "../API/Api";

const FetchOld = () => {
  const [posts, setPosts] = useState([]);

  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      console.log(res);
      if (res.status === 200) {
        setPosts(res.data);
      }
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title || JSON.stringify(post)}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchOld;
