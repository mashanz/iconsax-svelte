<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M7.25 7H16.75V5C16.75 3 16 2 13.75 2H10.25C8 2 7.25 3 7.25 5V7Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 15V19C16 21 15 22 13 22H11C9 22 8 21 8 19V15H16Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21 10V15C21 17 20 18 18 18H16V15H8V18H6C4 18 3 17 3 15V10C3 8 4 7 6 7H18C20 7 21 8 21 10Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17 15H15.79H7" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7 11H10" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.75 7.75H7.25C6.84 7.75 6.5 7.41 6.5 7V5C6.5 2.44 7.69 1.25 10.25 1.25H13.75C16.31 1.25 17.5 2.44 17.5 5V7C17.5 7.41 17.16 7.75 16.75 7.75ZM8 6.25H16V5C16 3.3 15.45 2.75 13.75 2.75H10.25C8.55 2.75 8 3.3 8 5V6.25Z" fill={`${color}`} />
		<path d="M13 22.75H11C8.58 22.75 7.25 21.42 7.25 19V15C7.25 14.59 7.59 14.25 8 14.25H16C16.41 14.25 16.75 14.59 16.75 15V19C16.75 21.42 15.42 22.75 13 22.75ZM8.75 15.75V19C8.75 20.58 9.42 21.25 11 21.25H13C14.58 21.25 15.25 20.58 15.25 19V15.75H8.75Z" fill={`${color}`} />
		<path d="M18 18.75H16C15.59 18.75 15.25 18.41 15.25 18V15.75H8.75V18C8.75 18.41 8.41 18.75 8 18.75H6C3.58 18.75 2.25 17.42 2.25 15V10C2.25 7.58 3.58 6.25 6 6.25H18C20.42 6.25 21.75 7.58 21.75 10V15C21.75 17.42 20.42 18.75 18 18.75ZM16.75 17.25H18C19.58 17.25 20.25 16.58 20.25 15V10C20.25 8.42 19.58 7.75 18 7.75H6C4.42 7.75 3.75 8.42 3.75 10V15C3.75 16.58 4.42 17.25 6 17.25H7.25V15C7.25 14.59 7.59 14.25 8 14.25H16C16.41 14.25 16.75 14.59 16.75 15V17.25Z" fill={`${color}`} />
		<path d="M17 15.75H7C6.59 15.75 6.25 15.41 6.25 15C6.25 14.59 6.59 14.25 7 14.25H17C17.41 14.25 17.75 14.59 17.75 15C17.75 15.41 17.41 15.75 17 15.75Z" fill={`${color}`} />
		<path d="M10 11.75H7C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H10C10.41 10.25 10.75 10.59 10.75 11C10.75 11.41 10.41 11.75 10 11.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M7 5C7 3.34 8.34 2 10 2H14C15.66 2 17 3.34 17 5C17 5.55 16.55 6 16 6H8C7.45 6 7 5.55 7 5Z" fill={`${color}`} />
		<path d="M17.75 15C17.75 15.41 17.41 15.75 17 15.75H16V19C16 20.66 14.66 22 13 22H11C9.34 22 8 20.66 8 19V15.75H7C6.59 15.75 6.25 15.41 6.25 15C6.25 14.59 6.59 14.25 7 14.25H17C17.41 14.25 17.75 14.59 17.75 15Z" fill={`${color}`} />
		<path d="M18 7H6C4 7 3 8 3 10V15C3 17 4 18 6 18H6.375C6.72018 18 7 17.7202 7 17.375C7 17.0298 6.71131 16.7604 6.38841 16.6384C5.72619 16.3882 5.25 15.7453 5.25 15C5.25 14.04 6.04 13.25 7 13.25H17C17.96 13.25 18.75 14.04 18.75 15C18.75 15.7453 18.2738 16.3882 17.6116 16.6384C17.2887 16.7604 17 17.0298 17 17.375C17 17.7202 17.2798 18 17.625 18H18C20 18 21 17 21 15V10C21 8 20 7 18 7ZM10 11.75H7C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H10C10.41 10.25 10.75 10.59 10.75 11C10.75 11.41 10.41 11.75 10 11.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16 15V19C16 20.66 14.66 22 13 22H11C9.34 22 8 20.66 8 19V15H16Z" fill={`${color}`} />
		<path d="M7 7V5C7 3.34 8.34 2 10 2H14C15.66 2 17 3.34 17 5V7H7Z" fill={`${color}`} />
		<path opacity="0.4" d="M18 7H6C4 7 3 8 3 10V15C3 17 4 18 6 18H8V15H16V18H18C20 18 21 17 21 15V10C21 8 20 7 18 7ZM10 11.75H7C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H10C10.41 10.25 10.75 10.59 10.75 11C10.75 11.41 10.41 11.75 10 11.75Z" fill={`${color}`} />
		<path d="M10.75 11C10.75 11.41 10.41 11.75 10 11.75H7C6.59 11.75 6.25 11.41 6.25 11C6.25 10.59 6.59 10.25 7 10.25H10C10.41 10.25 10.75 10.59 10.75 11Z" fill={`${color}`} />
		<path d="M17 15.75H7C6.59 15.75 6.25 15.41 6.25 15C6.25 14.59 6.59 14.25 7 14.25H17C17.41 14.25 17.75 14.59 17.75 15C17.75 15.41 17.41 15.75 17 15.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M7.25 7H16.75V5C16.75 3 16 2 13.75 2H10.25C8 2 7.25 3 7.25 5V7Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 15V19C16 21 15 22 13 22H11C9 22 8 21 8 19V15H16Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21 10V15C21 17 20 18 18 18H16V15H8V18H6C4 18 3 17 3 15V10C3 8 4 7 6 7H18C20 7 21 8 21 10Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17 15H15.79H7" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7 11H10" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M7.25 7H16.75V5C16.75 3 16 2 13.75 2H10.25C8 2 7.25 3 7.25 5V7Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 15V19C16 21 15 22 13 22H11C9 22 8 21 8 19V15H16Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21 10V15C21 17 20 18 18 18H16V15H8V18H6C4 18 3 17 3 15V10C3 8 4 7 6 7H18C20 7 21 8 21 10Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17 15H15.79H7" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M7 11H10" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
