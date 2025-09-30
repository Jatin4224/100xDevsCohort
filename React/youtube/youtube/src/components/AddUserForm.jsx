import React, { useState } from "react";

const AddUserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    addUser(name); // add username to parent state
    setStatus(`Added user: ${name}`);
    setName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4 justify-center items-center"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter GitHub username"
        className="p-2 rounded-lg text-black"
      />
      <button
        type="submit"
        className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Add User
      </button>
      <p className="text-center mt-2">{status}</p>
    </form>
  );
};

export default AddUserForm;
