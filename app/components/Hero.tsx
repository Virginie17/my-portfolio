import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-sky-400 mb-4">Virginie Chaffard</h1>
        <p className="text-2xl mb-8 text-white">Développeuse Front-End</p>
        <a href="#contact"> {/* Lien ancré vers la section contact */}
          <button className="bg-orange-300 hover:bg-orange-400 text-gray-900 font-bold px-6 py-2 rounded-full transition duration-300 mb-8">
            Contactez-moi
          </button>
        </a>
        <div className="mt-8 w-52 h-52 rounded-full overflow-hidden mx-auto"> {/* Conteneur circulaire */}
          <Image
            src="/assets/img/photo.jpg"
            alt="Virginie Chaffard"
            width={200}
            height={200}
            className="object-cover w-full h-full" // Remplir le conteneur
          />
        </div>
      </div>
    </section>
  );
}