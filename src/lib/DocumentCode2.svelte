<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M11 22H16C19.5 22 21 20 21 17V7C21 4 19.5 2 16 2H8C4.5 2 3 4 3 7V14" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M4 17L2 19L4 21" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7 17L9 19L7 21" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16 22.75H11C10.59 22.75 10.25 22.41 10.25 22C10.25 21.59 10.59 21.25 11 21.25H16C18.86 21.25 20.25 19.86 20.25 17V7C20.25 4.14 18.86 2.75 16 2.75H8C5.14 2.75 3.75 4.14 3.75 7V14C3.75 14.41 3.41 14.75 3 14.75C2.59 14.75 2.25 14.41 2.25 14V7C2.25 3.35 4.35 1.25 8 1.25H16C19.65 1.25 21.75 3.35 21.75 7V17C21.75 20.65 19.65 22.75 16 22.75Z" fill={`${color}`} />
		<path d="M18.5 9.25H16.5C14.98 9.25 13.75 8.02 13.75 6.5V4.5C13.75 4.09 14.09 3.75 14.5 3.75C14.91 3.75 15.25 4.09 15.25 4.5V6.5C15.25 7.19 15.81 7.75 16.5 7.75H18.5C18.91 7.75 19.25 8.09 19.25 8.5C19.25 8.91 18.91 9.25 18.5 9.25Z" fill={`${color}`} />
		<path d="M3.99945 21.75C3.80945 21.75 3.61945 21.68 3.46945 21.53L1.46945 19.53C1.17945 19.24 1.17945 18.7599 1.46945 18.4699L3.46945 16.4699C3.75945 16.1799 4.23945 16.1799 4.52945 16.4699C4.81945 16.7599 4.81945 17.24 4.52945 17.53L3.05945 19L4.52945 20.4699C4.81945 20.7599 4.81945 21.24 4.52945 21.53C4.37945 21.68 4.18945 21.75 3.99945 21.75Z" fill={`${color}`} />
		<path d="M6.99945 21.75C6.80945 21.75 6.61945 21.68 6.46945 21.53C6.17945 21.24 6.17945 20.7599 6.46945 20.4699L7.93945 19L6.46945 17.53C6.17945 17.24 6.17945 16.7599 6.46945 16.4699C6.75945 16.1799 7.23945 16.1799 7.52945 16.4699L9.52945 18.4699C9.81945 18.7599 9.81945 19.24 9.52945 19.53L7.52945 21.53C7.37945 21.68 7.18945 21.75 6.99945 21.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16 2H8C4.5 2 3 4 3 7V11.47C3 11.82 3.34 12.06 3.66 11.94C4.76 11.51 6.01 11.37 7.3 11.63C9.9 12.15 11.97 14.29 12.4 16.9C12.66 18.49 12.34 20 11.61 21.25C11.41 21.58 11.65 22 12.04 22H16C19.5 22 21 20 21 17V7C21 4 19.5 2 16 2ZM18.5 9.25H16.5C14.98 9.25 13.75 8.02 13.75 6.5V4.5C13.75 4.09 14.09 3.75 14.5 3.75C14.91 3.75 15.25 4.09 15.25 4.5V6.5C15.25 7.19 15.81 7.75 16.5 7.75H18.5C18.91 7.75 19.25 8.09 19.25 8.5C19.25 8.91 18.91 9.25 18.5 9.25Z" fill={`${color}`} />
		<path d="M6 13C3.24 13 1 15.24 1 18C1 20.76 3.24 23 6 23C8.76 23 11 20.76 11 18C11 15.24 8.76 13 6 13ZM5.16 19.27C5.41 19.52 5.41 19.93 5.16 20.19C5.03 20.32 4.87 20.38 4.7 20.38C4.53 20.38 4.37 20.32 4.24 20.19L2.51 18.46C2.26 18.21 2.26 17.8 2.51 17.54L4.24 15.81C4.49 15.56 4.9 15.56 5.16 15.81C5.41 16.06 5.41 16.47 5.16 16.73L3.89 18L5.16 19.27ZM9.48 18.46L7.75 20.19C7.62 20.32 7.46 20.38 7.29 20.38C7.12 20.38 6.96 20.32 6.83 20.19C6.58 19.94 6.58 19.53 6.83 19.27L8.11 18L6.84 16.73C6.59 16.48 6.59 16.07 6.84 15.81C7.09 15.56 7.5 15.56 7.76 15.81L9.49 17.54C9.73 17.8 9.73 18.2 9.48 18.46Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M21 7V17C21 20 19.5 22 16 22H9C10.21 21.09 11 19.63 11 18C11 15.24 8.76 13 6 13C4.87 13 3.83 13.37 3 14V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" fill={`${color}`} />
		<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 3.75C14.9142 3.75 15.25 4.08579 15.25 4.5V6.5C15.25 7.18579 15.8142 7.75 16.5 7.75H18.5C18.9142 7.75 19.25 8.08579 19.25 8.5C19.25 8.91421 18.9142 9.25 18.5 9.25H16.5C14.9858 9.25 13.75 8.01421 13.75 6.5V4.5C13.75 4.08579 14.0858 3.75 14.5 3.75Z" fill={`${color}`} />
		<path d="M6 13C3.24 13 1 15.24 1 18C1 20.76 3.24 23 6 23C8.76 23 11 20.76 11 18C11 15.24 8.76 13 6 13ZM5.16 19.27C5.41 19.52 5.41 19.93 5.16 20.19C5.03 20.32 4.87001 20.38 4.70001 20.38C4.53001 20.38 4.36999 20.32 4.23999 20.19L2.51001 18.46C2.26001 18.21 2.26001 17.8 2.51001 17.54L4.23999 15.81C4.48999 15.56 4.9 15.56 5.16 15.81C5.41 16.06 5.41 16.47 5.16 16.73L3.89001 18L5.16 19.27ZM9.48001 18.46L7.75 20.19C7.62 20.32 7.46001 20.38 7.29001 20.38C7.12001 20.38 6.95999 20.32 6.82999 20.19C6.57999 19.94 6.57999 19.53 6.82999 19.27L8.10001 18L6.82999 16.73C6.57999 16.48 6.57999 16.07 6.82999 15.81C7.07999 15.56 7.49 15.56 7.75 15.81L9.48001 17.54C9.73001 17.8 9.73001 18.2 9.48001 18.46Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21 13.03V7C21 4 19.5 2 16 2H8C4.5 2 3 4 3 7V14" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M11 22H16C19.5 22 21 20 21 17" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M4 17L2 19L4 21" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7 17L9 19L7 21" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M11 22H16C19.5 22 21 20 21 17V7C21 4 19.5 2 16 2H8C4.5 2 3 4 3 7V14" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M4 17L2 19L4 21" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M7 17L9 19L7 21" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
