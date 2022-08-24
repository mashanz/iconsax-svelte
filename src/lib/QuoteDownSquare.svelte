<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<!-- linear -->
{:else if variant === 'Outline'}
	<!-- outline -->
{:else if variant === 'Bold'}
	<!-- bold -->
{:else if variant === 'Bulk'}
	<!-- bulk -->
{:else if variant === 'Broken'}
	<!-- broken -->
{:else if variant === 'TwoTone'}
	<!-- twotone -->
{/if}
