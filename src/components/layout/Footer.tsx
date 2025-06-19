"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="fixed bottom-0 left-0 w-full z-40 bg-black border-t border-neutral-800 backdrop-blur-md px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          {/* Navigation links */}
          <div className="flex gap-6">
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/contact" className="hover:text-white transition">Contact Us</a>
          </div>

          <p className="text-xs text-center sm:text-left">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Social media */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/arkmercury/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Twitter (X)"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebook size={18} />
            </a>
          </div>
        </div>
      </motion.footer>

      {/* Scroll to Top Button */}
      {visible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-50 p-3 bg-yellow-500 text-black rounded-full shadow-md hover:bg-yellow-400 transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
