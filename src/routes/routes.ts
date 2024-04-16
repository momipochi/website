import { base } from '$app/paths';

export type RouteTpye = {
	url: string;
	name: string;
};

export const Routes: RouteTpye[] = [
	{ url: `${base}/`, name: 'home' },
	{ url: `${base}/projects`, name: 'projects' },
	{ url: `${base}/games`, name: 'games' }
];
