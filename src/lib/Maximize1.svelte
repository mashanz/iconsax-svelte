<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.98V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 11L18.01 5.97998H14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.01 5.97998V9.98998" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9V6.5C1.25 3.61 3.61 1.25 6.5 1.25H9C9.41 1.25 9.75 1.59 9.75 2C9.75 2.41 9.41 2.75 9 2.75H6.5C4.43 2.75 2.75 4.43 2.75 6.5V9C2.75 9.41 2.41 9.75 2 9.75Z" fill={`${color}`}/>
<path d="M22 9.75C21.59 9.75 21.25 9.41 21.25 9V6.5C21.25 4.43 19.57 2.75 17.5 2.75H15C14.59 2.75 14.25 2.41 14.25 2C14.25 1.59 14.59 1.25 15 1.25H17.5C20.39 1.25 22.75 3.61 22.75 6.5V9C22.75 9.41 22.41 9.75 22 9.75Z" fill={`${color}`}/>
<path d="M17.5 22.75H16C15.59 22.75 15.25 22.41 15.25 22C15.25 21.59 15.59 21.25 16 21.25H17.5C19.57 21.25 21.25 19.57 21.25 17.5V16C21.25 15.59 21.59 15.25 22 15.25C22.41 15.25 22.75 15.59 22.75 16V17.5C22.75 20.39 20.39 22.75 17.5 22.75Z" fill={`${color}`}/>
<path d="M9 22.75H6.5C3.61 22.75 1.25 20.39 1.25 17.5V15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15V17.5C2.75 19.57 4.43 21.25 6.5 21.25H9C9.41 21.25 9.75 21.59 9.75 22C9.75 22.41 9.41 22.75 9 22.75Z" fill={`${color}`}/>
<path d="M18 14.75C17.59 14.75 17.25 14.41 17.25 14V12.75H6.75V14C6.75 14.41 6.41 14.75 6 14.75C5.59 14.75 5.25 14.41 5.25 14V10C5.25 9.59 5.59 9.25 6 9.25C6.41 9.25 6.75 9.59 6.75 10V11.25H17.25V10C17.25 9.59 17.59 9.25 18 9.25C18.41 9.25 18.75 9.59 18.75 10V14C18.75 14.41 18.41 14.75 18 14.75Z" fill={`${color}`}/>
<path d="M14 18.75H10C9.59 18.75 9.25 18.41 9.25 18C9.25 17.59 9.59 17.25 10 17.25H11.25V6.75H10C9.59 6.75 9.25 6.41 9.25 6C9.25 5.59 9.59 5.25 10 5.25H14C14.41 5.25 14.75 5.59 14.75 6C14.75 6.41 14.41 6.75 14 6.75H12.75V17.25H14C14.41 17.25 14.75 17.59 14.75 18C14.75 18.41 14.41 18.75 14 18.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18.75 14C18.75 14.41 18.41 14.75 18 14.75C17.59 14.75 17.25 14.41 17.25 14V12.75H12.75V17.25H14C14.41 17.25 14.75 17.59 14.75 18C14.75 18.41 14.41 18.75 14 18.75H10C9.59 18.75 9.25 18.41 9.25 18C9.25 17.59 9.59 17.25 10 17.25H11.25V12.75H6.75V14C6.75 14.41 6.41 14.75 6 14.75C5.59 14.75 5.25 14.41 5.25 14V10C5.25 9.59 5.59 9.25 6 9.25C6.41 9.25 6.75 9.59 6.75 10V11.25H11.25V6.75H10C9.59 6.75 9.25 6.41 9.25 6C9.25 5.59 9.59 5.25 10 5.25H14C14.41 5.25 14.75 5.59 14.75 6C14.75 6.41 14.41 6.75 14 6.75H12.75V11.25H17.25V10C17.25 9.59 17.59 9.25 18 9.25C18.41 9.25 18.75 9.59 18.75 10V14Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.48 2H8.52C5.07 2 3 4.06 3 7.52V15.47C3 18.94 5.07 21 8.52 21H16.47C19.93 21 21.99 18.94 21.99 15.48V7.52C22 4.06 19.93 2 16.48 2Z" fill={`${color}`}/>
<path d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z" fill={`${color}`}/>
<path d="M18.7495 5.95C18.7495 5.86 18.7295 5.78 18.6995 5.69C18.6995 5.68 18.6895 5.67 18.6895 5.67C18.6595 5.6 18.6095 5.53 18.5595 5.48C18.5395 5.46 18.5195 5.44 18.4995 5.43C18.4495 5.39 18.3995 5.35 18.3495 5.33C18.3295 5.32 18.2995 5.31 18.2795 5.3C18.1995 5.27 18.1095 5.25 18.0195 5.25H13.9995C13.5895 5.25 13.2495 5.59 13.2495 6C13.2495 6.41 13.5795 6.72 13.9995 6.72H16.2095L12.4695 10.47C12.1795 10.76 12.1795 11.24 12.4695 11.53C12.6195 11.68 12.8095 11.75 12.9995 11.75C13.1895 11.75 13.3795 11.68 13.5295 11.53L17.2595 7.79V9.99C17.2595 10.4 17.5995 10.74 18.0095 10.74C18.4195 10.74 18.7595 10.4 18.7595 9.99V5.97C18.7595 5.96 18.7595 5.96 18.7495 5.95Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 12V10M16.95 12H18H16.95ZM6 12H12H14H6ZM6 12V10V12ZM6 12V14V12ZM18 12V14V12Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6H14M12 18V6V18ZM12 18H14H12ZM12 18H10H12ZM12 6H10H12Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.98V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.4">
<path d="M13 11.0005L18.01 5.98047H14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.0098 5.98047V9.99047" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path opacity="0.4" d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
