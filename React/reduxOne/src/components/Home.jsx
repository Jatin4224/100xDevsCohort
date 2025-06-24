import React from "react";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6  animate-pulse">
        Learning Redux
      </h1>
      <p className="text-gray-300 text-lg md:text-xl text-center max-w-xl mb-8">
        Master state management in React using Redux Toolkit. Build powerful,
        scalable apps with ease!
      </p>
      <a
        href="https://redux.js.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-sm shadow-lg transition-all duration-300"
      >
        <FaGithub />
        View Redux Docs
      </a>
    </div>
  );
};

export default Home;
