<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 22H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 2H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V18" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8299 7.71989L11.9999 4.88989L9.16992 7.71989" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8299 15.8899L11.9999 18.7199L9.16992 15.8899" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill={`${color}`}/>
<path d="M21 2.75H3C2.59 2.75 2.25 2.41 2.25 2C2.25 1.59 2.59 1.25 3 1.25H21C21.41 1.25 21.75 1.59 21.75 2C21.75 2.41 21.41 2.75 21 2.75Z" fill={`${color}`}/>
<path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z" fill={`${color}`}/>
<path d="M14.8294 8.4699C14.6394 8.4699 14.4494 8.3999 14.2994 8.2499L11.9994 5.9499L9.69937 8.2499C9.40937 8.5399 8.92937 8.5399 8.63938 8.2499C8.34938 7.9599 8.34938 7.4799 8.63938 7.1899L11.4694 4.3599C11.7494 4.0799 12.2494 4.0799 12.5294 4.3599L15.3594 7.1899C15.6494 7.4799 15.6494 7.9599 15.3594 8.2499C15.2094 8.3999 15.0194 8.4699 14.8294 8.4699Z" fill={`${color}`}/>
<path d="M11.9994 19.4701C11.7994 19.4701 11.6094 19.3901 11.4694 19.2501L8.63938 16.4201C8.34938 16.1301 8.34938 15.6501 8.63938 15.3601C8.92937 15.0701 9.40937 15.0701 9.69937 15.3601L11.9994 17.6601L14.2994 15.3601C14.5894 15.0701 15.0694 15.0701 15.3594 15.3601C15.6494 15.6501 15.6494 16.1301 15.3594 16.4201L12.5294 19.2501C12.3894 19.3901 12.1994 19.4701 11.9994 19.4701Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill={`${color}`}/>
<path d="M21 2.75H3C2.59 2.75 2.25 2.41 2.25 2C2.25 1.59 2.59 1.25 3 1.25H21C21.41 1.25 21.75 1.59 21.75 2C21.75 2.41 21.41 2.75 21 2.75Z" fill={`${color}`}/>
<path d="M14.2994 15.3584L12.7494 16.9084V6.69844L14.2994 8.24844C14.4494 8.39844 14.6394 8.46844 14.8294 8.46844C15.0194 8.46844 15.2094 8.39844 15.3594 8.24844C15.6494 7.95844 15.6494 7.47844 15.3594 7.18844L12.5294 4.35844C12.2494 4.07844 11.7494 4.07844 11.4694 4.35844L8.63938 7.18844C8.34938 7.47844 8.34938 7.95844 8.63938 8.24844C8.92937 8.53844 9.40937 8.53844 9.69937 8.24844L11.2494 6.69844V16.9084L9.69937 15.3584C9.40937 15.0684 8.92937 15.0684 8.63938 15.3584C8.34938 15.6484 8.34938 16.1284 8.63938 16.4184L11.4694 19.2484C11.6094 19.3884 11.7994 19.4684 11.9994 19.4684C12.1994 19.4684 12.3894 19.3884 12.5294 19.2484L15.3594 16.4184C15.6494 16.1284 15.6494 15.6484 15.3594 15.3584C15.0694 15.0684 14.5894 15.0684 14.2994 15.3584Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill={`${color}`}/>
<path opacity="0.4" d="M21 2.75H3C2.59 2.75 2.25 2.41 2.25 2C2.25 1.59 2.59 1.25 3 1.25H21C21.41 1.25 21.75 1.59 21.75 2C21.75 2.41 21.41 2.75 21 2.75Z" fill={`${color}`}/>
<path d="M14.2994 15.3599L12.7494 16.9099V6.6999L14.2994 8.2499C14.4494 8.3999 14.6394 8.4699 14.8294 8.4699C15.0194 8.4699 15.2094 8.3999 15.3594 8.2499C15.6494 7.9599 15.6494 7.4799 15.3594 7.1899L12.5294 4.3599C12.2494 4.0799 11.7494 4.0799 11.4694 4.3599L8.63938 7.1899C8.34938 7.4799 8.34938 7.9599 8.63938 8.2499C8.92937 8.5399 9.40937 8.5399 9.69937 8.2499L11.2494 6.6999V16.9099L9.69937 15.3599C9.40937 15.0699 8.92937 15.0699 8.63938 15.3599C8.34938 15.6499 8.34938 16.1299 8.63938 16.4199L11.4694 19.2499C11.6094 19.3899 11.7994 19.4699 11.9994 19.4699C12.1994 19.4699 12.3894 19.3899 12.5294 19.2499L15.3594 16.4199C15.6494 16.1299 15.6494 15.6499 15.3594 15.3599C15.0694 15.0699 14.5894 15.0699 14.2994 15.3599Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 2H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V18" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8299 7.71989L11.9999 4.88989L9.16992 7.71989" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8299 15.8899L11.9999 18.7199L9.16992 15.8899" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0508 22H21.0008" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 22H5.98" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 22H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 2H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.4">
<path d="M12 6V18" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8299 7.71965L11.9999 4.88965L9.16992 7.71965" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8299 15.8896L11.9999 18.7196L9.16992 15.8896" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

{/if}
