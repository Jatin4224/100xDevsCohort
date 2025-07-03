import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../API/Api";

const FetchRQ = () => {
  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
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
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post, index) => (
          <li key={index}>{post.title || JSON.stringify(post)}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchRQ;
