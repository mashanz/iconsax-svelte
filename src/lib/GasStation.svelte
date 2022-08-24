<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 22V5C3.5 3 4.84 2 6.5 2H14.5C16.16 2 17.5 3 17.5 5V22H3.5Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 22H19" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.39 9.99998H12.62C13.66 9.99998 14.51 9.49999 14.51 8.10999V6.87999C14.51 5.48999 13.66 4.98999 12.62 4.98999H8.39C7.35 4.98999 6.5 5.48999 6.5 6.87999V8.10999C6.5 9.49999 7.35 9.99998 8.39 9.99998Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 13H9.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 16.01L22 16V10L20 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 22.75H3.5C3.09 22.75 2.75 22.41 2.75 22V5C2.75 2.76 4.26 1.25 6.5 1.25H14.5C16.74 1.25 18.25 2.76 18.25 5V22C18.25 22.41 17.91 22.75 17.5 22.75ZM4.25 21.25H16.75V5C16.75 3.59 15.91 2.75 14.5 2.75H6.5C5.09 2.75 4.25 3.59 4.25 5V21.25Z" fill={`${color}`}/>
<path d="M19 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H19C19.41 21.25 19.75 21.59 19.75 22C19.75 22.41 19.41 22.75 19 22.75Z" fill={`${color}`}/>
<path d="M12.6102 10.75H8.38023C6.75023 10.75 5.74023 9.73999 5.74023 8.10999V6.87999C5.74023 5.24999 6.75023 4.23999 8.38023 4.23999H12.6102C14.2402 4.23999 15.2502 5.24999 15.2502 6.87999V8.10999C15.2502 9.73999 14.2402 10.75 12.6102 10.75ZM8.39023 5.74998C7.58023 5.74998 7.25023 6.07998 7.25023 6.88998V8.11998C7.25023 8.92998 7.58023 9.25998 8.39023 9.25998H12.6202C13.4302 9.25998 13.7602 8.92998 13.7602 8.11998V6.88998C13.7602 6.07998 13.4302 5.74998 12.6202 5.74998H8.39023Z" fill={`${color}`}/>
<path d="M9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75Z" fill={`${color}`}/>
<path d="M17.5 16.7599C17.09 16.7599 16.75 16.4299 16.75 16.0099C16.75 15.5999 17.08 15.2599 17.5 15.2599L21.25 15.2499V10.4599L19.66 9.66992C19.29 9.47992 19.14 9.02993 19.32 8.65993C19.51 8.28993 19.96 8.13993 20.33 8.31993L22.33 9.31993C22.58 9.44993 22.74 9.70993 22.74 9.98993V15.9899C22.74 16.3999 22.41 16.7399 21.99 16.7399L17.5 16.7599Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M3.5 22V5C3.5 3 4.84 2 6.5 2H14.5C16.16 2 17.5 3 17.5 5V22H3.5Z" fill={`${color}`}/>
<path d="M19 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H19C19.41 21.25 19.75 21.59 19.75 22C19.75 22.41 19.41 22.75 19 22.75Z" fill={`${color}`}/>
<path d="M7.89 10H13.12C14.16 10 15.01 9.5 15.01 8.11V6.88C15 5.5 14.15 5 13.11 5H7.88C6.85 5 6 5.5 6 6.89V8.12C6 9.5 6.85 10 7.89 10Z" fill={`${color}`}/>
<path d="M9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75Z" fill={`${color}`}/>
<path d="M22.75 10V16C22.75 16.41 22.42 16.75 22 16.75L17.5 16.76V15.26L21.25 15.25V10.46L19.66 9.67002C19.29 9.49002 19.14 9.04002 19.33 8.66002C19.51 8.29002 19.97 8.15002 20.34 8.33002L22.34 9.33002C22.59 9.46002 22.75 9.72002 22.75 10Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 5C3.5 3 4.84 2 6.5 2H14.5C16.16 2 17.5 3 17.5 5V22H3.5V9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 22H19" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.39 9.99998H12.62C13.66 9.99998 14.51 9.49999 14.51 8.10999V6.87999C14.51 5.48999 13.66 4.98999 12.62 4.98999H8.39C7.35 4.98999 6.5 5.48999 6.5 6.87999V8.10999C6.5 9.49999 7.35 9.99998 8.39 9.99998Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 13H9.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 16.01L22 16V10L20 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<!-- twotone -->
{/if}
