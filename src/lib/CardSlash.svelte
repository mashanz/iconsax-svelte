<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 8.5H15.24" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6 16.5H7.29" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M11 16.5H14.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7.97998 20.4999H17.56C21.12 20.4999 22 19.6199 22 16.1099V6.88989" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19.99 3.75C19.37 3.57 18.57 3.5 17.56 3.5H6.44C2.89 3.5 2 4.38 2 7.89V16.1C2 18.44 2.39 19.61 3.71 20.13" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M22 2L2 22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.24 9.25H2C1.59 9.25 1.25 8.91 1.25 8.5C1.25 8.09 1.59 7.75 2 7.75H15.24C15.65 7.75 15.99 8.09 15.99 8.5C15.99 8.91 15.65 9.25 15.24 9.25Z" fill={`${color}`} />
		<path d="M7.29 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H7.29C7.7 15.75 8.04 16.09 8.04 16.5C8.04 16.91 7.71 17.25 7.29 17.25Z" fill={`${color}`} />
		<path d="M14.5 17.25H11C10.59 17.25 10.25 16.91 10.25 16.5C10.25 16.09 10.59 15.75 11 15.75H14.5C14.91 15.75 15.25 16.09 15.25 16.5C15.25 16.91 14.91 17.25 14.5 17.25Z" fill={`${color}`} />
		<path d="M17.5605 21.2501H7.98047C7.57047 21.2501 7.23047 20.9101 7.23047 20.5001C7.23047 20.0901 7.57047 19.7501 7.98047 19.7501H17.5605C20.7005 19.7501 21.2505 19.2101 21.2505 16.1101V6.89014C21.2505 6.48014 21.5905 6.14014 22.0005 6.14014C22.4105 6.14014 22.7505 6.48014 22.7505 6.89014V16.1001C22.7505 20.0501 21.5405 21.2501 17.5605 21.2501Z" fill={`${color}`} />
		<path d="M3.71 20.89C3.62 20.89 3.52 20.87 3.43 20.84C1.62 20.12 1.25 18.43 1.25 16.11V7.89C1.25 3.95 2.46 2.75 6.44 2.75H17.55C18.69 2.75 19.53 2.84 20.19 3.04C20.59 3.16 20.81 3.57 20.7 3.97C20.58 4.37 20.16 4.59 19.77 4.48C19.25 4.33 18.55 4.26 17.55 4.26H6.44C3.3 4.26 2.75 4.8 2.75 7.9V16.11C2.75 18.5 3.18 19.13 3.99 19.45C4.38 19.6 4.56 20.04 4.41 20.42C4.29 20.71 4.01 20.89 3.71 20.89Z" fill={`${color}`} />
		<path d="M1.99945 22.7499C1.80945 22.7499 1.61945 22.6799 1.46945 22.5299C1.17945 22.2399 1.17945 21.7599 1.46945 21.4699L21.4695 1.46994C21.7595 1.17994 22.2395 1.17994 22.5295 1.46994C22.8195 1.75994 22.8195 2.23994 22.5295 2.52994L2.52945 22.5299C2.37945 22.6799 2.18945 22.7499 1.99945 22.7499Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19.27 3.64844L14.17 8.74844H3.2C2.54 8.74844 2 8.20844 2 7.54844V7.53844C2 5.24844 3.85 3.39844 6.14 3.39844H17.85C18.35 3.39844 18.83 3.48844 19.27 3.64844Z" fill={`${color}`} />
		<path d="M12.67 10.25L7.17 15.75H6C5.59 15.75 5.25 16.09 5.25 16.5C5.25 16.81 5.45 17.09 5.73 17.19L3.38 19.54C2.53 18.79 2 17.69 2 16.46V11.45C2 10.79 2.54 10.25 3.2 10.25H12.67Z" fill={`${color}`} />
		<path d="M21.9987 11V16.46C21.9987 18.75 20.1487 20.6 17.8587 20.6H8.8087C7.9187 20.6 7.4687 19.52 8.0987 18.89L9.4487 17.54C9.6387 17.35 9.8887 17.25 10.1587 17.25H14.4987C14.9087 17.25 15.2487 16.91 15.2487 16.5C15.2487 16.09 14.9087 15.75 14.4987 15.75H13.6587C12.7687 15.75 12.3187 14.67 12.9487 14.04L16.4087 10.58C16.7887 10.21 17.2987 10 17.8287 10H20.9987C21.5487 10 21.9987 10.45 21.9987 11Z" fill={`${color}`} />
		<path d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z" fill={`${color}`} />
		<path d="M21.7686 3.30859L20.6086 4.46859L16.3286 8.74859L3.30859 21.7686C3.15859 21.9186 2.96859 21.9986 2.76859 21.9986C2.56859 21.9986 2.37859 21.9186 2.22859 21.7686C1.91859 21.4686 1.91859 20.9886 2.22859 20.6886L3.37859 19.5386L5.72859 17.1886L19.2686 3.64859L20.6886 2.22859C20.9886 1.91859 21.4686 1.91859 21.7686 2.22859C22.0786 2.52859 22.0786 3.00859 21.7686 3.30859Z" fill={`${color}`} />
		<path d="M22.0005 7.41026C22.0005 6.52026 20.9205 6.07026 20.2905 6.70026L20.0005 7.00026L19.7105 7.29026C19.0805 7.92026 19.5205 9.00026 20.4105 9.00026H21.0005C21.5505 9.00026 22.0005 8.55026 22.0005 8.00026V7.41026Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M22.0004 9V16.46C22.0004 18.75 20.1404 20.6 17.8504 20.6H6.40039L9.97039 17.03L11.2504 15.75L18.0004 9H22.0004Z" fill={`${color}`} />
		<path opacity="0.4" d="M15 9L4 20C2.8 19.28 2 17.96 2 16.46V9H15Z" fill={`${color}`} />
		<path d="M22 7.53978V8.99978H18L21.47 5.52979C21.81 6.11979 22 6.80978 22 7.53978Z" fill={`${color}`} />
		<path d="M20 3.9999L15 8.9999H2V7.5399C2 5.2499 3.86 3.3999 6.15 3.3999H17.85C18.64 3.3999 19.37 3.6199 20 3.9999Z" fill={`${color}`} />
		<path d="M8.21 15.79L6.75 17.25H6C5.59 17.25 5.25 16.91 5.25 16.5C5.25 16.09 5.59 15.75 6 15.75H8C8.07 15.75 8.14 15.76 8.21 15.79Z" fill={`${color}`} />
		<path d="M15.2507 16.5C15.2507 16.91 14.9107 17.25 14.5007 17.25H10.5007C10.3007 17.25 10.1107 17.16 9.9707 17.03L11.2507 15.75H14.5007C14.9107 15.75 15.2507 16.09 15.2507 16.5Z" fill={`${color}`} />
		<path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 8.5H15.24" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6 16.5H7.29" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M11 16.5H14.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7.98047 20.4999H17.5605C21.1205 20.4999 22.0005 19.6199 22.0005 16.1099V6.88989" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 14.97V16.11C2 18.45 2.39 19.62 3.71 20.14" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19.99 3.75C19.37 3.57 18.57 3.5 17.56 3.5H6.44C2.89 3.5 2 4.38 2 7.89V10.94" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M22 2L2 22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 8.5H15.24" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6 16.5H7.29" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M11 16.5H14.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M7.98047 20.5001H17.5605C21.1205 20.5001 22.0005 19.6201 22.0005 16.1101V6.89014" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M19.99 3.75C19.37 3.57 18.57 3.5 17.56 3.5H6.44C2.89 3.5 2 4.38 2 7.89V16.1C2 18.44 2.39 19.61 3.71 20.13" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M22 2L2 22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
