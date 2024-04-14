<script lang="ts">
	import '$lib/../routes/styles.css';
	export let url: string;
</script>

{#key url}
	<div class="upper noclick"></div>
	<div class="lower noclick"></div>
	<slot />
{/key}

<style>
	@keyframes whole-frame {
		from {
			background-color: black;
		}
		to {
			background-color: transparent;
		}
	}
	@keyframes flash-frame {
		from {
			background-color: black;
		}
		to {
			background-color: #17c935;
		}
	}
	.upper {
		position: absolute;
		z-index: 99;
		width: 100%;
		height: 50%;
		animation-name: flash-frame;
		animation-duration: 100ms;
	}
	.lower {
		top: 50%;
		position: absolute;
		z-index: 99;
		width: 100%;
		height: 50%;
		animation-name: flash-frame;
		animation-duration: 100ms;
		animation-delay: 25ms;
	}
</style>
