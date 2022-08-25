<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M13.8201 6.84998L16.86 9.88998" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13.8201 17.15V6.84998" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10.18 17.15L7.14001 14.11" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10.1799 6.84998V17.15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.8597 10.64C16.6697 10.64 16.4797 10.57 16.3297 10.42L13.2898 7.38004C12.9998 7.09004 12.9998 6.61004 13.2898 6.32004C13.5798 6.03004 14.0598 6.03004 14.3498 6.32004L17.3898 9.36002C17.6798 9.65002 17.6798 10.13 17.3898 10.42C17.2398 10.56 17.0497 10.64 16.8597 10.64Z" fill={`${color}`} />
		<path d="M13.8203 17.8998C13.4103 17.8998 13.0703 17.5598 13.0703 17.1498V6.83984C13.0703 6.42984 13.4103 6.08984 13.8203 6.08984C14.2303 6.08984 14.5703 6.42984 14.5703 6.83984V17.1498C14.5703 17.5698 14.2303 17.8998 13.8203 17.8998Z" fill={`${color}`} />
		<path d="M10.1801 17.8998C9.99009 17.8998 9.80009 17.8298 9.65009 17.6798L6.61008 14.6398C6.32008 14.3498 6.32008 13.8698 6.61008 13.5798C6.90008 13.2898 7.38011 13.2898 7.67011 13.5798L10.7101 16.6198C11.0001 16.9098 11.0001 17.3898 10.7101 17.6798C10.5701 17.8298 10.3801 17.8998 10.1801 17.8998Z" fill={`${color}`} />
		<path d="M10.1797 17.8998C9.76969 17.8998 9.42969 17.5598 9.42969 17.1498V6.83984C9.42969 6.42984 9.76969 6.08984 10.1797 6.08984C10.5897 6.08984 10.9297 6.42984 10.9297 6.83984V17.1498C10.9297 17.5698 10.5997 17.8998 10.1797 17.8998Z" fill={`${color}`} />
		<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10.93 17.15C10.93 17.25 10.91 17.34 10.87 17.44C10.79 17.62 10.65 17.77 10.46 17.85C10.37 17.89 10.27 17.91 10.17 17.91C10.07 17.91 9.98 17.89 9.88 17.85C9.79 17.81 9.71 17.76 9.64 17.69L6.6 14.65C6.31 14.36 6.31 13.88 6.6 13.59C6.89 13.3 7.37 13.3 7.66 13.59L9.42 15.35V6.85C9.42 6.44 9.76 6.1 10.17 6.1C10.58 6.1 10.92 6.44 10.92 6.85V17.15H10.93ZM17.39 10.42C17.24 10.57 17.05 10.64 16.86 10.64C16.67 10.64 16.48 10.57 16.33 10.42L14.57 8.66V17.16C14.57 17.57 14.23 17.91 13.82 17.91C13.41 17.91 13.07 17.57 13.07 17.16V6.85C13.07 6.75 13.09 6.66 13.13 6.56C13.21 6.38 13.35 6.23 13.54 6.15C13.72 6.07 13.93 6.07 14.11 6.15C14.2 6.19 14.28 6.24 14.35 6.31L17.39 9.35C17.68 9.65 17.68 10.12 17.39 10.42Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={`${color}`} />
		<path d="M17.3903 9.25998L14.3503 6.22C14.2803 6.15 14.2003 6.1 14.1103 6.06C13.9303 5.98 13.7203 5.98 13.5403 6.06C13.3603 6.14 13.2103 6.28 13.1303 6.47C13.0903 6.56 13.0703 6.65998 13.0703 6.75998V17.07C13.0703 17.48 13.4103 17.82 13.8203 17.82C14.2303 17.82 14.5703 17.48 14.5703 17.07V8.57001L16.3303 10.33C16.4803 10.48 16.6703 10.55 16.8603 10.55C17.0503 10.55 17.2403 10.48 17.3903 10.33C17.6803 10.02 17.6803 9.54998 17.3903 9.25998Z" fill={`${color}`} />
		<path d="M10.9301 6.75C10.9301 6.34 10.5901 6 10.1801 6C9.77009 6 9.43009 6.34 9.43009 6.75V15.25L7.67011 13.49C7.38011 13.2 6.90008 13.2 6.61008 13.49C6.32008 13.78 6.32008 14.26 6.61008 14.55L9.65009 17.59C9.72009 17.66 9.80011 17.71 9.89011 17.75C9.98011 17.79 10.0801 17.81 10.1801 17.81C10.2801 17.81 10.3701 17.79 10.4701 17.75C10.6501 17.67 10.8001 17.53 10.8801 17.34C10.9201 17.25 10.9401 17.15 10.9401 17.05V6.75H10.9301Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.1806 17.1501L7.14062 14.1101" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10.1797 6.8501V17.1501" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13.8203 6.8501L16.8603 9.89011" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13.8203 14.1101V6.8501" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13.8203 17.1501V16.6301" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.30001 7.97 2.85001" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g opacity="0.4">
			<path d="M13.8203 6.8501L16.8603 9.89011" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M13.8203 17.1501V6.8501" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M10.1806 17.1499L7.14062 14.1099" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M10.1797 6.8501V17.1501" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		</g>
		<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
