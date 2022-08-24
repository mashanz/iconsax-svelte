<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.25 15.4V8.6C13.25 7.1 13.89 6.5 15.48 6.5H16.52C18.11 6.5 18.75 7.1 18.75 8.6V15.4C18.75 16.9 18.11 17.5 16.52 17.5H15.48C13.89 17.5 13.25 16.9 13.25 15.4Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12H4.4" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 12H13" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12H19.31" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.02 20.25H6.98C4.97 20.25 4 19.32 4 17.4V6.6C4 4.68 4.98 3.75 6.98 3.75H8.02C10.02 3.75 11 4.68 11 6.6V17.4C11 19.32 10.02 20.25 8.02 20.25ZM6.98 5.25C5.71 5.25 5.5 5.59 5.5 6.6V17.4C5.5 18.41 5.71 18.75 6.98 18.75H8.02C9.29 18.75 9.5 18.41 9.5 17.4V6.6C9.5 5.59 9.29 5.25 8.02 5.25H6.98Z" fill={`${color}`}/>
<path d="M16.52 18.25H15.48C13.47 18.25 12.5 17.32 12.5 15.4V8.6C12.5 6.68 13.48 5.75 15.48 5.75H16.52C18.53 5.75 19.5 6.68 19.5 8.6V15.4C19.5 17.32 18.52 18.25 16.52 18.25ZM15.48 7.25C14.21 7.25 14 7.59 14 8.6V15.4C14 16.41 14.21 16.75 15.48 16.75H16.52C17.79 16.75 18 16.41 18 15.4V8.6C18 7.59 17.79 7.25 16.52 7.25H15.48Z" fill={`${color}`}/>
<path d="M4.4 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.58 11.25 2 11.25H4.4C4.81 11.25 5.15 11.59 5.15 12C5.15 12.41 4.82 12.75 4.4 12.75Z" fill={`${color}`}/>
<path d="M13 12.75H11C10.59 12.75 10.25 12.41 10.25 12C10.25 11.59 10.59 11.25 11 11.25H13C13.41 11.25 13.75 11.59 13.75 12C13.75 12.41 13.41 12.75 13 12.75Z" fill={`${color}`}/>
<path d="M22.0008 12.75H19.3008C18.8908 12.75 18.5508 12.41 18.5508 12C18.5508 11.59 18.8908 11.25 19.3008 11.25H22.0008C22.4108 11.25 22.7508 11.59 22.7508 12C22.7508 12.41 22.4208 12.75 22.0008 12.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z" fill={`${color}`}/>
<path d="M4.75 12.75H2.75C2.34 12.75 2 12.41 2 12C2 11.59 2.34 11.25 2.75 11.25H4.75V12.75Z" fill={`${color}`}/>
<path d="M13.25 11.25H10.25V12.75H13.25V11.25Z" fill={`${color}`}/>
<path d="M21.25 12.75H18.75V11.25H21.25C21.66 11.25 22 11.59 22 12C22 12.41 21.66 12.75 21.25 12.75Z" fill={`${color}`}/>
<path d="M13.25 15.4V8.6C13.25 7.1 13.89 6.5 15.48 6.5H16.52C18.11 6.5 18.75 7.1 18.75 8.6V15.4C18.75 16.9 18.11 17.5 16.52 17.5H15.48C13.89 17.5 13.25 16.9 13.25 15.4Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z" fill={`${color}`}/>
<path d="M4.75 12.75H2.75C2.34 12.75 2 12.41 2 12C2 11.59 2.34 11.25 2.75 11.25H4.75V12.75Z" fill={`${color}`}/>
<path d="M13.25 11.25H10.25V12.75H13.25V11.25Z" fill={`${color}`}/>
<path d="M21.25 12.75H18.75V11.25H21.25C21.66 11.25 22 11.59 22 12C22 12.41 21.66 12.75 21.25 12.75Z" fill={`${color}`}/>
<path opacity="0.4" d="M13.25 15.4V8.6C13.25 7.1 13.89 6.5 15.48 6.5H16.52C18.11 6.5 18.75 7.1 18.75 8.6V15.4C18.75 16.9 18.11 17.5 16.52 17.5H15.48C13.89 17.5 13.25 16.9 13.25 15.4Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 15.4V8.6C18.75 7.1 18.11 6.5 16.52 6.5H15.48C13.89 6.5 13.25 7.1 13.25 8.6V15.4C13.25 16.9 13.89 17.5 15.48 17.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12H4.4" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 12H13" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.0005 12H19.3105" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.25 15.4V8.6C13.25 7.1 13.89 6.5 15.48 6.5H16.52C18.11 6.5 18.75 7.1 18.75 8.6V15.4C18.75 16.9 18.11 17.5 16.52 17.5H15.48C13.89 17.5 13.25 16.9 13.25 15.4Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M2 12H4.4" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M11 12H13" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M22.0005 12H19.3105" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
