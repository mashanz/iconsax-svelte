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
			d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2.52002 17.1101H21.48"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2.52002 7.11011H21.48"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.96997 17.1101V21.4601"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 17.1101V21.9701"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16.97 17.1101V21.5201"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.96997 2.11011V6.46011"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 2.11011V6.97011"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 7.03003V18.03"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16.97 2.11011V6.52011"
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
			d="M21.4795 17.8599H2.51953C2.10953 17.8599 1.76953 17.5199 1.76953 17.1099C1.76953 16.6999 2.10953 16.3599 2.51953 16.3599H21.4795C21.8895 16.3599 22.2295 16.6999 22.2295 17.1099C22.2295 17.5199 21.8995 17.8599 21.4795 17.8599Z"
			fill={`${color}`} />
		<path
			d="M21.4795 7.85986H2.51953C2.10953 7.85986 1.76953 7.51986 1.76953 7.10986C1.76953 6.69986 2.09953 6.35986 2.51953 6.35986H21.4795C21.8895 6.35986 22.2295 6.69986 22.2295 7.10986C22.2295 7.51986 21.8995 7.85986 21.4795 7.85986Z"
			fill={`${color}`} />
		<path
			d="M6.9707 22.2099C6.5607 22.2099 6.2207 21.8699 6.2207 21.4599V17.1099C6.2207 16.6999 6.5607 16.3599 6.9707 16.3599C7.3807 16.3599 7.7207 16.6999 7.7207 17.1099V21.4599C7.7207 21.8799 7.3807 22.2099 6.9707 22.2099Z"
			fill={`${color}`} />
		<path
			d="M12 22.7199C11.59 22.7199 11.25 22.3799 11.25 21.9699V17.1099C11.25 16.6999 11.59 16.3599 12 16.3599C12.41 16.3599 12.75 16.6999 12.75 17.1099V21.9699C12.75 22.3799 12.41 22.7199 12 22.7199Z"
			fill={`${color}`} />
		<path
			d="M16.9707 22.2699C16.5607 22.2699 16.2207 21.9299 16.2207 21.5199V17.1099C16.2207 16.6999 16.5607 16.3599 16.9707 16.3599C17.3807 16.3599 17.7207 16.6999 17.7207 17.1099V21.5199C17.7207 21.9399 17.3807 22.2699 16.9707 22.2699Z"
			fill={`${color}`} />
		<path
			d="M6.9707 7.20986C6.5607 7.20986 6.2207 6.86986 6.2207 6.45986V2.10986C6.2207 1.69986 6.5607 1.35986 6.9707 1.35986C7.3807 1.35986 7.7207 1.69986 7.7207 2.10986V6.45986C7.7207 6.87986 7.3807 7.20986 6.9707 7.20986Z"
			fill={`${color}`} />
		<path
			d="M12 7.71986C11.59 7.71986 11.25 7.37986 11.25 6.96986V2.10986C11.25 1.69986 11.59 1.35986 12 1.35986C12.41 1.35986 12.75 1.69986 12.75 2.10986V6.96986C12.75 7.37986 12.41 7.71986 12 7.71986Z"
			fill={`${color}`} />
		<path
			d="M12 18.7798C11.59 18.7798 11.25 18.4398 11.25 18.0298V7.02979C11.25 6.61979 11.59 6.27979 12 6.27979C12.41 6.27979 12.75 6.61979 12.75 7.02979V18.0298C12.75 18.4398 12.41 18.7798 12 18.7798Z"
			fill={`${color}`} />
		<path
			d="M16.9707 7.26986C16.5607 7.26986 16.2207 6.92986 16.2207 6.51986V2.10986C16.2207 1.69986 16.5607 1.35986 16.9707 1.35986C17.3807 1.35986 17.7207 1.69986 17.7207 2.10986V6.51986C17.7207 6.93986 17.3807 7.26986 16.9707 7.26986Z"
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
			d="M11.25 7.85938H2V16.1894C2 16.2494 2 16.3094 2.01 16.3594H11.25V7.85938Z"
			fill={`${color}`} />
		<path
			d="M7.69141 6.36H11.2514V2H7.72141V6.24C7.72141 6.28 7.70141 6.32 7.69141 6.36Z"
			fill={`${color}`} />
		<path
			d="M6.21891 6.24016V2.16016C3.99891 2.62016 2.54891 4.10016 2.12891 6.36016H6.23891C6.22891 6.32016 6.21891 6.28016 6.21891 6.24016Z"
			fill={`${color}`} />
		<path d="M16.22 2H12.75V6.36H16.22V2Z" fill={`${color}`} />
		<path
			d="M17.7109 6.35844H21.8709C21.4509 4.07844 19.9809 2.58844 17.7209 2.14844V6.32844C17.7209 6.33844 17.7109 6.34844 17.7109 6.35844Z"
			fill={`${color}`} />
		<path
			d="M17.7188 21.8494C19.9088 21.4194 21.3488 20.0194 21.8188 17.8594H17.7188V21.8494Z"
			fill={`${color}`} />
		<path d="M16.22 17.8594H12.75V21.9994H16.22V17.8594Z" fill={`${color}`} />
		<path
			d="M12.75 16.3594H21.99C22 16.3094 22 16.2494 22 16.1894V7.85938H12.75V16.3594Z"
			fill={`${color}`} />
		<path d="M11.2488 17.8594H7.71875V21.9994H11.2488V17.8594Z" fill={`${color}`} />
		<path
			d="M2.17969 17.8594C2.64969 19.9994 4.06969 21.3994 6.21969 21.8394V17.8594H2.17969Z"
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
			d="M22 7.81V16.19C22 16.25 22 16.31 21.99 16.36C21.99 16.9 21.93 17.4 21.82 17.86C21.35 20.02 19.91 21.42 17.72 21.85C17.25 21.95 16.75 22 16.22 22H7.72C7.19 21.99 6.69 21.94 6.22 21.84C4.07 21.4 2.65 20 2.18 17.86C2.07 17.4 2.01 16.9 2.01 16.36C2 16.31 2 16.25 2 16.19V7.81C2 7.3 2.04 6.81 2.13 6.36C2.55 4.1 4 2.62 6.22 2.16C6.69 2.05 7.19 2 7.72 2H16.23C16.76 2 17.26 2.05 17.72 2.15C19.98 2.59 21.45 4.08 21.87 6.36C21.96 6.81 22 7.3 22 7.81Z"
			fill={`${color}`} />
		<path
			d="M12.75 7.86V16.36H21.99C21.99 16.9 21.93 17.4 21.82 17.86H17.72V21.85C17.25 21.95 16.75 22 16.22 22V17.86H12.75V22H11.25V17.86H7.72V22C7.19 21.99 6.69 21.94 6.22 21.84V17.86H2.18C2.07 17.4 2.01 16.9 2.01 16.36H11.25V7.86H2V7.81C2 7.3 2.04 6.81 2.13 6.36H6.24C6.23 6.32 6.22 6.28 6.22 6.24V2.16C6.69 2.05 7.19 2 7.72 2V6.24C7.72 6.28 7.7 6.32 7.69 6.36H11.25V2H12.75V6.36H16.22V2H16.23C16.76 2 17.26 2.05 17.72 2.15V6.33C17.72 6.34 17.71 6.35 17.71 6.36H21.87C21.96 6.81 22 7.3 22 7.81V7.86H12.75Z"
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
			d="M2.51953 17.1101H21.4795"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2.51953 7.11011H21.4795"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.9707 17.1101V21.4601"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 17.1101V21.9701"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16.9707 17.1101V21.5201"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.9707 2.11011V6.46011"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 2.11011V6.97011"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 7.03003V18.03"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16.9707 2.11011V6.52011"
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
			d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<g opacity="0.4">
			<path
				d="M2.51953 17.1104H21.4795"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M2.51953 7.11035H21.4795"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M6.9707 17.1104V21.4604"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M12 17.1104V21.9704"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M16.9707 17.1104V21.5204"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M6.9707 2.11035V6.46035"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M12 2.11035V6.97035"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M12 7.03027V18.0303"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M16.9707 2.11035V6.52035"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
	</svg>
{/if}
