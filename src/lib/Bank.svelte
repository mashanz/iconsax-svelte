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
			d="M12.37 2.15009L21.37 5.75006C21.72 5.89006 22 6.31006 22 6.68006V10.0001C22 10.5501 21.55 11.0001 21 11.0001H3C2.45 11.0001 2 10.5501 2 10.0001V6.68006C2 6.31006 2.28 5.89006 2.63 5.75006L11.63 2.15009C11.83 2.07009 12.17 2.07009 12.37 2.15009Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19V22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M4 18V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M8 18V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 18V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16 18V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M20 18V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M1 22H23"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
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
			d="M21 11.7501H3C2.04 11.7501 1.25 10.9601 1.25 10.0001V6.68013C1.25 6.00013 1.71998 5.31013 2.34998 5.06013L11.35 1.46016C11.73 1.31016 12.27 1.31016 12.65 1.46016L21.65 5.06013C22.28 5.31013 22.75 6.01013 22.75 6.68013V10.0001C22.75 10.9601 21.96 11.7501 21 11.7501ZM12 2.84016C11.96 2.84016 11.92 2.84011 11.9 2.85011L2.90997 6.45015C2.84997 6.48015 2.75 6.61013 2.75 6.68013V10.0001C2.75 10.1401 2.86 10.2501 3 10.2501H21C21.14 10.2501 21.25 10.1401 21.25 10.0001V6.68013C21.25 6.61013 21.16 6.48015 21.09 6.45015L12.09 2.85011C12.07 2.84011 12.04 2.84016 12 2.84016Z"
			fill={`${color}`} />
		<path
			d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22V19C1.25 18.04 2.04 17.25 3 17.25H21C21.96 17.25 22.75 18.04 22.75 19V22C22.75 22.41 22.41 22.75 22 22.75ZM2.75 21.25H21.25V19C21.25 18.86 21.14 18.75 21 18.75H3C2.86 18.75 2.75 18.86 2.75 19V21.25Z"
			fill={`${color}`} />
		<path
			d="M4 18.75C3.59 18.75 3.25 18.41 3.25 18V11C3.25 10.59 3.59 10.25 4 10.25C4.41 10.25 4.75 10.59 4.75 11V18C4.75 18.41 4.41 18.75 4 18.75Z"
			fill={`${color}`} />
		<path
			d="M8 18.75C7.59 18.75 7.25 18.41 7.25 18V11C7.25 10.59 7.59 10.25 8 10.25C8.41 10.25 8.75 10.59 8.75 11V18C8.75 18.41 8.41 18.75 8 18.75Z"
			fill={`${color}`} />
		<path
			d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V11C11.25 10.59 11.59 10.25 12 10.25C12.41 10.25 12.75 10.59 12.75 11V18C12.75 18.41 12.41 18.75 12 18.75Z"
			fill={`${color}`} />
		<path
			d="M16 18.75C15.59 18.75 15.25 18.41 15.25 18V11C15.25 10.59 15.59 10.25 16 10.25C16.41 10.25 16.75 10.59 16.75 11V18C16.75 18.41 16.41 18.75 16 18.75Z"
			fill={`${color}`} />
		<path
			d="M20 18.75C19.59 18.75 19.25 18.41 19.25 18V11C19.25 10.59 19.59 10.25 20 10.25C20.41 10.25 20.75 10.59 20.75 11V18C20.75 18.41 20.41 18.75 20 18.75Z"
			fill={`${color}`} />
		<path
			d="M23 22.75H1C0.59 22.75 0.25 22.41 0.25 22C0.25 21.59 0.59 21.25 1 21.25H23C23.41 21.25 23.75 21.59 23.75 22C23.75 22.41 23.41 22.75 23 22.75Z"
			fill={`${color}`} />
		<path
			d="M12 9.25C10.76 9.25 9.75 8.24 9.75 7C9.75 5.76 10.76 4.75 12 4.75C13.24 4.75 14.25 5.76 14.25 7C14.25 8.24 13.24 9.25 12 9.25ZM12 6.25C11.59 6.25 11.25 6.59 11.25 7C11.25 7.41 11.59 7.75 12 7.75C12.41 7.75 12.75 7.41 12.75 7C12.75 6.59 12.41 6.25 12 6.25Z"
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
			d="M22 19V22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19Z"
			fill={`${color}`}
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path d="M7 11H5V18H7V11Z" fill={`${color}`} />
		<path d="M11 11H9V18H11V11Z" fill={`${color}`} />
		<path d="M15 11H13V18H15V11Z" fill={`${color}`} />
		<path d="M19 11H17V18H19V11Z" fill={`${color}`} />
		<path
			d="M23 22.75H1C0.59 22.75 0.25 22.41 0.25 22C0.25 21.59 0.59 21.25 1 21.25H23C23.41 21.25 23.75 21.59 23.75 22C23.75 22.41 23.41 22.75 23 22.75Z"
			fill={`${color}`} />
		<path
			d="M21.37 5.74984L12.37 2.14984C12.17 2.06984 11.83 2.06984 11.63 2.14984L2.63 5.74984C2.28 5.88984 2 6.29984 2 6.67984V9.99984C2 10.5498 2.45 10.9998 3 10.9998H21C21.55 10.9998 22 10.5498 22 9.99984V6.67984C22 6.29984 21.72 5.88984 21.37 5.74984ZM12 8.49984C11.17 8.49984 10.5 7.82984 10.5 6.99984C10.5 6.16984 11.17 5.49984 12 5.49984C12.83 5.49984 13.5 6.16984 13.5 6.99984C13.5 7.82984 12.83 8.49984 12 8.49984Z"
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
			d="M22 19V22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19Z"
			fill={`${color}`}
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path opacity="0.6" d="M8 11H4V18H8V11Z" fill={`${color}`} />
		<path opacity="0.4" d="M12 11H8V18H12V11Z" fill={`${color}`} />
		<path opacity="0.6" d="M16 11H12V18H16V11Z" fill={`${color}`} />
		<path opacity="0.4" d="M20 11H16V18H20V11Z" fill={`${color}`} />
		<path
			d="M23 22.75H1C0.59 22.75 0.25 22.41 0.25 22C0.25 21.59 0.59 21.25 1 21.25H23C23.41 21.25 23.75 21.59 23.75 22C23.75 22.41 23.41 22.75 23 22.75Z"
			fill={`${color}`} />
		<path
			d="M21.37 5.74982L12.37 2.14984C12.17 2.06984 11.83 2.06984 11.63 2.14984L2.63 5.74982C2.28 5.88982 2 6.29981 2 6.67981V9.99982C2 10.5498 2.45 10.9998 3 10.9998H21C21.55 10.9998 22 10.5498 22 9.99982V6.67981C22 6.29981 21.72 5.88982 21.37 5.74982ZM12 8.49982C11.17 8.49982 10.5 7.82982 10.5 6.99982C10.5 6.16982 11.17 5.49982 12 5.49982C12.83 5.49982 13.5 6.16982 13.5 6.99982C13.5 7.82982 12.83 8.49982 12 8.49982Z"
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
			d="M2.63 5.75006C2.28 5.89006 2 6.31006 2 6.68006V10.0001C2 10.5501 2.45 11.0001 3 11.0001H21C21.55 11.0001 22 10.5501 22 10.0001V6.68006C22 6.31006 21.72 5.89006 21.37 5.75006L12.37 2.15009C12.17 2.07009 11.83 2.07009 11.63 2.15009L6.78998 4.09009"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19V22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M4 18V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M8 18V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 18V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16 18V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M20 18V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M1 22H23"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
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
			d="M12.37 2.14984L21.37 5.74982C21.72 5.88982 22 6.30981 22 6.67981V9.99982C22 10.5498 21.55 10.9998 21 10.9998H3C2.45 10.9998 2 10.5498 2 9.99982V6.67981C2 6.30981 2.28 5.88982 2.63 5.74982L11.63 2.14984C11.83 2.06984 12.17 2.06984 12.37 2.14984Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19V22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M4 18V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M8 18V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M12 18V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M16 18V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M20 18V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M1 22H23"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
