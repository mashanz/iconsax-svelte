<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9.51001L12 6.51001L15 9.51001" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6.51001V14.51" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={`${color}`}/>
<path d="M14.9995 10.26C14.8095 10.26 14.6195 10.1899 14.4695 10.0399L11.9995 7.56996L9.52945 10.0399C9.23945 10.3299 8.75945 10.3299 8.46945 10.0399C8.17945 9.74995 8.17945 9.26995 8.46945 8.97995L11.4695 5.97995C11.7595 5.68995 12.2395 5.68995 12.5295 5.97995L15.5295 8.97995C15.8195 9.26995 15.8195 9.74995 15.5295 10.0399C15.3795 10.1899 15.1895 10.26 14.9995 10.26Z" fill={`${color}`}/>
<path d="M12 15.26C11.59 15.26 11.25 14.92 11.25 14.51V6.51001C11.25 6.10001 11.59 5.76001 12 5.76001C12.41 5.76001 12.75 6.10001 12.75 6.51001V14.51C12.75 14.93 12.41 15.26 12 15.26Z" fill={`${color}`}/>
<path d="M12.0004 18.2302C9.89044 18.2302 7.77043 17.8902 5.76043 17.2202C5.37043 17.0902 5.16043 16.6602 5.29043 16.2702C5.42043 15.8802 5.85045 15.6602 6.24045 15.8002C9.96045 17.0402 14.0504 17.0402 17.7704 15.8002C18.1604 15.6702 18.5904 15.8802 18.7204 16.2702C18.8504 16.6602 18.6404 17.0902 18.2504 17.2202C16.2304 17.9002 14.1104 18.2302 12.0004 18.2302Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.47 8.98L11.47 5.98C11.54 5.91 11.62 5.86 11.71 5.82C11.89 5.74 12.1 5.74 12.28 5.82C12.37 5.86 12.45 5.91 12.52 5.98L15.52 8.98C15.81 9.27 15.81 9.75 15.52 10.04C15.37 10.19 15.18 10.26 14.99 10.26C14.8 10.26 14.61 10.19 14.46 10.04L12.74 8.32V14.51C12.74 14.92 12.4 15.26 11.99 15.26C11.58 15.26 11.24 14.92 11.24 14.51V8.32L9.52 10.04C9.23 10.33 8.75 10.33 8.46 10.04C8.17 9.75 8.18 9.28 8.47 8.98ZM18.24 17.22C16.23 17.89 14.12 18.23 12 18.23C9.88 18.23 7.77 17.89 5.76 17.22C5.37 17.09 5.16 16.66 5.29 16.27C5.42 15.88 5.85 15.66 6.24 15.8C9.96 17.04 14.05 17.04 17.77 15.8C18.16 15.67 18.59 15.88 18.72 16.27C18.84 16.67 18.63 17.09 18.24 17.22Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill={`${color}`}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 5.97968C11.7626 5.68679 12.2374 5.68679 12.5303 5.97968L15.5303 8.97968C15.8232 9.27257 15.8232 9.74745 15.5303 10.0403C15.2374 10.3332 14.7626 10.3332 14.4697 10.0403L12 7.57067L9.53033 10.0403C9.23744 10.3332 8.76256 10.3332 8.46967 10.0403C8.17678 9.74745 8.17678 9.27257 8.46967 8.97968L11.4697 5.97968Z" fill={`${color}`}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.76001C12.4142 5.76001 12.75 6.0958 12.75 6.51001V14.51C12.75 14.9242 12.4142 15.26 12 15.26C11.5858 15.26 11.25 14.9242 11.25 14.51V6.51001C11.25 6.0958 11.5858 5.76001 12 5.76001Z" fill={`${color}`}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.28887 16.2722C5.42016 15.8794 5.84507 15.6674 6.23792 15.7986C9.97364 17.0471 14.0268 17.0471 17.7625 15.7986C18.1553 15.6674 18.5802 15.8794 18.7115 16.2722C18.8428 16.6651 18.6308 17.09 18.2379 17.2213C14.1936 18.5729 9.80677 18.5729 5.76248 17.2213C5.36963 17.09 5.15759 16.6651 5.28887 16.2722Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13.05V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9.51001L12 6.51001L15 9.51001" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6.51001V14.51" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.4">
<path d="M9 9.50977L12 6.50977L15 9.50977" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6.50977V14.5098" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path opacity="0.4" d="M6 16.5098C9.89 17.8098 14.11 17.8098 18 16.5098" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
