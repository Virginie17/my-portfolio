import { Metadata } from 'next';
import './globals.css';
import { useTranslation } from 'next-i18next';

export const metadata: Metadata = {
  title: 'Votre Portfolio',
  description: 'Portfolio de Virginie Chaffard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation('common'); // Utilisez le hook pour accéder aux traductions

  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <header>
          <h1>{t('header.title')}</h1> {/* Exemple d'utilisation de la traduction */}
        </header>
        {children}
        <footer>
          <p>{t('footer.text')}</p> {/* Exemple d'utilisation de la traduction */}
        </footer>
      </body>
    </html>
  );
}