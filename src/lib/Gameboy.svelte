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
			d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16.25 11H7.75C6.79 11 6 10.21 6 9.25V6.75C6 5.79 6.79 5 7.75 5H16.25C17.21 5 18 5.79 18 6.75V9.25C18 10.21 17.21 11 16.25 11Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M10.3 15.28L8 17.58"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M8.03003 15.3101L10.33 17.61"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16.49 15.3301H16.51"
			stroke={`${color}`}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M14.49 17.5V17.48"
			stroke={`${color}`}
			stroke-width="2"
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
			d="M16 22.75H8C4.35 22.75 2.25 20.65 2.25 17V7C2.25 3.35 4.35 1.25 8 1.25H16C19.65 1.25 21.75 3.35 21.75 7V17C21.75 20.65 19.65 22.75 16 22.75ZM8 2.75C5.14 2.75 3.75 4.14 3.75 7V17C3.75 19.86 5.14 21.25 8 21.25H16C18.86 21.25 20.25 19.86 20.25 17V7C20.25 4.14 18.86 2.75 16 2.75H8Z"
			fill={`${color}`} />
		<path
			d="M16.25 11.75H7.75C6.37 11.75 5.25 10.63 5.25 9.25V6.75C5.25 5.37 6.37 4.25 7.75 4.25H16.25C17.63 4.25 18.75 5.37 18.75 6.75V9.25C18.75 10.63 17.63 11.75 16.25 11.75ZM7.75 5.75C7.2 5.75 6.75 6.2 6.75 6.75V9.25C6.75 9.8 7.2 10.25 7.75 10.25H16.25C16.8 10.25 17.25 9.8 17.25 9.25V6.75C17.25 6.2 16.8 5.75 16.25 5.75H7.75Z"
			fill={`${color}`} />
		<path
			d="M7.99945 18.33C7.80945 18.33 7.61945 18.26 7.46945 18.11C7.17945 17.82 7.17945 17.34 7.46945 17.05L9.76944 14.75C10.0594 14.46 10.5394 14.46 10.8294 14.75C11.1194 15.04 11.1194 15.52 10.8294 15.81L8.52945 18.11C8.37945 18.26 8.18945 18.33 7.99945 18.33Z"
			fill={`${color}`} />
		<path
			d="M10.3297 18.36C10.1397 18.36 9.94971 18.29 9.79971 18.14L7.49973 15.84C7.20973 15.55 7.20973 15.07 7.49973 14.78C7.78973 14.49 8.26972 14.49 8.55972 14.78L10.8597 17.08C11.1497 17.37 11.1497 17.85 10.8597 18.14C10.7097 18.29 10.5197 18.36 10.3297 18.36Z"
			fill={`${color}`} />
		<path
			d="M16.51 16.3301C15.96 16.3301 15.5 15.8801 15.5 15.3301C15.5 14.7801 15.94 14.3301 16.49 14.3301H16.51C17.06 14.3301 17.51 14.7801 17.51 15.3301C17.51 15.8801 17.06 16.3301 16.51 16.3301Z"
			fill={`${color}`} />
		<path
			d="M14.4902 18.49C13.9402 18.49 13.4902 18.05 13.4902 17.5V17.48C13.4902 16.93 13.9402 16.48 14.4902 16.48C15.0402 16.48 15.4902 16.93 15.4902 17.48C15.4902 18.03 15.0402 18.49 14.4902 18.49Z"
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
			d="M17 2H7C4.8 2 3 3.8 3 6V18C3 20.2 4.8 22 7 22H17C19.2 22 21 20.2 21 18V6C21 3.8 19.2 2 17 2ZM10.86 18.14C10.71 18.29 10.52 18.36 10.33 18.36C10.14 18.36 9.95 18.29 9.8 18.14L9.15 17.49L8.53 18.11C8.38 18.26 8.19 18.33 8 18.33C7.81 18.33 7.62 18.26 7.47 18.11C7.18 17.82 7.18 17.34 7.47 17.05L8.09 16.43L7.5 15.84C7.21 15.55 7.21 15.07 7.5 14.78C7.79 14.49 8.27 14.49 8.56 14.78L9.15 15.37L9.77 14.75C10.06 14.46 10.54 14.46 10.83 14.75C11.12 15.04 11.12 15.52 10.83 15.81L10.21 16.43L10.86 17.08C11.15 17.37 11.15 17.85 10.86 18.14ZM14.49 18.49C13.94 18.49 13.49 18.05 13.49 17.5V17.48C13.49 16.93 13.94 16.48 14.49 16.48C15.04 16.48 15.49 16.93 15.49 17.48C15.49 18.03 15.04 18.49 14.49 18.49ZM16.51 16.33C15.96 16.33 15.5 15.88 15.5 15.33C15.5 14.78 15.94 14.33 16.49 14.33H16.51C17.06 14.33 17.51 14.78 17.51 15.33C17.51 15.88 17.06 16.33 16.51 16.33ZM18 9.25C18 10.21 17.21 11 16.25 11H7.75C6.79 11 6 10.21 6 9.25V6.75C6 5.79 6.79 5 7.75 5H16.25C17.21 5 18 5.79 18 6.75V9.25Z"
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
			d="M17 22H7C4.8 22 3 20.2 3 18V6C3 3.8 4.8 2 7 2H17C19.2 2 21 3.8 21 6V18C21 20.2 19.2 22 17 22Z"
			fill={`${color}`} />
		<path
			d="M16.25 11H7.75C6.79 11 6 10.21 6 9.25V6.75C6 5.79 6.79 5 7.75 5H16.25C17.21 5 18 5.79 18 6.75V9.25C18 10.21 17.21 11 16.25 11Z"
			fill={`${color}`} />
		<path
			d="M10.8594 17.08L10.2094 16.43L10.8294 15.81C11.1194 15.52 11.1194 15.04 10.8294 14.75C10.5394 14.46 10.0594 14.46 9.76944 14.75L9.14945 15.37L8.55945 14.78C8.26945 14.49 7.78945 14.49 7.49945 14.78C7.20945 15.07 7.20945 15.55 7.49945 15.84L8.08945 16.43L7.46945 17.05C7.17945 17.34 7.17945 17.82 7.46945 18.11C7.61945 18.26 7.80945 18.33 7.99945 18.33C8.18945 18.33 8.37945 18.26 8.52945 18.11L9.14945 17.49L9.79944 18.14C9.94944 18.29 10.1394 18.36 10.3294 18.36C10.5194 18.36 10.7094 18.29 10.8594 18.14C11.1494 17.85 11.1494 17.37 10.8594 17.08Z"
			fill={`${color}`} />
		<path
			d="M16.51 16.3301C15.96 16.3301 15.5 15.8801 15.5 15.3301C15.5 14.7801 15.94 14.3301 16.49 14.3301H16.51C17.06 14.3301 17.51 14.7801 17.51 15.3301C17.51 15.8801 17.06 16.3301 16.51 16.3301Z"
			fill={`${color}`} />
		<path
			d="M14.4902 18.49C13.9402 18.49 13.4902 18.05 13.4902 17.5V17.48C13.4902 16.93 13.9402 16.48 14.4902 16.48C15.0402 16.48 15.4902 16.93 15.4902 17.48C15.4902 18.03 15.0402 18.49 14.4902 18.49Z"
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
			d="M3 7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16.25 11H7.75C6.79 11 6 10.21 6 9.25V6.75C6 5.79 6.79 5 7.75 5H16.25C17.21 5 18 5.79 18 6.75V9.25C18 10.21 17.21 11 16.25 11Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M10.3 15.28L8 17.58"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M8.0293 15.3101L10.3293 17.61"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16.4902 15.3301H16.5103"
			stroke={`${color}`}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M14.4902 17.5V17.48"
			stroke={`${color}`}
			stroke-width="2"
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
			d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M16.25 11H7.75C6.79 11 6 10.21 6 9.25V6.75C6 5.79 6.79 5 7.75 5H16.25C17.21 5 18 5.79 18 6.75V9.25C18 10.21 17.21 11 16.25 11Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M10.3 15.2803L8 17.5803"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M8.03027 15.3101L10.3303 17.61"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M16.4902 15.3301H16.5103"
			stroke={`${color}`}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M14.4902 17.5V17.48"
			stroke={`${color}`}
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
