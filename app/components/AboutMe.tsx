"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaRegEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Skills from "./Skills";

export default function AboutMe() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-violet-200 via-pink-200 to-yellow-200 flex items-center justify-center p-4"
    >
      <div className="container mx-auto">
        <motion.div
          className="bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-2xl px-8 pt-10 pb-20 max-w-6xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="profile-area text-center">
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="avatar mx-auto">
                  <div className="w-40 rounded-3xl">
                    <img src="/profile-picture.jpg" alt="picture of me" />
                  </div>
                </div>
              </motion.div>
              <motion.h1
                className="text-4xl font-bold mb-2 text-violet-600 mt-5 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Tahmid Emam
              </motion.h1>
              <motion.h2
                className="text-2xl mb-4 text-pink-500 text-center text-balance"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Software Engineer ( full-stack )
              </motion.h2>
              <motion.p
                className="text-lg mb-6 text-gray-700 text-balance"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                I&apos;m a self-taught full-stack developer and love to work on
                the front-end design.
              </motion.p>
              <motion.div
                className="flex space-x-4 sm:ml-[33%] md:ml-[20%] lg:ml-[30%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="https://github.com/tahmid0111"
                  target="_blank"
                  className="text-violet-600 hover:text-violet-800 transition-colors"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <FaGithub className="text-4xl" />
                </motion.a>
                <motion.a
                  href="https://x.com/tahmid_emam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 hover:text-violet-800 transition-colors"
                  aria-label="Twitter"
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <FaXTwitter className="text-4xl" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/tahmid-emam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 hover:text-violet-800 transition-colors"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <FaLinkedin className="text-4xl" />
                </motion.a>
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=0.1tahmidemam@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 hover:text-violet-800 transition-colors"
                  aria-label="Gmail"
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <FaRegEnvelope className="text-4xl" />
                </motion.a>
              </motion.div>
              <motion.div
              className="mt-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a href="https://www.loom.com/share/feef1533aeb94a9b9d81e4c681ccaed2?sid=84ea80fb-53ec-4c89-9bb4-2986c57a38aa" 
                target="_black"
                className="btn btn-wide btn-warning text-lg">Video Introduction</a>
              </motion.div>
            </div>
            <Skills />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
