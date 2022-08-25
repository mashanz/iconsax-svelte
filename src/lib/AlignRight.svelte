<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18.9 19.25H7.1C5.6 19.25 5 18.61 5 17.02V15.98C5 14.39 5.6 13.75 7.1 13.75H18.9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M18.9 5.25H12.1C10.6 5.25 10 5.89 10 7.48V8.52C10 10.11 10.6 10.75 12.1 10.75H18.9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19 1.98999V21.99" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18.9 20H7.1C5.18 20 4.25 19.02 4.25 17.02V15.98C4.25 13.98 5.18 13 7.1 13H18.9C19.31 13 19.65 13.34 19.65 13.75C19.65 14.16 19.31 14.5 18.9 14.5H7.1C6.09 14.5 5.75 14.71 5.75 15.98V17.02C5.75 18.29 6.09 18.5 7.1 18.5H18.9C19.31 18.5 19.65 18.84 19.65 19.25C19.65 19.66 19.31 20 18.9 20Z" fill={`${color}`} />
		<path d="M18.9 11.5H12.1C10.18 11.5 9.25 10.52 9.25 8.52V7.48C9.25 5.47 10.18 4.5 12.1 4.5H18.9C19.31 4.5 19.65 4.84 19.65 5.25C19.65 5.66 19.31 6 18.9 6H12.1C11.09 6 10.75 6.21 10.75 7.48V8.52C10.75 9.79 11.09 10 12.1 10H18.9C19.31 10 19.65 10.34 19.65 10.75C19.65 11.16 19.31 11.5 18.9 11.5Z" fill={`${color}`} />
		<path d="M19 22.7402C18.59 22.7402 18.25 22.4002 18.25 21.9902V1.99023C18.25 1.58023 18.59 1.24023 19 1.24023C19.41 1.24023 19.75 1.58023 19.75 1.99023V21.9902C19.75 22.4002 19.41 22.7402 19 22.7402Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M4.61914 15.98V17.02C4.61914 18.61 5.21914 19.25 6.73914 19.25H18.6191V13.75H6.73914C5.21914 13.75 4.61914 14.39 4.61914 15.98Z" fill={`${color}`} />
		<path d="M9.61914 7.48V8.52C9.61914 10.11 10.2291 10.75 11.7391 10.75H18.6191V5.25H11.7391C10.2291 5.25 9.61914 5.89 9.61914 7.48Z" fill={`${color}`} />
		<path d="M18.6191 22C18.2091 22 17.8691 21.66 17.8691 21.25V2.75C17.8691 2.34 18.2091 2 18.6191 2C19.0291 2 19.3691 2.34 19.3691 2.75V21.25C19.3791 21.66 19.0391 22 18.6191 22Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M4.61914 15.98V17.02C4.61914 18.61 5.21914 19.25 6.73914 19.25H18.6191V13.75H6.73914C5.21914 13.75 4.61914 14.39 4.61914 15.98Z" fill={`${color}`} />
		<path opacity="0.4" d="M9.61914 7.48V8.52C9.61914 10.11 10.2291 10.75 11.7391 10.75H18.6191V5.25H11.7391C10.2291 5.25 9.61914 5.89 9.61914 7.48Z" fill={`${color}`} />
		<path d="M18.6191 22C18.2091 22 17.8691 21.66 17.8691 21.25V2.75C17.8691 2.34 18.2091 2 18.6191 2C19.0291 2 19.3691 2.34 19.3691 2.75V21.25C19.3791 21.66 19.0391 22 18.6191 22Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18.9 19.25H7.1C5.6 19.25 5 18.61 5 17.02V15.98C5 14.39 5.6 13.75 7.1 13.75H18.9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10 8.52002C10 10.11 10.6 10.75 12.1 10.75H18.9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M18.8996 5.25H12.0996" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19 1.98999V21.99" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M18.9 19.25H7.1C5.6 19.25 5 18.61 5 17.02V15.98C5 14.39 5.6 13.75 7.1 13.75H18.9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M18.9 5.25H12.1C10.6 5.25 10 5.89 10 7.48V8.52C10 10.11 10.6 10.75 12.1 10.75H18.9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19 1.99023V21.9902" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
