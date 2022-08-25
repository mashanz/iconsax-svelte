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
			d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M14 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M21 19V22H18"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15 16L20.96 21.96"
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
			d="M14 6.75H10C9.04 6.75 7.25 6.75 7.25 4C7.25 1.25 9.04 1.25 10 1.25H14C14.96 1.25 16.75 1.25 16.75 4C16.75 4.96 16.75 6.75 14 6.75ZM10 2.75C9.01 2.75 8.75 2.75 8.75 4C8.75 5.25 9.01 5.25 10 5.25H14C15.25 5.25 15.25 4.99 15.25 4C15.25 2.75 14.99 2.75 14 2.75H10Z"
			fill={`${color}`} />
		<path
			d="M14 22.7502H9C3.38 22.7502 2.25 20.1702 2.25 16.0002V10.0002C2.25 5.44021 3.9 3.49021 7.96 3.28021C8.36 3.26021 8.73 3.57021 8.75 3.99021C8.77 4.41021 8.45 4.75021 8.04 4.77021C5.2 4.93021 3.75 5.78021 3.75 10.0002V16.0002C3.75 19.7002 4.48 21.2502 9 21.2502H14C14.41 21.2502 14.75 21.5902 14.75 22.0002C14.75 22.4102 14.41 22.7502 14 22.7502Z"
			fill={`${color}`} />
		<path
			d="M21.0009 15.7499C20.5909 15.7499 20.2509 15.4099 20.2509 14.9999V9.99993C20.2509 5.77993 18.8009 4.92993 15.9609 4.76993C15.5509 4.74993 15.2309 4.38993 15.2509 3.97993C15.2709 3.56993 15.6409 3.24993 16.0409 3.26993C20.1009 3.48993 21.7509 5.43993 21.7509 9.98993V14.9899C21.7509 15.4099 21.4109 15.7499 21.0009 15.7499Z"
			fill={`${color}`} />
		<path
			d="M21 22.75H18C17.59 22.75 17.25 22.41 17.25 22C17.25 21.59 17.59 21.25 18 21.25H20.25V19C20.25 18.59 20.59 18.25 21 18.25C21.41 18.25 21.75 18.59 21.75 19V22C21.75 22.41 21.41 22.75 21 22.75Z"
			fill={`${color}`} />
		<path
			d="M20.9595 22.7099C20.7695 22.7099 20.5795 22.6399 20.4295 22.4899L14.4695 16.5299C14.1795 16.2399 14.1795 15.7599 14.4695 15.4699C14.7595 15.1799 15.2395 15.1799 15.5295 15.4699L21.4895 21.4299C21.7795 21.7199 21.7795 22.1999 21.4895 22.4899C21.3395 22.6299 21.1495 22.7099 20.9595 22.7099Z"
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
			d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z"
			fill={`${color}`} />
		<path
			d="M17.2391 4.81949C17.2391 6.40949 15.9391 7.70949 14.3491 7.70949H9.64906C8.05906 7.70949 6.75906 6.40949 6.75906 4.81949C6.75906 4.25949 6.15906 3.90949 5.65906 4.16949C4.24906 4.91949 3.28906 6.40949 3.28906 8.11949V17.5295C3.28906 19.9895 5.29906 21.9995 7.75906 21.9995H16.2391C18.6991 21.9995 20.7091 19.9895 20.7091 17.5295V8.11949C20.7091 6.40949 19.7491 4.91949 18.3391 4.16949C17.8391 3.90949 17.2391 4.25949 17.2391 4.81949ZM15.7491 16.9995C15.7491 17.4095 15.4091 17.7495 14.9991 17.7495H11.9991C11.5891 17.7495 11.2491 17.4095 11.2491 16.9995C11.2491 16.5895 11.5891 16.2495 11.9991 16.2495H13.1891L8.46906 11.5295C8.17906 11.2395 8.17906 10.7595 8.46906 10.4695C8.75906 10.1795 9.23906 10.1795 9.52906 10.4695L14.2491 15.1895V13.9995C14.2491 13.5895 14.5891 13.2495 14.9991 13.2495C15.4091 13.2495 15.7491 13.5895 15.7491 13.9995V16.9995Z"
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
			d="M16.2391 3.6499H7.75906C5.28906 3.6499 3.28906 5.6599 3.28906 8.1199V17.5299C3.28906 19.9899 5.29906 21.9999 7.75906 21.9999H16.2291C18.6991 21.9999 20.6991 19.9899 20.6991 17.5299V8.1199C20.7091 5.6499 18.6991 3.6499 16.2391 3.6499Z"
			fill={`${color}`} />
		<path
			d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z"
			fill={`${color}`} />
		<path
			d="M14.9995 13.2499C14.5895 13.2499 14.2495 13.5899 14.2495 13.9999V15.1899L9.52945 10.4699C9.23945 10.1799 8.75945 10.1799 8.46945 10.4699C8.17945 10.7599 8.17945 11.2399 8.46945 11.5299L13.1895 16.2499H11.9995C11.5895 16.2499 11.2495 16.5899 11.2495 16.9999C11.2495 17.4099 11.5895 17.7499 11.9995 17.7499H14.9995C15.4095 17.7499 15.7495 17.4099 15.7495 16.9999V13.9999C15.7495 13.5899 15.4095 13.2499 14.9995 13.2499Z"
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
			d="M3 10C3 5.44002 4.67 4.20002 8 4.02002"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M14 22H9C4 22 3 20 3 16V14.01"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M10.96 2H10C9 2 8 2 8 4C8 6 9 6 10 6H14C16 6 16 5 16 4C16 2 15 2 14 2"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M21 19V22H18"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15 16L20.96 21.96"
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
			d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M14 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<g opacity="0.4">
			<path
				d="M21 19V22H18"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M15 16L20.96 21.96"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
	</svg>
{/if}
