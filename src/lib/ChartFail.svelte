<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<!-- linear -->
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M17.2299 21.5199C17.0399 21.5199 16.8499 21.4499 16.6999 21.2999C16.4099 21.0099 16.4099 20.5299 16.6999 20.2399L20.2399 16.6999C20.5299 16.4099 21.0099 16.4099 21.2999 16.6999C21.5899 16.9899 21.5899 17.4699 21.2999 17.7599L17.7599 21.2999C17.6199 21.4399 17.4199 21.5199 17.2299 21.5199Z" fill={`${color}`} />
		<path d="M20.7699 21.5199C20.5799 21.5199 20.3899 21.4499 20.2399 21.2999L16.6999 17.7599C16.4099 17.4699 16.4099 16.9899 16.6999 16.6999C16.9899 16.4099 17.4699 16.4099 17.7599 16.6999L21.2999 20.2399C21.5899 20.5299 21.5899 21.0099 21.2999 21.2999C21.1499 21.4399 20.9599 21.5199 20.7699 21.5199Z" fill={`${color}`} />
		<path d="M7 14.25C6.59 14.25 6.25 13.91 6.25 13.5V10.5C6.25 10.09 6.59 9.75 7 9.75C7.41 9.75 7.75 10.09 7.75 10.5V13.5C7.75 13.91 7.41 14.25 7 14.25Z" fill={`${color}`} />
		<path d="M12 14.25C11.59 14.25 11.25 13.91 11.25 13.5V10.5C11.25 10.09 11.59 9.75 12 9.75C12.41 9.75 12.75 10.09 12.75 10.5V13.5C12.75 13.91 12.41 14.25 12 14.25Z" fill={`${color}`} />
		<path d="M17 14.25C16.59 14.25 16.25 13.91 16.25 13.5V10.5C16.25 10.09 16.59 9.75 17 9.75C17.41 9.75 17.75 10.09 17.75 10.5V13.5C17.75 13.91 17.41 14.25 17 14.25Z" fill={`${color}`} />
		<path d="M13 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V13C22.75 13.41 22.41 13.75 22 13.75C21.59 13.75 21.25 13.41 21.25 13V9C21.25 4.39 19.61 2.75 15 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H13C13.41 21.25 13.75 21.59 13.75 22C13.75 22.41 13.41 22.75 13 22.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21.97 7.21C21.69 4.48 19.52 2.31 16.79 2.03C16.59 2.01 16.39 2 16.19 2H7.81C7.61 2 7.41 2.01 7.21 2.03C4.48 2.31 2.31 4.48 2.03 7.21C2.01 7.41 2 7.61 2 7.81V16.19C2 16.39 2.01 16.59 2.03 16.79C2.31 19.52 4.48 21.69 7.21 21.97C7.41 21.99 7.61 22 7.81 22H14C14.55 22 15 21.55 15 21V18.03C15 16.36 16.36 15 18.03 15H21C21.55 15 22 14.55 22 14V7.81C22 7.61 21.99 7.41 21.97 7.21ZM7.75 13.5C7.75 13.91 7.41 14.25 7 14.25C6.59 14.25 6.25 13.91 6.25 13.5V10.5C6.25 10.09 6.59 9.75 7 9.75C7.41 9.75 7.75 10.09 7.75 10.5V13.5ZM12.75 13.5C12.75 13.91 12.41 14.25 12 14.25C11.59 14.25 11.25 13.91 11.25 13.5V10.5C11.25 10.09 11.59 9.75 12 9.75C12.41 9.75 12.75 10.09 12.75 10.5V13.5Z" fill={`${color}`} />
		<path d="M20.97 16H18.03C16.76 16 16 16.76 16 18.03V20.97C16 22.24 16.76 23 18.03 23H20.97C22.24 23 23 22.24 23 20.97V18.03C23 16.76 22.24 16 20.97 16ZM21.47 20.56C21.72 20.81 21.72 21.22 21.47 21.47C21.34 21.59 21.17 21.65 21.01 21.65C20.85 21.65 20.68 21.59 20.55 21.47L19.49 20.41L18.45 21.47C18.32 21.59 18.16 21.65 17.98 21.65C17.83 21.65 17.66 21.59 17.54 21.47C17.29 21.22 17.29 20.81 17.54 20.56L18.6 19.5L17.54 18.45C17.29 18.2 17.29 17.79 17.54 17.54C17.79 17.29 18.2 17.29 18.45 17.54L19.49 18.6L20.55 17.54C20.8 17.29 21.22 17.29 21.47 17.54C21.72 17.79 21.72 18.2 21.47 18.45L20.41 19.5L21.47 20.56Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<!-- bulk -->
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M17.2305 20.77L20.7705 17.23" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20.7705 20.77L17.2305 17.23" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7 10.5V13.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 10.5V13.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17 10.5V13.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 13V15C2 20 4 22 9 22H13" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<!-- twotone -->
{/if}
