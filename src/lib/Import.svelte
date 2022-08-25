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
			d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 2L13.8 10.2"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M13 6.17004V11H17.83"
			stroke={`${color}`}
			stroke-width="1.5"
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
			d="M11.8798 14.9901C11.6898 14.9901 11.4998 14.9201 11.3498 14.7701L8.78977 12.2101C8.49977 11.9201 8.49977 11.4401 8.78977 11.1501C9.07977 10.8601 9.55977 10.8601 9.84977 11.1501L11.8798 13.1801L13.9098 11.1501C14.1998 10.8601 14.6798 10.8601 14.9698 11.1501C15.2598 11.4401 15.2598 11.9201 14.9698 12.2101L12.4098 14.7701C12.2598 14.9201 12.0698 14.9901 11.8798 14.9901Z"
			fill={`${color}`} />
		<path
			d="M11.8809 14.92C11.4709 14.92 11.1309 14.58 11.1309 14.17V4C11.1309 3.59 11.4709 3.25 11.8809 3.25C12.2909 3.25 12.6309 3.59 12.6309 4V14.17C12.6309 14.58 12.2909 14.92 11.8809 14.92Z"
			fill={`${color}`} />
		<path
			d="M12 20.9299C6.85 20.9299 3.25 17.3299 3.25 12.1799C3.25 11.7699 3.59 11.4299 4 11.4299C4.41 11.4299 4.75 11.7699 4.75 12.1799C4.75 16.4499 7.73 19.4299 12 19.4299C16.27 19.4299 19.25 16.4499 19.25 12.1799C19.25 11.7699 19.59 11.4299 20 11.4299C20.41 11.4299 20.75 11.7699 20.75 12.1799C20.75 17.3299 17.15 20.9299 12 20.9299Z"
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
			d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.53 7.53L9.81 15.25H12.83C13.24 15.25 13.58 15.59 13.58 16C13.58 16.41 13.24 16.75 12.83 16.75H8C7.59 16.75 7.25 16.41 7.25 16V11.17C7.25 10.76 7.59 10.42 8 10.42C8.41 10.42 8.75 10.76 8.75 11.17V14.19L16.47 6.47C16.62 6.32 16.81 6.25 17 6.25C17.19 6.25 17.38 6.32 17.53 6.47C17.82 6.76 17.82 7.24 17.53 7.53Z"
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
			d="M22 10.7599C22 10.2899 21.62 9.8999 21.14 9.8999H2.86C2.38 9.8999 2 10.2799 2 10.7599C2 16.6499 6.11 20.7599 12 20.7599C17.89 20.7599 22 16.6399 22 10.7599Z"
			fill={`${color}`} />
		<path
			d="M12.4598 15.9L15.3098 13.06C15.5998 12.77 15.5998 12.29 15.3098 12C15.0198 11.71 14.5398 11.71 14.2498 12L12.6898 13.56V3.98999C12.6898 3.57999 12.3498 3.23999 11.9398 3.23999C11.5298 3.23999 11.1898 3.57999 11.1898 3.98999V13.56L9.61984 12C9.32984 11.71 8.84984 11.71 8.55984 12C8.40984 12.15 8.33984 12.34 8.33984 12.53C8.33984 12.72 8.40984 12.91 8.55984 13.06L11.4098 15.9C11.6998 16.2 12.1698 16.2 12.4598 15.9Z"
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
			d="M8.74047 21.4999C4.27047 21.4999 2.48047 19.7099 2.48047 15.2399V15.1099C2.48047 11.0899 3.93047 9.23991 7.47047 8.90991"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16.4398 8.8999C20.0398 9.2099 21.5098 11.0599 21.5098 15.1099V15.2399C21.5098 19.7099 19.7198 21.4999 15.2498 21.4999H13.0098"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 2V14.88"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15.3504 12.6499L12.0004 15.9999L8.65039 12.6499"
			stroke={`${color}`}
			stroke-width="1.5"
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
			d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<g opacity="0.4">
			<path
				d="M22.0008 2L13.8008 10.2"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M13 6.16992V10.9999H17.83"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
	</svg>
{/if}
