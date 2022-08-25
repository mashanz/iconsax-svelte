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
			d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18 12V10M6 12H12H18H6ZM6 12V10V12ZM6 12V14V12ZM18 12V14V12Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 6H14M12 18V6V18ZM12 18H14H12ZM12 18H10H12ZM12 6H10H12Z"
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
			d="M15 22.75H14C13.59 22.75 13.25 22.41 13.25 22C13.25 21.59 13.59 21.25 14 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9C4.39 2.75 2.75 4.39 2.75 9V9.98C2.75 10.39 2.41 10.73 2 10.73C1.59 10.73 1.25 10.39 1.25 9.98V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75Z"
			fill={`${color}`} />
		<path
			d="M12.9995 11.7502C12.8095 11.7502 12.6195 11.6802 12.4695 11.5302C12.1795 11.2402 12.1795 10.7602 12.4695 10.4702L16.2095 6.72021H13.9995C13.5895 6.72021 13.2495 6.38021 13.2495 5.97021C13.2495 5.56021 13.5795 5.22021 13.9995 5.22021H18.0095C18.3095 5.22021 18.5895 5.40021 18.6995 5.68021C18.8195 5.96021 18.7495 6.28022 18.5395 6.50022L13.5295 11.5302C13.3795 11.6802 13.1895 11.7502 12.9995 11.7502Z"
			fill={`${color}`} />
		<path
			d="M18.0098 10.7402C17.5998 10.7402 17.2598 10.4002 17.2598 9.99021V5.97021C17.2598 5.56021 17.5998 5.22021 18.0098 5.22021C18.4198 5.22021 18.7598 5.56021 18.7598 5.97021V9.98021C18.7598 10.4002 18.4198 10.7402 18.0098 10.7402Z"
			fill={`${color}`} />
		<path
			d="M7.85 22.75H5.15C2.49 22.75 1.25 21.51 1.25 18.85V16.15C1.25 13.49 2.49 12.25 5.15 12.25H7.85C10.51 12.25 11.75 13.49 11.75 16.15V18.85C11.75 21.51 10.51 22.75 7.85 22.75ZM5.15 13.75C3.31 13.75 2.75 14.31 2.75 16.15V18.85C2.75 20.69 3.31 21.25 5.15 21.25H7.85C9.69 21.25 10.25 20.69 10.25 18.85V16.15C10.25 14.31 9.69 13.75 7.85 13.75H5.15Z"
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
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM10.22 21H7.91C5.2 21 3 18.8 3 16.09V13.78C3 13.37 3.34 13.03 3.75 13.03C4.16 13.03 4.5 13.37 4.5 13.78V16.09C4.5 17.97 6.03 19.5 7.91 19.5H10.22C10.63 19.5 10.97 19.84 10.97 20.25C10.97 20.66 10.64 21 10.22 21ZM10.22 4.5H7.91C6.03 4.5 4.5 6.03 4.5 7.91V10.22C4.5 10.63 4.16 10.97 3.75 10.97C3.34 10.97 3 10.64 3 10.22V7.91C3 5.2 5.2 3 7.91 3H10.22C10.63 3 10.97 3.34 10.97 3.75C10.97 4.16 10.64 4.5 10.22 4.5ZM21 16.09C21 18.8 18.8 21 16.09 21H14.7C14.29 21 13.95 20.66 13.95 20.25C13.95 19.84 14.29 19.5 14.7 19.5H16.09C17.97 19.5 19.5 17.97 19.5 16.09V14.7C19.5 14.29 19.84 13.95 20.25 13.95C20.66 13.95 21 14.29 21 14.7V16.09ZM21 10.22C21 10.63 20.66 10.97 20.25 10.97C19.84 10.97 19.5 10.63 19.5 10.22V7.91C19.5 6.03 17.97 4.5 16.09 4.5H13.78C13.37 4.5 13.03 4.16 13.03 3.75C13.03 3.34 13.36 3 13.78 3H16.09C18.8 3 21 5.2 21 7.91V10.22Z"
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
			d="M2.75 9.97C2.34 9.97 2 9.64 2 9.22V6.91C2 4.2 4.2 2 6.91 2H9.22C9.63 2 9.97 2.34 9.97 2.75C9.97 3.16 9.64 3.5 9.22 3.5H6.91C5.03 3.5 3.5 5.03 3.5 6.91V9.22C3.5 9.64 3.16 9.97 2.75 9.97Z"
			fill={`${color}`} />
		<path
			d="M21.2493 9.97C20.8393 9.97 20.4993 9.63 20.4993 9.22V6.91C20.4993 5.03 18.9693 3.5 17.0893 3.5H14.7793C14.3693 3.5 14.0293 3.16 14.0293 2.75C14.0293 2.34 14.3593 2 14.7793 2H17.0893C19.7993 2 21.9993 4.2 21.9993 6.91V9.22C21.9993 9.64 21.6593 9.97 21.2493 9.97Z"
			fill={`${color}`} />
		<path
			d="M17.0892 22.0002H15.6992C15.2892 22.0002 14.9492 21.6602 14.9492 21.2502C14.9492 20.8402 15.2892 20.5002 15.6992 20.5002H17.0892C18.9692 20.5002 20.4992 18.9702 20.4992 17.0902V15.7002C20.4992 15.2902 20.8392 14.9502 21.2492 14.9502C21.6592 14.9502 21.9992 15.2902 21.9992 15.7002V17.0902C21.9992 19.8002 19.7992 22.0002 17.0892 22.0002Z"
			fill={`${color}`} />
		<path
			d="M9.22 21.9998H6.91C4.2 21.9998 2 19.7998 2 17.0898V14.7798C2 14.3698 2.34 14.0298 2.75 14.0298C3.16 14.0298 3.5 14.3698 3.5 14.7798V17.0898C3.5 18.9698 5.03 20.4998 6.91 20.4998H9.22C9.63 20.4998 9.97 20.8398 9.97 21.2498C9.97 21.6598 9.64 21.9998 9.22 21.9998Z"
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
			d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
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
			d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<g opacity="0.54">
			<path
				d="M18 12V10M6 12H12H18H6ZM6 12V10V12ZM6 12V14V12ZM18 12V14V12Z"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M12 6H14M12 18V6V18ZM12 18H14H12ZM12 18H10H12ZM12 6H10H12Z"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
	</svg>
{/if}
