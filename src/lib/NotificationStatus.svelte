<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 13H12" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 17H16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 8.75C16.93 8.75 15.25 7.07 15.25 5C15.25 2.93 16.93 1.25 19 1.25C21.07 1.25 22.75 2.93 22.75 5C22.75 7.07 21.07 8.75 19 8.75ZM19 2.75C17.76 2.75 16.75 3.76 16.75 5C16.75 6.24 17.76 7.25 19 7.25C20.24 7.25 21.25 6.24 21.25 5C21.25 3.76 20.24 2.75 19 2.75Z" fill={`${color}`}/>
<path d="M12 13.75H7C6.59 13.75 6.25 13.41 6.25 13C6.25 12.59 6.59 12.25 7 12.25H12C12.41 12.25 12.75 12.59 12.75 13C12.75 13.41 12.41 13.75 12 13.75Z" fill={`${color}`}/>
<path d="M16 17.75H7C6.59 17.75 6.25 17.41 6.25 17C6.25 16.59 6.59 16.25 7 16.25H16C16.41 16.25 16.75 16.59 16.75 17C16.75 17.41 16.41 17.75 16 17.75Z" fill={`${color}`}/>
<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" fill={`${color}`}/>
<path d="M19.8 9.42C19.78 9.42 19.76 9.43 19.74 9.43C19.64 9.45 19.54 9.46 19.43 9.48C19.01 9.52 18.56 9.5 18.1 9.41C17.98 9.38 17.88 9.36 17.77 9.32C17.44 9.24 17.13 9.11 16.84 8.94C16.72 8.88 16.6 8.8 16.49 8.73C16.01 8.4 15.6 7.99 15.27 7.51C15.2 7.4 15.12 7.28 15.06 7.16C14.89 6.87 14.76 6.56 14.68 6.23C14.64 6.12 14.62 6.02 14.59 5.9C14.5 5.44 14.48 4.99 14.52 4.57C14.54 4.46 14.55 4.36 14.57 4.26C14.57 4.24 14.58 4.22 14.58 4.2C14.7 3.58 14.24 3 13.6 3H7.52C7.38 3 7.24 3.01 7.11 3.02C6.99 3.03 6.88 3.04 6.76 3.06C6.64 3.07 6.52 3.09 6.41 3.11C4 3.46 2.46 4.99 2.11 7.41C2.09 7.52 2.07 7.64 2.06 7.76C2.04 7.88 2.03 7.99 2.02 8.11C2.01 8.24 2 8.38 2 8.52V16.48C2 16.62 2.01 16.76 2.02 16.89C2.03 17.01 2.04 17.12 2.06 17.24C2.07 17.36 2.09 17.48 2.11 17.59C2.46 20.01 4 21.54 6.41 21.89C6.52 21.91 6.64 21.93 6.76 21.94C6.88 21.96 6.99 21.97 7.11 21.98C7.24 21.99 7.38 22 7.52 22H15.48C15.62 22 15.76 21.99 15.89 21.98C16.01 21.97 16.12 21.96 16.24 21.94C16.36 21.93 16.48 21.91 16.59 21.89C19 21.54 20.54 20.01 20.89 17.59C20.91 17.48 20.93 17.36 20.94 17.24C20.96 17.12 20.97 17.01 20.98 16.89C20.99 16.76 21 16.62 21 16.48V10.4C21 9.76 20.42 9.3 19.8 9.42ZM6.75 12.5H11.75C12.16 12.5 12.5 12.84 12.5 13.25C12.5 13.66 12.16 14 11.75 14H6.75C6.34 14 6 13.66 6 13.25C6 12.84 6.34 12.5 6.75 12.5ZM15.75 18H6.75C6.34 18 6 17.66 6 17.25C6 16.84 6.34 16.5 6.75 16.5H15.75C16.16 16.5 16.5 16.84 16.5 17.25C16.5 17.66 16.16 18 15.75 18Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" fill={`${color}`}/>
<path opacity="0.4" d="M19 9.5C16.52 9.5 14.5 7.48 14.5 5C14.5 4.28 14.69 3.61 14.99 3H7.52C4.07 3 2 5.06 2 8.52V16.47C2 19.94 4.07 22 7.52 22H15.47C18.93 22 20.99 19.94 20.99 16.48V9.01C20.39 9.31 19.72 9.5 19 9.5Z" fill={`${color}`}/>
<path d="M11.75 14H6.75C6.34 14 6 13.66 6 13.25C6 12.84 6.34 12.5 6.75 12.5H11.75C12.16 12.5 12.5 12.84 12.5 13.25C12.5 13.66 12.16 14 11.75 14Z" fill={`${color}`}/>
<path d="M15.75 18H6.75C6.34 18 6 17.66 6 17.25C6 16.84 6.34 16.5 6.75 16.5H15.75C16.16 16.5 16.5 16.84 16.5 17.25C16.5 17.66 16.16 18 15.75 18Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 13H12" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 17H16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 2C17.34 2 16 3.34 16 5C16 6.66 17.34 8 19 8C20.66 8 22 6.66 22 5C22 4.64 21.94 4.3 21.82 3.99" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 14.97V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 2H9C4 2 2 4 2 9V11" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M7 13H12" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M7 17H16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
