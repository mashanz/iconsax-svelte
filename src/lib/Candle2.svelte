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
			d="M22 17.5H15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5 17.5H2"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 6.5H19"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 6.5H2"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7 14.5H13C14.1 14.5 15 15 15 16.5V18.5C15 20 14.1 20.5 13 20.5H7C5.9 20.5 5 20 5 18.5V16.5C5 15 5.9 14.5 7 14.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M11 3.5H17C18.1 3.5 19 4 19 5.5V7.5C19 9 18.1 9.5 17 9.5H11C9.9 9.5 9 9 9 7.5V5.5C9 4 9.9 3.5 11 3.5Z"
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
			d="M22 18.25H15C14.59 18.25 14.25 17.91 14.25 17.5C14.25 17.09 14.59 16.75 15 16.75H22C22.41 16.75 22.75 17.09 22.75 17.5C22.75 17.91 22.41 18.25 22 18.25Z"
			fill={`${color}`} />
		<path
			d="M5 18.25H2C1.59 18.25 1.25 17.91 1.25 17.5C1.25 17.09 1.59 16.75 2 16.75H5C5.41 16.75 5.75 17.09 5.75 17.5C5.75 17.91 5.41 18.25 5 18.25Z"
			fill={`${color}`} />
		<path
			d="M22 7.25H19C18.59 7.25 18.25 6.91 18.25 6.5C18.25 6.09 18.59 5.75 19 5.75H22C22.41 5.75 22.75 6.09 22.75 6.5C22.75 6.91 22.41 7.25 22 7.25Z"
			fill={`${color}`} />
		<path
			d="M9 7.25H2C1.59 7.25 1.25 6.91 1.25 6.5C1.25 6.09 1.59 5.75 2 5.75H9C9.41 5.75 9.75 6.09 9.75 6.5C9.75 6.91 9.41 7.25 9 7.25Z"
			fill={`${color}`} />
		<path
			d="M13 21.25H7C5.28 21.25 4.25 20.22 4.25 18.5V16.5C4.25 14.78 5.28 13.75 7 13.75H13C14.72 13.75 15.75 14.78 15.75 16.5V18.5C15.75 20.22 14.72 21.25 13 21.25ZM7 15.25C6.11 15.25 5.75 15.61 5.75 16.5V18.5C5.75 19.39 6.11 19.75 7 19.75H13C13.89 19.75 14.25 19.39 14.25 18.5V16.5C14.25 15.61 13.89 15.25 13 15.25H7Z"
			fill={`${color}`} />
		<path
			d="M17 10.25H11C9.28 10.25 8.25 9.22 8.25 7.5V5.5C8.25 3.78 9.28 2.75 11 2.75H17C18.72 2.75 19.75 3.78 19.75 5.5V7.5C19.75 9.22 18.72 10.25 17 10.25ZM11 4.25C10.11 4.25 9.75 4.61 9.75 5.5V7.5C9.75 8.39 10.11 8.75 11 8.75H17C17.89 8.75 18.25 8.39 18.25 7.5V5.5C18.25 4.61 17.89 4.25 17 4.25H11Z"
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
			d="M22.75 17.5C22.75 17.91 22.41 18.25 22 18.25H15V18.5C15 20 14.1 20.5 13 20.5H7C5.9 20.5 5 20 5 18.5V18.25H2C1.59 18.25 1.25 17.91 1.25 17.5C1.25 17.09 1.59 16.75 2 16.75H5V16.5C5 15 5.9 14.5 7 14.5H13C14.1 14.5 15 15 15 16.5V16.75H22C22.41 16.75 22.75 17.09 22.75 17.5Z"
			fill={`${color}`} />
		<path
			d="M22.75 6.5C22.75 6.91 22.41 7.25 22 7.25H19V7.5C19 9 18.1 9.5 17 9.5H11C9.9 9.5 9 9 9 7.5V7.25H2C1.59 7.25 1.25 6.91 1.25 6.5C1.25 6.09 1.59 5.75 2 5.75H9V5.5C9 4 9.9 3.5 11 3.5H17C18.1 3.5 19 4 19 5.5V5.75H22C22.41 5.75 22.75 6.09 22.75 6.5Z"
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
			d="M22.75 17.5C22.75 17.91 22.41 18.25 22 18.25H15V18.5C15 20 14.1 20.5 13 20.5H7C5.9 20.5 5 20 5 18.5V18.25H2C1.59 18.25 1.25 17.91 1.25 17.5C1.25 17.09 1.59 16.75 2 16.75H5V16.5C5 15 5.9 14.5 7 14.5H13C14.1 14.5 15 15 15 16.5V16.75H22C22.41 16.75 22.75 17.09 22.75 17.5Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M22.75 6.5C22.75 6.91 22.41 7.25 22 7.25H19V7.5C19 9 18.1 9.5 17 9.5H11C9.9 9.5 9 9 9 7.5V7.25H2C1.59 7.25 1.25 6.91 1.25 6.5C1.25 6.09 1.59 5.75 2 5.75H9V5.5C9 4 9.9 3.5 11 3.5H17C18.1 3.5 19 4 19 5.5V5.75H22C22.41 5.75 22.75 6.09 22.75 6.5Z"
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
			d="M22 17.5H15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5 17.5H2"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 6.5H19"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 6.5H2"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7 14.5H13C14.1 14.5 15 15 15 16.5V18.5C15 20 14.1 20.5 13 20.5H7C5.9 20.5 5 20 5 18.5V16.5C5 15 5.9 14.5 7 14.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M17 3.5C18.1 3.5 19 4 19 5.5V7.5C19 9 18.1 9.5 17 9.5H11C9.9 9.5 9 9 9 7.5V5.5C9 4 9.9 3.5 11 3.5H13.03"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
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
			d="M22 17.5H15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M5 17.5H2"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M22 6.5H19"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M9 6.5H2"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7 14.5H13C14.1 14.5 15 15 15 16.5V18.5C15 20 14.1 20.5 13 20.5H7C5.9 20.5 5 20 5 18.5V16.5C5 15 5.9 14.5 7 14.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M11 3.5H17C18.1 3.5 19 4 19 5.5V7.5C19 9 18.1 9.5 17 9.5H11C9.9 9.5 9 9 9 7.5V5.5C9 4 9.9 3.5 11 3.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
