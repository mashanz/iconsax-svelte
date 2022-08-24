<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 12C17 14.76 14.76 17 12 17V7C14.76 7 17 9.24 17 12Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22V17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.92999 19.82C4.72999 19.82 4.54002 19.74 4.40002 19.6C2.37002 17.57 1.25 14.87 1.25 12C1.25 6.07 6.07 1.25 12 1.25C14.87 1.25 17.57 2.37 19.6 4.4C19.74 4.54 19.82 4.73 19.82 4.93C19.82 5.13 19.74 5.32 19.6 5.46L5.46002 19.6C5.32002 19.74 5.12999 19.82 4.92999 19.82ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 14.22 3.53001 16.32 4.95001 17.99L17.99 4.95C16.32 3.53 14.22 2.75 12 2.75Z" fill={`${color}`}/>
<path d="M11.9997 22.7501C9.12969 22.7501 6.42972 21.6301 4.39972 19.6001C4.25972 19.4601 4.17969 19.2701 4.17969 19.0701C4.17969 18.8701 4.25972 18.6801 4.39972 18.5401L18.5397 4.40012C18.8297 4.11012 19.3097 4.11012 19.5997 4.40012C21.6297 6.43012 22.7497 9.13012 22.7497 12.0001C22.7497 17.9301 17.9297 22.7501 11.9997 22.7501ZM6.0097 19.0501C7.6797 20.4701 9.77969 21.2501 11.9997 21.2501C17.0997 21.2501 21.2497 17.1001 21.2497 12.0001C21.2497 9.78012 20.4697 7.68012 19.0497 6.01012L6.0097 19.0501Z" fill={`${color}`}/>
<path d="M13.4095 22.6502C13.2195 22.6502 13.0295 22.5802 12.8795 22.4302L7.21945 16.7702C6.92945 16.4802 6.92945 16.0002 7.21945 15.7102C7.50945 15.4202 7.98951 15.4202 8.27951 15.7102L13.9395 21.3702C14.2295 21.6602 14.2295 22.1402 13.9395 22.4302C13.7995 22.5802 13.6095 22.6502 13.4095 22.6502Z" fill={`${color}`}/>
<path d="M17.8705 20.0301C17.6805 20.0301 17.4905 19.9601 17.3405 19.8101L10.7605 13.2301C10.4705 12.9401 10.4705 12.4601 10.7605 12.1701C11.0505 11.8801 11.5305 11.8801 11.8205 12.1701L18.4005 18.7501C18.6905 19.0401 18.6905 19.5201 18.4005 19.8101C18.2505 19.9601 18.0605 20.0301 17.8705 20.0301Z" fill={`${color}`}/>
<path d="M21.1195 16.2201C20.9295 16.2201 20.7396 16.1501 20.5896 16.0001L14.2995 9.71011C14.0095 9.42011 14.0095 8.94012 14.2995 8.65012C14.5895 8.36012 15.0695 8.36012 15.3595 8.65012L21.6496 14.9401C21.9396 15.2301 21.9396 15.7101 21.6496 16.0001C21.5096 16.1401 21.3195 16.2201 21.1195 16.2201Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" fill={`${color}`}/>
<path d="M12 7V17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" fill={`${color}`}/>
<path d="M12 7V17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9693 11.86V16.39C11.9493 18.04 10.7193 18.44 9.5693 17.98C7.1993 17.03 5.5293 14.71 5.5293 12C5.5293 9.28999 7.1993 6.97 9.5693 6.01C10.7193 5.55 11.9493 5.95999 11.9693 7.59999" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.4">
<path d="M17 12C17 14.76 14.76 17 12 17V7C14.76 7 17 9.24 17 12Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22V17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

{/if}
