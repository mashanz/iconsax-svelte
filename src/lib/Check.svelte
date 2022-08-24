<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.02 19.5H7.5C6.88 19.5 6.33 19.48 5.84 19.41C3.21 19.12 2.5 17.88 2.5 14.5V9.5C2.5 6.12 3.21 4.88 5.84 4.59C6.33 4.52 6.88 4.5 7.5 4.5H10.96" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.02 4.5H16.5C17.12 4.5 17.67 4.52 18.16 4.59C20.79 4.88 21.5 6.12 21.5 9.5V14.5C21.5 17.88 20.79 19.12 18.16 19.41C17.67 19.48 17.12 19.5 16.5 19.5H15.02" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 8.5V15.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.02 20.25H7.5C6.75 20.25 6.2 20.22 5.73 20.15C2.4 19.78 1.75 17.8 1.75 14.5V9.5C1.75 6.2 2.41 4.21 5.76 3.84C6.2 3.78 6.75 3.75 7.5 3.75H10.96C11.37 3.75 11.71 4.09 11.71 4.5C11.71 4.91 11.37 5.25 10.96 5.25H7.5C6.82 5.25 6.34 5.28 5.95 5.33C3.92 5.55 3.25 6.19 3.25 9.5V14.5C3.25 17.81 3.92 18.44 5.92 18.67C6.34 18.73 6.82 18.75 7.5 18.75H11.02C11.43 18.75 11.77 19.09 11.77 19.5C11.77 19.91 11.43 20.25 11.02 20.25Z" fill={`${color}`}/>
<path d="M16.4995 20.25H15.0195C14.6095 20.25 14.2695 19.91 14.2695 19.5C14.2695 19.09 14.6095 18.75 15.0195 18.75H16.4995C17.1795 18.75 17.6595 18.72 18.0495 18.67C20.0795 18.45 20.7495 17.81 20.7495 14.5V9.5C20.7495 6.19 20.0795 5.56 18.0795 5.33C17.6595 5.27 17.1795 5.25 16.4995 5.25H15.0195C14.6095 5.25 14.2695 4.91 14.2695 4.5C14.2695 4.09 14.6095 3.75 15.0195 3.75H16.4995C17.2495 3.75 17.7995 3.78 18.2695 3.85C21.5995 4.22 22.2495 6.2 22.2495 9.5V14.5C22.2495 17.8 21.5895 19.79 18.2395 20.16C17.7995 20.22 17.2495 20.25 16.4995 20.25Z" fill={`${color}`}/>
<path d="M15 22.75C14.59 22.75 14.25 22.41 14.25 22V2C14.25 1.59 14.59 1.25 15 1.25C15.41 1.25 15.75 1.59 15.75 2V22C15.75 22.41 15.41 22.75 15 22.75Z" fill={`${color}`}/>
<path d="M8 16.25C7.59 16.25 7.25 15.91 7.25 15.5V8.5C7.25 8.09 7.59 7.75 8 7.75C8.41 7.75 8.75 8.09 8.75 8.5V15.5C8.75 15.91 8.41 16.25 8 16.25Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22C14.59 22 14.25 21.66 14.25 21.25V2.75C14.25 2.34 14.59 2 15 2C15.41 2 15.75 2.34 15.75 2.75V21.25C15.75 21.66 15.41 22 15 22Z" fill={`${color}`}/>
<path d="M18 20H15V4H18C20.21 4 22 5.79 22 8V16C22 18.21 20.21 20 18 20Z" fill={`${color}`}/>
<path d="M6 4C3.79 4 2 5.79 2 8V16C2 18.21 3.79 20 6 20H11C11.55 20 12 19.55 12 19V5C12 4.45 11.55 4 11 4H6ZM7.75 15.5C7.75 15.91 7.41 16.25 7 16.25C6.59 16.25 6.25 15.91 6.25 15.5V8.5C6.25 8.09 6.59 7.75 7 7.75C7.41 7.75 7.75 8.09 7.75 8.5V15.5Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22C14.59 22 14.25 21.66 14.25 21.25V2.75C14.25 2.34 14.59 2 15 2C15.41 2 15.75 2.34 15.75 2.75V21.25C15.75 21.66 15.41 22 15 22Z" fill={`${color}`}/>
<path opacity="0.4" d="M6 20H12V4H6C3.79 4 2 5.79 2 8V16C2 18.21 3.79 20 6 20Z" fill={`${color}`}/>
<path opacity="0.4" d="M18 20H15V4H18C20.21 4 22 5.79 22 8V16C22 18.21 20.21 20 18 20Z" fill={`${color}`}/>
<path d="M7 16.25C6.59 16.25 6.25 15.91 6.25 15.5V8.5C6.25 8.09 6.59 7.75 7 7.75C7.41 7.75 7.75 8.09 7.75 8.5V15.5C7.75 15.91 7.41 16.25 7 16.25Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.02 19.5H7.5C6.88 19.5 6.33 19.48 5.84 19.41C3.21 19.12 2.5 17.88 2.5 14.5V13.98V9.5C2.5 6.12 3.21 4.88 5.84 4.59C6.33 4.52 6.88 4.5 7.5 4.5H10.96" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.4995 13.55V14.5C21.4995 17.88 20.7895 19.12 18.1595 19.41C17.6695 19.48 17.1195 19.5 16.4995 19.5H15.0195" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.0195 4.5H16.4995C17.1195 4.5 17.6695 4.52 18.1595 4.59C20.7895 4.88 21.4995 6.12 21.4995 9.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 8.5V15.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M11.02 19.5H7.5C6.88 19.5 6.33 19.48 5.84 19.41C3.21 19.12 2.5 17.88 2.5 14.5V9.5C2.5 6.12 3.21 4.88 5.84 4.59C6.33 4.52 6.88 4.5 7.5 4.5H10.96" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.0195 4.5H16.4995C17.1195 4.5 17.6695 4.52 18.1595 4.59C20.7895 4.88 21.4995 6.12 21.4995 9.5V14.5C21.4995 17.88 20.7895 19.12 18.1595 19.41C17.6695 19.48 17.1195 19.5 16.4995 19.5H15.0195" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M8 8.5V15.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
