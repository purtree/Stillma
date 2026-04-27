"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 md:px-12 min-h-screen">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-2xl w-full mx-auto flex flex-col items-center text-center"
      >
        {/* Logo */}
        <motion.div variants={fadeUp} className="mb-24 md:mb-32">
          <h1 className="text-3xl md:text-5xl font-light tracking-widest text-brand-text mb-4">
            STILLMA
          </h1>
          <p className="text-xl md:text-2xl text-brand-muted font-light tracking-widest">
            間 MA
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl font-light tracking-wide text-brand-text mb-24 md:mb-32"
        >
          Experience less. Live more.
        </motion.p>

        {/* Form */}
        <motion.div variants={fadeUp} className="w-full max-w-sm mb-24 md:mb-32">
          {submitted ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-sm md:text-base text-brand-muted font-light"
            >
              Thank you. We will welcome you in silence soon.
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
              <input
                type="email"
                required
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                disabled={isLoading}
                className="w-full bg-transparent border-b border-brand-border py-3 text-center text-brand-text placeholder:text-brand-muted focus:outline-none focus:border-brand-text transition-colors duration-500 font-light disabled:opacity-50"
              />
              {error && (
                <p className="text-xs text-brand-error font-light -mt-4">{error}</p>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="text-xs tracking-widest uppercase text-brand-muted hover:text-brand-text transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "..." : "Notify me"}
              </button>
            </form>
          )}
        </motion.div>

        {/* Footer */}
        <motion.p
          variants={fadeUp}
          className="text-[10px] md:text-xs tracking-widest uppercase text-brand-muted"
        >
          Coming Soon
        </motion.p>
      </motion.div>
    </main>
  );
}
