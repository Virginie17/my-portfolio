"use client"

import Image from 'next/image'; 
import logo from '../../public/assets/img/logo.webp'; 
import { useState } from 'react'; // Importer useState
import emailjs from 'emailjs-com'; // Importer EmailJS

export default function Contact() {
    // État pour les champs du formulaire
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Fonction pour gérer l'envoi du formulaire
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Empêche le rechargement de la page

        // Créez un objet avec les données du formulaire
        const formData = {
            name,
            email,
            message,
        };

        // Utilisez EmailJS pour envoyer l'email
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
            .then((response) => {
                console.log('Message envoyé avec succès!', response.status, response.text);
                // Réinitialiser le formulaire
                setName('');
                setEmail('');
                setMessage('');
                alert('Message envoyé avec succès !');
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi du message:', error);
                alert('Erreur lors de l\'envoi du message.');
            });
    };

    return (
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto flex items-center">
          <div className="flex-shrink-0 mr-8"> 
            <Image src={logo} alt="Logo" width={300} height={300} /> 
          </div>
          <div className="flex-grow">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">Contactez-moi</h2>
            <form className="max-w-lg mx-auto" onSubmit={handleSubmit}> {/* Ajout de onSubmit */}
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">Nom</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full p-2 rounded bg-gray-700" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} // Mise à jour de l'état
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
                  onChange={(e) => setEmail(e.target.value)} // Mise à jour de l'état
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
                  onChange={(e) => setMessage(e.target.value)} // Mise à jour de l'état
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-orange-300 hover:bg-orange-400 text-gray-900 font-bold px-6 py-2 rounded-full transition duration-300 mb-8"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>
    );
}