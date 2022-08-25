<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.5 16H13.5C16 16 17.5 14.2 17.5 12V6.91C17.5 5.86 16.64 5 15.59 5H8.42006C7.37006 5 6.51006 5.86 6.51006 6.91V12C6.50006 14.2 8.00005 16 10.5 16Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9.5 2V5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.5 2V5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 22V16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M13.5 16.75H10.5C7.75 16.75 5.75 14.75 5.75 12V6.92C5.75 5.45 6.95001 4.25 8.42001 4.25H15.59C17.06 4.25 18.26 5.45 18.26 6.92V12C18.25 14.75 16.25 16.75 13.5 16.75ZM8.42001 5.75C7.78001 5.75 7.25 6.27 7.25 6.92V12C7.25 13.62 8.25 15.25 10.5 15.25H13.5C15.75 15.25 16.75 13.62 16.75 12V6.92C16.75 6.28 16.23 5.75 15.58 5.75H8.42001Z" fill={`${color}`} />
		<path d="M9.5 5.75C9.09 5.75 8.75 5.41 8.75 5V2C8.75 1.59 9.09 1.25 9.5 1.25C9.91 1.25 10.25 1.59 10.25 2V5C10.25 5.41 9.91 5.75 9.5 5.75Z" fill={`${color}`} />
		<path d="M14.5 5.75C14.09 5.75 13.75 5.41 13.75 5V2C13.75 1.59 14.09 1.25 14.5 1.25C14.91 1.25 15.25 1.59 15.25 2V5C15.25 5.41 14.91 5.75 14.5 5.75Z" fill={`${color}`} />
		<path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V16C11.25 15.59 11.59 15.25 12 15.25C12.41 15.25 12.75 15.59 12.75 16V22C12.75 22.41 12.41 22.75 12 22.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.59 5H15.25V2C15.25 1.59 14.91 1.25 14.5 1.25C14.09 1.25 13.75 1.59 13.75 2V5H10.25V2C10.25 1.59 9.91 1.25 9.5 1.25C9.09 1.25 8.75 1.59 8.75 2V5H8.41C7.36 5 6.5 5.86 6.5 6.91V12C6.5 14.2 8 16 10.5 16H11.25V22C11.25 22.41 11.59 22.75 12 22.75C12.41 22.75 12.75 22.41 12.75 22V16H13.5C16 16 17.5 14.2 17.5 12V6.91C17.5 5.86 16.64 5 15.59 5Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M10.4998 16H13.4998C15.9998 16 17.4998 14.2 17.4998 12V6.91C17.4998 5.86 16.6398 5 15.5898 5H8.41982C7.36982 5 6.50982 5.86 6.50982 6.91V12C6.49982 14.2 7.99981 16 10.4998 16Z" fill={`${color}`} />
		<path d="M10.25 2V5H8.75V2C8.75 1.59 9.09 1.25 9.5 1.25C9.91 1.25 10.25 1.59 10.25 2Z" fill={`${color}`} />
		<path d="M15.25 2V5H13.75V2C13.75 1.59 14.09 1.25 14.5 1.25C14.91 1.25 15.25 1.59 15.25 2Z" fill={`${color}`} />
		<path d="M12.75 16V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V16H12.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M17.4998 7.96001V6.91C17.4998 5.86 16.6398 5 15.5898 5H8.41977C7.36977 5 6.50977 5.86 6.50977 6.91V12C6.50977 14.2 8.00977 16 10.5098 16H13.5098C16.0098 16 17.5098 14.2 17.5098 12" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9.5 2V5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.5 2V5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 22V16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.4998 16H13.4998C15.9998 16 17.4998 14.2 17.4998 12V6.91C17.4998 5.86 16.6398 5 15.5898 5H8.41982C7.36982 5 6.50982 5.86 6.50982 6.91V12C6.49982 14.2 7.99981 16 10.4998 16Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M9.5 2V5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M14.5 2V5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M12 22V16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
