<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10.18 17.1501L7.14001 14.1101" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10.1801 6.8501V17.1501" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13.8199 6.8501L16.8599 9.8901" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13.8199 17.1501V6.8501" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={`${color}`} />
		<path d="M10.1801 17.9C9.99008 17.9 9.80008 17.83 9.65008 17.68L6.61008 14.64C6.32008 14.35 6.32008 13.87 6.61008 13.58C6.90008 13.29 7.38008 13.29 7.67008 13.58L10.7101 16.62C11.0001 16.91 11.0001 17.39 10.7101 17.68C10.5701 17.83 10.3801 17.9 10.1801 17.9Z" fill={`${color}`} />
		<path d="M10.1797 17.9001C9.76969 17.9001 9.42969 17.5601 9.42969 17.1501V6.8501C9.42969 6.4401 9.76969 6.1001 10.1797 6.1001C10.5897 6.1001 10.9297 6.4401 10.9297 6.8501V17.1601C10.9297 17.5701 10.5997 17.9001 10.1797 17.9001Z" fill={`${color}`} />
		<path d="M16.8598 10.64C16.6698 10.64 16.4798 10.57 16.3298 10.42L13.2898 7.38004C12.9998 7.09004 12.9998 6.61004 13.2898 6.32004C13.5798 6.03004 14.0598 6.03004 14.3498 6.32004L17.3898 9.36004C17.6798 9.65004 17.6798 10.13 17.3898 10.42C17.2398 10.56 17.0498 10.64 16.8598 10.64Z" fill={`${color}`} />
		<path d="M13.8203 17.9001C13.4103 17.9001 13.0703 17.5601 13.0703 17.1501V6.8501C13.0703 6.4401 13.4103 6.1001 13.8203 6.1001C14.2303 6.1001 14.5703 6.4401 14.5703 6.8501V17.1601C14.5703 17.5701 14.2303 17.9001 13.8203 17.9001Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM10.93 17.15C10.93 17.25 10.91 17.34 10.87 17.44C10.79 17.62 10.65 17.77 10.46 17.85C10.37 17.89 10.27 17.91 10.17 17.91C10.07 17.91 9.98 17.89 9.88 17.85C9.79 17.81 9.71 17.76 9.64 17.69L6.6 14.65C6.31 14.36 6.31 13.88 6.6 13.59C6.89 13.3 7.37 13.3 7.66 13.59L9.42 15.35V6.85C9.42 6.44 9.76 6.1 10.17 6.1C10.58 6.1 10.92 6.44 10.92 6.85V17.15H10.93ZM17.39 10.42C17.24 10.57 17.05 10.64 16.86 10.64C16.67 10.64 16.48 10.57 16.33 10.42L14.57 8.66V17.16C14.57 17.57 14.23 17.91 13.82 17.91C13.41 17.91 13.07 17.57 13.07 17.16V6.85C13.07 6.75 13.09 6.66 13.13 6.56C13.21 6.38 13.35 6.23 13.54 6.15C13.72 6.07 13.93 6.07 14.11 6.15C14.2 6.19 14.28 6.24 14.35 6.31L17.39 9.35C17.68 9.65 17.68 10.12 17.39 10.42Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill={`${color}`} />
		<path d="M10.1801 6.1001C9.77008 6.1001 9.43008 6.4401 9.43008 6.8501V15.3501L7.67008 13.5901C7.38008 13.3001 6.90008 13.3001 6.61008 13.5901C6.32008 13.8801 6.32008 14.3601 6.61008 14.6501L9.65008 17.6901C9.72008 17.7601 9.80008 17.8101 9.89008 17.8501C9.98008 17.8901 10.0801 17.9101 10.1801 17.9101C10.2801 17.9101 10.3701 17.8901 10.4701 17.8501C10.6501 17.7701 10.8001 17.6301 10.8801 17.4401C10.9201 17.3501 10.9401 17.2501 10.9401 17.1501V6.8501C10.9301 6.4301 10.6001 6.1001 10.1801 6.1001Z" fill={`${color}`} />
		<path d="M17.3903 9.3601L14.3503 6.3201C14.2803 6.2501 14.2003 6.2001 14.1103 6.1601C13.9303 6.0801 13.7203 6.0801 13.5403 6.1601C13.3603 6.2401 13.2103 6.3801 13.1303 6.5701C13.0903 6.6601 13.0703 6.7601 13.0703 6.8601V17.1701C13.0703 17.5801 13.4103 17.9201 13.8203 17.9201C14.2303 17.9201 14.5703 17.5801 14.5703 17.1701V8.6701L16.3303 10.4301C16.4803 10.5801 16.6703 10.6501 16.8603 10.6501C17.0503 10.6501 17.2403 10.5801 17.3903 10.4301C17.6803 10.1201 17.6803 9.6501 17.3903 9.3601Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.1806 17.1501L7.14062 14.1101" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10.1797 6.8501V17.1501" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13.8203 6.8501L16.8603 9.8901" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13.8203 17.1501V6.8501" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 14V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<g opacity="0.4">
			<path d="M10.1806 17.1504L7.14062 14.1104" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M10.1797 6.8501V17.1501" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M13.8203 6.8501L16.8603 9.8901" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M13.8203 17.1501V6.8501" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		</g>
	</svg>
{/if}
