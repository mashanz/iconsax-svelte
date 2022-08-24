<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.25 8.29004C14.26 5.63004 9.74 5.63004 6.75 8.29004L8.93 11.79C10.68 10.23 13.32 10.23 15.07 11.79L17.25 8.29004Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 22.75H10C4.57 22.75 2.25 20.43 2.25 15V9C2.25 3.57 4.57 1.25 10 1.25H14C19.43 1.25 21.75 3.57 21.75 9V15C21.75 20.43 19.43 22.75 14 22.75ZM10 2.75C5.39 2.75 3.75 4.39 3.75 9V15C3.75 19.61 5.39 21.25 10 21.25H14C18.61 21.25 20.25 19.61 20.25 15V9C20.25 4.39 18.61 2.75 14 2.75H10Z" fill={`${color}`}/>
<path d="M15.0696 12.5401C14.8896 12.5401 14.7096 12.4701 14.5696 12.3501C13.1096 11.0501 10.8896 11.0501 9.42963 12.3501C9.26963 12.5001 9.04962 12.5601 8.81962 12.5301C8.59962 12.5001 8.40962 12.3701 8.28962 12.1801L6.10963 8.6801C5.91963 8.3701 5.97962 7.9701 6.24962 7.7201C9.52962 4.8101 14.4696 4.8101 17.7496 7.7201C18.0196 7.9601 18.0796 8.3701 17.8896 8.6801L15.7096 12.1801C15.5896 12.3701 15.3996 12.4901 15.1796 12.5301C15.1396 12.5301 15.0996 12.5401 15.0696 12.5401ZM11.9996 9.8701C12.9996 9.8701 13.9896 10.1501 14.8596 10.7001L16.2596 8.4501C13.7296 6.5701 10.2596 6.5701 7.72962 8.4501L9.12963 10.7001C10.0096 10.1401 10.9996 9.8701 11.9996 9.8701Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2H8C5 2 3 4 3 7V17C3 20 5 22 8 22H16C19 22 21 20 21 17V7C21 4 19 2 16 2ZM17.57 8.48L15.39 11.98C15.33 12.07 15.23 12.14 15.13 12.15C15.11 12.15 15.09 12.15 15.08 12.15C14.99 12.15 14.9 12.12 14.83 12.06C13.22 10.63 10.8 10.63 9.19 12.06C9.11 12.13 9 12.17 8.89 12.15C8.78 12.13 8.68 12.07 8.63 11.98L6.45 8.48C6.33 8.33 6.36 8.13 6.5 8C9.63 5.21 14.36 5.21 17.5 8C17.64 8.13 17.67 8.33 17.57 8.48Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M8 22H16C19 22 21 20 21 17V7C21 4 19 2 16 2H8C5 2 3 4 3 7V17C3 20 5 22 8 22Z" fill={`${color}`}/>
<path d="M17.5 7.99997C14.37 5.20997 9.63998 5.20997 6.49998 7.99997C6.35998 8.12997 6.32998 8.32997 6.42998 8.47997L8.60998 11.98C8.66998 12.07 8.76998 12.14 8.86998 12.15C8.97998 12.17 9.08998 12.13 9.16998 12.06C10.78 10.63 13.2 10.63 14.81 12.06C14.88 12.12 14.97 12.15 15.06 12.15C15.08 12.15 15.1 12.15 15.11 12.15C15.22 12.13 15.32 12.07 15.37 11.98L17.55 8.47997C17.67 8.32997 17.64 8.12997 17.5 7.99997Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12.98V15C3 20 5 22 10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.25 8.28992C14.26 5.62992 9.74 5.62992 6.75 8.28992L8.93 11.7899C10.68 10.2299 13.32 10.2299 15.07 11.7899" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M17.25 8.28992C14.26 5.62992 9.74 5.62992 6.75 8.28992L8.93 11.7899C10.68 10.2299 13.32 10.2299 15.07 11.7899L17.25 8.28992Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
