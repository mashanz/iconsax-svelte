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
			d="M3.67004 2.5V14.47C3.67004 15.45 4.13004 16.38 4.92004 16.97L10.13 20.87C11.24 21.7 12.77 21.7 13.88 20.87L19.09 16.97C19.88 16.38 20.34 15.45 20.34 14.47V2.5H3.67004Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10" />
		<path
			d="M2 2.5H22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round" />
		<path
			d="M8 8H16"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M8 13H16"
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
			d="M11.9999 22.2498C11.1799 22.2498 10.3599 21.9898 9.6799 21.4798L4.46991 17.5798C3.49991 16.8498 2.91992 15.6898 2.91992 14.4798V1.75977H21.0799V14.4798C21.0799 15.6898 20.4999 16.8498 19.5299 17.5798L14.3199 21.4798C13.6399 21.9898 12.8199 22.2498 11.9999 22.2498ZM4.41992 3.24977V14.4698C4.41992 15.2098 4.7799 15.9198 5.3699 16.3698L10.5799 20.2698C11.4199 20.8998 12.5899 20.8998 13.4299 20.2698L18.6399 16.3698C19.2299 15.9198 19.5899 15.2098 19.5899 14.4698V3.24977H4.41992Z"
			fill={`${color}`} />
		<path
			d="M22 3.25H2C1.59 3.25 1.25 2.91 1.25 2.5C1.25 2.09 1.59 1.75 2 1.75H22C22.41 1.75 22.75 2.09 22.75 2.5C22.75 2.91 22.41 3.25 22 3.25Z"
			fill={`${color}`} />
		<path
			d="M16 8.75H8C7.59 8.75 7.25 8.41 7.25 8C7.25 7.59 7.59 7.25 8 7.25H16C16.41 7.25 16.75 7.59 16.75 8C16.75 8.41 16.41 8.75 16 8.75Z"
			fill={`${color}`} />
		<path
			d="M16 13.75H8C7.59 13.75 7.25 13.41 7.25 13C7.25 12.59 7.59 12.25 8 12.25H16C16.41 12.25 16.75 12.59 16.75 13C16.75 13.41 16.41 13.75 16 13.75Z"
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
			d="M22 3.25H2C1.59 3.25 1.25 2.91 1.25 2.5C1.25 2.09 1.59 1.75 2 1.75H22C22.41 1.75 22.75 2.09 22.75 2.5C22.75 2.91 22.41 3.25 22 3.25Z"
			fill={`${color}`} />
		<path
			d="M3.66992 2.5V14.47C3.66992 15.45 4.12992 16.38 4.91992 16.97L10.1299 20.87C11.2399 21.7 12.7699 21.7 13.8799 20.87L19.0899 16.97C19.8799 16.38 20.3399 15.45 20.3399 14.47V2.5H3.66992ZM15.9999 13.75H7.99992C7.58992 13.75 7.24992 13.41 7.24992 13C7.24992 12.59 7.58992 12.25 7.99992 12.25H15.9999C16.4099 12.25 16.7499 12.59 16.7499 13C16.7499 13.41 16.4099 13.75 15.9999 13.75ZM15.9999 8.75H7.99992C7.58992 8.75 7.24992 8.41 7.24992 8C7.24992 7.59 7.58992 7.25 7.99992 7.25H15.9999C16.4099 7.25 16.7499 7.59 16.7499 8C16.7499 8.41 16.4099 8.75 15.9999 8.75Z"
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
			d="M3.66992 2.5V14.47C3.66992 15.45 4.12992 16.38 4.91992 16.97L10.1299 20.87C11.2399 21.7 12.7699 21.7 13.8799 20.87L19.0899 16.97C19.8799 16.38 20.3399 15.45 20.3399 14.47V2.5H3.66992Z"
			fill={`${color}`} />
		<path
			d="M22 3.25H2C1.59 3.25 1.25 2.91 1.25 2.5C1.25 2.09 1.59 1.75 2 1.75H22C22.41 1.75 22.75 2.09 22.75 2.5C22.75 2.91 22.41 3.25 22 3.25Z"
			fill={`${color}`} />
		<path
			d="M16 8.75H8C7.59 8.75 7.25 8.41 7.25 8C7.25 7.59 7.59 7.25 8 7.25H16C16.41 7.25 16.75 7.59 16.75 8C16.75 8.41 16.41 8.75 16 8.75Z"
			fill={`${color}`} />
		<path
			d="M16 13.75H8C7.59 13.75 7.25 13.41 7.25 13C7.25 12.59 7.59 12.25 8 12.25H16C16.41 12.25 16.75 12.59 16.75 13C16.75 13.41 16.41 13.75 16 13.75Z"
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
			d="M3.66992 10.95V14.47C3.66992 15.45 4.12992 16.38 4.91992 16.97L10.1299 20.87C11.2399 21.7 12.7699 21.7 13.8799 20.87L19.0899 16.97C19.8799 16.38 20.3399 15.45 20.3399 14.47V2.5H3.6799V6.03999"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 2.5H22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round" />
		<path
			d="M8 8H16"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M8 13H12"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15 13H16"
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
			d="M3.66992 2.5V14.47C3.66992 15.45 4.12992 16.38 4.91992 16.97L10.1299 20.87C11.2399 21.7 12.7699 21.7 13.8799 20.87L19.0899 16.97C19.8799 16.38 20.3399 15.45 20.3399 14.47V2.5H3.66992Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10" />
		<path
			d="M2 2.5H22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round" />
		<path
			opacity="0.4"
			d="M8 8H16"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M8 13H16"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
