<script lang="ts">
	import { siGithub } from 'simple-icons';
	import { WIPTypes, type ProjectType } from '../../routes/projects/projects';
	import SimpleIcon from './SimpleIcon.svelte';
	import TagCard from './TagCard.svelte';

	export let project: ProjectType;
</script>

<div class="container">
	<div class="index99 upper">
		{#if project.wip?.type === WIPTypes.WIP}
			<span class="wip wip-type">{project.wip.msg}</span>
		{:else if project.wip?.type === WIPTypes.INDEFINITE}
			<span class="indefinite wip-type">{project.wip.msg}</span>
		{/if}
		<a href={project.url} target="_blank" class="index99 image">
			<img class="index99" src={project.image.src} alt={project.image.alt} />
		</a>
	</div>
	<h3 class="title">
		{project.title}
	</h3>
	<span class="spacer"></span>
	<div class="below-img">
		<span class="description">{project.description}</span>

		<div class="footer">
			<div class="left">
				<TagCard tags={project.technologies} />
			</div>
			<span class="spacer"></span>
			<div class="right">
				<a href={project.url} target="_blank">
					<SimpleIcon data={siGithub} size="1.5em" />
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	:root {
		--wip: rgb(167, 6, 6);
		--indefinite: rgb(54, 167, 2);
	}
	.wip-type {
		display: flex;
		margin: 5px;
		font-size: 22px;
		color: white;
		margin: auto;
		width: 100%;
	}
	.title {
		display: flex;
		margin: auto;
		padding: 5px 5px 10px 5px;
		color: wheat;
	}
	.wip {
		background-color: var(--wip);
	}
	.indefinite {
		background-color: var(--indefinite);
	}
	.below-img {
		display: flex;
		flex-direction: column;
		margin-top: auto;
	}
	.description {
		font-size: 18px;
		hyphens: auto;
		line-break: auto;
	}
	.upper {
		display: flex;
		flex-direction: column;
	}
	.image {
		width: 100%;
		height: 100%;
	}
	.image > img {
		object-fit: fill;
		aspect-ratio: 16 / 14;
		width: 100%;
	}
	.spacer {
		flex: 1;
	}
	.container {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		height: 100%;
		margin: 0 5px 5px 5px;
		padding: 5px;
		border: solid 3px var(--color-theme-1);
		border-radius: 10px;
	}
	.footer {
		display: flex;
		margin: 5px 0 0 0;
	}
	.left {
		display: flex;
		flex-wrap: wrap;
	}
	.right {
		display: flex;
		margin: auto 0 0 auto;
	}
</style>
