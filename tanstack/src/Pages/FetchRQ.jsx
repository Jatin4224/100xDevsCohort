// src/components/FetchRQ.jsx

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../API/api";
import "./app.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post", pageNumber],
    queryFn: () => fetchPosts(pageNumber),
    placeholderData: keepPreviousData,
  });

  if (isLoading) return <p className="loading">Loading...</p>;
  if (isError) return <p className="error">Error: {error.message}</p>;

  return (
    <div className="container">
      <h2 className="title">Posts</h2>
      <ul className="post-list">
        {Array.isArray(data?.data) && data.data.length > 0 ? (
          data.data.map((post, index) => (
            <li key={index} className="post-item">
              <NavLink to={`/rq/${index}`}>
                <strong>{post.title}</strong>
              </NavLink>
            </li>
          ))
        ) : (
          <li className="post-item">No products available.</li>
        )}
      </ul>
      <div>
        <button onClick={() => setPageNumber((prev) => Math.max(prev - 3, 0))}>
          Prev
        </button>
        <h2>{pageNumber / 3 + 1}</h2>
        <button onClick={() => setPageNumber((prev) => prev + 3)}>Next</button>
      </div>
    </div>
  );
};

export default FetchRQ;
