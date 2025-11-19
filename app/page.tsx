"use client";

import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <motion.main
      className="min-h-screen flex flex-col items-center bg-gray-900 text-gray-50 overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 w-full px-6">
        <section className="text-center max-w-4xl mx-auto py-32 md:py-48">
          <motion.h2
            variants={itemVariants}
            className="text-6xl md:text-7xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-400"
          >
            Unleash the <span className="block md:inline">Digital Frontier</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-indigo-200 text-xl mb-10 max-w-2xl mx-auto"
          >
            We craft digital experiences that feel smooth, intentional, and
            memorable. Built with performance and design in mind, our interface
            blends motion, accessibility, and modern UI principles.
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(52, 211, 153, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 font-bold rounded-full bg-teal-500 text-gray-900 shadow-lg hover:bg-teal-400 transition transform duration-300 ease-in-out border border-teal-500"
          >
            Launch Project
          </motion.button>
        </section>
        <section className="max-w-5xl mx-auto text-center mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-10 text-teal-300"
          >
            What We Do
          </motion.h3>

          <p className="text-indigo-200 max-w-3xl mx-auto text-lg leading-relaxed">
            We help ideas take shape through thoughtful design and efficient
            engineering. Whether it’s a landing page, a dashboard, or a full-scale
            product, we focus on clarity, usability, and consistency.
          </p>
        </section>
        <section className="max-w-6xl w-full mx-auto pb-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-teal-400"
          >
            Core Capabilities
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Galactic Motion",
                description:
                  "Subtle transitions, micro-interactions, and fluid animations powered by Framer Motion.",
                icon: "✨",
              },
              {
                title: "Adaptive Cosmos",
                description:
                  "Fully responsive layouts that adapt seamlessly across devices, from mobile to ultrawide.",
                icon: "📱",
              },
              {
                title: "Astro Design",
                description:
                  "A modern dark theme with depth, gradients, and color harmony inspired by sci-fi design.",
                icon: "🎨",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateX: -30, y: 50 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(74, 58, 221, 0.4)",
                }}
                className="bg-gray-800 p-10 rounded-3xl shadow-2xl transition-all duration-300 ease-in-out border border-indigo-700/50 hover:border-teal-500/80"
              >
                <p className="text-4xl mb-4">{feature.icon}</p>
                <h4 className="text-2xl font-bold mb-3 text-white">{feature.title}</h4>
                <p className="text-indigo-300 text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="max-w-5xl mx-auto pb-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-teal-300"
          >
            Our Process
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                title: "Understanding the Vision",
                desc: "We begin by clarifying goals, target users, and success metrics.",
              },
              {
                step: "2",
                title: "Design & Prototyping",
                desc: "High-fidelity layouts, motion studies, and interactive prototypes.",
              },
              {
                step: "3",
                title: "Build & Iterate",
                desc: "We develop, test, refine, and polish — until everything feels right.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                className="p-8 rounded-2xl bg-gray-800 shadow-lg border border-indigo-600/30 hover:border-teal-400/60 transition"
              >
                <div className="text-5xl font-extrabold mb-4 text-teal-400">{item.step}</div>
                <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                <p className="text-indigo-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call To Action */}
        <section className="max-w-4xl mx-auto text-center py-20">
          <motion.h3
            variants={itemVariants}
            className="text-4xl font-bold text-teal-300 mb-6"
          >
            Ready to Build Something Great?
          </motion.h3>

          <p className="text-indigo-200 text-lg mb-10 max-w-2xl mx-auto">
            Whether you're starting fresh or refining an existing idea, we’d love to help shape it into something memorable.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 font-bold rounded-full bg-indigo-500 text-gray-100 shadow-lg hover:bg-indigo-400 transition-all"
          >
            Get Started
          </motion.button>
        </section>
      </div>
    </motion.main>
  );
}
