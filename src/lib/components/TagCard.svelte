<script lang="ts">
	export let tags: string[];
</script>

{#each tags as tag}
	<div class="tag">{tag}</div>
{/each}

<style>
	.tag {
		display: flex;
		font-size: 18px;
		border: 1px solid red;
		border-radius: 1%;
		margin: 5px;
		padding: 5px;
	}
</style>
