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
			d="M2 15.2V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H8.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18.5 9.5V14.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 18C9 18.75 8.78998 19.46 8.41998 20.06C7.72998 21.22 6.46 22 5 22C3.54 22 2.27002 21.22 1.58002 20.06C1.21002 19.46 1 18.75 1 18C1 15.79 2.79 14 5 14C7.21 14 9 15.79 9 18Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7.75 15.25L2.25 20.75"
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
			d="M17 20.75H8.5C8.09 20.75 7.75 20.41 7.75 20C7.75 19.59 8.09 19.25 8.5 19.25H17C19.86 19.25 21.25 17.86 21.25 15V9C21.25 6.14 19.86 4.75 17 4.75H7C4.14 4.75 2.75 6.14 2.75 9V15.2C2.75 15.61 2.41 15.95 2 15.95C1.59 15.95 1.25 15.61 1.25 15.2V9C1.25 5.35 3.35 3.25 7 3.25H17C20.65 3.25 22.75 5.35 22.75 9V15C22.75 18.65 20.65 20.75 17 20.75Z"
			fill={`${color}`} />
		<path
			d="M12 15.25C10.21 15.25 8.75 13.79 8.75 12C8.75 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25ZM12 10.25C11.04 10.25 10.25 11.04 10.25 12C10.25 12.96 11.04 13.75 12 13.75C12.96 13.75 13.75 12.96 13.75 12C13.75 11.04 12.96 10.25 12 10.25Z"
			fill={`${color}`} />
		<path
			d="M18.5 15.25C18.09 15.25 17.75 14.91 17.75 14.5V9.5C17.75 9.09 18.09 8.75 18.5 8.75C18.91 8.75 19.25 9.09 19.25 9.5V14.5C19.25 14.91 18.91 15.25 18.5 15.25Z"
			fill={`${color}`} />
		<path
			d="M5 22.75C3.34 22.75 1.78 21.87 0.940002 20.44C0.490002 19.72 0.25 18.87 0.25 18C0.25 15.38 2.38 13.25 5 13.25C7.62 13.25 9.75 15.38 9.75 18C9.75 18.87 9.51 19.72 9.06 20.45C8.22 21.87 6.66 22.75 5 22.75ZM5 14.75C3.21 14.75 1.75 16.21 1.75 18C1.75 18.59 1.90997 19.17 2.21997 19.67C2.79997 20.65 3.87 21.25 5 21.25C6.13 21.25 7.20003 20.65 7.78003 19.68C8.09003 19.17 8.25 18.6 8.25 18C8.25 16.21 6.79 14.75 5 14.75Z"
			fill={`${color}`} />
		<path
			d="M2.24948 21.5C2.05948 21.5 1.86945 21.43 1.71945 21.28C1.42945 20.99 1.42945 20.5099 1.71945 20.2199L7.21945 14.7199C7.50945 14.4299 7.98951 14.4299 8.27951 14.7199C8.56951 15.0099 8.56951 15.49 8.27951 15.78L2.77951 21.28C2.62951 21.43 2.43948 21.5 2.24948 21.5Z"
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
			d="M1.7 20.24C1.71 20.23 1.71 20.22 1.71 20.22L7.21 14.72C7.22 14.71 7.23 14.71 7.24 14.7C6.61 14.26 5.84 14 5 14C2.79 14 1 15.79 1 18C1 18.75 1.21 19.46 1.58 20.06C1.62 20.12 1.66 20.18 1.7 20.24Z"
			fill={`${color}`} />
		<path
			d="M8.3 15.75C8.29 15.76 8.29 15.77 8.28 15.78L2.78 21.28C2.77 21.29 2.76 21.29 2.75 21.3C3.39 21.74 4.16 22 5 22C6.46 22 7.73 21.22 8.42 20.06C8.79 19.46 9 18.75 9 18C9 17.16 8.74 16.39 8.3 15.75Z"
			fill={`${color}`} />
		<path
			d="M17 4H7C4 4 2 5.5 2 9V12.56C2 12.93 2.38 13.16 2.71 13.01C3.69 12.56 4.82 12.39 6.01 12.6C8.64 13.07 10.57 15.51 10.5 18.18C10.49 18.6 10.43 19.01 10.32 19.41C10.24 19.72 10.49 20.01 10.81 20.01H17C20 20.01 22 18.51 22 15.01V9C22 5.5 20 4 17 4ZM12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5ZM19.25 14C19.25 14.41 18.91 14.75 18.5 14.75C18.09 14.75 17.75 14.41 17.75 14V10C17.75 9.59 18.09 9.25 18.5 9.25C18.91 9.25 19.25 9.59 19.25 10V14Z"
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
			d="M1.70026 20.24C1.71026 20.23 1.71027 20.22 1.71027 20.22L7.21027 14.72C7.22027 14.71 7.23023 14.71 7.24023 14.7C6.60023 14.26 5.82023 14 4.99023 14C2.78023 14 0.990234 15.79 0.990234 18C0.990234 18.75 1.20025 19.46 1.57025 20.06C1.62025 20.12 1.66026 20.18 1.70026 20.24Z"
			fill={`${color}`} />
		<path
			d="M8.29999 15.75C8.28999 15.76 8.29003 15.77 8.28003 15.78L2.78003 21.28C2.77003 21.29 2.76 21.29 2.75 21.3C3.39 21.74 4.16 22 5 22C6.46 22 7.72998 21.22 8.41998 20.06C8.78998 19.46 9 18.75 9 18C9 17.16 8.73999 16.39 8.29999 15.75Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M22 9V15C22 18.5 20 20 17 20H8.45001C8.80001 19.41 9 18.73 9 18C9 15.79 7.21 14 5 14C3.8 14 2.73 14.53 2 15.36V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9Z"
			fill={`${color}`} />
		<path
			d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
			fill={`${color}`} />
		<path
			d="M18.5 14.75C18.09 14.75 17.75 14.41 17.75 14V10C17.75 9.59 18.09 9.25 18.5 9.25C18.91 9.25 19.25 9.59 19.25 10V14C19.25 14.41 18.91 14.75 18.5 14.75Z"
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
			d="M22 13.1401V15.0001C22 18.5001 20 20.0001 17 20.0001H8.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 15.3V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M14.5 12C14.5 10.62 13.38 9.5 12 9.5C10.62 9.5 9.5 10.62 9.5 12C9.5 13.38 10.62 14.5 12 14.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18.5 9.5V14.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 18C9 18.75 8.78998 19.46 8.41998 20.06C7.72998 21.22 6.46 22 5 22C3.54 22 2.27002 21.22 1.58002 20.06C1.21002 19.46 1 18.75 1 18C1 15.79 2.79 14 5 14C7.21 14 9 15.79 9 18Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7.75 15.25L2.25 20.75"
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
			d="M2 15.2V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H8.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M18.5 9.5V14.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 18C9 18.75 8.78998 19.46 8.41998 20.06C7.72998 21.22 6.46 22 5 22C3.54 22 2.27002 21.22 1.58002 20.06C1.21002 19.46 1 18.75 1 18C1 15.79 2.79 14 5 14C7.21 14 9 15.79 9 18Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7.75 15.25L2.25 20.75"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
