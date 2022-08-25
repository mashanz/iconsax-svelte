<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M8 2V5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 2V5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7 11H15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7 15H12" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M15 22H9C4 22 3 19.94 3 15.82V9.65C3 4.95 4.67 3.69 8 3.5H16C19.33 3.68 21 4.95 21 9.65V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21 16L15 22V19C15 17 16 16 18 16H21Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z" fill={`${color}`} />
		<path d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z" fill={`${color}`} />
		<path d="M15 11.75H7C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H15C15.41 10.25 15.75 10.59 15.75 11C15.75 11.41 15.41 11.75 15 11.75Z" fill={`${color}`} />
		<path d="M12 15.75H7C6.59 15.75 6.25 15.41 6.25 15C6.25 14.59 6.59 14.25 7 14.25H12C12.41 14.25 12.75 14.59 12.75 15C12.75 15.41 12.41 15.75 12 15.75Z" fill={`${color}`} />
		<path d="M15 22.75H9C3.38 22.75 2.25 20.1 2.25 15.82V9.65C2.25 4.91 3.85 2.98 7.96 2.75H16C20.15 2.98 21.75 4.91 21.75 9.65V16C21.75 16.41 21.41 16.75 21 16.75C20.59 16.75 20.25 16.41 20.25 16V9.65C20.25 5.29 18.8 4.41 15.96 4.25H8C5.2 4.41 3.75 5.29 3.75 9.65V15.82C3.75 19.65 4.48 21.25 9 21.25H15C15.41 21.25 15.75 21.59 15.75 22C15.75 22.41 15.41 22.75 15 22.75Z" fill={`${color}`} />
		<path d="M15 22.75C14.9 22.75 14.81 22.73 14.71 22.69C14.43 22.57 14.25 22.3 14.25 22V19C14.25 16.58 15.58 15.25 18 15.25H21C21.3 15.25 21.58 15.43 21.69 15.71C21.81 15.99 21.74 16.31 21.53 16.53L15.53 22.53C15.39 22.67 15.2 22.75 15 22.75ZM18 16.75C16.42 16.75 15.75 17.42 15.75 19V20.19L19.19 16.75H18Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M8.28906 6.29C7.86906 6.29 7.53906 5.95 7.53906 5.54V2.75C7.53906 2.34 7.86906 2 8.28906 2C8.70906 2 9.03906 2.34 9.03906 2.75V5.53C9.03906 5.95 8.70906 6.29 8.28906 6.29Z" fill={`${color}`} />
		<path d="M15.7109 6.29C15.2909 6.29 14.9609 5.95 14.9609 5.54V2.75C14.9609 2.33 15.3009 2 15.7109 2C16.1309 2 16.4609 2.34 16.4609 2.75V5.53C16.4609 5.95 16.1309 6.29 15.7109 6.29Z" fill={`${color}`} />
		<path d="M21.4995 15.8197C21.4995 15.9697 21.4495 16.1197 21.3195 16.2497C19.8695 17.7097 17.2895 20.3097 15.8095 21.7997C15.6795 21.9397 15.5095 21.9997 15.3395 21.9997C15.0095 21.9997 14.6895 21.7397 14.6895 21.3597V17.8597C14.6895 16.3997 15.9295 15.1897 17.4495 15.1897C18.3995 15.1797 19.7195 15.1797 20.8495 15.1797C21.2395 15.1797 21.4995 15.4897 21.4995 15.8197Z" fill={`${color}`} />
		<path d="M21.4995 15.8197C21.4995 15.9697 21.4495 16.1197 21.3195 16.2497C19.8695 17.7097 17.2895 20.3097 15.8095 21.7997C15.6795 21.9397 15.5095 21.9997 15.3395 21.9997C15.0095 21.9997 14.6895 21.7397 14.6895 21.3597V17.8597C14.6895 16.3997 15.9295 15.1897 17.4495 15.1897C18.3995 15.1797 19.7195 15.1797 20.8495 15.1797C21.2395 15.1797 21.4995 15.4897 21.4995 15.8197Z" fill={`${color}`} />
		<path
			d="M19.57 4.5C18.91 4.01 17.96 4.48 17.96 5.31V5.41C17.96 6.58 17.12 7.66 15.95 7.78C14.6 7.92 13.46 6.86 13.46 5.54V4.5C13.46 3.95 13.01 3.5 12.46 3.5H11.54C10.99 3.5 10.54 3.95 10.54 4.5V5.41C10.54 6.29 10.07 7.11 9.34 7.51C9.3 7.54 9.26 7.56 9.22 7.58C9.21 7.58 9.21 7.59 9.2 7.59C9.13 7.62 9.06 7.65 8.98 7.68C8.96 7.69 8.94 7.69 8.92 7.7C8.8 7.74 8.67 7.77 8.53 7.78H8.52C8.37 7.8 8.21 7.8 8.06 7.78H8.05C7.91 7.77 7.78 7.74 7.66 7.7C7.56 7.67 7.46 7.63 7.36 7.58C6.58 7.23 6.04 6.45 6.04 5.54V5.31C6.04 4.54 5.22 4.08 4.57 4.41C4.56 4.42 4.55 4.42 4.54 4.43H4.53C4.46 4.48 4.4 4.53 4.33 4.58C4.22 4.67 4.11 4.76 4.01 4.86C3.94 4.93 3.87 5 3.81 5.07C3.73 5.15 3.66 5.23 3.59 5.32C3.54 5.38 3.48 5.44 3.44 5.51C3.39 5.57 3.35 5.64 3.31 5.7C3.3 5.71 3.29 5.72 3.28 5.74C3.19 5.87 3.11 6.02 3.04 6.16C3.02 6.18 3.01 6.19 3.01 6.21C2.95 6.33 2.89 6.45 2.85 6.58C2.82 6.63 2.81 6.67 2.79 6.72C2.77 6.76 2.76 6.81 2.74 6.85C2.71 6.95 2.68 7.06 2.65 7.17C2.61 7.31 2.58 7.46 2.56 7.61C2.54 7.72 2.53 7.83 2.52 7.95C2.51 8.09 2.5 8.23 2.5 8.37V17.13C2.5 19.82 4.68 22 7.37 22H12.19C12.74 22 13.19 21.55 13.19 21V17.86C13.19 15.56 15.1 13.69 17.45 13.69C17.98 13.68 19.27 13.68 20.5 13.68C21.05 13.68 21.5 13.23 21.5 12.68V8.37C21.5 6.78 20.74 5.39 19.57 4.5ZM11.13 15.91C11.04 16.21 10.76 16.42 10.43 16.42H6.79C6.74 16.42 6.7 16.42 6.66 16.4C6.3 16.35 6.04 16.04 6.04 15.67C6.04 15.25 6.37 14.91 6.79 14.91H10.43C10.84 14.91 11.18 15.25 11.18 15.67C11.18 15.75 11.17 15.84 11.13 15.91ZM13.91 12.2C13.82 12.5 13.54 12.71 13.21 12.71H6.79C6.74 12.71 6.7 12.71 6.66 12.69C6.3 12.64 6.04 12.33 6.04 11.96C6.04 11.54 6.37 11.2 6.79 11.2H13.21C13.63 11.2 13.96 11.54 13.96 11.96C13.96 12.04 13.95 12.13 13.91 12.2Z"
			fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M21.5 8.37V15.82C21.5 15.97 21.45 16.12 21.32 16.25C19.87 17.71 17.29 20.31 15.81 21.8C15.68 21.94 15.51 22 15.34 22H7.37C4.68 22 2.5 19.82 2.5 17.13V8.37C2.5 5.68 4.68 3.5 7.37 3.5H16.63C19.32 3.5 21.5 5.68 21.5 8.37Z" fill={`${color}`} />
		<path d="M8.28906 6.29C7.86906 6.29 7.53906 5.95 7.53906 5.54V2.75C7.53906 2.34 7.86906 2 8.28906 2C8.70906 2 9.03906 2.34 9.03906 2.75V5.53C9.03906 5.95 8.70906 6.29 8.28906 6.29Z" fill={`${color}`} />
		<path d="M15.7109 6.29C15.2909 6.29 14.9609 5.95 14.9609 5.54V2.75C14.9609 2.33 15.3009 2 15.7109 2C16.1309 2 16.4609 2.34 16.4609 2.75V5.53C16.4609 5.95 16.1309 6.29 15.7109 6.29Z" fill={`${color}`} />
		<path d="M14.7794 12.71H7.35938C6.93938 12.71 6.60938 12.37 6.60938 11.96C6.60938 11.55 6.94938 11.21 7.35938 11.21H14.7794C15.1994 11.21 15.5294 11.55 15.5294 11.96C15.5294 12.37 15.1994 12.71 14.7794 12.71Z" fill={`${color}`} />
		<path d="M11.9994 16.4199H7.35938C6.93938 16.4199 6.60938 16.0799 6.60938 15.6699C6.60938 15.2499 6.94938 14.9199 7.35938 14.9199H11.9994C12.4194 14.9199 12.7494 15.2599 12.7494 15.6699C12.7494 16.0799 12.4194 16.4199 11.9994 16.4199Z" fill={`${color}`} />
		<path d="M21.4995 15.8202C21.4995 15.9702 21.4495 16.1202 21.3195 16.2502C19.8695 17.7102 17.2895 20.3102 15.8095 21.8002C15.6795 21.9402 15.5095 22.0002 15.3395 22.0002C15.0095 22.0002 14.6895 21.7402 14.6895 21.3602V17.8602C14.6895 16.4002 15.9295 15.1902 17.4495 15.1902C18.3995 15.1802 19.7195 15.1802 20.8495 15.1802C21.2395 15.1802 21.4995 15.4902 21.4995 15.8202Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M8 2V5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 2V5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7 11H15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7 15H12" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M3 9.65C3 4.95 4.67 3.69 8 3.5H16C19.33 3.68 21 4.95 21 9.65V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M15 22H9C4 22 3 19.94 3 15.82V13.73" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21 16L15 22V19C15 17 16 16 18 16H21Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M8 2V5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 2V5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M7 11H15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M7 15H12" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M15 22H9C4 22 3 19.94 3 15.82V9.65C3 4.95 4.67 3.69 8 3.5H16C19.33 3.68 21 4.95 21 9.65V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21 16L15 22V19C15 17 16 16 18 16H21Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
