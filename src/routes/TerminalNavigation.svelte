<script lang="ts">
	import { page } from '$app/stores';
	import { isSamePath } from '$lib/utils';
</script>

<div>
	<a class="terminal-nav" class:current-url={isSamePath($page.url.pathname, '/')} href="/">
		{isSamePath($page.url.pathname, '/') ? '>' : ' '}home
	</a>

	<a
		class="terminal-nav"
		class:current-url={isSamePath($page.url.pathname, '/projects')}
		href="/projects">{isSamePath($page.url.pathname, '/projects') ? '>' : ' '}projects</a
	>

	<a class="terminal-nav" class:current-url={isSamePath($page.url.pathname, '/games')} href="/games"
		>{isSamePath($page.url.pathname, '/games') ? '>' : ' '}games</a
	>
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
</style>
