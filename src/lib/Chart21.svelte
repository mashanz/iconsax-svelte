<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M7 10.74V13.94" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 9V15.68" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17 10.74V13.94" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill={`${color}`} />
		<path d="M5.59998 19.7499H4C3.04 19.7499 2.25 18.9599 2.25 17.9999V9.37988C2.25 8.41988 3.04 7.62988 4 7.62988H5.59998C6.55998 7.62988 7.34998 8.41988 7.34998 9.37988V17.9999C7.34998 18.9599 6.55998 19.7499 5.59998 19.7499ZM4 9.11987C3.86 9.11987 3.75 9.22987 3.75 9.36987V17.9999C3.75 18.1399 3.86 18.2499 4 18.2499H5.59998C5.73998 18.2499 5.84998 18.1399 5.84998 17.9999V9.37988C5.84998 9.23988 5.73998 9.12988 5.59998 9.12988H4V9.11987Z" fill={`${color}`} />
		<path d="M12.8002 19.7499H11.2002C10.2402 19.7499 9.4502 18.9599 9.4502 17.9999V6.18994C9.4502 5.22994 10.2402 4.43994 11.2002 4.43994H12.8002C13.7602 4.43994 14.5502 5.22994 14.5502 6.18994V17.9999C14.5502 18.9599 13.7602 19.7499 12.8002 19.7499ZM11.2002 5.93994C11.0602 5.93994 10.9502 6.04994 10.9502 6.18994V17.9999C10.9502 18.1399 11.0602 18.2499 11.2002 18.2499H12.8002C12.9402 18.2499 13.0502 18.1399 13.0502 17.9999V6.18994C13.0502 6.04994 12.9402 5.93994 12.8002 5.93994H11.2002Z" fill={`${color}`} />
		<path d="M20.0004 19.75H18.4004C17.4404 19.75 16.6504 18.96 16.6504 18V3C16.6504 2.04 17.4404 1.25 18.4004 1.25H20.0004C20.9604 1.25 21.7504 2.04 21.7504 3V18C21.7504 18.96 20.9604 19.75 20.0004 19.75ZM18.4004 2.75C18.2604 2.75 18.1504 2.86 18.1504 3V18C18.1504 18.14 18.2604 18.25 18.4004 18.25H20.0004C20.1404 18.25 20.2504 18.14 20.2504 18V3C20.2504 2.86 20.1404 2.75 20.0004 2.75H18.4004Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.91 16.19C9.91 16.83 9.39 17.35 8.74 17.35C8.1 17.35 7.58 16.83 7.58 16.19V12.93C7.58 12.29 8.1 11.77 8.74 11.77C9.39 11.77 9.91 12.29 9.91 12.93V16.19ZM16.42 16.19C16.42 16.83 15.9 17.35 15.26 17.35C14.61 17.35 14.09 16.83 14.09 16.19V7.81C14.09 7.17 14.61 6.65 15.26 6.65C15.9 6.65 16.42 7.17 16.42 7.81V16.19Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22 22H2C1.59 22 1.25 21.66 1.25 21.25C1.25 20.84 1.59 20.5 2 20.5H22C22.41 20.5 22.75 20.84 22.75 21.25C22.75 21.66 22.41 22 22 22Z" fill={`${color}`} />
		<path d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4Z" fill={`${color}`} />
		<path opacity="0.4" d="M3 10V22H7V10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10Z" fill={`${color}`} />
		<path opacity="0.4" d="M17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 13.01V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17.5 11.57V16.5C17.5 17.6 16.61 18.5 15.5 18.5C14.4 18.5 13.5 17.6 13.5 16.5V7.5C13.5 6.4 14.4 5.5 15.5 5.5C16.6 5.5 17.5 6.4 17.5 7.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8.5 18.5C9.6 18.5 10.5 17.6 10.5 16.5V13C10.5 11.9 9.6 11 8.5 11C7.4 11 6.5 11.9 6.5 13V16.5C6.5 17.6 7.39 18.5 8.5 18.5Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 22H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M3 10V22H7V10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
