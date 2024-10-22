import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Virginie Chaffard. {t('footer.allRightsReserved')}</p>
        <div className="mt-4">
          <a href="https://github.com/Virginie17/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-blue-500">
            <FontAwesomeIcon icon={faGithub} aria-hidden="true" style={{ fontSize: '24px', color: 'white' }} /> 
          </a>
          <a href="https://www.linkedin.com/in/virginie-chaffard-lucon-327b712a3/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-blue-500">
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" style={{ fontSize: '24px', color: 'white' }} /> 
          </a>
        </div>
      </div>
    </footer>
  );
}