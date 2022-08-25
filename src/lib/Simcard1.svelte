<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19.54 6.54L16.47 3.47C15.53 2.53 14.26 2 12.93 2H8C5 2 3 4 3 7V17C3 20 5 22 8 22H16C19 22 21 20 21 17V10.07C21 8.74 20.47 7.47 19.54 6.54Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10 18.5H14C15.65 18.5 17 17.15 17 15.5V12.5C17 10.85 15.65 9.5 14 9.5H10C8.35 9.5 7 10.85 7 12.5V15.5C7 17.15 8.35 18.5 10 18.5Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 9.5V18.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7.5 14H16.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16 22.75H8C4.56 22.75 2.25 20.44 2.25 17V7C2.25 3.56 4.56 1.25 8 1.25H12.93C14.47 1.25 15.91 1.84999 17 2.92999L20.07 6C21.16 7.08 21.75 8.53001 21.75 10.07V17C21.75 20.44 19.44 22.75 16 22.75ZM8 2.75C5.42 2.75 3.75 4.42 3.75 7V17C3.75 19.58 5.42 21.25 8 21.25H16C18.58 21.25 20.25 19.58 20.25 17V10.07C20.25 8.93001 19.81 7.87001 19 7.07001L15.93 4C15.13 3.2 14.06 2.76001 12.92 2.76001H8V2.75Z" fill={`${color}`} />
		<path d="M9.49945 18.75C9.30945 18.75 9.11945 18.68 8.96945 18.53L6.96945 16.53C6.67945 16.24 6.67945 15.7599 6.96945 15.4699L8.96945 13.4699C9.25945 13.1799 9.73945 13.1799 10.0295 13.4699C10.3195 13.7599 10.3195 14.24 10.0295 14.53L8.55945 16L10.0295 17.4699C10.3195 17.7599 10.3195 18.24 10.0295 18.53C9.87945 18.68 9.68945 18.75 9.49945 18.75Z" fill={`${color}`} />
		<path d="M14.4995 18.75C14.3095 18.75 14.1195 18.68 13.9695 18.53C13.6795 18.24 13.6795 17.7599 13.9695 17.4699L15.4395 16L13.9695 14.53C13.6795 14.24 13.6795 13.7599 13.9695 13.4699C14.2595 13.1799 14.7395 13.1799 15.0295 13.4699L17.0295 15.4699C17.3195 15.7599 17.3195 16.24 17.0295 16.53L15.0295 18.53C14.8795 18.68 14.6895 18.75 14.4995 18.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19.54 6.54L16.47 3.47C15.53 2.53 14.26 2 12.93 2H8C5 2 3 4 3 7V17C3 20 5 22 8 22H16C19 22 21 20 21 17V10.07C21 8.74 20.47 7.47 19.54 6.54ZM11.5 18C11.5 18.2761 11.2761 18.5 11 18.5H10C8.35 18.5 7 17.15 7 15.5V15C7 14.7239 7.22386 14.5 7.5 14.5H11.25C11.39 14.5 11.5 14.61 11.5 14.75V18ZM11.5 13.25C11.5 13.39 11.39 13.5 11.25 13.5H7.5C7.22386 13.5 7 13.2761 7 13V12.5C7 10.85 8.35 9.5 10 9.5H11C11.2761 9.5 11.5 9.72386 11.5 10V13.25ZM17 15.5C17 17.15 15.65 18.5 14 18.5H13C12.7239 18.5 12.5 18.2761 12.5 18V14.75C12.5 14.61 12.61 14.5 12.75 14.5H16.5C16.7761 14.5 17 14.7239 17 15V15.5ZM17 13C17 13.2761 16.7761 13.5 16.5 13.5H12.75C12.61 13.5 12.5 13.39 12.5 13.25V10C12.5 9.72386 12.7239 9.5 13 9.5H14C15.65 9.5 17 10.85 17 12.5V13Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M19.54 6.54L16.47 3.47C15.53 2.53 14.26 2 12.93 2H8C5 2 3 4 3 7V17C3 20 5 22 8 22H16C19 22 21 20 21 17V10.07C21 8.74 20.47 7.47 19.54 6.54Z" fill={`${color}`} />
		<path d="M11.5 13.25V9.5H10C8.35 9.5 7 10.85 7 12.5V13.5H11.25C11.39 13.5 11.5 13.39 11.5 13.25Z" fill={`${color}`} />
		<path d="M12.75 13.5H17V12.5C17 10.85 15.65 9.5 14 9.5H12.5V13.25C12.5 13.39 12.61 13.5 12.75 13.5Z" fill={`${color}`} />
		<path d="M11.25 14.5H7V15.5C7 17.15 8.35 18.5 10 18.5H11.5V14.75C11.5 14.61 11.39 14.5 11.25 14.5Z" fill={`${color}`} />
		<path d="M12.5 14.75V18.5H14C15.65 18.5 17 17.15 17 15.5V14.5H12.75C12.61 14.5 12.5 14.61 12.5 14.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 17C3 20 5 22 8 22H16C19 22 21 20 21 17V10.07C21 8.74 20.47 7.47 19.54 6.53L16.47 3.46C15.53 2.53 14.26 2 12.93 2H8C5 2 3 4 3 7V12.98" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10 18.5H14C15.65 18.5 17 17.15 17 15.5V12.5C17 10.85 15.65 9.5 14 9.5H10C8.35 9.5 7 10.85 7 12.5V15.5C7 17.15 8.35 18.5 10 18.5Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 9.5V18.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7.5 14H16.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19.54 6.54L16.47 3.47C15.53 2.53 14.26 2 12.93 2H8C5 2 3 4 3 7V17C3 20 5 22 8 22H16C19 22 21 20 21 17V10.07C21 8.74 20.47 7.47 19.54 6.54Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<g opacity="0.4">
			<path d="M10 18.5H14C15.65 18.5 17 17.15 17 15.5V12.5C17 10.85 15.65 9.5 14 9.5H10C8.35 9.5 7 10.85 7 12.5V15.5C7 17.15 8.35 18.5 10 18.5Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M12 9.5V18.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M7.5 14H16.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</g>
	</svg>
{/if}
