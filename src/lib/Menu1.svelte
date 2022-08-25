<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M17.5399 8.30989C18.8986 8.30989 20 7.20851 20 5.84989C20 4.49127 18.8986 3.38989 17.5399 3.38989C16.1813 3.38989 15.08 4.49127 15.08 5.84989C15.08 7.20851 16.1813 8.30989 17.5399 8.30989Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.46001 8.30989C7.81863 8.30989 8.92 7.20851 8.92 5.84989C8.92 4.49127 7.81863 3.38989 6.46001 3.38989C5.10139 3.38989 4 4.49127 4 5.84989C4 7.20851 5.10139 8.30989 6.46001 8.30989Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17.5399 20.6099C18.8986 20.6099 20 19.5086 20 18.1499C20 16.7913 18.8986 15.6899 17.5399 15.6899C16.1813 15.6899 15.08 16.7913 15.08 18.1499C15.08 19.5086 16.1813 20.6099 17.5399 20.6099Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.46001 20.6099C7.81863 20.6099 8.92 19.5086 8.92 18.1499C8.92 16.7913 7.81863 15.6899 6.46001 15.6899C5.10139 15.6899 4 16.7913 4 18.1499C4 19.5086 5.10139 20.6099 6.46001 20.6099Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" fill={`${color}`} />
		<path d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z" fill={`${color}`} />
		<path d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17 17.25H7C6.59 17.25 6.25 16.91 6.25 16.5C6.25 16.09 6.59 15.75 7 15.75H17C17.41 15.75 17.75 16.09 17.75 16.5C17.75 16.91 17.41 17.25 17 17.25ZM17 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H17C17.41 11.25 17.75 11.59 17.75 12C17.75 12.41 17.41 12.75 17 12.75ZM17 8.25H7C6.59 8.25 6.25 7.91 6.25 7.5C6.25 7.09 6.59 6.75 7 6.75H17C17.41 6.75 17.75 7.09 17.75 7.5C17.75 7.91 17.41 8.25 17 8.25Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M17.5401 8.81014C19.1748 8.81014 20.5001 7.4849 20.5001 5.85014C20.5001 4.21537 19.1748 2.89014 17.5401 2.89014C15.9053 2.89014 14.5801 4.21537 14.5801 5.85014C14.5801 7.4849 15.9053 8.81014 17.5401 8.81014Z" fill={`${color}`} />
		<path d="M6.46 8.81014C8.09476 8.81014 9.42 7.4849 9.42 5.85014C9.42 4.21537 8.09476 2.89014 6.46 2.89014C4.82524 2.89014 3.5 4.21537 3.5 5.85014C3.5 7.4849 4.82524 8.81014 6.46 8.81014Z" fill={`${color}`} />
		<path d="M17.5401 21.1099C19.1748 21.1099 20.5001 19.7847 20.5001 18.1499C20.5001 16.5152 19.1748 15.1899 17.5401 15.1899C15.9053 15.1899 14.5801 16.5152 14.5801 18.1499C14.5801 19.7847 15.9053 21.1099 17.5401 21.1099Z" fill={`${color}`} />
		<path opacity="0.4" d="M6.46 21.1099C8.09476 21.1099 9.42 19.7847 9.42 18.1499C9.42 16.5152 8.09476 15.1899 6.46 15.1899C4.82524 15.1899 3.5 16.5152 3.5 18.1499C3.5 19.7847 4.82524 21.1099 6.46 21.1099Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 7H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
		<path d="M9.49023 12H21.0002" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
		<path d="M3 12H5.99" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
		<path d="M3 17H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 7H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
		<path opacity="0.34" d="M3 12H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
		<path d="M3 17H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
	</svg>
{/if}
