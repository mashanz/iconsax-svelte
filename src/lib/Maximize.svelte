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
			d="M18 6L6 18"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18 10V6H14"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6 14V18H10"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6 6L18 18"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6 10V6H10"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18 14V18H14"
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
			d="M5.99945 18.7499C5.80945 18.7499 5.61945 18.6799 5.46945 18.5299C5.17945 18.2399 5.17945 17.7599 5.46945 17.4699L17.4695 5.46994C17.7595 5.17994 18.2395 5.17994 18.5295 5.46994C18.8195 5.75994 18.8195 6.23994 18.5295 6.52994L6.52945 18.5299C6.37945 18.6799 6.18945 18.7499 5.99945 18.7499Z"
			fill={`${color}`} />
		<path
			d="M18 10.75C17.59 10.75 17.25 10.41 17.25 10V6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.41 5.25 18.75 5.59 18.75 6V10C18.75 10.41 18.41 10.75 18 10.75Z"
			fill={`${color}`} />
		<path
			d="M10 18.75H6C5.59 18.75 5.25 18.41 5.25 18V14C5.25 13.59 5.59 13.25 6 13.25C6.41 13.25 6.75 13.59 6.75 14V17.25H10C10.41 17.25 10.75 17.59 10.75 18C10.75 18.41 10.41 18.75 10 18.75Z"
			fill={`${color}`} />
		<path
			d="M17.9995 18.7499C17.8095 18.7499 17.6195 18.6799 17.4695 18.5299L5.46945 6.52994C5.17945 6.23994 5.17945 5.75994 5.46945 5.46994C5.75945 5.17994 6.23945 5.17994 6.52945 5.46994L18.5295 17.4699C18.8195 17.7599 18.8195 18.2399 18.5295 18.5299C18.3795 18.6799 18.1895 18.7499 17.9995 18.7499Z"
			fill={`${color}`} />
		<path
			d="M6 10.75C5.59 10.75 5.25 10.41 5.25 10V6C5.25 5.59 5.59 5.25 6 5.25H10C10.41 5.25 10.75 5.59 10.75 6C10.75 6.41 10.41 6.75 10 6.75H6.75V10C6.75 10.41 6.41 10.75 6 10.75Z"
			fill={`${color}`} />
		<path
			d="M18 18.75H14C13.59 18.75 13.25 18.41 13.25 18C13.25 17.59 13.59 17.25 14 17.25H17.25V14C17.25 13.59 17.59 13.25 18 13.25C18.41 13.25 18.75 13.59 18.75 14V18C18.75 18.41 18.41 18.75 18 18.75Z"
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
			d="M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C7.61 2 7.41 2.01 7.22 2.03C3.94 2.24 2 4.37 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C4.95 21.55 5.99 21.9 7.22 21.98C7.41 21.99 7.61 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13ZM18.75 10C18.75 10.41 18.41 10.75 18 10.75C17.59 10.75 17.25 10.41 17.25 10V7.81L13.06 12L17.25 16.19V14C17.25 13.59 17.59 13.25 18 13.25C18.41 13.25 18.75 13.59 18.75 14V18C18.75 18.1 18.73 18.19 18.69 18.29C18.61 18.47 18.47 18.62 18.28 18.7C18.19 18.74 18.09 18.76 17.99 18.76H13.99C13.58 18.76 13.24 18.42 13.24 18.01C13.24 17.6 13.58 17.26 13.99 17.26H16.18L12 13.06L7.81 17.25H10C10.41 17.25 10.75 17.59 10.75 18C10.75 18.41 10.41 18.75 10 18.75H6C5.9 18.75 5.8 18.73 5.71 18.69C5.53 18.61 5.38 18.47 5.3 18.28C5.27 18.19 5.25 18.1 5.25 18V14C5.25 13.59 5.59 13.25 6 13.25C6.41 13.25 6.75 13.59 6.75 14V16.19L10.94 12L6.75 7.81V10C6.75 10.41 6.41 10.75 6 10.75C5.59 10.75 5.25 10.41 5.25 10V6C5.25 5.9 5.27 5.81 5.31 5.71C5.39 5.53 5.53 5.38 5.72 5.3C5.81 5.27 5.9 5.25 6 5.25H10C10.41 5.25 10.75 5.59 10.75 6C10.75 6.41 10.41 6.75 10 6.75H7.81L12 10.94L16.19 6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.1 5.25 18.19 5.27 18.29 5.31C18.47 5.39 18.62 5.53 18.7 5.72C18.73 5.81 18.75 5.9 18.75 6V10Z"
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
			d="M18 9.25C17.59 9.25 17.25 9.59 17.25 10V11.25H12.75V6.75H14C14.41 6.75 14.75 6.41 14.75 6C14.75 5.59 14.41 5.25 14 5.25H10C9.59 5.25 9.25 5.59 9.25 6C9.25 6.41 9.59 6.75 10 6.75H11.25V11.25H6.75V10C6.75 9.59 6.41 9.25 6 9.25C5.59 9.25 5.25 9.59 5.25 10V14C5.25 14.41 5.59 14.75 6 14.75C6.41 14.75 6.75 14.41 6.75 14V12.75H11.25V17.25H10C9.59 17.25 9.25 17.59 9.25 18C9.25 18.41 9.59 18.75 10 18.75H14C14.41 18.75 14.75 18.41 14.75 18C14.75 17.59 14.41 17.25 14 17.25H12.75V12.75H17.25V14C17.25 14.41 17.59 14.75 18 14.75C18.41 14.75 18.75 14.41 18.75 14V10C18.75 9.59 18.41 9.25 18 9.25Z"
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
			d="M2 13V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18 6L6 18"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18 10V6H14"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6 14V18H10"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6 6L18 18"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6 10V6H10"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18 14V18H14"
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
				d="M18 6L6 18"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M18 10V6H14"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M6 14V18H10"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M6 6L18 18"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M6 10V6H10"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M18 14V18H14"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
	</svg>
{/if}
