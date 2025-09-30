import React, { useEffect, useState } from "react";
import axios from "axios";

const SingleUser = ({ username }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [username]);

  if (loading)
    return <p className="text-orange-400 text-center mt-8">Loading...</p>;
  if (error)
    return <p className="text-red-500 text-center mt-8">Error: {error}</p>;

  return (
    <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-orange-400">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-32 h-32 rounded-full mb-4"
      />
      <h1 className="text-2xl font-bold mb-1">{user.login}</h1>
      <p>{user.name}</p>
      <p className="mt-2 text-center">{user.bio}</p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 text-orange-500 hover:underline"
      >
        View Profile
      </a>
    </div>
  );
};

export default SingleUser;
