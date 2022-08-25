<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1 22H23" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19.78 22.0101V17.55" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19.8001 10.8901C18.5801 10.8901 17.6001 11.8701 17.6001 13.0901V15.3601C17.6001 16.5801 18.5801 17.5601 19.8001 17.5601C21.0201 17.5601 22.0001 16.5801 22.0001 15.3601V13.0901C22.0001 11.8701 21.0201 10.8901 19.8001 10.8901Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2.1001 22V6.03003C2.1001 4.02003 3.10015 3.01001 5.09015 3.01001H11.3201C13.3101 3.01001 14.3001 4.02003 14.3001 6.03003V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M5.80005 8.25H10.7501" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M5.80005 12H10.7501" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8.25 22V18.25" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M23 22.75H1C0.59 22.75 0.25 22.41 0.25 22C0.25 21.59 0.59 21.25 1 21.25H23C23.41 21.25 23.75 21.59 23.75 22C23.75 22.41 23.41 22.75 23 22.75Z" fill={`${color}`} />
		<path d="M19.7803 22.7598C19.3703 22.7598 19.0303 22.4198 19.0303 22.0098V17.5498C19.0303 17.1398 19.3703 16.7998 19.7803 16.7998C20.1903 16.7998 20.5303 17.1398 20.5303 17.5498V22.0098C20.5303 22.4198 20.2003 22.7598 19.7803 22.7598Z" fill={`${color}`} />
		<path d="M19.7996 18.2999C18.1696 18.2999 16.8496 16.9799 16.8496 15.3499V13.0799C16.8496 11.4499 18.1696 10.1299 19.7996 10.1299C21.4296 10.1299 22.7496 11.4499 22.7496 13.0799V15.3499C22.7496 16.9799 21.4296 18.2999 19.7996 18.2999ZM19.7996 11.6399C18.9996 11.6399 18.3496 12.2899 18.3496 13.0899V15.3599C18.3496 16.1599 18.9996 16.8099 19.7996 16.8099C20.5996 16.8099 21.2496 16.1599 21.2496 15.3599V13.0899C21.2496 12.2899 20.5996 11.6399 19.7996 11.6399Z" fill={`${color}`} />
		<path d="M14.2998 22.7498C13.8898 22.7498 13.5498 22.4098 13.5498 21.9998V6.02979C13.5498 4.43979 12.8798 3.75977 11.3198 3.75977H5.08984C3.51984 3.75977 2.83984 4.43979 2.83984 6.02979V21.9998C2.83984 22.4098 2.49984 22.7498 2.08984 22.7498C1.67984 22.7498 1.33984 22.4098 1.33984 21.9998V6.02979C1.33984 3.59979 2.66984 2.25977 5.08984 2.25977H11.3198C13.7298 2.25977 15.0498 3.59979 15.0498 6.02979V21.9998C15.0498 22.4098 14.7098 22.7498 14.2998 22.7498Z" fill={`${color}`} />
		<path d="M10.7498 9H5.7998C5.3898 9 5.0498 8.66 5.0498 8.25C5.0498 7.84 5.3898 7.5 5.7998 7.5H10.7498C11.1598 7.5 11.4998 7.84 11.4998 8.25C11.4998 8.66 11.1598 9 10.7498 9Z" fill={`${color}`} />
		<path d="M10.7498 12.75H5.7998C5.3898 12.75 5.0498 12.41 5.0498 12C5.0498 11.59 5.3898 11.25 5.7998 11.25H10.7498C11.1598 11.25 11.4998 11.59 11.4998 12C11.4998 12.41 11.1598 12.75 10.7498 12.75Z" fill={`${color}`} />
		<path d="M8.25 22.75C7.84 22.75 7.5 22.41 7.5 22V18.25C7.5 17.84 7.84 17.5 8.25 17.5C8.66 17.5 9 17.84 9 18.25V22C9 22.41 8.66 22.75 8.25 22.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M11.3196 3H5.08961C3.09961 3 2.09961 4.01 2.09961 6.02V22H7.49961V18.25C7.49961 17.84 7.83961 17.5 8.24961 17.5C8.65961 17.5 8.99961 17.83 8.99961 18.25V22H14.2996V6.02C14.2996 4.01 13.3096 3 11.3196 3ZM10.7496 12.75H5.79961C5.38961 12.75 5.04961 12.41 5.04961 12C5.04961 11.59 5.38961 11.25 5.79961 11.25H10.7496C11.1596 11.25 11.4996 11.59 11.4996 12C11.4996 12.41 11.1596 12.75 10.7496 12.75ZM10.7496 9H5.79961C5.38961 9 5.04961 8.66 5.04961 8.25C5.04961 7.84 5.38961 7.5 5.79961 7.5H10.7496C11.1596 7.5 11.4996 7.84 11.4996 8.25C11.4996 8.66 11.1596 9 10.7496 9Z" fill={`${color}`} />
		<path d="M23 21.2511H20.73V18.2511C21.68 17.9411 22.37 17.0511 22.37 16.0011V14.0011C22.37 12.6911 21.3 11.6211 19.99 11.6211C18.68 11.6211 17.61 12.6911 17.61 14.0011V16.0011C17.61 17.0411 18.29 17.9211 19.22 18.2411V21.2511H1C0.59 21.2511 0.25 21.5911 0.25 22.0011C0.25 22.4111 0.59 22.7511 1 22.7511H19.93C19.95 22.7511 19.96 22.7611 19.98 22.7611C20 22.7611 20.01 22.7511 20.03 22.7511H23C23.41 22.7511 23.75 22.4111 23.75 22.0011C23.75 21.5911 23.41 21.2511 23 21.2511Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M2.09961 21.9998V6.02979C2.09961 4.01979 3.09966 3.00977 5.08966 3.00977H11.3196C13.3096 3.00977 14.2996 4.01979 14.2996 6.02979V21.9998" fill={`${color}`} />
		<path d="M10.7508 9H5.80078C5.39078 9 5.05078 8.66 5.05078 8.25C5.05078 7.84 5.39078 7.5 5.80078 7.5H10.7508C11.1608 7.5 11.5008 7.84 11.5008 8.25C11.5008 8.66 11.1608 9 10.7508 9Z" fill={`${color}`} />
		<path d="M10.7508 12.75H5.80078C5.39078 12.75 5.05078 12.41 5.05078 12C5.05078 11.59 5.39078 11.25 5.80078 11.25H10.7508C11.1608 11.25 11.5008 11.59 11.5008 12C11.5008 12.41 11.1608 12.75 10.7508 12.75Z" fill={`${color}`} />
		<path d="M8.25 22.75C7.84 22.75 7.5 22.41 7.5 22V18.25C7.5 17.84 7.84 17.5 8.25 17.5C8.66 17.5 9 17.84 9 18.25V22C9 22.41 8.66 22.75 8.25 22.75Z" fill={`${color}`} />
		<path d="M23 21.2501H20.73V18.2501C21.68 17.9401 22.37 17.0501 22.37 16.0001V14.0001C22.37 12.6901 21.3 11.6201 19.99 11.6201C18.68 11.6201 17.61 12.6901 17.61 14.0001V16.0001C17.61 17.0401 18.29 17.9201 19.22 18.2401V21.2501H1C0.59 21.2501 0.25 21.5901 0.25 22.0001C0.25 22.4101 0.59 22.7501 1 22.7501H19.93C19.95 22.7501 19.96 22.7601 19.98 22.7601C20 22.7601 20.01 22.7501 20.03 22.7501H23C23.41 22.7501 23.75 22.4101 23.75 22.0001C23.75 21.5901 23.41 21.2501 23 21.2501Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1 22H23" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19.7793 22.0101V17.55" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19.7996 10.8901C18.5796 10.8901 17.5996 11.8701 17.5996 13.0901V15.3601C17.5996 16.5801 18.5796 17.5601 19.7996 17.5601C21.0196 17.5601 21.9996 16.5801 21.9996 15.3601V13.0901C21.9996 11.8701 21.0196 10.8901 19.7996 10.8901Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2.09961 6.02002C2.09961 4.01002 3.09966 3 5.08966 3H11.3196C13.3096 3 14.2996 4.01002 14.2996 6.02002V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2.09961 22V10.01" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M5.80078 8.25H10.7508" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M5.80078 12H10.7508" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8.25 22V18.25" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1 22H23" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M19.7803 22.0098V17.5498" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19.7996 10.8901C18.5796 10.8901 17.5996 11.8701 17.5996 13.0901V15.3601C17.5996 16.5801 18.5796 17.5601 19.7996 17.5601C21.0196 17.5601 21.9996 16.5801 21.9996 15.3601V13.0901C21.9996 11.8701 21.0196 10.8901 19.7996 10.8901Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2.09961 21.9998V6.02979C2.09961 4.01979 3.09966 3.00977 5.08966 3.00977H11.3196C13.3096 3.00977 14.2996 4.01979 14.2996 6.02979V21.9998" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M5.7998 8.25H10.7498" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M5.7998 12H10.7498" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M8.25 22V18.25" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
