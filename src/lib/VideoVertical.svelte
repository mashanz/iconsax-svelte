<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.88989 2.52002V21.48" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16.8899 2.52002V21.48" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.89004 6.96997H2.54004" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.89003 12H2.03003" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.88998 16.97H2.47998" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21.89 6.96997H17.54" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21.89 12H17.03" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16.97 12H5.96997" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21.89 16.97H17.48" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={`${color}`} />
		<path d="M6.89062 22.23C6.48063 22.23 6.14062 21.89 6.14062 21.48V2.52002C6.14062 2.11002 6.48063 1.77002 6.89062 1.77002C7.30062 1.77002 7.64062 2.10002 7.64062 2.52002V21.48C7.64062 21.9 7.30062 22.23 6.89062 22.23Z" fill={`${color}`} />
		<path d="M16.8906 22.23C16.4806 22.23 16.1406 21.89 16.1406 21.48V2.52002C16.1406 2.11002 16.4806 1.77002 16.8906 1.77002C17.3006 1.77002 17.6406 2.11002 17.6406 2.52002V21.48C17.6406 21.9 17.3006 22.23 16.8906 22.23Z" fill={`${color}`} />
		<path d="M6.88906 7.72021H2.53906C2.12906 7.72021 1.78906 7.38021 1.78906 6.97021C1.78906 6.56021 2.12906 6.22021 2.53906 6.22021H6.88906C7.29906 6.22021 7.63906 6.56021 7.63906 6.97021C7.63906 7.38021 7.29906 7.72021 6.88906 7.72021Z" fill={`${color}`} />
		<path d="M6.8893 12.75H2.0293C1.6193 12.75 1.2793 12.41 1.2793 12C1.2793 11.59 1.6193 11.25 2.0293 11.25H6.8893C7.2993 11.25 7.6393 11.59 7.6393 12C7.6393 12.41 7.2993 12.75 6.8893 12.75Z" fill={`${color}`} />
		<path d="M6.89047 17.7202H2.48047C2.07047 17.7202 1.73047 17.3802 1.73047 16.9702C1.73047 16.5602 2.07047 16.2202 2.48047 16.2202H6.89047C7.30047 16.2202 7.64047 16.5602 7.64047 16.9702C7.64047 17.3802 7.30047 17.7202 6.89047 17.7202Z" fill={`${color}`} />
		<path d="M21.8891 7.72021H17.5391C17.1291 7.72021 16.7891 7.38021 16.7891 6.97021C16.7891 6.56021 17.1291 6.22021 17.5391 6.22021H21.8891C22.2991 6.22021 22.6391 6.56021 22.6391 6.97021C22.6391 7.38021 22.2991 7.72021 21.8891 7.72021Z" fill={`${color}`} />
		<path d="M21.8893 12.75H17.0293C16.6193 12.75 16.2793 12.41 16.2793 12C16.2793 11.59 16.6193 11.25 17.0293 11.25H21.8893C22.2993 11.25 22.6393 11.59 22.6393 12C22.6393 12.41 22.2993 12.75 21.8893 12.75Z" fill={`${color}`} />
		<path d="M16.9707 12.75H5.9707C5.5607 12.75 5.2207 12.41 5.2207 12C5.2207 11.59 5.5607 11.25 5.9707 11.25H16.9707C17.3807 11.25 17.7207 11.59 17.7207 12C17.7207 12.41 17.3907 12.75 16.9707 12.75Z" fill={`${color}`} />
		<path d="M21.8905 17.7202H17.4805C17.0705 17.7202 16.7305 17.3802 16.7305 16.9702C16.7305 16.5602 17.0705 16.2202 17.4805 16.2202H21.8905C22.3005 16.2202 22.6405 16.5602 22.6405 16.9702C22.6405 17.3802 22.3005 17.7202 21.8905 17.7202Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.36 7.78125H2V11.2512H6.36V7.78125Z" fill={`${color}`} />
		<path d="M6.35844 6.28891V2.12891C4.07844 2.54891 2.58844 4.01891 2.14844 6.27891H6.32844C6.33844 6.27891 6.34844 6.28891 6.35844 6.28891Z" fill={`${color}`} />
		<path d="M6.36 16.31V12.75H2V16.28H6.24C6.28 16.28 6.32 16.3 6.36 16.31Z" fill={`${color}`} />
		<path d="M21.8494 6.27969C21.4194 4.08969 20.0194 2.64969 17.8594 2.17969V6.27969H21.8494Z" fill={`${color}`} />
		<path d="M16.3594 11.25V2.01C16.3094 2 16.2494 2 16.1894 2H7.85938V11.25H16.3594Z" fill={`${color}`} />
		<path d="M21.9994 12.75H17.8594V16.28H21.9994V12.75Z" fill={`${color}`} />
		<path d="M17.8594 21.8212C19.9994 21.3512 21.3994 19.9313 21.8394 17.7812H17.8594V21.8212Z" fill={`${color}`} />
		<path d="M6.24016 17.7817H2.16016C2.62016 20.0017 4.10016 21.4517 6.36016 21.8717V17.7617C6.32016 17.7717 6.28016 17.7817 6.24016 17.7817Z" fill={`${color}`} />
		<path d="M21.9994 7.78125H17.8594V11.2512H21.9994V7.78125Z" fill={`${color}`} />
		<path d="M7.85938 12.75V22H16.1894C16.2494 22 16.3094 22 16.3594 21.99V12.75H7.85938Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M7.81 2H16.19C16.25 2 16.31 2 16.36 2.01C16.9 2.01 17.4 2.07 17.86 2.18C20.02 2.65 21.42 4.09 21.85 6.28C21.95 6.75 22 7.25 22 7.78V16.28C21.99 16.81 21.94 17.31 21.84 17.78C21.4 19.93 20 21.35 17.86 21.82C17.4 21.93 16.9 21.99 16.36 21.99C16.31 22 16.25 22 16.19 22H7.81C7.3 22 6.81 21.96 6.36 21.87C4.1 21.45 2.62 20 2.16 17.78C2.05 17.31 2 16.81 2 16.28V7.77C2 7.24 2.05 6.74 2.15 6.28C2.59 4.02 4.08 2.55 6.36 2.13C6.81 2.04 7.3 2 7.81 2Z" fill={`${color}`} />
		<path d="M7.86 11.25H16.36V2.01C16.9 2.01 17.4 2.07 17.86 2.18V6.28H21.85C21.95 6.75 22 7.25 22 7.78H17.86V11.25H22V12.75H17.86V16.28H22C21.99 16.81 21.94 17.31 21.84 17.78H17.86V21.82C17.4 21.93 16.9 21.99 16.36 21.99V12.75H7.86V22H7.81C7.3 22 6.81 21.96 6.36 21.87V17.76C6.32 17.77 6.28 17.78 6.24 17.78H2.16C2.05 17.31 2 16.81 2 16.28H6.24C6.28 16.28 6.32 16.3 6.36 16.31V12.75H2V11.25H6.36V7.78H2V7.77C2 7.24 2.05 6.74 2.15 6.28H6.33C6.34 6.28 6.35 6.29 6.36 6.29V2.13C6.81 2.04 7.3 2 7.81 2H7.86V11.25Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 2C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H12.98" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.89062 2.52002V21.48" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16.8906 2.52002V21.48" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.88906 6.96997H2.53906" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.8893 12H2.0293" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.89047 16.97H2.48047" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21.8891 6.96997H17.5391" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21.8893 12H17.0293" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16.9707 12H5.9707" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21.8905 16.97H17.4805" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<g opacity="0.4">
			<path d="M6.89062 2.51953V21.4795" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M16.8906 2.51953V21.4795" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M6.88906 6.96973H2.53906" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M6.8893 12H2.0293" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M6.89047 16.9697H2.48047" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M21.8891 6.96973H17.5391" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M21.8893 12H17.0293" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M16.9707 12H5.9707" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M21.8905 16.9697H17.4805" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</g>
	</svg>
{/if}
