<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 8V13" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9 2H15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19 17V21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 17V21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 22.75C6.76 22.75 2.5 18.49 2.5 13.25C2.5 8.01 6.76 3.75 12 3.75C17.24 3.75 21.5 8.01 21.5 13.25C21.5 13.66 21.16 14 20.75 14C20.34 14 20 13.66 20 13.25C20 8.84 16.41 5.25 12 5.25C7.59 5.25 4 8.84 4 13.25C4 17.66 7.59 21.25 12 21.25C12.41 21.25 12.75 21.59 12.75 22C12.75 22.41 12.41 22.75 12 22.75Z" fill={`${color}`} />
		<path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z" fill={`${color}`} />
		<path d="M15 2.75H9C8.59 2.75 8.25 2.41 8.25 2C8.25 1.59 8.59 1.25 9 1.25H15C15.41 1.25 15.75 1.59 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z" fill={`${color}`} />
		<path d="M19 21.75C18.59 21.75 18.25 21.41 18.25 21V17C18.25 16.59 18.59 16.25 19 16.25C19.41 16.25 19.75 16.59 19.75 17V21C19.75 21.41 19.41 21.75 19 21.75Z" fill={`${color}`} />
		<path d="M16 21.75C15.59 21.75 15.25 21.41 15.25 21V17C15.25 16.59 15.59 16.25 16 16.25C16.41 16.25 16.75 16.59 16.75 17V21C16.75 21.41 16.41 21.75 16 21.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14.8906 3.45H9.11062C8.71062 3.45 8.39062 3.13 8.39062 2.73C8.39062 2.33 8.71062 2 9.11062 2H14.8906C15.2906 2 15.6106 2.32 15.6106 2.72C15.6106 3.12 15.2906 3.45 14.8906 3.45Z" fill={`${color}`} />
		<path d="M14.0001 19.9684V17.0284C14.0001 15.2184 15.2201 13.9984 17.0301 13.9984H19.9701C20.2001 13.9984 20.4201 14.0184 20.6301 14.0584C20.6501 13.8184 20.6701 13.5784 20.6701 13.3284C20.6701 8.53844 16.7801 4.64844 12.0001 4.64844C7.22008 4.64844 3.33008 8.53844 3.33008 13.3284C3.33008 18.1084 7.22008 21.9984 12.0001 21.9984C12.8501 21.9984 13.6601 21.8584 14.4401 21.6384C14.1601 21.1684 14.0001 20.6084 14.0001 19.9684ZM12.7501 12.9984C12.7501 13.4084 12.4101 13.7484 12.0001 13.7484C11.5901 13.7484 11.2501 13.4084 11.2501 12.9984V7.99844C11.2501 7.58844 11.5901 7.24844 12.0001 7.24844C12.4101 7.24844 12.7501 7.58844 12.7501 7.99844V12.9984Z" fill={`${color}`} />
		<path d="M19.97 15H17.04C15.76 15 15 15.76 15 17.03V19.97C15 21.24 15.76 22 17.04 22H19.97C21.24 22 22 21.24 22 19.97V17.03C22 15.76 21.24 15 19.97 15ZM17.92 20.06C17.92 20.38 17.66 20.64 17.33 20.64C17.01 20.64 16.75 20.38 16.75 20.06V16.94C16.75 16.62 17.01 16.36 17.33 16.36C17.66 16.36 17.92 16.62 17.92 16.94V20.06ZM20.25 20.06C20.25 20.38 19.99 20.64 19.67 20.64C19.35 20.64 19.08 20.38 19.08 20.06V16.94C19.08 16.62 19.35 16.36 19.67 16.36C19.99 16.36 20.25 16.62 20.25 16.94V20.06Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z" fill={`${color}`} />
		<path d="M14.8906 3.45H9.11062C8.71062 3.45 8.39062 3.13 8.39062 2.73C8.39062 2.33 8.71062 2 9.11062 2H14.8906C15.2906 2 15.6106 2.32 15.6106 2.72C15.6106 3.12 15.2906 3.45 14.8906 3.45Z" fill={`${color}`} />
		<path opacity="0.4" d="M15.0001 19.9699V17.0299C15.0001 15.7599 15.7601 14.9999 17.0301 14.9999H19.9701C20.1601 14.9999 20.3301 15.0199 20.5001 15.0599C20.6101 14.4999 20.6701 13.9199 20.6701 13.3299C20.6701 8.54991 16.7801 4.65991 12.0001 4.65991C7.22008 4.65991 3.33008 8.54991 3.33008 13.3299C3.33008 18.1099 7.22008 21.9999 12.0001 21.9999C13.2101 21.9999 14.3601 21.7499 15.4101 21.2999C15.1501 20.9599 15.0001 20.5199 15.0001 19.9699Z" fill={`${color}`} />
		<path d="M19.97 15H17.04C15.76 15 15 15.76 15 17.03V19.96C15 21.23 15.76 21.99 17.03 21.99H19.96C21.23 21.99 21.99 21.23 21.99 19.96V17.03C22 15.76 21.24 15 19.97 15ZM17.92 20.06C17.92 20.38 17.66 20.64 17.34 20.64C17.02 20.64 16.76 20.38 16.76 20.06V16.95C16.76 16.63 17.02 16.37 17.34 16.37C17.66 16.37 17.92 16.63 17.92 16.95V20.06ZM20.25 20.06C20.25 20.38 19.99 20.64 19.67 20.64C19.35 20.64 19.09 20.38 19.09 20.06V16.95C19.09 16.63 19.35 16.37 19.67 16.37C19.99 16.37 20.25 16.63 20.25 16.95V20.06Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M8.00977 5.46C9.20977 4.85 10.5598 4.5 11.9998 4.5C16.8298 4.5 20.7498 8.42 20.7498 13.25" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 11.27 3.91 9.44999 5.01 7.98999" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 8V13" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9 2H15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19 17V21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 17V21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M12 8V13" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M9 2H15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M19 17V21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M16 17V21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
