import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import EnglishTranslations from "./assets/i18n/translation.en.json";
import SpanishTranslations from "./assets/i18n/translation.es.json";
import PortugueseTranslations from "./assets/i18n/translation.pt.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
	en: {
		translation: EnglishTranslations,
	},
	pt: {
		translation: PortugueseTranslations,
	},
	es: {
		translation: SpanishTranslations,
	},
};

console.log("Current locale:", Intl.NumberFormat().resolvedOptions().locale);

i18n
	.use(LanguageDetector)
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		supportedLngs: ["en", "es", "pt"],
		resources,
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
