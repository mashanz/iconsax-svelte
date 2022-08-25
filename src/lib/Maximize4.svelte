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
			d="M21 9V3H15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M3 15V21H9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M21 3L13.5 10.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M10.5 13.5L3 21"
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
			d="M21 9.75C20.59 9.75 20.25 9.41 20.25 9V3.75H15C14.59 3.75 14.25 3.41 14.25 3C14.25 2.59 14.59 2.25 15 2.25H21C21.41 2.25 21.75 2.59 21.75 3V9C21.75 9.41 21.41 9.75 21 9.75Z"
			fill={`${color}`} />
		<path
			d="M9 21.75H3C2.59 21.75 2.25 21.41 2.25 21V15C2.25 14.59 2.59 14.25 3 14.25C3.41 14.25 3.75 14.59 3.75 15V20.25H9C9.41 20.25 9.75 20.59 9.75 21C9.75 21.41 9.41 21.75 9 21.75Z"
			fill={`${color}`} />
		<path
			d="M13.4995 11.2499C13.3095 11.2499 13.1195 11.1799 12.9695 11.0299C12.6795 10.7399 12.6795 10.2599 12.9695 9.96994L20.4695 2.46994C20.7595 2.17994 21.2395 2.17994 21.5295 2.46994C21.8195 2.75994 21.8195 3.23994 21.5295 3.52994L14.0295 11.0299C13.8795 11.1799 13.6895 11.2499 13.4995 11.2499Z"
			fill={`${color}`} />
		<path
			d="M2.99945 21.7499C2.80945 21.7499 2.61945 21.6799 2.46945 21.5299C2.17945 21.2399 2.17945 20.7599 2.46945 20.4699L9.96945 12.9699C10.2595 12.6799 10.7395 12.6799 11.0295 12.9699C11.3195 13.2599 11.3195 13.7399 11.0295 14.0299L3.52945 21.5299C3.37945 21.6799 3.18945 21.7499 2.99945 21.7499Z"
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
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM11.53 13.53L7.81 17.25H10C10.41 17.25 10.75 17.59 10.75 18C10.75 18.41 10.41 18.75 10 18.75H6C5.9 18.75 5.8 18.73 5.71 18.69C5.53 18.61 5.38 18.47 5.3 18.28C5.27 18.19 5.25 18.1 5.25 18V14C5.25 13.59 5.59 13.25 6 13.25C6.41 13.25 6.75 13.59 6.75 14V16.19L10.47 12.47C10.76 12.18 11.24 12.18 11.53 12.47C11.82 12.76 11.82 13.24 11.53 13.53ZM18.75 10C18.75 10.41 18.41 10.75 18 10.75C17.59 10.75 17.25 10.41 17.25 10V7.81L13.53 11.53C13.38 11.68 13.19 11.75 13 11.75C12.81 11.75 12.62 11.68 12.47 11.53C12.18 11.24 12.18 10.76 12.47 10.47L16.19 6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.1 5.25 18.19 5.27 18.29 5.31C18.47 5.39 18.62 5.53 18.7 5.72C18.73 5.81 18.75 5.9 18.75 6V10Z"
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
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
			fill={`${color}`} />
		<path
			d="M18.6895 5.71C18.6095 5.53 18.4695 5.38 18.2795 5.3C18.1895 5.27 18.0995 5.25 17.9995 5.25H13.9995C13.5895 5.25 13.2495 5.59 13.2495 6C13.2495 6.41 13.5895 6.75 13.9995 6.75H16.1895L12.4695 10.47C12.1795 10.76 12.1795 11.24 12.4695 11.53C12.6195 11.68 12.8095 11.75 12.9995 11.75C13.1895 11.75 13.3795 11.68 13.5295 11.53L17.2495 7.81V10C17.2495 10.41 17.5895 10.75 17.9995 10.75C18.4095 10.75 18.7495 10.41 18.7495 10V6C18.7495 5.9 18.7295 5.81 18.6895 5.71Z"
			fill={`${color}`} />
		<path
			d="M11.53 12.4699C11.24 12.1799 10.76 12.1799 10.47 12.4699L6.75 16.1899V13.9999C6.75 13.5899 6.41 13.2499 6 13.2499C5.59 13.2499 5.25 13.5899 5.25 13.9999V17.9999C5.25 18.0999 5.27 18.1899 5.31 18.2899C5.39 18.4699 5.53 18.6199 5.72 18.6999C5.8 18.7299 5.9 18.7499 6 18.7499H10C10.41 18.7499 10.75 18.4099 10.75 17.9999C10.75 17.5899 10.41 17.2499 10 17.2499H7.81L11.53 13.5299C11.82 13.2399 11.82 12.7599 11.53 12.4699Z"
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
			d="M21 5V3H15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M21 8.99997V7.96997"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M3 19V21H9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M3 15V16.03"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M21 3L13.5 10.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M10.5 13.5L3 21"
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
			d="M3 15V21H9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<g opacity="0.4">
			<path
				d="M21 9V3H15"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M21 3L13.5 10.5"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
		<path
			d="M10.5 13.5L3 21"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
