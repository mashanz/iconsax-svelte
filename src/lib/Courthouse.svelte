<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 22H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 2C13.6 2.64 15.4 2.64 17 2V5C15.4 5.64 13.6 5.64 12 5V2Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 5V8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17 8H7C5 8 4 9 4 11V22H20V11C20 9 19 8 17 8Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M4.58008 12H19.4201" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7.98999 12V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
		<path d="M11.99 12V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
		<path d="M15.99 12V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z" fill={`${color}`} />
		<path d="M14.5 6.22993C13.56 6.22993 12.62 6.04995 11.72 5.68995C11.44 5.57995 11.25 5.29994 11.25 4.98994V1.98994C11.25 1.73994 11.37 1.50995 11.58 1.36995C11.79 1.22995 12.05 1.19993 12.28 1.28993C13.71 1.85993 15.29 1.85993 16.72 1.28993C16.95 1.19993 17.21 1.22995 17.42 1.36995C17.63 1.50995 17.75 1.73994 17.75 1.98994V4.98994C17.75 5.29994 17.56 5.56995 17.28 5.68995C16.38 6.04995 15.44 6.22993 14.5 6.22993ZM12.75 4.46992C13.89 4.81992 15.11 4.81992 16.25 4.46992V3.01997C15.1 3.29997 13.9 3.29997 12.75 3.01997V4.46992Z" fill={`${color}`} />
		<path d="M12 8.75C11.59 8.75 11.25 8.41 11.25 8V5C11.25 4.59 11.59 4.25 12 4.25C12.41 4.25 12.75 4.59 12.75 5V8C12.75 8.41 12.41 8.75 12 8.75Z" fill={`${color}`} />
		<path d="M20 22.75H4C3.59 22.75 3.25 22.41 3.25 22V11C3.25 8.58 4.58 7.25 7 7.25H17C19.42 7.25 20.75 8.58 20.75 11V22C20.75 22.41 20.41 22.75 20 22.75ZM4.75 21.25H19.25V11C19.25 9.42 18.58 8.75 17 8.75H7C5.42 8.75 4.75 9.42 4.75 11V21.25Z" fill={`${color}`} />
		<path d="M19.4201 12.75H4.58008C4.17008 12.75 3.83008 12.41 3.83008 12C3.83008 11.59 4.17008 11.25 4.58008 11.25H19.4201C19.8301 11.25 20.1701 11.59 20.1701 12C20.1701 12.41 19.8301 12.75 19.4201 12.75Z" fill={`${color}`} />
		<path d="M8.74023 12H7.24023V22H8.74023V12Z" fill={`${color}`} />
		<path d="M12.7402 12H11.2402V22H12.7402V12Z" fill={`${color}`} />
		<path d="M16.7402 12H15.2402V22H16.7402V12Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22 21.2512H20.75V11.0012C20.75 8.58117 19.42 7.25116 17 7.25116H12.75V6.02116C13.33 6.16116 13.91 6.24116 14.5 6.24116C15.44 6.24116 16.38 6.06116 17.28 5.70116C17.56 5.59116 17.75 5.31117 17.75 5.00117V2.00117C17.75 1.75117 17.63 1.52117 17.42 1.38117C17.21 1.24117 16.95 1.21117 16.72 1.30117C15.29 1.87117 13.71 1.87117 12.28 1.30117C12.05 1.21117 11.79 1.24117 11.58 1.38117C11.37 1.52117 11.25 1.75117 11.25 2.00117V5.00117V7.25116H7C4.58 7.25116 3.25 8.58117 3.25 11.0012V21.2512H2C1.59 21.2512 1.25 21.5912 1.25 22.0012C1.25 22.4112 1.59 22.7512 2 22.7512H4H20H22C22.41 22.7512 22.75 22.4112 22.75 22.0012C22.75 21.5912 22.41 21.2512 22 21.2512ZM7.24 21.2512H4.75V12.7512H7.24V21.2512ZM11.24 21.2512H8.74V12.7512H11.24V21.2512ZM15.24 21.2512H12.74V12.7512H15.24V21.2512ZM19.25 21.2512H16.74V12.7512H19.25V21.2512Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M17.42 1.3802C17.21 1.2402 16.95 1.21018 16.72 1.30018C15.29 1.87018 13.71 1.87018 12.28 1.30018C12.05 1.21018 11.79 1.2402 11.58 1.3802C11.37 1.5202 11.25 1.7502 11.25 2.0002V5.0002V8.0002C11.25 8.41019 11.59 8.7502 12 8.7502C12.41 8.7502 12.75 8.41019 12.75 8.0002V6.02021C13.33 6.16021 13.91 6.24019 14.5 6.24019C15.44 6.24019 16.38 6.06021 17.28 5.70021C17.56 5.59021 17.75 5.3102 17.75 5.0002V2.0002C17.75 1.7502 17.63 1.5202 17.42 1.3802Z" fill={`${color}`} />
		<path d="M22 21.25H20.75V11C20.75 8.58 19.42 7.25 17 7.25H7C4.58 7.25 3.25 8.58 3.25 11V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H4H20H22C22.41 22.75 22.75 22.41 22.75 22C22.75 21.59 22.41 21.25 22 21.25ZM19.25 12.75V21.25H16.74V12.75H19.25ZM11.24 21.25H8.74V12.75H11.24V21.25ZM12.74 12.75H15.24V21.25H12.74V12.75ZM4.75 12.75H7.24V21.25H4.75V12.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 22H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 2C13.6 2.64 15.4 2.64 17 2V5C15.4 5.64 13.6 5.64 12 5V2Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 5V8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M4 15.91V22H20V11C20 9 19 8 17 8H7C5 8 4 9 4 11V12" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M4 12H19.42" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7.99023 12V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
		<path d="M11.9902 12V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
		<path d="M15.9902 12V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 22H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 2C13.6 2.64 15.4 2.64 17 2V5C15.4 5.64 13.6 5.64 12 5V2Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 5V8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17 8H7C5 8 4 9 4 11V22H20V11C20 9 19 8 17 8Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M4.58008 12H19.4201" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M7.99023 12V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
		<path opacity="0.4" d="M11.9902 12V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
		<path opacity="0.4" d="M15.9902 12V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
	</svg>
{/if}
