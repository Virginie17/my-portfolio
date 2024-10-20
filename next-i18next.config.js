// next-i18next.config.js
import path from 'path';

const i18nConfig = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
  localePath: path.resolve('./public/locales'),
};

export default i18nConfig; // Exporting the variable