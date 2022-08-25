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
			d="M2 8.5H13.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6 16.5H8"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M10.5 16.5H14.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 11.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16.5 6L18 7.5L22 3.5"
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
			d="M22 10.75H2C1.59 10.75 1.25 10.41 1.25 10C1.25 9.59 1.59 9.25 2 9.25H22C22.41 9.25 22.75 9.59 22.75 10C22.75 10.41 22.41 10.75 22 10.75Z"
			fill={`${color}`} />
		<path
			d="M11.5502 21.2498H6.44025C2.46025 21.2498 1.24023 20.0498 1.24023 16.1098V7.88977C1.24023 4.73977 1.91022 2.98977 5.48022 2.77977C5.78022 2.76977 6.10025 2.75977 6.44025 2.75977H17.5502C21.5302 2.75977 22.7502 3.95976 22.7502 7.89977V12.3098C22.7502 12.7198 22.4102 13.0598 22.0002 13.0598C21.5902 13.0598 21.2502 12.7198 21.2502 12.3098V7.89977C21.2502 4.80977 20.7002 4.25977 17.5502 4.25977H6.44025C6.12025 4.25977 5.83023 4.26977 5.55023 4.27977C3.38023 4.40977 2.74023 4.89977 2.74023 7.89977V16.1198C2.74023 19.2098 3.29025 19.7598 6.44025 19.7598H11.5502C11.9602 19.7598 12.3002 20.0998 12.3002 20.5098C12.3002 20.9198 11.9702 21.2498 11.5502 21.2498Z"
			fill={`${color}`} />
		<path
			d="M10 16.75H6C5.59 16.75 5.25 16.41 5.25 16C5.25 15.59 5.59 15.25 6 15.25H10C10.41 15.25 10.75 15.59 10.75 16C10.75 16.41 10.41 16.75 10 16.75Z"
			fill={`${color}`} />
		<path
			d="M18 22.75C16.34 22.75 14.78 21.87 13.94 20.44C13.49 19.72 13.25 18.87 13.25 18C13.25 15.38 15.38 13.25 18 13.25C20.62 13.25 22.75 15.38 22.75 18C22.75 18.87 22.51 19.72 22.06 20.45C21.22 21.87 19.66 22.75 18 22.75ZM18 14.75C16.21 14.75 14.75 16.21 14.75 18C14.75 18.59 14.91 19.17 15.22 19.67C15.8 20.65 16.87 21.25 18 21.25C19.13 21.25 20.2 20.65 20.78 19.68C21.09 19.17 21.25 18.6 21.25 18C21.25 16.21 19.79 14.75 18 14.75Z"
			fill={`${color}`} />
		<path
			d="M17.4289 19.7401C17.2389 19.7401 17.049 19.6701 16.899 19.5201L15.9089 18.5301C15.6189 18.2401 15.6189 17.7601 15.9089 17.4701C16.1989 17.1801 16.6789 17.1801 16.9689 17.4701L17.4489 17.9501L19.0489 16.4701C19.3489 16.1901 19.8289 16.2101 20.1089 16.5101C20.3889 16.8101 20.3689 17.2901 20.0689 17.5701L17.9389 19.54C17.7889 19.67 17.6089 19.7401 17.4289 19.7401Z"
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
			d="M2 11.46V16.46C2 18.75 3.85 20.6 6.14 20.6H17.85C20.14 20.6 22 18.74 22 16.45V11.46C22 10.79 21.46 10.25 20.79 10.25H3.21C2.54 10.25 2 10.79 2 11.46ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"
			fill={`${color}`} />
		<path
			d="M13.5 4.60844V7.53844C13.5 8.20844 12.96 8.74844 12.29 8.74844H3.21C2.53 8.74844 2 8.18844 2 7.51844C2.01 6.38844 2.46 5.35844 3.21 4.60844C3.96 3.85844 5 3.39844 6.14 3.39844H12.29C12.96 3.39844 13.5 3.93844 13.5 4.60844Z"
			fill={`${color}`} />
		<path
			d="M19.97 2H17.03C15.76 2 15 2.76 15 4.03V6.97C15 8.24 15.76 9 17.03 9H19.97C21.24 9 22 8.24 22 6.97V4.03C22 2.76 21.24 2 19.97 2ZM20.63 4.45L18.26 7.22C18.17 7.33 18.03 7.4 17.89 7.4C17.88 7.4 17.88 7.4 17.87 7.4C17.73 7.4 17.6 7.35 17.5 7.25L16.4 6.17C16.2 5.97 16.2 5.64 16.4 5.44C16.6 5.24 16.93 5.23 17.13 5.44L17.83 6.13L19.83 3.79C20.02 3.57 20.34 3.55 20.56 3.73C20.79 3.91 20.81 4.24 20.63 4.45Z"
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
			d="M22 7.7699V8.9999H2V7.5399C2 5.2499 3.86 3.3999 6.15 3.3999H16V5.9699C16 7.2399 16.76 7.9999 18.03 7.9999H20.97C21.37 7.9999 21.71 7.9299 22 7.7699Z"
			fill={`${color}`} />
		<path
			d="M2 9V16.46C2 18.75 3.86 20.6 6.15 20.6H17.85C20.14 20.6 22 18.75 22 16.46V9H2ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"
			fill={`${color}`} />
		<path
			d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.63 3.45L19.26 6.22C19.17 6.33 19.03 6.4 18.89 6.4C18.88 6.4 18.88 6.4 18.87 6.4C18.73 6.4 18.6 6.35 18.5 6.25L17.4 5.17C17.2 4.97 17.2 4.64 17.4 4.44C17.6 4.24 17.93 4.23 18.13 4.44L18.83 5.13L20.83 2.79C21.02 2.57 21.34 2.55 21.56 2.73C21.79 2.91 21.81 3.24 21.63 3.45Z"
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
			d="M2 8.5H13.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6 16.5H8"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M10.5 16.5H14.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 11.01V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 11.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V15.01"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16.5 6L18 7.5L22 3.5"
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
			d="M2 8.5H13.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M6 16.5H8"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M10.5 16.5H14.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 11.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M16.5 6L18 7.5L22 3.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
