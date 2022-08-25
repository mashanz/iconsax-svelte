<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22 2L13.8 10.2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13 6.17004V11H17.83" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.2605 22.25H8.74047C3.83047 22.25 1.73047 20.15 1.73047 15.24V15.11C1.73047 10.67 3.48047 8.53003 7.40047 8.16003C7.80047 8.13003 8.18047 8.43003 8.22047 8.84003C8.26047 9.25003 7.96047 9.62003 7.54047 9.66003C4.40047 9.95003 3.23047 11.43 3.23047 15.12V15.25C3.23047 19.32 4.67047 20.76 8.74047 20.76H15.2605C19.3305 20.76 20.7705 19.32 20.7705 15.25V15.12C20.7705 11.41 19.5805 9.93003 16.3805 9.66003C15.9705 9.62003 15.6605 9.26003 15.7005 8.85003C15.7405 8.44003 16.0905 8.13003 16.5105 8.17003C20.4905 8.51003 22.2705 10.66 22.2705 15.13V15.26C22.2705 20.15 20.1705 22.25 15.2605 22.25Z" fill={`${color}`} />
		<path d="M12 15.63C11.59 15.63 11.25 15.29 11.25 14.88V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V14.88C12.75 15.3 12.41 15.63 12 15.63Z" fill={`${color}`} />
		<path d="M11.9998 16.7501C11.8098 16.7501 11.6198 16.6801 11.4698 16.5301L8.11984 13.1801C7.82984 12.8901 7.82984 12.4101 8.11984 12.1201C8.40984 11.8301 8.88984 11.8301 9.17984 12.1201L11.9998 14.9401L14.8198 12.1201C15.1098 11.8301 15.5898 11.8301 15.8798 12.1201C16.1698 12.4101 16.1698 12.8901 15.8798 13.1801L12.5298 16.5301C12.3798 16.6801 12.1898 16.7501 11.9998 16.7501Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.53 7.53L9.81 15.25H12.83C13.24 15.25 13.58 15.59 13.58 16C13.58 16.41 13.24 16.75 12.83 16.75H8C7.59 16.75 7.25 16.41 7.25 16V11.17C7.25 10.76 7.59 10.42 8 10.42C8.41 10.42 8.75 10.76 8.75 11.17V14.19L16.47 6.47C16.62 6.32 16.81 6.25 17 6.25C17.19 6.25 17.38 6.32 17.53 6.47C17.82 6.76 17.82 7.24 17.53 7.53Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={`${color}`} />
		<path d="M7.75 17.5H12.58C12.99 17.5 13.33 17.16 13.33 16.75C13.33 16.34 12.99 16 12.58 16H9.56L17.28 8.28C17.57 7.99 17.57 7.51 17.28 7.22C17.13 7.07 16.94 7 16.75 7C16.56 7 16.37 7.07 16.22 7.22L8.5 14.94V11.92C8.5 11.51 8.16 11.17 7.75 11.17C7.34 11.17 7 11.51 7 11.92V16.75C7 17.16 7.34 17.5 7.75 17.5Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22.0008 2L13.8008 10.2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13 6.16992V10.9999H17.83" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 12.98V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M11 2H9C4 2 2 4 2 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g opacity="0.4">
			<path d="M22.0008 2L13.8008 10.2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M13 6.16992V10.9999H17.83" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</g>
		<path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
