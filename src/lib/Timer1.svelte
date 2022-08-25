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
			d="M20.75 13.25C20.75 18.08 16.83 22 12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 8V13"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 2H15"
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
			d="M12 22.75C6.76 22.75 2.5 18.49 2.5 13.25C2.5 8.01 6.76 3.75 12 3.75C17.24 3.75 21.5 8.01 21.5 13.25C21.5 18.49 17.24 22.75 12 22.75ZM12 5.25C7.59 5.25 4 8.84 4 13.25C4 17.66 7.59 21.25 12 21.25C16.41 21.25 20 17.66 20 13.25C20 8.84 16.41 5.25 12 5.25Z"
			fill={`${color}`} />
		<path
			d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z"
			fill={`${color}`} />
		<path
			d="M15 2.75H9C8.59 2.75 8.25 2.41 8.25 2C8.25 1.59 8.59 1.25 9 1.25H15C15.41 1.25 15.75 1.59 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z"
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
			d="M12.0001 4.64844C7.22008 4.64844 3.33008 8.53844 3.33008 13.3184C3.33008 18.0984 7.22008 21.9984 12.0001 21.9984C16.7801 21.9984 20.6701 18.1084 20.6701 13.3284C20.6701 8.54844 16.7801 4.64844 12.0001 4.64844ZM12.7501 12.9984C12.7501 13.4084 12.4101 13.7484 12.0001 13.7484C11.5901 13.7484 11.2501 13.4084 11.2501 12.9984V7.99844C11.2501 7.58844 11.5901 7.24844 12.0001 7.24844C12.4101 7.24844 12.7501 7.58844 12.7501 7.99844V12.9984Z"
			fill={`${color}`} />
		<path
			d="M14.8906 3.45H9.11062C8.71062 3.45 8.39062 3.13 8.39062 2.73C8.39062 2.33 8.71062 2 9.11062 2H14.8906C15.2906 2 15.6106 2.32 15.6106 2.72C15.6106 3.12 15.2906 3.45 14.8906 3.45Z"
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
			d="M12.0001 21.9999C16.7884 21.9999 20.6701 18.1182 20.6701 13.3299C20.6701 8.5416 16.7884 4.65991 12.0001 4.65991C7.21177 4.65991 3.33008 8.5416 3.33008 13.3299C3.33008 18.1182 7.21177 21.9999 12.0001 21.9999Z"
			fill={`${color}`} />
		<path
			d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z"
			fill={`${color}`} />
		<path
			d="M14.8906 3.45H9.11062C8.71062 3.45 8.39062 3.13 8.39062 2.73C8.39062 2.33 8.71062 2 9.11062 2H14.8906C15.2906 2 15.6106 2.32 15.6106 2.72C15.6106 3.12 15.2906 3.45 14.8906 3.45Z"
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
			d="M12 8V13"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 2H15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5 8C3.9 9.46 3.25 11.28 3.25 13.25C3.25 18.08 7.17 22 12 22C16.83 22 20.75 18.08 20.75 13.25C20.75 8.42 16.83 4.5 12 4.5C10.74 4.5 9.55 4.76 8.47 5.24"
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
			d="M20.75 13.25C20.75 18.08 16.83 22 12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M12 8V13"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M9 2H15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
