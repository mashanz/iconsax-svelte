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
			d="M15 22H9C6.5 22 5 20.2 5 18V6C5 3.8 6.5 2 9 2H15C17.5 2 19 3.8 19 6V18C19 20.2 17.5 22 15 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5 16.01H19"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 4V20"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 4V20"
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
			d="M15 22.75H9C6.25 22.75 4.25 20.75 4.25 18V6C4.25 3.25 6.25 1.25 9 1.25H15C17.75 1.25 19.75 3.25 19.75 6V18C19.75 20.75 17.75 22.75 15 22.75ZM9 2.75C6.75 2.75 5.75 4.38 5.75 6V18C5.75 19.62 6.75 21.25 9 21.25H15C17.25 21.25 18.25 19.62 18.25 18V6C18.25 4.38 17.25 2.75 15 2.75H9Z"
			fill={`${color}`} />
		<path
			d="M19 16.76H5C4.59 16.76 4.25 16.42 4.25 16.01C4.25 15.6 4.59 15.26 5 15.26H19C19.41 15.26 19.75 15.6 19.75 16.01C19.75 16.42 19.41 16.76 19 16.76Z"
			fill={`${color}`} />
		<path
			d="M2 20.75C1.59 20.75 1.25 20.41 1.25 20V4C1.25 3.59 1.59 3.25 2 3.25C2.41 3.25 2.75 3.59 2.75 4V20C2.75 20.41 2.41 20.75 2 20.75Z"
			fill={`${color}`} />
		<path
			d="M22 20.75C21.59 20.75 21.25 20.41 21.25 20V4C21.25 3.59 21.59 3.25 22 3.25C22.41 3.25 22.75 3.59 22.75 4V20C22.75 20.41 22.41 20.75 22 20.75Z"
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
			d="M18 16.0117C18.55 16.0117 19 16.4617 19 17.0117V18.0017C19 20.2017 17.5 22.0017 15 22.0017H9C6.5 22.0017 5 20.2017 5 18.0017V17.0117C5 16.4617 5.45 16.0117 6 16.0117H18Z"
			fill={`${color}`} />
		<path
			d="M19 6V13.5C19 14.05 18.55 14.5 18 14.5H6C5.45 14.5 5 14.05 5 13.5V6C5 3.8 6.5 2 9 2H15C17.5 2 19 3.8 19 6Z"
			fill={`${color}`} />
		<path
			d="M3 20.75C2.59 20.75 2.25 20.41 2.25 20V4C2.25 3.59 2.59 3.25 3 3.25C3.41 3.25 3.75 3.59 3.75 4V20C3.75 20.41 3.41 20.75 3 20.75Z"
			fill={`${color}`} />
		<path
			d="M21 20.75C20.59 20.75 20.25 20.41 20.25 20V4C20.25 3.59 20.59 3.25 21 3.25C21.41 3.25 21.75 3.59 21.75 4V20C21.75 20.41 21.41 20.75 21 20.75Z"
			fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path d="M19 16.01V18C19 20.2 17.5 22 15 22H9C6.5 22 5 20.2 5 18V16.01H19Z" fill={`${color}`} />
		<path
			opacity="0.4"
			d="M19 6V16.01H5V6C5 3.8 6.5 2 9 2H15C17.5 2 19 3.8 19 6Z"
			fill={`${color}`} />
		<path
			d="M3 20.75C2.59 20.75 2.25 20.41 2.25 20V4C2.25 3.59 2.59 3.25 3 3.25C3.41 3.25 3.75 3.59 3.75 4V20C3.75 20.41 3.41 20.75 3 20.75Z"
			fill={`${color}`} />
		<path
			d="M21 20.75C20.59 20.75 20.25 20.41 20.25 20V4C20.25 3.59 20.59 3.25 21 3.25C21.41 3.25 21.75 3.59 21.75 4V20C21.75 20.41 21.41 20.75 21 20.75Z"
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
			d="M15 2C17.5 2 19 3.8 19 6V18C19 20.2 17.5 22 15 22H9C6.5 22 5 20.2 5 18V6C5 3.8 6.5 2 9 2H10.98"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5 16.01H19"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 4V20"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 4V20"
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
			d="M15 22H9C6.5 22 5 20.2 5 18V6C5 3.8 6.5 2 9 2H15C17.5 2 19 3.8 19 6V18C19 20.2 17.5 22 15 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M5 16.0098H19"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M2 4V20"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M22 4V20"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
