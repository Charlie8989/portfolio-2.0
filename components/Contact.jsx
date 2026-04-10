import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const contactIcons = [
    { icon: FaEnvelope, href: "mailto:ayush@example.com", label: "Email", type: "icon" },
    { icon: "/images/github.png", href: "#", label: "GitHub", type: "image" },
    { icon: "/images/linkdein.png", href: "#", label: "LinkedIn", type: "image" },
    // { icon: FaInstagram, href: "#", label: "Instagram", type: "icon" },
  ];

  return (
    <div className="w-full bg-transparent border-t border border-black/10 py-20 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-3">
            Let's <span style={{ color: "#FF6900" }}>Connect</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Let's build something great together.
          </p>
        </motion.div>

        {/* Icons */}
        <motion.div
          className="flex justify-center items-center gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {contactIcons.map((contact, idx) => {
            return (
              <motion.a
                key={idx}
                href={contact.href}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                {contact.type === "image" ? (
                  <img 
                    src={contact.icon} 
                    alt={contact.label}
                    className="w-10 h-10 object-contain transition-transform duration-300 hover:scale-110"
                  />
                ) : (
                  <div 
                    className="text-4xl transition-colors duration-300 hover:scale-110"
                    style={{ color: "#FF6900" }}
                  >
                    <contact.icon />
                  </div>
                )}
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:ayush@example.com"
            className="text-black font-semibold py-3 px-8 rounded-lg text-base border-2 transition-all duration-300 hover:scale-105"
            style={{ borderColor: "#FF6900", color: "#FF6900" }}
            whileHover={{
              backgroundColor: "#FF6900",
              color: "#F5F4F3",
            }}
          >
            Get Resume
          </motion.a>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          className="text-center text-gray-500 text-xs sm:text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          2026 © Ayush Sahu. All rights reserved.
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;