<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.70001 18H4.15002C2.72002 18 2 17.28 2 15.85V4.15002C2 2.72002 2.72002 2 4.15002 2H8.45001C9.88001 2 10.6 2.72002 10.6 4.15002V6" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17.3699 8.41998V19.58C17.3699 21.19 16.57 22 14.96 22H9.11993C7.50993 22 6.69995 21.19 6.69995 19.58V8.41998C6.69995 6.80998 7.50993 6 9.11993 6H14.96C16.57 6 17.3699 6.80998 17.3699 8.41998Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13.3999 6V4.15002C13.3999 2.72002 14.1199 2 15.5499 2H19.8499C21.2799 2 21.9999 2.72002 21.9999 4.15002V15.85C21.9999 17.28 21.2799 18 19.8499 18H17.3699" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10 11H14" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10 14H14" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 22V19" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.70001 18.75H4.15002C2.31002 18.75 1.25 17.69 1.25 15.85V4.15002C1.25 2.31002 2.31002 1.25 4.15002 1.25H8.45001C10.29 1.25 11.35 2.31002 11.35 4.15002V6C11.35 6.41 11.01 6.75 10.6 6.75C10.19 6.75 9.84998 6.41 9.84998 6V4.15002C9.84998 3.13002 9.47001 2.75 8.45001 2.75H4.15002C3.13002 2.75 2.75 3.13002 2.75 4.15002V15.85C2.75 16.87 3.13002 17.25 4.15002 17.25H6.70001C7.11001 17.25 7.45001 17.59 7.45001 18C7.45001 18.41 7.11001 18.75 6.70001 18.75Z" fill={`${color}`} />
		<path d="M14.9602 22.75H9.12018C7.11018 22.75 5.9502 21.59 5.9502 19.58V8.41998C5.9502 6.40998 7.11018 5.25 9.12018 5.25H14.9602C16.9702 5.25 18.1202 6.40998 18.1202 8.41998V19.58C18.1202 21.59 16.9702 22.75 14.9602 22.75ZM9.12018 6.75C7.92018 6.75 7.4502 7.21998 7.4502 8.41998V19.58C7.4502 20.78 7.92018 21.25 9.12018 21.25H14.9602C16.1502 21.25 16.6202 20.78 16.6202 19.58V8.41998C16.6202 7.21998 16.1502 6.75 14.9602 6.75H9.12018Z" fill={`${color}`} />
		<path d="M19.8503 18.75H17.3704C16.9604 18.75 16.6204 18.41 16.6204 18C16.6204 17.59 16.9604 17.25 17.3704 17.25H19.8503C20.8703 17.25 21.2504 16.87 21.2504 15.85V4.15002C21.2504 3.13002 20.8703 2.75 19.8503 2.75H15.5504C14.5304 2.75 14.1504 3.13002 14.1504 4.15002V6C14.1504 6.41 13.8104 6.75 13.4004 6.75C12.9904 6.75 12.6504 6.41 12.6504 6V4.15002C12.6504 2.31002 13.7104 1.25 15.5504 1.25H19.8503C21.6903 1.25 22.7504 2.31002 22.7504 4.15002V15.85C22.7504 17.69 21.6903 18.75 19.8503 18.75Z" fill={`${color}`} />
		<path d="M14 11.75H10C9.59 11.75 9.25 11.41 9.25 11C9.25 10.59 9.59 10.25 10 10.25H14C14.41 10.25 14.75 10.59 14.75 11C14.75 11.41 14.41 11.75 14 11.75Z" fill={`${color}`} />
		<path d="M14 14.75H10C9.59 14.75 9.25 14.41 9.25 14C9.25 13.59 9.59 13.25 10 13.25H14C14.41 13.25 14.75 13.59 14.75 14C14.75 14.41 14.41 14.75 14 14.75Z" fill={`${color}`} />
		<path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V19C11.25 18.59 11.59 18.25 12 18.25C12.41 18.25 12.75 18.59 12.75 19V22C12.75 22.41 12.41 22.75 12 22.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.6 4.15C10.6 4.34 10.44 4.5 10.25 4.5H9.12C6.96 4.5 5.2 6.26 5.2 8.42V17.65C5.2 17.84 5.04 18 4.85 18H4.15C2.96 18 2 17.04 2 15.85V4.15C2 2.96 2.96 2 4.15 2H8.45C9.64 2 10.6 2.96 10.6 4.15Z" fill={`${color}`} />
		<path d="M22.0004 4.15V15.85C22.0004 17.04 21.0404 18 19.8504 18H19.2204C19.0304 18 18.8704 17.84 18.8704 17.65V8.42C18.8704 6.26 17.1104 4.5 14.9504 4.5H13.7504C13.5604 4.5 13.4004 4.34 13.4004 4.15C13.4004 2.96 14.3604 2 15.5504 2H19.8504C21.0404 2 22.0004 2.96 22.0004 4.15Z" fill={`${color}`} />
		<path d="M14.9492 6H9.11922C7.77922 6 6.69922 7.08 6.69922 8.42V19.58C6.69922 20.92 7.77922 22 9.11922 22H10.7492C11.0292 22 11.2492 21.78 11.2492 21.5V19C11.2492 18.59 11.5892 18.25 11.9992 18.25C12.4092 18.25 12.7492 18.59 12.7492 19V21.5C12.7492 21.78 12.9692 22 13.2492 22H14.9592C16.2892 22 17.3692 20.92 17.3692 19.59V8.42C17.3692 7.08 16.2892 6 14.9492 6ZM13.9992 14.75H9.99922C9.58922 14.75 9.24922 14.41 9.24922 14C9.24922 13.59 9.58922 13.25 9.99922 13.25H13.9992C14.4092 13.25 14.7492 13.59 14.7492 14C14.7492 14.41 14.4092 14.75 13.9992 14.75ZM13.9992 11.75H9.99922C9.58922 11.75 9.24922 11.41 9.24922 11C9.24922 10.59 9.58922 10.25 9.99922 10.25H13.9992C14.4092 10.25 14.7492 10.59 14.7492 11C14.7492 11.41 14.4092 11.75 13.9992 11.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.6 4.15002V6H9.12C7.50999 6 6.70001 6.80998 6.70001 8.41998V18H4.15002C2.72002 18 2 17.28 2 15.85V4.15002C2 2.72002 2.72002 2 4.15002 2H8.45001C9.88001 2 10.6 2.72002 10.6 4.15002Z" fill={`${color}`} />
		<path opacity="0.4" d="M17.3692 8.41998V19.58C17.3692 21.19 16.5692 22 14.9592 22H9.1192C7.5092 22 6.69922 21.19 6.69922 19.58V8.41998C6.69922 6.80998 7.5092 6 9.1192 6H14.9592C16.5692 6 17.3692 6.80998 17.3692 8.41998Z" fill={`${color}`} />
		<path d="M22.0004 4.15002V15.85C22.0004 17.28 21.2803 18 19.8503 18H17.3704V8.41998C17.3704 6.80998 16.5704 6 14.9604 6H13.4004V4.15002C13.4004 2.72002 14.1204 2 15.5504 2H19.8503C21.2803 2 22.0004 2.72002 22.0004 4.15002Z" fill={`${color}`} />
		<path d="M14 11.75H10C9.59 11.75 9.25 11.41 9.25 11C9.25 10.59 9.59 10.25 10 10.25H14C14.41 10.25 14.75 10.59 14.75 11C14.75 11.41 14.41 11.75 14 11.75Z" fill={`${color}`} />
		<path d="M14 14.75H10C9.59 14.75 9.25 14.41 9.25 14C9.25 13.59 9.59 13.25 10 13.25H14C14.41 13.25 14.75 13.59 14.75 14C14.75 14.41 14.41 14.75 14 14.75Z" fill={`${color}`} />
		<path d="M12.75 19V22H11.25V19C11.25 18.59 11.59 18.25 12 18.25C12.41 18.25 12.75 18.59 12.75 19Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 4.15002C2 2.72002 2.72002 2 4.15002 2H8.45001C9.88001 2 10.6 2.72002 10.6 4.15002V6" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.70001 18.0001H4.15002C2.72002 18.0001 2 17.28 2 15.85V8.04004" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17.3692 8.41998V19.58C17.3692 21.19 16.5692 22 14.9592 22H9.1192C7.5092 22 6.69922 21.19 6.69922 19.58V8.41998C6.69922 6.80998 7.5092 6 9.1192 6H14.9592C16.5692 6 17.3692 6.80998 17.3692 8.41998Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13.4004 6V4.15002C13.4004 2.72002 14.1204 2 15.5504 2H19.8503C21.2803 2 22.0004 2.72002 22.0004 4.15002V15.85C22.0004 17.28 21.2803 18 19.8503 18H17.3704" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10 11H14" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10 14H14" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 22V19" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M6.70001 18H4.15002C2.72002 18 2 17.28 2 15.85V4.15002C2 2.72002 2.72002 2 4.15002 2H8.45001C9.88001 2 10.6 2.72002 10.6 4.15002V6" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17.3702 8.41998V19.58C17.3702 21.19 16.5702 22 14.9602 22H9.12018C7.51018 22 6.7002 21.19 6.7002 19.58V8.41998C6.7002 6.80998 7.51018 6 9.12018 6H14.9602C16.5702 6 17.3702 6.80998 17.3702 8.41998Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M13.4004 6V4.15002C13.4004 2.72002 14.1204 2 15.5504 2H19.8503C21.2803 2 22.0004 2.72002 22.0004 4.15002V15.85C22.0004 17.28 21.2803 18 19.8503 18H17.3704" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M10 11H14" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M10 14H14" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 22V19" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
