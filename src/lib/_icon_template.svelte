<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<!-- {size} {color} -->
{:else if variant === 'Outline'}
	<!-- {size} {color} -->
{:else if variant === 'Bold'}
	<!-- {size} {color} -->
{:else if variant === 'Bulk'}
	<!-- {size} {color} -->
{:else if variant === 'Broken'}
	<!-- {size} {color} -->
{:else if variant === 'TwoTone'}
	<!-- {size} {color} -->
{/if}
