<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 16V6.5C19 5.4 18.1 4.5 17 4.5H12.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2L12 4.5L15 7" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 9V16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.25 8.5C7.04493 8.5 8.5 7.04493 8.5 5.25C8.5 3.45507 7.04493 2 5.25 2C3.45507 2 2 3.45507 2 5.25C2 7.04493 3.45507 8.5 5.25 8.5Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 16.75C18.59 16.75 18.25 16.41 18.25 16V6.5C18.25 5.81 17.69 5.25 17 5.25H12.5C12.09 5.25 11.75 4.91 11.75 4.5C11.75 4.09 12.09 3.75 12.5 3.75H17C18.52 3.75 19.75 4.98 19.75 6.5V16C19.75 16.41 19.41 16.75 19 16.75Z" fill={`${color}`}/>
<path d="M15 7.74993C14.83 7.74993 14.66 7.68993 14.52 7.57993L11.52 5.07993C11.35 4.93993 11.25 4.72993 11.25 4.49993C11.25 4.26993 11.35 4.06993 11.52 3.91993L14.52 1.41993C14.84 1.14993 15.31 1.19993 15.58 1.51993C15.85 1.83993 15.8 2.30993 15.48 2.57993L13.17 4.49993L15.48 6.41993C15.8 6.68993 15.84 7.15992 15.58 7.47992C15.43 7.65992 15.21 7.74993 15 7.74993Z" fill={`${color}`}/>
<path d="M5 16.75C4.59 16.75 4.25 16.41 4.25 16V9C4.25 8.59 4.59 8.25 5 8.25C5.41 8.25 5.75 8.59 5.75 9V16C5.75 16.41 5.41 16.75 5 16.75Z" fill={`${color}`}/>
<path d="M5.25 9.25C3.04 9.25 1.25 7.46 1.25 5.25C1.25 3.04 3.04 1.25 5.25 1.25C7.46 1.25 9.25 3.04 9.25 5.25C9.25 7.46 7.46 9.25 5.25 9.25ZM5.25 2.75C3.87 2.75 2.75 3.87 2.75 5.25C2.75 6.63 3.87 7.75 5.25 7.75C6.63 7.75 7.75 6.63 7.75 5.25C7.75 3.87 6.63 2.75 5.25 2.75Z" fill={`${color}`}/>
<path d="M5 22.75C2.93 22.75 1.25 21.07 1.25 19C1.25 16.93 2.93 15.25 5 15.25C7.07 15.25 8.75 16.93 8.75 19C8.75 21.07 7.07 22.75 5 22.75ZM5 16.75C3.76 16.75 2.75 17.76 2.75 19C2.75 20.24 3.76 21.25 5 21.25C6.24 21.25 7.25 20.24 7.25 19C7.25 17.76 6.24 16.75 5 16.75Z" fill={`${color}`}/>
<path d="M19 22.75C16.93 22.75 15.25 21.07 15.25 19C15.25 16.93 16.93 15.25 19 15.25C21.07 15.25 22.75 16.93 22.75 19C22.75 21.07 21.07 22.75 19 22.75ZM19 16.75C17.76 16.75 16.75 17.76 16.75 19C16.75 20.24 17.76 21.25 19 21.25C20.24 21.25 21.25 20.24 21.25 19C21.25 17.76 20.24 16.75 19 16.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.75 16.11V7.89C7.04 7.56 8 6.4 8 5C8 3.34 6.66 2 5 2C3.34 2 2 3.34 2 5C2 6.4 2.96 7.56 4.25 7.89V16.1C2.96 16.44 2 17.6 2 19C2 20.66 3.34 22 5 22C6.66 22 8 20.66 8 19C8 17.6 7.04 16.44 5.75 16.11Z" fill={`${color}`}/>
<path d="M19.75 16.1107V6.50066C19.75 4.98066 18.52 3.75066 17 3.75066H14.07L15.48 2.58066C15.8 2.31066 15.84 1.84066 15.58 1.52066C15.31 1.20066 14.84 1.16066 14.52 1.42066L11.52 3.92066C11.35 4.06066 11.25 4.27066 11.25 4.50066C11.25 4.73066 11.35 4.93066 11.52 5.08066L14.52 7.58066C14.66 7.70066 14.83 7.75066 15 7.75066C15.21 7.75066 15.43 7.66066 15.58 7.48066C15.85 7.16066 15.8 6.69066 15.48 6.42066L14.07 5.25066H17C17.69 5.25066 18.25 5.81066 18.25 6.50066V16.1107C16.96 16.4407 16 17.6007 16 19.0007C16 20.6607 17.34 22.0007 19 22.0007C20.66 22.0007 22 20.6607 22 19.0007C22 17.6007 21.04 16.4407 19.75 16.1107Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M5.75 16.1098V7.89977C7.04 7.56977 8 6.39977 8 5.00977C8 3.34977 6.66 2.00977 5 2.00977C3.34 2.00977 2 3.34977 2 5.00977C2 6.40977 2.96 7.56977 4.25 7.89977V16.1098C2.96 16.4398 2 17.6098 2 18.9998C2 20.6598 3.34 21.9998 5 21.9998C6.66 21.9998 8 20.6598 8 18.9998C8 17.5998 7.04 16.4398 5.75 16.1098Z" fill={`${color}`}/>
<path d="M19.75 16.1102V6.50017C19.75 4.98018 18.52 3.75017 17 3.75017H14.07L15.48 2.58018C15.8 2.31018 15.84 1.84018 15.58 1.52018C15.31 1.20018 14.84 1.16017 14.52 1.42017L11.52 3.92017C11.35 4.06017 11.25 4.27017 11.25 4.50017C11.25 4.73017 11.35 4.93018 11.52 5.08018L14.52 7.58018C14.66 7.70018 14.83 7.75017 15 7.75017C15.21 7.75017 15.43 7.66017 15.58 7.48017C15.85 7.16017 15.8 6.69017 15.48 6.42017L14.07 5.25017H17C17.69 5.25017 18.25 5.81017 18.25 6.50017V16.1102C16.96 16.4402 16 17.6102 16 19.0002C16 20.6602 17.34 22.0002 19 22.0002C20.66 22.0002 22 20.6602 22 19.0002C22 17.6002 21.04 16.4402 19.75 16.1102Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 16V6.5C19 5.4 18.1 4.5 17 4.5H12.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2L12 4.5L15 7" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 9V16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.25 2C3.46 2 2 3.46 2 5.25C2 7.04 3.46 8.5 5.25 8.5C7.04 8.5 8.5 7.04 8.5 5.25" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.4">
<path d="M19 16V6.5C19 5.4 18.1 4.5 17 4.5H12.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2L12 4.5L15 7" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path opacity="0.4" d="M5 9V16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.25 8.5C7.04493 8.5 8.5 7.04493 8.5 5.25C8.5 3.45507 7.04493 2 5.25 2C3.45507 2 2 3.45507 2 5.25C2 7.04493 3.45507 8.5 5.25 8.5Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
