<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12.61 2.21C12.25 1.93 11.75 1.93 11.39 2.21C9.49001 3.66 3.87997 8.39 3.90997 13.9C3.90997 18.36 7.54001 22 12.01 22C16.48 22 20.11 18.37 20.11 13.91C20.12 8.48 14.5 3.67 12.61 2.21Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" />
		<path d="M12 2V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 18.96L19.7 15.22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 13.9599L19.37 10.3799" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 8.96001L17.03 6.51001" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12.0005 22.75C7.12049 22.75 3.15051 18.78 3.15051 13.9C3.12051 8.17 8.58048 3.4 10.9305 1.61C11.5605 1.13 12.4405 1.13 13.0705 1.61C15.4205 3.43 20.8805 8.26 20.8505 13.91C20.8505 18.78 16.8805 22.75 12.0005 22.75ZM12.0005 2.75C11.9505 2.75 11.8905 2.77 11.8405 2.81C10.1505 4.1 4.63046 8.71 4.66046 13.9C4.66046 17.96 7.9605 21.25 12.0105 21.25C16.0605 21.25 19.3605 17.96 19.3605 13.91C19.3905 8.79 13.8605 4.12 12.1605 2.81C12.1005 2.77 12.0505 2.75 12.0005 2.75Z" fill={`${color}`} />
		<path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V22C12.75 22.41 12.41 22.75 12 22.75Z" fill={`${color}`} />
		<path d="M11.9999 19.7102C11.7199 19.7102 11.4499 19.5502 11.3199 19.2902C11.1399 18.9202 11.2899 18.4702 11.6699 18.2902L19.3699 14.5502C19.7399 14.3702 20.1899 14.5302 20.3699 14.9002C20.5499 15.2702 20.4 15.7202 20.02 15.9002L12.3199 19.6402C12.2199 19.6802 12.1099 19.7102 11.9999 19.7102Z" fill={`${color}`} />
		<path d="M11.9999 14.7101C11.7199 14.7101 11.4499 14.5501 11.3199 14.2901C11.1399 13.9201 11.2899 13.4701 11.6699 13.2901L19.0399 9.71008C19.4099 9.53008 19.8599 9.68008 20.0399 10.0601C20.2199 10.4401 20.0699 10.8801 19.6899 11.0601L12.3199 14.6401C12.2199 14.6801 12.1099 14.7101 11.9999 14.7101Z" fill={`${color}`} />
		<path d="M11.9999 9.70997C11.7199 9.70997 11.4499 9.54997 11.3199 9.28997C11.1399 8.91997 11.2899 8.46997 11.6699 8.28997L16.7 5.84997C17.07 5.66997 17.52 5.82996 17.7 6.19996C17.88 6.56996 17.7299 7.01996 17.3499 7.19996L12.3199 9.63997C12.2199 9.67997 12.1099 9.70997 11.9999 9.70997Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M13.47 7.41158L15.93 6.20158C16.23 6.05158 16.31 5.66158 16.08 5.42158C15.19 4.44158 14.29 3.62158 13.57 3.00158C13.24 2.72158 12.75 2.95158 12.75 3.38158V6.96158C12.75 7.33158 13.14 7.57158 13.47 7.41158Z" fill={`${color}`} />
		<path d="M12.75 19.7384V21.3884C12.75 21.6884 13.02 21.9384 13.32 21.8884C16.05 21.4384 18.33 19.6084 19.41 17.1484C19.6 16.7284 19.14 16.3084 18.72 16.5084L13.03 19.2984C12.86 19.3784 12.75 19.5484 12.75 19.7384Z" fill={`${color}`} />
		<path d="M11.2505 3.36159C11.2505 2.93159 10.7605 2.70159 10.4305 2.97159C8.07046 4.95159 3.88046 9.12158 3.90046 13.9016C3.90046 17.9216 6.84046 21.2516 10.6805 21.8916C10.9805 21.9416 11.2505 21.6916 11.2505 21.3916V3.36159Z" fill={`${color}`} />
		<path d="M13.4402 12.4714L18.7302 10.2514C19.0002 10.1314 19.1302 9.82141 19.0002 9.56141C18.6302 8.83141 18.2002 8.12141 17.7302 7.46141C17.5902 7.26141 17.3302 7.20141 17.1102 7.30141L13.0202 9.29141C12.8502 9.37141 12.7402 9.55141 12.7402 9.74141V12.0114C12.7502 12.3614 13.1102 12.6114 13.4402 12.4714Z" fill={`${color}`} />
		<path d="M19.83 14.3107C19.99 14.2307 20.09 14.0807 20.09 13.9107C20.09 13.2707 20.01 12.6407 19.87 12.0207C19.8 11.7207 19.47 11.5607 19.19 11.6807L13.05 14.3007C12.87 14.3807 12.75 14.5607 12.75 14.7607V16.9607C12.75 17.3307 13.14 17.5707 13.47 17.4107L19.37 14.5407L19.83 14.3107Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M12.6103 2.21C12.2503 1.93 11.7503 1.93 11.3903 2.21C9.49032 3.66 3.88028 8.39 3.91028 13.9C3.91028 18.36 7.54031 22 12.0103 22C16.4803 22 20.1103 18.37 20.1103 13.91C20.1203 8.48 14.5003 3.67 12.6103 2.21Z" fill={`${color}`} />
		<path d="M20.09 14.2C20.07 14.81 19.98 15.41 19.82 15.99L12.75 19.43V21.97C12.5 21.99 12.25 22 12 22C11.75 22 11.5 21.99 11.25 21.97V2.31C11.3 2.27 11.34 2.24 11.38 2.21C11.75 1.93 12.25 1.93 12.61 2.21C12.65 2.24 12.7 2.28 12.75 2.32V7.76L16.53 5.92C16.86 6.3 17.17 6.69 17.48 7.1C17.44 7.14 17.4 7.17 17.35 7.19L12.75 9.43V12.76L19.04 9.7C19.05 9.7 19.05 9.69 19.06 9.69C19.28 10.14 19.47 10.6 19.62 11.08L12.75 14.43V17.76L19.37 14.54L20.09 14.2Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3.90039 13.9C3.90039 18.36 7.53037 22 12.0004 22C16.4704 22 20.1003 18.37 20.1003 13.91C20.1303 8.47997 14.5004 3.66996 12.6104 2.20996" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12.6091 2.21C12.2491 1.93 11.7491 1.93 11.3891 2.21C10.0891 3.2 7.06906 5.71 5.28906 8.96" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 2V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 18.96L19.7 15.22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 13.9599L19.37 10.3799" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 8.96001L17.03 6.51001" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12.6103 2.21C12.2503 1.93 11.7503 1.93 11.3903 2.21C9.49032 3.66 3.88028 8.39 3.91028 13.9C3.91028 18.36 7.54031 22 12.0103 22C16.4803 22 20.1103 18.37 20.1103 13.91C20.1203 8.48 14.5003 3.67 12.6103 2.21Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" />
		<g opacity="0.4">
			<path d="M12 2V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M12 18.9597L19.7 15.2197" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M12 13.9599L19.37 10.3799" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M12 8.95976L17.03 6.50977" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</g>
	</svg>
{/if}
