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
			d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
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
			d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9V6.5C1.25 3.61 3.61 1.25 6.5 1.25H9C9.41 1.25 9.75 1.59 9.75 2C9.75 2.41 9.41 2.75 9 2.75H6.5C4.43 2.75 2.75 4.43 2.75 6.5V9C2.75 9.41 2.41 9.75 2 9.75Z"
			fill={`${color}`} />
		<path
			d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9V6.5C21.25 4.43 19.57 2.75 17.5 2.75H15C14.59 2.75 14.25 2.41 14.25 2C14.25 1.59 14.59 1.25 15 1.25H17.5C20.39 1.25 22.75 3.61 22.75 6.5V9C22.75 9.41 22.41 9.75 22 9.75Z"
			fill={`${color}`} />
		<path
			d="M17.5 22.75H16C15.59 22.75 15.25 22.41 15.25 22C15.25 21.59 15.59 21.25 16 21.25H17.5C19.57 21.25 21.25 19.57 21.25 17.5V16C21.25 15.59 21.59 15.25 22 15.25C22.41 15.25 22.75 15.59 22.75 16V17.5C22.75 20.39 20.39 22.75 17.5 22.75Z"
			fill={`${color}`} />
		<path
			d="M9 22.75H6.5C3.61 22.75 1.25 20.39 1.25 17.5V15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15V17.5C2.75 19.57 4.43 21.25 6.5 21.25H9C9.41 21.25 9.75 21.59 9.75 22C9.75 22.41 9.41 22.75 9 22.75Z"
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
			d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
			fill={`${color}`} />
		<path
			d="M16.48 2H8.52C5.47 2 3 4.47 3 7.52V10.5C3 11.05 3.45 11.5 4 11.5H8.5C10.71 11.5 12.5 13.29 12.5 15.5V20C12.5 20.55 12.95 21 13.5 21H16.48C19.93 21 22 18.94 22 15.48V7.52C22 4.47 19.53 2 16.48 2ZM18.76 9.99C18.76 10.4 18.42 10.74 18.01 10.74C17.6 10.74 17.26 10.4 17.26 9.99V7.79L13.53 11.53C13.38 11.68 13.19 11.75 13 11.75C12.81 11.75 12.62 11.68 12.47 11.53C12.18 11.24 12.18 10.76 12.47 10.47L16.2 6.72H14C13.58 6.72 13.25 6.39 13.25 5.97C13.25 5.56 13.58 5.22 14 5.22H18.01C18.1 5.22 18.19 5.25 18.27 5.28C18.3 5.29 18.32 5.3 18.34 5.31C18.4 5.34 18.45 5.37 18.5 5.42C18.52 5.43 18.54 5.45 18.56 5.47C18.61 5.53 18.65 5.59 18.69 5.66C18.69 5.67 18.7 5.68 18.7 5.69C18.74 5.77 18.75 5.86 18.75 5.95C18.76 5.96 18.76 5.96 18.76 5.97V9.99Z"
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
			d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z"
			fill={`${color}`} />
		<path
			d="M18 10.75C18.41 10.75 18.75 10.41 18.75 10V6C18.75 5.9 18.73 5.81 18.69 5.71C18.61 5.53 18.47 5.38 18.28 5.3C18.19 5.27 18.1 5.25 18 5.25H14C13.59 5.25 13.25 5.59 13.25 6C13.25 6.41 13.59 6.75 14 6.75H16.19L12 10.94L7.81 6.75H10C10.41 6.75 10.75 6.41 10.75 6C10.75 5.59 10.41 5.25 10 5.25H6C5.9 5.25 5.81 5.27 5.71 5.31C5.53 5.38 5.38 5.53 5.31 5.71C5.27 5.81 5.25 5.9 5.25 6V10C5.25 10.41 5.59 10.75 6 10.75C6.41 10.75 6.75 10.41 6.75 10V7.81L10.94 12L6.75 16.19V14C6.75 13.59 6.41 13.25 6 13.25C5.59 13.25 5.25 13.59 5.25 14V18C5.25 18.1 5.27 18.19 5.31 18.29C5.39 18.47 5.53 18.62 5.72 18.7C5.8 18.73 5.9 18.75 6 18.75H10C10.41 18.75 10.75 18.41 10.75 18C10.75 17.59 10.41 17.25 10 17.25H7.81L12 13.06L16.19 17.25H14C13.59 17.25 13.25 17.59 13.25 18C13.25 18.41 13.59 18.75 14 18.75H18C18.1 18.75 18.2 18.73 18.29 18.69C18.47 18.61 18.62 18.47 18.7 18.28C18.74 18.19 18.76 18.09 18.76 17.99V13.99C18.76 13.58 18.42 13.24 18.01 13.24C17.6 13.24 17.26 13.58 17.26 13.99V16.18L13.06 12L17.25 7.81V10C17.25 10.41 17.59 10.75 18 10.75Z"
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
			d="M2 9.98V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H14"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M13 11L18.01 5.97998H14"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18.0098 5.97998V9.98998"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15"
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
			d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
