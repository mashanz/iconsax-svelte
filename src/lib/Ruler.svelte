<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
		<path d="M18 7V12" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
		<path d="M6 7V11" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
		<path d="M10.05 7L10 12" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
		<path d="M14 7V10" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19 17.75H5C2.58 17.75 1.25 16.42 1.25 14V10C1.25 7.58 2.58 6.25 5 6.25H19C21.42 6.25 22.75 7.58 22.75 10V14C22.75 16.42 21.42 17.75 19 17.75ZM5 7.75C3.42 7.75 2.75 8.42 2.75 10V14C2.75 15.58 3.42 16.25 5 16.25H19C20.58 16.25 21.25 15.58 21.25 14V10C21.25 8.42 20.58 7.75 19 7.75H5Z" fill={`${color}`} />
		<path d="M18 12.75C17.59 12.75 17.25 12.41 17.25 12V7C17.25 6.59 17.59 6.25 18 6.25C18.41 6.25 18.75 6.59 18.75 7V12C18.75 12.41 18.41 12.75 18 12.75Z" fill={`${color}`} />
		<path d="M6 11.75C5.59 11.75 5.25 11.41 5.25 11V7C5.25 6.59 5.59 6.25 6 6.25C6.41 6.25 6.75 6.59 6.75 7V11C6.75 11.41 6.41 11.75 6 11.75Z" fill={`${color}`} />
		<path d="M10 12.75C9.58 12.75 9.25 12.41 9.25 11.99L9.3 6.99C9.3 6.58 9.64 6.25 10.05 6.25C10.05 6.25 10.05 6.25 10.06 6.25C10.47 6.25 10.81 6.59 10.8 7.01L10.75 12.01C10.75 12.42 10.41 12.75 10 12.75Z" fill={`${color}`} />
		<path d="M14 10.75C13.59 10.75 13.25 10.41 13.25 10V7C13.25 6.59 13.59 6.25 14 6.25C14.41 6.25 14.75 6.59 14.75 7V10C14.75 10.41 14.41 10.75 14 10.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19 7C18.86 7 18.75 7.11 18.75 7.25V12C18.75 12.41 18.41 12.75 18 12.75C17.59 12.75 17.25 12.41 17.25 12V7.25C17.25 7.11 17.14 7 17 7H15C14.86 7 14.75 7.11 14.75 7.25V9.6C14.75 10.01 14.41 10.35 14 10.35C13.59 10.35 13.25 10.01 13.25 9.6V7.25C13.25 7.11 13.14 7 13 7H11.04C10.9 7 10.79 7.11 10.79 7.25L10.75 12.01C10.75 12.42 10.41 12.75 10 12.75C10 12.75 10 12.75 9.99 12.75C9.58 12.75 9.25 12.41 9.25 11.99L9.29 7.25C9.29 7.11 9.18 7 9.04 7H7C6.86 7 6.75 7.11 6.75 7.25V10.8C6.75 11.21 6.41 11.55 6 11.55C5.59 11.55 5.25 11.21 5.25 10.8V7.25C5.25 7.11 5.14 7 5 7C3.34 7 2 8.34 2 10V14C2 15.66 3.34 17 5 17H19C20.66 17 22 15.66 22 14V10C22 8.34 20.66 7 19 7Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M5 17H19C20.66 17 22 15.66 22 14V10C22 8.34 20.66 7 19 7H5C3.34 7 2 8.34 2 10V14C2 15.66 3.34 17 5 17Z" fill={`${color}`} />
		<path d="M18.75 7V12C18.75 12.41 18.41 12.75 18 12.75C17.59 12.75 17.25 12.41 17.25 12V7H18.75Z" fill={`${color}`} />
		<path d="M6.75 7V10.8C6.75 11.21 6.41 11.55 6 11.55C5.59 11.55 5.25 11.21 5.25 10.8V7H6.75Z" fill={`${color}`} />
		<path d="M10.79 7L10.75 12.01C10.75 12.42 10.41 12.75 10 12.75C10 12.75 10 12.75 9.99 12.75C9.58 12.75 9.25 12.41 9.25 11.99L9.29 7H10.79Z" fill={`${color}`} />
		<path d="M14.75 7V9.6C14.75 10.01 14.41 10.35 14 10.35C13.59 10.35 13.25 10.01 13.25 9.6V7H14.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22 10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17H19C21 17 22 16 22 14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
		<path d="M18 7V12" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
		<path d="M6 7V11" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
		<path d="M10.05 7L10 12" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
		<path d="M14 7V10" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
		<path opacity="0.4" d="M18 7V12" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
		<path opacity="0.4" d="M6 7V11" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
		<path opacity="0.4" d="M10.05 7L10 12" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
		<path opacity="0.4" d="M14 7V10" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" />
	</svg>
{/if}
