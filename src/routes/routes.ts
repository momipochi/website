import { page } from '$app/stores';

export type RouteTpye = {
	url: string;
	name: string;
};

export const Routes: RouteTpye[] = [
	{ url: '/website/', name: 'home' },
	{ url: '/website/projects', name: 'projects' },
	{ url: '/website/games', name: 'games' }
];
