<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7 8.25C8 9.25 9.63 9.25 10.64 8.25" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13.36 8.25C14.36 9.25 15.99 9.25 17 8.25" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8.4 13H15.6C16.1 13 16.5 13.4 16.5 13.9C16.5 16.39 14.49 18.4 12 18.4C9.51 18.4 7.5 16.39 7.5 13.9C7.5 13.4 7.9 13 8.4 13Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={`${color}`} />
		<path d="M8.81945 9.74994C7.96945 9.74994 7.11945 9.42994 6.46945 8.77994C6.17945 8.48994 6.17945 8.00994 6.46945 7.71994C6.75945 7.42994 7.23945 7.42994 7.52945 7.71994C8.23945 8.42994 9.39945 8.42994 10.1095 7.71994C10.3995 7.42994 10.8795 7.42994 11.1695 7.71994C11.4595 8.00994 11.4595 8.48994 11.1695 8.77994C10.5195 9.41994 9.66945 9.74994 8.81945 9.74994Z" fill={`${color}`} />
		<path d="M15.1808 9.74994C14.3308 9.74994 13.4808 9.42994 12.8308 8.77994C12.5408 8.48994 12.5408 8.00994 12.8308 7.71994C13.1208 7.42994 13.6008 7.42994 13.8908 7.71994C14.6008 8.42994 15.7608 8.42994 16.4708 7.71994C16.7608 7.42994 17.2408 7.42994 17.5308 7.71994C17.8208 8.00994 17.8208 8.48994 17.5308 8.77994C16.8808 9.41994 16.0308 9.74994 15.1808 9.74994Z" fill={`${color}`} />
		<path d="M12 19.15C9.1 19.15 6.75 16.79 6.75 13.9C6.75 12.99 7.49 12.25 8.4 12.25H15.6C16.51 12.25 17.25 12.99 17.25 13.9C17.25 16.79 14.9 19.15 12 19.15ZM8.4 13.75C8.32 13.75 8.25 13.82 8.25 13.9C8.25 15.97 9.93 17.65 12 17.65C14.07 17.65 15.75 15.97 15.75 13.9C15.75 13.82 15.68 13.75 15.6 13.75H8.4Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM6.47 7.72C6.76 7.43 7.24 7.43 7.53 7.72C8.24 8.43 9.4 8.43 10.11 7.72C10.4 7.43 10.88 7.43 11.17 7.72C11.46 8.01 11.46 8.49 11.17 8.78C10.52 9.43 9.67 9.75 8.82 9.75C7.97 9.75 7.12 9.43 6.47 8.78C6.18 8.48 6.18 8.01 6.47 7.72ZM12 18.78C9.31 18.78 7.12 16.59 7.12 13.9C7.12 13.2 7.69 12.62 8.39 12.62H15.59C16.29 12.62 16.86 13.19 16.86 13.9C16.88 16.59 14.69 18.78 12 18.78ZM17.53 8.78C16.88 9.43 16.03 9.75 15.18 9.75C14.33 9.75 13.48 9.43 12.83 8.78C12.54 8.49 12.54 8.01 12.83 7.72C13.12 7.43 13.6 7.43 13.89 7.72C14.6 8.43 15.76 8.43 16.47 7.72C16.76 7.43 17.24 7.43 17.53 7.72C17.82 8.01 17.82 8.48 17.53 8.78Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill={`${color}`} />
		<path d="M8.81945 9.74994C7.96945 9.74994 7.11945 9.42994 6.46945 8.77994C6.17945 8.48994 6.17945 8.00994 6.46945 7.71994C6.75945 7.42994 7.23945 7.42994 7.52945 7.71994C8.23945 8.42994 9.39945 8.42994 10.1095 7.71994C10.3995 7.42994 10.8795 7.42994 11.1695 7.71994C11.4595 8.00994 11.4595 8.48994 11.1695 8.77994C10.5195 9.41994 9.66945 9.74994 8.81945 9.74994Z" fill={`${color}`} />
		<path d="M15.1808 9.74994C14.3308 9.74994 13.4808 9.42994 12.8308 8.77994C12.5408 8.48994 12.5408 8.00994 12.8308 7.71994C13.1208 7.42994 13.6008 7.42994 13.8908 7.71994C14.6008 8.42994 15.7608 8.42994 16.4708 7.71994C16.7608 7.42994 17.2408 7.42994 17.5308 7.71994C17.8208 8.00994 17.8208 8.48994 17.5308 8.77994C16.8808 9.41994 16.0308 9.74994 15.1808 9.74994Z" fill={`${color}`} />
		<path d="M15.6009 12.6201H8.40086C7.70086 12.6201 7.13086 13.1901 7.13086 13.9001C7.13086 16.5901 9.32086 18.7801 12.0109 18.7801C14.7009 18.7801 16.8909 16.5901 16.8909 13.9001C16.8809 13.2001 16.3009 12.6201 15.6009 12.6201Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 13V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7 8.25C8 9.25 9.63 9.25 10.64 8.25" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13.3594 8.25C14.3594 9.25 15.9894 9.25 16.9994 8.25" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8.4 13H15.6C16.1 13 16.5 13.4 16.5 13.9C16.5 16.39 14.49 18.4 12 18.4C9.51 18.4 7.5 16.39 7.5 13.9C7.5 13.4 7.9 13 8.4 13Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.34" d="M7 8.25C8 9.25 9.63 9.25 10.64 8.25" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.34" d="M13.3594 8.25C14.3594 9.25 15.9894 9.25 16.9994 8.25" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.34" d="M8.4 13H15.6C16.1 13 16.5 13.4 16.5 13.9C16.5 16.39 14.49 18.4 12 18.4C9.51 18.4 7.5 16.39 7.5 13.9C7.5 13.4 7.9 13 8.4 13Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
