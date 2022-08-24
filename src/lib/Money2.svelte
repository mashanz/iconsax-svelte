<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 9H3C6 9 7 8 7 5V4" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 9H21C18 9 17 8 17 5V4" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 15H3C6 15 7 16 7 19V20" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 15H21C18 15 17 16 17 19V20" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z" fill={`${color}`}/>
<path d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z" fill={`${color}`}/>
<path d="M3 9.75H2C1.59 9.75 1.25 9.41 1.25 9C1.25 8.59 1.59 8.25 2 8.25H3C5.58 8.25 6.25 7.58 6.25 5V4C6.25 3.59 6.59 3.25 7 3.25C7.41 3.25 7.75 3.59 7.75 4V5C7.75 8.42 6.42 9.75 3 9.75Z" fill={`${color}`}/>
<path d="M22 9.75H21C17.58 9.75 16.25 8.42 16.25 5V4C16.25 3.59 16.59 3.25 17 3.25C17.41 3.25 17.75 3.59 17.75 4V5C17.75 7.58 18.42 8.25 21 8.25H22C22.41 8.25 22.75 8.59 22.75 9C22.75 9.41 22.41 9.75 22 9.75Z" fill={`${color}`}/>
<path d="M7 20.75C6.59 20.75 6.25 20.41 6.25 20V19C6.25 16.42 5.58 15.75 3 15.75H2C1.59 15.75 1.25 15.41 1.25 15C1.25 14.59 1.59 14.25 2 14.25H3C6.42 14.25 7.75 15.58 7.75 19V20C7.75 20.41 7.41 20.75 7 20.75Z" fill={`${color}`}/>
<path d="M17 20.75C16.59 20.75 16.25 20.41 16.25 20V19C16.25 15.58 17.58 14.25 21 14.25H22C22.41 14.25 22.75 14.59 22.75 15C22.75 15.41 22.41 15.75 22 15.75H21C18.42 15.75 17.75 16.42 17.75 19V20C17.75 20.41 17.41 20.75 17 20.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill={`${color}`}/>
<path d="M17 3.5H7C4 3.5 2 5 2 8.5V9V15V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V15V9V8.5C22 5 20 3.5 17 3.5ZM7 19C7 16.18 6.09 15.14 3.5 15.02V15V9V8.98C6.09 8.86 7 7.82 7 5H17C17 7.82 17.91 8.86 20.5 8.98V9V15V15.02C17.91 15.14 17 16.18 17 19H7Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M22 9V15H21C18 15 17 16 17 19V20.5H7V19C7 16 6 15 3 15H2V9H3C6 9 7 8 7 5V3.5H17V5C17 8 18 9 21 9H22Z" fill={`${color}`}/>
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill={`${color}`}/>
<path d="M7 3.5V5C7 8 6 9 3 9H2V8.5C2 5 4 3.5 7 3.5Z" fill={`${color}`}/>
<path d="M22 8.5V9H21C18 9 17 8 17 5V3.5C20 3.5 22 5 22 8.5Z" fill={`${color}`}/>
<path d="M7 19V20.5C4 20.5 2 19 2 15.5V15H3C6 15 7 16 7 19Z" fill={`${color}`}/>
<path d="M22 15V15.5C22 19 20 20.5 17 20.5V19C17 16 18 15 21 15H22Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12.53V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5H7C4 3.5 2 5 2 8.5V9H3C6 9 7 8 7 5V4" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 9H21C18 9 17 8 17 5V4" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 15H3C6 15 7 16 7 19V20" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 15H21C18 15 17 16 17 19V20" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M2 9H3C6 9 7 8 7 5V4" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M22 9H21C18 9 17 8 17 5V4" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M2 15H3C6 15 7 16 7 19V20" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M22 15H21C18 15 17 16 17 19V20" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
