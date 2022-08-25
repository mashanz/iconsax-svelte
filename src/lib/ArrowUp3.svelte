<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M12 18.0001H9.33004C6.02005 18.0001 4.66005 15.6501 6.32005 12.7801L7.66004 10.4701L9.00005 8.16007C10.66 5.29007 13.37 5.29007 15.03 8.16007L16.37 10.4701L17.71 12.7801C19.37 15.6501 18.01 18.0001 14.7 18.0001H12Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M18.0691 10.3199C17.8791 10.3199 17.6891 10.2499 17.5391 10.0999L11.9991 4.55994L6.45914 10.0999C6.16914 10.3899 5.68914 10.3899 5.39914 10.0999C5.10914 9.80994 5.10914 9.32994 5.39914 9.03994L11.4691 2.96994C11.7591 2.67994 12.2391 2.67994 12.5291 2.96994L18.5991 9.03994C18.8891 9.32994 18.8891 9.80994 18.5991 10.0999C18.4591 10.2499 18.2591 10.3199 18.0691 10.3199Z"
			fill={`${color}`} />
		<path
			d="M12 21.2499C11.59 21.2499 11.25 20.9099 11.25 20.4999V3.66992C11.25 3.25992 11.59 2.91992 12 2.91992C12.41 2.91992 12.75 3.25992 12.75 3.66992V20.4999C12.75 20.9099 12.41 21.2499 12 21.2499Z"
			fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.82 10.82C16.53 11.11 16.05 11.11 15.76 10.82L12.75 7.81V18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V7.81L8.24 10.82C7.95 11.11 7.47 11.11 7.18 10.82C7.03 10.67 6.96 10.48 6.96 10.29C6.96 10.1 7.04 9.9 7.18 9.76L11.47 5.47C11.61 5.33 11.8 5.25 12 5.25C12.2 5.25 12.39 5.33 12.53 5.47L16.82 9.76C17.11 10.05 17.11 10.52 16.82 10.82Z"
			fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M9.32919 18H14.6692C17.9892 18 19.3392 15.65 17.6892 12.78L16.9492 11.5C16.7692 11.19 16.4392 11 16.0792 11H7.91919C7.55919 11 7.22919 11.19 7.04919 11.5L6.30919 12.78C4.65919 15.65 6.00919 18 9.32919 18Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M8.78957 10.0001H15.2196C15.6096 10.0001 15.8496 9.58006 15.6496 9.25006L15.0096 8.15006C13.3596 5.28006 10.6396 5.28006 8.98957 8.15006L8.34957 9.25006C8.15957 9.58006 8.39957 10.0001 8.78957 10.0001Z"
			fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M16.0101 11.1499L13.4001 8.52989C12.6301 7.75989 11.3701 7.75989 10.6001 8.52989L4.08008 15.0499"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M19.9209 15.05L18.8809 14.01"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M11.9997 17.9998H9.32968C6.01968 17.9998 4.65968 15.6498 6.31968 12.7798L7.65968 10.4698L8.99968 8.15982C10.6597 5.28982 13.3697 5.28982 15.0297 8.15982L16.3697 10.4698L17.7097 12.7798C19.3697 15.6498 18.0097 17.9998 14.6997 17.9998H11.9997Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
