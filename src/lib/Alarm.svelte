<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 22H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 6C7.03 6 3 10.03 3 15V22H21V15C21 10.03 16.97 6 12 6Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 2V3" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M4 4L5 5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20 4L19 5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z" fill={`${color}`} />
		<path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22V15C2.25 9.62 6.62 5.25 12 5.25C17.38 5.25 21.75 9.62 21.75 15V22C21.75 22.41 21.41 22.75 21 22.75ZM3.75 21.25H20.25V15C20.25 10.45 16.55 6.75 12 6.75C7.45 6.75 3.75 10.45 3.75 15V21.25Z" fill={`${color}`} />
		<path d="M12 3.75C11.59 3.75 11.25 3.41 11.25 3V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V3C12.75 3.41 12.41 3.75 12 3.75Z" fill={`${color}`} />
		<path d="M4.99945 5.74994C4.80945 5.74994 4.61945 5.67994 4.46945 5.52994L3.46945 4.52994C3.17945 4.23994 3.17945 3.75994 3.46945 3.46994C3.75945 3.17994 4.23945 3.17994 4.52945 3.46994L5.52945 4.46994C5.81945 4.75994 5.81945 5.23994 5.52945 5.52994C5.37945 5.67994 5.18945 5.74994 4.99945 5.74994Z" fill={`${color}`} />
		<path d="M18.9995 5.74994C18.8095 5.74994 18.6195 5.67994 18.4695 5.52994C18.1795 5.23994 18.1795 4.75994 18.4695 4.46994L19.4695 3.46994C19.7595 3.17994 20.2395 3.17994 20.5295 3.46994C20.8195 3.75994 20.8195 4.23994 20.5295 4.52994L19.5295 5.52994C19.3795 5.67994 19.1895 5.74994 18.9995 5.74994Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22 21.25H21V15C21 10.03 16.97 6 12 6C7.03 6 3 10.03 3 15V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H22C22.41 22.75 22.75 22.41 22.75 22C22.75 21.59 22.41 21.25 22 21.25Z" fill={`${color}`} />
		<path d="M12 3.75C11.59 3.75 11.25 3.41 11.25 3V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V3C12.75 3.41 12.41 3.75 12 3.75Z" fill={`${color}`} />
		<path d="M5.00141 5.75141C4.81141 5.75141 4.62141 5.68141 4.47141 5.53141L3.47141 4.53141C3.18141 4.24141 3.18141 3.76141 3.47141 3.47141C3.76141 3.18141 4.24141 3.18141 4.53141 3.47141L5.53141 4.47141C5.82141 4.76141 5.82141 5.24141 5.53141 5.53141C5.38141 5.68141 5.19141 5.75141 5.00141 5.75141Z" fill={`${color}`} />
		<path d="M19.0014 5.75141C18.8114 5.75141 18.6214 5.68141 18.4714 5.53141C18.1814 5.24141 18.1814 4.76141 18.4714 4.47141L19.4714 3.47141C19.7614 3.18141 20.2414 3.18141 20.5314 3.47141C20.8214 3.76141 20.8214 4.24141 20.5314 4.53141L19.5314 5.53141C19.3814 5.68141 19.1914 5.75141 19.0014 5.75141Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M22.75 22C22.75 22.41 22.41 22.75 22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22Z" fill={`${color}`} />
		<path d="M21 15V21.25H3V15C3 10.03 7.03 6 12 6C16.97 6 21 10.03 21 15Z" fill={`${color}`} />
		<path opacity="0.4" d="M12 3.75C11.59 3.75 11.25 3.41 11.25 3V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V3C12.75 3.41 12.41 3.75 12 3.75Z" fill={`${color}`} />
		<path opacity="0.4" d="M4.99945 5.74994C4.80945 5.74994 4.61945 5.67994 4.46945 5.52994L3.46945 4.52994C3.17945 4.23994 3.17945 3.75994 3.46945 3.46994C3.75945 3.17994 4.23945 3.17994 4.52945 3.46994L5.52945 4.46994C5.81945 4.75994 5.81945 5.23994 5.52945 5.52994C5.37945 5.67994 5.18945 5.74994 4.99945 5.74994Z" fill={`${color}`} />
		<path opacity="0.4" d="M18.9995 5.74994C18.8095 5.74994 18.6195 5.67994 18.4695 5.52994C18.1795 5.23994 18.1795 4.75994 18.4695 4.46994L19.4695 3.46994C19.7595 3.17994 20.2395 3.17994 20.5295 3.46994C20.8195 3.75994 20.8195 4.23994 20.5295 4.52994L19.5295 5.52994C19.3795 5.67994 19.1895 5.74994 18.9995 5.74994Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 22H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21 16.03V15C21 10.03 16.97 6 12 6C10.56 6 9.21 6.34 8 6.94C7.26 7.31 6.58 7.77001 5.97 8.32001C4.15 9.97001 3 12.35 3 15V22H21V19.97" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 2V3" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M4 4L5 5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20 4L19 5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 22H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 6C7.03 6 3 10.03 3 15V22H21V15C21 10.03 16.97 6 12 6Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M12 2V3" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M4 4L5 5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M20 4L19 5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
