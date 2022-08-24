<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 22H5C3 22 2 21 2 19V11C2 9 3 8 5 8H10V19C10 21 11 22 13 22Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 8V13" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 8V13" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17H15C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 13V17" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 22.75H5C2.58 22.75 1.25 21.42 1.25 19V11C1.25 8.58 2.58 7.25 5 7.25H10C10.41 7.25 10.75 7.59 10.75 8V19C10.75 20.58 11.42 21.25 13 21.25C13.41 21.25 13.75 21.59 13.75 22C13.75 22.41 13.41 22.75 13 22.75ZM5 8.75C3.42 8.75 2.75 9.42 2.75 11V19C2.75 20.58 3.42 21.25 5 21.25H9.79999C9.43999 20.66 9.25 19.91 9.25 19V8.75H5Z" fill={`${color}`}/>
<path d="M10 8.75H5C4.59 8.75 4.25 8.41 4.25 8V6C4.25 4.48 5.48 3.25 7 3.25H10.11C10.34 3.25 10.56 3.35998 10.7 3.53998C10.84 3.72998 10.89 3.97 10.83 4.19C10.77 4.41 10.75 4.66 10.75 5V8C10.75 8.41 10.41 8.75 10 8.75ZM5.75 7.25H9.25V5C9.25 4.91 9.25 4.83 9.25 4.75H7C6.31 4.75 5.75 5.31 5.75 6V7.25Z" fill={`${color}`}/>
<path d="M14 13.75C13.59 13.75 13.25 13.41 13.25 13V8C13.25 7.59 13.59 7.25 14 7.25C14.41 7.25 14.75 7.59 14.75 8V13C14.75 13.41 14.41 13.75 14 13.75Z" fill={`${color}`}/>
<path d="M18 13.75C17.59 13.75 17.25 13.41 17.25 13V8C17.25 7.59 17.59 7.25 18 7.25C18.41 7.25 18.75 7.59 18.75 8V13C18.75 13.41 18.41 13.75 18 13.75Z" fill={`${color}`}/>
<path d="M18 22.75H14C13.59 22.75 13.25 22.41 13.25 22V18C13.25 17.04 14.04 16.25 15 16.25H17C17.96 16.25 18.75 17.04 18.75 18V22C18.75 22.41 18.41 22.75 18 22.75ZM14.75 21.25H17.25V18C17.25 17.86 17.14 17.75 17 17.75H15C14.86 17.75 14.75 17.86 14.75 18V21.25Z" fill={`${color}`}/>
<path d="M6 17.75C5.59 17.75 5.25 17.41 5.25 17V13C5.25 12.59 5.59 12.25 6 12.25C6.41 12.25 6.75 12.59 6.75 13V17C6.75 17.41 6.41 17.75 6 17.75Z" fill={`${color}`}/>
<path d="M19 22.75H13C10.58 22.75 9.25 21.42 9.25 19V5C9.25 2.58 10.58 1.25 13 1.25H19C21.42 1.25 22.75 2.58 22.75 5V19C22.75 21.42 21.42 22.75 19 22.75ZM13 2.75C11.42 2.75 10.75 3.42 10.75 5V19C10.75 20.58 11.42 21.25 13 21.25H19C20.58 21.25 21.25 20.58 21.25 19V5C21.25 3.42 20.58 2.75 19 2.75H13Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8C3.34 8 2 9.34 2 11V19C2 20.66 3.34 22 5 22H6.5C7.6 22 8.5 21.1 8.5 20V10C8.5 8.9 7.6 8 6.5 8H5ZM6 17C6 17.41 5.66 17.75 5.25 17.75C4.84 17.75 4.5 17.41 4.5 17V13C4.5 12.59 4.84 12.25 5.25 12.25C5.66 12.25 6 12.59 6 13V17Z" fill={`${color}`}/>
<path d="M19 2H13C11.34 2 10 3.34 10 5V19C10 20.66 11.34 22 13 22H13.5C13.78 22 14 21.78 14 21.5V18C14 17.45 14.45 17 15 17H17C17.55 17 18 17.45 18 18V21.5C18 21.78 18.22 22 18.5 22H19C20.66 22 22 20.66 22 19V5C22 3.34 20.66 2 19 2ZM14.75 13C14.75 13.41 14.41 13.75 14 13.75C13.59 13.75 13.25 13.41 13.25 13V8C13.25 7.59 13.59 7.25 14 7.25C14.41 7.25 14.75 7.59 14.75 8V13ZM18.75 13C18.75 13.41 18.41 13.75 18 13.75C17.59 13.75 17.25 13.41 17.25 13V8C17.25 7.59 17.59 7.25 18 7.25C18.41 7.25 18.75 7.59 18.75 8V13Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z" fill={`${color}`}/>
<path d="M10 19V8H5C3 8 2 9 2 11V19C2 21 3 22 5 22H13C11 22 10 21 10 19ZM6.75 17C6.75 17.41 6.41 17.75 6 17.75C5.59 17.75 5.25 17.41 5.25 17V13C5.25 12.59 5.59 12.25 6 12.25C6.41 12.25 6.75 12.59 6.75 13V17Z" fill={`${color}`}/>
<path opacity="0.4" d="M14 22H13C11 22 10 21 10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H18" fill={`${color}`}/>
<path d="M18 18V22H14V18C14 17.45 14.45 17 15 17H17C17.55 17 18 17.45 18 18Z" fill={`${color}`}/>
<path d="M14 13.75C13.59 13.75 13.25 13.41 13.25 13V8C13.25 7.59 13.59 7.25 14 7.25C14.41 7.25 14.75 7.59 14.75 8V13C14.75 13.41 14.41 13.75 14 13.75Z" fill={`${color}`}/>
<path d="M18 13.75C17.59 13.75 17.25 13.41 17.25 13V8C17.25 7.59 17.59 7.25 18 7.25C18.41 7.25 18.75 7.59 18.75 8V13C18.75 13.41 18.41 13.75 18 13.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 11C2 9 3 8 5 8H10V19C10 21 11 22 13 22H5C3 22 2 21 2 19V15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 8V13" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 8V13" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17H15C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 13V17" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 22H5C3 22 2 21 2 19V11C2 9 3 8 5 8H10V19C10 21 11 22 13 22Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M14 8V13" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M18 8V13" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 17H15C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M6 13V17" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
