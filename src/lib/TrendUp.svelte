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
			d="M16.5 9.5L12.3 13.7L10.7 11.3L7.5 14.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M14.5 9.5H16.5V11.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
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
			d="M7.50043 15.2499C7.31043 15.2499 7.12043 15.1799 6.97043 15.0299C6.68043 14.7399 6.68043 14.2599 6.97043 13.9699L10.1704 10.7699C10.3304 10.6099 10.5404 10.5299 10.7704 10.5499C10.9904 10.5699 11.1904 10.6899 11.3204 10.8799L12.4104 12.5199L15.9604 8.96994C16.2504 8.67994 16.7304 8.67994 17.0204 8.96994C17.3104 9.25994 17.3104 9.73994 17.0204 10.0299L12.8204 14.2299C12.6604 14.3899 12.4504 14.4699 12.2204 14.4499C12.0004 14.4299 11.8004 14.3099 11.6704 14.1199L10.5804 12.4799L8.03043 15.0299C7.88043 15.1799 7.69043 15.2499 7.50043 15.2499Z"
			fill={`${color}`} />
		<path
			d="M16.5 12.25C16.09 12.25 15.75 11.91 15.75 11.5V10.25H14.5C14.09 10.25 13.75 9.91 13.75 9.5C13.75 9.09 14.09 8.75 14.5 8.75H16.5C16.91 8.75 17.25 9.09 17.25 9.5V11.5C17.25 11.91 16.91 12.25 16.5 12.25Z"
			fill={`${color}`} />
		<path
			d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
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
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.88 11.53C16.88 11.92 16.57 12.23 16.18 12.23C15.79 12.23 15.48 11.92 15.48 11.53V11.35L12.76 14.07C12.61 14.22 12.41 14.29 12.2 14.27C11.99 14.25 11.8 14.14 11.69 13.96L10.67 12.44L8.29 14.82C8.15 14.96 7.98 15.02 7.8 15.02C7.62 15.02 7.44 14.95 7.31 14.82C7.04 14.55 7.04 14.11 7.31 13.83L10.29 10.85C10.44 10.7 10.64 10.63 10.85 10.65C11.06 10.67 11.25 10.78 11.36 10.96L12.38 12.48L14.49 10.37H14.31C13.92 10.37 13.61 10.06 13.61 9.67C13.61 9.28 13.92 8.97 14.31 8.97H16.17C16.26 8.97 16.35 8.99 16.44 9.02C16.61 9.09 16.75 9.23 16.82 9.4C16.86 9.49 16.87 9.58 16.87 9.67V11.53H16.88Z"
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
			d="M16.8295 9.40998C16.7595 9.23998 16.6195 9.09998 16.4495 9.02998C16.3695 8.99998 16.2795 8.97998 16.1895 8.97998H14.3295C13.9395 8.97998 13.6295 9.28998 13.6295 9.67998C13.6295 10.07 13.9395 10.38 14.3295 10.38H14.5095L12.3995 12.49L11.3795 10.97C11.2595 10.8 11.0795 10.68 10.8695 10.66C10.6495 10.64 10.4595 10.71 10.3095 10.86L7.32945 13.84C7.05945 14.11 7.05945 14.55 7.32945 14.83C7.46945 14.97 7.63945 15.03 7.81945 15.03C7.99945 15.03 8.17945 14.96 8.30945 14.83L10.6895 12.45L11.7095 13.97C11.8295 14.14 12.0095 14.26 12.2195 14.28C12.4395 14.3 12.6295 14.23 12.7795 14.08L15.4995 11.36V11.54C15.4995 11.93 15.8095 12.24 16.1995 12.24C16.5895 12.24 16.8995 11.93 16.8995 11.54V9.66998C16.8795 9.57998 16.8695 9.48998 16.8295 9.40998Z"
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
			d="M2 12.98V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M11.17 12L10.7 11.3L7.5 14.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16.5 9.5L14.99 11.01L14 12"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M14.5 9.5H16.5V11.5"
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
		<g opacity="0.4">
			<path
				d="M16.5 9.5L12.3 13.7L10.7 11.3L7.5 14.5"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M14.5 9.5H16.5V11.5"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
		<path
			d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
