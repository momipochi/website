<script lang="ts">
	import { siGithub } from 'simple-icons';
	import type { ProjectType } from '../../routes/projects/projects';
	import SimpleIcon from './SimpleIcon.svelte';
	import TagCard from './TagCard.svelte';

	export let project: ProjectType;
</script>

<div class="container">
	<img class="index99" src={project.image.src} alt={project.image.alt} />
	<div class="below-img">
		<div class="description">{project.description}</div>
		<div class="footer">
			<div class="left">
				<TagCard tags={project.technologies} />
			</div>
			<div class="right">
				<a href={project.url} target="_blank">
					<SimpleIcon data={siGithub} size="1.5em" />
				</a>
			</div>
		</div>
	</div>
</div>

<style>
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
	.container > img {
		margin-bottom: 2%;
		width: 100%;
		height: 100%;
		/* object-fit: cover; */
	}
	.container {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		height: 100%;
		margin: 0 2% 2% 2%;
		padding: 1%;
		border: solid 3px var(--color-theme-1);
		border-radius: 2%;
	}
	.footer {
		display: flex;
		margin: 2% 0 0 0;
	}
	.left {
		display: flex;
		margin: 0 auto 0 0;
		flex-wrap: wrap;
	}
	.right {
		display: flex;
		margin: auto 0 auto auto;
	}
</style>
