<script lang="ts">
	import type { SimpleIcon } from 'simple-icons';

	export let data: SimpleIcon;
	export let size: string | number = 24;
</script>

<svg
	class="onhover"
	role="img"
	viewBox="0 0 24 24"
	width={size}
	height={size}
	xmlns="http://www.w3.org/2000/svg"
	fill="currentColor"
>
	<title>{data.title}</title>
	<path d={data.path}></path>
</svg>

<style>
	.onhover:hover {
		background-color: rgb(117, 141, 156);
	}
</style>
