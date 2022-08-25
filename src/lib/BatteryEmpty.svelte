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
			d="M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5"
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
			d="M13 19.75H7C2.59 19.75 1.25 18.41 1.25 14V10C1.25 5.59 2.59 4.25 7 4.25H13C17.41 4.25 18.75 5.59 18.75 10V14C18.75 18.41 17.41 19.75 13 19.75ZM7 5.75C3.42 5.75 2.75 6.43 2.75 10V14C2.75 17.57 3.42 18.25 7 18.25H13C16.58 18.25 17.25 17.57 17.25 14V10C17.25 6.43 16.58 5.75 13 5.75H7Z"
			fill={`${color}`} />
		<path
			d="M20.5 15.25C20.09 15.25 19.75 14.91 19.75 14.5C19.75 14.09 20.09 13.75 20.5 13.75C21.09 13.75 21.22 13.66 21.23 13.66C21.25 13.6 21.25 13.25 21.25 13V11C21.25 10.75 21.25 10.41 21.21 10.32C21.22 10.33 21.05 10.25 20.5 10.25C20.09 10.25 19.75 9.91 19.75 9.5C19.75 9.09 20.09 8.75 20.5 8.75C22.58 8.75 22.75 9.77 22.75 11V13C22.75 14.23 22.58 15.25 20.5 15.25Z"
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
			d="M20.4192 9.00047C20.2792 8.99047 20.0992 8.98047 19.8992 8.98047C19.5092 8.98047 19.1992 9.29047 19.1992 9.68047V14.3305C19.1992 14.7205 19.5092 15.0305 19.8992 15.0305C20.0992 15.0305 20.2692 15.0205 20.4392 15.0105C21.9992 14.8305 21.9992 13.7305 21.9992 12.9305V11.0705C21.9992 10.2705 21.9992 9.17047 20.4192 9.00047Z"
			fill={`${color}`} />
		<path
			d="M12.93 4.78906H7.35C3.25 4.78906 2 6.03906 2 10.1391V13.8591C2 17.9591 3.25 19.2091 7.35 19.2091H12.93C17.03 19.2091 18.28 17.9591 18.28 13.8591V10.1391C18.28 6.03906 17.03 4.78906 12.93 4.78906ZM7.1 14.1791C7.02 14.5191 6.71 14.7491 6.37 14.7491C6.31 14.7491 6.25 14.7391 6.19 14.7291C5.79 14.6291 5.54 14.2191 5.64 13.8191C5.94 12.6291 5.94 11.3691 5.64 10.1791C5.54 9.77906 5.78 9.36906 6.19 9.26906C6.59 9.16906 7 9.41906 7.1 9.81906C7.46 11.2491 7.46 12.7491 7.1 14.1791Z"
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
			d="M12.93 4.79004H7.35C3.25 4.79004 2 6.04004 2 10.14V13.86C2 17.96 3.25 19.21 7.35 19.21H12.93C17.03 19.21 18.28 17.96 18.28 13.86V10.14C18.28 6.04004 17.03 4.79004 12.93 4.79004Z"
			fill={`${color}`} />
		<path
			d="M20.4192 8.99998C20.2792 8.98998 20.0992 8.97998 19.8992 8.97998C19.5092 8.97998 19.1992 9.28998 19.1992 9.67998V14.33C19.1992 14.72 19.5092 15.03 19.8992 15.03C20.0992 15.03 20.2692 15.02 20.4392 15.01C21.9992 14.83 21.9992 13.73 21.9992 12.93V11.07C21.9992 10.27 21.9992 9.16998 20.4192 8.99998Z"
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
			d="M10.97 5H13C17 5 18 6 18 10V14C18 16 17.75 17.25 17 18C16.25 18.75 15 19 13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M20.5 9.5C21.36 9.5 21.73 9.66 21.88 9.99C22 10.24 22 10.57 22 11V12V13C22 14 22 14.5 20.5 14.5"
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
			d="M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.34"
			d="M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
