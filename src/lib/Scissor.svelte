<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5.5 10C7.433 10 9 8.433 9 6.5C9 4.567 7.433 3 5.5 3C3.567 3 2 4.567 2 6.5C2 8.433 3.567 10 5.5 10Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M5.5 21C7.433 21 9 19.433 9 17.5C9 15.567 7.433 14 5.5 14C3.567 14 2 15.567 2 17.5C2 19.433 3.567 21 5.5 21Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M22 6L8.64999 15.98" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M22 17.97L8.64999 7.97998" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={`${color}`} />
		<path d="M8.41998 11.6498C6.94998 11.6498 5.75 10.4498 5.75 8.9798C5.75 7.5098 6.94998 6.2998 8.41998 6.2998C9.88998 6.2998 11.09 7.4998 11.09 8.9798C11.09 10.4598 9.89998 11.6498 8.41998 11.6498ZM8.41998 7.7998C7.76998 7.7998 7.25 8.3298 7.25 8.9798C7.25 9.6298 7.77998 10.1498 8.41998 10.1498C9.05998 10.1498 9.59003 9.6198 9.59003 8.9798C9.59003 8.3398 9.06998 7.7998 8.41998 7.7998Z" fill={`${color}`} />
		<path d="M8.41998 17.7001C6.94998 17.7001 5.75 16.5001 5.75 15.0201C5.75 13.5401 6.94998 12.3501 8.41998 12.3501C9.88998 12.3501 11.09 13.5501 11.09 15.0201C11.09 16.4901 9.89998 17.7001 8.41998 17.7001ZM8.41998 13.8501C7.76998 13.8501 7.25 14.3801 7.25 15.0201C7.25 15.6601 7.77998 16.2001 8.41998 16.2001C9.05998 16.2001 9.59003 15.6701 9.59003 15.0201C9.59003 14.3701 9.06998 13.8501 8.41998 13.8501Z" fill={`${color}`} />
		<path d="M10.1604 14.94C9.9304 14.94 9.71042 14.84 9.56042 14.64C9.31042 14.31 9.38044 13.84 9.71044 13.59L17.0504 8.09998C17.3804 7.84998 17.8504 7.91998 18.1004 8.24998C18.3504 8.57998 18.2804 9.04998 17.9504 9.29998L10.6104 14.79C10.4704 14.89 10.3204 14.94 10.1604 14.94Z" fill={`${color}`} />
		<path d="M17.5004 16.0298C17.3404 16.0298 17.1904 15.9798 17.0504 15.8798L9.71044 10.3898C9.38044 10.1398 9.31042 9.66982 9.56042 9.33982C9.81042 9.00982 10.2804 8.93983 10.6104 9.18983L17.9504 14.6798C18.2804 14.9298 18.3504 15.3998 18.1004 15.7298C17.9504 15.9298 17.7304 16.0298 17.5004 16.0298Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.76 14.68C18.09 14.93 18.16 15.4 17.91 15.73C17.76 15.93 17.54 16.03 17.31 16.03C17.15 16.03 17 15.98 16.86 15.88L12.91 12.93L10.5 14.73C10.51 14.83 10.53 14.93 10.53 15.03C10.53 16.3 9.5 17.33 8.23 17.33C6.96 17.33 5.93 16.3 5.93 15.03C5.93 13.76 6.96 12.73 8.23 12.73C8.85 12.73 9.4 12.98 9.81 13.37L11.65 11.99L9.82 10.62C9.41 11.02 8.84 11.27 8.22 11.27C6.95 11.27 5.92 10.24 5.92 8.97C5.92 7.7 6.95 6.67 8.22 6.67C9.49 6.67 10.52 7.7 10.52 8.97C10.52 9.07 10.5 9.16 10.49 9.25L12.89 11.05L16.84 8.1C17.17 7.85 17.64 7.92 17.89 8.25C18.14 8.58 18.07 9.05 17.74 9.3L14.14 11.99L17.76 14.68Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5.5 10C7.433 10 9 8.433 9 6.5C9 4.567 7.433 3 5.5 3C3.567 3 2 4.567 2 6.5C2 8.433 3.567 10 5.5 10Z" fill={`${color}`} />
		<path d="M5.5 21C7.433 21 9 19.433 9 17.5C9 15.567 7.433 14 5.5 14C3.567 14 2 15.567 2 17.5C2 19.433 3.567 21 5.5 21Z" fill={`${color}`} />
		<path opacity="0.4" d="M15.2491 11.9798L22.4491 6.59978C22.7791 6.34978 22.8491 5.87978 22.5991 5.54978C22.3491 5.21978 21.8791 5.14978 21.5491 5.39978L13.9991 11.0498L8.4491 6.89978C8.1191 6.64978 7.64908 6.71978 7.39908 7.04978C7.14908 7.37978 7.21908 7.84978 7.54908 8.09978L12.7491 11.9898L6.8491 16.4098C6.5191 16.6598 6.4491 17.1298 6.6991 17.4598C6.8491 17.6598 7.06908 17.7598 7.29908 17.7598C7.45908 17.7598 7.60909 17.7098 7.74909 17.6098L14.0091 12.9298L21.5591 18.5798C21.6891 18.6798 21.8491 18.7298 22.0091 18.7298C22.2391 18.7298 22.4591 18.6298 22.6091 18.4298C22.8591 18.0998 22.7891 17.6298 22.4591 17.3798L15.2491 11.9798Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 12.94V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8.41998 10.9001C9.48037 10.9001 10.34 10.0404 10.34 8.98006C10.34 7.91967 9.48037 7.06006 8.41998 7.06006C7.3596 7.06006 6.5 7.91967 6.5 8.98006C6.5 10.0404 7.3596 10.9001 8.41998 10.9001Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8.41998 16.9401C9.48037 16.9401 10.34 16.0805 10.34 15.0201C10.34 13.9597 9.48037 13.1001 8.41998 13.1001C7.3596 13.1001 6.5 13.9597 6.5 15.0201C6.5 16.0805 7.3596 16.9401 8.41998 16.9401Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17.5002 8.69995L10.1602 14.19" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17.5002 15.28L10.1602 9.79004" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<g opacity="0.4">
			<path d="M8.41998 10.9001C9.48037 10.9001 10.34 10.0404 10.34 8.98006C10.34 7.91967 9.48037 7.06006 8.41998 7.06006C7.3596 7.06006 6.5 7.91967 6.5 8.98006C6.5 10.0404 7.3596 10.9001 8.41998 10.9001Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M8.41998 16.9401C9.48037 16.9401 10.34 16.0805 10.34 15.0201C10.34 13.9597 9.48037 13.1001 8.41998 13.1001C7.3596 13.1001 6.5 13.9597 6.5 15.0201C6.5 16.0805 7.3596 16.9401 8.41998 16.9401Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M17.5002 8.7002L10.1602 14.1902" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M17.5002 15.28L10.1602 9.79004" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</g>
	</svg>
{/if}
