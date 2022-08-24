<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21H19" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 3V10C5 13.87 8.13 17 12 17C15.87 17 19 13.87 19 10V3" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21.75H5C4.59 21.75 4.25 21.41 4.25 21C4.25 20.59 4.59 20.25 5 20.25H19C19.41 20.25 19.75 20.59 19.75 21C19.75 21.41 19.41 21.75 19 21.75Z" fill={`${color}`}/>
<path d="M12 17.75C7.73 17.75 4.25 14.27 4.25 10V3C4.25 2.59 4.59 2.25 5 2.25C5.41 2.25 5.75 2.59 5.75 3V10C5.75 13.45 8.55 16.25 12 16.25C15.45 16.25 18.25 13.45 18.25 10V3C18.25 2.59 18.59 2.25 19 2.25C19.41 2.25 19.75 2.59 19.75 3V10C19.75 14.27 16.27 17.75 12 17.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C7.61 2 7.41 2.01 7.22 2.03C3.94 2.24 2 4.37 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C4.95 21.55 5.99 21.9 7.22 21.98C7.41 21.99 7.61 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13ZM16.83 18.96H7.17C6.76 18.96 6.42 18.62 6.42 18.21C6.42 17.8 6.76 17.46 7.17 17.46H16.84C17.25 17.46 17.59 17.8 17.59 18.21C17.59 18.62 17.25 18.96 16.83 18.96ZM17.58 10.62C17.58 13.7 15.08 16.2 12 16.2C8.92 16.2 6.42 13.7 6.42 10.62V5.79C6.42 5.38 6.76 5.04 7.17 5.04C7.58 5.04 7.92 5.38 7.92 5.79V10.62C7.92 12.87 9.75 14.7 12 14.7C14.25 14.7 16.08 12.87 16.08 10.62V5.79C16.08 5.38 16.42 5.04 16.83 5.04C17.24 5.04 17.58 5.38 17.58 5.79V10.62Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z" fill={`${color}`}/>
<path d="M16.8299 18.96H7.16992C6.75992 18.96 6.41992 18.62 6.41992 18.21C6.41992 17.8 6.75992 17.46 7.16992 17.46H16.8399C17.2499 17.46 17.5899 17.8 17.5899 18.21C17.5899 18.62 17.2499 18.96 16.8299 18.96Z" fill={`${color}`}/>
<path d="M11.9999 16.2C8.91992 16.2 6.41992 13.7 6.41992 10.62V5.79004C6.41992 5.38004 6.75992 5.04004 7.16992 5.04004C7.57992 5.04004 7.91992 5.38004 7.91992 5.79004V10.62C7.91992 12.87 9.74992 14.7 11.9999 14.7C14.2499 14.7 16.0799 12.87 16.0799 10.62V5.79004C16.0799 5.38004 16.4199 5.04004 16.8299 5.04004C17.2399 5.04004 17.5799 5.38004 17.5799 5.79004V10.62C17.5799 13.7 15.0799 16.2 11.9999 16.2Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21H19" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17C15.87 17 19 13.87 19 10V3" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 3V10C5 12.17 5.98 14.1 7.53 15.38" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M5 21H19" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 3V10C5 13.87 8.13 17 12 17C15.87 17 19 13.87 19 10V3" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
