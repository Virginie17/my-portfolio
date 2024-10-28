"use client";

import Modal from "./Modal";
import { useState } from "react"; 
import { useTranslations } from "next-intl";

export default function About() {
    const [open, setOpen] = useState(false);
    const t = useTranslations();

    return (
      <section id="about" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">{t('about.title')}</h2>
          <p className="text-base leading-relaxed mb-6 text-center text-white">
            {t('about.description').split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <div className="text-center">
            <button 
              onClick={() => setOpen(true)} 
              className="bg-orange-300 hover:bg-orange-400 text-gray-900 font-bold px-6 py-2 rounded-full transition duration-300 mt-4"
            >
              {t('about.learnMore')}
            </button> 
          </div>
          <Modal open={open} onOpenChange={setOpen} />
        </div>
      </section>
    );
}