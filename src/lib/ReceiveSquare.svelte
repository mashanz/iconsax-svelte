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
			d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 11.51L12 14.51L15 11.51"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 14.51V6.51001"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51"
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
			d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
			fill={`${color}`} />
		<path
			d="M11.9995 15.26C11.8095 15.26 11.6195 15.1899 11.4695 15.0399L8.46945 12.0399C8.17945 11.7499 8.17945 11.27 8.46945 10.98C8.75945 10.69 9.23945 10.69 9.52945 10.98L11.9995 13.45L14.4695 10.98C14.7595 10.69 15.2395 10.69 15.5295 10.98C15.8195 11.27 15.8195 11.7499 15.5295 12.0399L12.5295 15.0399C12.3795 15.1899 12.1895 15.26 11.9995 15.26Z"
			fill={`${color}`} />
		<path
			d="M12 15.2598C11.59 15.2598 11.25 14.9198 11.25 14.5098V6.50977C11.25 6.09977 11.59 5.75977 12 5.75977C12.41 5.75977 12.75 6.09977 12.75 6.50977V14.5098C12.75 14.9298 12.41 15.2598 12 15.2598Z"
			fill={`${color}`} />
		<path
			d="M12.0004 18.2302C9.89043 18.2302 7.77043 17.8902 5.76043 17.2202C5.37043 17.0902 5.16043 16.6602 5.29043 16.2702C5.42043 15.8802 5.84043 15.6602 6.24043 15.8002C9.96043 17.0402 14.0504 17.0402 17.7704 15.8002C18.1604 15.6702 18.5904 15.8802 18.7204 16.2702C18.8504 16.6602 18.6404 17.0902 18.2504 17.2202C16.2304 17.9002 14.1104 18.2302 12.0004 18.2302Z"
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
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.47 10.98C8.76 10.69 9.24 10.69 9.53 10.98L11.25 12.7V6.51C11.25 6.1 11.59 5.76 12 5.76C12.41 5.76 12.75 6.1 12.75 6.51V12.7L14.47 10.98C14.76 10.69 15.24 10.69 15.53 10.98C15.82 11.27 15.82 11.75 15.53 12.04L12.53 15.04C12.46 15.11 12.38 15.16 12.29 15.2C12.2 15.24 12.1 15.26 12 15.26C11.9 15.26 11.81 15.24 11.71 15.2C11.62 15.16 11.54 15.11 11.47 15.04L8.47 12.04C8.18 11.75 8.18 11.28 8.47 10.98ZM18.24 17.22C16.23 17.89 14.12 18.23 12 18.23C9.88 18.23 7.77 17.89 5.76 17.22C5.37 17.09 5.16 16.66 5.29 16.27C5.42 15.88 5.84 15.66 6.24 15.8C9.96 17.04 14.05 17.04 17.77 15.8C18.16 15.67 18.59 15.88 18.72 16.27C18.84 16.67 18.63 17.09 18.24 17.22Z"
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
			d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z"
			fill={`${color}`} />
		<path
			d="M11.4714 15.04C11.5414 15.11 11.6214 15.16 11.7114 15.2C11.8014 15.24 11.9014 15.26 12.0014 15.26C12.1014 15.26 12.1914 15.24 12.2914 15.2C12.3814 15.16 12.4614 15.11 12.5314 15.04L15.5314 12.04C15.8214 11.75 15.8214 11.27 15.5314 10.98C15.2414 10.69 14.7614 10.69 14.4714 10.98L12.7514 12.7V6.51001C12.7514 6.10001 12.4114 5.76001 12.0014 5.76001C11.5914 5.76001 11.2514 6.10001 11.2514 6.51001V12.7L9.5314 10.98C9.2414 10.69 8.76141 10.69 8.47141 10.98C8.18141 11.27 8.18141 11.75 8.47141 12.04L11.4714 15.04Z"
			fill={`${color}`} />
		<path
			d="M18.7107 16.28C18.5807 15.89 18.1607 15.68 17.7607 15.81C14.0407 17.05 9.95067 17.05 6.23067 15.81C5.84067 15.68 5.41067 15.89 5.28067 16.28C5.15067 16.67 5.36067 17.1 5.75067 17.23C7.76067 17.9 9.87067 18.24 11.9907 18.24C14.1107 18.24 16.2207 17.9 18.2307 17.23C18.6307 17.09 18.8407 16.67 18.7107 16.28Z"
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
			d="M2 13.05V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 11.51L12 14.51L15 11.51"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 14.51V6.51001"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51"
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
			d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<g opacity="0.4">
			<path
				d="M9 11.5098L12 14.5098L15 11.5098"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M12 14.5098V6.50977"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M6 16.5098C9.89 17.8098 14.11 17.8098 18 16.5098"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
	</svg>
{/if}
