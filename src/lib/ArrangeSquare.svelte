<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17.15 13.8201L14.11 16.8601" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.84998 13.8201H17.15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.84998 10.1799L9.88998 7.13989" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17.15 10.1799H6.84998" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={`${color}`} />
		<path d="M14.1108 17.61C13.9208 17.61 13.7308 17.54 13.5808 17.39C13.2908 17.1 13.2908 16.62 13.5808 16.33L16.6208 13.29C16.9108 13 17.3908 13 17.6808 13.29C17.9708 13.58 17.9708 14.06 17.6808 14.35L14.6408 17.39C14.5008 17.53 14.3108 17.61 14.1108 17.61Z" fill={`${color}`} />
		<path d="M17.1496 14.5701H6.84961C6.43961 14.5701 6.09961 14.2301 6.09961 13.8201C6.09961 13.4101 6.43961 13.0701 6.84961 13.0701H17.1596C17.5696 13.0701 17.9096 13.4101 17.9096 13.8201C17.9096 14.2301 17.5696 14.5701 17.1496 14.5701Z" fill={`${color}`} />
		<path d="M6.84906 10.9301C6.65906 10.9301 6.46906 10.8601 6.31906 10.7101C6.02906 10.4201 6.02906 9.94008 6.31906 9.65008L9.35906 6.61008C9.64906 6.32008 10.1291 6.32008 10.4191 6.61008C10.7091 6.90008 10.7091 7.38008 10.4191 7.67008L7.37906 10.7101C7.22906 10.8601 7.03906 10.9301 6.84906 10.9301Z" fill={`${color}`} />
		<path d="M17.1496 10.9302H6.84961C6.43961 10.9302 6.09961 10.5902 6.09961 10.1802C6.09961 9.77018 6.43961 9.43018 6.84961 9.43018H17.1596C17.5696 9.43018 17.9096 9.77018 17.9096 10.1802C17.9096 10.5902 17.5696 10.9302 17.1496 10.9302Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.85 14.1C17.81 14.19 17.76 14.27 17.69 14.34L14.65 17.38C14.5 17.53 14.31 17.6 14.12 17.6C13.93 17.6 13.74 17.53 13.59 17.38C13.3 17.09 13.3 16.61 13.59 16.32L15.35 14.56H6.85C6.44 14.56 6.1 14.22 6.1 13.81C6.1 13.4 6.44 13.06 6.85 13.06H17.16C17.26 13.06 17.35 13.08 17.45 13.12C17.63 13.2 17.78 13.34 17.86 13.53C17.92 13.71 17.92 13.92 17.85 14.1ZM17.15 10.93H6.85C6.75 10.93 6.66 10.91 6.56 10.87C6.38 10.79 6.23 10.65 6.15 10.46C6.07 10.28 6.07 10.07 6.15 9.89C6.19 9.8 6.24 9.72 6.31 9.65L9.35 6.61C9.64 6.32 10.12 6.32 10.41 6.61C10.7 6.9 10.7 7.38 10.41 7.67L8.66 9.43H17.16C17.57 9.43 17.91 9.77 17.91 10.18C17.91 10.59 17.57 10.93 17.15 10.93Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill={`${color}`} />
		<path d="M17.8496 13.5301C17.7696 13.3501 17.6296 13.2001 17.4396 13.1201C17.3496 13.0801 17.2496 13.0601 17.1496 13.0601H6.84961C6.43961 13.0601 6.09961 13.4001 6.09961 13.8101C6.09961 14.2201 6.43961 14.5601 6.84961 14.5601H15.3496L13.5896 16.3201C13.2996 16.6101 13.2996 17.0901 13.5896 17.3801C13.7396 17.5301 13.9296 17.6001 14.1196 17.6001C14.3096 17.6001 14.4996 17.5301 14.6496 17.3801L17.6896 14.3401C17.7596 14.2701 17.8096 14.1901 17.8496 14.1001C17.9196 13.9201 17.9196 13.7101 17.8496 13.5301Z" fill={`${color}`} />
		<path d="M6.15016 10.4701C6.23016 10.6501 6.37016 10.8001 6.56016 10.8801C6.65016 10.9201 6.75016 10.9401 6.85016 10.9401H17.1602C17.5702 10.9401 17.9102 10.6001 17.9102 10.1901C17.9102 9.78009 17.5702 9.44009 17.1602 9.44009H8.66016L10.4202 7.68009C10.7102 7.39009 10.7102 6.91009 10.4202 6.62009C10.1302 6.33009 9.65016 6.33009 9.36016 6.62009L6.32016 9.65009C6.25016 9.72009 6.19016 9.81009 6.15016 9.90009C6.08016 10.0801 6.08016 10.2901 6.15016 10.4701Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M17.1494 13.8201L14.1094 16.8601" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.84961 13.8201H17.1496" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.84961 10.1799L9.88961 7.13989" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17.1496 10.1799H6.84961" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 14V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<g opacity="0.4">
			<path d="M17.1494 13.8203L14.1094 16.8603" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M6.84961 13.8203H17.1496" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M6.84961 10.1801L9.88961 7.14014" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M17.1496 10.1802H6.84961" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		</g>
	</svg>
{/if}
