<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19 8.75C16.93 8.75 15.25 7.07 15.25 5C15.25 2.93 16.93 1.25 19 1.25C21.07 1.25 22.75 2.93 22.75 5C22.75 7.07 21.07 8.75 19 8.75ZM19 2.75C17.76 2.75 16.75 3.76 16.75 5C16.75 6.24 17.76 7.25 19 7.25C20.24 7.25 21.25 6.24 21.25 5C21.25 3.76 20.24 2.75 19 2.75Z" fill={`${color}`} />
		<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" fill={`${color}`} />
		<path d="M21 10.4V16.48C21 16.62 20.99 16.76 20.98 16.89C20.97 17.01 20.96 17.12 20.94 17.24C20.93 17.36 20.91 17.48 20.89 17.59C20.54 20.01 19 21.54 16.59 21.89C16.48 21.91 16.36 21.93 16.24 21.94C16.12 21.96 16.01 21.97 15.89 21.98C15.76 21.99 15.62 22 15.48 22H7.52C7.38 22 7.24 21.99 7.11 21.98C6.99 21.97 6.88 21.96 6.76 21.94C6.64 21.93 6.52 21.91 6.41 21.89C4 21.54 2.46 20.01 2.11 17.59C2.09 17.48 2.07 17.36 2.06 17.24C2.04 17.12 2.03 17.01 2.02 16.89C2.01 16.76 2 16.62 2 16.48V8.52C2 8.38 2.01 8.24 2.02 8.11C2.03 7.99 2.04 7.88 2.06 7.76C2.07 7.64 2.09 7.52 2.11 7.41C2.46 4.99 4 3.46 6.41 3.11C6.52 3.09 6.64 3.07 6.76 3.06C6.88 3.04 6.99 3.03 7.11 3.02C7.24 3.01 7.38 3 7.52 3H13.6C14.24 3 14.7 3.58 14.58 4.2C14.58 4.22 14.57 4.24 14.57 4.26C14.55 4.36 14.54 4.46 14.52 4.57C14.48 4.99 14.5 5.44 14.59 5.9C14.62 6.02 14.64 6.12 14.68 6.23C14.76 6.56 14.89 6.87 15.06 7.16C15.12 7.28 15.2 7.4 15.27 7.51C15.6 7.99 16.01 8.4 16.49 8.73C16.6 8.8 16.72 8.88 16.84 8.94C17.13 9.11 17.44 9.24 17.77 9.32C17.88 9.36 17.98 9.38 18.1 9.41C18.56 9.5 19.01 9.52 19.43 9.48C19.54 9.46 19.64 9.45 19.74 9.43C19.76 9.43 19.78 9.42 19.8 9.42C20.42 9.3 21 9.76 21 10.4Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" fill={`${color}`} />
		<path opacity="0.4" d="M19 9.5C16.52 9.5 14.5 7.48 14.5 5C14.5 4.28 14.69 3.61 14.99 3H7.52C4.07 3 2 5.06 2 8.52V16.47C2 19.94 4.07 22 7.52 22H15.47C18.93 22 20.99 19.94 20.99 16.48V9.01C20.39 9.31 19.72 9.5 19 9.5Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18.0206 11.8002V8.91016C18.0206 5.61016 15.3206 2.91016 12.0206 2.91016C8.71058 2.91016 6.02058 5.60016 6.02058 8.91016V11.8002C6.02058 12.4102 5.76058 13.3402 5.45058 13.8602L4.30058 15.7702C3.59058 16.9502 4.08058 18.2602 5.38058 18.7002C9.69058 20.1402 14.3406 20.1402 18.6506 18.7002C19.8606 18.3002 20.3906 16.8702 19.7306 15.7702" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
		<path d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M15.0195 19.0601C15.0195 20.7101 13.6695 22.0601 12.0195 22.0601C11.1995 22.0601 10.4395 21.7201 9.89953 21.1801C9.35953 20.6401 9.01953 19.8801 9.01953 19.0601" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
