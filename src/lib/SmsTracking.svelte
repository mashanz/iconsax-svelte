<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5H7" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 16.5H8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 12.5H5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M17 21.25H7C6.59 21.25 6.25 20.91 6.25 20.5C6.25 20.09 6.59 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7C4.14 4.25 2.75 5.64 2.75 8.5C2.75 8.91 2.41 9.25 2 9.25C1.59 9.25 1.25 8.91 1.25 8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25Z" fill={`${color}`} />
		<path d="M11.9988 12.87C11.1588 12.87 10.3088 12.61 9.6588 12.08L6.5288 9.57997C6.2088 9.31997 6.14881 8.84997 6.4088 8.52997C6.66881 8.20997 7.13879 8.14997 7.45879 8.40997L10.5888 10.91C11.3488 11.52 12.6388 11.52 13.3988 10.91L16.5288 8.40997C16.8488 8.14997 17.3288 8.19997 17.5788 8.52997C17.8388 8.84997 17.7888 9.32997 17.4588 9.57997L14.3288 12.08C13.6888 12.61 12.8388 12.87 11.9988 12.87Z" fill={`${color}`} />
		<path d="M8 17.25H2C1.59 17.25 1.25 16.91 1.25 16.5C1.25 16.09 1.59 15.75 2 15.75H8C8.41 15.75 8.75 16.09 8.75 16.5C8.75 16.91 8.41 17.25 8 17.25Z" fill={`${color}`} />
		<path d="M5 13.25H2C1.59 13.25 1.25 12.91 1.25 12.5C1.25 12.09 1.59 11.75 2 11.75H5C5.41 11.75 5.75 12.09 5.75 12.5C5.75 12.91 5.41 13.25 5 13.25Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6 13C3.24 13 1 15.23 1 18C1 20.77 3.24 23 6 23C8.76 23 11 20.76 11 18C11 15.24 8.77 13 6 13ZM3.96 15.96H6C6.38 15.96 6.68 16.27 6.68 16.64C6.68 17.01 6.38 17.32 6 17.32H3.96C3.58 17.32 3.28 17.01 3.28 16.64C3.28 16.27 3.58 15.96 3.96 15.96ZM8.04 20.04H3.96C3.58 20.04 3.28 19.73 3.28 19.36C3.28 18.99 3.59 18.68 3.96 18.68H8.05C8.43 18.68 8.73 18.99 8.73 19.36C8.73 19.73 8.42 20.04 8.04 20.04Z" fill={`${color}`} />
		<path d="M17 3H7C4 3 2 4.5 2 8V11.14C2 11.87 2.75 12.33 3.42 12.04C4.52 11.56 5.77 11.38 7.08 11.59C9.7 12.02 11.84 14.09 12.37 16.69C12.52 17.45 12.54 18.19 12.44 18.9C12.36 19.49 12.84 20.01 13.43 20.01H17C20 20.01 22 18.51 22 15.01V8C22 4.5 20 3 17 3ZM17.47 8.59L14.34 11.09C13.68 11.62 12.84 11.88 12 11.88C11.16 11.88 10.31 11.62 9.66 11.09L6.53 8.59C6.21 8.33 6.16 7.85 6.41 7.53C6.67 7.21 7.14 7.15 7.46 7.41L10.59 9.91C11.35 10.52 12.64 10.52 13.4 9.91L16.53 7.41C16.85 7.15 17.33 7.2 17.58 7.53C17.84 7.85 17.79 8.33 17.47 8.59Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6 13C3.24 13 1 15.23 1 18C1 20.77 3.24 23 6 23C8.76 23 11 20.76 11 18C11 15.24 8.77 13 6 13ZM3.95999 15.96H6C6.38 15.96 6.67999 16.27 6.67999 16.64C6.67999 17.01 6.37 17.32 6 17.32H3.95999C3.57999 17.32 3.28 17.01 3.28 16.64C3.28 16.27 3.57999 15.96 3.95999 15.96ZM8.04001 20.04H3.95001C3.57001 20.04 3.26999 19.73 3.26999 19.36C3.26999 18.99 3.58001 18.68 3.95001 18.68H8.04001C8.42001 18.68 8.72 18.99 8.72 19.36C8.72 19.73 8.42001 20.04 8.04001 20.04Z" fill={`${color}`} />
		<path opacity="0.4" d="M17 3H7C4 3 2 4.5 2 8V11.14C2 11.87 2.75001 12.33 3.42001 12.04C4.52001 11.56 5.76999 11.38 7.07999 11.59C9.69999 12.02 11.84 14.09 12.37 16.69C12.52 17.45 12.54 18.19 12.44 18.9C12.36 19.49 12.84 20.01 13.43 20.01H17C20 20.01 22 18.51 22 15.01V8.00999C22 4.49999 20 3 17 3Z" fill={`${color}`} />
		<path d="M12.0008 11.87C11.1608 11.87 10.3108 11.61 9.66076 11.08L6.53075 8.57997C6.21075 8.31997 6.15076 7.84997 6.41076 7.52997C6.67076 7.20997 7.14075 7.14997 7.46075 7.40997L10.5908 9.90997C11.3508 10.52 12.6407 10.52 13.4007 9.90997L16.5308 7.40997C16.8508 7.14997 17.3307 7.19997 17.5807 7.52997C17.8407 7.84997 17.7907 8.32997 17.4607 8.57997L14.3307 11.08C13.6907 11.61 12.8408 11.87 12.0008 11.87Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22 12.98V15.5C22 19 20 20.5 17 20.5H7" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 16.5H8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 12.5H5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5H7" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M2 16.5H8" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M2 12.5H5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
