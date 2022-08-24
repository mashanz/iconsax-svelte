<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 17.0801H15.65" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.97 17.0801H6.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 13.3201H11.97" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.27 13.3201H6.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={`${color}`}/>
<path d="M17.5004 17.8301H15.6504C15.2404 17.8301 14.9004 17.4901 14.9004 17.0801C14.9004 16.6701 15.2404 16.3301 15.6504 16.3301H17.5004C17.9104 16.3301 18.2504 16.6701 18.2504 17.0801C18.2504 17.4901 17.9104 17.8301 17.5004 17.8301Z" fill={`${color}`}/>
<path d="M12.97 17.8301H6.5C6.09 17.8301 5.75 17.4901 5.75 17.0801C5.75 16.6701 6.09 16.3301 6.5 16.3301H12.97C13.38 16.3301 13.72 16.6701 13.72 17.0801C13.72 17.4901 13.39 17.8301 12.97 17.8301Z" fill={`${color}`}/>
<path d="M17.5007 14.0698H11.9707C11.5607 14.0698 11.2207 13.7298 11.2207 13.3198C11.2207 12.9098 11.5607 12.5698 11.9707 12.5698H17.5007C17.9107 12.5698 18.2507 12.9098 18.2507 13.3198C18.2507 13.7298 17.9107 14.0698 17.5007 14.0698Z" fill={`${color}`}/>
<path d="M9.27 14.0698H6.5C6.09 14.0698 5.75 13.7298 5.75 13.3198C5.75 12.9098 6.09 12.5698 6.5 12.5698H9.27C9.68 12.5698 10.02 12.9098 10.02 13.3198C10.02 13.7298 9.68 14.0698 9.27 14.0698Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM6.5 12.57H9.27C9.68 12.57 10.02 12.91 10.02 13.32C10.02 13.73 9.68 14.07 9.27 14.07H6.5C6.09 14.07 5.75 13.73 5.75 13.32C5.75 12.91 6.09 12.57 6.5 12.57ZM12.97 17.83H6.5C6.09 17.83 5.75 17.49 5.75 17.08C5.75 16.67 6.09 16.33 6.5 16.33H12.97C13.38 16.33 13.72 16.67 13.72 17.08C13.72 17.49 13.39 17.83 12.97 17.83ZM17.5 17.83H15.65C15.24 17.83 14.9 17.49 14.9 17.08C14.9 16.67 15.24 16.33 15.65 16.33H17.5C17.91 16.33 18.25 16.67 18.25 17.08C18.25 17.49 17.91 17.83 17.5 17.83ZM17.5 14.07H11.97C11.56 14.07 11.22 13.73 11.22 13.32C11.22 12.91 11.56 12.57 11.97 12.57H17.5C17.91 12.57 18.25 12.91 18.25 13.32C18.25 13.73 17.91 14.07 17.5 14.07Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5004 17.8301H15.6504C15.2404 17.8301 14.9004 17.4901 14.9004 17.0801C14.9004 16.6701 15.2404 16.3301 15.6504 16.3301H17.5004C17.9104 16.3301 18.2504 16.6701 18.2504 17.0801C18.2504 17.4901 17.9104 17.8301 17.5004 17.8301Z" fill={`${color}`}/>
<path d="M12.97 17.8301H6.5C6.09 17.8301 5.75 17.4901 5.75 17.0801C5.75 16.6701 6.09 16.3301 6.5 16.3301H12.97C13.38 16.3301 13.72 16.6701 13.72 17.0801C13.72 17.4901 13.39 17.8301 12.97 17.8301Z" fill={`${color}`}/>
<path d="M17.5007 14.0698H11.9707C11.5607 14.0698 11.2207 13.7298 11.2207 13.3198C11.2207 12.9098 11.5607 12.5698 11.9707 12.5698H17.5007C17.9107 12.5698 18.2507 12.9098 18.2507 13.3198C18.2507 13.7298 17.9107 14.0698 17.5007 14.0698Z" fill={`${color}`}/>
<path d="M9.27 14.0698H6.5C6.09 14.0698 5.75 13.7298 5.75 13.3198C5.75 12.9098 6.09 12.5698 6.5 12.5698H9.27C9.68 12.5698 10.02 12.9098 10.02 13.3198C10.02 13.7298 9.68 14.0698 9.27 14.0698Z" fill={`${color}`}/>
<path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5004 17.0801H15.6504" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.97 17.0801H6.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5007 13.3201H11.9707" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.27 13.3201H6.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M17.5004 17.0801H15.6504" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M12.97 17.0801H6.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M17.5007 13.3198H11.9707" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M9.27 13.3198H6.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
