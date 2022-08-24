<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 16.5H13.9L15.52 14.71C16.32 13.82 16.76 12.69 16.76 11.53C16.76 10.33 16.26 9.18002 15.37 8.33002C14.48 7.48002 13.27 7 12 7C10.74 7 9.53 7.48002 8.63 8.33002C7.74 9.18002 7.23999 10.33 7.23999 11.53C7.23999 12.7 7.67998 13.83 8.47998 14.71L10.1 16.5H7" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

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
