<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5.79011 14.69H18.2101C19.8701 14.69 20.8701 13.38 20.4401 11.78L18.2401 3.71C17.9801 2.77 16.9701 2 16.0101 2H7.99011C7.03011 2 6.02011 2.77 5.77011 3.7L3.57011 11.77C3.13011 13.38 4.13011 14.69 5.79011 14.69Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 15V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8 22H16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18.21 15.44H5.79001C4.76001 15.44 3.85001 15.02 3.29001 14.29C2.73001 13.56 2.57001 12.57 2.84001 11.58L5.04001 3.5C5.38001 2.24 6.68001 1.25 7.99001 1.25H16C17.31 1.25 18.6 2.24 18.95 3.5L21.15 11.58C21.42 12.57 21.26 13.56 20.7 14.29C20.14 15.02 19.24 15.44 18.21 15.44ZM7.99001 2.75C7.36001 2.75 6.65001 3.29 6.49001 3.9L4.29001 11.98C4.14001 12.52 4.21001 13.02 4.49001 13.39C4.77001 13.76 5.23001 13.95 5.79001 13.95H18.21C18.77 13.95 19.24 13.75 19.51 13.39C19.78 13.03 19.86 12.53 19.71 11.98L17.51 3.9C17.34 3.29 16.64 2.75 16.01 2.75H7.99001Z" fill={`${color}`} />
		<path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V22C12.75 22.41 12.41 22.75 12 22.75Z" fill={`${color}`} />
		<path d="M16 22.75H8C7.59 22.75 7.25 22.41 7.25 22C7.25 21.59 7.59 21.25 8 21.25H16C16.41 21.25 16.75 21.59 16.75 22C16.75 22.41 16.41 22.75 16 22.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M20.4306 11.78L18.2306 3.7C17.9806 2.77 16.9706 2 16.0106 2H7.9906C7.0306 2 6.0206 2.77 5.7706 3.7L3.5706 11.78C3.1306 13.38 4.1306 14.69 5.7906 14.69H11.2506V20.5H8.0006C7.5906 20.5 7.2506 20.84 7.2506 21.25C7.2506 21.66 7.5906 22 8.0006 22H16.0006C16.4106 22 16.7506 21.66 16.7506 21.25C16.7506 20.84 16.4106 20.5 16.0006 20.5H12.7506V14.69H18.2106C19.8706 14.69 20.8706 13.38 20.4306 11.78Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M18.2106 14.69H5.7906C4.1306 14.69 3.1306 13.38 3.5706 11.78L5.7706 3.7C6.0206 2.77 7.0306 2 7.9906 2H16.0106C16.9706 2 17.9806 2.77 18.2306 3.7L20.4306 11.78C20.8706 13.38 19.8706 14.69 18.2106 14.69Z" fill={`${color}`} />
		<path d="M16.75 21.2499C16.75 21.6599 16.41 21.9999 16 21.9999H8C7.59 21.9999 7.25 21.6599 7.25 21.2499C7.25 20.8399 7.59 20.4999 8 20.4999H11.25V14.6899H12.75V20.4999H16C16.41 20.4999 16.75 20.8399 16.75 21.2499Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.9406 2H7.99056C7.03056 2 6.02056 2.77 5.77056 3.7L3.57056 11.77C3.13056 13.37 4.13056 14.68 5.80056 14.68H18.2206C19.8806 14.68 20.8806 13.37 20.4506 11.77L18.2506 3.7C17.9806 2.77 16.9706 2 16.0106 2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 15V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8 22H16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5.78962 14.69H18.2096C19.8696 14.69 20.8696 13.38 20.4396 11.78L18.2396 3.71C17.9796 2.77 16.9696 2 16.0096 2H7.98962C7.02962 2 6.01962 2.77 5.76962 3.7L3.56962 11.77C3.12962 13.38 4.12962 14.69 5.78962 14.69Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<g opacity="0.4">
			<path d="M12 15V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M8 22H16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</g>
	</svg>
{/if}
