"use client";

import Image from 'next/image';
import { useState, useRef } from 'react';
import logo from '../../public/assets/img/logo.webp';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const  t = useTranslations();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
        if (
            nameRef.current &&
            emailRef.current &&
            messageRef.current
        ) {
            const contactData = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                message: messageRef.current.value,
            };

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });

            if (response.ok) {
                setSuccess(true);
                nameRef.current.value = "";
                emailRef.current.value = "";
                messageRef.current.value = "";
            } else {
                const errorData = await response.json();
                console.error("Une erreur est survenue : ", errorData.message || response.statusText);
                setError(`Erreur: ${errorData.message || response.statusText}`);
            }
        }
    } catch (error) {
        setError(`Erreur: ${(error as Error).message}`);
        console.error("Erreur pendant l'envoi : ", error);
    } finally {
        setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8">
          <Image src={logo} alt="Logo" width={300} height={300} />
        </div>
        <div className="flex-grow w-full md:w-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">{t('contact.title')}</h2>
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">{t('contact.name')}</label>
              <input
                ref={nameRef}
                type="text"
                id="name"
                name="name"
                className="w-full p-2 rounded bg-gray-700 text-white"
                required
                defaultValue=""
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">{t('contact.email')}</label>
              <input
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                className="w-full p-2 rounded bg-gray-700 text-white"
                required
                defaultValue=""
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">{t('contact.message')}</label>
              <textarea
                ref={messageRef}
                id="message"
                name="message"
                rows={4}
                className="w-full p-2 rounded bg-gray-700 text-white"
                required
                defaultValue=""
              ></textarea>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{t('contact.successMessage')}</p>}
            <button
              type="submit"
              className={`bg-orange-300 hover:bg-orange-400 text-gray-900 font-bold px-6 py-2 rounded-full transition duration-300 mb-8 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? t('contact.sending') : t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}