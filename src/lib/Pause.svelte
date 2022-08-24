<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.65 19.11V4.89C10.65 3.54 10.08 3 8.64 3H5.01C3.57 3 3 3.54 3 4.89V19.11C3 20.46 3.57 21 5.01 21H8.64C10.08 21 10.65 20.46 10.65 19.11Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 19.11V4.89C21 3.54 20.43 3 18.99 3H15.36C13.93 3 13.35 3.54 13.35 4.89V19.11C13.35 20.46 13.92 21 15.36 21H18.99C20.43 21 21 20.46 21 19.11Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.64 21.75H5.01C3.15 21.75 2.25 20.89 2.25 19.11V4.89C2.25 3.11 3.15 2.25 5.01 2.25H8.64C10.5 2.25 11.4 3.11 11.4 4.89V19.11C11.4 20.89 10.5 21.75 8.64 21.75ZM5.01 3.75C3.93 3.75 3.75 4.02 3.75 4.89V19.11C3.75 19.98 3.92 20.25 5.01 20.25H8.64C9.72 20.25 9.9 19.98 9.9 19.11V4.89C9.9 4.02 9.73 3.75 8.64 3.75H5.01Z" fill={`${color}`}/>
<path d="M18.9896 21.75H15.3596C13.4996 21.75 12.5996 20.89 12.5996 19.11V4.89C12.5996 3.11 13.4996 2.25 15.3596 2.25H18.9896C20.8496 2.25 21.7496 3.11 21.7496 4.89V19.11C21.7496 20.89 20.8496 21.75 18.9896 21.75ZM15.3596 3.75C14.2796 3.75 14.0996 4.02 14.0996 4.89V19.11C14.0996 19.98 14.2696 20.25 15.3596 20.25H18.9896C20.0696 20.25 20.2496 19.98 20.2496 19.11V4.89C20.2496 4.02 20.0796 3.75 18.9896 3.75H15.3596Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.65 19.11V4.89C10.65 3.54 10.08 3 8.64 3H5.01C3.57 3 3 3.54 3 4.89V19.11C3 20.46 3.57 21 5.01 21H8.64C10.08 21 10.65 20.46 10.65 19.11Z" fill={`${color}`}/>
<path d="M21.0016 19.11V4.89C21.0016 3.54 20.4316 3 18.9916 3H15.3616C13.9316 3 13.3516 3.54 13.3516 4.89V19.11C13.3516 20.46 13.9216 21 15.3616 21H18.9916C20.4316 21 21.0016 20.46 21.0016 19.11Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.65 19.11V4.89C10.65 3.54 10.08 3 8.64 3H5.01C3.57 3 3 3.54 3 4.89V19.11C3 20.46 3.57 21 5.01 21H8.64C10.08 21 10.65 20.46 10.65 19.11Z" fill={`${color}`}/>
<path opacity="0.4" d="M20.9996 19.11V4.89C20.9996 3.54 20.4296 3 18.9896 3H15.3596C13.9296 3 13.3496 3.54 13.3496 4.89V19.11C13.3496 20.46 13.9196 21 15.3596 21H18.9896C20.4296 21 20.9996 20.46 20.9996 19.11Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.01 3C3.57 3 3 3.54 3 4.89V19.11C3 20.46 3.57 21 5.01 21H8.64C10.07 21 10.65 20.46 10.65 19.11V4.89C10.65 3.54 10.08 3 8.64 3" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9896 21C20.4196 21 20.9996 20.46 20.9996 19.11V4.89C20.9996 3.54 20.4296 3 18.9896 3H15.3596C13.9296 3 13.3496 3.54 13.3496 4.89V19.11C13.3496 20.46 13.9196 21 15.3596 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M10.65 19.11V4.89C10.65 3.54 10.08 3 8.64 3H5.01C3.57 3 3 3.54 3 4.89V19.11C3 20.46 3.57 21 5.01 21H8.64C10.08 21 10.65 20.46 10.65 19.11Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9996 19.11V4.89C20.9996 3.54 20.4296 3 18.9896 3H15.3596C13.9296 3 13.3496 3.54 13.3496 4.89V19.11C13.3496 20.46 13.9196 21 15.3596 21H18.9896C20.4296 21 20.9996 20.46 20.9996 19.11Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
