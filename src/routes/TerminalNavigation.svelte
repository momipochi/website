<script lang="ts">
	import { page } from '$app/stores';
	import { isSamePath } from '$lib/utils';
</script>

<div>
	<div id='current-path' >
		usr@terminal:{$page.url.pathname}$
	</div>
	<a class="terminal-nav" class:current-url={isSamePath($page.url.pathname, '/')} href="/">
		{#if isSamePath($page.url.pathname, '/')}
			<span>>home</span>
		{:else}
			<span>&nbsp;home</span>
		{/if}
	</a>

	<a
		class="terminal-nav"
		class:current-url={isSamePath($page.url.pathname, '/projects')}
		href="/projects"
	>
		{#if isSamePath($page.url.pathname, '/projects')}
			<span>>projects</span>
		{:else}
			<span>&nbsp;projects</span>
		{/if}
	</a>

	<a
		class="terminal-nav"
		class:current-url={isSamePath($page.url.pathname, '/games')}
		href="/games"
	>
		{#if isSamePath($page.url.pathname, '/games')}
			<span>>games</span>
		{:else}
			<span>&nbsp;games</span>
		{/if}
	</a>
</div>

<style>
	.current-url {
		background-color: rgb(177, 221, 233);
	}
	.terminal-nav {
		display: block;
	}
	.terminal-nav:hover {
		background-color: rgb(159, 231, 253);
	}
	#current-path{
		color: rgb(48, 189, 48);
	}
</style>
