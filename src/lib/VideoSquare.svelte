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
			d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9.1001 12V10.52C9.1001 8.60999 10.4501 7.83999 12.1001 8.78999L13.3801 9.52999L14.6601 10.27C16.3101 11.22 16.3101 12.78 14.6601 13.73L13.3801 14.47L12.1001 15.21C10.4501 16.16 9.1001 15.38 9.1001 13.48V12Z"
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
			d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
			fill={`${color}`} />
		<path
			d="M10.7598 16.3698C10.3398 16.3698 9.94984 16.2698 9.59984 16.0698C8.79984 15.6098 8.33984 14.6698 8.33984 13.4798V10.5198C8.33984 9.33981 8.79984 8.3898 9.59984 7.9298C10.3998 7.4698 11.4398 7.53981 12.4698 8.13981L15.0398 9.6198C16.0598 10.2098 16.6498 11.0798 16.6498 11.9998C16.6498 12.9198 16.0598 13.7898 15.0398 14.3798L12.4698 15.8598C11.8898 16.1998 11.2998 16.3698 10.7598 16.3698ZM10.7698 9.12981C10.6098 9.12981 10.4698 9.1598 10.3598 9.2298C10.0398 9.4198 9.84984 9.88981 9.84984 10.5198V13.4798C9.84984 14.1098 10.0298 14.5798 10.3598 14.7698C10.6798 14.9598 11.1798 14.8798 11.7298 14.5598L14.2998 13.0798C14.8498 12.7598 15.1598 12.3698 15.1598 11.9998C15.1598 11.6298 14.8498 11.2298 14.2998 10.9198L11.7298 9.4398C11.3698 9.2298 11.0398 9.12981 10.7698 9.12981Z"
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
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM14.66 13.73L13.38 14.47L12.1 15.21C10.45 16.16 9.1 15.38 9.1 13.48V12V10.52C9.1 8.61 10.45 7.84 12.1 8.79L13.38 9.53L14.66 10.27C16.31 11.22 16.31 12.78 14.66 13.73Z"
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
			opacity="0.4"
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
			fill={`${color}`} />
		<path
			d="M9.09961 12V10.52C9.09961 8.60999 10.4496 7.83999 12.0996 8.78999L13.3796 9.52999L14.6596 10.27C16.3096 11.22 16.3096 12.78 14.6596 13.73L13.3796 14.47L12.0996 15.21C10.4496 16.16 9.09961 15.38 9.09961 13.48V12Z"
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
			d="M2 12.95V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12.0996 15.21C10.4496 16.16 9.09961 15.38 9.09961 13.48V12V10.52C9.09961 8.60999 10.4496 7.83999 12.0996 8.78999L13.3796 9.52999L14.6596 10.27C16.3096 11.22 16.3096 12.78 14.6596 13.73"
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
			d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M9.09961 12V10.52C9.09961 8.60999 10.4496 7.83999 12.0996 8.78999L13.3796 9.52999L14.6596 10.27C16.3096 11.22 16.3096 12.78 14.6596 13.73L13.3796 14.47L12.0996 15.21C10.4496 16.16 9.09961 15.38 9.09961 13.48V12Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
