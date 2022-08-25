<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M15 19V16H18" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21 22L15.04 16.04" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14 6.75H10C9.04 6.75 7.25 6.75 7.25 4C7.25 1.25 9.04 1.25 10 1.25H14C14.96 1.25 16.75 1.25 16.75 4C16.75 4.96 16.75 6.75 14 6.75ZM10 2.75C9.01 2.75 8.75 2.75 8.75 4C8.75 5.25 9.01 5.25 10 5.25H14C15.25 5.25 15.25 4.99 15.25 4C15.25 2.75 14.99 2.75 14 2.75H10Z" fill={`${color}`} />
		<path d="M14 22.7502H9C3.38 22.7502 2.25 20.1702 2.25 16.0002V10.0002C2.25 5.44021 3.9 3.49021 7.96 3.28021C8.35 3.26021 8.73 3.57021 8.75 3.99021C8.77 4.41021 8.45 4.75021 8.04 4.77021C5.2 4.93021 3.75 5.78021 3.75 10.0002V16.0002C3.75 19.7002 4.48 21.2502 9 21.2502H14C14.41 21.2502 14.75 21.5902 14.75 22.0002C14.75 22.4102 14.41 22.7502 14 22.7502Z" fill={`${color}`} />
		<path d="M21.0009 15.7499C20.5909 15.7499 20.2509 15.4099 20.2509 14.9999V9.99993C20.2509 5.77993 18.8009 4.92993 15.9609 4.76993C15.5509 4.74993 15.2309 4.38993 15.2509 3.97993C15.2709 3.56993 15.6309 3.24993 16.0409 3.26993C20.1009 3.48993 21.7509 5.43993 21.7509 9.98993V14.9899C21.7509 15.4099 21.4109 15.7499 21.0009 15.7499Z" fill={`${color}`} />
		<path d="M15 19.75C14.59 19.75 14.25 19.41 14.25 19V16C14.25 15.59 14.59 15.25 15 15.25H18C18.41 15.25 18.75 15.59 18.75 16C18.75 16.41 18.41 16.75 18 16.75H15.75V19C15.75 19.41 15.41 19.75 15 19.75Z" fill={`${color}`} />
		<path d="M21.0005 22.75C20.8105 22.75 20.6205 22.68 20.4705 22.53L14.5105 16.57C14.2205 16.28 14.2205 15.8 14.5105 15.51C14.8005 15.22 15.2805 15.22 15.5705 15.51L21.5305 21.47C21.8205 21.76 21.8205 22.24 21.5305 22.53C21.3805 22.68 21.1905 22.75 21.0005 22.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z" fill={`${color}`} />
		<path d="M17.2391 4.81949C17.2391 6.40949 15.9391 7.70949 14.3491 7.70949H9.64906C8.05906 7.70949 6.75906 6.40949 6.75906 4.81949C6.75906 4.25949 6.15906 3.90949 5.65906 4.16949C4.24906 4.91949 3.28906 6.40949 3.28906 8.11949V17.5295C3.28906 19.9895 5.29906 21.9995 7.75906 21.9995H16.2391C18.6991 21.9995 20.7091 19.9895 20.7091 17.5295V8.11949C20.7091 6.40949 19.7491 4.91949 18.3391 4.16949C17.8391 3.90949 17.2391 4.25949 17.2391 4.81949ZM15.5291 17.5295C15.3791 17.6795 15.1891 17.7495 14.9991 17.7495C14.8091 17.7495 14.6191 17.6795 14.4691 17.5295L9.74906 12.8095V13.9995C9.74906 14.4095 9.40906 14.7495 8.99906 14.7495C8.58906 14.7495 8.24906 14.4095 8.24906 13.9995V10.9995C8.24906 10.5895 8.58906 10.2495 8.99906 10.2495H11.9991C12.4091 10.2495 12.7491 10.5895 12.7491 10.9995C12.7491 11.4095 12.4091 11.7495 11.9991 11.7495H10.8091L15.5291 16.4695C15.8191 16.7595 15.8191 17.2395 15.5291 17.5295Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M16.2391 3.6499H7.75906C5.28906 3.6499 3.28906 5.6599 3.28906 8.1199V17.5299C3.28906 19.9899 5.29906 21.9999 7.75906 21.9999H16.2291C18.6991 21.9999 20.6991 19.9899 20.6991 17.5299V8.1199C20.7091 5.6499 18.6991 3.6499 16.2391 3.6499Z" fill={`${color}`} />
		<path d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z" fill={`${color}`} />
		<path d="M15.53 16.47L10.81 11.75H12C12.41 11.75 12.75 11.41 12.75 11C12.75 10.59 12.41 10.25 12 10.25H9C8.59 10.25 8.25 10.59 8.25 11V14C8.25 14.41 8.59 14.75 9 14.75C9.41 14.75 9.75 14.41 9.75 14V12.81L14.47 17.53C14.62 17.68 14.81 17.75 15 17.75C15.19 17.75 15.38 17.68 15.53 17.53C15.82 17.24 15.82 16.76 15.53 16.47Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 10C3 5.44002 4.67 4.20002 8 4.02002" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14 22H9C4 22 3 20 3 16V14" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10.9991 2H10.0391C9.03906 2 8.03906 2 8.03906 4C8.03906 6 9.03906 6 10.0391 6H14.0391C16.0391 6 16.0391 5 16.0391 4C16.0391 2 15.0391 2 14.0391 2" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M15 19V16H18" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20.9991 22L15.0391 16.04" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<g opacity="0.4">
			<path d="M15 19V16H18" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M20.9991 22L15.0391 16.04" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		</g>
	</svg>
{/if}
