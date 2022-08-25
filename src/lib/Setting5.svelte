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
			d="M19 22V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M19 7V2"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 22V17"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 13V2"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5 22V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5 7V2"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M3 11H7"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M17 11H21"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M10 13H14"
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
			d="M19 22.75C18.59 22.75 18.25 22.41 18.25 22V11C18.25 10.59 18.59 10.25 19 10.25C19.41 10.25 19.75 10.59 19.75 11V22C19.75 22.41 19.41 22.75 19 22.75Z"
			fill={`${color}`} />
		<path
			d="M19 7.75C18.59 7.75 18.25 7.41 18.25 7V2C18.25 1.59 18.59 1.25 19 1.25C19.41 1.25 19.75 1.59 19.75 2V7C19.75 7.41 19.41 7.75 19 7.75Z"
			fill={`${color}`} />
		<path
			d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V17C11.25 16.59 11.59 16.25 12 16.25C12.41 16.25 12.75 16.59 12.75 17V22C12.75 22.41 12.41 22.75 12 22.75Z"
			fill={`${color}`} />
		<path
			d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V13C12.75 13.41 12.41 13.75 12 13.75Z"
			fill={`${color}`} />
		<path
			d="M5 22.75C4.59 22.75 4.25 22.41 4.25 22V11C4.25 10.59 4.59 10.25 5 10.25C5.41 10.25 5.75 10.59 5.75 11V22C5.75 22.41 5.41 22.75 5 22.75Z"
			fill={`${color}`} />
		<path
			d="M5 7.75C4.59 7.75 4.25 7.41 4.25 7V2C4.25 1.59 4.59 1.25 5 1.25C5.41 1.25 5.75 1.59 5.75 2V7C5.75 7.41 5.41 7.75 5 7.75Z"
			fill={`${color}`} />
		<path
			d="M7 11.75H3C2.59 11.75 2.25 11.41 2.25 11C2.25 10.59 2.59 10.25 3 10.25H7C7.41 10.25 7.75 10.59 7.75 11C7.75 11.41 7.41 11.75 7 11.75Z"
			fill={`${color}`} />
		<path
			d="M21 11.75H17C16.59 11.75 16.25 11.41 16.25 11C16.25 10.59 16.59 10.25 17 10.25H21C21.41 10.25 21.75 10.59 21.75 11C21.75 11.41 21.41 11.75 21 11.75Z"
			fill={`${color}`} />
		<path
			d="M14 13.75H10C9.59 13.75 9.25 13.41 9.25 13C9.25 12.59 9.59 12.25 10 12.25H14C14.41 12.25 14.75 12.59 14.75 13C14.75 13.41 14.41 13.75 14 13.75Z"
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
			d="M18.5094 8.25078C19.0094 8.25078 19.4094 7.85078 19.4094 7.35078V2.70078C19.4094 2.20078 19.0094 1.80078 18.5094 1.80078C18.0094 1.80078 17.6094 2.20078 17.6094 2.70078V7.35078C17.6094 7.84078 18.0194 8.25078 18.5094 8.25078Z"
			fill={`${color}`} />
		<path
			d="M11.9996 15.75C11.4996 15.75 11.0996 16.15 11.0996 16.65V21.3C11.0996 21.8 11.4996 22.2 11.9996 22.2C12.4996 22.2 12.8996 21.8 12.8996 21.3V16.65C12.8996 16.16 12.4996 15.75 11.9996 15.75Z"
			fill={`${color}`} />
		<path
			d="M5.48984 8.25078C5.98984 8.25078 6.38984 7.85078 6.38984 7.35078V2.70078C6.38984 2.20078 5.98984 1.80078 5.48984 1.80078C4.98984 1.80078 4.58984 2.20078 4.58984 2.70078V7.35078C4.58984 7.84078 4.98984 8.25078 5.48984 8.25078Z"
			fill={`${color}`} />
		<path
			d="M7.35047 10.1719H3.63047C3.13047 10.1719 2.73047 10.5719 2.73047 11.0719C2.73047 11.5719 3.13047 11.9719 3.63047 11.9719H4.59047V21.3019C4.59047 21.8019 4.99047 22.2019 5.49047 22.2019C5.99047 22.2019 6.39047 21.8019 6.39047 21.3019V11.9719H7.35047C7.85047 11.9719 8.25047 11.5719 8.25047 11.0719C8.25047 10.5719 7.84047 10.1719 7.35047 10.1719Z"
			fill={`${color}`} />
		<path
			d="M20.37 10.1719H16.65C16.15 10.1719 15.75 10.5719 15.75 11.0719C15.75 11.5719 16.15 11.9719 16.65 11.9719H17.61V21.3019C17.61 21.8019 18.01 22.2019 18.51 22.2019C19.01 22.2019 19.41 21.8019 19.41 21.3019V11.9719H20.37C20.87 11.9719 21.27 11.5719 21.27 11.0719C21.27 10.5719 20.87 10.1719 20.37 10.1719Z"
			fill={`${color}`} />
		<path
			d="M13.8602 12.0308H12.9002V2.70078C12.9002 2.20078 12.5002 1.80078 12.0002 1.80078C11.5002 1.80078 11.1002 2.20078 11.1002 2.70078V12.0308H10.1402C9.64023 12.0308 9.24023 12.4308 9.24023 12.9308C9.24023 13.4308 9.64023 13.8308 10.1402 13.8308H13.8602C14.3602 13.8308 14.7602 13.4308 14.7602 12.9308C14.7602 12.4308 14.3602 12.0308 13.8602 12.0308Z"
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
			d="M18.5094 1.7998C18.0094 1.7998 17.6094 2.1998 17.6094 2.6998V7.3498C17.6094 7.8498 18.0094 8.2498 18.5094 8.2498C19.0094 8.2498 19.4094 7.8498 19.4094 7.3498V2.6998C19.4094 2.1998 19.0094 1.7998 18.5094 1.7998Z"
			fill={`${color}`} />
		<path
			d="M11.9996 15.75C11.4996 15.75 11.0996 16.15 11.0996 16.65V21.3C11.0996 21.8 11.4996 22.2 11.9996 22.2C12.4996 22.2 12.8996 21.8 12.8996 21.3V16.65C12.8996 16.16 12.4996 15.75 11.9996 15.75Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M5.48984 1.7998C4.98984 1.7998 4.58984 2.1998 4.58984 2.6998V7.3498C4.58984 7.8498 4.98984 8.2498 5.48984 8.2498C5.98984 8.2498 6.38984 7.8498 6.38984 7.3498V2.6998C6.38984 2.1998 5.97984 1.7998 5.48984 1.7998Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M7.35047 10.1699H3.63047C3.13047 10.1699 2.73047 10.5699 2.73047 11.0699C2.73047 11.5699 3.13047 11.9699 3.63047 11.9699H4.59047V21.2999C4.59047 21.7999 4.99047 22.1999 5.49047 22.1999C5.99047 22.1999 6.39047 21.7999 6.39047 21.2999V11.9699H7.35047C7.85047 11.9699 8.25047 11.5699 8.25047 11.0699C8.25047 10.5699 7.84047 10.1699 7.35047 10.1699Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M20.37 10.1699H16.65C16.15 10.1699 15.75 10.5699 15.75 11.0699C15.75 11.5699 16.15 11.9699 16.65 11.9699H17.61V21.2999C17.61 21.7999 18.01 22.1999 18.51 22.1999C19.01 22.1999 19.41 21.7999 19.41 21.2999V11.9699H20.37C20.87 11.9699 21.27 11.5699 21.27 11.0699C21.27 10.5699 20.87 10.1699 20.37 10.1699Z"
			fill={`${color}`} />
		<path
			d="M13.8602 12.0298H12.9002V2.6998C12.9002 2.1998 12.5002 1.7998 12.0002 1.7998C11.5002 1.7998 11.1002 2.1998 11.1002 2.6998V12.0298H10.1402C9.64023 12.0298 9.24023 12.4298 9.24023 12.9298C9.24023 13.4298 9.64023 13.8298 10.1402 13.8298H13.8602C14.3602 13.8298 14.7602 13.4298 14.7602 12.9298C14.7602 12.4298 14.3602 12.0298 13.8602 12.0298Z"
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
			d="M19 18V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M19 22V21"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5 18V11"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5 22V21"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M19 7V2"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 22V17"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 13V2"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5 7V2"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M3 11H7"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M17 11H21"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M10 13H14"
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
			d="M19 7V2"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 22V17"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5 7V2"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<g opacity="0.4">
			<path
				d="M5 22V11"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M3 11H7"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
		<g opacity="0.4">
			<path
				d="M19 22V11"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M17 11H21"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
		<g opacity="0.4">
			<path
				d="M12 13V2"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M10 13H14"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
	</svg>
{/if}
