<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.11 11.1501H7.46005C6.83005 11.1501 6.32007 11.6601 6.32007 12.2901V17.4101H10.11V11.1501V11.1501Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12.7613 6.6001H11.2413C10.6113 6.6001 10.1013 7.11011 10.1013 7.74011V17.4001H13.8913V7.74011C13.8913 7.11011 13.3913 6.6001 12.7613 6.6001Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16.5482 12.8501H13.8982V17.4001H17.6882V13.9901C17.6782 13.3601 17.1682 12.8501 16.5482 12.8501Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.1103 18.1501H6.32031C5.91031 18.1501 5.57031 17.8101 5.57031 17.4001V12.2802C5.57031 11.2402 6.4203 10.3901 7.4603 10.3901H10.1103C10.5203 10.3901 10.8603 10.7301 10.8603 11.1401V17.3901C10.8603 17.8101 10.5203 18.1501 10.1103 18.1501ZM7.07031 16.6501H9.36029V11.9001H7.4603C7.2503 11.9001 7.07031 12.0701 7.07031 12.2901V16.6501Z" fill={`${color}`} />
		<path d="M13.8896 18.1501H10.0996C9.68961 18.1501 9.34961 17.8101 9.34961 17.4001V7.74011C9.34961 6.70011 10.1996 5.8501 11.2396 5.8501H12.7596C13.7996 5.8501 14.6496 6.70011 14.6496 7.74011V17.4001C14.6396 17.8101 14.3096 18.1501 13.8896 18.1501ZM10.8596 16.6501H13.1496V7.74011C13.1496 7.53011 12.9796 7.3501 12.7596 7.3501H11.2396C11.0296 7.3501 10.8496 7.52011 10.8496 7.74011V16.6501H10.8596Z" fill={`${color}`} />
		<path d="M17.6806 18.1501H13.8906C13.4806 18.1501 13.1406 17.8101 13.1406 17.4001V12.8501C13.1406 12.4401 13.4806 12.1001 13.8906 12.1001H16.5406C17.5806 12.1001 18.4306 12.9501 18.4306 13.9901V17.4001C18.4306 17.8101 18.1006 18.1501 17.6806 18.1501ZM14.6406 16.6501H16.9306V13.9901C16.9306 13.7801 16.7606 13.6001 16.5406 13.6001H14.6406V16.6501Z" fill={`${color}`} />
		<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.11 16.9C9.11 17.18 8.89 17.4 8.61 17.4H5.82C5.54 17.4 5.32 17.18 5.32 16.9V12.28C5.32 11.65 5.83 11.14 6.46 11.14H8.61C8.89 11.14 9.11 11.36 9.11 11.64V16.9ZM13.89 16.9C13.89 17.18 13.67 17.4 13.39 17.4H10.6C10.32 17.4 10.1 17.18 10.1 16.9V7.74C10.1 7.11 10.61 6.6 11.24 6.6H12.76C13.39 6.6 13.9 7.11 13.9 7.74V16.9H13.89ZM18.68 16.9C18.68 17.18 18.46 17.4 18.18 17.4H15.39C15.11 17.4 14.89 17.18 14.89 16.9V13.35C14.89 13.07 15.11 12.85 15.39 12.85H17.54C18.17 12.85 18.68 13.36 18.68 13.99V16.9Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill={`${color}`} />
		<path d="M10.1103 11.1504H7.4603C6.8303 11.1504 6.32031 11.6603 6.32031 12.2903V17.4103H10.1103V11.1504Z" fill={`${color}`} />
		<path opacity="0.4" d="M12.7596 6.6001H11.2396C10.6096 6.6001 10.0996 7.11011 10.0996 7.74011V17.4001H13.8896V7.74011C13.8896 7.11011 13.3896 6.6001 12.7596 6.6001Z" fill={`${color}`} />
		<path d="M16.5504 12.8501H13.9004V17.4001H17.6904V13.9901C17.6804 13.3601 17.1704 12.8501 16.5504 12.8501Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 12.83V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10.1103 11.1501H7.4603C6.8303 11.1501 6.32031 11.6601 6.32031 12.2901V17.4101H10.1103V11.1501V11.1501Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12.7596 6.6001H11.2396C10.6096 6.6001 10.0996 7.11011 10.0996 7.74011V17.4001H13.8896V7.74011C13.8896 7.11011 13.3896 6.6001 12.7596 6.6001Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16.5504 12.8501H13.9004V17.4001H17.6904V13.9901C17.6804 13.3601 17.1704 12.8501 16.5504 12.8501Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g opacity="0.4">
			<path d="M10.1103 11.1504H7.4603C6.8303 11.1504 6.32031 11.6603 6.32031 12.2903V17.4103H10.1103V11.1504V11.1504Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M12.7616 6.6001H11.2415C10.6115 6.6001 10.1016 7.11011 10.1016 7.74011V17.4001H13.8916V7.74011C13.8916 7.11011 13.3916 6.6001 12.7616 6.6001Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M16.5504 12.8501H13.9004V17.4001H17.6904V13.9901C17.6804 13.3601 17.1704 12.8501 16.5504 12.8501Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		</g>
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
