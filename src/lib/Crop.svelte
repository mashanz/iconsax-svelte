<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.9 19H19V9.9C19 6 18 5 14.1 5H5V14.1C5 18 6 19 9.9 19Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 5V2" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 5H2" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 19V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 19H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 19.75H9.9C5.57 19.75 4.25 18.43 4.25 14.1V5C4.25 4.59 4.59 4.25 5 4.25H14.1C18.43 4.25 19.75 5.57 19.75 9.9V19C19.75 19.41 19.41 19.75 19 19.75ZM5.75 5.75V14.1C5.75 17.59 6.41 18.25 9.9 18.25H18.25V9.9C18.25 6.41 17.59 5.75 14.1 5.75H5.75Z" fill={`${color}`}/>
<path d="M5 5.75C4.59 5.75 4.25 5.41 4.25 5V2C4.25 1.59 4.59 1.25 5 1.25C5.41 1.25 5.75 1.59 5.75 2V5C5.75 5.41 5.41 5.75 5 5.75Z" fill={`${color}`}/>
<path d="M5 5.75H2C1.59 5.75 1.25 5.41 1.25 5C1.25 4.59 1.59 4.25 2 4.25H5C5.41 4.25 5.75 4.59 5.75 5C5.75 5.41 5.41 5.75 5 5.75Z" fill={`${color}`}/>
<path d="M19 22.75C18.59 22.75 18.25 22.41 18.25 22V19C18.25 18.59 18.59 18.25 19 18.25C19.41 18.25 19.75 18.59 19.75 19V22C19.75 22.41 19.41 22.75 19 22.75Z" fill={`${color}`}/>
<path d="M22 19.75H19C18.59 19.75 18.25 19.41 18.25 19C18.25 18.59 18.59 18.25 19 18.25H22C22.41 18.25 22.75 18.59 22.75 19C22.75 19.41 22.41 19.75 22 19.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.53 2C5.11 2 4.78 2.34 4.78 2.75V4.78H2.75C2.34 4.78 2 5.11 2 5.53C2 5.95 2.34 6.28 2.75 6.28H5.53C5.94 6.28 6.28 5.94 6.28 5.53V2.75C6.28 2.34 5.94 2 5.53 2Z" fill={`${color}`}/>
<path d="M21.2507 17.7188H18.4707C18.0607 17.7188 17.7207 18.0588 17.7207 18.4688V21.2488C17.7207 21.6588 18.0607 21.9988 18.4707 21.9988C18.8807 21.9988 19.2207 21.6588 19.2207 21.2488V19.2188H21.2507C21.6607 19.2188 22.0007 18.8787 22.0007 18.4688C22.0007 18.0588 21.6607 17.7188 21.2507 17.7188Z" fill={`${color}`}/>
<path d="M16.7201 18.4703C16.7201 17.5103 17.5101 16.7203 18.4701 16.7203H19.1601V10.0503C19.1601 7.16031 16.8201 4.82031 13.9301 4.82031H7.28008V5.51031C7.28008 6.47031 6.49008 7.26031 5.53008 7.26031H4.83008V13.9303C4.83008 16.8203 7.17008 19.1603 10.0601 19.1603H16.7301V18.4703H16.7201Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M13.9401 4.83008H6.83008C5.73008 4.83008 4.83008 5.73008 4.83008 6.83008V13.9401C4.83008 16.8301 7.17008 19.1701 10.0601 19.1701H17.1701C18.2701 19.1701 19.1701 18.2701 19.1701 17.1701V10.0601C19.1701 7.17008 16.8301 4.83008 13.9401 4.83008Z" fill={`${color}`}/>
<path d="M5.53 2C5.11 2 4.78 2.34 4.78 2.75V4.78H2.75C2.34 4.78 2 5.11 2 5.53C2 5.95 2.34 6.28 2.75 6.28H5.53C5.94 6.28 6.28 5.94 6.28 5.53V2.75C6.28 2.34 5.94 2 5.53 2Z" fill={`${color}`}/>
<path d="M21.2507 17.7202H18.4707C18.0607 17.7202 17.7207 18.0602 17.7207 18.4702V21.2502C17.7207 21.6602 18.0607 22.0002 18.4707 22.0002C18.8807 22.0002 19.2207 21.6602 19.2207 21.2502V19.2202H21.2507C21.6607 19.2202 22.0007 18.8802 22.0007 18.4702C22.0007 18.0602 21.6607 17.7202 21.2507 17.7202Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.98 5H5V14.1C5 18 6 19 9.9 19H19V9.9C19 6 18 5 14.1 5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 5V2" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 5H2" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 19V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 19H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M9.9 19H19V9.9C19 6 18 5 14.1 5H5V14.1C5 18 6 19 9.9 19Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 5V2" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 5H2" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 19V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 19H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
