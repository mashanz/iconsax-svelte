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
			d="M17.15 13.8201L14.11 16.86"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.84998 13.8201H17.15"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.84998 10.18L9.88998 7.14001"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M17.15 10.1799H6.84998"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
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
			d="M14.1108 17.61C13.9208 17.61 13.7308 17.54 13.5808 17.39C13.2908 17.1 13.2908 16.62 13.5808 16.33L16.6208 13.29C16.9108 13 17.3908 13 17.6808 13.29C17.9708 13.58 17.9708 14.06 17.6808 14.35L14.6408 17.39C14.5008 17.53 14.3108 17.61 14.1108 17.61Z"
			fill={`${color}`} />
		<path
			d="M17.1498 14.5701H6.83984C6.42984 14.5701 6.08984 14.2301 6.08984 13.8201C6.08984 13.4101 6.42984 13.0701 6.83984 13.0701H17.1498C17.5598 13.0701 17.8998 13.4101 17.8998 13.8201C17.8998 14.2301 17.5698 14.5701 17.1498 14.5701Z"
			fill={`${color}`} />
		<path
			d="M6.84906 10.9301C6.65906 10.9301 6.46906 10.8601 6.31906 10.7101C6.02906 10.4201 6.02906 9.94009 6.31906 9.65009L9.35904 6.61008C9.64904 6.32008 10.1291 6.32008 10.4191 6.61008C10.7091 6.90008 10.7091 7.38011 10.4191 7.67011L7.37906 10.7101C7.22906 10.8601 7.03906 10.9301 6.84906 10.9301Z"
			fill={`${color}`} />
		<path
			d="M17.1498 10.9299H6.83984C6.42984 10.9299 6.08984 10.5899 6.08984 10.1799C6.08984 9.76993 6.42984 9.42993 6.83984 9.42993H17.1498C17.5598 9.42993 17.8998 9.76993 17.8998 10.1799C17.8998 10.5899 17.5698 10.9299 17.1498 10.9299Z"
			fill={`${color}`} />
		<path
			d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
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
			d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.85 14.1C17.81 14.19 17.76 14.27 17.69 14.34L14.65 17.38C14.5 17.53 14.31 17.6 14.12 17.6C13.93 17.6 13.74 17.53 13.59 17.38C13.3 17.09 13.3 16.61 13.59 16.32L15.35 14.56H6.85C6.44 14.56 6.1 14.22 6.1 13.81C6.1 13.4 6.44 13.06 6.85 13.06H17.16C17.26 13.06 17.35 13.08 17.45 13.12C17.63 13.2 17.78 13.34 17.86 13.53C17.92 13.71 17.92 13.92 17.85 14.1ZM17.15 10.93H6.85C6.75 10.93 6.65 10.91 6.56 10.87C6.38 10.79 6.23 10.65 6.15 10.46C6.07 10.28 6.07 10.07 6.15 9.89C6.19 9.8 6.24 9.72 6.31 9.65L9.35 6.61C9.64 6.32 10.12 6.32 10.41 6.61C10.7 6.9 10.7 7.38 10.41 7.67L8.66 9.43H17.16C17.57 9.43 17.91 9.77 17.91 10.18C17.91 10.59 17.57 10.93 17.15 10.93Z"
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
			d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
			fill={`${color}`} />
		<path
			d="M17.8499 13.5301C17.7699 13.3501 17.6298 13.2001 17.4398 13.1201C17.3498 13.0801 17.2498 13.0601 17.1498 13.0601H6.83984C6.42984 13.0601 6.08984 13.4001 6.08984 13.8101C6.08984 14.2201 6.42984 14.5601 6.83984 14.5601H15.3398L13.5798 16.3201C13.2898 16.6101 13.2898 17.0901 13.5798 17.3801C13.7298 17.5301 13.9198 17.6001 14.1098 17.6001C14.2998 17.6001 14.4899 17.5301 14.6399 17.3801L17.6798 14.3401C17.7498 14.2701 17.7998 14.1901 17.8398 14.1001C17.9198 13.9201 17.9199 13.7101 17.8499 13.5301Z"
			fill={`${color}`} />
		<path
			d="M17.1498 9.43009H8.64984L10.4099 7.67011C10.6999 7.38011 10.6999 6.90008 10.4099 6.61008C10.1199 6.32008 9.63986 6.32008 9.34986 6.61008L6.30985 9.65009C6.23985 9.72009 6.18984 9.80011 6.14984 9.89011C6.06984 10.0701 6.06984 10.2801 6.14984 10.4601C6.22984 10.6401 6.36985 10.7901 6.55985 10.8701C6.64985 10.9101 6.74986 10.9301 6.84986 10.9301H17.1599C17.5699 10.9301 17.9099 10.5901 17.9099 10.1801C17.9099 9.77009 17.5698 9.43009 17.1498 9.43009Z"
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
			d="M17.1494 13.8201L14.1094 16.86"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.84961 13.8201H17.1496"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.84961 10.1801L9.88962 7.14014"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M14.1096 10.1802H6.84961"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M17.1489 10.1802H16.6289"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.30001 7.97 2.85001"
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
				d="M17.1494 13.8203L14.1094 16.8603"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M6.84961 13.8203H17.1496"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M6.84961 10.1801L9.88962 7.14014"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M17.1496 10.1802H6.84961"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
		<path
			d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
