import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FetchIndvPost } from "../../API/Api";

const FetchIndv = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post", id], // include `id` to avoid caching conflicts
    queryFn: () => FetchIndvPost(id),
    enabled: !!id, // optional: only fetch if id is available
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Fetched Post</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchIndv;
