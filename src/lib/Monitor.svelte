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
			d="M6.44 2H17.55C21.11 2 22 2.89 22 6.44V12.77C22 16.33 21.11 17.21 17.56 17.21H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 17.22V22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 13H22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7.5 22H16.5"
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
			d="M17.56 17.97H6.44C2.46 17.97 1.25 16.76 1.25 12.78V6.44C1.25 2.46 2.46 1.25 6.44 1.25H17.55C21.53 1.25 22.74 2.46 22.74 6.44V12.77C22.75 16.76 21.54 17.97 17.56 17.97ZM6.44 2.75C3.3 2.75 2.75 3.3 2.75 6.44V12.77C2.75 15.91 3.3 16.46 6.44 16.46H17.55C20.69 16.46 21.24 15.91 21.24 12.77V6.44C21.24 3.3 20.69 2.75 17.55 2.75H6.44Z"
			fill={`${color}`} />
		<path
			d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V17.22C11.25 16.81 11.59 16.47 12 16.47C12.41 16.47 12.75 16.81 12.75 17.22V22C12.75 22.41 12.41 22.75 12 22.75Z"
			fill={`${color}`} />
		<path
			d="M22 13.75H2C1.59 13.75 1.25 13.41 1.25 13C1.25 12.59 1.59 12.25 2 12.25H22C22.41 12.25 22.75 12.59 22.75 13C22.75 13.41 22.41 13.75 22 13.75Z"
			fill={`${color}`} />
		<path
			d="M16.5 22.75H7.5C7.09 22.75 6.75 22.41 6.75 22C6.75 21.59 7.09 21.25 7.5 21.25H16.5C16.91 21.25 17.25 21.59 17.25 22C17.25 22.41 16.91 22.75 16.5 22.75Z"
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
			d="M17.56 2H6.41C3.98 2 2 3.98 2 6.41V12.91V13.11C2 15.55 3.98 17.52 6.41 17.52H10.25C10.8 17.52 11.25 17.97 11.25 18.52V19.49C11.25 20.04 10.8 20.49 10.25 20.49H7.83C7.42 20.49 7.08 20.83 7.08 21.24C7.08 21.65 7.41 22 7.83 22H16.18C16.59 22 16.93 21.66 16.93 21.25C16.93 20.84 16.59 20.5 16.18 20.5H13.76C13.21 20.5 12.76 20.05 12.76 19.5V18.53C12.76 17.98 13.21 17.53 13.76 17.53H17.57C20.01 17.53 21.98 15.55 21.98 13.12V12.92V6.42C21.97 3.98 19.99 2 17.56 2Z"
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
			d="M21.97 6.41V12.91H2V6.41C2 3.98 3.98 2 6.41 2H17.56C19.99 2 21.97 3.98 21.97 6.41Z"
			fill={`${color}`} />
		<path
			d="M2 12.9199V13.1199C2 15.5599 3.98 17.5299 6.41 17.5299H10.25C10.8 17.5299 11.25 17.9799 11.25 18.5299V19.4999C11.25 20.0499 10.8 20.4999 10.25 20.4999H7.83C7.42 20.4999 7.08 20.8399 7.08 21.2499C7.08 21.6599 7.41 21.9999 7.83 21.9999H16.18C16.59 21.9999 16.93 21.6599 16.93 21.2499C16.93 20.8399 16.59 20.4999 16.18 20.4999H13.76C13.21 20.4999 12.76 20.0499 12.76 19.4999V18.5299C12.76 17.9799 13.21 17.5299 13.76 17.5299H17.57C20.01 17.5299 21.98 15.5499 21.98 13.1199V12.9199H2Z"
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
			d="M22 10.63V12.78C22 16.34 21.11 17.22 17.56 17.22H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2H17.55C21.11 2 22 2.89 22 6.44"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 17.22V22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 13H22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7.5 22H16.5"
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
			d="M6.44 2H17.55C21.11 2 22 2.89 22 6.44V12.77C22 16.33 21.11 17.21 17.56 17.21H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M12 17.2202V22.0002"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M2 13H22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7.5 22H16.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
