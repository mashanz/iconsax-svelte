<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M17 13.4V16.4C17 20.4 15.4 22 11.4 22H7.6C3.6 22 2 20.4 2 16.4V12.6C2 8.6 3.6 7 7.6 7H10.6" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17 13.4H13.8C11.4 13.4 10.6 12.6 10.6 10.2V7L17 13.4Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M11.6 2H15.6" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7 5C7 3.34 8.34 2 10 2H12.62" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21.9999 8V14.19C21.9999 15.74 20.7399 17 19.1899 17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M22 8H19C16.75 8 16 7.25 16 5V2L22 8Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M11.4 22.75H7.6C3.21 22.75 1.25 20.79 1.25 16.4V12.6C1.25 8.21 3.21 6.25 7.6 6.25H10.6C11.01 6.25 11.35 6.59 11.35 7C11.35 7.41 11.01 7.75 10.6 7.75H7.6C4.02 7.75 2.75 9.02 2.75 12.6V16.4C2.75 19.98 4.02 21.25 7.6 21.25H11.4C14.98 21.25 16.25 19.98 16.25 16.4V13.4C16.25 12.99 16.59 12.65 17 12.65C17.41 12.65 17.75 12.99 17.75 13.4V16.4C17.75 20.79 15.79 22.75 11.4 22.75Z" fill={`${color}`} />
		<path d="M16.9996 14.15H13.7996C10.9896 14.15 9.84961 13.01 9.84961 10.2V6.99999C9.84961 6.69999 10.0296 6.41999 10.3096 6.30999C10.5896 6.18999 10.9096 6.25999 11.1296 6.46999L17.5296 12.87C17.7396 13.08 17.8096 13.41 17.6896 13.69C17.5796 13.97 17.2996 14.15 16.9996 14.15ZM11.3496 8.80999V10.2C11.3496 12.19 11.8096 12.65 13.7996 12.65H15.1896L11.3496 8.80999Z" fill={`${color}`} />
		<path d="M15.5996 2.75H11.5996C11.1896 2.75 10.8496 2.41 10.8496 2C10.8496 1.59 11.1896 1.25 11.5996 1.25H15.5996C16.0096 1.25 16.3496 1.59 16.3496 2C16.3496 2.41 16.0096 2.75 15.5996 2.75Z" fill={`${color}`} />
		<path d="M7 5.75C6.59 5.75 6.25 5.41 6.25 5C6.25 2.93 7.93 1.25 10 1.25H12.62C13.03 1.25 13.37 1.59 13.37 2C13.37 2.41 13.03 2.75 12.62 2.75H10C8.76 2.75 7.75 3.76 7.75 5C7.75 5.41 7.41 5.75 7 5.75Z" fill={`${color}`} />
		<path d="M19.1895 17.75C18.7795 17.75 18.4395 17.41 18.4395 17C18.4395 16.59 18.7795 16.25 19.1895 16.25C20.3295 16.25 21.2495 15.32 21.2495 14.19V8C21.2495 7.59 21.5895 7.25 21.9995 7.25C22.4095 7.25 22.7495 7.59 22.7495 8V14.19C22.7495 16.15 21.1495 17.75 19.1895 17.75Z" fill={`${color}`} />
		<path d="M22 8.74999H19C16.34 8.74999 15.25 7.65999 15.25 4.99999V1.99999C15.25 1.69999 15.43 1.41999 15.71 1.30999C15.99 1.18999 16.31 1.25999 16.53 1.46999L22.53 7.46999C22.74 7.67999 22.81 8.00999 22.69 8.28999C22.58 8.56999 22.3 8.74999 22 8.74999ZM16.75 3.80999V4.99999C16.75 6.82999 17.17 7.24999 19 7.24999H20.19L16.75 3.80999Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.5 13.15H13.33C11.55 13.15 10.1 11.71 10.1 9.92V7.75C10.1 7.34 9.77 7 9.35 7H6.18C3.87 7 2 8.5 2 11.18V17.82C2 20.5 3.87 22 6.18 22H12.07C14.38 22 16.25 20.5 16.25 17.82V13.9C16.25 13.48 15.91 13.15 15.5 13.15Z" fill={`${color}`} />
		<path d="M17.8198 2H15.8498H14.7598H11.9298C9.66977 2 7.83977 3.44 7.75977 6.01C7.81977 6.01 7.86977 6 7.92977 6H10.7598H11.8498H13.8198C16.1298 6 17.9998 7.5 17.9998 10.18V12.15V14.86V16.83C17.9998 16.89 17.9898 16.94 17.9898 16.99C20.2198 16.92 21.9998 15.44 21.9998 12.83V10.86V8.15V6.18C21.9998 3.5 20.1298 2 17.8198 2Z" fill={`${color}`} />
		<path d="M11.9806 7.1517C11.6706 6.8417 11.1406 7.0517 11.1406 7.4817V10.1017C11.1406 11.2017 12.0706 12.1017 13.2106 12.1017C13.9206 12.1117 14.9106 12.1117 15.7606 12.1117C16.1906 12.1117 16.4106 11.6117 16.1106 11.3117C15.0206 10.2217 13.0806 8.2717 11.9806 7.1517Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M15.5 13.15H13.33C11.55 13.15 10.1 11.71 10.1 9.92V7.75C10.1 7.34 9.77 7 9.35 7H6.18C3.87 7 2 8.5 2 11.18V17.82C2 20.5 3.87 22 6.18 22H12.07C14.38 22 16.25 20.5 16.25 17.82V13.9C16.25 13.48 15.91 13.15 15.5 13.15Z" fill={`${color}`} />
		<path d="M17.8198 2H15.8498H14.7598H11.9298C9.66977 2 7.83977 3.44 7.75977 6.01C7.81977 6.01 7.86977 6 7.92977 6H10.7598H11.8498H13.8198C16.1298 6 17.9998 7.5 17.9998 10.18V12.15V14.86V16.83C17.9998 16.89 17.9898 16.94 17.9898 16.99C20.2198 16.92 21.9998 15.44 21.9998 12.83V10.86V8.15V6.18C21.9998 3.5 20.1298 2 17.8198 2Z" fill={`${color}`} />
		<path d="M11.9806 7.15024C11.6706 6.84024 11.1406 7.05024 11.1406 7.48024V10.1002C11.1406 11.2002 12.0706 12.1002 13.2106 12.1002C13.9206 12.1102 14.9106 12.1102 15.7606 12.1102C16.1906 12.1102 16.4106 11.6102 16.1106 11.3102C15.0206 10.2202 13.0806 8.27024 11.9806 7.15024Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 12.6C2 8.6 3.6 7 7.6 7H10.6" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17 13.3999V16.3999C17 20.3999 15.4 21.9999 11.4 21.9999H7.6C3.6 21.9999 2 20.3999 2 16.3999" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13.7996 13.4C11.3996 13.4 10.5996 12.6 10.5996 10.2V7L16.9996 13.4" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M11.5996 2H15.5996" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7 5C7 3.34 8.34 2 10 2H12.62" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21.9995 8V14.19C21.9995 15.74 20.7395 17 19.1895 17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M22 8H19C16.75 8 16 7.25 16 5V2L22 8Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M16 12.4V15.4C16 19.4 14.4 21 10.4 21H6.6C2.6 21 1 19.4 1 15.4V11.6C1 7.6 2.6 6 6.6 6H9.6" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M15.9996 12.4H12.7996C10.3996 12.4 9.59961 11.6 9.59961 9.2V6L15.9996 12.4Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M6 4C6 2.34 7.34 1 9 1H15" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M20.9995 7V13.19C20.9995 14.74 19.7395 16 18.1895 16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21 7H18C15.75 7 15 6.25 15 4V1L21 7Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
