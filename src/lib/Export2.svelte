<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 11L21.2 2.80005" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 6.8V2H17.2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2C12.75 2.41 12.41 2.75 12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 11.59 21.59 11.25 22 11.25C22.41 11.25 22.75 11.59 22.75 12C22.75 17.93 17.93 22.75 12 22.75Z" fill={`${color}`}/>
<path d="M12.9995 11.75C12.8095 11.75 12.6195 11.68 12.4695 11.53C12.1795 11.24 12.1795 10.76 12.4695 10.47L20.6695 2.26999C20.9595 1.97999 21.4395 1.97999 21.7295 2.26999C22.0195 2.55999 22.0195 3.03999 21.7295 3.32999L13.5295 11.53C13.3795 11.68 13.1895 11.75 12.9995 11.75Z" fill={`${color}`}/>
<path d="M21.9999 7.58C21.5899 7.58 21.2499 7.24 21.2499 6.83V2.75H17.1699C16.7599 2.75 16.4199 2.41 16.4199 2C16.4199 1.59 16.7599 1.25 17.1699 1.25H21.9999C22.4099 1.25 22.7499 1.59 22.7499 2V6.83C22.7499 7.24 22.4099 7.58 21.9999 7.58Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.14 9.89844H12.75V15.3784C12.75 15.7884 12.41 16.1284 12 16.1284C11.59 16.1284 11.25 15.7884 11.25 15.3784V9.89844H2.86C2.38 9.89844 2 10.2784 2 10.7584C2 16.6484 6.11 20.7584 12 20.7584C17.89 20.7584 22 16.6484 22 10.7584C22 10.2784 21.62 9.89844 21.14 9.89844Z" fill={`${color}`}/>
<path d="M12.7484 5.79969L14.3084 7.35969C14.5984 7.64969 15.0784 7.64969 15.3684 7.35969C15.6584 7.06969 15.6584 6.58969 15.3684 6.29969L12.5184 3.45969C12.2284 3.16969 11.7484 3.16969 11.4584 3.45969L8.61844 6.30969C8.47844 6.45969 8.39844 6.64969 8.39844 6.83969C8.39844 7.02969 8.46844 7.21969 8.61844 7.36969C8.90844 7.65969 9.38844 7.65969 9.67844 7.36969L11.2384 5.80969V9.89969H12.7384V5.79969H12.7484Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={`${color}`}/>
<path d="M16.7475 7H11.9175C11.5075 7 11.1675 7.34 11.1675 7.75C11.1675 8.16 11.5075 8.5 11.9175 8.5H14.9375L7.2175 16.22C6.9275 16.51 6.9275 16.99 7.2175 17.28C7.3675 17.43 7.5575 17.5 7.7475 17.5C7.9375 17.5 8.1275 17.43 8.2775 17.28L15.9975 9.56V12.58C15.9975 12.99 16.3375 13.33 16.7475 13.33C17.1575 13.33 17.4975 12.99 17.4975 12.58V7.75C17.4975 7.34 17.1575 7 16.7475 7Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5605 7.44005L21.2005 2.80005" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 11L14 10" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.9999 6.83V2H17.1699" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.4">
<path d="M13 10.9998L21.2 2.7998" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.9992 6.8V2H17.1992" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
