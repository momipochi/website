<script>
	import SimpleIcon from '$lib/components/SimpleIcon.svelte';
	import Avatar from '$lib/images/prof.jpg';
	import { siGithub } from 'simple-icons';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	hello

	<img src={Avatar} class="avatar" alt="my avatar" />
	<SimpleIcon data={siGithub} size="1em" />
</div>

<style>
	.avatar {
		width: 300px;
		height: 300px;
	}
</style>
