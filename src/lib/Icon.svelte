<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<!-- linear -->
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12.0005 22.75C7.12052 22.75 3.15051 18.78 3.15051 13.9C3.12051 8.17 8.58051 3.4 10.9305 1.61C11.5605 1.13 12.4405 1.13 13.0705 1.61C15.4205 3.43 20.8805 8.26 20.8505 13.91C20.8505 18.78 16.8805 22.75 12.0005 22.75ZM12.0005 2.75C11.9505 2.75 11.8905 2.77 11.8405 2.81C10.1505 4.1 4.63052 8.71 4.66052 13.9C4.66052 17.96 7.96053 21.25 12.0105 21.25C16.0605 21.25 19.3605 17.96 19.3605 13.91C19.3905 8.79 13.8605 4.12 12.1605 2.81C12.1005 2.77 12.0505 2.75 12.0005 2.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<!-- bold -->
{:else if variant === 'Bulk'}
	<!-- bulk -->
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15 2V12C15 13.1 14.1 14 13 14H2V7.62C2.73 8.49 3.85003 9.03 5.09003 9C6.10003 8.98 7.01 8.59 7.69 7.94C8 7.68 8.26002 7.34999 8.46002 6.98999C8.82002 6.37999 9.02 5.65997 9 4.90997C8.97 3.73997 8.45001 2.71 7.64001 2H15Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20.2905 9H19.0005C18.4505 9 18.0005 9.45 18.0005 10V13C18.0005 13.55 18.4505 14 19.0005 14H22.0005V17C22.0005 18.66 20.6605 20 19.0005 20H18.0005C18.0005 18.9 17.1005 18 16.0005 18C14.9005 18 14.0005 18.9 14.0005 20H10.0005C10.0005 18.9 9.10049 18 8.00049 18C6.90049 18 6.00049 18.9 6.00049 20H5.00049C3.94049 20 3.01047 19.45 2.48047 18.63" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 14H13C14.1 14 15 13.1 15 12V5H16.84C17.2 5 17.55 5.10002 17.85 5.27002" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9 5C9 6.2 8.47001 7.27 7.64001 8C6.93001 8.62 6.01 9 5 9C2.79 9 1 7.21 1 5C1 3.74 1.58 2.61 2.5 1.88C3.19 1.33 4.06 1 5 1C7.21 1 9 2.79 9 5Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M5.25 3.75V5.25L4 6" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H7.64C8.47 21.27 9 20.2 9 19C9 16.79 7.21 15 5 15C4.06 15 3.19 15.33 2.5 15.88V11.51C2.5 9.44001 4.18999 7.75 6.25999 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M2.5 11.5101V7.84014C2.5 6.65014 3.23 5.59009 4.34 5.17009L12.28 2.17009C13.52 1.71009 14.85 2.62012 14.85 3.95012V7.75011" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M22.5608 13.9702V16.0302C22.5608 16.5802 22.1208 17.0302 21.5608 17.0502H19.6008C18.5208 17.0502 17.5308 16.2602 17.4408 15.1802C17.3808 14.5502 17.6208 13.9602 18.0408 13.5502C18.4108 13.1702 18.9208 12.9502 19.4808 12.9502H21.5608C22.1208 12.9702 22.5608 13.4202 22.5608 13.9702Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M7 12H14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9 19C9 20.2 8.47 21.27 7.64 22C6.93 22.62 6.01 23 5 23C2.79 23 1 21.21 1 19C1 17.74 1.58 16.61 2.5 15.88C3.19 15.33 4.06 15 5 15C7.21 15 9 16.79 9 19Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M5.25 17.75V19.25L4 20" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
