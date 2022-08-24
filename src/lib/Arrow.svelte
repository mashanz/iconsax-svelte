<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22V20" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18V16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14V11C12 7.13 15.13 4 19 4H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 4H5C8.87 4 12 7.13 12 11V12V14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 2L2 4L4 6" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 2L22 4L20 6" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V20C11.25 19.59 11.59 19.25 12 19.25C12.41 19.25 12.75 19.59 12.75 20V22C12.75 22.41 12.41 22.75 12 22.75Z" fill={`${color}`}/>
<path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V16C11.25 15.59 11.59 15.25 12 15.25C12.41 15.25 12.75 15.59 12.75 16V18C12.75 18.41 12.41 18.75 12 18.75Z" fill={`${color}`}/>
<path d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V11C11.25 6.73 14.73 3.25 19 3.25H22C22.41 3.25 22.75 3.59 22.75 4C22.75 4.41 22.41 4.75 22 4.75H19C15.55 4.75 12.75 7.55 12.75 11V14C12.75 14.41 12.41 14.75 12 14.75Z" fill={`${color}`}/>
<path d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V11C11.25 7.55 8.45 4.75 5 4.75H2C1.59 4.75 1.25 4.41 1.25 4C1.25 3.59 1.59 3.25 2 3.25H5C9.27 3.25 12.75 6.73 12.75 11V14C12.75 14.41 12.41 14.75 12 14.75Z" fill={`${color}`}/>
<path d="M3.99948 6.74994C3.80948 6.74994 3.61945 6.67994 3.46945 6.52994L1.46945 4.52994C1.17945 4.23994 1.17945 3.75994 1.46945 3.46994L3.46945 1.46994C3.75945 1.17994 4.23951 1.17994 4.52951 1.46994C4.81951 1.75994 4.81951 2.23994 4.52951 2.52994L3.05948 3.99994L4.52951 5.46994C4.81951 5.75994 4.81951 6.23994 4.52951 6.52994C4.37951 6.67994 4.18948 6.74994 3.99948 6.74994Z" fill={`${color}`}/>
<path d="M19.9995 6.74994C19.8095 6.74994 19.6195 6.67994 19.4695 6.52994C19.1795 6.23994 19.1795 5.75994 19.4695 5.46994L20.9395 3.99994L19.4695 2.52994C19.1795 2.23994 19.1795 1.75994 19.4695 1.46994C19.7595 1.17994 20.2395 1.17994 20.5295 1.46994L22.5295 3.46994C22.8195 3.75994 22.8195 4.23994 22.5295 4.52994L20.5295 6.52994C20.3795 6.67994 20.1895 6.74994 19.9995 6.74994Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V20C11.25 19.59 11.59 19.25 12 19.25C12.41 19.25 12.75 19.59 12.75 20V22C12.75 22.41 12.41 22.75 12 22.75Z" fill={`${color}`}/>
<path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V16C11.25 15.59 11.59 15.25 12 15.25C12.41 15.25 12.75 15.59 12.75 16V18C12.75 18.41 12.41 18.75 12 18.75Z" fill={`${color}`}/>
<path d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V11C11.25 6.73 14.73 3.25 19 3.25H22C22.41 3.25 22.75 3.59 22.75 4C22.75 4.41 22.41 4.75 22 4.75H19C15.55 4.75 12.75 7.55 12.75 11V14C12.75 14.41 12.41 14.75 12 14.75Z" fill={`${color}`}/>
<path d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V11C11.25 7.55 8.45 4.75 5 4.75H2C1.59 4.75 1.25 4.41 1.25 4C1.25 3.59 1.59 3.25 2 3.25H5C9.27 3.25 12.75 6.73 12.75 11V14C12.75 14.41 12.41 14.75 12 14.75Z" fill={`${color}`}/>
<path d="M4.00141 6.75141C3.81141 6.75141 3.62141 6.68141 3.47141 6.53141L1.47141 4.53141C1.18141 4.24141 1.18141 3.76141 1.47141 3.47141L3.47141 1.47141C3.76141 1.18141 4.24141 1.18141 4.53141 1.47141C4.82141 1.76141 4.82141 2.24141 4.53141 2.53141L3.06141 4.00141L4.53141 5.47141C4.82141 5.76141 4.82141 6.24141 4.53141 6.53141C4.38141 6.68141 4.19141 6.75141 4.00141 6.75141Z" fill={`${color}`}/>
<path d="M20.0014 6.75141C19.8114 6.75141 19.6214 6.68141 19.4714 6.53141C19.1814 6.24141 19.1814 5.76141 19.4714 5.47141L20.9414 4.00141L19.4714 2.53141C19.1814 2.24141 19.1814 1.76141 19.4714 1.47141C19.7614 1.18141 20.2414 1.18141 20.5314 1.47141L22.5314 3.47141C22.8214 3.76141 22.8214 4.24141 22.5314 4.53141L20.5314 6.53141C20.3814 6.68141 20.1914 6.75141 20.0014 6.75141Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V20C11.25 19.59 11.59 19.25 12 19.25C12.41 19.25 12.75 19.59 12.75 20V22C12.75 22.41 12.41 22.75 12 22.75Z" fill={`${color}`}/>
<path opacity="0.4" d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V16C11.25 15.59 11.59 15.25 12 15.25C12.41 15.25 12.75 15.59 12.75 16V18C12.75 18.41 12.41 18.75 12 18.75Z" fill={`${color}`}/>
<path d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V11C11.25 6.73 14.73 3.25 19 3.25H22C22.41 3.25 22.75 3.59 22.75 4C22.75 4.41 22.41 4.75 22 4.75H19C15.55 4.75 12.75 7.55 12.75 11V14C12.75 14.41 12.41 14.75 12 14.75Z" fill={`${color}`}/>
<path d="M12 14.75C11.59 14.75 11.25 14.41 11.25 14V11C11.25 7.55 8.45 4.75 5 4.75H2C1.59 4.75 1.25 4.41 1.25 4C1.25 3.59 1.59 3.25 2 3.25H5C9.27 3.25 12.75 6.73 12.75 11V14C12.75 14.41 12.41 14.75 12 14.75Z" fill={`${color}`}/>
<path d="M3.99948 6.74994C3.80948 6.74994 3.61945 6.67994 3.46945 6.52994L1.46945 4.52994C1.17945 4.23994 1.17945 3.75994 1.46945 3.46994L3.46945 1.46994C3.75945 1.17994 4.23951 1.17994 4.52951 1.46994C4.81951 1.75994 4.81951 2.23994 4.52951 2.52994L3.05948 3.99994L4.52951 5.46994C4.81951 5.75994 4.81951 6.23994 4.52951 6.52994C4.37951 6.67994 4.18948 6.74994 3.99948 6.74994Z" fill={`${color}`}/>
<path d="M19.9995 6.74994C19.8095 6.74994 19.6195 6.67994 19.4695 6.52994C19.1795 6.23994 19.1795 5.75994 19.4695 5.46994L20.9395 3.99994L19.4695 2.52994C19.1795 2.23994 19.1795 1.75994 19.4695 1.46994C19.7595 1.17994 20.2395 1.17994 20.5295 1.46994L22.5295 3.46994C22.8195 3.75994 22.8195 4.23994 22.5295 4.52994L20.5295 6.52994C20.3795 6.67994 20.1895 6.74994 19.9995 6.74994Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22V20" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18V16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14V11C12 7.13 15.13 4 19 4H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.44922 5.6001C11.0092 6.8801 11.9992 8.83009 11.9992 11.0001V12.0001V14.0001" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 4H5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 2L2 4L4 6" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 2L22 4L20 6" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 22V20" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M12 18V16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14V11C12 7.13 15.13 4 19 4H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 4H5C8.87 4 12 7.13 12 11V12V14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 2L2 4L4 6" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 2L22 4L20 6" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
