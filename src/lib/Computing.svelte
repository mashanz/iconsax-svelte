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
			d="M21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22H14.97C19.97 22 21.97 20 21.97 15Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M19.72 3.25L3.27002 19.7"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16.0601 18V13"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18.5 15.5H13.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M10.5 7.5H5.5"
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
			d="M14.9707 22.75H8.9707C3.5407 22.75 1.2207 20.43 1.2207 15V9C1.2207 3.57 3.5407 1.25 8.9707 1.25H14.9707C20.4007 1.25 22.7207 3.57 22.7207 9V15C22.7207 20.43 20.4107 22.75 14.9707 22.75ZM8.9707 2.75C4.3607 2.75 2.7207 4.39 2.7207 9V15C2.7207 19.61 4.3607 21.25 8.9707 21.25H14.9707C19.5807 21.25 21.2207 19.61 21.2207 15V9C21.2207 4.39 19.5807 2.75 14.9707 2.75H8.9707Z"
			fill={`${color}`} />
		<path
			d="M3.27094 20.4499C3.08094 20.4499 2.89094 20.3799 2.74094 20.2299C2.45094 19.9399 2.45094 19.4599 2.74094 19.1699L19.1909 2.71994C19.4809 2.42994 19.9609 2.42994 20.2509 2.71994C20.5409 3.00994 20.5409 3.48994 20.2509 3.77994L3.80094 20.2299C3.66094 20.3799 3.47094 20.4499 3.27094 20.4499Z"
			fill={`${color}`} />
		<path
			d="M16.0605 18.75C15.6505 18.75 15.3105 18.41 15.3105 18V13C15.3105 12.59 15.6505 12.25 16.0605 12.25C16.4705 12.25 16.8105 12.59 16.8105 13V18C16.8105 18.41 16.4705 18.75 16.0605 18.75Z"
			fill={`${color}`} />
		<path
			d="M18.5 16.25H13.5C13.09 16.25 12.75 15.91 12.75 15.5C12.75 15.09 13.09 14.75 13.5 14.75H18.5C18.91 14.75 19.25 15.09 19.25 15.5C19.25 15.91 18.91 16.25 18.5 16.25Z"
			fill={`${color}`} />
		<path
			d="M10.5 8.25H5.5C5.09 8.25 4.75 7.91 4.75 7.5C4.75 7.09 5.09 6.75 5.5 6.75H10.5C10.91 6.75 11.25 7.09 11.25 7.5C11.25 7.91 10.91 8.25 10.5 8.25Z"
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
			d="M20.9509 4.12891L4.13086 20.9489C5.08086 21.6389 6.32086 21.9989 7.81086 21.9989H16.1909C19.8309 21.9989 22.0009 19.8289 22.0009 16.1889V7.80891C22.0009 6.31891 21.6409 5.07891 20.9509 4.12891ZM18.5009 16.2489H16.8109V17.9989C16.8109 18.4089 16.4709 18.7489 16.0609 18.7489C15.6509 18.7489 15.3109 18.4089 15.3109 17.9989V16.2489H13.5009C13.0909 16.2489 12.7509 15.9089 12.7509 15.4989C12.7509 15.0889 13.0909 14.7489 13.5009 14.7489H15.3109V12.9989C15.3109 12.5889 15.6509 12.2489 16.0609 12.2489C16.4709 12.2489 16.8109 12.5889 16.8109 12.9989V14.7489H18.5009C18.9109 14.7489 19.2509 15.0889 19.2509 15.4989C19.2509 15.9089 18.9109 16.2489 18.5009 16.2489Z"
			fill={`${color}`} />
		<path
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87L19.87 3.05C18.92 2.36 17.68 2 16.19 2ZM10.5 8.25H5.5C5.09 8.25 4.75 7.91 4.75 7.5C4.75 7.09 5.09 6.75 5.5 6.75H10.5C10.91 6.75 11.25 7.09 11.25 7.5C11.25 7.91 10.91 8.25 10.5 8.25Z"
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
			d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C6.32 22 5.08 21.64 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.17 4.17 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z"
			fill={`${color}`} />
		<path
			d="M20.9508 4.13005L4.13078 20.9501C3.71078 20.66 3.34078 20.2901 3.05078 19.8701L19.8708 3.05005C20.2908 3.34005 20.6608 3.71005 20.9508 4.13005Z"
			fill={`${color}`} />
		<path
			d="M18.5 14.75H16.81V13C16.81 12.59 16.47 12.25 16.06 12.25C15.65 12.25 15.31 12.59 15.31 13V14.75H13.5C13.09 14.75 12.75 15.09 12.75 15.5C12.75 15.91 13.09 16.25 13.5 16.25H15.31V18C15.31 18.41 15.65 18.75 16.06 18.75C16.47 18.75 16.81 18.41 16.81 18V16.25H18.5C18.91 16.25 19.25 15.91 19.25 15.5C19.25 15.09 18.91 14.75 18.5 14.75Z"
			fill={`${color}`} />
		<path
			d="M10.5 8.25H5.5C5.09 8.25 4.75 7.91 4.75 7.5C4.75 7.09 5.09 6.75 5.5 6.75H10.5C10.91 6.75 11.25 7.09 11.25 7.5C11.25 7.91 10.91 8.25 10.5 8.25Z"
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
			d="M1.9707 13V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M19.7195 3.25L3.26953 19.7"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16.0605 18V13"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18.5 15.5H13.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M10.5 7.5H5.5"
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
			d="M21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M19.7195 3.25L3.26953 19.7"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<g opacity="0.4">
			<path
				d="M16.0605 18V13"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M18.5 15.5H13.5"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
		<path
			opacity="0.4"
			d="M10.5 7.5H5.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
