<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.57 5.92993L3.5 11.9999L9.57 18.0699" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20.5 12H3.67004" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.56945 18.8201C9.37945 18.8201 9.18945 18.7501 9.03945 18.6001L2.96945 12.5301C2.67945 12.2401 2.67945 11.7601 2.96945 11.4701L9.03945 5.40012C9.32945 5.11012 9.80945 5.11012 10.0995 5.40012C10.3895 5.69012 10.3895 6.17012 10.0995 6.46012L4.55945 12.0001L10.0995 17.5401C10.3895 17.8301 10.3895 18.3101 10.0995 18.6001C9.95945 18.7501 9.75945 18.8201 9.56945 18.8201Z" fill={`${color}`} />
		<path d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18 9.32919V14.6692C18 17.9892 15.65 19.3392 12.78 17.6892L11.5 16.9492C11.19 16.7692 11 16.4392 11 16.0792V7.91919C11 7.55919 11.19 7.22919 11.5 7.04919L12.78 6.30919C15.65 4.65919 18 6.00919 18 9.32919Z" fill={`${color}`} />
		<path d="M9.99859 8.79152V15.2215C9.99859 15.6115 9.57859 15.8515 9.24859 15.6515L8.14859 15.0115C5.27859 13.3615 5.27859 10.6415 8.14859 8.99152L9.24859 8.35152C9.57859 8.16152 9.99859 8.40152 9.99859 8.79152Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={`${color}`} />
		<path d="M15.4995 11.2499H10.3095L12.0295 9.52994C12.3195 9.23994 12.3195 8.75994 12.0295 8.46994C11.7395 8.17994 11.2595 8.17994 10.9695 8.46994L7.96945 11.4699C7.67945 11.7599 7.67945 12.2399 7.96945 12.5299L10.9695 15.5299C11.1195 15.6799 11.3095 15.7499 11.4995 15.7499C11.6895 15.7499 11.8795 15.6799 12.0295 15.5299C12.3195 15.2399 12.3195 14.7599 12.0295 14.4699L10.3095 12.7499H15.4995C15.9095 12.7499 16.2495 12.4099 16.2495 11.9999C16.2495 11.5899 15.9095 11.2499 15.4995 11.2499Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.5 12H9.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M11.5 9L8.5 12L11.5 15" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.57 5.93018L3.5 12.0002L9.57 18.0702" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M20.4999 12H3.66992" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
