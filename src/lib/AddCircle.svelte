<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<!-- Linear -->
{:else if variant === 'Outline'}
	<!-- Outline -->
{:else if variant === 'Bold'}
	<!-- Bold -->
{:else if variant === 'Bulk'}
	<!-- Bulk -->
{:else if variant === 'Broken'}
	<!-- Broken -->
{:else if variant === 'TwoTone'}
	<!-- TwoTone -->
{/if}
