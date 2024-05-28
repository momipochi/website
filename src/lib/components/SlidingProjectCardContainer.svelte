<script lang="ts">
</script>

<div class="container">
	<div class="left">
		<div class="left-icon"></div>
	</div>
	<div class="center"></div>
	<div class="right">
		<div class="right-icon"></div>
	</div>
</div>

<style>
	.container {
		display: flex;
		width: 50vw;
		height: 50vh;
	}
	.center {
		width: 100%;
		height: 100%;
	}
	.left {
		display: flex;
		border: 5px solid var(--color-theme-1);
	}
	.right {
		display: flex;
		border: 5px solid var(--color-theme-1);
	}
	.left:hover {
		cursor: pointer;
		background-color: var(--color-theme-1);
	}
	.left:hover .left-icon {
		border-top: 45px solid transparent;
		border-bottom: 45px solid transparent;
		border-right: 60px solid black;
	}
	.right:hover {
		cursor: pointer;
		background-color: var(--color-theme-1);
	}
	.right:hover .right-icon {
		border-top: 45px solid transparent;
		border-bottom: 45px solid transparent;
		border-left: 60px solid black;
	}
	.left-icon {
		display: flex;
		margin: auto 5px auto 5px;
		width: 0;
		height: 0;
		border-top: 45px solid transparent;
		border-bottom: 45px solid transparent;
		border-right: 60px solid var(--color-theme-1);
	}
	.right-icon {
		display: flex;
		margin: auto 5px auto 5px;
		width: 0;
		height: 0;
		border-top: 45px solid transparent;
		border-bottom: 45px solid transparent;
		border-left: 60px solid var(--color-theme-1);
	}
</style>
