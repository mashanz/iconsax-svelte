<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2.45001 14.97C3.52001 18.41 6.40002 21.06 9.98002 21.79" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2.04999 10.98C2.55999 5.93 6.81998 2 12 2C17.18 2 21.44 5.94 21.95 10.98" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.01 21.8C17.58 21.07 20.45 18.45 21.54 15.02" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.9898 22.5501C9.9398 22.5501 9.8898 22.5501 9.8398 22.5301C6.0098 21.7501 2.8998 18.9301 1.7398 15.1901C1.6198 14.7901 1.8398 14.3701 2.2298 14.2501C2.6298 14.1301 3.0498 14.3501 3.1698 14.7401C4.1698 17.9601 6.8398 20.3801 10.1398 21.0501C10.5498 21.1301 10.8098 21.5301 10.7198 21.9401C10.6498 22.3001 10.3298 22.5501 9.9898 22.5501Z" fill={`${color}`} />
		<path d="M21.9502 11.73C21.5702 11.73 21.2402 11.44 21.2002 11.06C20.7202 6.32 16.7602 2.75 12.0002 2.75C7.23022 2.75 3.28022 6.32 2.80022 11.05C2.76022 11.46 2.40022 11.77 1.98022 11.72C1.57022 11.68 1.27022 11.31 1.31022 10.9C1.87022 5.4 6.47022 1.25 12.0002 1.25C17.5402 1.25 22.1402 5.4 22.6902 10.9C22.7302 11.31 22.4302 11.68 22.0202 11.72C22.0002 11.73 21.9702 11.73 21.9502 11.73Z" fill={`${color}`} />
		<path d="M14.0101 22.5498C13.6601 22.5498 13.3501 22.3098 13.2801 21.9498C13.2001 21.5398 13.4601 21.1498 13.8601 21.0698C17.1401 20.3998 19.8101 17.9998 20.8201 14.7998C20.9401 14.3998 21.3701 14.1798 21.7601 14.3098C22.1601 14.4298 22.3701 14.8598 22.2501 15.2498C21.0701 18.9698 17.9701 21.7598 14.1601 22.5398C14.1101 22.5398 14.0601 22.5498 14.0101 22.5498Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.00084 14.2188H3.92084C3.31084 14.2188 2.75084 14.5287 2.43084 15.0487C2.11084 15.5587 2.08084 16.1687 2.34084 16.7087C3.57084 19.2287 5.79084 21.2087 8.43084 22.1387C8.61084 22.1987 8.81084 22.2387 9.00084 22.2387C9.35084 22.2387 9.70084 22.1287 10.0008 21.9187C10.4708 21.5887 10.7508 21.0487 10.7508 20.4787L10.7608 15.9787C10.7608 15.5087 10.5808 15.0687 10.2508 14.7387C9.91084 14.4087 9.47084 14.2188 9.00084 14.2188Z" fill={`${color}`} />
		<path d="M22.4799 9.6C21.3599 4.68 17.0499 1.25 11.9999 1.25C6.94993 1.25 2.63993 4.68 1.51993 9.6C1.39993 10.12 1.51993 10.65 1.85993 11.07C2.19993 11.49 2.69993 11.73 3.23993 11.73H20.7699C21.3099 11.73 21.8099 11.49 22.1499 11.07C22.4799 10.65 22.5999 10.11 22.4799 9.6Z" fill={`${color}`} />
		<path d="M20.06 14.2717L15 14.2617C14.53 14.2617 14.09 14.4417 13.76 14.7717C13.43 15.1017 13.25 15.5417 13.25 16.0117L13.26 20.4917C13.26 21.0617 13.54 21.6017 14.01 21.9317C14.31 22.1417 14.66 22.2517 15.01 22.2517C15.2 22.2517 15.39 22.2217 15.57 22.1517C18.19 21.2317 20.41 19.2617 21.64 16.7717C21.9 16.2417 21.87 15.6217 21.56 15.1217C21.23 14.5817 20.67 14.2717 20.06 14.2717Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M10.2408 14.74C9.91084 14.41 9.47084 14.22 9.00084 14.22H3.92084C3.31084 14.22 2.75084 14.53 2.43084 15.05C2.11084 15.56 2.08084 16.17 2.34084 16.71C3.57084 19.23 5.79084 21.21 8.43084 22.14C8.61084 22.2 8.81084 22.24 9.00084 22.24C9.35084 22.24 9.70084 22.13 10.0008 21.92C10.4708 21.59 10.7508 21.05 10.7508 20.48L10.7608 15.98C10.7508 15.51 10.5708 15.07 10.2408 14.74Z" fill={`${color}`} />
		<path d="M22.4799 9.6C21.3599 4.68 17.0499 1.25 11.9999 1.25C6.94993 1.25 2.63993 4.68 1.51993 9.6C1.39993 10.12 1.51993 10.65 1.85993 11.07C2.19993 11.49 2.69993 11.73 3.23993 11.73H20.7699C21.3099 11.73 21.8099 11.49 22.1499 11.07C22.4799 10.65 22.5999 10.11 22.4799 9.6Z" fill={`${color}`} />
		<path opacity="0.4" d="M21.56 15.1C21.24 14.58 20.68 14.26 20.06 14.26L15 14.25C14.53 14.25 14.09 14.43 13.76 14.76C13.43 15.09 13.25 15.53 13.25 16L13.26 20.48C13.26 21.05 13.54 21.59 14.01 21.92C14.31 22.13 14.66 22.24 15.01 22.24C15.2 22.24 15.39 22.21 15.57 22.14C18.19 21.22 20.41 19.25 21.64 16.76C21.9 16.23 21.87 15.61 21.56 15.1Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2.44922 14.97C3.51922 18.41 6.39923 21.06 9.97923 21.79" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2.05078 10.98C2.56078 5.93 6.82078 2 12.0008 2C17.1808 2 21.4408 5.94 21.9508 10.98" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.0098 21.8C17.5798 21.07 20.4498 18.45 21.5398 15.02" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M2.44922 14.9702C3.51922 18.4102 6.39923 21.0602 9.97923 21.7902" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2.05078 10.98C2.56078 5.93 6.82078 2 12.0008 2C17.1808 2 21.4408 5.94 21.9508 10.98" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.0098 21.8C17.5798 21.07 20.4498 18.45 21.5398 15.02" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
