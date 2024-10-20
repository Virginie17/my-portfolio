'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import data from '../../../public/data.json';

export default function Projects() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Mes Projets</h2>
        {domLoaded && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {data.projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                  <Image src={project.image} alt={project.name} width={400} height={300} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.name}</h3>
                    <p className="text-gray-300 mb-4 h-24 overflow-hidden">{project.texte}</p>
                    <div className="flex justify-between items-center">
                      <Link href={project.url} className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                        Voir le projet
                      </Link>
                      <span className="text-sm text-gray-400">{project.category}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}