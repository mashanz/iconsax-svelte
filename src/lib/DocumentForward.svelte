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
			d="M11 17L13 15L11 13L13 15H7"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
			stroke={`${color}`}
			stroke-width="1.5"
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
			d="M11 17.7499C10.81 17.7499 10.62 17.6799 10.47 17.5299C10.18 17.2399 10.18 16.7599 10.47 16.4699L11.19 15.7499H7C6.59 15.7499 6.25 15.4099 6.25 14.9999C6.25 14.5899 6.59 14.2499 7 14.2499H11.19L10.47 13.5299C10.32 13.3799 10.25 13.1899 10.25 12.9999C10.25 12.8099 10.32 12.6199 10.47 12.4699C10.76 12.1799 11.24 12.1799 11.53 12.4699L13.53 14.4699C13.66 14.5999 13.73 14.7699 13.74 14.9299C13.74 14.9799 13.74 15.0399 13.74 15.0899C13.72 15.2299 13.66 15.3599 13.56 15.4799C13.55 15.4899 13.53 15.5099 13.52 15.5199L11.52 17.5199C11.38 17.6799 11.19 17.7499 11 17.7499Z"
			fill={`${color}`} />
		<path
			d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"
			fill={`${color}`} />
		<path
			d="M22 10.75H18C14.58 10.75 13.25 9.41999 13.25 5.99999V1.99999C13.25 1.69999 13.43 1.41999 13.71 1.30999C13.99 1.18999 14.31 1.25999 14.53 1.46999L22.53 9.46999C22.74 9.67999 22.81 10.01 22.69 10.29C22.57 10.57 22.3 10.75 22 10.75ZM14.75 3.80999V5.99999C14.75 8.57999 15.42 9.24999 18 9.24999H20.19L14.75 3.80999Z"
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
			d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM13.75 14.94C13.75 14.99 13.75 15.05 13.75 15.1C13.73 15.24 13.67 15.37 13.57 15.49C13.56 15.5 13.54 15.52 13.53 15.53L11.53 17.53C11.38 17.68 11.19 17.75 11 17.75C10.81 17.75 10.62 17.68 10.47 17.53C10.18 17.24 10.18 16.76 10.47 16.47L11.19 15.75H7C6.59 15.75 6.25 15.41 6.25 15C6.25 14.59 6.59 14.25 7 14.25H11.19L10.47 13.53C10.32 13.38 10.25 13.19 10.25 13C10.25 12.81 10.32 12.62 10.47 12.47C10.76 12.18 11.24 12.18 11.53 12.47L13.53 14.47C13.66 14.61 13.73 14.77 13.75 14.94Z"
			fill={`${color}`} />
		<path
			d="M17.4297 8.81048C18.3797 8.82048 19.6997 8.82048 20.8297 8.82048C21.3997 8.82048 21.6997 8.15048 21.2997 7.75048C19.8597 6.30048 17.2797 3.69048 15.7997 2.21048C15.3897 1.80048 14.6797 2.08048 14.6797 2.65048V6.14048C14.6797 7.60048 15.9197 8.81048 17.4297 8.81048Z"
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
			d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
			fill={`${color}`} />
		<path
			d="M15.7997 2.20999C15.3897 1.79999 14.6797 2.07999 14.6797 2.64999V6.13999C14.6797 7.59999 15.9197 8.80999 17.4297 8.80999C18.3797 8.81999 19.6997 8.81999 20.8297 8.81999C21.3997 8.81999 21.6997 8.14999 21.2997 7.74999C19.8597 6.29999 17.2797 3.68999 15.7997 2.20999Z"
			fill={`${color}`} />
		<path
			d="M11 17.7499C10.81 17.7499 10.62 17.6799 10.47 17.5299C10.18 17.2399 10.18 16.7599 10.47 16.4699L11.19 15.7499H7C6.59 15.7499 6.25 15.4099 6.25 14.9999C6.25 14.5899 6.59 14.2499 7 14.2499H11.19L10.47 13.5299C10.32 13.3799 10.25 13.1899 10.25 12.9999C10.25 12.8099 10.32 12.6199 10.47 12.4699C10.76 12.1799 11.24 12.1799 11.53 12.4699L13.53 14.4699C13.66 14.5999 13.73 14.7699 13.74 14.9299C13.74 14.9799 13.74 15.0399 13.74 15.0899C13.72 15.2299 13.66 15.3599 13.56 15.4799C13.55 15.4899 13.53 15.5099 13.52 15.5199L11.52 17.5199C11.38 17.6799 11.19 17.7499 11 17.7499Z"
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
			d="M10.3496 15H12.9996L10.9996 17"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7 15H8"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M13 15L11 13"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 9C2 4 4 2 9 2H14"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V12.98"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18 10C15 10 14 9 14 6V2L22 10"
			stroke={`${color}`}
			stroke-width="1.5"
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
			d="M11 17L13 15L11 13L13 15H7"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
