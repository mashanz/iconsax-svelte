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
			d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M8.5 12H14.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12.5 15L15.5 12L12.5 9"
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
			d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
			fill={`${color}`} />
		<path
			d="M14.5 12.75H8.5C8.09 12.75 7.75 12.41 7.75 12C7.75 11.59 8.09 11.25 8.5 11.25H14.5C14.91 11.25 15.25 11.59 15.25 12C15.25 12.41 14.91 12.75 14.5 12.75Z"
			fill={`${color}`} />
		<path
			d="M12.4995 15.7499C12.3095 15.7499 12.1195 15.6799 11.9695 15.5299C11.6795 15.2399 11.6795 14.7599 11.9695 14.4699L14.4395 11.9999L11.9695 9.52994C11.6795 9.23994 11.6795 8.75994 11.9695 8.46994C12.2595 8.17994 12.7395 8.17994 13.0295 8.46994L16.0295 11.4699C16.3195 11.7599 16.3195 12.2399 16.0295 12.5299L13.0295 15.5299C12.8795 15.6799 12.6895 15.7499 12.4995 15.7499Z"
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
			d="M15.1997 10.4919L13.2297 8.52188L10.0197 5.31188C9.33969 4.64188 8.17969 5.12188 8.17969 6.08188V12.3119V17.9219C8.17969 18.8819 9.33969 19.3619 10.0197 18.6819L15.1997 13.5019C16.0297 12.6819 16.0297 11.3219 15.1997 10.4919Z"
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
			d="M18.53 11.4699L14.24 7.1799C13.95 6.8899 13.47 6.8899 13.18 7.1799C12.89 7.4699 12.89 7.9499 13.18 8.2399L16.19 11.2499H6C5.59 11.2499 5.25 11.5899 5.25 11.9999C5.25 12.4099 5.59 12.7499 6 12.7499H16.19L13.18 15.7599C12.89 16.0499 12.89 16.5299 13.18 16.8199C13.33 16.9699 13.52 17.0399 13.71 17.0399C13.9 17.0399 14.09 16.9699 14.24 16.8199L18.53 12.5299C18.67 12.3899 18.75 12.1999 18.75 11.9999C18.75 11.7999 18.67 11.6099 18.53 11.4699Z"
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
			d="M8.5 12H14.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12.5 15L15.5 12L12.5 9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
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
			d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<g opacity="0.54">
			<path
				d="M8.5 12H14.5"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M12.5 15L15.5 12L12.5 9"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
	</svg>
{/if}
