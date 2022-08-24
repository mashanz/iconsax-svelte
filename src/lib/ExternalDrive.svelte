<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 22H9C6 22 4 20 4 17V7C4 4 6 2 9 2H16C19 2 21 4 21 7V17C21 20 19 22 16 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 15H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 12H8" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 9.5H8" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 7H8" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.4945 18.25H16.5035" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 22.75H9C5.56 22.75 3.25 20.44 3.25 17V7C3.25 3.56 5.56 1.25 9 1.25H16C19.44 1.25 21.75 3.56 21.75 7V17C21.75 20.44 19.44 22.75 16 22.75ZM9 2.75C6.42 2.75 4.75 4.42 4.75 7V17C4.75 19.58 6.42 21.25 9 21.25H16C18.58 21.25 20.25 19.58 20.25 17V7C20.25 4.42 18.58 2.75 16 2.75H9Z" fill={`${color}`}/>
<path d="M21 15.75H4C3.59 15.75 3.25 15.41 3.25 15C3.25 14.59 3.59 14.25 4 14.25H21C21.41 14.25 21.75 14.59 21.75 15C21.75 15.41 21.41 15.75 21 15.75Z" fill={`${color}`}/>
<path d="M8 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H8C8.41 11.25 8.75 11.59 8.75 12C8.75 12.41 8.41 12.75 8 12.75Z" fill={`${color}`}/>
<path d="M8 10.25H7C6.59 10.25 6.25 9.91 6.25 9.5C6.25 9.09 6.59 8.75 7 8.75H8C8.41 8.75 8.75 9.09 8.75 9.5C8.75 9.91 8.41 10.25 8 10.25Z" fill={`${color}`}/>
<path d="M8 7.75H7C6.59 7.75 6.25 7.41 6.25 7C6.25 6.59 6.59 6.25 7 6.25H8C8.41 6.25 8.75 6.59 8.75 7C8.75 7.41 8.41 7.75 8 7.75Z" fill={`${color}`}/>
<path d="M17 19.4999C16.74 19.4999 16.48 19.3899 16.29 19.2099C16.11 19.0199 16 18.7599 16 18.4999C16 18.2299 16.11 17.9799 16.29 17.7899C16.57 17.5099 17.01 17.4199 17.38 17.5799C17.5 17.6299 17.61 17.6999 17.71 17.7899C17.89 17.9799 18 18.2399 18 18.4999C18 18.7599 17.89 19.0199 17.71 19.2099C17.61 19.2999 17.51 19.3699 17.38 19.4199C17.26 19.4699 17.13 19.4999 17 19.4999Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 2H8C5.79 2 4 3.79 4 6V13.25C4 13.8 4.45 14.25 5 14.25H20C20.55 14.25 21 13.8 21 13.25V6C21 3.79 19.21 2 17 2ZM8 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H8C8.41 11.25 8.75 11.59 8.75 12C8.75 12.41 8.41 12.75 8 12.75ZM8 10.25H7C6.59 10.25 6.25 9.91 6.25 9.5C6.25 9.09 6.59 8.75 7 8.75H8C8.41 8.75 8.75 9.09 8.75 9.5C8.75 9.91 8.41 10.25 8 10.25ZM8 7.75H7C6.59 7.75 6.25 7.41 6.25 7C6.25 6.59 6.59 6.25 7 6.25H8C8.41 6.25 8.75 6.59 8.75 7C8.75 7.41 8.41 7.75 8 7.75Z" fill={`${color}`}/>
<path d="M4 16.75V18C4 20.21 5.79 22 8 22H17C19.21 22 21 20.21 21 18V16.75C21 16.2 20.55 15.75 20 15.75H5C4.45 15.75 4 16.2 4 16.75ZM17.71 19.46C17.52 19.64 17.26 19.75 17 19.75C16.74 19.75 16.48 19.64 16.29 19.46C16.11 19.27 16 19.01 16 18.75C16 18.49 16.11 18.23 16.29 18.04C16.66 17.67 17.33 17.67 17.71 18.04C17.89 18.23 18 18.49 18 18.75C18 19.01 17.89 19.27 17.71 19.46Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M21 6V13.25C21 13.8023 20.5523 14.25 20 14.25H5C4.44772 14.25 4 13.8023 4 13.25V6C4 3.79 5.79 2 8 2H17C19.21 2 21 3.79 21 6Z" fill={`${color}`}/>
<path d="M8 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H8C8.41 11.25 8.75 11.59 8.75 12C8.75 12.41 8.41 12.75 8 12.75Z" fill={`${color}`}/>
<path d="M8 10.25H7C6.59 10.25 6.25 9.91 6.25 9.5C6.25 9.09 6.59 8.75 7 8.75H8C8.41 8.75 8.75 9.09 8.75 9.5C8.75 9.91 8.41 10.25 8 10.25Z" fill={`${color}`}/>
<path d="M8 7.75H7C6.59 7.75 6.25 7.41 6.25 7C6.25 6.59 6.59 6.25 7 6.25H8C8.41 6.25 8.75 6.59 8.75 7C8.75 7.41 8.41 7.75 8 7.75Z" fill={`${color}`}/>
<path d="M5 15.75C4.44772 15.75 4 16.1977 4 16.75V18C4 20.21 5.79 22 8 22H17C19.21 22 21 20.21 21 18V16.75C21 16.1977 20.5523 15.75 20 15.75H5ZM17.71 19.46C17.52 19.64 17.26 19.75 17 19.75C16.74 19.75 16.48 19.64 16.29 19.46C16.11 19.27 16 19.01 16 18.75C16 18.49 16.11 18.23 16.29 18.04C16.66 17.67 17.33 17.67 17.71 18.04C17.89 18.23 18 18.49 18 18.75C18 19.01 17.89 19.27 17.71 19.46Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7C4 4 6 2 9 2H16C19 2 21 4 21 7V17C21 20 19 22 16 22H9C6 22 4 20 4 17V11.71" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 15H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 12H8" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 9.5H8" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 7H8" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.4945 18.25H16.5035" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 22H9C6 22 4 20 4 17V7C4 4 6 2 9 2H16C19 2 21 4 21 7V17C21 20 19 22 16 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 15H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M7 12H8" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M7 9.5H8" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M7 7H8" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M16.4945 18.25H16.5035" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
