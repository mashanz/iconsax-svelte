<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 19H15.5C17.83 19 19 17.83 19 15.5V8.5C19 6.17 17.83 5 15.5 5H8.5C6.17 5 5 6.17 5 8.5V15.5C5 17.83 6.17 19 8.5 19Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 2H8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 22H8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5 9.5V12.5H14.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 19.75H8.5C5.76 19.75 4.25 18.24 4.25 15.5V8.5C4.25 5.76 5.76 4.25 8.5 4.25H15.5C18.24 4.25 19.75 5.76 19.75 8.5V15.5C19.75 18.24 18.24 19.75 15.5 19.75ZM8.5 5.75C6.57 5.75 5.75 6.57 5.75 8.5V15.5C5.75 17.43 6.57 18.25 8.5 18.25H15.5C17.43 18.25 18.25 17.43 18.25 15.5V8.5C18.25 6.57 17.43 5.75 15.5 5.75H8.5Z" fill={`${color}`}/>
<path d="M16 2.75H8C7.59 2.75 7.25 2.41 7.25 2C7.25 1.59 7.59 1.25 8 1.25H16C16.41 1.25 16.75 1.59 16.75 2C16.75 2.41 16.41 2.75 16 2.75Z" fill={`${color}`}/>
<path d="M16 22.75H8C7.59 22.75 7.25 22.41 7.25 22C7.25 21.59 7.59 21.25 8 21.25H16C16.41 21.25 16.75 21.59 16.75 22C16.75 22.41 16.41 22.75 16 22.75Z" fill={`${color}`}/>
<path d="M14.5 13.25H11.5C11.09 13.25 10.75 12.91 10.75 12.5V9.5C10.75 9.09 11.09 8.75 11.5 8.75C11.91 8.75 12.25 9.09 12.25 9.5V11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3.75H8C7.59 3.75 7.25 3.41 7.25 3C7.25 2.59 7.59 2.25 8 2.25H16C16.41 2.25 16.75 2.59 16.75 3C16.75 3.41 16.41 3.75 16 3.75Z" fill={`${color}`}/>
<path d="M16 21.75H8C7.59 21.75 7.25 21.41 7.25 21C7.25 20.59 7.59 20.25 8 20.25H16C16.41 20.25 16.75 20.59 16.75 21C16.75 21.41 16.41 21.75 16 21.75Z" fill={`${color}`}/>
<path d="M15.5 5H8.5C6.17 5 5 6.17 5 8.5V15.5C5 17.83 6.17 19 8.5 19H15.5C17.83 19 19 17.83 19 15.5V8.5C19 6.17 17.83 5 15.5 5ZM14.5 13.25H11.5C11.09 13.25 10.75 12.91 10.75 12.5V9.5C10.75 9.09 11.09 8.75 11.5 8.75C11.91 8.75 12.25 9.09 12.25 9.5V11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M8.5 19H15.5C17.83 19 19 17.83 19 15.5V8.5C19 6.17 17.83 5 15.5 5H8.5C6.17 5 5 6.17 5 8.5V15.5C5 17.83 6.17 19 8.5 19Z" fill={`${color}`}/>
<path d="M16 3.75H8C7.59 3.75 7.25 3.41 7.25 3C7.25 2.59 7.59 2.25 8 2.25H16C16.41 2.25 16.75 2.59 16.75 3C16.75 3.41 16.41 3.75 16 3.75Z" fill={`${color}`}/>
<path d="M16 21.75H8C7.59 21.75 7.25 21.41 7.25 21C7.25 20.59 7.59 20.25 8 20.25H16C16.41 20.25 16.75 20.59 16.75 21C16.75 21.41 16.41 21.75 16 21.75Z" fill={`${color}`}/>
<path d="M14.5 13.25H11.5C11.09 13.25 10.75 12.91 10.75 12.5V9.5C10.75 9.09 11.09 8.75 11.5 8.75C11.91 8.75 12.25 9.09 12.25 9.5V11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12.5V15.5C5 17.83 6.17 19 8.5 19H15.5C17.83 19 19 17.83 19 15.5V8.5C19 6.17 17.83 5 15.5 5H8.5C6.17 5 5 6.17 5 8.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 2H8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 22H8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5 9.5V12.5H14.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 19H15.5C17.83 19 19 17.83 19 15.5V8.5C19 6.17 17.83 5 15.5 5H8.5C6.17 5 5 6.17 5 8.5V15.5C5 17.83 6.17 19 8.5 19Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M16 2H8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M16 22H8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M11.5 9.5V12.5H14.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
