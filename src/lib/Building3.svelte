<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 22H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.01 21.9898L3.01001 22.0099L3 7.06986C3 6.39986 3.34001 5.77983 3.89001 5.40983L7.89001 2.73984C8.56001 2.28984 9.43999 2.28984 10.11 2.73984L14.11 5.40983C14.67 5.77983 15 6.39986 15 7.06986L15.01 21.9898Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.98 22.01V18" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 12C18.9 12 18 12.9 18 14V16C18 17.1 18.9 18 20 18C21.1 18 22 17.1 22 16V14C22 12.9 21.1 12 20 12Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 14H15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 22V18.25" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z" fill={`${color}`}/>
<path d="M3.01001 22.7603C2.81001 22.7603 2.61998 22.6803 2.47998 22.5403C2.33998 22.4003 2.26001 22.2103 2.26001 22.0103L2.25 7.07029C2.25 6.16029 2.70997 5.30026 3.46997 4.79026L7.46997 2.12027C8.39997 1.50027 9.60002 1.50027 10.52 2.12027L14.52 4.79026C15.29 5.30026 15.74 6.15029 15.74 7.07029L15.75 21.9903C15.75 22.4003 15.42 22.7403 15 22.7403L3.01001 22.7603ZM9 3.1503C8.76 3.1503 8.52 3.22026 8.31 3.36026L4.31 6.03031C3.96 6.26031 3.75 6.65029 3.75 7.07029L3.76001 21.2603L14.26 21.2403L14.25 7.07029C14.25 6.65029 14.04 6.26026 13.7 6.04026L9.70001 3.37027C9.49001 3.22027 9.24 3.1503 9 3.1503Z" fill={`${color}`}/>
<path d="M19.9805 22.76C19.5705 22.76 19.2305 22.42 19.2305 22.01V18C19.2305 17.59 19.5705 17.25 19.9805 17.25C20.3905 17.25 20.7305 17.59 20.7305 18V22.01C20.7305 22.42 20.4005 22.76 19.9805 22.76Z" fill={`${color}`}/>
<path d="M20 18.75C18.48 18.75 17.25 17.52 17.25 16V14C17.25 12.48 18.48 11.25 20 11.25C21.52 11.25 22.75 12.48 22.75 14V16C22.75 17.52 21.52 18.75 20 18.75ZM20 12.75C19.31 12.75 18.75 13.31 18.75 14V16C18.75 16.69 19.31 17.25 20 17.25C20.69 17.25 21.25 16.69 21.25 16V14C21.25 13.31 20.69 12.75 20 12.75Z" fill={`${color}`}/>
<path d="M15 14.75H3C2.59 14.75 2.25 14.41 2.25 14C2.25 13.59 2.59 13.25 3 13.25H15C15.41 13.25 15.75 13.59 15.75 14C15.75 14.41 15.41 14.75 15 14.75Z" fill={`${color}`}/>
<path d="M9 22.75C8.59 22.75 8.25 22.41 8.25 22V18.25C8.25 17.84 8.59 17.5 9 17.5C9.41 17.5 9.75 17.84 9.75 18.25V22C9.75 22.41 9.41 22.75 9 22.75Z" fill={`${color}`}/>
<path d="M9 11.25C7.76 11.25 6.75 10.24 6.75 9C6.75 7.76 7.76 6.75 9 6.75C10.24 6.75 11.25 7.76 11.25 9C11.25 10.24 10.24 11.25 9 11.25ZM9 8.25C8.59 8.25 8.25 8.59 8.25 9C8.25 9.41 8.59 9.75 9 9.75C9.41 9.75 9.75 9.41 9.75 9C9.75 8.59 9.41 8.25 9 8.25Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 7.06984C15 6.39984 14.67 5.77984 14.11 5.40984L10.11 2.73984C9.44 2.28984 8.56 2.28984 7.89 2.73984L3.89 5.40984C3.34 5.77984 3 6.39984 3 7.06984V12.7498C3 13.0298 3.22 13.2498 3.5 13.2498H14.5C14.78 13.2498 15 13.0298 15 12.7498V7.06984ZM9 10.7498C8.04 10.7498 7.25 9.95984 7.25 8.99984C7.25 8.03984 8.04 7.24984 9 7.24984C9.96 7.24984 10.75 8.03984 10.75 8.99984C10.75 9.95984 9.96 10.7498 9 10.7498Z" fill={`${color}`}/>
<path d="M22 21.2511H20.73V18.2511C21.68 17.9411 22.37 17.0511 22.37 16.0011V14.0011C22.37 12.6911 21.3 11.6211 19.99 11.6211C18.68 11.6211 17.61 12.6911 17.61 14.0011V16.0011C17.61 17.0411 18.29 17.9211 19.22 18.2411V21.2511H15V15.2511C15 14.9711 14.78 14.7511 14.5 14.7511H3.5C3.22 14.7511 3 14.9711 3 15.2511V21.2511H2C1.59 21.2511 1.25 21.5911 1.25 22.0011C1.25 22.4111 1.59 22.7511 2 22.7511H19.93C19.95 22.7511 19.96 22.7611 19.98 22.7611C20 22.7611 20.01 22.7511 20.03 22.7511H22C22.41 22.7511 22.75 22.4111 22.75 22.0011C22.75 21.5911 22.41 21.2511 22 21.2511ZM8.25 18.2511C8.25 17.8411 8.59 17.5011 9 17.5011C9.41 17.5011 9.75 17.8411 9.75 18.2511V21.2511H8.25V18.2511Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M15.01 14.7499V21.9898L3.01001 22.0099V14.7499L3 13.2499V7.06986C3 6.39986 3.34001 5.77983 3.89001 5.40983L7.89001 2.73984C8.56001 2.28984 9.43999 2.28984 10.11 2.73984L14.11 5.40983C14.67 5.77983 15 6.39986 15 7.06986V13.2499L15.01 14.7499Z" fill={`${color}`}/>
<path d="M22 21.2501H20.73V18.2501C21.68 17.9401 22.37 17.0501 22.37 16.0001V14.0001C22.37 12.6901 21.3 11.6201 19.99 11.6201C18.68 11.6201 17.61 12.6901 17.61 14.0001V16.0001C17.61 17.0401 18.29 17.9201 19.22 18.2401V21.2501H2C1.59 21.2501 1.25 21.5901 1.25 22.0001C1.25 22.4101 1.59 22.7501 2 22.7501H19.93C19.95 22.7501 19.96 22.7601 19.98 22.7601C20 22.7601 20.01 22.7501 20.03 22.7501H22C22.41 22.7501 22.75 22.4101 22.75 22.0001C22.75 21.5901 22.41 21.2501 22 21.2501Z" fill={`${color}`}/>
<path d="M15.01 14.75H3.01001L3 13.25H15L15.01 14.75Z" fill={`${color}`}/>
<path d="M9 22.75C8.59 22.75 8.25 22.41 8.25 22V18.25C8.25 17.84 8.59 17.5 9 17.5C9.41 17.5 9.75 17.84 9.75 18.25V22C9.75 22.41 9.41 22.75 9 22.75Z" fill={`${color}`}/>
<path d="M9 10.75C9.9665 10.75 10.75 9.9665 10.75 9C10.75 8.0335 9.9665 7.25 9 7.25C8.0335 7.25 7.25 8.0335 7.25 9C7.25 9.9665 8.0335 10.75 9 10.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 22H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 8.99985V7.06986C3 6.39986 3.34001 5.77983 3.89001 5.40983L7.89001 2.73984C8.56001 2.28984 9.43999 2.28984 10.11 2.73984L14.11 5.40983C14.67 5.77983 15 6.39986 15 7.06986L15.01 21.9898L3.01001 22.0099L3 12.9198" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.9805 22.01V18" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 12C18.9 12 18 12.9 18 14V16C18 17.1 18.9 18 20 18C21.1 18 22 17.1 22 16V14C22 12.9 21.1 12 20 12Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 14H15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 22V18.25" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 22H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.01 21.9898L3.01001 22.0099L3 7.06986C3 6.39986 3.34001 5.77983 3.89001 5.40983L7.89001 2.73984C8.56001 2.28984 9.43999 2.28984 10.11 2.73984L14.11 5.40983C14.67 5.77983 15 6.39986 15 7.06986L15.01 21.9898Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M19.9805 22.01V18" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 12C18.9 12 18 12.9 18 14V16C18 17.1 18.9 18 20 18C21.1 18 22 17.1 22 16V14C22 12.9 21.1 12 20 12Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 14H15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M9 22V18.25" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
