<script lang="ts">
	import { projects } from './projects';
	import GitProjectCard from '$lib/components/GitProjectCard.svelte';
	import SlidingProjects from '$lib/components/SlidingProjectCardContainer.svelte';
</script>

<div>
	<div class="title">Some of my projects</div>
	<div class="project-container">
		<div class="git-projects">
			{#each projects as project}
				<div>
					<GitProjectCard {project} />
				</div>
			{/each}
		</div>
	</div>
</div>

<!-- <div>
	<SlidingProjects />
</div> -->

<style>
	.title {
		display: flex;
		margin: 0 auto 10px 0;
	}
	.project-container {
		flex-direction: column;
		display: flex;
		margin: auto;
		overflow-y: auto;
		height: 100%;
	}
	.git-projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
		gap: 1em;
	}
	.project-container::-webkit-scrollbar {
		width: 6px;
	}

	.project-container::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px grey;
		border-radius: 10px;
	}

	.project-container::-webkit-scrollbar-thumb {
		background: var(--color-theme-1);
		border-radius: 10px;
	}

	.project-container::-webkit-scrollbar-thumb:hover {
		background: #b30000;
	}
</style>
