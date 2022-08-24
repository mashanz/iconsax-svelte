<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2 21.37C12.54 22.25 11.46 22.25 10.8 21.37L9.29999 19.37C9.12999 19.15 8.77 18.97 8.5 18.97H8C4 18.97 2 17.97 2 12.97V7.96997C2 3.96997 4 1.96997 8 1.96997H16C20 1.96997 22 3.96997 22 7.96997V12.97" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22L21 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.9965 11H16.0054" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9955 11H12.0045" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.99451 11H8.00349" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22.7797C11.31 22.7797 10.66 22.4297 10.2 21.8197L8.70001 19.8197C8.67001 19.7797 8.54999 19.7197 8.48999 19.7197H8C3.83 19.7197 1.25 18.5897 1.25 12.9697V7.96973C1.25 3.54973 3.58 1.21973 8 1.21973H16C20.42 1.21973 22.75 3.54973 22.75 7.96973V12.9697C22.75 13.3797 22.41 13.7197 22 13.7197C21.59 13.7197 21.25 13.3797 21.25 12.9697V7.96973C21.25 4.38973 19.58 2.71973 16 2.71973H8C4.42 2.71973 2.75 4.38973 2.75 7.96973V12.9697C2.75 17.4897 4.3 18.2197 8 18.2197H8.5C9.01 18.2197 9.59999 18.5097 9.89999 18.9197L11.4 20.9197C11.75 21.3797 12.25 21.3797 12.6 20.9197C12.85 20.5897 13.32 20.5197 13.65 20.7697C13.98 21.0197 14.05 21.4897 13.8 21.8197C13.34 22.4297 12.69 22.7797 12 22.7797Z" fill={`${color}`}/>
<path d="M12 11.9697C11.44 11.9697 11 11.5197 11 10.9697C11 10.4197 11.45 9.96973 12 9.96973C12.55 9.96973 13 10.4197 13 10.9697C13 11.5197 12.56 11.9697 12 11.9697Z" fill={`${color}`}/>
<path d="M16 11.9697C15.44 11.9697 15 11.5197 15 10.9697C15 10.4197 15.45 9.96973 16 9.96973C16.55 9.96973 17 10.4197 17 10.9697C17 11.5197 16.56 11.9697 16 11.9697Z" fill={`${color}`}/>
<path d="M8 11.9697C7.44 11.9697 7 11.5197 7 10.9697C7 10.4197 7.45 9.96973 8 9.96973C8.55 9.96973 9 10.4197 9 10.9697C9 11.5197 8.56 11.9697 8 11.9697Z" fill={`${color}`}/>
<path d="M18.2 22.15C16.02 22.15 14.25 20.38 14.25 18.2C14.25 16.02 16.02 14.25 18.2 14.25C20.38 14.25 22.15 16.02 22.15 18.2C22.15 20.38 20.38 22.15 18.2 22.15ZM18.2 15.75C16.85 15.75 15.75 16.85 15.75 18.2C15.75 19.55 16.85 20.65 18.2 20.65C19.55 20.65 20.65 19.55 20.65 18.2C20.65 16.85 19.55 15.75 18.2 15.75Z" fill={`${color}`}/>
<path d="M21.9995 22.7499C21.8095 22.7499 21.6195 22.6799 21.4695 22.5299L20.4695 21.5299C20.1795 21.2399 20.1795 20.7599 20.4695 20.4699C20.7595 20.1799 21.2395 20.1799 21.5295 20.4699L22.5295 21.4699C22.8195 21.7599 22.8195 22.2399 22.5295 22.5299C22.3795 22.6799 22.1895 22.7499 21.9995 22.7499Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 2H7C4.24 2 2 4.23 2 6.98V12.96V13.96C2 16.71 4.24 18.94 7 18.94H8.5C8.77 18.94 9.13 19.12 9.3 19.34L10.8 21.33C11.46 22.21 12.54 22.21 13.2 21.33L14.7 19.34C14.89 19.09 15.19 18.94 15.5 18.94H17C19.76 18.94 22 16.71 22 13.96V6.98C22 4.23 19.76 2 17 2ZM15.66 14.53C15.51 14.68 15.32 14.75 15.13 14.75C14.94 14.75 14.75 14.68 14.6 14.53L13.86 13.79C13.28 14.17 12.58 14.4 11.83 14.4C9.79 14.4 8.13 12.74 8.13 10.7C8.13 8.66 9.78 7 11.83 7C13.88 7 15.53 8.66 15.53 10.7C15.53 11.45 15.3 12.15 14.92 12.73L15.66 13.47C15.95 13.76 15.95 14.24 15.66 14.53Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.53 21.47L21.79 20.73C22.17 20.15 22.4 19.45 22.4 18.7C22.4 16.66 20.74 15 18.7 15C16.66 15 15 16.66 15 18.7C15 20.74 16.66 22.4 18.7 22.4C19.45 22.4 20.15 22.17 20.73 21.79L21.47 22.53C21.62 22.68 21.81 22.75 22 22.75C22.19 22.75 22.38 22.68 22.53 22.53C22.82 22.24 22.82 21.76 22.53 21.47Z" fill={`${color}`}/>
<path opacity="0.4" d="M2 12.9698V6.98977C2 4.23977 4.24 2.00977 7 2.00977H17C19.76 2.00977 22 4.23977 22 6.99977V13.9798C22 16.7298 19.76 18.9598 17 18.9598H15.5C15.19 18.9598 14.89 19.1098 14.7 19.3598L13.2 21.3498C12.54 22.2298 11.46 22.2298 10.8 21.3498L9.29999 19.3598C9.12999 19.1398 8.78 18.9598 8.5 18.9598H7C4.24 18.9598 2 16.7298 2 13.9798V12.9698Z" fill={`${color}`}/>
<path d="M12.0002 12C11.4402 12 10.9902 11.55 10.9902 11C10.9902 10.45 11.4402 10 11.9902 10C12.5402 10 12.9902 10.45 12.9902 11C12.9902 11.55 12.5602 12 12.0002 12Z" fill={`${color}`}/>
<path d="M16.0002 12C15.4402 12 14.9902 11.55 14.9902 11C14.9902 10.45 15.4402 10 15.9902 10C16.5402 10 16.9902 10.45 16.9902 11C16.9902 11.55 16.5602 12 16.0002 12Z" fill={`${color}`}/>
<path d="M8.00024 12C7.44024 12 6.99023 11.55 6.99023 11C6.99023 10.45 7.44023 10 7.99023 10C8.54023 10 8.99023 10.45 8.99023 11C8.99023 11.55 8.56024 12 8.00024 12Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2 21.37C12.54 22.25 11.46 22.25 10.8 21.37L9.29999 19.37C9.12999 19.15 8.77 18.97 8.5 18.97H8C4 18.97 2 17.97 2 12.97V7.96997C2 3.96997 4 1.96997 8 1.96997H16C20 1.96997 22 3.96997 22 7.96997V12.97" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.4 18.2C21.4 19.97 19.97 21.4 18.2 21.4C16.43 21.4 15 19.97 15 18.2C15 16.43 16.43 15 18.2 15" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22L21 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.9965 11H16.0054" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9945 11H12.0035" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.99451 11H8.00349" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2 21.3702C12.54 22.2502 11.46 22.2502 10.8 21.3702L9.29999 19.3702C9.12999 19.1502 8.77 18.9702 8.5 18.9702H8C4 18.9702 2 17.9702 2 12.9702V7.97021C2 3.97021 4 1.97021 8 1.97021H16C20 1.97021 22 3.97021 22 7.97021V12.9702" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.4">
<path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22L21 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path d="M15.9965 11H16.0054" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9945 11H12.0035" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.99451 11H8.00349" stroke={`${color}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
