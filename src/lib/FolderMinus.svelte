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
			d="M14.4299 14.55H9.42993"
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
			d="M14.4297 15.3H9.42969C9.01969 15.3 8.67969 14.96 8.67969 14.55C8.67969 14.14 9.01969 13.8 9.42969 13.8H14.4297C14.8397 13.8 15.1797 14.14 15.1797 14.55C15.1797 14.96 14.8397 15.3 14.4297 15.3Z"
			fill={`${color}`} />
		<path
			d="M17 22.75H7C2.59 22.75 1.25 21.41 1.25 17V7C1.25 2.59 2.59 1.25 7 1.25H8.5C10.25 1.25 10.8 1.82 11.5 2.75L13 4.75C13.33 5.19 13.38 5.25 14 5.25H17C21.41 5.25 22.75 6.59 22.75 11V17C22.75 21.41 21.41 22.75 17 22.75ZM7 2.75C3.42 2.75 2.75 3.43 2.75 7V17C2.75 20.57 3.42 21.25 7 21.25H17C20.58 21.25 21.25 20.57 21.25 17V11C21.25 7.43 20.58 6.75 17 6.75H14C12.72 6.75 12.3 6.31 11.8 5.65L10.3 3.65C9.78 2.96 9.62 2.75 8.5 2.75H7Z"
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
			d="M21.9834 11.7466C21.9815 11.1957 21.5343 10.75 20.9833 10.75L2.99996 10.7507C2.44769 10.7507 2 11.1984 2 11.7507V16.6507C2 19.6007 4.4 22.0007 7.35 22.0007H16.65C19.6 22.0007 22 19.6007 22 16.6507L21.9834 11.7466ZM14.43 16.7507H9.43C9.01 16.7507 8.68 16.4207 8.68 16.0007C8.68 15.5907 9.01 15.2507 9.43 15.2507H14.43C14.84 15.2507 15.18 15.5907 15.18 16.0007C15.18 16.4207 14.84 16.7507 14.43 16.7507Z"
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
			d="M21.99 10.8399C21.97 10.3499 21.89 9.88994 21.74 9.43994H2V16.6499C2 19.5999 4.4 21.9999 7.35 21.9999H16.65C19.6 21.9999 22 19.5999 22 16.6499V11.0699C22 10.9999 22 10.9099 21.99 10.8399ZM14.43 16.2999H9.43C9.02 16.2999 8.68 15.9599 8.68 15.5499C8.68 15.1399 9.02 14.7999 9.43 14.7999H14.43C14.84 14.7999 15.18 15.1399 15.18 15.5499C15.18 15.9599 14.84 16.2999 14.43 16.2999Z"
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
			d="M14.4297 14.55H9.42969"
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
		<path
			opacity="0.4"
			d="M14.4297 14.5498H9.42969"
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
{/if}
