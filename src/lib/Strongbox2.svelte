<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8 19H16C18 19 19 18 19 16V8C19 6 18 5 16 5H8C6 5 5 6 5 8V16C5 18 6 19 8 19Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M5 9.5H7.48C8.86 9.5 9.98 10.62 9.98 12C9.98 13.38 8.86 14.5 7.48 14.5H5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19 9.98999H16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19 14H16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7.2002 12H7.3002" stroke={`${color}`} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={`${color}`} />
		<path d="M16 19.75H8C5.58 19.75 4.25 18.42 4.25 16V8C4.25 5.58 5.58 4.25 8 4.25H16C18.42 4.25 19.75 5.58 19.75 8V16C19.75 18.42 18.42 19.75 16 19.75ZM8 5.75C6.42 5.75 5.75 6.42 5.75 8V16C5.75 17.58 6.42 18.25 8 18.25H16C17.58 18.25 18.25 17.58 18.25 16V8C18.25 6.42 17.58 5.75 16 5.75H8Z" fill={`${color}`} />
		<path d="M7.48 15.25H5C4.59 15.25 4.25 14.91 4.25 14.5C4.25 14.09 4.59 13.75 5 13.75H7.48C8.45 13.75 9.23 12.96 9.23 12C9.23 11.04 8.44 10.25 7.48 10.25H5C4.59 10.25 4.25 9.91 4.25 9.5C4.25 9.09 4.59 8.75 5 8.75H7.48C9.27 8.75 10.73 10.21 10.73 12C10.73 13.79 9.28 15.25 7.48 15.25Z" fill={`${color}`} />
		<path d="M19 10.7402H16C15.59 10.7402 15.25 10.4002 15.25 9.99023C15.25 9.58023 15.59 9.24023 16 9.24023H19C19.41 9.24023 19.75 9.58023 19.75 9.99023C19.75 10.4002 19.41 10.7402 19 10.7402Z" fill={`${color}`} />
		<path d="M19 14.75H16C15.59 14.75 15.25 14.41 15.25 14C15.25 13.59 15.59 13.25 16 13.25H19C19.41 13.25 19.75 13.59 19.75 14C19.75 14.41 19.41 14.75 19 14.75Z" fill={`${color}`} />
		<path d="M7.25 13.0001C7.12 13.0001 6.99 12.9701 6.87 12.9201C6.75 12.8701 6.63999 12.8001 6.53999 12.7101C6.34999 12.5201 6.25 12.2701 6.25 12.0001C6.25 11.7401 6.35999 11.4801 6.53999 11.2901C6.81999 11.0201 7.26 10.9201 7.63 11.0801C7.76 11.1301 7.87001 11.2001 7.96001 11.2901C8.14001 11.4801 8.25 11.7401 8.25 12.0001C8.25 12.2701 8.15001 12.5201 7.96001 12.7101C7.86001 12.8001 7.75 12.8701 7.63 12.9201C7.51 12.9701 7.38 13.0001 7.25 13.0001Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM19 8.24C19 8.79 18.55 9.24 18 9.24H16C15.59 9.24 15.25 9.58 15.25 9.99C15.25 10.41 15.59 10.74 16 10.74H18C18.55 10.74 19 11.19 19 11.74V12.25C19 12.8 18.55 13.25 18 13.25H16C15.59 13.25 15.25 13.59 15.25 14C15.25 14.41 15.59 14.75 16 14.75H18C18.55 14.75 19 15.2 19 15.75V16C19 17.66 17.66 19 16 19H8C6.34 19 5 17.66 5 16V15.5C5 14.95 5.45 14.5 6 14.5H7.48C8.95 14.5 10.12 13.24 9.97 11.74C9.84 10.44 8.65 9.5 7.34 9.5H6C5.45 9.5 5 9.05 5 8.5V8C5 6.34 6.34 5 8 5H16C17.66 5 19 6.34 19 8V8.24ZM5 12C5 11.45 5.45 11 6 11H7C7.55 11 8 11.45 8 12C8 12.55 7.55 13 7 13H6C5.45 13 5 12.55 5 12Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill={`${color}`} />
		<path d="M16 9.23999H18C18.55 9.23999 19 8.78999 19 8.23999V8C19 6.34 17.66 5 16 5H8C6.34 5 5 6.34 5 8V8.5C5 9.05 5.45 9.5 6 9.5H7.34C8.65 9.5 9.84 10.44 9.97 11.75C10.12 13.25 8.95 14.51 7.48 14.51H6C5.45 14.51 5 14.96 5 15.51V16.01C5 17.67 6.34 19.01 8 19.01H16C17.66 19.01 19 17.67 19 16.01V15.76C19 15.21 18.55 14.76 18 14.76H16C15.59 14.76 15.25 14.42 15.25 14.01C15.25 13.6 15.59 13.26 16 13.26H18C18.55 13.26 19 12.81 19 12.26V11.75C19 11.2 18.55 10.75 18 10.75H16C15.59 10.75 15.25 10.42 15.25 10C15.25 9.58 15.59 9.23999 16 9.23999Z" fill={`${color}`} />
		<path d="M7 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H7C7.55 11 8 11.45 8 12C8 12.55 7.55 13 7 13Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 12.83V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8 19H16C18 19 19 18 19 16V8C19 6 18 5 16 5H8C6 5 5 6 5 8V16C5 18 6 19 8 19Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M5 9.5H7.48C8.86 9.5 9.98 10.62 9.98 12C9.98 13.38 8.86 14.5 7.48 14.5H5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19 9.99023H16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19 14H16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7.19922 12H7.29922" stroke={`${color}`} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<g opacity="0.4">
			<path d="M8 19H16C18 19 19 18 19 16V8C19 6 18 5 16 5H8C6 5 5 6 5 8V16C5 18 6 19 8 19Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M5 9.5H7.48C8.86 9.5 9.98 10.62 9.98 12C9.98 13.38 8.86 14.5 7.48 14.5H5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M19 9.99023H16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M19 14H16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</g>
		<path opacity="0.4" d="M7.19922 12H7.29922" stroke={`${color}`} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
