import { motion } from "motion/react";

type propsType = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isPending: boolean;
};

const Input = ({ handleSubmit, isPending }: propsType) => {
  return (
    <form onSubmit={handleSubmit} className="mt-8 flex space-x-4">
      <input
        type="text"
        name="dog"
        id="dog"
        placeholder="Enter a dog breed"
        className="text-slate-700 mb-0 focus:outline-none border border-cyan-600 rounded placeholder:text-slate-300/50 p-2"
      />
      <motion.button
        whileHover={{ scale: 1.1, y: -8 }}
        whileTap={{ scale: 0.9, y: 2 }}
        className="bg-cyan-600 hover:bg-cyan-700 rounded text-xl text-white hover:text-amber-50 px-4 py-2 w-full"
      >
        {isPending && <p className="animate-pulse">Loading....</p>}
        {!isPending && <p>Search</p>}
      </motion.button>
    </form>
  );
};

export default Input;
