"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 py-32 text-center text-gray-100"
    >
      <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400">
        Contact
      </h1>

      <p className="max-w-2xl mx-auto text-indigo-200 text-lg mb-16">
        Feel free to reach out for collaborations, questions, or project
        discussions.
      </p>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.a
          href="mailto:mharshith200@gmail.com"
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-indigo-700/40 hover:border-teal-400/60 transition flex flex-col items-center"
        >
          <div className="text-4xl mb-4">📧</div>
          <p className="text-lg font-semibold mb-2">Email</p>
          <p className="text-indigo-300">mharshith200@gmail.com</p>
        </motion.a>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-indigo-700/40 hover:border-teal-400/60 transition flex flex-col items-center"
        >
          <div className="text-4xl mb-4">📞</div>
          <p className="text-lg font-semibold mb-2">Phone</p>
          <p className="text-indigo-300">+91 12345 67890</p>
        </motion.div>
        <motion.a
          href="https://github.com/TheGeekyCoder06"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-indigo-700/40 hover:border-teal-400/60 transition flex flex-col items-center"
        >
          <div className="text-4xl mb-4">💻</div>
          <p className="text-lg font-semibold mb-2">GitHub</p>
          <p className="text-indigo-300 break-words">
            github.com/TheGeekyCoder06
          </p>
        </motion.a>
      </div>
    </motion.div>
  );
}
