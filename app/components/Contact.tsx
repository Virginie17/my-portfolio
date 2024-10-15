// app/components/Contact.tsx
"use client"

import Image from 'next/image'; 
import logo from '../../public/assets/img/logo.webp'; 
import { useState } from 'react'; 

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // État pour le chargement
    const [error, setError] = useState(''); // État pour les erreurs

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Démarrer le chargement
        setError(''); // Réinitialiser l'erreur

        const formData = {
            name,
            email,
            message,
        };

        try {
            const response = await fetch('http://localhost:3000/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Email envoyé avec succès!');
                setName('');
                setEmail('');
                setMessage('');
                alert('Message envoyé avec succès !');
            } else {
                throw new Error('Erreur lors de l\'envoi de l\'email.');
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            setError('Erreur lors de l\'envoi de l\'email.');
        } finally {
            setLoading(false); // Arrêter le chargement
        }
    };

    return (
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto flex items-center">
          <div className="flex-shrink-0 mr-8"> 
            <Image src={logo} alt="Logo" width={300} height={300} /> 
          </div>
          <div className="flex-grow">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">Contactez-moi</h2>
            <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Nom</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full p-2 rounded bg-gray-700" 
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
                  className="w-full p-2 rounded bg-gray-700" 
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
                  className="w-full p-2 rounded bg-gray-700" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  required
                ></textarea>
              </div>
              {error && <p className="text-red-500">{error}</p>} {/* Afficher l'erreur */}
              <button 
                type="submit" 
                className={`bg-orange-300 hover:bg-orange-400 text-gray-900 font-bold px-6 py-2 rounded-full transition duration-300 mb-8 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading} // Désactiver le bouton pendant le chargement
              >
                {loading ? 'Envoi...' : 'Envoyer'}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
}