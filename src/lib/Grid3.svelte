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
			d="M12 2V22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 9.5H12"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 14.5H22"
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
			d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
			fill={`${color}`} />
		<path
			d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V22C12.75 22.41 12.41 22.75 12 22.75Z"
			fill={`${color}`} />
		<path
			d="M12 10.25H2C1.59 10.25 1.25 9.91 1.25 9.5C1.25 9.09 1.59 8.75 2 8.75H12C12.41 8.75 12.75 9.09 12.75 9.5C12.75 9.91 12.41 10.25 12 10.25Z"
			fill={`${color}`} />
		<path
			d="M22 15.25H12C11.59 15.25 11.25 14.91 11.25 14.5C11.25 14.09 11.59 13.75 12 13.75H22C22.41 13.75 22.75 14.09 22.75 14.5C22.75 14.91 22.41 15.25 22 15.25Z"
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
			d="M16.19 2H12.75V8V8.75V13.75H22V8.75V8V7.81C22 4.17 19.83 2 16.19 2Z"
			fill={`${color}`} />
		<path
			d="M2 10.25V15.25V15.75V16.19C2 19.83 4.17 22 7.81 22H11.25V15.75V15.25V10.25H2Z"
			fill={`${color}`} />
		<path d="M11.25 2V8.75H2V7.81C2 4.17 4.17 2 7.81 2H11.25Z" fill={`${color}`} />
		<path d="M22 15.25V16.19C22 19.83 19.83 22 16.19 22H12.75V15.25H22Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.6" d="M22 7.81V14.5H12V2H16.19C19.83 2 22 4.17 22 7.81Z" fill={`${color}`} />
		<path d="M12 9.5V22H7.81C4.17 22 2 19.83 2 16.19V9.5H12Z" fill={`${color}`} />
		<path opacity="0.4" d="M12 2V9.5H2V7.81C2 4.17 4.17 2 7.81 2H12Z" fill={`${color}`} />
		<path
			opacity="0.4"
			d="M22 14.5V16.19C22 19.83 19.83 22 16.19 22H12V14.5H22Z"
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
			d="M12 2V22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 9.5H12"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 14.5H22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M3.96 3.32C2.6 4.43 2 6.27 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9"
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
			d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<g opacity="0.4">
			<path
				d="M12 2V22"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M2 9.5H12"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M12 14.5H22"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
	</svg>
{/if}
