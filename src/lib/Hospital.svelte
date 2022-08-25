<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 22H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.06 15H9.92998C9.41998 15 8.98999 15.42 8.98999 15.94V22H14.99V15.94C15 15.42 14.58 15 14.06 15Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 6V11" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9.5 8.5H14.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z" fill={`${color}`} />
		<path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22V6C2.25 2.98 3.98 1.25 7 1.25H17C20.02 1.25 21.75 2.98 21.75 6V22C21.75 22.41 21.41 22.75 21 22.75ZM3.75 21.25H20.25V6C20.25 3.78 19.22 2.75 17 2.75H7C4.78 2.75 3.75 3.78 3.75 6V21.25Z" fill={`${color}`} />
		<path d="M15 22.75H9C8.59 22.75 8.25 22.41 8.25 22V15.94C8.25 15.01 9.01 14.25 9.94 14.25H14.07C15 14.25 15.76 15.01 15.76 15.94V22C15.75 22.41 15.41 22.75 15 22.75ZM9.75 21.25H14.25V15.94C14.25 15.84 14.17 15.75 14.06 15.75H9.92999C9.82999 15.75 9.74001 15.83 9.74001 15.94V21.25H9.75Z" fill={`${color}`} />
		<path d="M12 11.75C11.59 11.75 11.25 11.41 11.25 11V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V11C12.75 11.41 12.41 11.75 12 11.75Z" fill={`${color}`} />
		<path d="M14.5 9.25H9.5C9.09 9.25 8.75 8.91 8.75 8.5C8.75 8.09 9.09 7.75 9.5 7.75H14.5C14.91 7.75 15.25 8.09 15.25 8.5C15.25 8.91 14.91 9.25 14.5 9.25Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22 21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H22C22.41 22.75 22.75 22.41 22.75 22C22.75 21.59 22.41 21.25 22 21.25Z" fill={`${color}`} />
		<path d="M17 2H7C4 2 3 3.79 3 6V22H9V15.94C9 15.42 9.42 15 9.94 15H14.07C14.58 15 15.01 15.42 15.01 15.94V22H21.01V6C21 3.79 20 2 17 2ZM14.5 9.25H12.75V11C12.75 11.41 12.41 11.75 12 11.75C11.59 11.75 11.25 11.41 11.25 11V9.25H9.5C9.09 9.25 8.75 8.91 8.75 8.5C8.75 8.09 9.09 7.75 9.5 7.75H11.25V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V7.75H14.5C14.91 7.75 15.25 8.09 15.25 8.5C15.25 8.91 14.91 9.25 14.5 9.25Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22 21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H22C22.41 22.75 22.75 22.41 22.75 22C22.75 21.59 22.41 21.25 22 21.25Z" fill={`${color}`} />
		<path opacity="0.4" d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z" fill={`${color}`} />
		<path d="M14.0602 15H9.93022C9.42022 15 8.99023 15.42 8.99023 15.94V22H14.9902V15.94C15.0002 15.42 14.5802 15 14.0602 15Z" fill={`${color}`} />
		<path d="M14.5 7.75H12.75V6C12.75 5.59 12.41 5.25 12 5.25C11.59 5.25 11.25 5.59 11.25 6V7.75H9.5C9.09 7.75 8.75 8.09 8.75 8.5C8.75 8.91 9.09 9.25 9.5 9.25H11.25V11C11.25 11.41 11.59 11.75 12 11.75C12.41 11.75 12.75 11.41 12.75 11V9.25H14.5C14.91 9.25 15.25 8.91 15.25 8.5C15.25 8.09 14.91 7.75 14.5 7.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21 6C21 3.79 20 2 17 2H7C4 2 3 3.79 3 6V22H21V10.02" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 22H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.0602 15H9.93022C9.42022 15 8.99023 15.42 8.99023 15.94V22H14.9902V15.94C15.0002 15.42 14.5802 15 14.0602 15Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 6V11" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9.5 8.5H14.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 22H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M14.0602 15H9.93022C9.42022 15 8.99023 15.42 8.99023 15.94V22H14.9902V15.94C15.0002 15.42 14.5802 15 14.0602 15Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<g opacity="0.4">
			<path d="M12 6V11" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M9.5 8.5H14.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		</g>
	</svg>
{/if}
