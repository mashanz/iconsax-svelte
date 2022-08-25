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
			d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M4 12.0601H14.17"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M11.6791 15.3699C11.4891 15.3699 11.2991 15.2999 11.1491 15.1499C10.8591 14.8599 10.8591 14.3799 11.1491 14.0899L13.1791 12.0599L11.1491 10.0299C10.8591 9.73994 10.8591 9.25994 11.1491 8.96994C11.4391 8.67994 11.9191 8.67994 12.2091 8.96994L14.7691 11.5299C15.0591 11.8199 15.0591 12.2999 14.7691 12.5899L12.2091 15.1499C12.0691 15.2999 11.8691 15.3699 11.6791 15.3699Z"
			fill={`${color}`} />
		<path
			d="M14.17 12.8101H4C3.59 12.8101 3.25 12.4701 3.25 12.0601C3.25 11.6501 3.59 11.3101 4 11.3101H14.17C14.58 11.3101 14.92 11.6501 14.92 12.0601C14.92 12.4701 14.58 12.8101 14.17 12.8101Z"
			fill={`${color}`} />
		<path
			d="M12 20.75C11.59 20.75 11.25 20.41 11.25 20C11.25 19.59 11.59 19.25 12 19.25C16.27 19.25 19.25 16.27 19.25 12C19.25 7.73 16.27 4.75 12 4.75C11.59 4.75 11.25 4.41 11.25 4C11.25 3.59 11.59 3.25 12 3.25C17.15 3.25 20.75 6.85 20.75 12C20.75 17.15 17.15 20.75 12 20.75Z"
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
			d="M16.8 2H14.2C11 2 9 4 9 7.2V11.25H13.44L11.37 9.18C11.22 9.03 11.15 8.84 11.15 8.65C11.15 8.46 11.22 8.27 11.37 8.12C11.66 7.83 12.14 7.83 12.43 8.12L15.78 11.47C16.07 11.76 16.07 12.24 15.78 12.53L12.43 15.88C12.14 16.17 11.66 16.17 11.37 15.88C11.08 15.59 11.08 15.11 11.37 14.82L13.44 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z"
			fill={`${color}`} />
		<path
			d="M2.75 11.25C2.34 11.25 2 11.59 2 12C2 12.41 2.34 12.75 2.75 12.75H9V11.25H2.75Z"
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
			d="M9 7.2V16.79C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2H14.2C11 2 9 4 9 7.2Z"
			fill={`${color}`} />
		<path
			d="M12.43 8.12002L15.78 11.47C16.07 11.76 16.07 12.24 15.78 12.53L12.43 15.88C12.14 16.17 11.66 16.17 11.37 15.88C11.08 15.59 11.08 15.11 11.37 14.82L13.44 12.75H2.75C2.34 12.75 2 12.41 2 12C2 11.59 2.34 11.25 2.75 11.25H13.44L11.37 9.18002C11.22 9.03002 11.15 8.84002 11.15 8.65002C11.15 8.46002 11.22 8.27002 11.37 8.12002C11.66 7.82002 12.13 7.82002 12.43 8.12002Z"
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
			d="M11.6797 14.5599L14.2397 11.9999L11.6797 9.43994"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 12H14.17"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M4 12H5.96"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18.01 6.47998C19.25 7.83998 20 9.70998 20 12C20 17 16.42 20 12 20"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 4C13.05 4 14.05 4.17 14.97 4.49"
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
				d="M11.6797 14.62L14.2397 12.06L11.6797 9.5"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M4 12.0596H14.17"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
		<path
			d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
