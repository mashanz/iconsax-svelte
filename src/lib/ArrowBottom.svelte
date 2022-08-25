<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12.0001 6H14.6701C17.9801 6 19.3401 8.35 17.6801 11.22L16.3401 13.53L15.0001 15.84C13.3401 18.71 10.6301 18.71 8.97005 15.84L7.63005 13.53L6.29005 11.22C4.66005 8.35 6.01005 6 9.33005 6H12.0001Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M11.999 18.75C10.579 18.75 9.27903 17.85 8.33903 16.22L5.66903 11.59C4.71903 9.96 4.59903 8.39 5.30903 7.16C6.01903 5.93 7.44903 5.25 9.32903 5.25H14.669C16.549 5.25 17.979 5.93 18.689 7.16C19.399 8.39 19.269 9.97 18.329 11.6L15.659 16.23C14.719 17.85 13.419 18.75 11.999 18.75ZM9.32903 6.75C7.99903 6.75 7.03903 7.16 6.60903 7.91C6.16903 8.66 6.29903 9.7 6.95903 10.84L9.62903 15.47C10.289 16.62 11.129 17.25 11.989 17.25C12.849 17.25 13.689 16.62 14.349 15.47L17.019 10.84C17.679 9.69 17.809 8.65 17.379 7.9C16.949 7.15 15.979 6.74 14.659 6.74H9.32903V6.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.32919 6H14.6692C17.9892 6 19.3392 8.35 17.6892 11.22L16.9492 12.5C16.7692 12.81 16.4392 13 16.0792 13H7.91919C7.55919 13 7.22919 12.81 7.04919 12.5L6.30919 11.22C4.65919 8.35 6.00919 6 9.32919 6Z" fill={`${color}`} />
		<path d="M8.79152 14H15.2215C15.6115 14 15.8515 14.42 15.6515 14.75L15.0115 15.85C13.3615 18.72 10.6415 18.72 8.99152 15.85L8.35152 14.75C8.16152 14.42 8.40152 14 8.79152 14Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.32919 6H14.6692C17.9892 6 19.3392 8.35 17.6892 11.22L16.9492 12.5C16.7692 12.81 16.4392 13 16.0792 13H7.91919C7.55919 13 7.22919 12.81 7.04919 12.5L6.30919 11.22C4.65919 8.35 6.00919 6 9.32919 6Z" fill={`${color}`} />
		<path opacity="0.4" d="M8.78957 14H15.2196C15.6096 14 15.8496 14.42 15.6496 14.75L15.0096 15.85C13.3596 18.72 10.6396 18.72 8.98957 15.85L8.34957 14.75C8.15957 14.42 8.39957 14 8.78957 14Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.30919 11.22C4.65919 8.35 6.00919 6 9.32919 6H11.9992H14.6692C17.9792 6 19.3392 8.35 17.6792 11.22L16.3392 13.53L14.9992 15.84C13.3392 18.71 10.6292 18.71 8.96919 15.84" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12.0005 6H14.6705C17.9805 6 19.3405 8.35 17.6805 11.22L16.3405 13.53L15.0005 15.84C13.3405 18.71 10.6305 18.71 8.97054 15.84L7.63054 13.53L6.29054 11.22C4.66054 8.35 6.01054 6 9.33054 6H12.0005Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
