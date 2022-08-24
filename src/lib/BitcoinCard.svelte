<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8.5H13" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 16.5H8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 16.5H14.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 11.33V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89001C2 4.38001 2.89 3.5 6.44 3.5H13.28" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 3.25H20.13C20.82 3.25 21.38 3.88 21.38 4.5C21.38 5.19 20.82 5.75 20.13 5.75H17V3.25Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 5.75H20.57C21.36 5.75 22 6.31 22 7C22 7.69 21.36 8.25 20.57 8.25H17V5.75Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.76 8.25V9.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.76 2V3.25" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.19 3.25H16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.19 8.25H16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 9.25H2C1.59 9.25 1.25 8.91 1.25 8.5C1.25 8.09 1.59 7.75 2 7.75H13C13.41 7.75 13.75 8.09 13.75 8.5C13.75 8.91 13.41 9.25 13 9.25Z" fill={`${color}`}/>
<path d="M8 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25Z" fill={`${color}`}/>
<path d="M14.5 17.25H10.5C10.09 17.25 9.75 16.91 9.75 16.5C9.75 16.09 10.09 15.75 10.5 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" fill={`${color}`}/>
<path d="M17.56 21.25H6.44C2.46 21.25 1.25 20.05 1.25 16.11V7.89001C1.25 3.95001 2.46 2.75 6.44 2.75H13.28C13.69 2.75 14.03 3.09 14.03 3.5C14.03 3.91 13.69 4.25 13.28 4.25H6.44C3.3 4.25 2.75 4.79001 2.75 7.89001V16.11C2.75 19.21 3.3 19.75 6.44 19.75H17.56C20.7 19.75 21.25 19.21 21.25 16.11V11.33C21.25 10.92 21.59 10.58 22 10.58C22.41 10.58 22.75 10.92 22.75 11.33V16.11C22.75 20.05 21.54 21.25 17.56 21.25Z" fill={`${color}`}/>
<path d="M20.12 6.5H17C16.59 6.5 16.25 6.16 16.25 5.75V3.25C16.25 2.84 16.59 2.5 17 2.5H20.13C21.2 2.5 22.13 3.43 22.13 4.5C22.12 5.6 21.23 6.5 20.12 6.5ZM17.75 5H20.13C20.41 5 20.63 4.78 20.63 4.5C20.63 4.28 20.39 4 20.13 4H17.75V5Z" fill={`${color}`}/>
<path d="M20.57 9H17C16.59 9 16.25 8.66 16.25 8.25V5.75C16.25 5.34 16.59 5 17 5H20.57C21.77 5 22.75 5.9 22.75 7C22.75 8.1 21.77 9 20.57 9ZM17.75 7.5H20.57C20.94 7.5 21.25 7.27 21.25 7C21.25 6.73 20.94 6.5 20.57 6.5H17.75V7.5Z" fill={`${color}`}/>
<path d="M18.7598 10.25C18.3498 10.25 18.0098 9.91 18.0098 9.5V8.25C18.0098 7.84 18.3498 7.5 18.7598 7.5C19.1698 7.5 19.5098 7.84 19.5098 8.25V9.5C19.5098 9.92 19.1798 10.25 18.7598 10.25Z" fill={`${color}`}/>
<path d="M18.7598 4C18.3498 4 18.0098 3.66 18.0098 3.25V2C18.0098 1.59 18.3498 1.25 18.7598 1.25C19.1698 1.25 19.5098 1.59 19.5098 2V3.25C19.5098 3.66 19.1798 4 18.7598 4Z" fill={`${color}`}/>
<path d="M18.19 4H16C15.59 4 15.25 3.66 15.25 3.25C15.25 2.84 15.59 2.5 16 2.5H18.19C18.6 2.5 18.94 2.84 18.94 3.25C18.94 3.66 18.6 4 18.19 4Z" fill={`${color}`}/>
<path d="M18.19 9H16C15.59 9 15.25 8.66 15.25 8.25C15.25 7.84 15.59 7.5 16 7.5H18.19C18.6 7.5 18.94 7.84 18.94 8.25C18.94 8.66 18.6 9 18.19 9Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.38 10.75C17.38 10.53 17.14 10.25 16.88 10.25H14.94H14.5V11.25H16.88C17.15 11.25 17.38 11.03 17.38 10.75Z" fill={`${color}`}/>
<path d="M17.32 12.75H16.87H14.5V13.75H14.94H17.32C17.69 13.75 18 13.52 18 13.25C18 12.98 17.69 12.75 17.32 12.75Z" fill={`${color}`}/>
<path d="M17.85 3.39844H6.15C3.86 3.39844 2 5.24844 2 7.53844V16.4584C2 18.7484 3.86 20.5984 6.15 20.5984H17.85C20.14 20.5984 22 18.7484 22 16.4584V7.53844C22 5.24844 20.14 3.39844 17.85 3.39844ZM9.25 12.7484H5.25C4.84 12.7484 4.5 12.4084 4.5 11.9984C4.5 11.5884 4.84 11.2484 5.25 11.2484H9.25C9.66 11.2484 10 11.5884 10 11.9984C10 12.4084 9.66 12.7484 9.25 12.7484ZM17.32 15.2484H16.26V15.7484C16.26 16.1584 15.92 16.4984 15.51 16.4984C15.1 16.4984 14.76 16.1584 14.76 15.7484V15.2484H13.75H12.75C12.34 15.2484 12 14.9084 12 14.4984C12 14.0884 12.34 13.7484 12.75 13.7484H13V11.9984V10.2484H12.75C12.34 10.2484 12 9.90844 12 9.49844C12 9.08844 12.34 8.74844 12.75 8.74844H13.75H14.76V8.24844C14.76 7.83844 15.1 7.49844 15.51 7.49844C15.92 7.49844 16.26 7.83844 16.26 8.24844V8.74844H16.87C17.94 8.74844 18.87 9.67844 18.87 10.7484C18.87 11.0784 18.78 11.3884 18.64 11.6684C19.16 12.0384 19.5 12.6084 19.5 13.2484C19.5 14.3484 18.52 15.2484 17.32 15.2484Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M22 7.53986V16.4599C22 18.7499 20.14 20.5999 17.85 20.5999H6.15C3.86 20.5999 2 18.7499 2 16.4599V7.53986C2 5.24986 3.86 3.3999 6.15 3.3999H17.85C20.14 3.3999 22 5.24986 22 7.53986Z" fill={`${color}`}/>
<path d="M9.25 12.75H5.25C4.84 12.75 4.5 12.41 4.5 12C4.5 11.59 4.84 11.25 5.25 11.25H9.25C9.66 11.25 10 11.59 10 12C10 12.41 9.66 12.75 9.25 12.75Z" fill={`${color}`}/>
<path d="M18.64 11.67C18.78 11.39 18.87 11.08 18.87 10.75C18.87 9.68 17.94 8.75 16.87 8.75H16.26V8.25C16.26 7.84 15.92 7.5 15.51 7.5C15.1 7.5 14.76 7.84 14.76 8.25V8.75H13.75H12.75C12.34 8.75 12 9.09 12 9.5C12 9.91 12.34 10.25 12.75 10.25H13V12V13.75H12.75C12.34 13.75 12 14.09 12 14.5C12 14.91 12.34 15.25 12.75 15.25H13.75H14.76V15.75C14.76 16.16 15.1 16.5 15.51 16.5C15.92 16.5 16.26 16.16 16.26 15.75V15.25H17.32C18.52 15.25 19.5 14.35 19.5 13.25C19.5 12.6 19.16 12.04 18.64 11.67ZM14.94 10.25H16.88C17.14 10.25 17.38 10.53 17.38 10.75C17.38 11.03 17.16 11.25 16.88 11.25H14.5V10.25H14.94ZM17.32 13.75H14.94H14.5V12.75H16.88H17.33C17.7 12.75 18.01 12.98 18.01 13.25C18.01 13.52 17.69 13.75 17.32 13.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8.5H13" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 16.5H8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 16.5H14.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 8.34998V7.89001C2 4.38001 2.89 3.5 6.44 3.5H13.28" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 11.3301V16.11C22 19.62 21.11 20.5001 17.56 20.5001H6.44C2.89 20.5001 2 19.62 2 16.11V13.05" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 3.25H20.13C20.82 3.25 21.38 3.88 21.38 4.5C21.38 5.19 20.82 5.75 20.13 5.75H17V3.25Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 5.75H20.57C21.36 5.75 22 6.31 22 7C22 7.69 21.36 8.25 20.57 8.25H17V5.75Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.7598 8.25V9.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.7598 2V3.25" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.19 3.25H16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.19 8.25H16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8.5H13" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M6 16.5H8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M10.5 16.5H14.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 11.33V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89001C2 4.38001 2.89 3.5 6.44 3.5H13.28" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.4">
<path d="M17 3.25H20.13C20.82 3.25 21.38 3.88 21.38 4.5C21.38 5.19 20.82 5.75 20.13 5.75H17V3.25Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 5.75H20.57C21.36 5.75 22 6.31 22 7C22 7.69 21.36 8.25 20.57 8.25H17V5.75Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.7598 8.25V9.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.7598 2V3.25" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.19 3.25H16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.19 8.25H16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

{/if}
