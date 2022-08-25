<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5.89999 17H18.09C19.99 17 20.99 16 20.99 14.1V2H2.98999V14.1C2.99999 16 3.99999 17 5.89999 17Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 2H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8 22L12 20V17" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 22L12 20" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7.5 11L10.65 8.37C10.9 8.16 11.23 8.22 11.4 8.5L12.6 10.5C12.77 10.78 13.1 10.83 13.35 10.63L16.5 8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18.1 17.75H5.89999C3.57999 17.75 2.25 16.42 2.25 14.1V2C2.25 1.59 2.59 1.25 3 1.25H21C21.41 1.25 21.75 1.59 21.75 2V14.1C21.75 16.42 20.42 17.75 18.1 17.75ZM3.75 2.75V14.1C3.75 15.59 4.40999 16.25 5.89999 16.25H18.09C19.58 16.25 20.24 15.59 20.24 14.1V2.75H3.75Z" fill={`${color}`} />
		<path d="M22 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H22C22.41 1.25 22.75 1.59 22.75 2C22.75 2.41 22.41 2.75 22 2.75Z" fill={`${color}`} />
		<path d="M8.00027 22.75C7.72027 22.75 7.46025 22.6 7.33025 22.34C7.14025 21.97 7.29028 21.52 7.67028 21.33L11.2503 19.54V17C11.2503 16.59 11.5903 16.25 12.0003 16.25C12.4103 16.25 12.7503 16.59 12.7503 17V20C12.7503 20.28 12.5903 20.54 12.3303 20.67L8.33025 22.67C8.23025 22.72 8.11027 22.75 8.00027 22.75Z" fill={`${color}`} />
		<path d="M15.9999 22.7502C15.8899 22.7502 15.77 22.7202 15.67 22.6702L11.67 20.6702C11.3 20.4802 11.1499 20.0302 11.3299 19.6602C11.5199 19.2902 11.9699 19.1402 12.3399 19.3202L16.3399 21.3202C16.7099 21.5102 16.8599 21.9602 16.6799 22.3302C16.5399 22.6002 16.2699 22.7502 15.9999 22.7502Z" fill={`${color}`} />
		<path d="M7.49993 11.7502C7.28993 11.7502 7.06994 11.6602 6.91994 11.4802C6.64994 11.1602 6.69992 10.6902 7.01992 10.4202L10.1699 7.79018C10.4599 7.55018 10.8299 7.45018 11.1799 7.51018C11.5399 7.57018 11.8499 7.79016 12.0399 8.11016L13.0899 9.86016L16.0199 7.42019C16.3399 7.16019 16.8099 7.20016 17.0799 7.52016C17.3499 7.84016 17.2999 8.31016 16.9799 8.58016L13.8299 11.2102C13.5399 11.4502 13.1699 11.5502 12.8199 11.4902C12.4599 11.4302 12.1499 11.2102 11.9599 10.8902L10.9099 9.14019L7.97994 11.5802C7.83994 11.6902 7.66993 11.7502 7.49993 11.7502Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H22C22.41 1.25 22.75 1.59 22.75 2C22.75 2.41 22.41 2.75 22 2.75Z" fill={`${color}`} />
		<path d="M16.6703 22.34C16.5403 22.6 16.2703 22.75 16.0003 22.75C15.8903 22.75 15.7703 22.72 15.6703 22.67L12.0003 20.84L8.33026 22.67C8.23026 22.72 8.11026 22.75 8.00026 22.75C7.73026 22.75 7.46026 22.6 7.33026 22.34C7.14026 21.96 7.29026 21.51 7.67026 21.33L11.2503 19.54V17H12.7503V19.54L16.3303 21.33C16.7103 21.51 16.8603 21.96 16.6703 22.34Z" fill={`${color}`} />
		<path d="M3 2V14.1C3 16 4 17 5.9 17H18.1C20 17 21 16 21 14.1V2H3ZM16.98 8.58L13.83 11.21C13.54 11.45 13.17 11.55 12.82 11.49C12.46 11.43 12.15 11.21 11.96 10.89L10.91 9.14L7.98 11.58C7.84 11.7 7.67 11.75 7.5 11.75C7.29 11.75 7.07 11.66 6.92 11.48C6.65 11.16 6.7 10.69 7.02 10.42L10.17 7.79C10.46 7.55 10.83 7.45 11.18 7.51C11.54 7.57 11.85 7.79 12.04 8.11L13.09 9.86L16.02 7.42C16.34 7.15 16.81 7.2 17.08 7.52C17.34 7.84 17.3 8.31 16.98 8.58Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M21 2V14.1C21 16 20 17 18.1 17H5.89999C3.99999 17 3 16 3 14.1V2H21Z" fill={`${color}`} />
		<path d="M22 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H22C22.41 1.25 22.75 1.59 22.75 2C22.75 2.41 22.41 2.75 22 2.75Z" fill={`${color}`} />
		<path d="M16.6703 22.34C16.5403 22.6 16.2703 22.75 16.0003 22.75C15.8903 22.75 15.7703 22.72 15.6703 22.67L12.0003 20.84L8.33025 22.67C8.23025 22.72 8.11027 22.75 8.00027 22.75C7.73027 22.75 7.46025 22.6 7.33025 22.34C7.14025 21.96 7.29028 21.51 7.67028 21.33L11.2503 19.54V17H12.7503V19.54L16.3303 21.33C16.7103 21.51 16.8603 21.96 16.6703 22.34Z" fill={`${color}`} />
		<path d="M7.5009 11.7499C7.2909 11.7499 7.07092 11.6599 6.92092 11.4799C6.65092 11.1599 6.70089 10.6899 7.02089 10.4199L10.1709 7.78993C10.4609 7.54993 10.8309 7.44994 11.1809 7.50994C11.5409 7.56994 11.8509 7.78991 12.0409 8.10991L13.0909 9.85991L16.0209 7.41994C16.3409 7.14994 16.8109 7.19992 17.0809 7.51992C17.3509 7.83992 17.3009 8.30991 16.9809 8.57991L13.8309 11.2099C13.5409 11.4499 13.1709 11.5499 12.8209 11.4899C12.4609 11.4299 12.1509 11.2099 11.9609 10.8899L10.9109 9.13994L7.98091 11.5799C7.84091 11.6899 7.6709 11.7499 7.5009 11.7499Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21 10V2H3V14.1C3 14.81 3.14001 15.4 3.42001 15.86C3.88001 16.62 4.72 17.01 5.91 17.01H18.1C20 17.01 21 16.01 21 14.11" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 2H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8 22L12 20V17" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 22L12 20" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7.5 11L10.65 8.37C10.9 8.16 11.23 8.22 11.4 8.5L12.6 10.5C12.77 10.78 13.1 10.83 13.35 10.63L16.5 8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5.90024 17H18.0902C19.9902 17 20.9902 16 20.9902 14.1V2H2.99023V14.1C3.00023 16 4.00024 17 5.90024 17Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 2H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<g opacity="0.4">
			<path d="M8 22L12 20M12 20V17M12 20L16 22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		</g>
		<path opacity="0.4" d="M7.5 11L10.65 8.37C10.9 8.16 11.23 8.22 11.4 8.5L12.6 10.5C12.77 10.78 13.1 10.83 13.35 10.63L16.5 8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
