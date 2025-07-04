import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../API/Api";
import "./app.css";

const FetchRQ = () => {
  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      console.log("Fetched Data:", res.data);
      if (res.status === 200) {
        return res.data;
      } else {
        throw new Error("Failed with status " + res.status);
      }
    } catch (err) {
      throw new Error("Failed to fetch posts: " + err.message);
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post"],
    queryFn: getPostsData,
    // staleTime: 5000, //5seconds
    refetchInterval: 1000,
  });

  if (isLoading) return <p className="loading">Loading...</p>;
  if (isError) return <p className="error">Error: {error.message}</p>;

  return (
    <div className="container">
      <h2 className="title">Posts</h2>
      <ul className="post-list">
        {Array.isArray(data?.products) ? (
          data.products.map((post, index) => (
            <li key={index} className="post-item">
              <strong>{post.title}</strong> — ${post.price}
            </li>
          ))
        ) : (
          <li className="post-item">No products available.</li>
        )}
      </ul>
    </div>
  );
};

export default FetchRQ;
