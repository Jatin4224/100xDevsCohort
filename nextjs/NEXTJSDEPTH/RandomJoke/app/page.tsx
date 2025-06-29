// "use client";

// import { useEffect, useState } from "react";

// const RandomJokes = () => {
//   const [RandomJokes, setRandomJokes] = useState({});
//   const [showJokes, setShowJokes] = useState(true);
//   const URL = "http://www.official-joke-api.appspot.com/random_joke";
//   const fetchRandomJokes = async () => {
//     const res = await fetch(URL);
//     const data = await res.json();
//     console.log(data);
//     setRandomJokes(data);
//   };
//   useEffect(() => {
//     fetchRandomJokes();
//   }, []);
//   return (
//     <div>
//       <h1>{RandomJokes.setup}</h1>

//       {showJokes ? (
//         <button onClick={() => setShowJokes(false)}>Reveal</button>
//       ) : (
//         <div>
//           {" "}
//           <h2>{RandomJokes.punchline}</h2>{" "}
//           <button onClick={() => setShowJokes(true)}>Hide punchline</button>
//         </div>
//       )}
//       <button onClick={() => fetchRandomJokes()}>Next</button>
//     </div>
//   );
// };

// export default RandomJokes;
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RandomJokes = () => {
  const [randomJoke, setRandomJoke] = useState<{
    setup?: string;
    punchline?: string;
  }>({});
  const [showJoke, setShowJoke] = useState(true);
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const fetchRandomJokes = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setRandomJoke(data);
    setShowJoke(true);
  };

  useEffect(() => {
    fetchRandomJokes();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-4">
      <motion.div
        className="bg-[#1e293b] rounded-2xl shadow-2xl p-8 max-w-md w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl font-bold mb-4 text-[#38bdf8]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          😂 Random Joke
        </motion.h1>

        {randomJoke.setup && (
          <motion.p
            className="text-lg mb-4 font-medium text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {randomJoke.setup}
          </motion.p>
        )}

        <AnimatePresence mode="wait">
          {showJoke ? (
            <motion.button
              key="reveal"
              onClick={() => setShowJoke(false)}
              className="bg-[#38bdf8] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#0ea5e9] transition"
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              Reveal Punchline
            </motion.button>
          ) : (
            <motion.div
              key="punchline"
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.p
                className="text-xl font-semibold text-[#facc15]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {randomJoke.punchline}
              </motion.p>
              <motion.button
                onClick={() => setShowJoke(true)}
                className="bg-gray-700 px-4 py-2 rounded-lg text-white hover:bg-gray-600"
                whileTap={{ scale: 0.95 }}
              >
                Hide Punchline
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={fetchRandomJokes}
          className="mt-6 w-full bg-[#10b981] px-4 py-2 rounded-lg font-semibold hover:bg-[#059669] transition"
          whileTap={{ scale: 0.95 }}
        >
          Next Joke
        </motion.button>
      </motion.div>
    </div>
  );
};

export default RandomJokes;
