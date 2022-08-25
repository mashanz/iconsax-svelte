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
			d="M10.25 21.5C14.5302 21.5 18 18.0302 18 13.75C18 9.46979 14.5302 6 10.25 6C5.96979 6 2.5 9.46979 2.5 13.75C2.5 18.0302 5.96979 21.5 10.25 21.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M21.5 2.5L16 8"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15 2.5H21.5V9"
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
			d="M10.25 22.25C5.56 22.25 1.75 18.44 1.75 13.75C1.75 9.06 5.56 5.25 10.25 5.25C14.94 5.25 18.75 9.06 18.75 13.75C18.75 18.44 14.94 22.25 10.25 22.25ZM10.25 6.75C6.39 6.75 3.25 9.89 3.25 13.75C3.25 17.61 6.39 20.75 10.25 20.75C14.11 20.75 17.25 17.61 17.25 13.75C17.25 9.89 14.11 6.75 10.25 6.75Z"
			fill={`${color}`} />
		<path
			d="M16.0004 8.74994C15.8104 8.74994 15.6204 8.67994 15.4704 8.52994C15.1804 8.23994 15.1804 7.75994 15.4704 7.46994L20.9704 1.96994C21.2604 1.67994 21.7404 1.67994 22.0304 1.96994C22.3204 2.25994 22.3204 2.73994 22.0304 3.02994L16.5304 8.52994C16.3804 8.67994 16.1904 8.74994 16.0004 8.74994Z"
			fill={`${color}`} />
		<path
			d="M21.5 9.75C21.09 9.75 20.75 9.41 20.75 9V3.25H15C14.59 3.25 14.25 2.91 14.25 2.5C14.25 2.09 14.59 1.75 15 1.75H21.5C21.91 1.75 22.25 2.09 22.25 2.5V9C22.25 9.41 21.91 9.75 21.5 9.75Z"
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
			d="M22.19 2.21C22.12 2.03 21.97 1.88 21.79 1.81C21.69 1.77 21.6 1.75 21.5 1.75H15C14.59 1.75 14.25 2.09 14.25 2.5C14.25 2.91 14.59 3.25 15 3.25H19.69L15.18 7.77H15.17C13.83 6.66 12.12 6 10.25 6C5.97 6 2.5 9.47 2.5 13.75C2.5 18.03 5.97 21.5 10.25 21.5C14.53 21.5 18 18.03 18 13.75C18 11.88 17.34 10.17 16.23 8.83L20.75 4.31V9C20.75 9.41 21.09 9.75 21.5 9.75C21.91 9.75 22.25 9.41 22.25 9V2.5C22.25 2.4 22.23 2.31 22.19 2.21Z"
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
			d="M18 13.75C18 18.03 14.53 21.5 10.25 21.5C5.97 21.5 2.5 18.03 2.5 13.75C2.5 9.47 5.97 6 10.25 6C12.12 6 13.83 6.66 15.17 7.77H15.18C15.57 8.09 15.92 8.44 16.23 8.83C17.34 10.17 18 11.88 18 13.75Z"
			fill={`${color}`} />
		<path
			d="M22.25 2.5V9C22.25 9.41 21.91 9.75 21.5 9.75C21.09 9.75 20.75 9.41 20.75 9V4.31L16.23 8.83C15.92 8.44 15.57 8.09 15.18 7.77L19.69 3.25H15C14.59 3.25 14.25 2.91 14.25 2.5C14.25 2.09 14.59 1.75 15 1.75H21.5C21.6 1.75 21.69 1.77 21.79 1.81C21.97 1.88 22.12 2.03 22.19 2.21C22.23 2.31 22.25 2.4 22.25 2.5Z"
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
			d="M4.27 18.68C5.69 20.4 7.84 21.5 10.25 21.5C14.53 21.5 18 18.03 18 13.75C18 9.47 14.53 6 10.25 6C5.97 6 2.5 9.47 2.5 13.75"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M21.5 2.5L16 8"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15 2.5H21.5V9"
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
			d="M10.25 21.5C14.5302 21.5 18 18.0302 18 13.75C18 9.46979 14.5302 6 10.25 6C5.96979 6 2.5 9.46979 2.5 13.75C2.5 18.0302 5.96979 21.5 10.25 21.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<g opacity="0.4">
			<path
				d="M21.5 2.5L16 8"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M15 2.5H21.5V9"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
	</svg>
{/if}
