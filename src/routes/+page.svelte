<script>
	import SimpleIcon from '$lib/components/SimpleIcon.svelte';
	import Avatar from '$lib/images/prof.webp';
	import { t } from '$lib/internationalization/localize';
	import { siGithub, siLinkedin, siGmail } from 'simple-icons';
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
		<pre class="name">
 █████╗ ██╗     ███████╗██╗  ██╗ █████╗ ███╗   ██╗██████╗ ███████╗██████╗     ████████╗██╗   ██╗
██╔══██╗██║     ██╔════╝╚██╗██╔╝██╔══██╗████╗  ██║██╔══██╗██╔════╝██╔══██╗    ╚══██╔══╝██║   ██║
███████║██║     █████╗   ╚███╔╝ ███████║██╔██╗ ██║██║  ██║█████╗  ██████╔╝       ██║   ██║   ██║
██╔══██║██║     ██╔══╝   ██╔██╗ ██╔══██║██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗       ██║   ██║   ██║
██║  ██║███████╗███████╗██╔╝ ██╗██║  ██║██║ ╚████║██████╔╝███████╗██║  ██║       ██║   ╚██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝       ╚═╝    ╚═════╝ </pre>
		<div class="about-me-content">
			<br />
			{@html $t('about')}
		</div>
	</div>
</div>

<style>
	.name {
		display: flex;
		font-size: 18px;
		margin: 0 auto 0 0;
		padding: 0;
		background-color: var(--color-theme-1);
	}
	.about-me-content {
		width: 100%;
		hyphens: auto;
	}
	.page {
		display: flex;
		margin: auto;
		width: 70%;
	}
	.content {
		display: flex;
		flex-direction: column;
		margin-left: 50px;
		width: 100%;
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
