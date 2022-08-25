<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13 11L21.2 2.80005" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21.9999 6.83V2H17.1699" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12.9995 11.75C12.8095 11.75 12.6195 11.68 12.4695 11.53C12.1795 11.24 12.1795 10.76 12.4695 10.47L20.6695 2.26999C20.9595 1.97999 21.4395 1.97999 21.7295 2.26999C22.0195 2.55999 22.0195 3.03999 21.7295 3.32999L13.5295 11.53C13.3795 11.68 13.1895 11.75 12.9995 11.75Z" fill={`${color}`} />
		<path d="M21.9992 7.55C21.5892 7.55 21.2492 7.21 21.2492 6.8V2.75H17.1992C16.7892 2.75 16.4492 2.41 16.4492 2C16.4492 1.59 16.7892 1.25 17.1992 1.25H21.9992C22.4092 1.25 22.7492 1.59 22.7492 2V6.8C22.7492 7.21 22.4092 7.55 21.9992 7.55Z" fill={`${color}`} />
		<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.8 9H12.75V15.25C12.75 15.66 12.41 16 12 16C11.59 16 11.25 15.66 11.25 15.25V9H7.2C4 9 2 11 2 14.2V16.79C2 20 4 22 7.2 22H16.79C19.99 22 21.99 20 21.99 16.8V14.2C22 11 20 9 16.8 9Z" fill={`${color}`} />
		<path d="M12.7498 4.56141L14.8198 6.63141C14.9698 6.78141 15.1598 6.85141 15.3498 6.85141C15.5398 6.85141 15.7298 6.78141 15.8798 6.63141C16.1698 6.34141 16.1698 5.86141 15.8798 5.57141L12.5298 2.22141C12.2398 1.93141 11.7598 1.93141 11.4698 2.22141L8.11984 5.57141C7.82984 5.86141 7.82984 6.34141 8.11984 6.63141C8.40984 6.92141 8.88984 6.92141 9.17984 6.63141L11.2498 4.56141V9.00141H12.7498V4.56141Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M16.8 9H7.2C4 9 2 11 2 14.2V16.79C2 20 4 22 7.2 22H16.79C19.99 22 21.99 20 21.99 16.8V14.2C22 11 20 9 16.8 9Z" fill={`${color}`} />
		<path d="M15.8798 5.56994L12.5298 2.21994C12.2398 1.92994 11.7598 1.92994 11.4698 2.21994L8.11984 5.56994C7.82984 5.85994 7.82984 6.33994 8.11984 6.62994C8.40984 6.91994 8.88984 6.91994 9.17984 6.62994L11.2498 4.55994V15.2499C11.2498 15.6599 11.5898 15.9999 11.9998 15.9999C12.4098 15.9999 12.7498 15.6599 12.7498 15.2499V4.55994L14.8198 6.62994C14.9698 6.77994 15.1598 6.84994 15.3498 6.84994C15.5398 6.84994 15.7298 6.77994 15.8798 6.62994C16.1798 6.33994 16.1798 5.86994 15.8798 5.56994Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M17.52 18.01C16.16 19.25 14.29 20 12 20C7 20 4 16.42 4 12" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19.9998 12C19.9998 13.05 19.8298 14.05 19.5098 14.97" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9.43945 6.46991L11.9995 3.90991L14.5595 6.46991" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 9.14998V3.97998" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 14.1499V12.1899" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<g opacity="0.4">
			<path d="M13 10.9998L21.2 2.7998" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M21.9999 6.83V2H17.1699" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</g>
	</svg>
{/if}
