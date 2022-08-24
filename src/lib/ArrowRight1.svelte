<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4291 18.8201C14.2391 18.8201 14.0491 18.7501 13.8991 18.6001C13.6091 18.3101 13.6091 17.8301 13.8991 17.5401L19.4391 12.0001L13.8991 6.46012C13.6091 6.17012 13.6091 5.69012 13.8991 5.40012C14.1891 5.11012 14.6691 5.11012 14.9591 5.40012L21.0291 11.4701C21.3191 11.7601 21.3191 12.2401 21.0291 12.5301L14.9591 18.6001C14.8091 18.7501 14.6191 18.8201 14.4291 18.8201Z" fill={`${color}`}/>
<path d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9.32919V14.6692C6 17.9892 8.35 19.3392 11.22 17.6892L12.5 16.9492C12.81 16.7692 13 16.4392 13 16.0792V7.91919C13 7.55919 12.81 7.22919 12.5 7.04919L11.22 6.30919C8.35 4.65919 6 6.00919 6 9.32919Z" fill={`${color}`}/>
<path d="M14 8.79152V15.2215C14 15.6115 14.42 15.8515 14.75 15.6515L15.85 15.0115C18.72 13.3615 18.72 10.6415 15.85 8.99152L14.75 8.35152C14.42 8.16152 14 8.40152 14 8.79152Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9.32993V14.6699C6 17.9899 8.35 19.3399 11.22 17.6899L12.5 16.9499C12.81 16.7699 13 16.4399 13 16.0799V7.91993C13 7.55993 12.81 7.22993 12.5 7.04993L11.22 6.30992C8.35 4.65992 6 6.00993 6 9.32993Z" fill={`${color}`}/>
<path opacity="0.4" d="M14 8.79006V15.2201C14 15.6101 14.42 15.8501 14.75 15.6501L15.85 15.0101C18.72 13.3601 18.72 10.6401 15.85 8.99006L14.75 8.35006C14.42 8.16006 14 8.40006 14 8.79006Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.85 8.98992C18.72 10.6499 18.72 13.3599 15.85 15.0199L13.54 16.3599L11.23 17.6999C8.35 19.3399 6 17.9899 6 14.6699V11.9999V9.32992C6 6.01992 8.35 4.65992 11.22 6.31992" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
