<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M13.3 16H15.7C17.7 16 18.5 15.2 18.5 13.2V10.8C18.5 8.8 17.7 8 15.7 8H13.3C11.3 8 10.5 8.8 10.5 10.8V13.2C10.5 15.2 11.3 16 13.3 16Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17 20H7C3 20 2 19 2 15V9C2 5 3 4 7 4H17C21 4 22 5 22 9V15C22 19 21 20 17 20Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.7 16.75H13.3C10.88 16.75 9.75 15.62 9.75 13.2V10.8C9.75 8.38 10.88 7.25 13.3 7.25H15.7C18.12 7.25 19.25 8.38 19.25 10.8V13.2C19.25 15.62 18.12 16.75 15.7 16.75ZM13.3 8.75C11.71 8.75 11.25 9.21 11.25 10.8V13.2C11.25 14.79 11.71 15.25 13.3 15.25H15.7C17.29 15.25 17.75 14.79 17.75 13.2V10.8C17.75 9.21 17.29 8.75 15.7 8.75H13.3Z" fill={`${color}`} />
		<path d="M17 20.75H7C2.59 20.75 1.25 19.41 1.25 15V9C1.25 4.59 2.59 3.25 7 3.25H17C21.41 3.25 22.75 4.59 22.75 9V15C22.75 19.41 21.41 20.75 17 20.75ZM7 4.75C3.42 4.75 2.75 5.43 2.75 9V15C2.75 18.57 3.42 19.25 7 19.25H17C20.58 19.25 21.25 18.57 21.25 15V9C21.25 5.43 20.58 4.75 17 4.75H7Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.65 3.85938H7.35C3.25 3.85938 2 5.10938 2 9.20938V14.7894C2 18.8894 3.25 20.1394 7.35 20.1394H16.65C20.75 20.1394 22 18.8894 22 14.7894V9.20938C22 5.10938 20.75 3.85938 16.65 3.85938ZM18.74 13.1194C18.74 15.3694 17.69 16.4194 15.44 16.4194H13.21C10.96 16.4194 9.91 15.3694 9.91 13.1194V10.8894C9.91 8.63938 10.96 7.58938 13.21 7.58938H15.44C17.69 7.58938 18.74 8.63938 18.74 10.8894V13.1194Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M7.35 3.85986H16.65C20.75 3.85986 22 5.10986 22 9.20986V14.7899C22 18.8899 20.75 20.1399 16.65 20.1399H7.35C3.25 20.1399 2 18.8899 2 14.7899V9.20986C2 5.10986 3.25 3.85986 7.35 3.85986Z" fill={`${color}`} />
		<path d="M13.2102 7.58008H15.4402C17.6902 7.58008 18.7402 8.63008 18.7402 10.8801V13.1101C18.7402 15.3601 17.6902 16.4101 15.4402 16.4101H13.2102C10.9602 16.4101 9.91016 15.3601 9.91016 13.1101V10.8801C9.91016 8.63008 10.9602 7.58008 13.2102 7.58008Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18.5 10.8V13.2C18.5 15.2 17.7 16 15.7 16H13.3C11.3 16 10.5 15.2 10.5 13.2V10.8C10.5 8.8 11.3 8 13.3 8H15.7" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 20H17C21 20 22 19 22 15V9C22 5 21 4 17 4H7C3 4 2 5 2 9V15C2 19 3 20 7 20" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M13.3 16H15.7C17.7 16 18.5 15.2 18.5 13.2V10.8C18.5 8.8 17.7 8 15.7 8H13.3C11.3 8 10.5 8.8 10.5 10.8V13.2C10.5 15.2 11.3 16 13.3 16Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17 20H7C3 20 2 19 2 15V9C2 5 3 4 7 4H17C21 4 22 5 22 9V15C22 19 21 20 17 20Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
