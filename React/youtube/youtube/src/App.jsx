import React, { useEffect, useState } from "react";
import axios from "axios";

const SingleUser = () => {
  const [users, setUsers] = useState([]); // store multiple users
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [user1, user2] = await Promise.all([
          axios.get("https://api.github.com/users/hiteshchoudhary"),
          axios.get("https://api.github.com/users/piyushgarg-dev "),
        ]);
        setUsers([user1.data, user2.data]); // set users state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return <p className="text-orange-400 text-center mt-8">Loading...</p>;
  if (error)
    return <p className="text-red-500 text-center mt-8">Error: {error}</p>;

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-row gap-12 items-center justify-center p-6 text-orange-400">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-zinc-800 p-6 rounded-lg mb-6 flex flex-col items-center"
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-32 h-32 rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">{user.login}</h1>
          <p className="text-lg">{user.name}</p>

          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-orange-500 hover:underline"
          >
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
};

export default SingleUser;
