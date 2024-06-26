import i18next, { type BackendModule, type ReadCallback } from 'i18next';
import { translations } from './translations';
import { derived, writable } from 'svelte/store';

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

export const c = i18next.use(customTransform).init({
	debug: true,
	fallbackLng: 'en',
	initImmediate: false
});

export const locale = writable(i18next.language);
export const locales = ['en', 'jp', 'zhTW'];

export const translate = (locale: string, key: string) => {
	if (!key) throw new Error('No key provided');
	if (!locale) throw new Error('No locale provided');

	let translations = resource(locale);
	let text = translations[key];

	if (!text) throw new Error(`Translation was not found. Locale: ${locale}, Key: ${key}`);

	return text;
};

export const t = derived(locale, ($locale) => (key: string) => translate($locale, key));
