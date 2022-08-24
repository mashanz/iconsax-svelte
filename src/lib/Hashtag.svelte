<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 17H14C15.65 17 17 15.65 17 14V10C17 8.35 15.65 7 14 7H10C8.35 7 7 8.35 7 10V14C7 15.65 8.35 17 10 17Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 12H17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99935 21.75C7.96935 21.75 7.93935 21.75 7.91935 21.75C7.50935 21.7 7.20935 21.33 7.25935 20.92L9.25935 2.92003C9.30935 2.51003 9.67935 2.22003 10.0894 2.26003C10.4994 2.31003 10.7994 2.68003 10.7494 3.09003L8.74935 21.09C8.69935 21.47 8.37935 21.75 7.99935 21.75Z" fill={`${color}`}/>
<path d="M13.9994 21.75C13.9694 21.75 13.9394 21.75 13.9194 21.75C13.5094 21.7 13.2094 21.33 13.2594 20.92L15.2594 2.92003C15.3094 2.51003 15.6694 2.22003 16.0894 2.26003C16.4994 2.31003 16.7994 2.68003 16.7494 3.09003L14.7494 21.09C14.6994 21.47 14.3794 21.75 13.9994 21.75Z" fill={`${color}`}/>
<path d="M21.5 9.75H3.5C3.09 9.75 2.75 9.41 2.75 9C2.75 8.59 3.09 8.25 3.5 8.25H21.5C21.91 8.25 22.25 8.59 22.25 9C22.25 9.41 21.91 9.75 21.5 9.75Z" fill={`${color}`}/>
<path d="M20.5 15.75H2.5C2.09 15.75 1.75 15.41 1.75 15C1.75 14.59 2.09 14.25 2.5 14.25H20.5C20.91 14.25 21.25 14.59 21.25 15C21.25 15.41 20.91 15.75 20.5 15.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4199 13.4181H13.2599L13.5799 10.5781H10.7399L10.4199 13.4181Z" fill={`${color}`}/>
<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18.82 10.58H15.05L14.73 13.43H18.1C18.5 13.43 18.83 13.76 18.83 14.16C18.83 14.56 18.5 14.89 18.1 14.89H14.57L14.16 18.55C14.12 18.92 13.8 19.2 13.43 19.2C13.4 19.2 13.38 19.2 13.35 19.2C12.95 19.16 12.66 18.79 12.7 18.39L13.09 14.89H10.25L9.84 18.55C9.8 18.92 9.48 19.2 9.11 19.2C9.08 19.2 9.06 19.2 9.03 19.2C8.63 19.16 8.34 18.79 8.38 18.39L8.77 14.89H5.18C4.78 14.89 4.45 14.56 4.45 14.16C4.45 13.76 4.78 13.43 5.18 13.43H8.95L9.27 10.58H5.9C5.5 10.58 5.17 10.25 5.17 9.85C5.17 9.45 5.5 9.12 5.9 9.12H9.43L9.84 5.46C9.88 5.06 10.25 4.77 10.65 4.81C11.05 4.85 11.34 5.22 11.3 5.62L10.91 9.12H13.75L14.16 5.46C14.21 5.06 14.57 4.77 14.97 4.81C15.37 4.85 15.66 5.22 15.62 5.62L15.23 9.12H18.84C19.24 9.12 19.57 9.45 19.57 9.85C19.57 10.25 19.22 10.58 18.82 10.58Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill={`${color}`}/>
<path d="M13.8604 6.6499H10.1404C8.22039 6.6499 6.65039 8.2099 6.65039 10.1399V13.8599C6.65039 15.7799 8.22039 17.3499 10.1404 17.3499H13.8604C15.7804 17.3499 17.3504 15.7899 17.3504 13.8599V10.1399C17.3504 8.2199 15.7804 6.6499 13.8604 6.6499ZM15.9504 10.1399V11.2999H12.7004V8.0499H13.8604C15.0104 8.0499 15.9504 8.9899 15.9504 10.1399ZM10.1404 8.0499H11.3004V11.3099H8.05039V10.1499C8.05039 8.9899 8.99039 8.0499 10.1404 8.0499ZM8.05039 13.8599V12.6999H11.3104V15.9599H10.1504C8.99039 15.9499 8.05039 15.0099 8.05039 13.8599ZM13.8604 15.9499H12.7004V12.6999H15.9604V13.8599C15.9504 15.0099 15.0104 15.9499 13.8604 15.9499Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3L8 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 3L14 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0508 9H21.5008" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 9H16.99" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.95 15H2.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.4998 15H7.00977" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3L8 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 3L14 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M3.5 9H21.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M2.5 15H20.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
