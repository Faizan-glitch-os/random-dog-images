import { motion } from "motion/react";
import "./App.css";

function App() {
  return (
    <div className=" h-[100vh] w-[100vw] flex flex-col items-center justify-center">
      <form className="mt-8 flex flex-col md:flex-row space-y-4 md:space-x-4">
        <input
          type="text"
          name="dog"
          id="dog"
          placeholder="Enter a dog breed"
          className="mb-0 focus:outline-none border border-cyan-600 rounded placeholder:text-cyan-200/50 p-2"
        />
        <motion.button
          whileHover={{ scale: 1.1, y: -8 }}
          whileTap={{ scale: 0.9, y: 2 }}
          className="bg-cyan-600 hover:bg-cyan-700 rounded text-xl text-white hover:text-amber-50 px-4 py-2 w-full"
        >
          Search
        </motion.button>
      </form>
      <div className="mt-8 grid grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-2 md:gap-2">
        <div className="bg-amber-600 rounded w-48 h-48">hello</div>
        <div className="bg-amber-600 rounded w-48 h-48">hello</div>
        <div className="bg-amber-600 rounded w-48 h-48">hello</div>
        <div className="bg-amber-600 rounded w-48 h-48">hello</div>
      </div>
    </div>
  );
}

export default App;
