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
			d="M17.4 19.25H6.6C5.1 19.25 4.5 18.61 4.5 17.02V15.98C4.5 14.39 5.1 13.75 6.6 13.75H17.4C18.9 13.75 19.5 14.39 19.5 15.98V17.02C19.5 18.61 18.9 19.25 17.4 19.25Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15.4 10.75H8.6C7.1 10.75 6.5 10.11 6.5 8.52V7.48C6.5 5.89 7.1 5.25 8.6 5.25H15.4C16.9 5.25 17.5 5.89 17.5 7.48V8.52C17.5 10.11 16.9 10.75 15.4 10.75Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 22.0001V19.6001"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 13V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 2V4.69"
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
			d="M17.4 20H6.6C4.68 20 3.75 19.02 3.75 17.02V15.98C3.75 13.98 4.68 13 6.6 13H17.4C19.32 13 20.25 13.98 20.25 15.98V17.02C20.25 19.02 19.32 20 17.4 20ZM6.6 14.5C5.59 14.5 5.25 14.71 5.25 15.98V17.02C5.25 18.29 5.59 18.5 6.6 18.5H17.4C18.41 18.5 18.75 18.29 18.75 17.02V15.98C18.75 14.71 18.41 14.5 17.4 14.5H6.6Z"
			fill={`${color}`} />
		<path
			d="M15.4 11.5H8.6C6.68 11.5 5.75 10.52 5.75 8.52V7.48C5.75 5.47 6.68 4.5 8.6 4.5H15.4C17.32 4.5 18.25 5.48 18.25 7.48V8.52C18.25 10.52 17.32 11.5 15.4 11.5ZM8.6 6C7.59 6 7.25 6.21 7.25 7.48V8.52C7.25 9.79 7.59 10 8.6 10H15.4C16.41 10 16.75 9.79 16.75 8.52V7.48C16.75 6.21 16.41 6 15.4 6H8.6Z"
			fill={`${color}`} />
		<path
			d="M12 22.7501C11.59 22.7501 11.25 22.4101 11.25 22.0001V19.6001C11.25 19.1901 11.59 18.8501 12 18.8501C12.41 18.8501 12.75 19.1901 12.75 19.6001V22.0001C12.75 22.4101 12.41 22.7501 12 22.7501Z"
			fill={`${color}`} />
		<path
			d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V11C11.25 10.59 11.59 10.25 12 10.25C12.41 10.25 12.75 10.59 12.75 11V13C12.75 13.41 12.41 13.75 12 13.75Z"
			fill={`${color}`} />
		<path
			d="M12 5.44C11.59 5.44 11.25 5.1 11.25 4.69V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.58 12.75 2V4.69C12.75 5.11 12.41 5.44 12 5.44Z"
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
			d="M17.4 19.25H6.6C5.1 19.25 4.5 18.61 4.5 17.02V15.98C4.5 14.39 5.1 13.75 6.6 13.75H17.4C18.9 13.75 19.5 14.39 19.5 15.98V17.02C19.5 18.61 18.9 19.25 17.4 19.25Z"
			fill={`${color}`} />
		<path
			d="M12.75 19.25V21.25C12.75 21.66 12.41 22 12 22C11.59 22 11.25 21.66 11.25 21.25V19.25H12.75Z"
			fill={`${color}`} />
		<path d="M12.75 10.75H11.25V13.75H12.75V10.75Z" fill={`${color}`} />
		<path
			d="M12.75 2.75V5.25H11.25V2.75C11.25 2.34 11.59 2 12 2C12.41 2 12.75 2.34 12.75 2.75Z"
			fill={`${color}`} />
		<path
			d="M15.4 10.75H8.6C7.1 10.75 6.5 10.11 6.5 8.52V7.48C6.5 5.89 7.1 5.25 8.6 5.25H15.4C16.9 5.25 17.5 5.89 17.5 7.48V8.52C17.5 10.11 16.9 10.75 15.4 10.75Z"
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
			d="M17.4 19.25H6.6C5.1 19.25 4.5 18.61 4.5 17.02V15.98C4.5 14.39 5.1 13.75 6.6 13.75H17.4C18.9 13.75 19.5 14.39 19.5 15.98V17.02C19.5 18.61 18.9 19.25 17.4 19.25Z"
			fill={`${color}`} />
		<path
			d="M12.75 19.25V21.25C12.75 21.66 12.41 22 12 22C11.59 22 11.25 21.66 11.25 21.25V19.25H12.75Z"
			fill={`${color}`} />
		<path d="M12.75 10.75H11.25V13.75H12.75V10.75Z" fill={`${color}`} />
		<path
			d="M12.75 2.75V5.25H11.25V2.75C11.25 2.34 11.59 2 12 2C12.41 2 12.75 2.34 12.75 2.75Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M15.4 10.75H8.6C7.1 10.75 6.5 10.11 6.5 8.52V7.48C6.5 5.89 7.1 5.25 8.6 5.25H15.4C16.9 5.25 17.5 5.89 17.5 7.48V8.52C17.5 10.11 16.9 10.75 15.4 10.75Z"
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
			d="M17.4 19.25H6.6C5.1 19.25 4.5 18.61 4.5 17.02V15.98C4.5 14.39 5.1 13.75 6.6 13.75H17.4C18.9 13.75 19.5 14.39 19.5 15.98V17.02C19.5 18.61 18.9 19.25 17.4 19.25Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15.4 5.25H8.6C7.1 5.25 6.5 5.89 6.5 7.48V8.52C6.5 10.11 7.1 10.75 8.6 10.75H15.4C16.9 10.75 17.5 10.11 17.5 8.52"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 22.0001V19.6001"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 13V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 2V4.69"
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
			d="M17.4 19.25H6.6C5.1 19.25 4.5 18.61 4.5 17.02V15.98C4.5 14.39 5.1 13.75 6.6 13.75H17.4C18.9 13.75 19.5 14.39 19.5 15.98V17.02C19.5 18.61 18.9 19.25 17.4 19.25Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15.4 10.75H8.6C7.1 10.75 6.5 10.11 6.5 8.52V7.48C6.5 5.89 7.1 5.25 8.6 5.25H15.4C16.9 5.25 17.5 5.89 17.5 7.48V8.52C17.5 10.11 16.9 10.75 15.4 10.75Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M12 22.0001V19.6001"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M12 13V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M12 2V4.69"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
