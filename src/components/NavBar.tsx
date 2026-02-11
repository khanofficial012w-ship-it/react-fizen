"use client";

import { motion } from "framer-motion";
import React from "react";

type NavLink = {
  label: string;
  href: string;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Navbar: React.FC = () => {
  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "All pages", href: "/pages" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full  bg-white"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-mono text-gray-900 "
        >
          FIZENS
        </motion.h1>

        {/* Nav Links */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden items-center space-x-8 md:flex bg-gray-100 py-3 px-5 rounded-full"
        >
          {navLinks.map((link) => (
            <motion.li
              key={link.href}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <a
                href={link.href}
                className="group text-lg  font-medium text-gray-600 transition-colors duration-300 hover:text-black"
              >
                {link.label}

                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="rounded-full bg-blue-600 px-6 py-2 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700"
        >
          Get Template
        </motion.button>
      </nav>
    </motion.header>
  );
};

export default Navbar;
