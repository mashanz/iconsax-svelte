<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.90997 17.58L6.41998 21.09C7.58998 22.26 9.49997 22.26 10.66 21.09L21.09 10.66C22.26 9.48997 22.26 7.57997 21.09 6.41997L17.58 2.90997C16.41 1.73997 14.5 1.73997 13.34 2.90997L2.90997 13.34C1.73997 14.5 1.73997 16.41 2.90997 17.58Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.12 9.12988L14.87 16.8799" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.52002 17.66L9.16998 12" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.34003 20.4901L12 14.8301" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 22.75H9C8.59 22.75 8.25 22.41 8.25 22C8.25 21.59 8.59 21.25 9 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill={`${color}`}/>
<path d="M8.54013 22.71C7.54013 22.71 6.59017 22.32 5.89017 21.61L2.38016 18.1C0.920156 16.64 0.920156 14.26 2.38016 12.8L12.8101 2.37C14.2201 0.96 16.7001 0.96 18.1101 2.37L21.6201 5.87999C23.0801 7.33999 23.0801 9.72 21.6201 11.18L11.1902 21.61C10.4902 22.33 9.55013 22.71 8.54013 22.71ZM3.44015 17.05L6.95016 20.56C7.80016 21.41 9.29016 21.41 10.1302 20.56L20.5601 10.13C21.4401 9.24999 21.4401 7.82999 20.5601 6.94999L17.0501 3.44C16.2101 2.6 14.7201 2.59 13.8701 3.44L3.44015 13.87C2.56015 14.74 2.56015 16.17 3.44015 17.05Z" fill={`${color}`}/>
<path d="M14.8705 17.6298C14.6805 17.6298 14.4905 17.5598 14.3405 17.4098L6.59055 9.65983C6.30055 9.36983 6.30055 8.88982 6.59055 8.59982C6.88055 8.30982 7.36054 8.30982 7.65054 8.59982L15.4005 16.3498C15.6905 16.6398 15.6905 17.1198 15.4005 17.4098C15.2505 17.5598 15.0605 17.6298 14.8705 17.6298Z" fill={`${color}`}/>
<path d="M3.52097 18.4099C3.33097 18.4099 3.14094 18.3399 2.99094 18.1899C2.70094 17.8999 2.70094 17.4199 2.99094 17.1299L8.65097 11.4699C8.94097 11.1799 9.42097 11.1799 9.71097 11.4699C10.001 11.7599 10.001 12.2399 9.71097 12.5299L4.05094 18.1899C3.90094 18.3399 3.71097 18.4099 3.52097 18.4099Z" fill={`${color}`}/>
<path d="M6.33933 21.24C6.14933 21.24 5.9593 21.17 5.8093 21.02C5.5193 20.73 5.5193 20.25 5.8093 19.96L11.4693 14.3C11.7593 14.01 12.2393 14.01 12.5293 14.3C12.8193 14.59 12.8193 15.07 12.5293 15.36L6.86929 21.02C6.72929 21.16 6.53933 21.24 6.33933 21.24Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.0302 22H13.9902C13.5702 22 13.2402 21.66 13.2402 21.25C13.2402 20.84 13.5802 20.5 13.9902 20.5H21.0302C21.4502 20.5 21.7802 20.84 21.7802 21.25C21.7802 21.66 21.4502 22 21.0302 22Z" fill={`${color}`}/>
<path d="M13.64 16.6894C14.03 17.0794 14.03 17.7094 13.64 18.1094L10.66 21.0894C9.55 22.1994 7.77 22.2594 6.59 21.2694C6.52 21.2094 6.46 21.1494 6.4 21.0894L5.53 20.2194L3.74 18.4294L2.88 17.5694C2.81 17.4994 2.75 17.4294 2.69 17.3594C1.71 16.1794 1.78 14.4194 2.88 13.3194L5.86 10.3394C6.25 9.94938 6.88 9.94938 7.27 10.3394L13.64 16.6894Z" fill={`${color}`}/>
<path d="M21.1194 10.6414L16.1194 15.6414C15.7294 16.0314 15.0994 16.0314 14.7094 15.6414L8.33937 9.29141C7.94938 8.90141 7.94938 8.27141 8.33937 7.87141L13.3394 2.88141C14.5094 1.71141 16.4294 1.71141 17.5994 2.88141L21.1194 6.39141C22.2894 7.56141 22.2894 9.47141 21.1194 10.6414Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill={`${color}`}/>
<path d="M13.5794 14.6899L11.2594 17.0099C10.6194 17.6599 9.56945 17.6599 8.91945 17.0099L6.98945 15.0799C6.33945 14.4299 6.33945 13.3799 6.98945 12.7399L9.30945 10.4199L13.5794 14.6899Z" fill={`${color}`}/>
<path opacity="0.6" d="M17.0105 11.2599L13.5806 14.6899L9.31055 10.4199L12.7406 6.98994C13.3806 6.33994 14.4306 6.33994 15.0806 6.98994L17.0105 8.91994C17.6605 9.56994 17.6605 10.6199 17.0105 11.2599Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.0908 10.66C22.2608 9.48997 22.2608 7.57997 21.0908 6.41997L17.5807 2.90997C16.4107 1.73997 14.5008 1.73997 13.3408 2.90997L2.9107 13.34C1.7407 14.51 1.7407 16.42 2.9107 17.58L6.42071 21.09C7.59071 22.26 9.5007 22.26 10.6607 21.09L17.7407 14.01" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.11914 9.12988L14.8691 16.8799" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.51953 17.66L9.16949 12" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.33984 20.4901L11.9998 14.8301" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.9107 17.5802L6.42071 21.0902C7.59071 22.2602 9.5007 22.2602 10.6607 21.0902L21.0908 10.6602C22.2608 9.49021 22.2608 7.58021 21.0908 6.42021L17.5807 2.91021C16.4107 1.74021 14.5008 1.74021 13.3408 2.91021L2.9107 13.3402C1.7407 14.5002 1.7407 16.4102 2.9107 17.5802Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.4">
<path d="M7.11914 9.12988L14.8691 16.8799" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.51953 17.66L9.16949 12" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.33984 20.4901L11.9998 14.8301" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

{/if}
