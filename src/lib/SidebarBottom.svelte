<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22H14.97C19.97 22 21.97 20 21.97 15Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 15.5H2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.56 8.5L12 11.06L9.44 8.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9707 22.75H8.9707C3.5407 22.75 1.2207 20.43 1.2207 15V9C1.2207 3.57 3.5407 1.25 8.9707 1.25H14.9707C20.4007 1.25 22.7207 3.57 22.7207 9V15C22.7207 20.43 20.4107 22.75 14.9707 22.75ZM8.9707 2.75C4.3607 2.75 2.7207 4.39 2.7207 9V15C2.7207 19.61 4.3607 21.25 8.9707 21.25H14.9707C19.5807 21.25 21.2207 19.61 21.2207 15V9C21.2207 4.39 19.5807 2.75 14.9707 2.75H8.9707Z" fill={`${color}`}/>
<path d="M22 16.25H2C1.59 16.25 1.25 15.91 1.25 15.5C1.25 15.09 1.59 14.75 2 14.75H22C22.41 14.75 22.75 15.09 22.75 15.5C22.75 15.91 22.41 16.25 22 16.25Z" fill={`${color}`}/>
<path d="M12.0009 11.8099C11.8109 11.8099 11.6209 11.7399 11.4709 11.5899L8.91086 9.02994C8.62086 8.73994 8.62086 8.25994 8.91086 7.96994C9.20086 7.67994 9.68086 7.67994 9.97086 7.96994L12.0009 9.99994L14.0309 7.96994C14.3209 7.67994 14.8009 7.67994 15.0909 7.96994C15.3809 8.25994 15.3809 8.73994 15.0909 9.02994L12.5309 11.5899C12.3809 11.7399 12.1909 11.8099 12.0009 11.8099Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.04953 19.8713C3.33953 20.2913 3.70953 20.6613 4.12953 20.9513C5.07953 21.6413 6.31953 22.0012 7.80953 22.0012H16.1895C19.6295 22.0012 21.7595 20.0612 21.9695 16.7812H2.01953C2.09953 18.0113 2.44953 19.0513 3.04953 19.8713Z" fill={`${color}`}/>
<path d="M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81V15.28H22V7.81C22 6.32 21.64 5.08 20.95 4.13ZM15.09 9.56L12.53 12.12C12.24 12.41 11.76 12.41 11.47 12.12L8.91 9.56C8.76 9.41 8.69 9.22 8.69 9.03C8.69 8.84 8.76 8.64 8.91 8.5C9.2 8.2 9.68 8.2 9.97 8.5L12 10.52L14.03 8.49C14.32 8.2 14.8 8.2 15.09 8.49C15.38 8.78 15.38 9.26 15.09 9.56Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 16.39 2.01 16.59 2.02 16.78C2.1 18.01 2.45 19.05 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C5.08 21.64 6.32 22 7.81 22H16.19C19.63 22 21.76 20.06 21.97 16.78C21.99 16.59 22 16.39 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2Z" fill={`${color}`}/>
<path d="M22 15.2798H2V16.1898C2 16.3898 2.01 16.5898 2.02 16.7798H21.97C21.99 16.5898 22 16.3898 22 16.1898V15.2798Z" fill={`${color}`}/>
<path d="M8.68945 9.0299C8.68945 9.2199 8.75945 9.4099 8.90945 9.5599L11.4695 12.1199C11.7595 12.4099 12.2395 12.4099 12.5295 12.1199L15.0895 9.5599C15.3795 9.2699 15.3795 8.7899 15.0895 8.4999C14.7995 8.2099 14.3195 8.2099 14.0295 8.4999L11.9995 10.5199L9.96945 8.4999C9.67945 8.1999 9.19945 8.1999 8.90945 8.4999C8.75945 8.6399 8.68945 8.8299 8.68945 9.0299Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 15.5H2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5595 8.5L11.9995 11.06L9.43945 8.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 15.5H2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.9707 11.02V9C1.9707 4 3.9707 2 8.9707 2H14.9707C19.9707 2 21.9707 4 21.9707 9V15C21.9707 20 19.9707 22 14.9707 22H8.9707C3.9707 22 1.9707 20 1.9707 15" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M22 15.5H2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M14.5595 8.5L11.9995 11.06L9.43945 8.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
