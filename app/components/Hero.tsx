import Image from 'next/image';
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-sky-400 mb-4">{t('hero.title')}</h1>
        <p className="text-2xl mb-8 text-white">{t('hero.subtitle')}</p>
        <a href="#contact"> 
        </a>
        <div className="mt-20 w-52 h-52 rounded-full overflow-hidden mx-auto">
          <Image
            src="/assets/img/photo.webp"
            alt="Virginie Chaffard"
            width={200}
            height={200}
            className="object-cover w-full h-full" 
          />
        </div>
      </div>
    </section>
  );
}