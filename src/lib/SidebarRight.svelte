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
			d="M21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22H14.97C19.97 22 21.97 20 21.97 15Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M14.97 2V22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7.96997 9.43994L10.53 11.9999L7.96997 14.5599"
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
			d="M14.9707 22.75H8.9707C3.5407 22.75 1.2207 20.43 1.2207 15V9C1.2207 3.57 3.5407 1.25 8.9707 1.25H14.9707C20.4007 1.25 22.7207 3.57 22.7207 9V15C22.7207 20.43 20.4107 22.75 14.9707 22.75ZM8.9707 2.75C4.3607 2.75 2.7207 4.39 2.7207 9V15C2.7207 19.61 4.3607 21.25 8.9707 21.25H14.9707C19.5807 21.25 21.2207 19.61 21.2207 15V9C21.2207 4.39 19.5807 2.75 14.9707 2.75H8.9707Z"
			fill={`${color}`} />
		<path
			d="M14.9707 22.75C14.5607 22.75 14.2207 22.41 14.2207 22V2C14.2207 1.59 14.5607 1.25 14.9707 1.25C15.3807 1.25 15.7207 1.59 15.7207 2V22C15.7207 22.41 15.3907 22.75 14.9707 22.75Z"
			fill={`${color}`} />
		<path
			d="M7.97016 15.3099C7.78016 15.3099 7.59016 15.2399 7.44016 15.0899C7.15016 14.7999 7.15016 14.3199 7.44016 14.0299L9.47016 11.9999L7.44016 9.96988C7.15016 9.67988 7.15016 9.19988 7.44016 8.90988C7.73016 8.61988 8.21016 8.61988 8.50016 8.90988L11.0602 11.4699C11.3502 11.7599 11.3502 12.2399 11.0602 12.5299L8.50016 15.0899C8.36016 15.2399 8.17016 15.3099 7.97016 15.3099Z"
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
			d="M7.81 2C6.32 2 5.08 2.36 4.13 3.05C3.71 3.34 3.34 3.71 3.05 4.13C2.36 5.08 2 6.32 2 7.81V16.19C2 19.83 4.17 22 7.81 22H15.28V2H7.81ZM12.12 12.53L9.56 15.09C9.41 15.24 9.22 15.31 9.03 15.31C8.84 15.31 8.65 15.24 8.5 15.09C8.21 14.8 8.21 14.32 8.5 14.03L10.52 12L8.5 9.97C8.2 9.68 8.2 9.2 8.5 8.91C8.8 8.62 9.27 8.62 9.56 8.91L12.12 11.47C12.41 11.76 12.41 12.24 12.12 12.53Z"
			fill={`${color}`} />
		<path
			d="M16.7793 2.03125V21.9812C18.0093 21.9012 19.0493 21.5513 19.8693 20.9513C20.2893 20.6612 20.6593 20.2913 20.9493 19.8713C21.6393 18.9212 21.9993 17.6813 21.9993 16.1913V7.81125C21.9993 4.37125 20.0593 2.24125 16.7793 2.03125Z"
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
			d="M2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C16.39 22 16.59 21.99 16.78 21.98C18.01 21.9 19.05 21.55 19.87 20.95C20.29 20.66 20.66 20.29 20.95 19.87C21.64 18.92 22 17.68 22 16.19V7.81C22 4.37 20.06 2.24 16.78 2.03C16.59 2.01 16.39 2 16.19 2H7.81C6.32 2 5.08 2.36 4.13 3.05C3.71 3.34 3.34 3.71 3.05 4.13C2.36 5.08 2 6.32 2 7.81Z"
			fill={`${color}`} />
		<path
			d="M15.2793 2V22H16.1893C16.3893 22 16.5893 21.99 16.7793 21.98V2.03C16.5893 2.01 16.3893 2 16.1893 2H15.2793Z"
			fill={`${color}`} />
		<path
			d="M9.0307 15.3099C9.2207 15.3099 9.4107 15.2399 9.5607 15.0899L12.1207 12.5299C12.4107 12.2399 12.4107 11.7599 12.1207 11.4699L9.5607 8.90988C9.2707 8.61988 8.7907 8.61988 8.5007 8.90988C8.2107 9.19988 8.2107 9.67988 8.5007 9.96988L10.5207 11.9999L8.5007 14.0299C8.2107 14.3199 8.2107 14.7999 8.5007 15.0899C8.6407 15.2399 8.8307 15.3099 9.0307 15.3099Z"
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
			d="M1.9707 12.98V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M14.9707 2V22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7.9707 9.43994L10.5307 11.9999L7.9707 14.5599"
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
			d="M21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M14.9707 2V22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M7.9707 9.43994L10.5307 11.9999L7.9707 14.5599"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
