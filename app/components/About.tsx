"use client"

import Modal from "../components/Modal";
import { useState } from "react"; // Importation de useState

export default function About() {
    const [open, setOpen] = useState(false); // État pour gérer l'ouverture de la modal

    return (
      <section id="about" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">À propos de moi</h2>
          <p className="text-xl">
            Je suis un développeuse Front-End passionnée par la création d interfaces utilisateur 
            intuitives et esthétiques. J aime travailler sur des projets qui me permettent 
            de créer des applications web performantes et responsives.
          </p>
          <button 
            onClick={() => setOpen(true)} 
            className="bg-orange-300 hover:bg-orange-400 text-gray-900 font-bold px-6 py-2 rounded-full transition duration-300 mt-4"
          >
            En savoir plus
          </button> {/* Bouton pour ouvrir la modal */}
          <Modal open={open} onOpenChange={setOpen} /> {/* Passer l'état à la modal */}
        </div>
      </section>
    );
}