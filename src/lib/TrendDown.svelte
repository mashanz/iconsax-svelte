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
			d="M16.5 14.5L12.3 10.3L10.7 12.7L7.5 9.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M14.5 14.5H16.5V12.5"
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
			d="M16.5002 15.2499C16.3102 15.2499 16.1202 15.1799 15.9702 15.0299L12.4202 11.4799L11.3302 13.1199C11.2102 13.3099 11.0002 13.4299 10.7802 13.4499C10.5502 13.4699 10.3302 13.3899 10.1802 13.2299L6.9802 10.0299C6.6902 9.73994 6.6902 9.25994 6.9802 8.96994C7.2702 8.67994 7.7502 8.67994 8.0402 8.96994L10.5902 11.5199L11.6802 9.87994C11.8002 9.69994 12.0002 9.57994 12.2302 9.54994C12.4602 9.52994 12.6802 9.60994 12.8302 9.76994L17.0302 13.9699C17.3202 14.2599 17.3202 14.7399 17.0302 15.0299C16.8802 15.1799 16.6902 15.2499 16.5002 15.2499Z"
			fill={`${color}`} />
		<path
			d="M16.5 15.25H14.5C14.09 15.25 13.75 14.91 13.75 14.5C13.75 14.09 14.09 13.75 14.5 13.75H15.75V12.5C15.75 12.09 16.09 11.75 16.5 11.75C16.91 11.75 17.25 12.09 17.25 12.5V14.5C17.25 14.91 16.91 15.25 16.5 15.25Z"
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
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.88 14.33C16.88 14.42 16.86 14.51 16.83 14.6C16.76 14.77 16.62 14.91 16.45 14.98C16.36 15.02 16.27 15.03 16.18 15.03H14.32C13.93 15.03 13.62 14.72 13.62 14.33C13.62 13.94 13.93 13.63 14.32 13.63H14.5L12.39 11.52L11.37 13.04C11.25 13.21 11.07 13.33 10.86 13.35C10.65 13.37 10.45 13.3 10.3 13.15L7.32 10.17C7.05 9.9 7.05 9.46 7.32 9.18C7.59 8.9 8.03 8.91 8.31 9.18L10.69 11.56L11.71 10.04C11.83 9.87 12.01 9.75 12.22 9.73C12.44 9.71 12.63 9.78 12.78 9.93L15.5 12.65V12.47C15.5 12.08 15.81 11.77 16.2 11.77C16.59 11.77 16.9 12.08 16.9 12.47V14.33H16.88Z"
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
			d="M16.8797 12.47C16.8797 12.08 16.5697 11.77 16.1797 11.77C15.7897 11.77 15.4797 12.08 15.4797 12.47V12.65L12.7597 9.93004C12.6097 9.78004 12.4097 9.71004 12.1997 9.73004C11.9897 9.75004 11.7997 9.86004 11.6897 10.04L10.6697 11.56L8.30969 9.18004C8.03969 8.91004 7.59969 8.91004 7.31969 9.18004C7.04969 9.45004 7.04969 9.89004 7.31969 10.17L10.2997 13.15C10.4497 13.3 10.6497 13.37 10.8597 13.35C11.0697 13.33 11.2597 13.22 11.3697 13.04L12.3897 11.52L14.4997 13.63H14.3197C13.9297 13.63 13.6197 13.94 13.6197 14.33C13.6197 14.72 13.9297 15.03 14.3197 15.03H16.1797C16.2697 15.03 16.3597 15.01 16.4497 14.98C16.6197 14.91 16.7597 14.77 16.8297 14.6C16.8697 14.51 16.8797 14.42 16.8797 14.33V12.47Z"
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
			d="M11.17 12L10.7 12.7L7.5 9.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16.5 14.5L14.99 12.99L14 12"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M14.5 14.5H16.5V12.5"
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
				d="M16.5 14.5L12.3 10.3L10.7 12.7L7.5 9.5"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M14.5 14.5H16.5V12.5"
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
