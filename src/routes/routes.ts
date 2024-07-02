import { base } from '$app/paths';
import { locale } from '$lib/internationalization/localize';

export type RouteTpye = {
	url: string;
	name: string;
};

let resume = 'resume';
// locale.subscribe((value) => {
// 	switch (value) {
// 		case 'jp':
// 			resume = 'Japanese CV';
// 			break;
// 		case 'zh-TW':
// 		case 'en':
// 		default:
// 			resume = 'myresume';
// 			break;
// 	}
// });

export const Routes: RouteTpye[] = [
	{ url: `${base}/`, name: 'home' },
	{ url: `${base}/projects`, name: 'projects' },
	// { url: `${base}/games`, name: 'games' }
	{ url: `${base}/${resume}.pdf`, name: 'resume' }
];
