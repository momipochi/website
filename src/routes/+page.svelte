<script>
	import SimpleIcon from '$lib/components/SimpleIcon.svelte';
	import Avatar from '$lib/images/prof.webp';
	import { t } from '$lib/internationalization/localize';
	import { siGithub, siLinkedin, siGmail } from 'simple-icons';

	let name = [
		' █████╗ ██╗     ███████╗██╗  ██╗ █████╗ ███╗   ██╗██████╗ ███████╗██████╗     ████████╗██╗   ██╗',
		'██╔══██╗██║     ██╔════╝╚██╗██╔╝██╔══██╗████╗  ██║██╔══██╗██╔════╝██╔══██╗    ╚══██╔══╝ ██║   ██║',
		'███████║██║     █████╗   ╚███╔╝ ███████║██╔██╗ ██║██║  ██║█████╗  ██████╔╝       ██║   ██║   ██║',
		'██╔══██║██║     ██╔══╝   ██╔██╗ ██╔══██║██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗       ██║   ██║   ██║',
		'██║  ██║███████╗███████╗██╔╝ ██╗██║  ██║██║ ╚████║██████╔╝███████╗██║  ██║       ██║   ╚██████╔╝',
		'╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝       ╚═╝    ╚═════╝ '
	];
	const fullName = name.join('\n'); // Join lines with actual line breaks
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="page">
	<div class="prof">
		<img src={Avatar} class="avatar" alt="my avatar" />
		<div class="social-prof-list">
			<a href="https://github.com/momipochi" target="_blank"
				><SimpleIcon data={siGithub} size="1.5em" /></a
			>
			<a href="https://www.linkedin.com/in/alexander-tu-515092223/" target="_blank"
				><SimpleIcon data={siLinkedin} size="1.5em" /></a
			>
			<a href="mailto:k25650727@gmail.com"><SimpleIcon data={siGmail} size="1.5em" /></a>
		</div>
	</div>
	<div class="content">
		<pre class="name">{fullName}</pre>

		<div class="about-me-content">
			<br />
			{@html $t('about')}
		</div>
	</div>
</div>

<style>
	.name {
		color: black;
		font-size: 10px; /* Smaller or larger text size */
		white-space: pre; /* Ensures it doesn't wrap */
		background-color: var(--color-theme-1);
		padding: 1rem;
		border-radius: 8px;
		box-sizing: border-box;
	}
	.about-me-content {
		hyphens: auto;
	}
	.page {
		display: flex;
		margin: auto;
	}
	.content {
		display: flex;

		flex-direction: column;
		margin-left: 50px;
	}
	.social-prof-list {
		display: flex;
		flex-direction: column;
	}
	.social-prof-list > a {
		margin: 0 0 20% 20%;
	}
	.prof {
		display: flex;
	}
	.avatar {
		width: 300px;
		height: 300px;
	}
</style>
