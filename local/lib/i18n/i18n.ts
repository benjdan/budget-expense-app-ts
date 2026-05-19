import I18n from 'i18n-js';
import * as Localization from 'expo-localization';
import en from './translations/en.json';
import es from './translations/es.json';

I18n.translations = {
  en,
  es,
};

I18n.locale = Localization.getLocales()[0].languageCode || 'en';

I18n.enableFallback = true;

I18n.defaultLocale = 'en';

export const setLanguage = (language: string) => {
  I18n.locale = language;
};

export const getLanguage = () => I18n.locale;

export const getAvailableLanguages = () => [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
];

export default I18n;
