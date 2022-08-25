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
			d="M2 15.3V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H8.5"
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
			d="M6.07117 19.0399L3.96118 16.9299"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.03992 16.96L3.92993 19.0699"
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
			d="M17 20.75H8.5C8.09 20.75 7.75 20.41 7.75 20C7.75 19.59 8.09 19.25 8.5 19.25H17C19.86 19.25 21.25 17.86 21.25 15V9C21.25 6.14 19.86 4.75 17 4.75H7C4.14 4.75 2.75 6.14 2.75 9V15.3C2.75 15.71 2.41 16.05 2 16.05C1.59 16.05 1.25 15.71 1.25 15.3V9C1.25 5.35 3.35 3.25 7 3.25H17C20.65 3.25 22.75 5.35 22.75 9V15C22.75 18.65 20.65 20.75 17 20.75Z"
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
			d="M6.07041 19.7901C5.88041 19.7901 5.69038 19.7201 5.54038 19.5701L3.43039 17.4601C3.14039 17.1701 3.14039 16.6901 3.43039 16.4001C3.72039 16.1101 4.20039 16.1101 4.49039 16.4001L6.60037 18.5101C6.89037 18.8001 6.89037 19.2801 6.60037 19.5701C6.45037 19.7201 6.26041 19.7901 6.07041 19.7901Z"
			fill={`${color}`} />
		<path
			d="M3.93106 19.8199C3.74106 19.8199 3.55109 19.7499 3.40109 19.5999C3.11109 19.3099 3.11109 18.8299 3.40109 18.5399L5.51108 16.4299C5.80108 16.1399 6.28108 16.1399 6.57108 16.4299C6.86108 16.7199 6.86108 17.1999 6.57108 17.4899L4.46109 19.5999C4.31109 19.7499 4.12106 19.8199 3.93106 19.8199Z"
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
			d="M17 4H7C4 4 2 5.5 2 9V12.56C2 12.93 2.38 13.16 2.71 13.01C3.69 12.56 4.82 12.39 6.01 12.6C8.64 13.07 10.57 15.51 10.5 18.18C10.49 18.6 10.43 19.01 10.32 19.41C10.24 19.72 10.49 20.01 10.81 20.01H17C20 20.01 22 18.51 22 15.01V9C22 5.5 20 4 17 4ZM12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5ZM19.25 14C19.25 14.41 18.91 14.75 18.5 14.75C18.09 14.75 17.75 14.41 17.75 14V10C17.75 9.59 18.09 9.25 18.5 9.25C18.91 9.25 19.25 9.59 19.25 10V14Z"
			fill={`${color}`} />
		<path
			d="M5 14C3.8 14 2.73 14.53 2 15.36C1.38 16.07 1 16.99 1 18C1 18.75 1.21 19.46 1.58 20.06C2.27 21.22 3.54 22 5 22C6.01 22 6.93 21.63 7.63 21C7.94 20.74 8.21 20.42 8.42 20.06C8.79 19.46 9 18.75 9 18C9 15.79 7.21 14 5 14ZM6.6 19.58C6.45 19.73 6.26 19.8 6.07 19.8C5.88 19.8 5.69 19.73 5.54 19.58L5.01 19.05L4.46 19.6C4.31 19.75 4.12 19.82 3.93 19.82C3.74 19.82 3.55 19.75 3.4 19.6C3.11 19.31 3.11 18.83 3.4 18.54L3.95 17.99L3.42 17.46C3.13 17.17 3.13 16.69 3.42 16.4C3.71 16.11 4.19 16.11 4.48 16.4L5.01 16.93L5.51 16.43C5.8 16.14 6.28 16.14 6.57 16.43C6.86 16.72 6.86 17.2 6.57 17.49L6.07 17.99L6.6 18.52C6.89 18.81 6.89 19.28 6.6 19.58Z"
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
			d="M22 9V15C22 18.5 20 20 17 20H8.45001C8.80001 19.41 9 18.73 9 18C9 15.79 7.21 14 5 14C3.8 14 2.73 14.53 2 15.36V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9Z"
			fill={`${color}`} />
		<path
			d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
			fill={`${color}`} />
		<path
			d="M18.5 14.75C18.09 14.75 17.75 14.41 17.75 14V10C17.75 9.59 18.09 9.25 18.5 9.25C18.91 9.25 19.25 9.59 19.25 10V14C19.25 14.41 18.91 14.75 18.5 14.75Z"
			fill={`${color}`} />
		<path
			d="M5 14C3.8 14 2.73 14.53 2 15.36C1.38 16.07 1 16.99 1 18C1 18.75 1.21002 19.46 1.58002 20.06C2.27002 21.22 3.54 22 5 22C6.01 22 6.93001 21.63 7.63 21C7.94 20.74 8.20998 20.42 8.41998 20.06C8.78998 19.46 9 18.75 9 18C9 15.79 7.21 14 5 14ZM6.59998 19.58C6.44998 19.73 6.26001 19.8 6.07001 19.8C5.88001 19.8 5.68998 19.73 5.53998 19.58L5.01001 19.05L4.46002 19.6C4.31002 19.75 4.11999 19.82 3.92999 19.82C3.73999 19.82 3.55002 19.75 3.40002 19.6C3.11002 19.31 3.11002 18.83 3.40002 18.54L3.95001 17.99L3.41998 17.46C3.12998 17.17 3.12998 16.69 3.41998 16.4C3.70998 16.11 4.18998 16.11 4.47998 16.4L5.01001 16.93L5.51001 16.43C5.80001 16.14 6.28001 16.14 6.57001 16.43C6.86001 16.72 6.86001 17.2 6.57001 17.49L6.07001 17.99L6.59998 18.52C6.88998 18.81 6.88998 19.28 6.59998 19.58Z"
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
			d="M6.06897 19.0399L3.95898 16.9299"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.03967 16.96L3.92969 19.0699"
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
			d="M2 15.3V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H8.5"
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
			d="M6.06897 19.0402L3.95898 16.9302"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.03967 16.96L3.92969 19.0699"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
