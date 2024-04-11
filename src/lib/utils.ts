export function normalizeUrl(url: string) {
	return url.endsWith('/') ? url.slice(0, -1) : url;
}

export function isSamePath(a: string, b: string) {
	return normalizeUrl(a) === normalizeUrl(b);
}
