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
			d="M8 10L6 12L8 14"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16 10L18 12L16 14"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M13 9.66992L11 14.33"
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
			d="M7.99945 14.75C7.80945 14.75 7.61945 14.68 7.46945 14.53L5.46945 12.53C5.17945 12.24 5.17945 11.7599 5.46945 11.4699L7.46945 9.46994C7.75945 9.17994 8.23945 9.17994 8.52945 9.46994C8.81945 9.75994 8.81945 10.24 8.52945 10.53L7.05945 12L8.52945 13.4699C8.81945 13.7599 8.81945 14.24 8.52945 14.53C8.37945 14.68 8.18945 14.75 7.99945 14.75Z"
			fill={`${color}`} />
		<path
			d="M15.9995 14.75C15.8095 14.75 15.6195 14.68 15.4695 14.53C15.1795 14.24 15.1795 13.7599 15.4695 13.4699L16.9395 12L15.4695 10.53C15.1795 10.24 15.1795 9.75994 15.4695 9.46994C15.7595 9.17994 16.2395 9.17994 16.5295 9.46994L18.5295 11.4699C18.8195 11.7599 18.8195 12.24 18.5295 12.53L16.5295 14.53C16.3795 14.68 16.1895 14.75 15.9995 14.75Z"
			fill={`${color}`} />
		<path
			d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
			fill={`${color}`} />
		<path
			d="M11.0001 15.0801C10.9001 15.0801 10.8001 15.0601 10.7101 15.0201C10.3301 14.8601 10.1501 14.4201 10.3201 14.0301L12.3201 9.36004C12.4801 8.98004 12.9201 8.80002 13.3001 8.97002C13.6801 9.13002 13.8601 9.57008 13.6901 9.96008L11.6901 14.6301C11.5701 14.9101 11.2901 15.0801 11.0001 15.0801Z"
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
			d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8.53 13.47C8.82 13.76 8.82 14.24 8.53 14.53C8.38 14.68 8.19 14.75 8 14.75C7.81 14.75 7.62 14.68 7.47 14.53L5.47 12.53C5.18 12.24 5.18 11.76 5.47 11.47L7.47 9.47C7.76 9.18 8.24 9.18 8.53 9.47C8.82 9.76 8.82 10.24 8.53 10.53L7.06 12L8.53 13.47ZM13.69 9.96L11.69 14.63C11.57 14.91 11.29 15.08 11 15.08C10.9 15.08 10.8 15.06 10.71 15.02C10.33 14.86 10.15 14.42 10.32 14.03L12.32 9.36C12.48 8.98 12.92 8.8 13.3 8.97C13.68 9.14 13.85 9.58 13.69 9.96ZM18.53 12.53L16.53 14.53C16.38 14.68 16.19 14.75 16 14.75C15.81 14.75 15.62 14.68 15.47 14.53C15.18 14.24 15.18 13.76 15.47 13.47L16.94 12L15.47 10.53C15.18 10.24 15.18 9.76 15.47 9.47C15.76 9.18 16.24 9.18 16.53 9.47L18.53 11.47C18.82 11.76 18.82 12.24 18.53 12.53Z"
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
			d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
			fill={`${color}`} />
		<path
			d="M7.99945 14.75C7.80945 14.75 7.61945 14.68 7.46945 14.53L5.46945 12.53C5.17945 12.24 5.17945 11.7599 5.46945 11.4699L7.46945 9.46994C7.75945 9.17994 8.23945 9.17994 8.52945 9.46994C8.81945 9.75994 8.81945 10.24 8.52945 10.53L7.05945 12L8.52945 13.4699C8.81945 13.7599 8.81945 14.24 8.52945 14.53C8.37945 14.68 8.18945 14.75 7.99945 14.75Z"
			fill={`${color}`} />
		<path
			d="M15.9995 14.75C15.8095 14.75 15.6195 14.68 15.4695 14.53C15.1795 14.24 15.1795 13.7599 15.4695 13.4699L16.9395 12L15.4695 10.53C15.1795 10.24 15.1795 9.75994 15.4695 9.46994C15.7595 9.17994 16.2395 9.17994 16.5295 9.46994L18.5295 11.4699C18.8195 11.7599 18.8195 12.24 18.5295 12.53L16.5295 14.53C16.3795 14.68 16.1895 14.75 15.9995 14.75Z"
			fill={`${color}`} />
		<path
			d="M11.0001 15.0801C10.9001 15.0801 10.8001 15.0601 10.7101 15.0201C10.3301 14.8601 10.1501 14.4201 10.3201 14.0301L12.3201 9.36004C12.4801 8.98004 12.9201 8.80002 13.3001 8.97002C13.6801 9.13002 13.8601 9.57008 13.6901 9.96008L11.6901 14.6301C11.5701 14.9101 11.2901 15.0801 11.0001 15.0801Z"
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
			d="M8 10L6 12L8 14"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16 10L18 12L16 14"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M13 9.66992L11 14.33"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.29998 7.97 2.84998"
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
			d="M8 10L6 12L8 14"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M16 10L18 12L16 14"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M13 9.66992L11 14.33"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
