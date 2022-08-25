<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 3H21V12" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21 3L3 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.6001 6.59998L17.4001 17.4" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21 12.75C20.59 12.75 20.25 12.41 20.25 12V3.75H12C11.59 3.75 11.25 3.41 11.25 3C11.25 2.59 11.59 2.25 12 2.25H21C21.41 2.25 21.75 2.59 21.75 3V12C21.75 12.41 21.41 12.75 21 12.75Z" fill={`${color}`} />
		<path d="M2.99948 21.75C2.80948 21.75 2.61945 21.68 2.46945 21.53C2.17945 21.24 2.17945 20.7599 2.46945 20.4699L20.4695 2.46994C20.7595 2.17994 21.2395 2.17994 21.5295 2.46994C21.8195 2.75994 21.8195 3.24 21.5295 3.53L3.52951 21.53C3.37951 21.68 3.18948 21.75 2.99948 21.75Z" fill={`${color}`} />
		<path d="M17.4001 18.1501C17.2101 18.1501 17.02 18.08 16.87 17.93L6.07004 7.13004C5.78004 6.84004 5.78004 6.36004 6.07004 6.07004C6.36004 5.78004 6.84004 5.78004 7.13004 6.07004L17.93 16.87C18.22 17.16 18.22 17.64 17.93 17.93C17.78 18.08 17.5901 18.1501 17.4001 18.1501Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21.6895 2.71C21.6095 2.53 21.4695 2.38 21.2795 2.3C21.1895 2.27 21.0995 2.25 20.9995 2.25H11.9995C11.5895 2.25 11.2495 2.59 11.2495 3C11.2495 3.41 11.5895 3.75 11.9995 3.75H19.1895L2.46945 20.47C2.17945 20.76 2.17945 21.24 2.46945 21.53C2.61945 21.68 2.80945 21.75 2.99945 21.75C3.18945 21.75 3.37945 21.68 3.52945 21.53L20.2495 4.81V12C20.2495 12.41 20.5895 12.75 20.9995 12.75C21.4095 12.75 21.7495 12.41 21.7495 12V3C21.7495 2.9 21.7295 2.81 21.6895 2.71Z" fill={`${color}`} />
		<path d="M17.3991 18.1491C17.2091 18.1491 17.0191 18.0791 16.8691 17.9291L6.06906 7.12906C5.77906 6.83906 5.77906 6.35906 6.06906 6.06906C6.35906 5.77906 6.83906 5.77906 7.12906 6.06906L17.9291 16.8691C18.2191 17.1591 18.2191 17.6391 17.9291 17.9291C17.7791 18.0791 17.5891 18.1491 17.3991 18.1491Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21.6897 2.71002C21.6097 2.53002 21.4697 2.37999 21.2797 2.29999C21.1897 2.25999 21.0897 2.23999 20.9897 2.23999H11.9897C11.5797 2.23999 11.2397 2.57999 11.2397 2.98999C11.2397 3.39999 11.5797 3.73999 11.9897 3.73999H19.1797L2.45969 20.46C2.16969 20.75 2.16969 21.23 2.45969 21.52C2.60969 21.67 2.79966 21.74 2.98966 21.74C3.17966 21.74 3.36969 21.67 3.51969 21.52L20.2397 4.79999V12C20.2397 12.41 20.5797 12.75 20.9897 12.75C21.3997 12.75 21.7397 12.41 21.7397 12V3C21.7497 2.9 21.7297 2.81002 21.6897 2.71002Z" fill={`${color}`} />
		<path opacity="0.4" d="M17.3991 18.1501C17.2091 18.1501 17.019 18.08 16.8691 17.93L6.06906 7.13004C5.77906 6.84004 5.77906 6.36004 6.06906 6.07004C6.35906 5.78004 6.83906 5.78004 7.12906 6.07004L17.929 16.87C18.219 17.16 18.219 17.64 17.929 17.93C17.779 18.08 17.5891 18.1501 17.3991 18.1501Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 3H21V12" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8.03003 15.97L3 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21.0002 3L10.9102 13.09" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.59961 6.6001L17.3997 17.4001" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 3H21V12" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21 3L3 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M6.59961 6.6001L17.3997 17.4001" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
