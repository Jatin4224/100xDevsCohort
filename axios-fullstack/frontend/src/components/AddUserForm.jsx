import React, { useState } from "react";
import axios from "axios";

const AddUserForm = ({ addUser }) => {
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    try {
      const response = await axios.post("http://localhost:5000/api/users", {
        username,
      });
      addUser(response.data.username);
      setStatus(`User ${response.data.username} added successfully!`);
      setUsername("");
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 justify-center items-center"
    >
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="p-2 rounded-lg text-black"
      />
      <button
        type="submit"
        className="bg-orangeDark px-4 py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Add User
      </button>
      <p className="text-center mt-2">{status}</p>
    </form>
  );
};

export default AddUserForm;
