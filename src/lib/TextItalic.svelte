<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62012 3H18.8701" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.12012 21H14.3701" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.25 3L9.75 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8809 3.75H9.62086C9.21086 3.75 8.88086 3.41 8.88086 3C8.88086 2.59 9.22086 2.25 9.63086 2.25H18.8809C19.2909 2.25 19.6309 2.59 19.6309 3C19.6309 3.41 19.2909 3.75 18.8809 3.75Z" fill={`${color}`}/>
<path d="M14.3791 21.75H5.11914C4.70914 21.75 4.36914 21.41 4.36914 21C4.36914 20.59 4.70914 20.25 5.11914 20.25H14.3691C14.7791 20.25 15.1191 20.59 15.1191 21C15.1191 21.41 14.7891 21.75 14.3791 21.75Z" fill={`${color}`}/>
<path d="M9.7501 21.7501C9.6901 21.7501 9.6301 21.7401 9.5701 21.7301C9.1701 21.6301 8.9201 21.2201 9.0201 20.8201L13.5201 2.8201C13.6201 2.4201 14.0201 2.1701 14.4301 2.2701C14.8301 2.3701 15.0801 2.7801 14.9801 3.1801L10.4801 21.1801C10.3901 21.5201 10.0901 21.7501 9.7501 21.7501Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C7.61 2 7.41 2.01 7.22 2.03C3.94 2.24 2 4.37 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C4.95 21.55 5.99 21.9 7.22 21.98C7.41 21.99 7.61 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13ZM15.87 7.51H13.92L11.68 16.48H13.52C13.93 16.48 14.27 16.82 14.27 17.23C14.27 17.64 13.93 17.98 13.52 17.98H8.13C7.72 17.98 7.38 17.64 7.38 17.23C7.38 16.82 7.72 16.48 8.13 16.48H10.13L12.37 7.51H10.48C10.07 7.51 9.73 7.17 9.73 6.76C9.73 6.35 10.07 6.01 10.48 6.01H15.86C16.27 6.01 16.61 6.35 16.61 6.76C16.61 7.17 16.28 7.51 15.87 7.51Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z" fill={`${color}`}/>
<path d="M15.8706 6.00977H10.4906C10.0806 6.00977 9.74062 6.34977 9.74062 6.75977C9.74062 7.16977 10.0806 7.50977 10.4906 7.50977H12.3806L10.1406 16.4798H8.14063C7.73063 16.4798 7.39062 16.8198 7.39062 17.2298C7.39062 17.6398 7.73063 17.9798 8.14063 17.9798H13.5206C13.9306 17.9798 14.2706 17.6398 14.2706 17.2298C14.2706 16.8198 13.9306 16.4798 13.5206 16.4798H11.6806L13.9206 7.50977H15.8706C16.2806 7.50977 16.6206 7.16977 16.6206 6.75977C16.6206 6.34977 16.2806 6.00977 15.8706 6.00977Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.61914 3H18.8691" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.11914 21H14.3691" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 17.99L9.75 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.25 3L11.5 14.01" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.61914 3H18.8691" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.11914 21H14.3691" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M14.25 3L9.75 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
