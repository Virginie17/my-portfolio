"use client"

import Modal from "../components/Modal";
import { useState } from "react"; // Importation de useState

export default function About() {
    const [open, setOpen] = useState(false); // État pour gérer l'ouverture de la modal

    return (
      <section id="about" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">À propos de moi</h2>
          <p className="text-base">
            Je suis un développeuse Front-End passionnée par la création d interfaces utilisateur 
            intuitives et esthétiques. J aime travailler sur des projets qui me permettent 
            de créer des applications web performantes et responsives.
            Ce qui me distingue,c'est ma capacité à allier créativité et technique. Je ne me contente pas de coder ; je m'efforce de comprendre les besoins de mes utilisateurs pour concevoir des expériences qui ne sont pas seulement fonctionnelles, mais aussi agréables à utiliser. Chaque projet est pour moi une opportunité d'apprendre et d'innover, et je suis toujours à la recherche de nouvelles façons d'améliorer mes compétences et d'explorer les dernières tendances du développement web.
     En plus de mes compétences techniques, je suis une fervente défenseure de la collaboration et de la communication au sein des équipes. Je crois que le succès d'un projet repose sur une bonne compréhension des objectifs de chacun et sur une synergie entre les membres de l'équipe.
Je suis également passionnée par l'accessibilité et l'inclusivité dans le développement web. Je m'assure que mes créations sont accessibles à tous, indépendamment de leurs capacités, car je crois fermement que le web doit être un espace ouvert et accueillant pour tous.
Si vous recherchez une développeuse qui allie passion, expertise technique et sensibilité aux besoins des utilisateurs, n'hésitez pas à me contacter. Je serais ravie de discuter de vos projets et de voir comment je peux contribuer à leur succès.

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