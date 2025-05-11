<script lang="ts">
	import { siGithub } from 'simple-icons';
	import { WIPTypes, type ProjectType } from '../../routes/projects/projects';
	import SimpleIcon from './SimpleIcon.svelte';
	import TagCard from './TagCard.svelte';
	import { t } from '$lib/internationalization/localize';
	export let project: ProjectType;
</script>

<div class="container">
	<div class="content-row">
		<div class="left-image">
			{#if project.wip?.type === WIPTypes.WIP}
				<span class="wip wip-type">{project.wip.msg}</span>
			{:else if project.wip?.type === WIPTypes.INDEFINITE}
				<span class="indefinite wip-type">{project.wip.msg}</span>
			{:else if project.wip?.type === WIPTypes.WITH_CICD}
				<a target="_blank" class="wip-type cicd" href={project.cicd?.pipeline}>
					<img src={project.cicd?.status} alt="cicd status" />
				</a>
			{/if}

			<a href={project.url} target="_blank" class="image index99">
				<img src={project.image.src} alt={project.image.alt} />
			</a>
		</div>

		<div class="right-details">
			<h3 class="title">{@html $t(project.title)}</h3>
			<span class="description">{@html $t(project.description)}</span>

			<div class="footer">
				<div class="left">
					<TagCard tags={project.technologies} />
				</div>
				<span class="spacer"></span>
				<div class="right">
					<a href={project.url} target="_blank" class="links">
						<SimpleIcon data={siGithub} size="1.5em" />
					</a>
					{#if project.demo}
						<a href={project.demo} target="_blank" class="links">
							<svg
								class="demo"
								xmlns="http://www.w3.org/2000/svg"
								width="1.5em"
								height="1.5em"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"
								/>
							</svg>
						</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	:root {
		--wip: rgb(167, 6, 6);
		--indefinite: rgb(54, 167, 2);
	}

	.container {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		margin: 0 5px 5px 5px;
		padding: 5px;
		border: solid 3px var(--color-theme-1);
		border-radius: 10px;
		height: 300px;
	}

	.content-row {
		display: flex;
		flex-direction: row;
		gap: 1em;
		height: 100%;
	}

	.left-image {
		flex: 0 0 300px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.left-image .image {
		width: 100%;
		height: auto;
		max-height: 100%;
		overflow: hidden;
	}

	.left-image .image > img {
		max-width: 100%;
		max-height: 300px;
		object-fit: cover;
		border-radius: 6px;
	}

	.right-details {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
	}

	.title {
		margin: 0 0 0.5em 0;
		color: wheat;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.description {
		font-size: 16px;
		line-height: 1.2;
		text-overflow: ellipsis;
		font-size: 20px;
	}

	.footer {
		display: flex;
		margin-top: auto;
	}

	.left {
		display: flex;
		flex-wrap: wrap;
	}

	.right {
		display: flex;
		margin-left: auto;
		align-items: center;
	}
</style>
