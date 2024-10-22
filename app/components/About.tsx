"use client"

import Modal from "./Modal";
import { useState } from "react"; 
import { useTranslations } from "next-intl";

export default function About() {
    const [open, setOpen] = useState(false);
    const t = useTranslations();

    return (
      <section id="about" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">{t('about.title')}</h2>
          <p className="text-base">
            {t('about.description')}
          </p>
          <button 
            onClick={() => setOpen(true)} 
            className="bg-orange-300 hover:bg-orange-400 text-gray-900 font-bold px-6 py-2 rounded-full transition duration-300 mt-4"
          >
            {t('about.learnMore')}
          </button> 
          <Modal open={open} onOpenChange={setOpen} />
        </div>
      </section>
    );
}