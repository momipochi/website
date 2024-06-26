import i18next, { type BackendModule, type ReadCallback } from 'i18next';
import { translations } from './translations';
import { derived, writable } from 'svelte/store';
import LanguageDetector from 'i18next-browser-languagedetector';

export const locales = ['en', 'jp', 'zh-TW'];
const resource = (language: string) => {
	return Object.keys(translations).reduce(
		(acc, key) => {
			if (translations[key][language]) {
				acc[key] = translations[key][language];
			}
			return acc;
		},
		{} as Record<string, string>
	);
};

const customTransform: BackendModule = {
	read: (language: string, namespace: string, callback: ReadCallback) => {
		callback(null, resource(language));
	},
	type: 'backend',
	init: () => {}
};

i18next
	.use(customTransform)
	.use(LanguageDetector)
	.init({
		detection: {
			order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
			lookupQuerystring: 'lng',
			lookupCookie: 'i18next',
			lookupLocalStorage: 'i18nextLng',
			lookupSessionStorage: 'i18nextLng',

			// cache user language
			caches: ['localStorage'],
			excludeCacheFor: ['cimode']
			//cookieMinutes: 10,
			//cookieDomain: 'myDomain'
		},
		debug: true,
		fallbackLng: 'en',
		initImmediate: false,
		supportedLngs: locales
	});

export const locale = writable(i18next.language);

export const translate = (locale: string, key: string) => {
	if (!key) throw new Error('No key provided');
	if (!locale) throw new Error('No locale provided');

	let translations = resource(locale);
	let text = translations[key];

	if (!text) throw new Error(`Translation was not found. Locale: ${locale}, Key: ${key}`);

	return text;
};

export const t = derived(locale, ($locale) => (key: string) => translate($locale, key));
