<script lang="ts">
	import { page } from '$app/stores';
	import { isSamePath } from '$lib/utils';
	import { Routes } from './routes';
</script>

<div id="nav-container">
	{#each Routes as route}
		<a
			class="terminal-nav"
			class:current-url={isSamePath($page.url.pathname, route.url)}
			href={route.url}
		>
			{#if isSamePath($page.url.pathname, route.url)}
				<span>>{route.name}</span>
			{:else}
				<span>&nbsp;{route.name}</span>
			{/if}
		</a>
	{/each}
</div>

<style>
	#nav-container {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.terminal-nav {
		display: block;
	}
	.terminal-nav:hover {
		background-color: rgb(60, 86, 94);
	}
</style>
