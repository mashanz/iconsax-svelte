<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5.1 19.25H16.9C18.4 19.25 19 18.61 19 17.02V15.98C19 14.39 18.4 13.75 16.9 13.75H5.1" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M5.1 5.25H11.9C13.4 5.25 14 5.89 14 7.48V8.52C14 10.11 13.4 10.75 11.9 10.75H5.1" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M5 1.98999V21.99" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.8996 20H5.09961C4.68961 20 4.34961 19.66 4.34961 19.25C4.34961 18.84 4.68961 18.5 5.09961 18.5H16.8996C17.9096 18.5 18.2496 18.29 18.2496 17.02V15.98C18.2496 14.71 17.9096 14.5 16.8996 14.5H5.09961C4.68961 14.5 4.34961 14.16 4.34961 13.75C4.34961 13.34 4.68961 13 5.09961 13H16.8996C18.8196 13 19.7496 13.98 19.7496 15.98V17.02C19.7496 19.02 18.8196 20 16.8996 20Z" fill={`${color}`} />
		<path d="M11.8996 11.5H5.09961C4.68961 11.5 4.34961 11.16 4.34961 10.75C4.34961 10.34 4.68961 10 5.09961 10H11.8996C12.9096 10 13.2496 9.79 13.2496 8.52V7.48C13.2496 6.21 12.9096 6 11.8996 6H5.09961C4.68961 6 4.34961 5.66 4.34961 5.25C4.34961 4.84 4.68961 4.5 5.09961 4.5H11.8996C13.8196 4.5 14.7496 5.48 14.7496 7.48V8.52C14.7496 10.52 13.8196 11.5 11.8996 11.5Z" fill={`${color}`} />
		<path d="M5 22.7402C4.59 22.7402 4.25 22.4002 4.25 21.9902V1.99023C4.25 1.58023 4.59 1.24023 5 1.24023C5.41 1.24023 5.75 1.58023 5.75 1.99023V21.9902C5.75 22.4002 5.41 22.7402 5 22.7402Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19.3809 15.98V17.02C19.3809 18.61 18.7809 19.25 17.2609 19.25H5.38086V13.75H17.2609C18.7809 13.75 19.3809 14.39 19.3809 15.98Z" fill={`${color}`} />
		<path d="M14.3809 7.48V8.52C14.3809 10.11 13.7709 10.75 12.2609 10.75H5.38086V5.25H12.2609C13.7709 5.25 14.3809 5.89 14.3809 7.48Z" fill={`${color}`} />
		<path d="M5.37912 22C4.96912 22 4.62912 21.66 4.62912 21.25V2.75C4.61912 2.33 4.95912 2 5.37912 2C5.79912 2 6.12912 2.34 6.12912 2.75V21.25C6.11912 21.66 5.78912 22 5.37912 22Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19.3809 15.98V17.02C19.3809 18.61 18.7809 19.25 17.2609 19.25H5.38086V13.75H17.2609C18.7809 13.75 19.3809 14.39 19.3809 15.98Z" fill={`${color}`} />
		<path opacity="0.4" d="M14.3809 7.48V8.52C14.3809 10.11 13.7709 10.75 12.2609 10.75H5.38086V5.25H12.2609C13.7709 5.25 14.3809 5.89 14.3809 7.48Z" fill={`${color}`} />
		<path d="M5.37912 22C4.96912 22 4.62912 21.66 4.62912 21.25V2.75C4.61912 2.33 4.95912 2 5.37912 2C5.79912 2 6.12912 2.34 6.12912 2.75V21.25C6.11912 21.66 5.78912 22 5.37912 22Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5.09961 19.25H16.8996C18.3996 19.25 18.9996 18.61 18.9996 17.02V15.98C18.9996 14.39 18.3996 13.75 16.8996 13.75H5.09961" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M5.09961 10.75H11.8996C13.3996 10.75 13.9996 10.11 13.9996 8.52002" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M5.09961 5.25H11.8996" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M5 1.98999V21.99" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M5.09961 19.25H16.8996C18.3996 19.25 18.9996 18.61 18.9996 17.02V15.98C18.9996 14.39 18.3996 13.75 16.8996 13.75H5.09961" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M5.09961 5.25H11.8996C13.3996 5.25 13.9996 5.89 13.9996 7.48V8.52C13.9996 10.11 13.3996 10.75 11.8996 10.75H5.09961" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M5 1.99023V21.9902" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
