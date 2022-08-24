<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 7.75V14.5C18 13.4 17.1 12.5 16 12.5H8C6.9 12.5 6 13.4 6 14.5V7.75C6 6.65 6.9 5.75 8 5.75H16C17.1 5.75 18 6.65 18 7.75Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 15.75H18" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 15.75H5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 14V11C18 9.9 17.1 9 16 9H8C6.9 9 6 9.9 6 11V14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 14.5V15.75H14.5C14.5 17.13 13.38 18.25 12 18.25C10.62 18.25 9.5 17.13 9.5 15.75H6V14.5C6 13.4 6.9 12.5 8 12.5H16C17.1 12.5 18 13.4 18 14.5Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={`${color}`}/>
<path d="M18 15.25C17.59 15.25 17.25 14.91 17.25 14.5C17.25 13.81 16.69 13.25 16 13.25H8C7.31 13.25 6.75 13.81 6.75 14.5C6.75 14.91 6.41 15.25 6 15.25C5.59 15.25 5.25 14.91 5.25 14.5V7.75C5.25 6.23 6.48 5 8 5H16C17.52 5 18.75 6.23 18.75 7.75V14.5C18.75 14.91 18.41 15.25 18 15.25ZM8 11.75H16C16.45 11.75 16.88 11.86 17.25 12.05V7.75C17.25 7.06 16.69 6.5 16 6.5H8C7.31 6.5 6.75 7.06 6.75 7.75V12.05C7.12 11.86 7.55 11.75 8 11.75Z" fill={`${color}`}/>
<path d="M19 16.5H18C17.59 16.5 17.25 16.16 17.25 15.75C17.25 15.34 17.59 15 18 15H19C19.41 15 19.75 15.34 19.75 15.75C19.75 16.16 19.41 16.5 19 16.5Z" fill={`${color}`}/>
<path d="M6 16.5H5C4.59 16.5 4.25 16.16 4.25 15.75C4.25 15.34 4.59 15 5 15H6C6.41 15 6.75 15.34 6.75 15.75C6.75 16.16 6.41 16.5 6 16.5Z" fill={`${color}`}/>
<path d="M18 14.75C17.59 14.75 17.25 14.41 17.25 14V11C17.25 10.31 16.69 9.75 16 9.75H8C7.31 9.75 6.75 10.31 6.75 11V14C6.75 14.41 6.41 14.75 6 14.75C5.59 14.75 5.25 14.41 5.25 14V11C5.25 9.48 6.48 8.25 8 8.25H16C17.52 8.25 18.75 9.48 18.75 11V14C18.75 14.41 18.41 14.75 18 14.75Z" fill={`${color}`}/>
<path d="M12 19C10.47 19 9.18003 17.93 8.84003 16.5H6C5.59 16.5 5.25 16.16 5.25 15.75V14.5C5.25 12.98 6.48 11.75 8 11.75H16C17.52 11.75 18.75 12.98 18.75 14.5V15.75C18.75 16.16 18.41 16.5 18 16.5H15.16C14.82 17.93 13.53 19 12 19ZM6.75 15H9.5C9.91 15 10.25 15.34 10.25 15.75C10.25 16.71 11.04 17.5 12 17.5C12.96 17.5 13.75 16.71 13.75 15.75C13.75 15.34 14.09 15 14.5 15H17.25V14.5C17.25 13.81 16.69 13.25 16 13.25H8C7.31 13.25 6.75 13.81 6.75 14.5V15Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 9.75H8C7.31 9.75 6.75 10.31 6.75 11V12.05C6.78 12.04 6.8 12.03 6.83 12.02C6.95 11.96 7.08 11.92 7.21 11.88C7.27 11.86 7.33 11.84 7.4 11.82C7.6 11.78 7.8 11.75 8.01 11.75H16.01C16.22 11.75 16.42 11.78 16.62 11.82C16.68 11.83 16.74 11.86 16.81 11.88C16.94 11.92 17.07 11.96 17.19 12.02C17.22 12.03 17.25 12.04 17.27 12.05V11C17.25 10.31 16.69 9.75 16 9.75Z" fill={`${color}`}/>
<path d="M16 13.25H8C7.31 13.25 6.75 13.81 6.75 14.5V15H9.5C9.91 15 10.25 15.34 10.25 15.75C10.25 16.71 11.04 17.5 12 17.5C12.96 17.5 13.75 16.71 13.75 15.75C13.75 15.34 14.09 15 14.5 15H17.25V14.5C17.25 13.81 16.69 13.25 16 13.25Z" fill={`${color}`}/>
<path d="M16 6.5H8C7.31 6.5 6.75 7.06 6.75 7.75V8.56C7.13 8.37 7.55 8.25 8 8.25H16C16.45 8.25 16.87 8.37 17.25 8.56V7.75C17.25 7.06 16.69 6.5 16 6.5Z" fill={`${color}`}/>
<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM19 16.5H18H15.16C14.82 17.93 13.53 19 12 19C10.47 19 9.18 17.93 8.84 16.5H6H5C4.59 16.5 4.25 16.16 4.25 15.75C4.25 15.34 4.59 15 5 15H5.25V14.5V14V11V7.75C5.25 6.23 6.48 5 8 5H16C17.52 5 18.75 6.23 18.75 7.75V11V14V14.5V15H19C19.41 15 19.75 15.34 19.75 15.75C19.75 16.16 19.41 16.5 19 16.5Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M19.5 9.96997V19C19.5 21 19 22 16.5 22H7.5C5 22 4.5 21 4.5 19V9.96997C4.66 9.98997 4.83 9.99997 5 9.99997H19C19.17 9.99997 19.34 9.98997 19.5 9.96997Z" fill={`${color}`}/>
<path d="M22 5V7C22 8.83 21.17 9.82 19.5 9.97C19.34 9.99 19.17 10 19 10H5C4.83 10 4.66 9.99 4.5 9.97C2.83 9.82 2 8.83 2 7V5C2 3 3 2 5 2H19C21 2 22 3 22 5Z" fill={`${color}`}/>
<path d="M13.8197 14.75H10.1797C9.76969 14.75 9.42969 14.41 9.42969 14C9.42969 13.59 9.76969 13.25 10.1797 13.25H13.8197C14.2297 13.25 14.5697 13.59 14.5697 14C14.5697 14.41 14.2297 14.75 13.8197 14.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 7.75V14.5C18 13.4 17.1 12.5 16 12.5H8C6.9 12.5 6 13.4 6 14.5V7.75C6 6.65 6.9 5.75 8 5.75H16C17.1 5.75 18 6.65 18 7.75Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 15.75H18" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 15.75H5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 14V11C18 9.9 17.1 9 16 9H8C6.9 9 6 9.9 6 11V14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 14.5V15.75H14.5C14.5 17.13 13.38 18.25 12 18.25C10.62 18.25 9.5 17.13 9.5 15.75H6V14.5C6 13.4 6.9 12.5 8 12.5H16C17.1 12.5 18 13.4 18 14.5Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.4">
<path d="M18 7.75V14.5C18 13.4 17.1 12.5 16 12.5H8C6.9 12.5 6 13.4 6 14.5V7.75C6 6.65 6.9 5.75 8 5.75H16C17.1 5.75 18 6.65 18 7.75Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 15.75H18" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 15.75H5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 14V11C18 9.9 17.1 9 16 9H8C6.9 9 6 9.9 6 11V14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 14.5V15.75H14.5C14.5 17.13 13.38 18.25 12 18.25C10.62 18.25 9.5 17.13 9.5 15.75H6V14.5C6 13.4 6.9 12.5 8 12.5H16C17.1 12.5 18 13.4 18 14.5Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

{/if}
