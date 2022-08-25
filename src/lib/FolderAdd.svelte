<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M12.0601 16.5V11.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M14.5 14H9.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10" />
	</svg>
{:else if variant === 'Outline'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M12.0605 17.25C11.6505 17.25 11.3105 16.91 11.3105 16.5V11.5C11.3105 11.09 11.6505 10.75 12.0605 10.75C12.4705 10.75 12.8105 11.09 12.8105 11.5V16.5C12.8105 16.91 12.4705 17.25 12.0605 17.25Z"
			fill={`${color}`} />
		<path
			d="M14.5 14.75H9.5C9.09 14.75 8.75 14.41 8.75 14C8.75 13.59 9.09 13.25 9.5 13.25H14.5C14.91 13.25 15.25 13.59 15.25 14C15.25 14.41 14.91 14.75 14.5 14.75Z"
			fill={`${color}`} />
		<path
			d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V7C1.25 2.59 2.59 1.25 7 1.25H8.5C10.25 1.25 10.8 1.82 11.5 2.75L13 4.75C13.33 5.19 13.38 5.25 14 5.25H17C21.41 5.25 22.75 6.59 22.75 11V17C22.75 21.41 21.41 22.75 17 22.75ZM7 2.75C3.43 2.75 2.75 3.43 2.75 7V17C2.75 20.57 3.43 21.25 7 21.25H17C20.57 21.25 21.25 20.57 21.25 17V11C21.25 7.43 20.57 6.75 17 6.75H14C12.72 6.75 12.3 6.31 11.8 5.65L10.3 3.65C9.78 2.96 9.63 2.75 8.5 2.75H7Z"
			fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M21.0169 7.99175C21.4148 8.55833 20.9405 9.25 20.2482 9.25H3C2.44772 9.25 2 8.80228 2 8.25V6.42C2 3.98 3.98 2 6.42 2H8.74C10.37 2 10.88 2.53 11.53 3.4L12.93 5.26C13.24 5.67 13.28 5.72 13.86 5.72H16.65C18.4546 5.72 20.0516 6.61709 21.0169 7.99175Z"
			fill={`${color}`} />
		<path
			d="M21.9834 11.7466C21.9815 11.1957 21.5343 10.75 20.9834 10.75L2.99998 10.7503C2.44771 10.7503 2 11.1981 2 11.7503V16.6504C2 19.6004 4.4 22.0004 7.35 22.0004H16.65C19.6 22.0004 22 19.6004 22 16.6504L21.9834 11.7466ZM14.5 16.7504H12.81V18.5004C12.81 18.9104 12.47 19.2504 12.06 19.2504C11.64 19.2504 11.31 18.9104 11.31 18.5004V16.7504H9.5C9.09 16.7504 8.75 16.4104 8.75 16.0004C8.75 15.5904 9.09 15.2504 9.5 15.2504H11.31V13.5004C11.31 13.0904 11.64 12.7504 12.06 12.7504C12.47 12.7504 12.81 13.0904 12.81 13.5004V15.2504H14.5C14.91 15.2504 15.25 15.5904 15.25 16.0004C15.25 16.4104 14.91 16.7504 14.5 16.7504Z"
			fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			opacity="0.4"
			d="M21.74 9.44H2V6.42C2 3.98 3.98 2 6.42 2H8.75C10.38 2 10.89 2.53 11.54 3.4L12.94 5.26C13.25 5.67 13.29 5.73 13.87 5.73H16.66C19.03 5.72 21.05 7.28 21.74 9.44Z"
			fill={`${color}`} />
		<path
			d="M21.99 10.8399C21.97 10.3499 21.89 9.88994 21.74 9.43994H2V16.6499C2 19.5999 4.4 21.9999 7.35 21.9999H16.65C19.6 21.9999 22 19.5999 22 16.6499V11.0699C22 10.9999 22 10.9099 21.99 10.8399ZM14.5 16.2499H12.81V17.9999C12.81 18.4099 12.47 18.7499 12.06 18.7499C11.65 18.7499 11.31 18.4099 11.31 17.9999V16.2499H9.5C9.09 16.2499 8.75 15.9099 8.75 15.4999C8.75 15.0899 9.09 14.7499 9.5 14.7499H11.31V12.9999C11.31 12.5899 11.65 12.2499 12.06 12.2499C12.47 12.2499 12.81 12.5899 12.81 12.9999V14.7499H14.5C14.91 14.7499 15.25 15.0899 15.25 15.4999C15.25 15.9099 14.91 16.2499 14.5 16.2499Z"
			fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M12.0605 16.5V11.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M14.5 14H9.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 13.02V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 14.99V17C22 21 21 22 17 22H7C3 22 2 21 2 17"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<g opacity="0.4">
			<path
				d="M12.0605 16.5V11.5"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M14.5 14H9.5"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
		<path
			d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10" />
	</svg>
{/if}
