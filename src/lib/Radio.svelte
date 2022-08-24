<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 5H7C4 5 2 7 2 10V17C2 20 4 22 7 22H17C20 22 22 20 22 17V10C22 7 20 5 17 5Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 2V5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 16C9.88071 16 11 14.8807 11 13.5C11 12.1193 9.88071 11 8.5 11C7.11929 11 6 12.1193 6 13.5C6 14.8807 7.11929 16 8.5 16Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 11H18.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 15H15" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 15H18.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 22.75H7C3.56 22.75 1.25 20.44 1.25 17V10C1.25 6.56 3.56 4.25 7 4.25H17C20.44 4.25 22.75 6.56 22.75 10V17C22.75 20.44 20.44 22.75 17 22.75ZM7 5.75C4.42 5.75 2.75 7.42 2.75 10V17C2.75 19.58 4.42 21.25 7 21.25H17C19.58 21.25 21.25 19.58 21.25 17V10C21.25 7.42 19.58 5.75 17 5.75H7Z" fill={`${color}`}/>
<path d="M7 5.75C6.59 5.75 6.25 5.41 6.25 5V2C6.25 1.59 6.59 1.25 7 1.25C7.41 1.25 7.75 1.59 7.75 2V5C7.75 5.41 7.41 5.75 7 5.75Z" fill={`${color}`}/>
<path d="M8.5 16.75C6.71 16.75 5.25 15.29 5.25 13.5C5.25 11.71 6.71 10.25 8.5 10.25C10.29 10.25 11.75 11.71 11.75 13.5C11.75 15.29 10.29 16.75 8.5 16.75ZM8.5 11.75C7.54 11.75 6.75 12.54 6.75 13.5C6.75 14.46 7.54 15.25 8.5 15.25C9.46 15.25 10.25 14.46 10.25 13.5C10.25 12.54 9.46 11.75 8.5 11.75Z" fill={`${color}`}/>
<path d="M18.5 11.75H14.5C14.09 11.75 13.75 11.41 13.75 11C13.75 10.59 14.09 10.25 14.5 10.25H18.5C18.91 10.25 19.25 10.59 19.25 11C19.25 11.41 18.91 11.75 18.5 11.75Z" fill={`${color}`}/>
<path d="M15 15.75H14.5C14.09 15.75 13.75 15.41 13.75 15C13.75 14.59 14.09 14.25 14.5 14.25H15C15.41 14.25 15.75 14.59 15.75 15C15.75 15.41 15.41 15.75 15 15.75Z" fill={`${color}`}/>
<path d="M18.5 15.75H18C17.59 15.75 17.25 15.41 17.25 15C17.25 14.59 17.59 14.25 18 14.25H18.5C18.91 14.25 19.25 14.59 19.25 15C19.25 15.41 18.91 15.75 18.5 15.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.75 2V5H7C6.74 5 6.49 5.01 6.25 5.05V2C6.25 1.59 6.59 1.25 7 1.25C7.41 1.25 7.75 1.59 7.75 2Z" fill={`${color}`}/>
<path d="M17 5H7C6.74 5 6.49 5.01 6.25 5.05C3.67 5.35 2 7.26 2 10V17C2 20 4 22 7 22H17C20 22 22 20 22 17V10C22 7 20 5 17 5ZM7.88 16C6.5 16 5.38 14.88 5.38 13.5C5.38 12.12 6.5 11 7.88 11C9.26 11 10.38 12.12 10.38 13.5C10.38 14.88 9.26 16 7.88 16ZM14.38 16.25H13.88C13.47 16.25 13.13 15.91 13.13 15.5C13.13 15.09 13.47 14.75 13.88 14.75H14.38C14.79 14.75 15.13 15.09 15.13 15.5C15.13 15.91 14.79 16.25 14.38 16.25ZM17.88 16.25H17.38C16.97 16.25 16.63 15.91 16.63 15.5C16.63 15.09 16.97 14.75 17.38 14.75H17.88C18.29 14.75 18.63 15.09 18.63 15.5C18.63 15.91 18.29 16.25 17.88 16.25ZM17.88 12.25H13.88C13.47 12.25 13.13 11.91 13.13 11.5C13.13 11.09 13.47 10.75 13.88 10.75H17.88C18.29 10.75 18.63 11.09 18.63 11.5C18.63 11.91 18.29 12.25 17.88 12.25Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M22 10V17C22 20 20 22 17 22H7C4 22 2 20 2 17V10C2 7.26 3.67 5.34999 6.25 5.04999C6.49 5.00999 6.74 5 7 5H17C20 5 22 7 22 10Z" fill={`${color}`}/>
<path d="M7.75 2V5H7C6.74 5 6.49 5.00999 6.25 5.04999V2C6.25 1.59 6.59 1.25 7 1.25C7.41 1.25 7.75 1.59 7.75 2Z" fill={`${color}`}/>
<path d="M7.88086 16C9.26157 16 10.3809 14.8807 10.3809 13.5C10.3809 12.1193 9.26157 11 7.88086 11C6.50015 11 5.38086 12.1193 5.38086 13.5C5.38086 14.8807 6.50015 16 7.88086 16Z" fill={`${color}`}/>
<path d="M17.8809 12.25H13.8809C13.4709 12.25 13.1309 11.91 13.1309 11.5C13.1309 11.09 13.4709 10.75 13.8809 10.75H17.8809C18.2909 10.75 18.6309 11.09 18.6309 11.5C18.6309 11.91 18.2909 12.25 17.8809 12.25Z" fill={`${color}`}/>
<path d="M14.3809 16.25H13.8809C13.4709 16.25 13.1309 15.91 13.1309 15.5C13.1309 15.09 13.4709 14.75 13.8809 14.75H14.3809C14.7909 14.75 15.1309 15.09 15.1309 15.5C15.1309 15.91 14.7909 16.25 14.3809 16.25Z" fill={`${color}`}/>
<path d="M17.8809 16.25H17.3809C16.9709 16.25 16.6309 15.91 16.6309 15.5C16.6309 15.09 16.9709 14.75 17.3809 14.75H17.8809C18.2909 14.75 18.6309 15.09 18.6309 15.5C18.6309 15.91 18.2909 16.25 17.8809 16.25Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 14.05V17C2 20 4 22 7 22H17C20 22 22 20 22 17V10C22 7 20 5 17 5H7C4 5 2 7 2 10" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 2V5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 16C7.12 16 6 14.88 6 13.5C6 12.12 7.12 11 8.5 11C9.88 11 11 12.12 11 13.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 11H18.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 15H15" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 15H18.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 5H7C4 5 2 7 2 10V17C2 20 4 22 7 22H17C20 22 22 20 22 17V10C22 7 20 5 17 5Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 2V5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M8.5 16C9.88071 16 11 14.8807 11 13.5C11 12.1193 9.88071 11 8.5 11C7.11929 11 6 12.1193 6 13.5C6 14.8807 7.11929 16 8.5 16Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M14.5 11H18.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M14.5 15H15" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M18 15H18.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
