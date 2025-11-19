"use client";

import Navbar from "../navbar/navbar";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-8 py-6 backdrop-blur-lg bg-gray-900/40 dark:bg-gray-900/40 border-b border-gray-700/40">
      <h1 className="text-2xl font-bold tracking-wide">Open Source</h1>

      <div className="flex items-center gap-8">
        <Navbar />
      </div>
    </header>
  );
}
