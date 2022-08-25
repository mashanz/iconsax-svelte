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
			d="M7.25 7H16.75V5C16.75 3 16 2 13.75 2H10.25C8 2 7.25 3 7.25 5V7Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12.9699 15H15.9999V19C15.9999 21 14.9999 22 12.9999 22H10.9999C9.30995 22 8.32995 21.29 8.06995 19.86"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6 18C4 18 3 17 3 15V10C3 8 4 7 6 7H16.59"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M19.97 7.52002C20.66 8.00002 21 8.83002 21 10V15C21 17 20 18 18 18H16V15H13"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M17 15H15.79"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7 11H9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 2L2 22"
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
			d="M16.75 7.75H7.25C6.84 7.75 6.5 7.41 6.5 7V5C6.5 2.44 7.69 1.25 10.25 1.25H13.75C16.31 1.25 17.5 2.44 17.5 5V7C17.5 7.41 17.16 7.75 16.75 7.75ZM8 6.25H16V5C16 3.3 15.45 2.75 13.75 2.75H10.25C8.55 2.75 8 3.3 8 5V6.25Z"
			fill={`${color}`} />
		<path
			d="M12.9997 22.75H10.9997C8.95972 22.75 7.65972 21.77 7.32972 19.99C7.25972 19.58 7.51972 19.19 7.92972 19.12C8.32972 19.04 8.72972 19.31 8.79972 19.72C8.92972 20.43 9.29972 21.25 10.9897 21.25H12.9897C14.5697 21.25 15.2397 20.58 15.2397 19V15.75H12.9597C12.5497 15.75 12.2097 15.41 12.2097 15C12.2097 14.59 12.5497 14.25 12.9597 14.25H15.9997C16.4097 14.25 16.7497 14.59 16.7497 15V19C16.7497 21.42 15.4197 22.75 12.9997 22.75Z"
			fill={`${color}`} />
		<path
			d="M6 18.75C3.58 18.75 2.25 17.42 2.25 15V10C2.25 7.58 3.58 6.25 6 6.25H16.59C17 6.25 17.34 6.59 17.34 7C17.34 7.41 17 7.75 16.59 7.75H6C4.42 7.75 3.75 8.42 3.75 10V15C3.75 16.58 4.42 17.25 6 17.25C6.41 17.25 6.75 17.59 6.75 18C6.75 18.41 6.41 18.75 6 18.75Z"
			fill={`${color}`} />
		<path
			d="M18 18.7501H16C15.59 18.7501 15.25 18.4101 15.25 18.0001V15.7501H13C12.59 15.7501 12.25 15.4101 12.25 15.0001C12.25 14.5901 12.59 14.2501 13 14.2501H16C16.41 14.2501 16.75 14.5901 16.75 15.0001V17.2501H18C19.58 17.2501 20.25 16.5801 20.25 15.0001V10.0001C20.25 9.08007 20.02 8.47007 19.54 8.13007C19.2 7.89007 19.12 7.42007 19.36 7.09007C19.6 6.75007 20.07 6.67007 20.41 6.91007C21.3 7.54007 21.75 8.58007 21.75 10.0001V15.0001C21.75 17.4201 20.42 18.7501 18 18.7501Z"
			fill={`${color}`} />
		<path
			d="M17 15.75H15.79C15.38 15.75 15.04 15.41 15.04 15C15.04 14.59 15.38 14.25 15.79 14.25H17C17.41 14.25 17.75 14.59 17.75 15C17.75 15.41 17.41 15.75 17 15.75Z"
			fill={`${color}`} />
		<path
			d="M9 11.75H7C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H9C9.41 10.25 9.75 10.59 9.75 11C9.75 11.41 9.41 11.75 9 11.75Z"
			fill={`${color}`} />
		<path
			d="M2.00043 22.7499C1.81043 22.7499 1.62043 22.6799 1.47043 22.5299C1.18043 22.2399 1.18043 21.7599 1.47043 21.4699L21.4704 1.46994C21.7604 1.17994 22.2404 1.17994 22.5304 1.46994C22.8204 1.75994 22.8204 2.23994 22.5304 2.52994L2.53043 22.5299C2.38043 22.6799 2.19043 22.7499 2.00043 22.7499Z"
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
			d="M6 7C4 7 3 8 3 10V15C3 17 4 18 6 18L8 16V15H9L17 7H6ZM7 11.75C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H9C9.41 10.25 9.75 10.59 9.75 11C9.75 11.41 9.41 11.75 9 11.75H7Z"
			fill={`${color}`} />
		<path d="M9 15L8 16V15H9Z" fill={`${color}`} />
		<path d="M17 5V7H7V5C7 3.34 8.34 2 10 2H14C15.66 2 17 3.34 17 5Z" fill={`${color}`} />
		<path
			d="M22.5295 1.47141C22.2395 1.18141 21.7595 1.18141 21.4695 1.47141L1.46945 21.4714C1.17945 21.7614 1.17945 22.2414 1.46945 22.5314C1.61945 22.6814 1.80945 22.7514 1.99945 22.7514C2.18945 22.7514 2.37945 22.6814 2.52945 22.5314L22.5295 2.53141C22.8195 2.24141 22.8195 1.76141 22.5295 1.47141Z"
			fill={`${color}`} />
		<path
			d="M17.0001 14.25H12.9572C12.8246 14.25 12.6974 14.3027 12.6037 14.3964L12.0001 15L11.2501 15.75L8.80011 18.2C8.16011 18.84 8.03011 20 8.55011 20.74C9.09011 21.5 9.99011 22 11.0001 22H13.0001C14.6601 22 16.0001 20.66 16.0001 19V15.75H17.0001C17.4101 15.75 17.7501 15.41 17.7501 15C17.7501 14.59 17.4101 14.25 17.0001 14.25Z"
			fill={`${color}`} />
		<path
			d="M19.02 7.97914L15.46 11.5391C14.83 12.1691 15.28 13.2491 16.17 13.2491H16.91C17.78 13.2491 18.59 13.8391 18.73 14.6991C18.8812 15.6145 18.313 16.4382 17.4934 16.6786C17.2284 16.7564 17 16.973 17 17.2491V17.4991C17 17.7753 17.2239 17.9991 17.5 17.9991H18C19.66 17.9991 21 16.6591 21 14.9991V9.99914C21 9.20914 20.84 8.56914 20.53 8.08914C20.19 7.57914 19.45 7.54914 19.02 7.97914Z"
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
			d="M6 7C4 7 3 8 3 10V15C3 17 4 18 6 18L8 16V15H9L17 7H6ZM7 11.75C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H9C9.41 10.25 9.75 10.59 9.75 11C9.75 11.41 9.41 11.75 9 11.75H7Z"
			fill={`${color}`} />
		<path d="M9 15L8 16V15H9Z" fill={`${color}`} />
		<path d="M17 5V7H7V5C7 3.34 8.34 2 10 2H14C15.66 2 17 3.34 17 5Z" fill={`${color}`} />
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M22.5303 1.46967C22.8232 1.76256 22.8232 2.23744 22.5303 2.53033L2.53033 22.5303C2.23744 22.8232 1.76256 22.8232 1.46967 22.5303C1.17678 22.2374 1.17678 21.7626 1.46967 21.4697L21.4697 1.46967C21.7626 1.17678 22.2374 1.17678 22.5303 1.46967Z"
			fill={`${color}`} />
		<path
			d="M9.75 11C9.75 11.41 9.41 11.75 9 11.75H7C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H9C9.41 10.25 9.75 10.59 9.75 11Z"
			fill={`${color}`} />
		<path
			d="M17.75 15C17.75 15.41 17.41 15.75 17 15.75H11.25L12.75 14.25H17C17.41 14.25 17.75 14.59 17.75 15Z"
			fill={`${color}`} />
		<path
			d="M16 15V19C16 20.66 14.66 22 13 22H11C9.34 22 8 20.66 8 19L12 15H16Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M21 10.0001V15.0001C21 17.0001 20 18.0001 18 18.0001H16V15.0001H12L19.67 7.33008C20.56 7.78008 21 8.67008 21 10.0001Z"
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
			d="M7.25 7H16.75V5C16.75 3 16 2 13.75 2H10.25C8 2 7.25 3 7.25 5V7Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12.9703 15H16.0003V19C16.0003 21 15.0003 22 13.0003 22H11.0003C9.31031 22 8.33031 21.29 8.07031 19.86"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6 18C4 18 3 17 3 15V10C3 8 4 7 6 7H16.59"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M21 14V15C21 17 20 18 18 18H16V15H13"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M19.9707 7.52002C20.6607 8.00002 21.0007 8.83002 21.0007 10"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16.9991 15H15.7891"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7 11H9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 2L2 22"
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
			d="M7.25 7H16.75V5C16.75 3 16 2 13.75 2H10.25C8 2 7.25 3 7.25 5V7Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12.9703 15H16.0003V19C16.0003 21 15.0003 22 13.0003 22H11.0003C9.31031 22 8.33031 21.29 8.07031 19.86"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6 18C4 18 3 17 3 15V10C3 8 4 7 6 7H16.59"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M19.97 7.52002C20.66 8.00002 21 8.83002 21 10V15C21 17 20 18 18 18H16V15H13"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M17 15H15.79"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M7 11H9"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 2L2 22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
