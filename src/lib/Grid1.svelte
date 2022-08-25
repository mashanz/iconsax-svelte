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
			d="M2.03 8.5H22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2.03 15.5H22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M8.51 21.99V2.01001"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15.51 21.99V2.01001"
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
			d="M21.9993 9.25H2.0293C1.6193 9.25 1.2793 8.91 1.2793 8.5C1.2793 8.09 1.6193 7.75 2.0293 7.75H21.9993C22.4093 7.75 22.7493 8.09 22.7493 8.5C22.7493 8.91 22.4093 9.25 21.9993 9.25Z"
			fill={`${color}`} />
		<path
			d="M21.9993 16.25H2.0293C1.6193 16.25 1.2793 15.91 1.2793 15.5C1.2793 15.09 1.6193 14.75 2.0293 14.75H21.9993C22.4093 14.75 22.7493 15.09 22.7493 15.5C22.7493 15.91 22.4093 16.25 21.9993 16.25Z"
			fill={`${color}`} />
		<path
			d="M8.50977 22.7398C8.09977 22.7398 7.75977 22.3998 7.75977 21.9898V2.00977C7.75977 1.59977 8.09977 1.25977 8.50977 1.25977C8.91977 1.25977 9.25977 1.59977 9.25977 2.00977V21.9798C9.25977 22.3998 8.92977 22.7398 8.50977 22.7398Z"
			fill={`${color}`} />
		<path
			d="M15.5098 22.7398C15.0998 22.7398 14.7598 22.3998 14.7598 21.9898V2.00977C14.7598 1.59977 15.0998 1.25977 15.5098 1.25977C15.9198 1.25977 16.2598 1.59977 16.2598 2.00977V21.9798C16.2598 22.3998 15.9298 22.7398 15.5098 22.7398Z"
			fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path d="M7.75 2V7.8H2C2 4.19 4.15 2.02 7.75 2Z" fill={`${color}`} />
		<path d="M22 7.8H16.25V2C19.85 2.02 22 4.19 22 7.8Z" fill={`${color}`} />
		<path d="M22 16.3008C21.96 19.8508 19.82 21.9808 16.25 22.0008V16.3008H22Z" fill={`${color}`} />
		<path d="M7.75 16.3008V22.0008C4.18 21.9808 2.04 19.8508 2 16.3008H7.75Z" fill={`${color}`} />
		<path d="M7.75 9.30078H2V14.8008H7.75V9.30078Z" fill={`${color}`} />
		<path d="M22 9.30078H16.25V14.8008H22V9.30078Z" fill={`${color}`} />
		<path d="M14.75 9.30078H9.25V14.8008H14.75V9.30078Z" fill={`${color}`} />
		<path d="M14.75 2H9.25V7.8H14.75V2Z" fill={`${color}`} />
		<path d="M14.75 16.3008H9.25V22.0008H14.75V16.3008Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path d="M8.51 2V8.5H2V7.81C2 4.17 4.17 2 7.81 2H8.51Z" fill={`${color}`} />
		<path
			d="M21.9998 7.81V8.5H15.5098V2H16.1898C19.8298 2 21.9998 4.17 21.9998 7.81Z"
			fill={`${color}`} />
		<path
			d="M21.9998 15.5V16.19C21.9998 19.83 19.8298 22 16.1898 22H15.5098V15.5H21.9998Z"
			fill={`${color}`} />
		<path d="M8.51 15.5V22H7.81C4.17 22 2 19.83 2 16.19V15.5H8.51Z" fill={`${color}`} />
		<path opacity="0.4" d="M8.51 8.5H2V15.5H8.51V8.5Z" fill={`${color}`} />
		<path opacity="0.4" d="M21.9998 8.5H15.5098V15.5H21.9998V8.5Z" fill={`${color}`} />
		<path d="M15.5098 8.5H8.50977V15.5H15.5098V8.5Z" fill={`${color}`} />
		<path opacity="0.4" d="M15.5098 2H8.50977V8.5H15.5098V2Z" fill={`${color}`} />
		<path opacity="0.4" d="M15.5098 15.5H8.50977V22H15.5098V15.5Z" fill={`${color}`} />
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
			d="M2.0293 8.5H21.9993"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2.0293 15.5H21.9993"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M8.50977 21.99V2.01001"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15.5098 21.99V6"
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
				d="M2.0293 8.5H21.9993"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M2.0293 15.5H21.9993"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M8.50977 21.9898V2.00977"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M15.5098 21.9898V2.00977"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
	</svg>
{/if}
