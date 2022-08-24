<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 6L6 18" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 10V6H14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 14V18H10" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={`${color}`}/>
<path d="M5.99945 18.7499C5.80945 18.7499 5.61945 18.6799 5.46945 18.5299C5.17945 18.2399 5.17945 17.7599 5.46945 17.4699L17.4695 5.46994C17.7595 5.17994 18.2395 5.17994 18.5295 5.46994C18.8195 5.75994 18.8195 6.23994 18.5295 6.52994L6.52945 18.5299C6.37945 18.6799 6.18945 18.7499 5.99945 18.7499Z" fill={`${color}`}/>
<path d="M18 10.75C17.59 10.75 17.25 10.41 17.25 10V6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.41 5.25 18.75 5.59 18.75 6V10C18.75 10.41 18.41 10.75 18 10.75Z" fill={`${color}`}/>
<path d="M10 18.75H6C5.59 18.75 5.25 18.41 5.25 18V14C5.25 13.59 5.59 13.25 6 13.25C6.41 13.25 6.75 13.59 6.75 14V17.25H10C10.41 17.25 10.75 17.59 10.75 18C10.75 18.41 10.41 18.75 10 18.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18.75 10C18.75 10.41 18.41 10.75 18 10.75C17.59 10.75 17.25 10.41 17.25 10V7.81L7.81 17.25H10C10.41 17.25 10.75 17.59 10.75 18C10.75 18.41 10.41 18.75 10 18.75H6C5.9 18.75 5.8 18.73 5.71 18.69C5.53 18.61 5.38 18.47 5.3 18.28C5.27 18.19 5.25 18.1 5.25 18V14C5.25 13.59 5.59 13.25 6 13.25C6.41 13.25 6.75 13.59 6.75 14V16.19L16.19 6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.1 5.25 18.19 5.27 18.29 5.31C18.47 5.39 18.62 5.53 18.7 5.72C18.73 5.81 18.75 5.9 18.75 6V10Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill={`${color}`}/>
<path d="M18.69 5.71C18.61 5.53 18.47 5.38 18.28 5.3C18.19 5.27 18.1 5.25 18 5.25H14C13.59 5.25 13.25 5.59 13.25 6C13.25 6.41 13.59 6.75 14 6.75H16.19L6.75 16.19V14C6.75 13.59 6.41 13.25 6 13.25C5.59 13.25 5.25 13.59 5.25 14V18C5.25 18.1 5.27 18.19 5.31 18.29C5.39 18.47 5.53 18.62 5.72 18.7C5.8 18.73 5.9 18.75 6 18.75H10C10.41 18.75 10.75 18.41 10.75 18C10.75 17.59 10.41 17.25 10 17.25H7.81L17.25 7.81V10C17.25 10.41 17.59 10.75 18 10.75C18.41 10.75 18.75 10.41 18.75 10V6C18.75 5.9 18.73 5.81 18.69 5.71Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13.03V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12L6 18" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.9998 6L15.0098 8.99" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 10V6H14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 14V18H10" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.4">
<path d="M18 6L6 18" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 10V6H14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 14V18H10" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

{/if}
