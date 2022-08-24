<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 8V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 8V12" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 15V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 8V9" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 12V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 8V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z" fill={`${color}`}/>
<path d="M6 16.75C5.59 16.75 5.25 16.41 5.25 16V8C5.25 7.59 5.59 7.25 6 7.25C6.41 7.25 6.75 7.59 6.75 8V16C6.75 16.41 6.41 16.75 6 16.75Z" fill={`${color}`}/>
<path d="M9 12.75C8.59 12.75 8.25 12.41 8.25 12V8C8.25 7.59 8.59 7.25 9 7.25C9.41 7.25 9.75 7.59 9.75 8V12C9.75 12.41 9.41 12.75 9 12.75Z" fill={`${color}`}/>
<path d="M9 16.75C8.59 16.75 8.25 16.41 8.25 16V15C8.25 14.59 8.59 14.25 9 14.25C9.41 14.25 9.75 14.59 9.75 15V16C9.75 16.41 9.41 16.75 9 16.75Z" fill={`${color}`}/>
<path d="M15 9.75C14.59 9.75 14.25 9.41 14.25 9V8C14.25 7.59 14.59 7.25 15 7.25C15.41 7.25 15.75 7.59 15.75 8V9C15.75 9.41 15.41 9.75 15 9.75Z" fill={`${color}`}/>
<path d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V16C12.75 16.41 12.41 16.75 12 16.75Z" fill={`${color}`}/>
<path d="M15 16.75C14.59 16.75 14.25 16.41 14.25 16V12C14.25 11.59 14.59 11.25 15 11.25C15.41 11.25 15.75 11.59 15.75 12V16C15.75 16.41 15.41 16.75 15 16.75Z" fill={`${color}`}/>
<path d="M18 16.75C17.59 16.75 17.25 16.41 17.25 16V8C17.25 7.59 17.59 7.25 18 7.25C18.41 7.25 18.75 7.59 18.75 8V16C18.75 16.41 18.41 16.75 18 16.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM6.75 16C6.75 16.41 6.41 16.75 6 16.75C5.59 16.75 5.25 16.41 5.25 16V8C5.25 7.59 5.59 7.25 6 7.25C6.41 7.25 6.75 7.59 6.75 8V16ZM9.75 16C9.75 16.41 9.41 16.75 9 16.75C8.59 16.75 8.25 16.41 8.25 16V15C8.25 14.59 8.59 14.25 9 14.25C9.41 14.25 9.75 14.59 9.75 15V16ZM9.75 12C9.75 12.41 9.41 12.75 9 12.75C8.59 12.75 8.25 12.41 8.25 12V8C8.25 7.59 8.59 7.25 9 7.25C9.41 7.25 9.75 7.59 9.75 8V12ZM12.75 16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V16ZM15.75 16C15.75 16.41 15.41 16.75 15 16.75C14.59 16.75 14.25 16.41 14.25 16V12C14.25 11.59 14.59 11.25 15 11.25C15.41 11.25 15.75 11.59 15.75 12V16ZM15.75 9C15.75 9.41 15.41 9.75 15 9.75C14.59 9.75 14.25 9.41 14.25 9V8C14.25 7.59 14.59 7.25 15 7.25C15.41 7.25 15.75 7.59 15.75 8V9ZM18.75 16C18.75 16.41 18.41 16.75 18 16.75C17.59 16.75 17.25 16.41 17.25 16V8C17.25 7.59 17.59 7.25 18 7.25C18.41 7.25 18.75 7.59 18.75 8V16Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" fill={`${color}`}/>
<path d="M6 16.75C5.59 16.75 5.25 16.41 5.25 16V8C5.25 7.59 5.59 7.25 6 7.25C6.41 7.25 6.75 7.59 6.75 8V16C6.75 16.41 6.41 16.75 6 16.75Z" fill={`${color}`}/>
<path d="M9 12.75C8.59 12.75 8.25 12.41 8.25 12V8C8.25 7.59 8.59 7.25 9 7.25C9.41 7.25 9.75 7.59 9.75 8V12C9.75 12.41 9.41 12.75 9 12.75Z" fill={`${color}`}/>
<path d="M9 16.75C8.59 16.75 8.25 16.41 8.25 16V15C8.25 14.59 8.59 14.25 9 14.25C9.41 14.25 9.75 14.59 9.75 15V16C9.75 16.41 9.41 16.75 9 16.75Z" fill={`${color}`}/>
<path d="M15 9.75C14.59 9.75 14.25 9.41 14.25 9V8C14.25 7.59 14.59 7.25 15 7.25C15.41 7.25 15.75 7.59 15.75 8V9C15.75 9.41 15.41 9.75 15 9.75Z" fill={`${color}`}/>
<path d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V16C12.75 16.41 12.41 16.75 12 16.75Z" fill={`${color}`}/>
<path d="M15 16.75C14.59 16.75 14.25 16.41 14.25 16V12C14.25 11.59 14.59 11.25 15 11.25C15.41 11.25 15.75 11.59 15.75 12V16C15.75 16.41 15.41 16.75 15 16.75Z" fill={`${color}`}/>
<path d="M18 16.75C17.59 16.75 17.25 16.41 17.25 16V8C17.25 7.59 17.59 7.25 18 7.25C18.41 7.25 18.75 7.59 18.75 8V16C18.75 16.41 18.41 16.75 18 16.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5H7C4 20.5 2 19 2 15.5V12.59" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 8V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 8V12" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 15V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 8V9" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 12V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 8V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M6 8V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 8V12" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 15V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 8V9" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M12 8V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 12V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M18 8V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
