<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 17.5L19 3.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 7.22998V17.5H15.27" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 22H20.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.99945 18.2499C4.80945 18.2499 4.61945 18.1799 4.46945 18.0299C4.17945 17.7399 4.17945 17.2599 4.46945 16.9699L18.4695 2.96994C18.7595 2.67994 19.2395 2.67994 19.5295 2.96994C19.8195 3.25994 19.8195 3.73994 19.5295 4.02994L5.52945 18.0299C5.37945 18.1799 5.18945 18.2499 4.99945 18.2499Z" fill={`${color}`}/>
<path d="M15.27 18.25H5C4.59 18.25 4.25 17.91 4.25 17.5V7.22998C4.25 6.81998 4.59 6.47998 5 6.47998C5.41 6.47998 5.75 6.81998 5.75 7.22998V16.75H15.27C15.68 16.75 16.02 17.09 16.02 17.5C16.02 17.91 15.68 18.25 15.27 18.25Z" fill={`${color}`}/>
<path d="M20.5 22.75H3.5C3.09 22.75 2.75 22.41 2.75 22C2.75 21.59 3.09 21.25 3.5 21.25H20.5C20.91 21.25 21.25 21.59 21.25 22C21.25 22.41 20.91 22.75 20.5 22.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.71 18.1914C4.81 18.2314 4.9 18.2514 5 18.2514H15.27C15.68 18.2514 16.02 17.9114 16.02 17.5014C16.02 17.0914 15.68 16.7514 15.27 16.7514H6.81L19.53 4.03141C19.82 3.74141 19.82 3.26141 19.53 2.97141C19.24 2.68141 18.76 2.68141 18.47 2.97141L5.75 15.6914V7.23141C5.75 6.82141 5.41 6.48141 5 6.48141C4.59 6.48141 4.25 6.82141 4.25 7.23141V17.5014C4.25 17.6014 4.27 17.6914 4.31 17.7914C4.38 17.9714 4.53 18.1214 4.71 18.1914Z" fill={`${color}`}/>
<path d="M20.5 21.25H3.5C3.09 21.25 2.75 21.59 2.75 22C2.75 22.41 3.09 22.75 3.5 22.75H20.5C20.91 22.75 21.25 22.41 21.25 22C21.25 21.59 20.91 21.25 20.5 21.25Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.99844 18.1998C4.79844 18.1998 4.59844 18.0998 4.49844 17.9998C4.19844 17.6998 4.19844 17.1998 4.49844 16.8998L18.4984 2.8998C18.7984 2.5998 19.2984 2.5998 19.5984 2.8998C19.8984 3.1998 19.8984 3.6998 19.5984 3.9998L5.59844 17.9998C5.39844 18.1998 5.19844 18.1998 4.99844 18.1998Z" fill={`${color}`}/>
<path d="M15.2992 18.1999H4.99922C4.59922 18.1999 4.19922 17.8999 4.19922 17.3999V7.1999C4.19922 6.7999 4.49922 6.3999 4.99922 6.3999C5.49922 6.3999 5.79922 6.6999 5.79922 7.1999V16.6999H15.2992C15.6992 16.6999 16.0992 16.9999 16.0992 17.4999C16.0992 17.9999 15.6992 18.1999 15.2992 18.1999Z" fill={`${color}`}/>
<path opacity="0.4" d="M20.4992 22.8002H3.49922C3.09922 22.8002 2.69922 22.5002 2.69922 22.0002C2.69922 21.5002 2.99922 21.2002 3.49922 21.2002H20.4992C20.8992 21.2002 21.2992 21.5002 21.2992 22.0002C21.2992 22.5002 20.8992 22.8002 20.4992 22.8002Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5898 5.91L18.9998 3.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 17.5001L13.38 9.12012" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 7.22998V17.5H15.27" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 22H20.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 17.5L19 3.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 7.22998V17.5H15.27" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M3.5 22H20.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
