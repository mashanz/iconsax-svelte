<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 13H5.76C6.52 13 7.21 13.43 7.55 14.11L8.44 15.9C9 17 10 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.45 14.1C16.79 13.42 17.48 12.99 18.24 12.99H21.98" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10.34 7H13.67" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9.5 10H14.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={`${color}`} />
		<path d="M13.7602 17.75H10.2302C9.13023 17.75 8.26023 17.21 7.77023 16.23L6.88023 14.44C6.67023 14.01 6.24023 13.75 5.76023 13.75H1.99023C1.58023 13.75 1.24023 13.41 1.24023 13C1.24023 12.59 1.59023 12.25 2.00023 12.25H5.76023C6.81024 12.25 7.75024 12.83 8.22023 13.77L9.11023 15.56C9.34023 16.02 9.71023 16.25 10.2302 16.25H13.7602C14.2402 16.25 14.6702 15.99 14.8802 15.56L15.7702 13.77C16.2402 12.83 17.1802 12.25 18.2302 12.25H21.9702C22.3802 12.25 22.7202 12.59 22.7202 13C22.7202 13.41 22.3802 13.75 21.9702 13.75H18.2302C17.7502 13.75 17.3202 14.01 17.1102 14.44L16.2202 16.23C15.7502 17.17 14.8102 17.75 13.7602 17.75Z" fill={`${color}`} />
		<path d="M13.6701 7.75H10.3401C9.92008 7.75 9.58008 7.41 9.58008 7C9.58008 6.59 9.92008 6.25 10.3301 6.25H13.6601C14.0701 6.25 14.4101 6.59 14.4101 7C14.4101 7.41 14.0801 7.75 13.6701 7.75Z" fill={`${color}`} />
		<path d="M14.5 10.75H9.5C9.09 10.75 8.75 10.41 8.75 10C8.75 9.59 9.09 9.25 9.5 9.25H14.5C14.91 9.25 15.25 9.59 15.25 10C15.25 10.41 14.91 10.75 14.5 10.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21.3 12.2305H17.82C16.84 12.2305 15.97 12.7705 15.53 13.6505L14.69 15.3105C14.49 15.7105 14.09 15.9605 13.65 15.9605H10.37C10.06 15.9605 9.62 15.8905 9.33 15.3105L8.49 13.6605C8.05 12.7905 7.17 12.2405 6.2 12.2405H2.7C2.31 12.2405 2 12.5505 2 12.9405V16.2005C2 19.8305 4.18 22.0005 7.82 22.0005H16.2C19.63 22.0005 21.74 20.1205 22 16.7805V12.9305C22 12.5505 21.69 12.2305 21.3 12.2305Z" fill={`${color}`} />
		<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V10.85C2.22 10.77 2.46 10.73 2.7 10.73H6.2C7.75 10.73 9.14 11.59 9.83 12.98L10.58 14.45H13.44L14.19 12.97C14.88 11.59 16.27 10.73 17.82 10.73H21.3C21.54 10.73 21.78 10.77 22 10.85V7.81C22 4.17 19.83 2 16.19 2ZM10.45 5.41H13.55C13.93 5.41 14.25 5.72 14.25 6.1C14.25 6.49 13.93 6.8 13.55 6.8H10.45C10.07 6.8 9.75 6.49 9.75 6.1C9.75 5.72 10.07 5.41 10.45 5.41ZM14.33 9.59H9.67C9.29 9.59 8.98 9.28 8.98 8.9C8.98 8.51 9.29 8.2 9.67 8.2H14.33C14.71 8.2 15.02 8.51 15.02 8.9C15.02 9.28 14.71 9.59 14.33 9.59Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill={`${color}`} />
		<path d="M21.3 12.23H17.82C16.84 12.23 15.97 12.77 15.53 13.65L14.69 15.31C14.49 15.71 14.09 15.96 13.65 15.96H10.37C10.06 15.96 9.62 15.89 9.33 15.31L8.49 13.66C8.05 12.79 7.17 12.24 6.2 12.24H2.7C2.31 12.24 2 12.55 2 12.94V16.2C2 19.83 4.18 22 7.82 22H16.2C19.63 22 21.74 20.12 22 16.78V12.93C22 12.55 21.69 12.23 21.3 12.23Z" fill={`${color}`} />
		<path d="M13.55 7.7999H10.45C10.06 7.7999 9.75 7.4899 9.75 7.0999C9.75 6.7099 10.06 6.3999 10.45 6.3999H13.55C13.94 6.3999 14.25 6.7099 14.25 7.0999C14.25 7.4899 13.93 7.7999 13.55 7.7999Z" fill={`${color}`} />
		<path d="M14.3307 10.5899H9.6707C9.2807 10.5899 8.9707 10.2799 8.9707 9.88994C8.9707 9.49994 9.2807 9.18994 9.6707 9.18994H14.3207C14.7107 9.18994 15.0207 9.49994 15.0207 9.88994C15.0207 10.2799 14.7107 10.5899 14.3307 10.5899Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2.69 19.01C3.65 21.1 5.65 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 13.0002H5.76C6.52 13.0002 7.21 13.4302 7.55 14.1102L8.44 15.9002C9 17.0002 10 17.0002 10.24 17.0002H13.77C14.53 17.0002 15.22 16.5702 15.56 15.8902L16.45 14.1002C16.79 13.4202 17.48 12.9902 18.24 12.9902H21.98" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13.6602 10H14.5002" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9.5 10H11.08" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10.3398 7H13.6698" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M2 13.0002H5.76C6.52 13.0002 7.21 13.4302 7.55 14.1102L8.44 15.9002C9 17.0002 10 17.0002 10.24 17.0002H13.77C14.53 17.0002 15.22 16.5702 15.56 15.8902L16.45 14.1002C16.79 13.4202 17.48 12.9902 18.24 12.9902H21.98" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M10.3398 7H13.6698" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M9.5 10H14.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
