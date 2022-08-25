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
			d="M17.79 10.47V17.79C17.79 20.12 15.9 22 13.58 22H6.21C3.89 22 2 20.11 2 17.79V10.47C2 8.14001 3.89 6.26001 6.21 6.26001H13.58C15.9 6.26001 17.79 8.15001 17.79 10.47Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5.5 4V2.25"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9.5 4V2.25"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M13.5 4V2.25"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 13.16C22 15.48 20.11 17.37 17.79 17.37V8.94995C20.11 8.94995 22 10.83 22 13.16Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 12H17.51"
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
			d="M13.58 22.75H6.21C3.47 22.75 1.25 20.52 1.25 17.79V10.47C1.25 7.73001 3.48 5.51001 6.21 5.51001H13.58C16.32 5.51001 18.54 7.74001 18.54 10.47V17.79C18.54 20.52 16.31 22.75 13.58 22.75ZM6.21 7.01001C4.3 7.01001 2.75 8.56001 2.75 10.47V17.79C2.75 19.7 4.3 21.25 6.21 21.25H13.58C15.49 21.25 17.04 19.7 17.04 17.79V10.47C17.04 8.56001 15.49 7.01001 13.58 7.01001H6.21Z"
			fill={`${color}`} />
		<path
			d="M5.5 4.75C5.09 4.75 4.75 4.41 4.75 4V2.25C4.75 1.84 5.09 1.5 5.5 1.5C5.91 1.5 6.25 1.84 6.25 2.25V4C6.25 4.41 5.91 4.75 5.5 4.75Z"
			fill={`${color}`} />
		<path
			d="M9.5 4.75C9.09 4.75 8.75 4.41 8.75 4V2.25C8.75 1.84 9.09 1.5 9.5 1.5C9.91 1.5 10.25 1.84 10.25 2.25V4C10.25 4.41 9.91 4.75 9.5 4.75Z"
			fill={`${color}`} />
		<path
			d="M13.5 4.75C13.09 4.75 12.75 4.41 12.75 4V2.25C12.75 1.84 13.09 1.5 13.5 1.5C13.91 1.5 14.25 1.84 14.25 2.25V4C14.25 4.41 13.91 4.75 13.5 4.75Z"
			fill={`${color}`} />
		<path
			d="M17.7891 18.12C17.3791 18.12 17.0391 17.78 17.0391 17.37V8.94995C17.0391 8.53995 17.3791 8.19995 17.7891 8.19995C20.5291 8.19995 22.7491 10.43 22.7491 13.16C22.7491 15.89 20.5191 18.12 17.7891 18.12ZM18.5391 9.77995V16.54C20.0891 16.2 21.2491 14.81 21.2491 13.16C21.2491 11.51 20.0891 10.12 18.5391 9.77995Z"
			fill={`${color}`} />
		<path
			d="M17.51 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H17.51C17.92 11.25 18.26 11.59 18.26 12C18.26 12.41 17.92 12.75 17.51 12.75Z"
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
			d="M6 5.12109C5.59 5.12109 5.25 4.78109 5.25 4.37109V2.62109C5.25 2.21109 5.59 1.87109 6 1.87109C6.41 1.87109 6.75 2.21109 6.75 2.62109V4.37109C6.75 4.79109 6.41 5.12109 6 5.12109Z"
			fill={`${color}`} />
		<path
			d="M10 5.12109C9.59 5.12109 9.25 4.78109 9.25 4.37109V2.62109C9.25 2.21109 9.59 1.87109 10 1.87109C10.41 1.87109 10.75 2.21109 10.75 2.62109V4.37109C10.75 4.79109 10.41 5.12109 10 5.12109Z"
			fill={`${color}`} />
		<path
			d="M14 5.12109C13.59 5.12109 13.25 4.78109 13.25 4.37109V2.62109C13.25 2.21109 13.59 1.87109 14 1.87109C14.41 1.87109 14.75 2.21109 14.75 2.62109V4.37109C14.75 4.79109 14.41 5.12109 14 5.12109Z"
			fill={`${color}`} />
		<path
			d="M22.25 13.2517C22.25 10.6317 20.22 8.51172 17.66 8.29172C16.92 7.08172 15.6 6.26172 14.08 6.26172H6.71C4.39 6.26172 2.5 8.15172 2.5 10.4717V11.0017H18.29V10.4717C18.29 10.2817 18.26 10.0917 18.23 9.91172C19.68 10.3417 20.75 11.6617 20.75 13.2517C20.75 14.8217 19.71 16.1317 18.29 16.5717V12.0017H2.5V17.7917C2.5 20.1117 4.39 22.0017 6.71 22.0017H14.08C16.28 22.0017 18.07 20.3017 18.25 18.1417C20.53 17.6817 22.25 15.6617 22.25 13.2517Z"
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
			opacity="0.6"
			d="M17.79 10.47V12H2V10.47C2 8.15001 3.89 6.26001 6.21 6.26001H13.58C15.9 6.26001 17.79 8.15001 17.79 10.47Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M17.79 12V17.79C17.79 20.11 15.9 22 13.58 22H6.21C3.89 22 2 20.11 2 17.79V12H17.79Z"
			fill={`${color}`} />
		<path
			d="M5.5 5.12012C5.09 5.12012 4.75 4.78012 4.75 4.37012V2.62012C4.75 2.21012 5.09 1.87012 5.5 1.87012C5.91 1.87012 6.25 2.21012 6.25 2.62012V4.37012C6.25 4.79012 5.91 5.12012 5.5 5.12012Z"
			fill={`${color}`} />
		<path
			d="M9.5 5.12012C9.09 5.12012 8.75 4.78012 8.75 4.37012V2.62012C8.75 2.21012 9.09 1.87012 9.5 1.87012C9.91 1.87012 10.25 2.21012 10.25 2.62012V4.37012C10.25 4.79012 9.91 5.12012 9.5 5.12012Z"
			fill={`${color}`} />
		<path
			d="M13.5 5.12012C13.09 5.12012 12.75 4.78012 12.75 4.37012V2.62012C12.75 2.21012 13.09 1.87012 13.5 1.87012C13.91 1.87012 14.25 2.21012 14.25 2.62012V4.37012C14.25 4.79012 13.91 5.12012 13.5 5.12012Z"
			fill={`${color}`} />
		<path
			d="M21.6498 14.3199C21.6498 16.4699 19.9098 18.2099 17.7598 18.2099V10.4199C19.8998 10.4199 21.6498 12.1699 21.6498 14.3199Z"
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
			d="M2 13.55V10.47C2 8.14001 3.89 6.26001 6.21 6.26001H13.58C15.91 6.26001 17.79 8.15001 17.79 10.47V17.79C17.79 20.12 15.9 22 13.58 22H6.21C3.89 22 2 20.11 2 17.79"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5.5 4V2.25"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9.5 4V2.25"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M13.5 4V2.25"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M21.9991 13.16C21.9991 15.48 20.1091 17.37 17.7891 17.37V8.94995C20.1091 8.94995 21.9991 10.83 21.9991 13.16Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 12H17.51"
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
			d="M17.79 10.4698V17.7898C17.79 20.1198 15.9 21.9998 13.58 21.9998H6.21C3.89 21.9998 2 20.1098 2 17.7898V10.4698C2 8.13977 3.89 6.25977 6.21 6.25977H13.58C15.9 6.25977 17.79 8.14977 17.79 10.4698Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.34"
			d="M5.5 4V2.25"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.34"
			d="M9.5 4V2.25"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.34"
			d="M13.5 4V2.25"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M21.9991 13.1602C21.9991 15.4802 20.1091 17.3702 17.7891 17.3702V8.9502C20.1091 8.9502 21.9991 10.8302 21.9991 13.1602Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.34"
			d="M2 12H17.51"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
