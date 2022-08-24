<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 11H13.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 13.5V8.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z" fill={`${color}`}/>
<path d="M13.5 11.75H8.5C8.09 11.75 7.75 11.41 7.75 11C7.75 10.59 8.09 10.25 8.5 10.25H13.5C13.91 10.25 14.25 10.59 14.25 11C14.25 11.41 13.91 11.75 13.5 11.75Z" fill={`${color}`}/>
<path d="M11 14.25C10.59 14.25 10.25 13.91 10.25 13.5V8.5C10.25 8.09 10.59 7.75 11 7.75C11.41 7.75 11.75 8.09 11.75 8.5V13.5C11.75 13.91 11.41 14.25 11 14.25Z" fill={`${color}`}/>
<path d="M20.1601 22.79C20.0801 22.79 20.0001 22.78 19.9301 22.77C19.4601 22.71 18.6101 22.39 18.1301 20.96C17.8801 20.21 17.9701 19.46 18.3801 18.89C18.7901 18.32 19.4801 18 20.2701 18C21.2901 18 22.0901 18.39 22.4501 19.08C22.8101 19.77 22.7101 20.65 22.1401 21.5C21.4301 22.57 20.6601 22.79 20.1601 22.79ZM19.5601 20.49C19.7301 21.01 19.9701 21.27 20.1301 21.29C20.2901 21.31 20.5901 21.12 20.9001 20.67C21.1901 20.24 21.2101 19.93 21.1401 19.79C21.0701 19.65 20.7901 19.5 20.2701 19.5C19.9601 19.5 19.7301 19.6 19.6001 19.77C19.4801 19.94 19.4601 20.2 19.5601 20.49Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3005 21.9986C21.1205 21.9986 20.9405 21.9286 20.8105 21.7986L18.9505 19.9386C18.6805 19.6686 18.6805 19.2286 18.9505 18.9486C19.2205 18.6786 19.6605 18.6786 19.9405 18.9486L21.8005 20.8086C22.0705 21.0786 22.0705 21.5186 21.8005 21.7986C21.6605 21.9286 21.4805 21.9986 21.3005 21.9986Z" fill={`${color}`}/>
<path d="M11.5 2C6.26 2 2 6.26 2 11.5C2 16.74 6.26 21 11.5 21C16.74 21 21 16.74 21 11.5C21 6.26 16.74 2 11.5 2ZM14.2 12.45H12.45V14.2C12.45 14.61 12.11 14.95 11.7 14.95C11.29 14.95 10.95 14.61 10.95 14.2V12.45H9.2C8.79 12.45 8.45 12.11 8.45 11.7C8.45 11.29 8.79 10.95 9.2 10.95H10.95V9.2C10.95 8.79 11.29 8.45 11.7 8.45C12.11 8.45 12.45 8.79 12.45 9.2V10.95H14.2C14.61 10.95 14.95 11.29 14.95 11.7C14.95 12.11 14.61 12.45 14.2 12.45Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" fill={`${color}`}/>
<path d="M21.3005 22.0001C21.1205 22.0001 20.9405 21.9301 20.8105 21.8001L18.9505 19.9401C18.6805 19.6701 18.6805 19.2301 18.9505 18.9501C19.2205 18.6801 19.6605 18.6801 19.9405 18.9501L21.8005 20.8101C22.0705 21.0801 22.0705 21.5201 21.8005 21.8001C21.6605 21.9301 21.4805 22.0001 21.3005 22.0001Z" fill={`${color}`}/>
<path d="M14.1992 10.95H12.4492V9.19995C12.4492 8.78995 12.1092 8.44995 11.6992 8.44995C11.2892 8.44995 10.9492 8.78995 10.9492 9.19995V10.95H9.19922C8.78922 10.95 8.44922 11.29 8.44922 11.7C8.44922 12.11 8.78922 12.45 9.19922 12.45H10.9492V14.2C10.9492 14.61 11.2892 14.95 11.6992 14.95C12.1092 14.95 12.4492 14.61 12.4492 14.2V12.45H14.1992C14.6092 12.45 14.9492 12.11 14.9492 11.7C14.9492 11.29 14.6092 10.95 14.1992 10.95Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.19922 11.7H14.1992" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6992 14.2V9.19995" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5 2C16.75 2 21 6.25 21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 7.8 4.11 4.6 7.2 3.03" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22L20 20" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.4">
<path d="M8.5 11H13.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 13.5V8.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path opacity="0.4" d="M18.9304 20.6898C19.4604 22.2898 20.6704 22.4498 21.6004 21.0498C22.4504 19.7698 21.8904 18.7198 20.3504 18.7198C19.2104 18.7098 18.5704 19.5998 18.9304 20.6898Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
