"use client";

import Image from "next/image";
import React from "react";
import portrait from "@/public/1.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useI18nContext } from "@/context/i18n-context";

export default function Intro() {
  const { language, t } = useI18nContext();
  const { ref } = useSectionInView(language === "en" ? "Home" : "Inicio", 0.5);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col justify-center gap-2 sm:h-[100vh] pb-[12%] max-w-[61rem] text-center sm:mt-7 sm:mb-0 scroll-mt-28"
    >
      <div  className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.8 }}
          >
            <Image
              src={portrait}
              alt="Amir Mehmood portrait"
              width={292}
              height={292}
              quality={100}
              priority={true}
              // style={{marginTop:'12rem !important' }}
              className="h-64 w-64 shadow-x1"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col mb-10 mt-4 px-1 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-5xl"
      >
        <span>{t("intro.greeting")}</span>
        <h1>{t("intro.heading")}</h1>
        <p className="text-xl font-light pt-6">{t("intro.main")}</p>
        <p className="text-xl font-light pt-2">{t("intro.second")}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          onClick={() => {
            setTimeOfLastClick(Date.now());
            setActiveSection("Contact");
          }}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 hover:z-10 transition active:scale-105 cursor-pointer borderBlack backdrop-blur-[0.5rem]"
        >
          {t("intro.contactButton")}{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
           href={language === "es" ? "/es/Amir Mahmood-CV.pdf" : "/en/Amir Mahmood-CV.pdf"}
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:z-10 transition active:scale-105 cursor-pointer borderBlack dark:bg-white/10 backdrop-blur-[0.5rem]"
        >
          {t("intro.downloadCV")}{" "}
          <HiDownload className="opacity-60 group-hover:translate-x-1 transition" />
        </a>

        <div className="flex items-center justify-center gap-2">
          <a
            href="https://www.linkedin.com/in/amir-mahmood-46741574/"
            target="_blank"
            aria-label="LinkedIn"
            className="bg-white p-4 text-gray-700 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/90 backdrop-blur-[0.5rem]"
          >
            <BsLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
