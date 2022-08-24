<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16V19" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 21H14" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 21H6" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 8.30005V12.5C19 15.3 18.3 16 15.5 16H8.5C5.7 16 5 15.3 5 12.5V5.5C5 2.7 5.7 2 8.5 2H9.54999C10.6 2 10.83 2.30997 11.23 2.83997L12.28 4.23999C12.55 4.58999 12.7 4.80005 13.4 4.80005H15.5C18.3 4.80005 19 5.50005 19 8.30005Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19.75C11.59 19.75 11.25 19.41 11.25 19V16C11.25 15.59 11.59 15.25 12 15.25C12.41 15.25 12.75 15.59 12.75 16V19C12.75 19.41 12.41 19.75 12 19.75Z" fill={`${color}`}/>
<path d="M12 23.75C10.48 23.75 9.25 22.52 9.25 21C9.25 19.48 10.48 18.25 12 18.25C13.52 18.25 14.75 19.48 14.75 21C14.75 22.52 13.52 23.75 12 23.75ZM12 19.75C11.31 19.75 10.75 20.31 10.75 21C10.75 21.69 11.31 22.25 12 22.25C12.69 22.25 13.25 21.69 13.25 21C13.25 20.31 12.69 19.75 12 19.75Z" fill={`${color}`}/>
<path d="M18 21.75H14C13.59 21.75 13.25 21.41 13.25 21C13.25 20.59 13.59 20.25 14 20.25H18C18.41 20.25 18.75 20.59 18.75 21C18.75 21.41 18.41 21.75 18 21.75Z" fill={`${color}`}/>
<path d="M10 21.75H6C5.59 21.75 5.25 21.41 5.25 21C5.25 20.59 5.59 20.25 6 20.25H10C10.41 20.25 10.75 20.59 10.75 21C10.75 21.41 10.41 21.75 10 21.75Z" fill={`${color}`}/>
<path d="M15.5 16.75H8.5C5.28 16.75 4.25 15.72 4.25 12.5V5.5C4.25 2.28 5.28 1.25 8.5 1.25H9.54999C10.88 1.25 11.31 1.70001 11.83 2.39001L12.88 3.79004C13.08 4.05004 13.08 4.05005 13.4 4.05005H15.5C18.72 4.05005 19.75 5.08005 19.75 8.30005V12.5C19.75 15.72 18.72 16.75 15.5 16.75ZM8.5 2.75C6.11 2.75 5.75 3.11 5.75 5.5V12.5C5.75 14.89 6.11 15.25 8.5 15.25H15.5C17.89 15.25 18.25 14.89 18.25 12.5V8.30005C18.25 5.91005 17.89 5.55005 15.5 5.55005H13.4C12.41 5.55005 12.05 5.17995 11.69 4.69995L10.63 3.29004C10.28 2.82004 10.23 2.75 9.54999 2.75H8.5Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.75 16H15.5C18.3 16 19 15.3 19 12.5V8.3C19 5.5 18.3 4.8 15.5 4.8H13.4C12.7 4.8 12.55 4.59 12.28 4.24L11.23 2.84C10.83 2.31 10.6 2 9.55 2H8.5C5.7 2 5 2.7 5 5.5V12.5C5 15.3 5.7 16 8.5 16H11.25V19C11.25 19.05 11.27 19.09 11.28 19.14C10.76 19.34 10.34 19.76 10.14 20.28C10.09 20.27 10.05 20.25 10 20.25H6C5.59 20.25 5.25 20.59 5.25 21C5.25 21.41 5.59 21.75 6 21.75H10C10.05 21.75 10.09 21.73 10.14 21.72C10.43 22.47 11.15 23 12 23C12.85 23 13.57 22.47 13.86 21.72C13.91 21.73 13.95 21.75 14 21.75H18C18.41 21.75 18.75 21.41 18.75 21C18.75 20.59 18.41 20.25 18 20.25H14C13.95 20.25 13.91 20.27 13.86 20.28C13.66 19.76 13.24 19.34 12.72 19.14C12.73 19.09 12.75 19.05 12.75 19V16Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M18.75 21C18.75 21.41 18.41 21.75 18 21.75H14C13.95 21.75 13.91 21.73 13.86 21.72C13.57 22.47 12.85 23 12 23C11.15 23 10.43 22.47 10.14 21.72C10.09 21.73 10.05 21.75 10 21.75H6C5.59 21.75 5.25 21.41 5.25 21C5.25 20.59 5.59 20.25 6 20.25H10C10.05 20.25 10.09 20.27 10.14 20.28C10.34 19.76 10.76 19.34 11.28 19.14C11.27 19.09 11.25 19.05 11.25 19V16H12.75V19C12.75 19.05 12.73 19.09 12.72 19.14C13.24 19.34 13.66 19.76 13.86 20.28C13.91 20.27 13.95 20.25 14 20.25H18C18.41 20.25 18.75 20.59 18.75 21Z" fill={`${color}`}/>
<path d="M19 8.29999V12.5C19 15.3 18.3 16 15.5 16H8.5C5.7 16 5 15.3 5 12.5V5.5C5 2.7 5.7 2 8.5 2H9.54999C10.6 2 10.83 2.31003 11.23 2.84003L12.28 4.23999C12.55 4.58999 12.7 4.79999 13.4 4.79999H15.5C18.3 4.79999 19 5.49999 19 8.29999Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16V19" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 21C10 19.9 10.9 19 12 19C13.1 19 14 19.9 14 21C14 22.1 13.1 23 12 23" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 21H14" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 21H6" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 5.5C5 2.7 5.7 2 8.5 2H9.54999C10.6 2 10.83 2.30997 11.23 2.83997L12.28 4.23999C12.55 4.58999 12.7 4.80005 13.4 4.80005H15.5C18.3 4.80005 19 5.50005 19 8.30005V12.5C19 15.3 18.3 16 15.5 16H8.5C5.7 16 5 15.3 5 12.5V9.33997" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 16V19" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M18 21H14" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M10 21H6" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 8.30005V12.5C19 15.3 18.3 16 15.5 16H8.5C5.7 16 5 15.3 5 12.5V5.5C5 2.7 5.7 2 8.5 2H9.54999C10.6 2 10.83 2.30997 11.23 2.83997L12.28 4.23999C12.55 4.58999 12.7 4.80005 13.4 4.80005H15.5C18.3 4.80005 19 5.50005 19 8.30005Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10"/>
</svg>

{/if}
