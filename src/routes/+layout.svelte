<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';

	import TerminalNavigation from './TerminalNavigation.svelte';
	import { page } from '$app/stores';
	import './styles.css';
	import { epilepsy } from './../store';
	function toggleEpilepsy() {
		epilepsy.set(!$epilepsy);
		console.log($epilepsy.valueOf());
	}
</script>

<div class="app" class:epilepsy={$epilepsy}>
	<div class="glow noclick"></div>
	<div class="screen-tide noclick"></div>
	<div class="scanlines noclick"></div>
	<div class="grany noclick"></div>
	<PageTransition url={$page.url.pathname}>
		<div id="current-path">
			user@terminal:{$page.url.pathname}$
		</div>
		<!-- <div id="epilepsy-toggle" on:click={toggleEpilepsy} aria-hidden="true">disable flashing</div> -->
		<div id="app-container">
			<div class="terminal-nav"><TerminalNavigation /></div>
			<div class="content">
				<main class="main-content">
					<slot />
				</main>
			</div>
		</div>
	</PageTransition>
	<!-- <Header/> -->
	<!-- 

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>

<style>
	.epilepsy {
		animation: crt-output 10ms infinite;
	}
	#current-path {
		color: rgb(48, 189, 48);
		padding: 1% 0 0 1%;
	}
	.terminal-nav {
		width: 10%;
	}
	.main-content {
		display: flex;
		margin: 0 auto 0 auto;
	}
	.content {
		display: flex;
		width: 80%;
		height: 90%;
		padding: 0 2% 2% 2%;
		margin: 0 auto 0 auto;
	}

	#app-container {
		display: flex;
		width: 100%;
		height: 100%;
		padding: 1%;
	}
	#epilepsy-toggle {
		display: inline-flex;
		margin: 1%;
		text-decoration: underline;
	}
	#epilepsy-toggle:hover {
		cursor: pointer;
		background-color: rgb(60, 86, 94);
	}
</style>
