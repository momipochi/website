import { writable, type Writable } from 'svelte/store';

export const epilepsy: Writable<boolean> = writable(true);
