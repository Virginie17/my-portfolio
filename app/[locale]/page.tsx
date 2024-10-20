import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; // Importation pour les traductions
import RootLayout from './layout'; // Importation du layout
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])), // Chargement des traductions
  },
});

function Home() {
  return (
    <RootLayout>
      <main className="bg-gray-900 text-white">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </RootLayout>
  );
}

export default Home; // Exportation de la fonction Home