<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9 5L4.90002 19" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill={`${color}`}/>
<path d="M4.89984 19.7499C4.70984 19.7499 4.51984 19.6799 4.36984 19.5299C4.07984 19.2399 4.07984 18.7599 4.36984 18.4699L18.3698 4.46994C18.6598 4.17994 19.1398 4.17994 19.4298 4.46994C19.7198 4.75994 19.7198 5.23994 19.4298 5.52994L5.42984 19.5299C5.27984 19.6799 5.08984 19.7499 4.89984 19.7499Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.53 5.53L5.53 19.53C5.51 19.55 5.5 19.56 5.48 19.57C5.1 19.25 4.75 18.9 4.43 18.52C2.91 16.77 2 14.49 2 12C2 6.48 6.48 2 12 2C14.49 2 16.77 2.91 18.52 4.43C18.9 4.75 19.25 5.1 19.57 5.48C19.56 5.5 19.55 5.51 19.53 5.53Z" fill={`${color}`}/>
<path d="M22.0008 12.0008C22.0008 17.4908 17.4908 22.0008 12.0008 22.0008C10.5008 22.0008 9.08084 21.6708 7.80084 21.0708C7.18084 20.7808 7.06084 19.9508 7.54084 19.4608L19.4608 7.54084C19.9408 7.06084 20.7808 7.18084 21.0708 7.80084C21.6708 9.07084 22.0008 10.5008 22.0008 12.0008Z" fill={`${color}`}/>
<path d="M21.7709 2.22891C21.4709 1.92891 20.9809 1.92891 20.6809 2.22891L2.23086 20.6889C1.93086 20.9889 1.93086 21.4789 2.23086 21.7789C2.38086 21.9189 2.57086 21.9989 2.77086 21.9989C2.97086 21.9989 3.16086 21.9189 3.31086 21.7689L21.7709 3.30891C22.0809 3.00891 22.0809 2.52891 21.7709 2.22891Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M19.53 5.53L5.53 19.53C5.51 19.55 5.5 19.56 5.48 19.57C5.1 19.25 4.75 18.9 4.43 18.52C2.91 16.77 2 14.49 2 12C2 6.48 6.48 2 12 2C14.49 2 16.77 2.91 18.52 4.43C18.9 4.75 19.25 5.1 19.57 5.48C19.56 5.5 19.55 5.51 19.53 5.53Z" fill={`${color}`}/>
<path opacity="0.4" d="M21.9996 12.0001C21.9996 17.5201 17.5196 22.0001 11.9996 22.0001C10.0096 22.0001 8.15961 21.4201 6.59961 20.4001L20.3996 6.6001C21.4196 8.1601 21.9996 10.0101 21.9996 12.0001Z" fill={`${color}`}/>
<path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9004 5L4.90039 19" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.34" d="M18.9004 5L4.90039 19" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
