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
			d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 16V22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15 19H9"
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
			d="M12 16.75C7.73 16.75 4.25 13.27 4.25 9C4.25 4.73 7.73 1.25 12 1.25C16.27 1.25 19.75 4.73 19.75 9C19.75 13.27 16.27 16.75 12 16.75ZM12 2.75C8.55 2.75 5.75 5.55 5.75 9C5.75 12.45 8.55 15.25 12 15.25C15.45 15.25 18.25 12.45 18.25 9C18.25 5.55 15.45 2.75 12 2.75Z"
			fill={`${color}`} />
		<path
			d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V16C11.25 15.59 11.59 15.25 12 15.25C12.41 15.25 12.75 15.59 12.75 16V22C12.75 22.41 12.41 22.75 12 22.75Z"
			fill={`${color}`} />
		<path
			d="M15 19.75H9C8.59 19.75 8.25 19.41 8.25 19C8.25 18.59 8.59 18.25 9 18.25H15C15.41 18.25 15.75 18.59 15.75 19C15.75 19.41 15.41 19.75 15 19.75Z"
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
			d="M19 9C19 5.13 15.87 2 12 2C8.13 2 5 5.13 5 9C5 12.62 7.74 15.59 11.25 15.96V18.25H9C8.59 18.25 8.25 18.59 8.25 19C8.25 19.41 8.59 19.75 9 19.75H11.25V22C11.25 22.41 11.59 22.75 12 22.75C12.41 22.75 12.75 22.41 12.75 22V19.75H15C15.41 19.75 15.75 19.41 15.75 19C15.75 18.59 15.41 18.25 15 18.25H12.75V15.96C16.26 15.59 19 12.62 19 9Z"
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
			d="M19 9C19 12.62 16.26 15.59 12.75 15.96C12.5 15.99 12.25 16 12 16C11.75 16 11.5 15.99 11.25 15.96C7.74 15.59 5 12.62 5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9Z"
			fill={`${color}`} />
		<path
			d="M15.75 19C15.75 19.41 15.41 19.75 15 19.75H12.75V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V19.75H9C8.59 19.75 8.25 19.41 8.25 19C8.25 18.59 8.59 18.25 9 18.25H11.25V15.96C11.5 15.99 11.75 16 12 16C12.25 16 12.5 15.99 12.75 15.96V18.25H15C15.41 18.25 15.75 18.59 15.75 19Z"
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
			d="M5 9C5 12.87 8.13 16 12 16C15.87 16 19 12.87 19 9C19 5.13 15.87 2 12 2C10.07 2 8.32 2.78 7.05 4.05"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 16V22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15 19H9"
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
			d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<g opacity="0.4">
			<path
				d="M12 16V22"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M15 19H9"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
	</svg>
{/if}
