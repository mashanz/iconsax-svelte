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
			d="M3 9C4.10457 9 5 8.10457 5 7C5 5.89543 4.10457 5 3 5C1.89543 5 1 5.89543 1 7C1 8.10457 1.89543 9 3 9Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M21 9C22.1046 9 23 8.10457 23 7C23 5.89543 22.1046 5 21 5C19.8954 5 19 5.89543 19 7C19 8.10457 19.8954 9 21 9Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M19 7H15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 7H5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7.5 16.5V18.5C7.5 19.11 7.13 19.64 6.61 19.86C6.42 19.95 6.22 20 6 20H4C3.17 20 2.5 19.33 2.5 18.5V16.5C2.5 15.67 3.17 15 4 15H6C6.83 15 7.5 15.67 7.5 16.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M21.5 16.5V18.5C21.5 19.33 20.83 20 20 20H18C17.78 20 17.58 19.95 17.39 19.86C16.87 19.64 16.5 19.11 16.5 18.5V16.5C16.5 15.67 17.17 15 18 15H20C20.83 15 21.5 15.67 21.5 16.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15 5.5V8.5C15 9.32 14.32 10 13.5 10H10.5C9.68 10 9 9.32 9 8.5V5.5C9 4.68 9.68 4 10.5 4H13.5C14.32 4 15 4.68 15 5.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15 7.72998C17.37 8.92998 19 11.51 19 14.5C19 14.67 18.99 14.83 18.97 15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5.03 15C5.01 14.83 5 14.67 5 14.5C5 11.51 6.63 8.92998 9 7.72998"
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
			d="M3 9.75C1.48 9.75 0.25 8.52 0.25 7C0.25 5.48 1.48 4.25 3 4.25C4.52 4.25 5.75 5.48 5.75 7C5.75 8.52 4.52 9.75 3 9.75ZM3 5.75C2.31 5.75 1.75 6.31 1.75 7C1.75 7.69 2.31 8.25 3 8.25C3.69 8.25 4.25 7.69 4.25 7C4.25 6.31 3.69 5.75 3 5.75Z"
			fill={`${color}`} />
		<path
			d="M21 9.75C19.48 9.75 18.25 8.52 18.25 7C18.25 5.48 19.48 4.25 21 4.25C22.52 4.25 23.75 5.48 23.75 7C23.75 8.52 22.52 9.75 21 9.75ZM21 5.75C20.31 5.75 19.75 6.31 19.75 7C19.75 7.69 20.31 8.25 21 8.25C21.69 8.25 22.25 7.69 22.25 7C22.25 6.31 21.69 5.75 21 5.75Z"
			fill={`${color}`} />
		<path
			d="M19 7.75H15C14.59 7.75 14.25 7.41 14.25 7C14.25 6.59 14.59 6.25 15 6.25H19C19.41 6.25 19.75 6.59 19.75 7C19.75 7.41 19.41 7.75 19 7.75Z"
			fill={`${color}`} />
		<path
			d="M9 7.75H5C4.59 7.75 4.25 7.41 4.25 7C4.25 6.59 4.59 6.25 5 6.25H9C9.41 6.25 9.75 6.59 9.75 7C9.75 7.41 9.41 7.75 9 7.75Z"
			fill={`${color}`} />
		<path
			d="M6 20.75H4C2.76 20.75 1.75 19.74 1.75 18.5V16.5C1.75 15.26 2.76 14.25 4 14.25H6C7.24 14.25 8.25 15.26 8.25 16.5V18.5C8.25 19.4 7.72 20.2 6.9 20.55C6.63 20.68 6.32 20.75 6 20.75ZM4 15.75C3.59 15.75 3.25 16.09 3.25 16.5V18.5C3.25 18.91 3.59 19.25 4 19.25H6C6.1 19.25 6.19 19.2301 6.29 19.1801C6.58 19.0601 6.75 18.79 6.75 18.5V16.5C6.75 16.09 6.41 15.75 6 15.75H4Z"
			fill={`${color}`} />
		<path
			d="M20 20.75H18C17.68 20.75 17.37 20.68 17.07 20.54C16.28 20.21 15.75 19.4 15.75 18.5V16.5C15.75 15.26 16.76 14.25 18 14.25H20C21.24 14.25 22.25 15.26 22.25 16.5V18.5C22.25 19.74 21.24 20.75 20 20.75ZM18 15.75C17.59 15.75 17.25 16.09 17.25 16.5V18.5C17.25 18.79 17.42 19.06 17.68 19.17C17.81 19.23 17.9 19.25 18 19.25H20C20.41 19.25 20.75 18.91 20.75 18.5V16.5C20.75 16.09 20.41 15.75 20 15.75H18Z"
			fill={`${color}`} />
		<path
			d="M13.5 10.75H10.5C9.26 10.75 8.25 9.74 8.25 8.5V5.5C8.25 4.26 9.26 3.25 10.5 3.25H13.5C14.74 3.25 15.75 4.26 15.75 5.5V8.5C15.75 9.74 14.74 10.75 13.5 10.75ZM10.5 4.75C10.09 4.75 9.75 5.09 9.75 5.5V8.5C9.75 8.91 10.09 9.25 10.5 9.25H13.5C13.91 9.25 14.25 8.91 14.25 8.5V5.5C14.25 5.09 13.91 4.75 13.5 4.75H10.5Z"
			fill={`${color}`} />
		<path
			d="M18.9707 15.7498C18.9407 15.7498 18.9107 15.7498 18.8807 15.7498C18.4707 15.6998 18.1707 15.3298 18.2207 14.9198C18.2407 14.7798 18.2407 14.6498 18.2407 14.5098C18.2407 11.9098 16.8307 9.50973 14.6507 8.40973C14.2807 8.21973 14.1307 7.76978 14.3207 7.39978C14.5107 7.02978 14.9607 6.87977 15.3307 7.06977C18.0107 8.42977 19.7407 11.3498 19.7407 14.5098C19.7407 14.7098 19.7307 14.8997 19.7007 15.0997C19.6707 15.4697 19.3507 15.7498 18.9707 15.7498Z"
			fill={`${color}`} />
		<path
			d="M5.03 15.75C4.65 15.75 4.33 15.47 4.29 15.09C4.27 14.89 4.25 14.7 4.25 14.5C4.25 11.34 5.98 8.42 8.66 7.06C9.03 6.87 9.48 7.02002 9.67 7.39002C9.86 7.76002 9.71 8.21003 9.34 8.40003C7.16 9.50003 5.75 11.9 5.75 14.5C5.75 14.64 5.76 14.77 5.77 14.91C5.82 15.32 5.52 15.69 5.11 15.74C5.09 15.75 5.06 15.75 5.03 15.75Z"
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
			d="M19.14 7.72C19.43 8.47 20.15 9 21 9C22.1 9 23 8.1 23 7C23 5.9 22.1 5 21 5C20.15 5 19.43 5.53 19.14 6.28C19.09 6.27 19.05 6.25 19 6.25H15V5.5C15 4.68 14.32 4 13.5 4H10.5C9.68 4 9 4.68 9 5.5V6.25H5C4.95 6.25 4.91 6.27 4.86 6.28C4.57 5.53 3.85 5 3 5C1.9 5 1 5.9 1 7C1 8.1 1.9 9 3 9C3.85 9 4.57 8.47 4.86 7.72C4.91 7.73 4.95 7.75 5 7.75H7.57C5.52 9.27 4.25 11.79 4.25 14.5C4.25 14.67 4.26 14.83 4.28 15H4C3.17 15 2.5 15.67 2.5 16.5V18.5C2.5 19.33 3.17 20 4 20H6C6.22 20 6.42 19.95 6.61 19.86C7.13 19.64 7.5 19.11 7.5 18.5V16.5C7.5 15.67 6.83 15 6 15H5.77C5.77 14.97 5.78 14.94 5.78 14.91C5.76 14.77 5.76 14.64 5.76 14.5C5.76 12.03 7.03 9.77 9.02 8.6C9.06 9.37 9.71 10 10.5 10H13.5C14.29 10 14.94 9.37 14.99 8.6C16.98 9.77 18.25 12.04 18.25 14.5C18.25 14.64 18.24 14.77 18.23 14.91C18.23 14.94 18.24 14.97 18.24 15H18C17.17 15 16.5 15.67 16.5 16.5V18.5C16.5 19.11 16.87 19.64 17.39 19.86C17.58 19.95 17.78 20 18 20H20C20.83 20 21.5 19.33 21.5 18.5V16.5C21.5 15.67 20.83 15 20 15H19.72C19.74 14.83 19.75 14.67 19.75 14.5C19.75 11.79 18.48 9.27 16.43 7.75H19C19.05 7.75 19.09 7.73 19.14 7.72Z"
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
			d="M3 9C4.10457 9 5 8.10457 5 7C5 5.89543 4.10457 5 3 5C1.89543 5 1 5.89543 1 7C1 8.10457 1.89543 9 3 9Z"
			fill={`${color}`} />
		<path
			d="M21 9C22.1046 9 23 8.10457 23 7C23 5.89543 22.1046 5 21 5C19.8954 5 19 5.89543 19 7C19 8.10457 19.8954 9 21 9Z"
			fill={`${color}`} />
		<path
			d="M7.5 16.5V18.5C7.5 19.11 7.13 19.64 6.61 19.86C6.42 19.95 6.22 20 6 20H4C3.17 20 2.5 19.33 2.5 18.5V16.5C2.5 15.67 3.17 15 4 15H6C6.83 15 7.5 15.67 7.5 16.5Z"
			fill={`${color}`} />
		<path
			d="M21.5 16.5V18.5C21.5 19.33 20.83 20 20 20H18C17.78 20 17.58 19.95 17.39 19.86C16.87 19.64 16.5 19.11 16.5 18.5V16.5C16.5 15.67 17.17 15 18 15H20C20.83 15 21.5 15.67 21.5 16.5Z"
			fill={`${color}`} />
		<path
			d="M15 5.5V8.5C15 9.32 14.32 10 13.5 10H10.5C9.68 10 9 9.32 9 8.5V5.5C9 4.68 9.68 4 10.5 4H13.5C14.32 4 15 4.68 15 5.5Z"
			fill={`${color}`} />
		<g opacity="0.4">
			<path
				opacity="0.4"
				d="M9 6.25H5C4.59 6.25 4.25 6.59 4.25 7C4.25 7.41 4.59 7.75 5 7.75H7.57C5.52 9.27 4.25 11.79 4.25 14.5C4.25 14.7 4.26 14.89 4.29 15.09C4.33 15.47 4.66 15.75 5.03 15.75C5.06 15.75 5.09 15.75 5.12 15.75C5.53 15.7 5.83 15.33 5.78 14.92C5.76 14.78 5.76 14.65 5.76 14.51C5.76 11.91 7.17 9.50997 9.35 8.40997C9.72 8.21997 9.87 7.77002 9.68 7.40002C9.67 7.39002 9.66 7.38 9.66 7.37C9.72 7.26 9.77 7.14001 9.77 7.01001C9.75 6.59001 9.41 6.25 9 6.25Z"
				fill={`${color}`} />
			<path
				opacity="0.4"
				d="M16.43 7.75H19C19.41 7.75 19.75 7.41 19.75 7C19.75 6.59 19.41 6.25 19 6.25H15C14.59 6.25 14.25 6.59 14.25 7C14.25 7.13 14.29 7.24999 14.36 7.35999C14.35 7.36999 14.34 7.38001 14.34 7.39001C14.15 7.76001 14.3 8.21002 14.67 8.40002C16.85 9.50002 18.26 11.9 18.26 14.5C18.26 14.64 18.25 14.77 18.24 14.91C18.19 15.32 18.49 15.69 18.9 15.74C18.93 15.74 18.96 15.74 18.99 15.74C19.37 15.74 19.69 15.46 19.73 15.08C19.75 14.88 19.77 14.69 19.77 14.49C19.75 11.79 18.48 9.27 16.43 7.75Z"
				fill={`${color}`} />
		</g>
	</svg>
{:else if variant === 'Broken'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M3 9C4.10457 9 5 8.10457 5 7C5 5.89543 4.10457 5 3 5C1.89543 5 1 5.89543 1 7C1 8.10457 1.89543 9 3 9Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M21 9C22.1046 9 23 8.10457 23 7C23 5.89543 22.1046 5 21 5C19.8954 5 19 5.89543 19 7C19 8.10457 19.8954 9 21 9Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M19 7H15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 7H5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7.5 16.5V18.5C7.5 19.11 7.13 19.64 6.61 19.86C6.42 19.95 6.22 20 6 20H4C3.17 20 2.5 19.33 2.5 18.5V16.5C2.5 15.67 3.17 15 4 15H6C6.83 15 7.5 15.67 7.5 16.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M21.5 16.5V18.5C21.5 19.33 20.83 20 20 20H18C17.78 20 17.58 19.95 17.39 19.86C16.87 19.64 16.5 19.11 16.5 18.5V16.5C16.5 15.67 17.17 15 18 15H20C20.83 15 21.5 15.67 21.5 16.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15 5.5V8.5C15 9.32 14.32 10 13.5 10H10.5C9.68 10 9 9.32 9 8.5V5.5C9 4.68 9.68 4 10.5 4H13.5C14.32 4 15 4.68 15 5.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15 7.72998C16.31 8.38998 17.39 9.47 18.1 10.81"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5.03 15C5.01 14.83 5 14.67 5 14.5C5 11.51 6.63 8.92998 9 7.72998"
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
			d="M3 9C4.10457 9 5 8.10457 5 7C5 5.89543 4.10457 5 3 5C1.89543 5 1 5.89543 1 7C1 8.10457 1.89543 9 3 9Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M21 9C22.1046 9 23 8.10457 23 7C23 5.89543 22.1046 5 21 5C19.8954 5 19 5.89543 19 7C19 8.10457 19.8954 9 21 9Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M19 7H15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 7H5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7.5 16.5V18.5C7.5 19.11 7.13 19.64 6.61 19.86C6.42 19.95 6.22 20 6 20H4C3.17 20 2.5 19.33 2.5 18.5V16.5C2.5 15.67 3.17 15 4 15H6C6.83 15 7.5 15.67 7.5 16.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M21.5 16.5V18.5C21.5 19.33 20.83 20 20 20H18C17.78 20 17.58 19.95 17.39 19.86C16.87 19.64 16.5 19.11 16.5 18.5V16.5C16.5 15.67 17.17 15 18 15H20C20.83 15 21.5 15.67 21.5 16.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15 5.5V8.5C15 9.32 14.32 10 13.5 10H10.5C9.68 10 9 9.32 9 8.5V5.5C9 4.68 9.68 4 10.5 4H13.5C14.32 4 15 4.68 15 5.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M15 7.72998C17.37 8.92998 19 11.51 19 14.5C19 14.67 18.99 14.83 18.97 15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M5.03 15C5.01 14.83 5 14.67 5 14.5C5 11.51 6.63 8.92998 9 7.72998"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
