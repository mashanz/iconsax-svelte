<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.6 20H14.4C18.4 20 20 18.4 20 14.4V9.6C20 5.6 18.4 4 14.4 4H9.6C5.6 4 4 5.6 4 9.6V14.4C4 18.4 5.6 20 9.6 20Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10.5 17H13.5C16 17 17 16 17 13.5V10.5C17 8 16 7 13.5 7H10.5C8 7 7 8 7 10.5V13.5C7 16 8 17 10.5 17Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8.01001 4V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 4V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 4V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20 8H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20 12H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20 16H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 20V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12.01 20V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8.01001 20V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 8H4" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 12H4" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 16H4" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 9.69995L11.06 11.34C10.85 11.7 11.02 12 11.44 12H12.56C12.98 12 13.15 12.3 12.94 12.66L12 14.3" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14.4 20.75H9.6C5.21 20.75 3.25 18.79 3.25 14.4V9.6C3.25 5.21 5.21 3.25 9.6 3.25H14.4C18.79 3.25 20.75 5.21 20.75 9.6V14.4C20.75 18.79 18.79 20.75 14.4 20.75ZM9.6 4.75C6.02 4.75 4.75 6.02 4.75 9.6V14.4C4.75 17.98 6.02 19.25 9.6 19.25H14.4C17.98 19.25 19.25 17.98 19.25 14.4V9.6C19.25 6.02 17.98 4.75 14.4 4.75H9.6Z" fill={`${color}`} />
		<path d="M13.5 17.75H10.5C7.6 17.75 6.25 16.4 6.25 13.5V10.5C6.25 7.6 7.6 6.25 10.5 6.25H13.5C16.4 6.25 17.75 7.6 17.75 10.5V13.5C17.75 16.4 16.4 17.75 13.5 17.75ZM10.5 7.75C8.42 7.75 7.75 8.42 7.75 10.5V13.5C7.75 15.58 8.42 16.25 10.5 16.25H13.5C15.58 16.25 16.25 15.58 16.25 13.5V10.5C16.25 8.42 15.58 7.75 13.5 7.75H10.5Z" fill={`${color}`} />
		<path d="M8.00977 4.75C7.58977 4.75 7.25977 4.41 7.25977 4V2C7.25977 1.59 7.59977 1.25 8.00977 1.25C8.41977 1.25 8.75977 1.59 8.75977 2V4C8.75977 4.41 8.41977 4.75 8.00977 4.75Z" fill={`${color}`} />
		<path d="M12 4.75C11.59 4.75 11.25 4.41 11.25 4V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V4C12.75 4.41 12.41 4.75 12 4.75Z" fill={`${color}`} />
		<path d="M16 4.75C15.59 4.75 15.25 4.41 15.25 4V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V4C16.75 4.41 16.41 4.75 16 4.75Z" fill={`${color}`} />
		<path d="M22 8.75H20C19.59 8.75 19.25 8.41 19.25 8C19.25 7.59 19.59 7.25 20 7.25H22C22.41 7.25 22.75 7.59 22.75 8C22.75 8.41 22.42 8.75 22 8.75Z" fill={`${color}`} />
		<path d="M22 12.75H20C19.59 12.75 19.25 12.41 19.25 12C19.25 11.59 19.59 11.25 20 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.42 12.75 22 12.75Z" fill={`${color}`} />
		<path d="M22 16.75H20C19.59 16.75 19.25 16.41 19.25 16C19.25 15.59 19.59 15.25 20 15.25H22C22.41 15.25 22.75 15.59 22.75 16C22.75 16.41 22.42 16.75 22 16.75Z" fill={`${color}`} />
		<path d="M16 22.75C15.59 22.75 15.25 22.41 15.25 22V20C15.25 19.59 15.59 19.25 16 19.25C16.41 19.25 16.75 19.59 16.75 20V22C16.75 22.41 16.41 22.75 16 22.75Z" fill={`${color}`} />
		<path d="M12.0098 22.75C11.5998 22.75 11.2598 22.41 11.2598 22V20C11.2598 19.59 11.5998 19.25 12.0098 19.25C12.4198 19.25 12.7598 19.59 12.7598 20V22C12.7598 22.41 12.4198 22.75 12.0098 22.75Z" fill={`${color}`} />
		<path d="M8.00977 22.75C7.59977 22.75 7.25977 22.41 7.25977 22V20C7.25977 19.59 7.59977 19.25 8.00977 19.25C8.41977 19.25 8.75977 19.59 8.75977 20V22C8.75977 22.41 8.41977 22.75 8.00977 22.75Z" fill={`${color}`} />
		<path d="M4 8.75H2C1.59 8.75 1.25 8.42 1.25 8C1.25 7.58 1.59 7.25 2 7.25H4C4.41 7.25 4.75 7.59 4.75 8C4.75 8.41 4.42 8.75 4 8.75Z" fill={`${color}`} />
		<path d="M4 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H4C4.41 11.25 4.75 11.59 4.75 12C4.75 12.41 4.42 12.75 4 12.75Z" fill={`${color}`} />
		<path d="M4 16.75H2C1.59 16.75 1.25 16.41 1.25 16C1.25 15.59 1.59 15.25 2 15.25H4C4.41 15.25 4.75 15.59 4.75 16C4.75 16.41 4.42 16.75 4 16.75Z" fill={`${color}`} />
		<path d="M11.9996 15.05C11.8696 15.05 11.7396 15.02 11.6296 14.95C11.2696 14.74 11.1496 14.28 11.3496 13.93L12.0296 12.75H11.4396C10.9596 12.75 10.5696 12.54 10.3596 12.18C10.1496 11.82 10.1696 11.37 10.3996 10.96L11.3396 9.31995C11.5496 8.95995 12.0096 8.83995 12.3596 9.03995C12.7196 9.24995 12.8396 9.70995 12.6396 10.06L11.9596 11.24H12.5496C13.0296 11.24 13.4196 11.45 13.6296 11.81C13.8396 12.17 13.8196 12.62 13.5896 13.03L12.6496 14.67C12.5096 14.92 12.2596 15.05 11.9996 15.05Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M13.9802 7.75H10.0102C8.76023 7.75 7.74023 8.76 7.74023 10.02V13.99C7.74023 15.24 8.75023 16.26 10.0102 16.26H13.9802C15.2302 16.26 16.2502 15.25 16.2502 13.99V10.02C16.2502 8.76 15.2402 7.75 13.9802 7.75ZM13.5002 12.98L12.6102 14.53C12.4802 14.76 12.2402 14.88 12.0002 14.88C11.8802 14.88 11.7502 14.85 11.6502 14.79C11.3102 14.6 11.1902 14.17 11.3902 13.83L12.0302 12.72H11.4702C11.0202 12.72 10.6502 12.52 10.4502 12.18C10.2502 11.84 10.2702 11.42 10.5002 11.03L11.3902 9.48C11.5902 9.14 12.0202 9.03 12.3502 9.22C12.6902 9.41 12.8102 9.84 12.6102 10.18L11.9702 11.29H12.5302C12.9802 11.29 13.3502 11.49 13.5502 11.83C13.7502 12.17 13.7302 12.59 13.5002 12.98Z" fill={`${color}`} />
		<path
			d="M21.25 12.75C21.67 12.75 22 12.41 22 12C22 11.58 21.67 11.25 21.25 11.25H20V9.05H21.25C21.67 9.05 22 8.72 22 8.3C22 7.89 21.67 7.55 21.25 7.55H19.77C19.29 5.96 18.04 4.71 16.45 4.23V2.75C16.45 2.34 16.11 2 15.7 2C15.29 2 14.95 2.34 14.95 2.75V4H12.75V2.75C12.75 2.34 12.41 2 12 2C11.59 2 11.25 2.34 11.25 2.75V4H9.06V2.75C9.06 2.34 8.72 2 8.31 2C7.89 2 7.56 2.34 7.56 2.75V4.23C5.96 4.71 4.71 5.96 4.23 7.55H2.75C2.34 7.55 2 7.89 2 8.3C2 8.72 2.34 9.05 2.75 9.05H4V11.25H2.75C2.34 11.25 2 11.58 2 12C2 12.41 2.34 12.75 2.75 12.75H4V14.95H2.75C2.34 14.95 2 15.28 2 15.7C2 16.11 2.34 16.45 2.75 16.45H4.23C4.7 18.04 5.96 19.29 7.56 19.77V21.25C7.56 21.66 7.89 22 8.31 22C8.72 22 9.06 21.66 9.06 21.25V20H11.26V21.25C11.26 21.66 11.59 22 12.01 22C12.42 22 12.76 21.66 12.76 21.25V20H14.95V21.25C14.95 21.66 15.29 22 15.7 22C16.11 22 16.45 21.66 16.45 21.25V19.77C18.04 19.29 19.29 18.04 19.77 16.45H21.25C21.67 16.45 22 16.11 22 15.7C22 15.28 21.67 14.95 21.25 14.95H20V12.75H21.25ZM17.26 14.26C17.26 15.91 15.91 17.26 14.26 17.26H9.74C8.09 17.26 6.74 15.91 6.74 14.26V9.74C6.74 8.09 8.09 6.74 9.74 6.74H14.26C15.91 6.74 17.26 8.09 17.26 9.74V14.26Z"
			fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M15 4H9C6.24 4 4 6.24 4 9V15C4 17.76 6.24 20 9 20H15C17.76 20 20 17.76 20 15V9C20 6.24 17.76 4 15 4ZM17.26 14.26C17.26 15.92 15.92 17.26 14.26 17.26H9.74C8.08 17.26 6.74 15.92 6.74 14.26V9.74C6.74 8.08 8.08 6.74 9.74 6.74H14.25C15.91 6.74 17.25 8.08 17.25 9.74V14.26H17.26Z" fill={`${color}`} />
		<path d="M9.06055 2.75V4H9.00055C8.50055 4 8.02055 4.07 7.56055 4.21V2.75C7.56055 2.34 7.89055 2 8.31055 2C8.72055 2 9.06055 2.34 9.06055 2.75Z" fill={`${color}`} />
		<path d="M12.75 2.75V4H11.25V2.75C11.25 2.34 11.59 2 12 2C12.41 2 12.75 2.34 12.75 2.75Z" fill={`${color}`} />
		<path d="M16.4492 2.75V4.21C15.9892 4.07 15.4992 4 14.9992 4H14.9492V2.75C14.9492 2.34 15.2892 2 15.6992 2C16.1092 2 16.4492 2.34 16.4492 2.75Z" fill={`${color}`} />
		<path d="M21.9991 8.30005C21.9991 8.72005 21.6691 9.05005 21.2491 9.05005H19.9991V9.00005C19.9991 8.50005 19.9291 8.01005 19.7891 7.55005H21.2491C21.6691 7.55005 21.9991 7.89005 21.9991 8.30005Z" fill={`${color}`} />
		<path d="M22 12C22 12.41 21.67 12.75 21.25 12.75H20V11.25H21.25C21.67 11.25 22 11.58 22 12Z" fill={`${color}`} />
		<path d="M21.9991 15.7C21.9991 16.11 21.6691 16.45 21.2491 16.45H19.7891C19.9291 15.99 19.9991 15.5 19.9991 15V14.95H21.2491C21.6691 14.95 21.9991 15.28 21.9991 15.7Z" fill={`${color}`} />
		<path d="M16.4492 19.79V21.25C16.4492 21.66 16.1092 22 15.6992 22C15.2892 22 14.9492 21.66 14.9492 21.25V20H14.9992C15.4992 20 15.9892 19.93 16.4492 19.79Z" fill={`${color}`} />
		<path d="M12.7598 20V21.25C12.7598 21.66 12.4198 22 12.0098 22C11.5898 22 11.2598 21.66 11.2598 21.25V20H12.7598Z" fill={`${color}`} />
		<path d="M9.06055 20V21.25C9.06055 21.66 8.72055 22 8.31055 22C7.89055 22 7.56055 21.66 7.56055 21.25V19.79C8.02055 19.93 8.50055 20 9.00055 20H9.06055Z" fill={`${color}`} />
		<path d="M4.21 7.55005C4.07 8.01005 4 8.50005 4 9.00005V9.05005H2.75C2.34 9.05005 2 8.72005 2 8.30005C2 7.89005 2.34 7.55005 2.75 7.55005H4.21Z" fill={`${color}`} />
		<path d="M4 11.25V12.75H2.75C2.34 12.75 2 12.41 2 12C2 11.58 2.34 11.25 2.75 11.25H4Z" fill={`${color}`} />
		<path d="M4.21 16.45H2.75C2.34 16.45 2 16.11 2 15.7C2 15.28 2.34 14.95 2.75 14.95H4V15C4 15.5 4.07 15.99 4.21 16.45Z" fill={`${color}`} />
		<path d="M14.2602 6.73999H9.74023C8.08023 6.73999 6.74023 8.07999 6.74023 9.73999V14.25C6.74023 15.91 8.08023 17.25 9.74023 17.25H14.2502C15.9102 17.25 17.2502 15.91 17.2502 14.25V9.73999C17.2602 8.08999 15.9102 6.73999 14.2602 6.73999ZM13.5902 13.04L12.6502 14.68C12.5102 14.92 12.2602 15.06 12.0002 15.06C11.8702 15.06 11.7402 15.03 11.6302 14.96C11.2702 14.75 11.1502 14.29 11.3502 13.94L12.0302 12.76H11.4402C10.9602 12.76 10.5702 12.55 10.3602 12.19C10.1502 11.83 10.1702 11.38 10.4002 10.97L11.3402 9.32999C11.5502 8.96999 12.0102 8.84999 12.3602 9.04999C12.7202 9.25999 12.8402 9.71999 12.6402 10.07L11.9602 11.25H12.5502C13.0302 11.25 13.4202 11.46 13.6302 11.82C13.8502 12.18 13.8302 12.62 13.5902 13.04Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.6 20H14.4C18.4 20 20 18.4 20 14.4V9.6C20 5.6 18.4 4 14.4 4H9.6C5.6 4 4 5.6 4 9.6V14.4C4 18.4 5.6 20 9.6 20Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7 10.5V13.5C7 16 8 17 10.5 17H13.5C16 17 17 16 17 13.5V10.5C17 8 16 7 13.5 7H10.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8.00977 4V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 4V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 4V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20 8H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20 12H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20 16H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 20V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12.0098 20V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8.00977 20V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 8H4" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 12H4" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 16H4" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12.0007 9.69995L11.0607 11.34C10.8507 11.7 11.0207 12 11.4407 12H12.5607C12.9807 12 13.1507 12.3 12.9407 12.66L12.0007 14.3" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.6 20H14.4C18.4 20 20 18.4 20 14.4V9.6C20 5.6 18.4 4 14.4 4H9.6C5.6 4 4 5.6 4 9.6V14.4C4 18.4 5.6 20 9.6 20Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M10.5 17H13.5C16 17 17 16 17 13.5V10.5C17 8 16 7 13.5 7H10.5C8 7 7 8 7 10.5V13.5C7 16 8 17 10.5 17Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M8.00977 4V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M12 4V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M16 4V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M20 8H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M20 12H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M20 16H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M16 20V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M12.0098 20V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M8.00977 20V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M2 8H4" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M2 12H4" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M2 16H4" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M11.9997 9.7002L11.0597 11.3402C10.8497 11.7002 11.0197 12.0002 11.4397 12.0002H12.5597C12.9797 12.0002 13.1497 12.3002 12.9397 12.6602L11.9997 14.3002" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
