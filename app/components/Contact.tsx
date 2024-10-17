"use client";

import Image from 'next/image';
import { useState } from 'react';
import logo from '../../public/assets/img/logo.webp';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error(data.error || 'Erreur lors de l\'envoi de l\'email.');
      }
    } catch (error) {
      setError(`Erreur: ${(error as Error).message}`);
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
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Contactez-moi</h2>
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 rounded bg-gray-700 text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 rounded bg-gray-700 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-2 rounded bg-gray-700 text-white"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">Message envoyé avec succès !</p>}
            <button
              type="submit"
              className={`bg-orange-300 hover:bg-orange-400 text-gray-900 font-bold px-6 py-2 rounded-full transition duration-300 mb-8 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Envoi...' : 'Envoyer'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}