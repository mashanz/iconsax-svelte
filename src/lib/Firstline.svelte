<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14 4.5H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14 9.5H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M3 14.5H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M3 19.5H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9.5 8.43V5.57C9.5 4.45 9.05 4 7.92 4H5.07C3.95 4 3.5 4.45 3.5 5.57V8.42C3.5 9.55 3.95 10 5.07 10H7.92C9.05 10 9.5 9.55 9.5 8.43Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21 5.25H14C13.59 5.25 13.25 4.91 13.25 4.5C13.25 4.09 13.59 3.75 14 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z" fill={`${color}`} />
		<path d="M21 10.25H14C13.59 10.25 13.25 9.91 13.25 9.5C13.25 9.09 13.59 8.75 14 8.75H21C21.41 8.75 21.75 9.09 21.75 9.5C21.75 9.91 21.41 10.25 21 10.25Z" fill={`${color}`} />
		<path d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z" fill={`${color}`} />
		<path d="M21 20.25H3C2.59 20.25 2.25 19.91 2.25 19.5C2.25 19.09 2.59 18.75 3 18.75H21C21.41 18.75 21.75 19.09 21.75 19.5C21.75 19.91 21.41 20.25 21 20.25Z" fill={`${color}`} />
		<path d="M7.92 10.75H5.08C3.54 10.75 2.75 9.97 2.75 8.42V5.58C2.75 4.04 3.53 3.25 5.08 3.25H7.93C9.47 3.25 10.26 4.03 10.26 5.58V8.43C10.25 9.97 9.47 10.75 7.92 10.75ZM5.08 4.75C4.37 4.75 4.25 4.87 4.25 5.58V8.43C4.25 9.14 4.37 9.26 5.08 9.26H7.93C8.64 9.26 8.76 9.14 8.76 8.43V5.58C8.76 4.87 8.64 4.75 7.93 4.75H5.08Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21 5.25H14C13.59 5.25 13.25 4.91 13.25 4.5C13.25 4.09 13.59 3.75 14 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z" fill={`${color}`} />
		<path d="M21 10.25H14C13.59 10.25 13.25 9.91 13.25 9.5C13.25 9.09 13.59 8.75 14 8.75H21C21.41 8.75 21.75 9.09 21.75 9.5C21.75 9.91 21.41 10.25 21 10.25Z" fill={`${color}`} />
		<path d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z" fill={`${color}`} />
		<path d="M21 20.25H3C2.59 20.25 2.25 19.91 2.25 19.5C2.25 19.09 2.59 18.75 3 18.75H21C21.41 18.75 21.75 19.09 21.75 19.5C21.75 19.91 21.41 20.25 21 20.25Z" fill={`${color}`} />
		<path d="M7.92 3.5H5.08C3.68 3.5 3 4.18 3 5.58V8.43C3 9.83 3.68 10.51 5.08 10.51H7.93C9.33 10.51 10.01 9.83 10.01 8.43V5.58C10 4.18 9.32 3.5 7.92 3.5Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21 5.25H14C13.59 5.25 13.25 4.91 13.25 4.5C13.25 4.09 13.59 3.75 14 3.75H21C21.41 3.75 21.75 4.09 21.75 4.5C21.75 4.91 21.41 5.25 21 5.25Z" fill={`${color}`} />
		<path opacity="0.4" d="M21 10.25H14C13.59 10.25 13.25 9.91 13.25 9.5C13.25 9.09 13.59 8.75 14 8.75H21C21.41 8.75 21.75 9.09 21.75 9.5C21.75 9.91 21.41 10.25 21 10.25Z" fill={`${color}`} />
		<path d="M21 15.25H3C2.59 15.25 2.25 14.91 2.25 14.5C2.25 14.09 2.59 13.75 3 13.75H21C21.41 13.75 21.75 14.09 21.75 14.5C21.75 14.91 21.41 15.25 21 15.25Z" fill={`${color}`} />
		<path opacity="0.4" d="M21 20.25H3C2.59 20.25 2.25 19.91 2.25 19.5C2.25 19.09 2.59 18.75 3 18.75H21C21.41 18.75 21.75 19.09 21.75 19.5C21.75 19.91 21.41 20.25 21 20.25Z" fill={`${color}`} />
		<path opacity="0.4" d="M7.92 3.5H5.08C3.68 3.5 3 4.18 3 5.58V8.43C3 9.83 3.68 10.51 5.08 10.51H7.93C9.33 10.51 10.01 9.83 10.01 8.43V5.58C10 4.18 9.32 3.5 7.92 3.5Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14 4.5H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14 9.5H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M3 14.5H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9.5 8.43V5.57C9.5 4.45 9.05 4 7.92 4H5.07C3.95 4 3.5 4.45 3.5 5.57V8.42C3.5 9.55 3.95 10 5.07 10H7.92C9.05 10 9.5 9.55 9.5 8.43Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10.0508 19.5H21.0008" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M3 19.5H5.98" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14 4.5H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14 9.5H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M3 14.5H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M3 19.5H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M9.5 8.43V5.57C9.5 4.45 9.05 4 7.92 4H5.07C3.95 4 3.5 4.45 3.5 5.57V8.42C3.5 9.55 3.95 10 5.07 10H7.92C9.05 10 9.5 9.55 9.5 8.43Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
