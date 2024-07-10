<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
	import TerminalNavigation from './TerminalNavigation.svelte';
	import { page } from '$app/stores';
	import { t } from '$lib/internationalization/localize';
	import './styles.css';
	import { epilepsy } from './../store';
	import { locale, locales } from '$lib/internationalization/localize';
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
		<div class="header-bar">
			<span id="current-path" lang={$locale}>
				{$t('user@terminal')}:{$t($page.url.pathname)}$
			</span>
			<div class="language-selector">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					fill="currentColor"
					class="bi bi-globe"
					viewBox="0 0 16 16"
				>
					<path
						d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"
					/>
				</svg>

				<select bind:value={$locale}>
					{#each locales as l}
						<option value={l}>{l}</option>
					{/each}
				</select>
			</div>
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
	.header-bar {
		display: flex;
		padding: 15px 0 0 15px;
	}
	.language-selector {
		display: flex;
		margin: 0 0 0 auto;
		margin-right: 20px;
	}
	.epilepsy {
		animation: crt-output 10ms infinite;
	}
	#current-path {
		color: rgb(48, 189, 48);
	}
	.terminal-nav {
		width: 10%;
	}
	.main-content {
		display: flex;
		width: 90%;
		height: 90%;
	}
	.content {
		display: flex;
		width: 100%;
		height: 100%;
		padding: 0 20px 20px 20px;
		margin: 0 auto 0 auto;
	}

	#app-container {
		display: flex;
		width: 100%;
		height: 100%;
		padding: 10px;
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
