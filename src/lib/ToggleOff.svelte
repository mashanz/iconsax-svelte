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
			d="M8.3 16H10.7C12.7 16 13.5 15.2 13.5 13.2V10.8C13.5 8.8 12.7 8 10.7 8H8.3C6.3 8 5.5 8.8 5.5 10.8V13.2C5.5 15.2 6.3 16 8.3 16Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M17 20H7C3 20 2 19 2 15V9C2 5 3 4 7 4H17C21 4 22 5 22 9V15C22 19 21 20 17 20Z"
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
			d="M10.7 16.75H8.3C5.88 16.75 4.75 15.62 4.75 13.2V10.8C4.75 8.38 5.88 7.25 8.3 7.25H10.7C13.12 7.25 14.25 8.38 14.25 10.8V13.2C14.25 15.62 13.12 16.75 10.7 16.75ZM8.3 8.75C6.71 8.75 6.25 9.21 6.25 10.8V13.2C6.25 14.79 6.71 15.25 8.3 15.25H10.7C12.29 15.25 12.75 14.79 12.75 13.2V10.8C12.75 9.21 12.29 8.75 10.7 8.75H8.3Z"
			fill={`${color}`} />
		<path
			d="M17 20.75H7C2.59 20.75 1.25 19.41 1.25 15V9C1.25 4.59 2.59 3.25 7 3.25H17C21.41 3.25 22.75 4.59 22.75 9V15C22.75 19.41 21.41 20.75 17 20.75ZM7 4.75C3.42 4.75 2.75 5.43 2.75 9V15C2.75 18.57 3.42 19.25 7 19.25H17C20.58 19.25 21.25 18.57 21.25 15V9C21.25 5.43 20.58 4.75 17 4.75H7Z"
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
			d="M16.65 3.85938H7.35C3.25 3.85938 2 5.10938 2 9.20938V14.7894C2 18.8894 3.25 20.1394 7.35 20.1394H16.65C20.75 20.1394 22 18.8894 22 14.7894V9.20938C22 5.10938 20.75 3.85938 16.65 3.85938ZM14.09 13.1194C14.09 15.3694 13.04 16.4194 10.79 16.4194H8.56C6.31 16.4194 5.26 15.3694 5.26 13.1194V10.8894C5.26 8.63938 6.31 7.58938 8.56 7.58938H10.79C13.04 7.58938 14.09 8.63938 14.09 10.8894V13.1194Z"
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
			d="M16.65 3.85986H7.35C3.25 3.85986 2 5.10986 2 9.20986V14.7899C2 18.8899 3.25 20.1399 7.35 20.1399H16.65C20.75 20.1399 22 18.8899 22 14.7899V9.20986C22 5.10986 20.75 3.85986 16.65 3.85986Z"
			fill={`${color}`} />
		<path
			d="M10.7898 7.58008H8.55977C6.30977 7.58008 5.25977 8.63008 5.25977 10.8801V13.1101C5.25977 15.3601 6.30977 16.4101 8.55977 16.4101H10.7898C13.0398 16.4101 14.0898 15.3601 14.0898 13.1101V10.8801C14.0898 8.63008 13.0398 7.58008 10.7898 7.58008Z"
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
			d="M5.5 10.8V13.2C5.5 15.2 6.3 16 8.3 16H10.7C12.7 16 13.5 15.2 13.5 13.2V10.8C13.5 8.8 12.7 8 10.7 8H8.3"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 20H7C3 20 2 19 2 15V9C2 5 3 4 7 4H17C21 4 22 5 22 9V15C22 19 21 20 17 20"
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
			opacity="0.4"
			d="M8.3 16H10.7C12.7 16 13.5 15.2 13.5 13.2V10.8C13.5 8.8 12.7 8 10.7 8H8.3C6.3 8 5.5 8.8 5.5 10.8V13.2C5.5 15.2 6.3 16 8.3 16Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M17 20H7C3 20 2 19 2 15V9C2 5 3 4 7 4H17C21 4 22 5 22 9V15C22 19 21 20 17 20Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
