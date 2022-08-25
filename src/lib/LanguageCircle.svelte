<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.99 8.95996H7.01001" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 7.28003V8.96002" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.5 8.93994C14.5 13.2399 11.14 16.7199 7 16.7199" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16.9999 16.72C15.1999 16.72 13.6 15.76 12.45 14.25" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.9897 9.70996H7.00977C6.59977 9.70996 6.25977 9.36996 6.25977 8.95996C6.25977 8.54996 6.59977 8.20996 7.00977 8.20996H16.9897C17.3997 8.20996 17.7397 8.54996 17.7397 8.95996C17.7397 9.36996 17.3997 9.70996 16.9897 9.70996Z" fill={`${color}`} />
		<path d="M12 9.71027C11.59 9.71027 11.25 9.37027 11.25 8.96027V7.28027C11.25 6.87027 11.59 6.53027 12 6.53027C12.41 6.53027 12.75 6.87027 12.75 7.28027V8.96027C12.75 9.37027 12.41 9.71027 12 9.71027Z" fill={`${color}`} />
		<path d="M7 17.4699C6.59 17.4699 6.25 17.1299 6.25 16.7199C6.25 16.3099 6.59 15.9699 7 15.9699C10.72 15.9699 13.75 12.8199 13.75 8.93994C13.75 8.52994 14.09 8.18994 14.5 8.18994C14.91 8.18994 15.25 8.52994 15.25 8.93994C15.25 13.6499 11.55 17.4699 7 17.4699Z" fill={`${color}`} />
		<path d="M17.0012 17.47C15.0312 17.47 13.2012 16.49 11.8612 14.7C11.6112 14.37 11.6812 13.9 12.0112 13.65C12.3412 13.4 12.8112 13.47 13.0612 13.8C14.1212 15.2 15.5212 15.97 17.0112 15.97C17.4212 15.97 17.7612 16.31 17.7612 16.72C17.7612 17.13 17.4112 17.47 17.0012 17.47Z" fill={`${color}`} />
		<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 17.47C15.29 17.47 13.69 16.73 12.41 15.36C10.96 16.67 9.07 17.47 7 17.47C6.59 17.47 6.25 17.13 6.25 16.72C6.25 16.31 6.59 15.97 7 15.97C10.47 15.97 13.34 13.22 13.71 9.7H12H7.01C6.6 9.7 6.26 9.36 6.26 8.95C6.26 8.54 6.6 8.21 7.01 8.21H11.25V7.28C11.25 6.87 11.59 6.53 12 6.53C12.41 6.53 12.75 6.87 12.75 7.28V8.21H14.44C14.46 8.21 14.48 8.2 14.5 8.2C14.52 8.2 14.54 8.21 14.56 8.21H16.99C17.4 8.21 17.74 8.55 17.74 8.96C17.74 9.37 17.4 9.71 16.99 9.71H15.21C15.06 11.42 14.42 12.99 13.44 14.27C14.44 15.38 15.69 15.98 17 15.98C17.41 15.98 17.75 16.32 17.75 16.73C17.75 17.14 17.41 17.47 17 17.47Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={`${color}`} />
		<path d="M17.0002 15.97C15.6902 15.97 14.4402 15.37 13.4402 14.26C14.4302 12.99 15.0702 11.42 15.2102 9.70004H16.9902C17.4002 9.70004 17.7402 9.36004 17.7402 8.95004C17.7402 8.54004 17.4002 8.20004 16.9902 8.20004H14.5602C14.5402 8.20004 14.5202 8.19003 14.5002 8.19003C14.4802 8.19003 14.4602 8.20004 14.4402 8.20004H12.7502V7.27002C12.7502 6.86002 12.4102 6.52002 12.0002 6.52002C11.5902 6.52002 11.2502 6.86002 11.2502 7.27002V8.20004H7.01025C6.60025 8.20004 6.26025 8.54004 6.26025 8.95004C6.26025 9.36004 6.60025 9.70004 7.01025 9.70004H12.0002H13.7003C13.3303 13.22 10.4702 15.97 6.99023 15.97C6.58023 15.97 6.24023 16.31 6.24023 16.72C6.24023 17.13 6.58023 17.47 6.99023 17.47C9.06023 17.47 10.9502 16.67 12.4002 15.36C13.6702 16.72 15.2802 17.47 16.9902 17.47C17.4002 17.47 17.7402 17.13 17.7402 16.72C17.7402 16.31 17.4102 15.97 17.0002 15.97Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.9897 8.95996H7.00977" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 7.28003V8.96002" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.5 8.93994C14.5 13.2399 11.14 16.7199 7 16.7199" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16.9992 16.72C15.1992 16.72 13.5992 15.76 12.4492 14.25" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.29998 7.97 2.84998" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g opacity="0.4">
			<path d="M16.9897 8.96045H7.00977" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M12 7.28027V8.96027" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M14.5 8.94043C14.5 13.2404 11.14 16.7204 7 16.7204" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M16.9992 16.72C15.1992 16.72 13.5992 15.76 12.4492 14.25" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</g>
		<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
