"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const socials = [
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Vimeo", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Wire this up to your own endpoint (e.g. Formspree, Resend, a Next.js
    // route handler, or a Sanity mutation) — this just simulates a send.
    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("sent");
  };

  return (

    <main className="bg-ink">
        <Navbar/>

        <section
      id="contact"
      className="mx-auto max-w-content px-6 py-28 md:px-10 md:py-36"
    >
      {/* Section header — same motif as StoriesSection */}
      <motion.div
        className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-red" />
            <span className="text-[10px] font-semibold tracking-[0.3em] text-paper/45">
              GET IN TOUCH
            </span>
          </div>

          <h2 className="max-w-xl font-poppins text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-paper md:text-6xl">
            Have a story
            <br />
            <span className="font-italiana text-5xl md:text-7xl">
              worth telling?
            </span>
          </h2>
        </div>

        <p className="max-w-xs text-sm leading-relaxed text-paper/45 md:pb-1">
          Open to documentary commissions, creative collaborations, speaking
          engagements and interesting ideas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Field
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
          <Field
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          <Field
            label="Message"
            name="message"
            as="textarea"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about the story, project or idea…"
          />

          <div className="flex items-center gap-6 pt-2">
            <button
              type="submit"
              disabled={status !== "idle"}
              className="group inline-flex items-center gap-3 rounded-lg bg-red px-9 py-4 font-poppins text-xs font-bold tracking-[0.2em] text-paper transition-opacity disabled:opacity-60"
            >
              {status === "idle" && "SEND MESSAGE"}
              {status === "sending" && "SENDING…"}
              {status === "sent" && "MESSAGE SENT"}
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>

            {status === "sent" && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs tracking-wide text-paper/45"
              >
                Thanks — I&rsquo;ll get back to you shortly.
              </motion.span>
            )}
          </div>
        </motion.form>

        {/* Contact details */}
        <motion.div
          className="flex flex-col gap-12 lg:pt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col gap-3 border-t border-paper/10 pt-6">
            <span className="text-[9px] font-semibold tracking-[0.28em] text-paper/35">
              EMAIL
            </span>
            <a
              href="mailto:hello@ifiokettang.com"
              className="text-lg tracking-tight text-paper transition-colors hover:text-red md:text-xl"
            >
              hello@ifiokettang.com
            </a>
          </div>

          <div className="flex flex-col gap-3 border-t border-paper/10 pt-6">
            <span className="text-[9px] font-semibold tracking-[0.28em] text-paper/35">
              BASED IN
            </span>
            <p className="text-lg tracking-tight text-paper md:text-xl">
              Abuja, Nigeria
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t border-paper/10 pt-6">
            <span className="text-[9px] font-semibold tracking-[0.28em] text-paper/35">
              FOLLOW
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-sm tracking-wide text-paper/60 transition-colors hover:text-red"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer/>


    </main>

    
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  as = "input",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  type?: string;
  as?: "input" | "textarea";
}) {
  const sharedClasses =
    "w-full border-b border-paper/15 bg-transparent pb-3 text-lg tracking-tight text-paper placeholder:text-paper/25 focus:border-red focus:outline-none transition-colors";

  return (
    <label className="flex flex-col gap-3">
      <span className="text-[9px] font-semibold tracking-[0.28em] text-paper/45">
        {label.toUpperCase()}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          rows={4}
          className={`${sharedClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className={sharedClasses}
        />
      )}
    </label>
  );
}
