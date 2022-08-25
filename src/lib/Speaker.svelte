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
			d="M9 22H15C18 22 19 21 19 18V6C19 3 18 2 15 2H9C6 2 5 3 5 6V18C5 21 6 22 9 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z"
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
			d="M15 22.75H9C5.58 22.75 4.25 21.42 4.25 18V6C4.25 2.58 5.58 1.25 9 1.25H15C18.42 1.25 19.75 2.58 19.75 6V18C19.75 21.42 18.42 22.75 15 22.75ZM9 2.75C6.42 2.75 5.75 3.42 5.75 6V18C5.75 20.58 6.42 21.25 9 21.25H15C17.58 21.25 18.25 20.58 18.25 18V6C18.25 3.42 17.58 2.75 15 2.75H9Z"
			fill={`${color}`} />
		<path
			d="M12 18.75C9.93 18.75 8.25 17.07 8.25 15C8.25 12.93 9.93 11.25 12 11.25C14.07 11.25 15.75 12.93 15.75 15C15.75 17.07 14.07 18.75 12 18.75ZM12 12.75C10.76 12.75 9.75 13.76 9.75 15C9.75 16.24 10.76 17.25 12 17.25C13.24 17.25 14.25 16.24 14.25 15C14.25 13.76 13.24 12.75 12 12.75Z"
			fill={`${color}`} />
		<path
			d="M12 9.75C10.76 9.75 9.75 8.74 9.75 7.5C9.75 6.26 10.76 5.25 12 5.25C13.24 5.25 14.25 6.26 14.25 7.5C14.25 8.74 13.24 9.75 12 9.75ZM12 6.75C11.59 6.75 11.25 7.09 11.25 7.5C11.25 7.91 11.59 8.25 12 8.25C12.41 8.25 12.75 7.91 12.75 7.5C12.75 7.09 12.41 6.75 12 6.75Z"
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
			d="M14.9991 1.62109H8.99914C5.80914 1.62109 4.61914 2.81109 4.61914 6.00109V18.0011C4.61914 21.1911 5.80914 22.3811 8.99914 22.3811H14.9991C18.1891 22.3811 19.3791 21.1911 19.3791 18.0011V6.00109C19.3791 2.81109 18.1891 1.62109 14.9991 1.62109ZM11.9991 6.00109C12.8291 6.00109 13.4991 6.67109 13.4991 7.50109C13.4991 8.33109 12.8291 9.00109 11.9991 9.00109C11.1691 9.00109 10.4991 8.33109 10.4991 7.50109C10.4991 6.67109 11.1691 6.00109 11.9991 6.00109ZM11.9991 18.0011C10.3391 18.0011 8.99914 16.6611 8.99914 15.0011C8.99914 13.3411 10.3391 12.0011 11.9991 12.0011C13.6591 12.0011 14.9991 13.3411 14.9991 15.0011C14.9991 16.6611 13.6591 18.0011 11.9991 18.0011Z"
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
			d="M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z"
			fill={`${color}`} />
		<path
			d="M12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M14.9991 1.62012H8.99914C5.80914 1.62012 4.61914 2.81012 4.61914 6.00012V18.0001C4.61914 21.1901 5.80914 22.3801 8.99914 22.3801H14.9991C18.1891 22.3801 19.3791 21.1901 19.3791 18.0001V6.00012C19.3791 2.81012 18.1891 1.62012 14.9991 1.62012ZM11.9991 6.00012C12.8291 6.00012 13.4991 6.67012 13.4991 7.50012C13.4991 8.33012 12.8291 9.00012 11.9991 9.00012C11.1691 9.00012 10.4991 8.33012 10.4991 7.50012C10.4991 6.67012 11.1691 6.00012 11.9991 6.00012ZM11.9991 18.0001C10.3391 18.0001 8.99914 16.6601 8.99914 15.0001C8.99914 13.3401 10.3391 12.0001 11.9991 12.0001C13.6591 12.0001 14.9991 13.3401 14.9991 15.0001C14.9991 16.6601 13.6591 18.0001 11.9991 18.0001Z"
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
			d="M5 13.99V6C5 3 6 2 9 2H15C18 2 19 3 19 6V18C19 21 18 22 15 22H9C6 22 5 21 5 18"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M13.5 7.5C13.5 6.67 12.83 6 12 6C11.17 6 10.5 6.67 10.5 7.5C10.5 8.33 11.17 9 12 9"
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
			d="M9 22H15C18 22 19 21 19 18V6C19 3 18 2 15 2H9C6 2 5 3 5 6V18C5 21 6 22 9 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
