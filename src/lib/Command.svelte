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
			d="M16 8H8V16H16V8Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5 22C6.65 22 8 20.65 8 19V16H5C3.35 16 2 17.35 2 19C2 20.65 3.35 22 5 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5 8H8V5C8 3.35 6.65 2 5 2C3.35 2 2 3.35 2 5C2 6.65 3.35 8 5 8Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16 8H19C20.65 8 22 6.65 22 5C22 3.35 20.65 2 19 2C17.35 2 16 3.35 16 5V8Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M19 22C20.65 22 22 20.65 22 19C22 17.35 20.65 16 19 16H16V19C16 20.65 17.35 22 19 22Z"
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
			d="M16 16.75H8C7.59 16.75 7.25 16.41 7.25 16V8C7.25 7.59 7.59 7.25 8 7.25H16C16.41 7.25 16.75 7.59 16.75 8V16C16.75 16.41 16.41 16.75 16 16.75ZM8.75 15.25H15.25V8.75H8.75V15.25Z"
			fill={`${color}`} />
		<path
			d="M5 22.75C2.93 22.75 1.25 21.07 1.25 19C1.25 16.93 2.93 15.25 5 15.25H8C8.41 15.25 8.75 15.59 8.75 16V19C8.75 21.07 7.07 22.75 5 22.75ZM5 16.75C3.76 16.75 2.75 17.76 2.75 19C2.75 20.24 3.76 21.25 5 21.25C6.24 21.25 7.25 20.24 7.25 19V16.75H5Z"
			fill={`${color}`} />
		<path
			d="M8 8.75H5C2.93 8.75 1.25 7.07 1.25 5C1.25 2.93 2.93 1.25 5 1.25C7.07 1.25 8.75 2.93 8.75 5V8C8.75 8.41 8.41 8.75 8 8.75ZM5 2.75C3.76 2.75 2.75 3.76 2.75 5C2.75 6.24 3.76 7.25 5 7.25H7.25V5C7.25 3.76 6.24 2.75 5 2.75Z"
			fill={`${color}`} />
		<path
			d="M19 8.75H16C15.59 8.75 15.25 8.41 15.25 8V5C15.25 2.93 16.93 1.25 19 1.25C21.07 1.25 22.75 2.93 22.75 5C22.75 7.07 21.07 8.75 19 8.75ZM16.75 7.25H19C20.24 7.25 21.25 6.24 21.25 5C21.25 3.76 20.24 2.75 19 2.75C17.76 2.75 16.75 3.76 16.75 5V7.25Z"
			fill={`${color}`} />
		<path
			d="M19 22.75C16.93 22.75 15.25 21.07 15.25 19V16C15.25 15.59 15.59 15.25 16 15.25H19C21.07 15.25 22.75 16.93 22.75 19C22.75 21.07 21.07 22.75 19 22.75ZM16.75 16.75V19C16.75 20.24 17.76 21.25 19 21.25C20.24 21.25 21.25 20.24 21.25 19C21.25 17.76 20.24 16.75 19 16.75H16.75Z"
			fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path d="M16 8H8V16H16V8Z" fill={`${color}`} />
		<path
			d="M2 19C2 20.65 3.35 22 5 22C6.65 22 8 20.65 8 19V16H5C3.35 16 2 17.35 2 19Z"
			fill={`${color}`} />
		<path d="M5 2C3.35 2 2 3.35 2 5C2 6.65 3.35 8 5 8H8V5C8 3.35 6.65 2 5 2Z" fill={`${color}`} />
		<path
			d="M22 5C22 3.35 20.65 2 19 2C17.35 2 16 3.35 16 5V8H19C20.65 8 22 6.65 22 5Z"
			fill={`${color}`} />
		<path
			d="M19 16H16V19C16 20.65 17.35 22 19 22C20.65 22 22 20.65 22 19C22 17.35 20.65 16 19 16Z"
			fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path d="M16 8H8V16H16V8Z" fill={`${color}`} />
		<path
			opacity="0.4"
			d="M5 22C6.65 22 8 20.65 8 19V16H5C3.35 16 2 17.35 2 19C2 20.65 3.35 22 5 22Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M5 8H8V5C8 3.35 6.65 2 5 2C3.35 2 2 3.35 2 5C2 6.65 3.35 8 5 8Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M16 8H19C20.65 8 22 6.65 22 5C22 3.35 20.65 2 19 2C17.35 2 16 3.35 16 5V8Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M19 22C20.65 22 22 20.65 22 19C22 17.35 20.65 16 19 16H16V19C16 20.65 17.35 22 19 22Z"
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
			d="M16 8H8V16H16V8Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2.16992 19.99C2.57992 21.16 3.69994 22 4.99994 22C6.64994 22 7.99994 20.65 7.99994 19V16H4.99994"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5 8H8V5C8 3.35 6.65 2 5 2C3.35 2 2 3.35 2 5C2 6.65 3.35 8 5 8Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16 8H19C20.65 8 22 6.65 22 5C22 3.35 20.65 2 19 2C17.35 2 16 3.35 16 5V8Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M19 22C20.65 22 22 20.65 22 19C22 17.35 20.65 16 19 16H16V19C16 20.65 17.35 22 19 22Z"
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
			d="M16 8H8V16H16V8Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5 22C6.65 22 8 20.65 8 19V16H5C3.35 16 2 17.35 2 19C2 20.65 3.35 22 5 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M5 8H8V5C8 3.35 6.65 2 5 2C3.35 2 2 3.35 2 5C2 6.65 3.35 8 5 8Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16 8H19C20.65 8 22 6.65 22 5C22 3.35 20.65 2 19 2C17.35 2 16 3.35 16 5V8Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M19 22C20.65 22 22 20.65 22 19C22 17.35 20.65 16 19 16H16V19C16 20.65 17.35 22 19 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
