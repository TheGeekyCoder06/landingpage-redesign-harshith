"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 py-32 text-center text-gray-100"
    >
      <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400 mb-10">
        About Us
      </h1>

      <p className="max-w-3xl mx-auto text-indigo-200 text-lg leading-relaxed mb-20">
        We’re a small but dedicated team focused on building interfaces that feel
        intuitive, responsive, and genuinely enjoyable to use. We combine thoughtful
        design with clean engineering to create digital experiences that leave an impact.
      </p>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
        {[
          {
            title: "Our Mission",
            desc: "To craft seamless user experiences that balance performance, accessibility, and aesthetics.",
          },
          {
            title: "Our Philosophy",
            desc: "Design should feel natural — smooth animations, predictable layouts, and meaningful interactions.",
          },
          {
            title: "Our Approach",
            desc: "We blend motion, design systems, and modern frontend technologies to bring ideas to life.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15, duration: 0.7 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-indigo-700/40"
          >
            <h3 className="text-2xl font-bold mb-3 text-teal-300">{item.title}</h3>
            <p className="text-indigo-200 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <section className="max-w-3xl mx-auto mb-32 text-left">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-teal-300 mb-6"
        >
          Our Story
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-indigo-200 text-lg leading-relaxed"
        >
          What started as a small experiment in UI exploration quickly grew into
          a passion for crafting interfaces that feel alive. Over time, we refined
          our understanding of motion design, accessibility, design systems, and
          frontend performance. Today, we apply that knowledge to build polished,
          thoughtful experiences for users everywhere.
        </motion.p>
      </section>
      <section className="max-w-4xl mx-auto mb-32">
        <h2 className="text-4xl font-bold text-center text-teal-300 mb-12">
          What We’re Good At
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            "Frontend architecture & component systems",
            "Smooth animation & interaction design",
            "Responsive, mobile-first layouts",
            "Dark mode UI & modern color systems",
            "High-performance, optimized builds",
            "Design that feels clean and intentional",
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-gray-800 rounded-xl shadow border border-indigo-700/40 text-indigo-200"
            >
              • {skill}
            </motion.div>
          ))}
        </div>
      </section>
      <section className="text-center mt-20">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 font-bold rounded-full bg-teal-500 text-gray-900 shadow-lg hover:bg-teal-400 transition-all"
        >
          Work With Us
        </motion.button>
      </section>
    </motion.div>
  );
}
