<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 17.5H14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 17.5V7.5C2 3.5 3 2.5 7 2.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 17.5V7.5C22 3.5 21 2.5 17 2.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15.91V19.2C10 21.2 9.2 22 7.2 22H4.8C2.8 22 2 21.2 2 19.2V15.91C2 13.91 2.8 13.11 4.8 13.11H7.2C9.2 13.11 10 13.91 10 15.91Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 15.91V19.2C22 21.2 21.2 22 19.2 22H16.8C14.8 22 14 21.2 14 19.2V15.91C14 13.91 14.8 13.11 16.8 13.11H19.2C21.2 13.11 22 13.91 22 15.91Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 18.25H10C9.59 18.25 9.25 17.91 9.25 17.5C9.25 17.09 9.59 16.75 10 16.75H14C14.41 16.75 14.75 17.09 14.75 17.5C14.75 17.91 14.41 18.25 14 18.25Z" fill={`${color}`}/>
<path d="M2 18.25C1.59 18.25 1.25 17.91 1.25 17.5V7.5C1.25 3.09 2.59 1.75 7 1.75C7.41 1.75 7.75 2.09 7.75 2.5C7.75 2.91 7.41 3.25 7 3.25C3.43 3.25 2.75 3.92 2.75 7.5V17.5C2.75 17.91 2.41 18.25 2 18.25Z" fill={`${color}`}/>
<path d="M22 18.25C21.59 18.25 21.25 17.91 21.25 17.5V7.5C21.25 3.92 20.57 3.25 17 3.25C16.59 3.25 16.25 2.91 16.25 2.5C16.25 2.09 16.59 1.75 17 1.75C21.41 1.75 22.75 3.09 22.75 7.5V17.5C22.75 17.91 22.41 18.25 22 18.25Z" fill={`${color}`}/>
<path d="M7.2 22.7501H4.8C2.38 22.7501 1.25 21.6201 1.25 19.2001V15.9101C1.25 13.4901 2.38 12.3601 4.8 12.3601H7.2C9.62 12.3601 10.75 13.4901 10.75 15.9101V19.2001C10.75 21.6201 9.62 22.7501 7.2 22.7501ZM4.8 13.8601C3.21 13.8601 2.75 14.3201 2.75 15.9101V19.2001C2.75 20.7901 3.21 21.2501 4.8 21.2501H7.2C8.79 21.2501 9.25 20.7901 9.25 19.2001V15.9101C9.25 14.3201 8.79 13.8601 7.2 13.8601H4.8Z" fill={`${color}`}/>
<path d="M19.2 22.7501H16.8C14.38 22.7501 13.25 21.6201 13.25 19.2001V15.9101C13.25 13.4901 14.38 12.3601 16.8 12.3601H19.2C21.62 12.3601 22.75 13.4901 22.75 15.9101V19.2001C22.75 21.6201 21.62 22.7501 19.2 22.7501ZM16.8 13.8601C15.21 13.8601 14.75 14.3201 14.75 15.9101V19.2001C14.75 20.7901 15.21 21.2501 16.8 21.2501H19.2C20.79 21.2501 21.25 20.7901 21.25 19.2001V15.9101C21.25 14.3201 20.79 13.8601 19.2 13.8601H16.8Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7098 2H16.7598C16.3698 2 16.0498 2.32 16.0498 2.71C16.0498 3.11 16.3698 3.43 16.7598 3.43H17.7098C19.4198 3.43 20.8098 4.82 20.8098 6.52V12.4C20.4498 12.21 20.0498 12.11 19.6198 12.11H15.8098C14.3698 12.11 13.1898 13.28 13.1898 14.73V16.29H10.8098V14.73C10.8098 13.28 9.62977 12.11 8.18976 12.11H4.37977C3.94977 12.11 3.54977 12.21 3.18977 12.4V6.52C3.18977 4.82 4.57977 3.43 6.28977 3.43H7.23977C7.62977 3.43 7.94977 3.11 7.94977 2.71C7.94977 2.32 7.62977 2 7.23977 2H6.28977C3.78977 2 1.75977 4.03 1.75977 6.52V14.73V19.38C1.75977 20.83 2.93977 22 4.37977 22H8.18976C9.62977 22 10.8098 20.83 10.8098 19.38V17.71H13.1898V19.38C13.1898 20.83 14.3698 22 15.8098 22H19.6198C21.0598 22 22.2398 20.83 22.2398 19.38V14.73V6.52C22.2398 4.03 20.2098 2 17.7098 2Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8406 22.0002H8.16059C3.97059 22.0002 3.14059 19.4702 4.50059 16.3902L5.94059 13.1202C5.94059 13.1202 9.00059 13.0002 12.0006 14.0002C15.0006 15.0002 17.8306 13.1102 17.8306 13.1102L18.0206 12.9902L19.5106 16.4002C20.8506 19.4802 19.9706 22.0002 15.8406 22.0002Z" fill={`${color}`}/>
<path opacity="0.4" d="M18.0195 12.99L17.8295 13.11C17.8295 13.11 14.9995 15 11.9995 14C8.99945 13 5.93945 13.12 5.93945 13.12L8.73945 6.74H8.43945C7.78945 6.74 7.18945 6.48 6.75945 6.05C6.32945 5.62 6.06945 5.02 6.06945 4.37C6.06945 3.07 7.12945 2 8.43945 2H15.5495C16.2095 2 16.7995 2.27 17.2295 2.7C17.7895 3.26 18.0795 4.08 17.8595 4.95C17.5995 6.03 16.5595 6.74 15.4395 6.74H15.2795L18.0195 12.99Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 17.5H14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 17.5V7.5C2 3.5 3 2.5 7 2.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 17.5V7.5C22 3.5 21 2.5 17 2.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15.9101V19.2001C10 21.2001 9.2 22.0001 7.2 22.0001H4.8C2.8 22.0001 2 21.2001 2 19.2001V15.9101C2 13.9101 2.8 13.1101 4.8 13.1101H7.2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 15.9101V19.2001C22 21.2001 21.2 22.0001 19.2 22.0001H16.8C14.8 22.0001 14 21.2001 14 19.2001V15.9101C14 13.9101 14.8 13.1101 16.8 13.1101H19.2C21.2 13.1101 22 13.9101 22 15.9101Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M10 17.5H14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M2 17.5V7.5C2 3.5 3 2.5 7 2.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M22 17.5V7.5C22 3.5 21 2.5 17 2.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15.9099V19.1999C10 21.1999 9.2 21.9999 7.2 21.9999H4.8C2.8 21.9999 2 21.1999 2 19.1999V15.9099C2 13.9099 2.8 13.1099 4.8 13.1099H7.2C9.2 13.1099 10 13.9099 10 15.9099Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 15.9099V19.1999C22 21.1999 21.2 21.9999 19.2 21.9999H16.8C14.8 21.9999 14 21.1999 14 19.1999V15.9099C14 13.9099 14.8 13.1099 16.8 13.1099H19.2C21.2 13.1099 22 13.9099 22 15.9099Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
