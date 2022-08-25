<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M20.5 14.99L15.49 20.01" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M3.5 14.99H20.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M3.5 9.00999L8.51 3.98999" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20.5 9.01001H3.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.4897 20.7599C15.2997 20.7599 15.1097 20.6899 14.9597 20.5399C14.6697 20.2499 14.6697 19.7699 14.9597 19.4799L19.9697 14.4699C20.2597 14.1799 20.7397 14.1799 21.0297 14.4699C21.3197 14.7599 21.3197 15.2399 21.0297 15.5299L16.0197 20.5399C15.8697 20.6799 15.6797 20.7599 15.4897 20.7599Z" fill={`${color}`} />
		<path d="M20.5 15.7402H3.5C3.09 15.7402 2.75 15.4002 2.75 14.9902C2.75 14.5802 3.09 14.2402 3.5 14.2402H20.5C20.91 14.2402 21.25 14.5802 21.25 14.9902C21.25 15.4002 20.91 15.7402 20.5 15.7402Z" fill={`${color}`} />
		<path d="M3.49945 9.75994C3.30945 9.75994 3.11945 9.68994 2.96945 9.53994C2.67945 9.24994 2.67945 8.76994 2.96945 8.47994L7.97945 3.46994C8.26945 3.17994 8.74945 3.17994 9.03945 3.46994C9.32945 3.75994 9.32945 4.23994 9.03945 4.52994L4.02945 9.53994C3.88945 9.67994 3.68945 9.75994 3.49945 9.75994Z" fill={`${color}`} />
		<path d="M20.5 9.75977H3.5C3.09 9.75977 2.75 9.41977 2.75 9.00977C2.75 8.59977 3.09 8.25977 3.5 8.25977H20.5C20.91 8.25977 21.25 8.59977 21.25 9.00977C21.25 9.41977 20.91 9.75977 20.5 9.75977Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.69 14.05C17.65 14.14 17.6 14.22 17.53 14.29L14.58 17.24C14.43 17.39 14.24 17.46 14.05 17.46C13.86 17.46 13.67 17.39 13.52 17.24C13.23 16.95 13.23 16.47 13.52 16.18L15.19 14.51H7C6.59 14.51 6.25 14.17 6.25 13.76C6.25 13.35 6.59 13.01 7 13.01H17C17.1 13.01 17.19 13.03 17.29 13.07C17.47 13.15 17.62 13.29 17.7 13.48C17.77 13.66 17.77 13.86 17.69 14.05ZM17 10.99H7C6.9 10.99 6.81 10.97 6.71 10.93C6.53 10.85 6.38 10.71 6.3 10.52C6.22 10.34 6.22 10.13 6.3 9.95C6.35 9.86 6.4 9.78 6.47 9.71L9.42 6.76C9.71 6.47 10.19 6.47 10.48 6.76C10.77 7.05 10.77 7.53 10.48 7.82L8.81 9.49H17C17.41 9.49 17.75 9.83 17.75 10.24C17.75 10.65 17.41 10.99 17 10.99Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M7.81 2H16.18C19.83 2 22 4.17 22 7.81V16.18C22 19.82 19.83 21.99 16.19 21.99H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2Z" fill={`${color}`} />
		<path d="M17.69 13.4798C17.61 13.2998 17.47 13.1498 17.28 13.0698C17.19 13.0298 17.09 13.0098 16.99 13.0098H7C6.59 13.0098 6.25 13.3498 6.25 13.7598C6.25 14.1698 6.59 14.5098 7 14.5098H15.19L13.52 16.1798C13.23 16.4698 13.23 16.9498 13.52 17.2398C13.67 17.3898 13.86 17.4598 14.05 17.4598C14.24 17.4598 14.43 17.3898 14.58 17.2398L17.53 14.2898C17.6 14.2198 17.65 14.1398 17.69 14.0498C17.77 13.8598 17.77 13.6598 17.69 13.4798Z" fill={`${color}`} />
		<path d="M6.31 10.52C6.39 10.7 6.53 10.85 6.72 10.93C6.81 10.97 6.9 10.99 7 10.99H17C17.41 10.99 17.75 10.65 17.75 10.24C17.75 9.82998 17.41 9.48998 17 9.48998H8.81L10.48 7.81998C10.77 7.52998 10.77 7.04998 10.48 6.75998C10.19 6.46998 9.71 6.46998 9.42 6.75998L6.47 9.70998C6.4 9.77998 6.35 9.85998 6.31 9.94998C6.23 10.14 6.23 10.34 6.31 10.52Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3.5 9.00999L8.51 3.98999" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13.01 9.01001H6.01H3.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20.5 9.01001H17" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20.5002 14.99L15.4902 20.01" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10.9902 14.99H17.9902H20.5002" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M3.5 14.99H7" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g opacity="0.4">
			<path d="M20.5002 14.9902L15.4902 20.0102" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M3.5 14.9902H20.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		</g>
		<path d="M3.5 9.01023L8.51 3.99023" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20.5 9.00977H3.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
