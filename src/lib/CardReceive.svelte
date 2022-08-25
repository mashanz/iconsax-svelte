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
			d="M2 8.5H14.5"
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
			d="M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M20 3.5V9.5L22 7.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M20 9.5L18 7.5"
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
			d="M14.5 9.25H2C1.59 9.25 1.25 8.91 1.25 8.5C1.25 8.09 1.59 7.75 2 7.75H14.5C14.91 7.75 15.25 8.09 15.25 8.5C15.25 8.91 14.91 9.25 14.5 9.25Z"
			fill={`${color}`} />
		<path
			d="M8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25Z"
			fill={`${color}`} />
		<path
			d="M14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"
			fill={`${color}`} />
		<path
			d="M17.56 21.25H6.44C2.46 21.25 1.25 20.05 1.25 16.11V7.89C1.25 3.95 2.46 2.75 6.44 2.75H14.5C14.91 2.75 15.25 3.09 15.25 3.5C15.25 3.91 14.91 4.25 14.5 4.25H6.44C3.3 4.25 2.75 4.79 2.75 7.89V16.1C2.75 19.2 3.3 19.74 6.44 19.74H17.55C20.69 19.74 21.24 19.2 21.24 16.1V14.02C21.24 13.61 21.58 13.27 21.99 13.27C22.4 13.27 22.74 13.61 22.74 14.02V16.1C22.75 20.05 21.54 21.25 17.56 21.25Z"
			fill={`${color}`} />
		<path
			d="M20 10.25C19.9 10.25 19.81 10.23 19.71 10.19C19.43 10.07 19.25 9.8 19.25 9.5V3.5C19.25 3.09 19.59 2.75 20 2.75C20.41 2.75 20.75 3.09 20.75 3.5V7.69L21.47 6.97C21.76 6.68 22.24 6.68 22.53 6.97C22.82 7.26 22.82 7.74 22.53 8.03L20.53 10.03C20.39 10.17 20.2 10.25 20 10.25Z"
			fill={`${color}`} />
		<path
			d="M19.9995 10.2499C19.8095 10.2499 19.6195 10.1799 19.4695 10.0299L17.4695 8.02994C17.1795 7.73994 17.1795 7.25994 17.4695 6.96994C17.7595 6.67994 18.2395 6.67994 18.5295 6.96994L20.5295 8.96994C20.8195 9.25994 20.8195 9.73994 20.5295 10.0299C20.3795 10.1799 20.1895 10.2499 19.9995 10.2499Z"
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
			d="M19.97 8.75H17.03C15.76 8.75 15 7.99 15 6.72V3.78C15 2.51 15.76 1.75 17.03 1.75H19.97C21.24 1.75 22 2.51 22 3.78V6.72C22 7.99 21.24 8.75 19.97 8.75ZM20.19 5.44C20.07 5.32 19.91 5.26 19.75 5.26C19.59 5.26 19.43 5.32 19.31 5.44L19.13 5.62V3.38C19.13 3.03 18.85 2.75 18.5 2.75C18.15 2.75 17.87 3.03 17.87 3.38V5.62L17.69 5.44C17.45 5.2 17.05 5.2 16.81 5.44C16.57 5.68 16.57 6.08 16.81 6.32L18.06 7.57C18.11 7.62 18.18 7.66 18.25 7.69C18.27 7.7 18.29 7.7 18.31 7.71C18.36 7.73 18.41 7.74 18.47 7.74C18.49 7.74 18.51 7.74 18.53 7.74C18.6 7.74 18.66 7.73 18.73 7.7C18.74 7.7 18.74 7.7 18.75 7.7C18.82 7.67 18.88 7.63 18.93 7.58C18.94 7.57 18.94 7.57 18.95 7.57L20.2 6.32C20.44 6.08 20.44 5.68 20.19 5.44Z"
			fill={`${color}`} />
		<path
			d="M2 11.46V16.46C2 18.75 3.85 20.6 6.14 20.6H17.85C20.14 20.6 22 18.74 22 16.45V11.46C22 10.79 21.46 10.25 20.79 10.25H3.21C2.54 10.25 2 10.79 2 11.46ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"
			fill={`${color}`} />
		<path
			d="M13.5 4.60844V7.53844C13.5 8.20844 12.96 8.74844 12.29 8.74844H3.21C2.53 8.74844 2 8.18844 2 7.51844C2.01 6.38844 2.46 5.35844 3.21 4.60844C3.96 3.85844 5 3.39844 6.14 3.39844H12.29C12.96 3.39844 13.5 3.93844 13.5 4.60844Z"
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
			d="M20.97 8H18.03C16.76 8 16 7.24 16 5.97V3.03C16 1.76 16.76 1 18.03 1H20.97C22.24 1 23 1.76 23 3.03V5.97C23 7.24 22.24 8 20.97 8ZM21.19 4.69C21.07 4.57 20.91 4.51 20.75 4.51C20.59 4.51 20.43 4.57 20.31 4.69L20.13 4.87V2.63C20.13 2.28 19.85 2 19.5 2C19.15 2 18.87 2.28 18.87 2.63V4.87L18.69 4.69C18.45 4.45 18.05 4.45 17.81 4.69C17.57 4.93 17.57 5.33 17.81 5.57L19.06 6.82C19.11 6.87 19.18 6.91 19.25 6.94C19.27 6.95 19.29 6.95 19.31 6.96C19.36 6.98 19.41 6.99 19.47 6.99C19.49 6.99 19.51 6.99 19.53 6.99C19.6 6.99 19.66 6.98 19.73 6.95C19.74 6.95 19.74 6.95 19.75 6.95C19.82 6.92 19.88 6.88 19.93 6.83C19.94 6.82 19.94 6.82 19.95 6.82L21.2 5.57C21.44 5.33 21.44 4.93 21.19 4.69Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M22 7.7699V8.9999H2V7.5399C2 5.2499 3.86 3.3999 6.15 3.3999H16V5.9699C16 7.2399 16.76 7.9999 18.03 7.9999H20.97C21.37 7.9999 21.71 7.9299 22 7.7699Z"
			fill={`${color}`} />
		<path
			d="M2 9V16.46C2 18.75 3.86 20.6 6.15 20.6H17.85C20.14 20.6 22 18.75 22 16.46V9H2ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z"
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
			d="M2 8.5H14.5"
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
			d="M2 11.06V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V15.03"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M20 3.5V9.5L22 7.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M20 9.5L18 7.5"
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
			d="M2 8.5H14.5"
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
			d="M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<g opacity="0.4">
			<path
				d="M20 3.5V9.5L22 7.5"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M20 9.5L18 7.5"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
	</svg>
{/if}
