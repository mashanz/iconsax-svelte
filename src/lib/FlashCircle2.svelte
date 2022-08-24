<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.68006 12.72H10.4201V16.77C10.4201 17.37 11.1601 17.65 11.5601 17.2L15.8201 12.36C16.1901 11.94 15.8901 11.28 15.3301 11.28H13.5901V7.22995C13.5901 6.62995 12.8501 6.34995 12.4501 6.79995L8.19006 11.64C7.82006 12.06 8.12006 12.72 8.68006 12.72Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
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
