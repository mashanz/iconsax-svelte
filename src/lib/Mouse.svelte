<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C16.13 22 19.5 18.63 19.5 14.5V9.5C19.5 5.37 16.13 2 12 2C7.87 2 4.5 5.37 4.5 9.5V14.5C4.5 18.63 7.87 22 12 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11C11.17 11 10.5 10.33 10.5 9.5V7.5C10.5 6.67 11.17 6 12 6C12.82 6 13.5 6.67 13.5 7.5V9.5C13.5 10.33 12.82 11 12 11Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22.75C7.45 22.75 3.75 19.05 3.75 14.5V9.5C3.75 4.95 7.45 1.25 12 1.25C16.55 1.25 20.25 4.95 20.25 9.5V14.5C20.25 19.05 16.55 22.75 12 22.75ZM12 2.75C8.28 2.75 5.25 5.78 5.25 9.5V14.5C5.25 18.22 8.28 21.25 12 21.25C15.72 21.25 18.75 18.22 18.75 14.5V9.5C18.75 5.78 15.72 2.75 12 2.75Z" fill={`${color}`}/>
<path d="M12 11.75C10.76 11.75 9.75 10.74 9.75 9.5V7.5C9.75 6.26 10.76 5.25 12 5.25C13.24 5.25 14.25 6.26 14.25 7.5V9.5C14.25 10.74 13.24 11.75 12 11.75ZM12 6.75C11.59 6.75 11.25 7.09 11.25 7.5V9.5C11.25 9.91 11.59 10.25 12 10.25C12.41 10.25 12.75 9.91 12.75 9.5V7.5C12.75 7.09 12.41 6.75 12 6.75Z" fill={`${color}`}/>
<path d="M12 6.75C11.59 6.75 11.25 6.41 11.25 6V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V6C12.75 6.41 12.41 6.75 12 6.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2978 2.11468C13.0064 2.06339 12.75 2.29593 12.75 2.59185V5.45262C12.75 5.65098 12.8709 5.82564 13.0359 5.93583C13.5391 6.27202 13.87 6.84597 13.87 7.49906V9.49906C13.87 10.5291 13.03 11.3791 12 11.3791C10.96 11.3791 10.12 10.5291 10.12 9.49906V7.49906C10.12 6.84578 10.4583 6.27168 10.9639 5.93554C11.1291 5.82572 11.25 5.65098 11.25 5.45262V2.59249C11.25 2.29634 10.9935 2.0637 10.7019 2.11513C9.15243 2.38834 7.76579 3.13327 6.7 4.19906C5.34 5.55906 4.5 7.43906 4.5 9.49906V14.4991C4.5 18.6291 7.87 21.9991 12 21.9991C16.13 21.9991 19.5 18.6291 19.5 14.4991V9.49906C19.5 5.80857 16.813 2.73328 13.2978 2.11468Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M19.5 9.5V14.5C19.5 18.63 16.13 22 12 22C7.87 22 4.5 18.63 4.5 14.5V9.5C4.5 7.44 5.34 5.56 6.7 4.2C7.89 3.01 9.48 2.22 11.25 2.04C11.49 2.01 11.75 2 12 2C12.25 2 12.51 2.01 12.75 2.04C16.53 2.42 19.5 5.62 19.5 9.5Z" fill={`${color}`}/>
<path d="M13.8691 7.5V9.5C13.8691 10.53 13.0291 11.38 11.9991 11.38C10.9591 11.38 10.1191 10.53 10.1191 9.5V7.5C10.1191 6.73 10.5891 6.07 11.2491 5.78V2.04C11.4891 2.01 11.7491 2 11.9991 2C12.2491 2 12.5091 2.01 12.7491 2.04V5.78C13.4091 6.07 13.8691 6.73 13.8691 7.5Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 13.63V14.5C4.5 18.62 7.87 22 12 22C16.12 22 19.5 18.63 19.5 14.5V9.5C19.5 5.37 16.13 2 12 2C7.87 2 4.5 5.37 4.5 9.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11C11.17 11 10.5 10.33 10.5 9.5V7.5C10.5 6.67 11.17 6 12 6C12.82 6 13.5 6.67 13.5 7.5V9.5C13.5 10.33 12.82 11 12 11Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C16.13 22 19.5 18.63 19.5 14.5V9.5C19.5 5.37 16.13 2 12 2C7.87 2 4.5 5.37 4.5 9.5V14.5C4.5 18.63 7.87 22 12 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.4">
<path d="M12 11C11.17 11 10.5 10.33 10.5 9.5V7.5C10.5 6.67 11.17 6 12 6C12.82 6 13.5 6.67 13.5 7.5V9.5C13.5 10.33 12.82 11 12 11Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

{/if}
