<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.89001 5.82996V7.82996" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.11 5.82996V7.82996" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.53003 10.14H16.47" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5 17.6699H10.5C8 17.6699 6.5 15.8699 6.5 13.6699V10.6699C6.5 8.46992 8 6.66992 10.5 6.66992H13.5C16 6.66992 17.5 8.46992 17.5 10.6699V13.6699C17.5 15.8699 16 17.6699 13.5 17.6699Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill={`${color}`}/>
<path d="M9.89062 8.58008C9.48063 8.58008 9.14062 8.24008 9.14062 7.83008V5.83008C9.14062 5.42008 9.48063 5.08008 9.89062 5.08008C10.3006 5.08008 10.6406 5.42008 10.6406 5.83008V7.83008C10.6406 8.24008 10.3106 8.58008 9.89062 8.58008Z" fill={`${color}`}/>
<path d="M14.1094 8.58008C13.6994 8.58008 13.3594 8.24008 13.3594 7.83008V5.83008C13.3594 5.42008 13.6994 5.08008 14.1094 5.08008C14.5194 5.08008 14.8594 5.42008 14.8594 5.83008V7.83008C14.8594 8.24008 14.5194 8.58008 14.1094 8.58008Z" fill={`${color}`}/>
<path d="M16.4695 10.8901H7.51953C7.10953 10.8901 6.76953 10.5501 6.76953 10.1401C6.76953 9.73014 7.10953 9.39014 7.51953 9.39014H16.4695C16.8795 9.39014 17.2195 9.73014 17.2195 10.1401C17.2195 10.5501 16.8895 10.8901 16.4695 10.8901Z" fill={`${color}`}/>
<path d="M13.5 18.4199H10.5C7.75 18.4199 5.75 16.4199 5.75 13.6699V10.6699C5.75 7.91992 7.75 5.91992 10.5 5.91992H13.5C16.25 5.91992 18.25 7.91992 18.25 10.6699V13.6699C18.25 16.4199 16.25 18.4199 13.5 18.4199ZM10.5 7.41992C8.25 7.41992 7.25 9.04992 7.25 10.6699V13.6699C7.25 15.2899 8.25 16.9199 10.5 16.9199H13.5C15.75 16.9199 16.75 15.2899 16.75 13.6699V10.6699C16.75 9.04992 15.75 7.41992 13.5 7.41992H10.5Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM6.85 9.44C7.27 8.47 8.06 7.72 9.15 7.38V6.58C9.15 6.17 9.49 5.83 9.9 5.83C10.31 5.83 10.65 6.17 10.65 6.58V7.17H13.36V6.58C13.36 6.17 13.7 5.83 14.11 5.83C14.52 5.83 14.86 6.17 14.86 6.58V7.37C15.95 7.71 16.74 8.46 17.16 9.43C17.3 9.76 17.06 10.14 16.7 10.14H7.31C6.95 10.14 6.71 9.77 6.85 9.44ZM17.5 14.17C17.5 16.37 16 18.17 13.5 18.17H10.5C8 18.17 6.5 16.37 6.5 14.17V11.64C6.5 11.36 6.72 11.14 7 11.14H17C17.28 11.14 17.5 11.36 17.5 11.64V14.17Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={`${color}`}/>
<path d="M17.1493 9.44009C16.7293 8.47009 15.9393 7.7201 14.8493 7.3801V6.59009C14.8493 6.18009 14.5093 5.84009 14.0993 5.84009C13.6893 5.84009 13.3493 6.18009 13.3493 6.59009V7.18008H10.6393V6.59009C10.6393 6.18009 10.2993 5.84009 9.88933 5.84009C9.47933 5.84009 9.13933 6.18009 9.13933 6.59009V7.3801C8.04933 7.7201 7.25931 8.47009 6.83931 9.44009C6.69931 9.77009 6.93931 10.1501 7.29931 10.1501H16.6693C17.0493 10.1401 17.2893 9.77009 17.1493 9.44009Z" fill={`${color}`}/>
<path d="M17 11.1401C17.28 11.1401 17.5 11.3601 17.5 11.6401V14.1701C17.5 16.3701 16 18.1701 13.5 18.1701H10.5C8 18.1701 6.5 16.3701 6.5 14.1701V11.6401C6.5 11.3601 6.72 11.1401 7 11.1401H17Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.89062 5.83008V7.83008" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1094 5.83008V7.83008" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5293 10.1401H16.4693" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5 17.6702H10.5C8 17.6702 6.5 15.8702 6.5 13.6702V10.6702C6.5 8.47017 8 6.67017 10.5 6.67017H13.5C16 6.67017 17.5 8.47017 17.5 10.6702V13.6702C17.5 15.8702 16 17.6702 13.5 17.6702Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.30001 7.97 2.85001" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.4">
<path d="M9.89062 5.83008V7.83008" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.1094 5.83008V7.83008" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5293 10.1401H16.4693" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5 17.6699H10.5C8 17.6699 6.5 15.8699 6.5 13.6699V10.6699C6.5 8.46992 8 6.66992 10.5 6.66992H13.5C16 6.66992 17.5 8.46992 17.5 10.6699V13.6699C17.5 15.8699 16 17.6699 13.5 17.6699Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

{/if}
