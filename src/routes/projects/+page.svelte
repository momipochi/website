<script lang="ts">
	import { projects } from './projects';
	import GitProjectCard from '$lib/components/GitProjectCard.svelte';
	import SlidingProjects from '$lib/components/SlidingProjectCardContainer.svelte';
	import { t } from '$lib/internationalization/localize';
</script>

<div class="project-page">
	<div class="title">{$t('some_of_my_projects')}</div>
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
	.project-page {
		display: flex;
		margin: 0 auto 0 auto;
		flex-direction: column;
	}
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
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
	.git-projects img {
		max-height: 200px; /* or whatever height you want */
		object-fit: cover;
		width: 100%;
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
