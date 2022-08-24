<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2V5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 2V5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22L21 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 9.08997H20.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.37 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V13" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9955 13.7H12.0045" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.29431 13.7H8.30329" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.29431 16.7H8.30329" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" fill={`${color}`}/>
<path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" fill={`${color}`}/>
<path d="M18.2 22.15C16.02 22.15 14.25 20.38 14.25 18.2C14.25 16.02 16.02 14.25 18.2 14.25C20.38 14.25 22.15 16.02 22.15 18.2C22.15 20.38 20.38 22.15 18.2 22.15ZM18.2 15.75C16.85 15.75 15.75 16.85 15.75 18.2C15.75 19.55 16.85 20.65 18.2 20.65C19.55 20.65 20.65 19.55 20.65 18.2C20.65 16.85 19.55 15.75 18.2 15.75Z" fill={`${color}`}/>
<path d="M21.9995 22.7499C21.8095 22.7499 21.6195 22.6799 21.4695 22.5299L20.4695 21.5299C20.1795 21.2399 20.1795 20.7599 20.4695 20.4699C20.7595 20.1799 21.2395 20.1799 21.5295 20.4699L22.5295 21.4699C22.8195 21.7599 22.8195 22.2399 22.5295 22.5299C22.3795 22.6799 22.1895 22.7499 21.9995 22.7499Z" fill={`${color}`}/>
<path d="M8.5 14.4999C8.37 14.4999 8.24 14.4699 8.12 14.4199C7.99 14.3699 7.87999 14.2999 7.78999 14.2099C7.74999 14.1599 7.7 14.1099 7.67 14.0599C7.63 13.9999 7.6 13.9399 7.58 13.8799C7.55 13.8199 7.53 13.7599 7.52 13.6999C7.51 13.6299 7.5 13.5599 7.5 13.4999C7.5 13.2399 7.60999 12.9799 7.78999 12.7899C7.87999 12.6999 7.99 12.6299 8.12 12.5799C8.48 12.4199 8.93001 12.5099 9.21001 12.7899C9.39001 12.9799 9.5 13.2399 9.5 13.4999C9.5 13.5599 9.49 13.6299 9.48 13.6999C9.47 13.7599 9.45 13.8199 9.42 13.8799C9.4 13.9399 9.37 13.9999 9.33 14.0599C9.29 14.1099 9.25001 14.1599 9.21001 14.2099C9.02001 14.3899 8.76 14.4999 8.5 14.4999Z" fill={`${color}`}/>
<path d="M12 14.4999C11.74 14.4999 11.48 14.3899 11.29 14.2099C11.11 14.0199 11 13.7699 11 13.4999C11 13.3699 11.03 13.2399 11.08 13.1199C11.13 12.9999 11.2 12.89 11.29 12.79C11.66 12.42 12.33 12.42 12.71 12.79C12.89 12.98 13 13.2399 13 13.4999C13 13.5599 12.99 13.63 12.98 13.7C12.97 13.76 12.95 13.8199 12.92 13.8799C12.9 13.9399 12.87 13.9999 12.83 14.0599C12.79 14.1099 12.75 14.1599 12.71 14.2099C12.52 14.3899 12.26 14.4999 12 14.4999Z" fill={`${color}`}/>
<path d="M8.5 17.9999C8.24 17.9999 7.97999 17.8899 7.78999 17.7099C7.60999 17.5199 7.5 17.2599 7.5 16.9999C7.5 16.8699 7.53 16.7399 7.58 16.6199C7.63 16.4899 7.69999 16.38 7.78999 16.29C8.15999 15.92 8.84001 15.92 9.21001 16.29C9.39001 16.48 9.5 16.7399 9.5 16.9999C9.5 17.2599 9.39001 17.5199 9.21001 17.7099C9.02001 17.8899 8.76 17.9999 8.5 17.9999Z" fill={`${color}`}/>
<path d="M20.5 9.83984H3.5C3.09 9.83984 2.75 9.49984 2.75 9.08984C2.75 8.67984 3.09 8.33984 3.5 8.33984H20.5C20.91 8.33984 21.25 8.67984 21.25 9.08984C21.25 9.49984 20.91 9.83984 20.5 9.83984Z" fill={`${color}`}/>
<path d="M13.37 22.75H8C4.35 22.75 2.25 20.65 2.25 17V8.5C2.25 4.85 4.35 2.75 8 2.75H16C19.65 2.75 21.75 4.85 21.75 8.5V13C21.75 13.41 21.41 13.75 21 13.75C20.59 13.75 20.25 13.41 20.25 13V8.5C20.25 5.64 18.86 4.25 16 4.25H8C5.14 4.25 3.75 5.64 3.75 8.5V17C3.75 19.86 5.14 21.25 8 21.25H13.37C13.78 21.25 14.12 21.59 14.12 22C14.12 22.41 13.78 22.75 13.37 22.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75023V2C8.75023 1.59 8.41023 1.25 8.00023 1.25C7.59023 1.25 7.25023 1.59 7.25023 2V3.56C4.55023 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z" fill={`${color}`}/>
<path d="M20 9.83984H4C3.45 9.83984 3 10.2898 3 10.8398V16.9998C3 19.9998 4.5 21.9998 8 21.9998H16C19.5 21.9998 21 19.9998 21 16.9998V10.8398C21 10.2898 20.55 9.83984 20 9.83984ZM15.66 19.5298C15.51 19.6798 15.32 19.7498 15.13 19.7498C14.94 19.7498 14.75 19.6798 14.6 19.5298L13.86 18.7898C13.28 19.1698 12.58 19.3998 11.83 19.3998C9.79 19.3998 8.13 17.7398 8.13 15.6998C8.13 13.6598 9.79 11.9998 11.83 11.9998C13.87 11.9998 15.53 13.6598 15.53 15.6998C15.53 16.4498 15.3 17.1498 14.92 17.7298L15.66 18.4698C15.95 18.7598 15.95 19.2398 15.66 19.5298Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M20 9.84009C20.55 9.84009 21 10.2901 21 10.8401V17.0001C21 20.0001 19.5 22.0001 16 22.0001H8C4.5 22.0001 3 20.0001 3 17.0001V10.8401C3 10.2901 3.45 9.84009 4 9.84009H20Z" fill={`${color}`}/>
<path d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75024V2C8.75024 1.59 8.41024 1.25 8.00024 1.25C7.59024 1.25 7.25024 1.59 7.25024 2V3.56C4.55024 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z" fill={`${color}`}/>
<path d="M15.6609 18.47L14.9209 17.73C15.3009 17.15 15.5309 16.45 15.5309 15.7C15.5309 13.66 13.8709 12 11.8309 12C9.79086 12 8.13086 13.66 8.13086 15.7C8.13086 17.74 9.79086 19.4 11.8309 19.4C12.5809 19.4 13.2809 19.17 13.8609 18.79L14.6009 19.53C14.7509 19.68 14.9409 19.75 15.1309 19.75C15.3209 19.75 15.5109 19.68 15.6609 19.53C15.9509 19.24 15.9509 18.76 15.6609 18.47Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2V5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 2V5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22L21 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 9.08984H20.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V13" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.37 22H8C4.5 22 3 20 3 17" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9945 13.7H12.0035" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.29529 13.7H8.30427" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.29529 16.7H8.30427" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2V5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 2V5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22L21 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M3.5 9.08984H20.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.37 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V13" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M11.9955 13.7002H12.0045" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M8.29431 13.7002H8.30329" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M8.29492 16.7002H8.3039" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
