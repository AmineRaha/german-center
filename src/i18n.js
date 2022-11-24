import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['de','ar'],
    fallbackLng: "de",
    detection:{
        order: ['cookie','htmlTag','querystring', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
        caches: ['cookie'],
    },
    backend:{
<<<<<<< Updated upstream
        loadPath: './assets/locales/{{lng}}/translation.json',
=======
        loadPath: '/german-center/assets/locales/{{lng}}/translation.json',
>>>>>>> Stashed changes
        
    },
  });
  console.log(i18n);


export default i18n;