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
			d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M8 7H16"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M8 10.5H13"
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
			d="M3.5 18.75C3.09 18.75 2.75 18.41 2.75 18V7C2.75 2.59 4.09 1.25 8.5 1.25H15.5C19.91 1.25 21.25 2.59 21.25 7V17C21.25 17.16 21.25 17.31 21.24 17.47C21.21 17.88 20.84 18.2 20.44 18.17C20.03 18.14 19.71 17.78 19.74 17.37C19.75 17.25 19.75 17.12 19.75 17V7C19.75 3.43 19.08 2.75 15.5 2.75H8.5C4.92 2.75 4.25 3.43 4.25 7V18C4.25 18.41 3.91 18.75 3.5 18.75Z"
			fill={`${color}`} />
		<path
			d="M17 22.75H7C4.66 22.75 2.75 20.84 2.75 18.5V17.85C2.75 15.86 4.37 14.25 6.35 14.25H20.5C20.91 14.25 21.25 14.59 21.25 15V18.5C21.25 20.84 19.34 22.75 17 22.75ZM6.35 15.75C5.19 15.75 4.25 16.69 4.25 17.85V18.5C4.25 20.02 5.48 21.25 7 21.25H17C18.52 21.25 19.75 20.02 19.75 18.5V15.75H6.35Z"
			fill={`${color}`} />
		<path
			d="M16 7.75H8C7.59 7.75 7.25 7.41 7.25 7C7.25 6.59 7.59 6.25 8 6.25H16C16.41 6.25 16.75 6.59 16.75 7C16.75 7.41 16.41 7.75 16 7.75Z"
			fill={`${color}`} />
		<path
			d="M13 11.25H8C7.59 11.25 7.25 10.91 7.25 10.5C7.25 10.09 7.59 9.75 8 9.75H13C13.41 9.75 13.75 10.09 13.75 10.5C13.75 10.91 13.41 11.25 13 11.25Z"
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
			d="M20.5 16V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15H19.5C20.05 15 20.5 15.45 20.5 16Z"
			fill={`${color}`} />
		<path
			d="M15.5 2H8.5C4.5 2 3.5 3 3.5 7V14.58C4.26 13.91 5.26 13.5 6.35 13.5H19.5C20.05 13.5 20.5 13.05 20.5 12.5V7C20.5 3 19.5 2 15.5 2ZM13 10.75H8C7.59 10.75 7.25 10.41 7.25 10C7.25 9.59 7.59 9.25 8 9.25H13C13.41 9.25 13.75 9.59 13.75 10C13.75 10.41 13.41 10.75 13 10.75ZM16 7.25H8C7.59 7.25 7.25 6.91 7.25 6.5C7.25 6.09 7.59 5.75 8 5.75H16C16.41 5.75 16.75 6.09 16.75 6.5C16.75 6.91 16.41 7.25 16 7.25Z"
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
			d="M12 5.29994V21.3299C11.83 21.3299 11.65 21.2999 11.51 21.2199L11.47 21.1999C9.55 20.1499 6.2 19.0499 4.03 18.7599L3.74 18.7199C2.78 18.5999 2 17.6999 2 16.7399V4.65994C2 3.46994 2.97 2.56994 4.16 2.66994C6.26 2.83994 9.44 3.89994 11.22 5.00994L11.47 5.15994C11.62 5.24994 11.81 5.29994 12 5.29994Z"
			fill={`${color}`} />
		<path
			d="M22 4.67003V16.74C22 17.7 21.22 18.6 20.26 18.72L19.93 18.76C17.75 19.05 14.39 20.16 12.47 21.22C12.34 21.3 12.18 21.33 12 21.33V5.30003C12.19 5.30003 12.38 5.25003 12.53 5.16003L12.7 5.05003C14.48 3.93003 17.67 2.86003 19.77 2.68003H19.83C21.02 2.58003 22 3.47003 22 4.67003Z"
			fill={`${color}`} />
		<path
			d="M7.75 9.23999H5.5C5.09 9.23999 4.75 8.89999 4.75 8.48999C4.75 8.07999 5.09 7.73999 5.5 7.73999H7.75C8.16 7.73999 8.5 8.07999 8.5 8.48999C8.5 8.89999 8.16 9.23999 7.75 9.23999Z"
			fill={`${color}`} />
		<path
			d="M8.5 12.24H5.5C5.09 12.24 4.75 11.9 4.75 11.49C4.75 11.08 5.09 10.74 5.5 10.74H8.5C8.91 10.74 9.25 11.08 9.25 11.49C9.25 11.9 8.91 12.24 8.5 12.24Z"
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
			d="M22 10.9899V4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994V16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399V15.0199"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 5.48999V20.49"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7.75 8.48999H5.5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M8.5 11.49H5.5"
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
			d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M8 7H16"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M8 10.5H13"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
