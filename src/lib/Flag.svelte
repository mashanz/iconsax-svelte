<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.15002 2V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.15002 4H16.35C19.05 4 19.65 5.5 17.75 7.4L16.55 8.6C15.75 9.4 15.75 10.7 16.55 11.4L17.75 12.6C19.65 14.5 18.95 16 16.35 16H5.15002" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.15039 22.75C4.74039 22.75 4.40039 22.41 4.40039 22V2C4.40039 1.59 4.74039 1.25 5.15039 1.25C5.56039 1.25 5.90039 1.59 5.90039 2V22C5.90039 22.41 5.56039 22.75 5.15039 22.75Z" fill={`${color}`}/>
<path d="M16.3504 16.75H5.15039C4.74039 16.75 4.40039 16.41 4.40039 16C4.40039 15.59 4.74039 15.25 5.15039 15.25H16.3504C17.4404 15.25 17.9504 14.96 18.0504 14.71C18.1504 14.46 18.0004 13.9 17.2204 13.13L16.0204 11.93C15.5304 11.5 15.2304 10.85 15.2004 10.13C15.1704 9.37 15.4704 8.62 16.0204 8.07L17.2204 6.87C17.9604 6.13 18.1904 5.53 18.0804 5.27C17.9704 5.01 17.4004 4.75 16.3504 4.75H5.15039C4.73039 4.75 4.40039 4.41 4.40039 4C4.40039 3.59 4.74039 3.25 5.15039 3.25H16.3504C18.5404 3.25 19.2404 4.16 19.4704 4.7C19.6904 5.24 19.8404 6.38 18.2804 7.94L17.0804 9.14C16.8304 9.39 16.6904 9.74 16.7004 10.09C16.7104 10.39 16.8304 10.66 17.0404 10.85L18.2804 12.08C19.8104 13.61 19.6604 14.75 19.4404 15.3C19.2104 15.83 18.5004 16.75 16.3504 16.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0204 12.33L16.8004 11.11C16.5104 10.86 16.3404 10.49 16.3304 10.08C16.3104 9.63 16.4904 9.18 16.8204 8.85L18.0204 7.65C19.0604 6.61 19.4504 5.61 19.1204 4.82C18.8004 4.04 17.8104 3.61 16.3504 3.61H5.90039V2.75C5.90039 2.34 5.56039 2 5.15039 2C4.74039 2 4.40039 2.34 4.40039 2.75V21.25C4.40039 21.66 4.74039 22 5.15039 22C5.56039 22 5.90039 21.66 5.90039 21.25V16.37H16.3504C17.7904 16.37 18.7604 15.93 19.0904 15.14C19.4204 14.35 19.0404 13.36 18.0204 12.33Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.15039 22C4.74039 22 4.40039 21.66 4.40039 21.25V2.75C4.40039 2.34 4.74039 2 5.15039 2C5.56039 2 5.90039 2.34 5.90039 2.75V21.25C5.90039 21.66 5.56039 22 5.15039 22Z" fill={`${color}`}/>
<path opacity="0.4" d="M18.0195 12.3301L16.7995 11.1101C16.5095 10.8601 16.3395 10.4901 16.3295 10.0801C16.3095 9.63011 16.4895 9.18011 16.8195 8.85011L18.0195 7.65011C19.0595 6.61011 19.4495 5.61011 19.1195 4.82011C18.7995 4.04011 17.8095 3.61011 16.3495 3.61011H5.14953C4.93953 3.62011 4.76953 3.79011 4.76953 4.00011V16.0001C4.76953 16.2101 4.93953 16.3801 5.14953 16.3801H16.3495C17.7895 16.3801 18.7595 15.9401 19.0895 15.1501C19.4195 14.3501 19.0395 13.3601 18.0195 12.3301Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.15039 2V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.3504 4C19.0504 4 19.6504 5.5 17.7504 7.4L16.5504 8.6C15.7504 9.4 15.7504 10.7 16.5504 11.4L17.7504 12.6C19.6504 14.5 18.9504 16 16.3504 16H5.15039" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.15039 4H12.0004" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.15039 2V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.34" d="M5.15039 4H16.3504C19.0504 4 19.6504 5.5 17.7504 7.4L16.5504 8.6C15.7504 9.4 15.7504 10.7 16.5504 11.4L17.7504 12.6C19.6504 14.5 18.9504 16 16.3504 16H5.15039" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
