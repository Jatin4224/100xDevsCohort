import React, { useState, useEffect } from "react";
import SingleUser from "./SingleUser";
import AddUserForm from "./AddUserForm";
import axios from "axios";

const UsersDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from backend
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data.map((u) => u.username)))
      .catch((err) => console.error(err));
  }, []);

  const addUser = (username) => {
    if (!users.includes(username)) setUsers([...users, username]);
  };

  return (
    <div className="bg-zinc-100 min-h-screen p-6 text-orangeDark">
      <AddUserForm addUser={addUser} />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((username) => (
          <SingleUser key={username} username={username} />
        ))}
      </div>
    </div>
  );
};

export default UsersDashboard;
