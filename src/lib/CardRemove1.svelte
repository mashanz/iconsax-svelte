<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8.5H13.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 16.5H8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 16.5H14.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.3086 8.18957L21.1886 4.30957" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round"/>
<path d="M21.1886 8.18957L17.3086 4.30957" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 9.25H2C1.59 9.25 1.25 8.91 1.25 8.5C1.25 8.09 1.59 7.75 2 7.75H13.5C13.91 7.75 14.25 8.09 14.25 8.5C14.25 8.91 13.91 9.25 13.5 9.25Z" fill={`${color}`}/>
<path d="M8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25Z" fill={`${color}`}/>
<path d="M14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" fill={`${color}`}/>
<path d="M17.56 21.25H6.44C2.46 21.25 1.25 20.05 1.25 16.11V7.89C1.25 3.95 2.46 2.75 6.44 2.75H13.5C13.91 2.75 14.25 3.09 14.25 3.5C14.25 3.91 13.91 4.25 13.5 4.25H6.44C3.3 4.25 2.75 4.79 2.75 7.89V16.1C2.75 19.2 3.3 19.74 6.44 19.74H17.55C20.69 19.74 21.24 19.2 21.24 16.1V12.02C21.24 11.61 21.58 11.27 21.99 11.27C22.4 11.27 22.74 11.61 22.74 12.02V16.1C22.75 20.05 21.54 21.25 17.56 21.25Z" fill={`${color}`}/>
<path d="M17.31 8.94023C17.12 8.94023 16.93 8.87023 16.78 8.72023C16.49 8.43023 16.49 7.95023 16.78 7.66023L20.67 3.77023C20.96 3.48023 21.44 3.48023 21.73 3.77023C22.02 4.06023 22.02 4.54023 21.73 4.83023L17.84 8.72023C17.69 8.87023 17.5 8.94023 17.31 8.94023Z" fill={`${color}`}/>
<path d="M21.1902 8.94023C21.0002 8.94023 20.8102 8.87023 20.6602 8.72023L16.7702 4.83023C16.4802 4.54023 16.4802 4.06023 16.7702 3.77023C17.0602 3.48023 17.5402 3.48023 17.8302 3.77023L21.7202 7.66023C22.0102 7.95023 22.0102 8.43023 21.7202 8.72023C21.5802 8.87023 21.3902 8.94023 21.1902 8.94023Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 11.46V16.46C2 18.75 3.85 20.6 6.14 20.6H17.85C20.14 20.6 22 18.74 22 16.45V11.46C22 10.79 21.46 10.25 20.79 10.25H3.21C2.54 10.25 2 10.79 2 11.46ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" fill={`${color}`}/>
<path d="M13.5 4.60844V7.53844C13.5 8.20844 12.96 8.74844 12.29 8.74844H3.21C2.53 8.74844 2 8.18844 2 7.51844C2.01 6.38844 2.46 5.35844 3.21 4.60844C3.96 3.85844 5 3.39844 6.14 3.39844H12.29C12.96 3.39844 13.5 3.93844 13.5 4.60844Z" fill={`${color}`}/>
<path d="M19.97 2H17.03C15.76 2 15 2.76 15 4.03V6.97C15 8.24 15.76 9 17.03 9H19.97C21.24 9 22 8.24 22 6.97V4.03C22 2.76 21.24 2 19.97 2ZM20.34 6.49C20.45 6.62 20.51 6.76 20.51 6.93C20.51 7.07 20.45 7.23 20.34 7.34C20.11 7.57 19.72 7.57 19.49 7.34L18.5 6.35L17.52 7.35C17.29 7.58 16.9 7.58 16.66 7.34C16.43 7.11 16.43 6.72 16.66 6.49L17.66 5.51L16.67 4.52C16.44 4.29 16.43 3.9 16.66 3.66C16.89 3.42 17.28 3.43 17.52 3.67L18.5 4.66L19.5 3.66C19.73 3.43 20.12 3.43 20.35 3.66C20.46 3.79 20.51 3.94 20.52 4.1C20.52 4.24 20.46 4.4 20.36 4.52L19.36 5.52L20.34 6.49Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M22 7.7699V8.9999H2V7.5399C2 5.2499 3.86 3.3999 6.15 3.3999H16V5.9699C16 7.2399 16.76 7.9999 18.03 7.9999H20.97C21.37 7.9999 21.71 7.9299 22 7.7699Z" fill={`${color}`}/>
<path d="M2 9V16.46C2 18.75 3.86 20.6 6.15 20.6H17.85C20.14 20.6 22 18.75 22 16.46V9H2ZM8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25ZM14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" fill={`${color}`}/>
<path d="M20.97 1H18.03C16.76 1 16 1.76 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.34 5.49C21.45 5.62 21.51 5.76 21.51 5.93C21.51 6.07 21.45 6.23 21.34 6.34C21.11 6.57 20.72 6.57 20.49 6.34L19.5 5.35L18.52 6.35C18.29 6.58 17.9 6.58 17.66 6.34C17.43 6.11 17.43 5.72 17.66 5.49L18.66 4.51L17.67 3.52C17.44 3.29 17.43 2.9 17.66 2.66C17.89 2.42 18.28 2.43 18.52 2.67L19.5 3.66L20.5 2.66C20.73 2.43 21.12 2.43 21.35 2.66C21.46 2.79 21.51 2.94 21.52 3.1C21.52 3.24 21.46 3.4 21.36 3.52L20.36 4.52L21.34 5.49Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8.5H13.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 16.5H8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 16.5H14.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 11.03V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V15.02" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.3105 8.19006L21.1905 4.31006" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round"/>
<path d="M21.1905 8.19006L17.3105 4.31006" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8.5H13.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M6 16.5H8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M10.5 16.5H14.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.4">
<path d="M17.3086 8.18957L21.1886 4.30957" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round"/>
<path d="M21.1886 8.18957L17.3086 4.30957" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round"/>
</g>
</svg>

{/if}
