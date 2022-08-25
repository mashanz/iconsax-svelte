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
			d="M2 17.0601H12"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M4.21997 13.5H9.78003C11.56 13.5 12 13.94 12 15.7V19.81C12 21.57 11.56 22.01 9.78003 22.01H4.21997C2.43997 22.01 2 21.57 2 19.81V15.7C2 13.94 2.43997 13.5 4.21997 13.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18.5 11C20.9853 11 23 8.98528 23 6.5C23 4.01472 20.9853 2 18.5 2C16.0147 2 14 4.01472 14 6.5C14 8.98528 16.0147 11 18.5 11Z"
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
			d="M12 17.8101H2C1.59 17.8101 1.25 17.4701 1.25 17.0601C1.25 16.6501 1.59 16.3101 2 16.3101H12C12.41 16.3101 12.75 16.6501 12.75 17.0601C12.75 17.4801 12.41 17.8101 12 17.8101Z"
			fill={`${color}`} />
		<path
			d="M9.77979 22.75H4.22974C2.03974 22.75 1.25977 21.98 1.25977 19.8V15.7C1.25977 13.52 2.03974 12.75 4.22974 12.75H9.77979C11.9698 12.75 12.7498 13.52 12.7498 15.7V19.81C12.7498 21.98 11.9698 22.75 9.77979 22.75ZM4.21973 14.25C2.85973 14.25 2.74976 14.36 2.74976 15.7V19.81C2.74976 21.15 2.85973 21.26 4.21973 21.26H9.76978C11.1298 21.26 11.2397 21.15 11.2397 19.81V15.7C11.2397 14.36 11.1298 14.25 9.76978 14.25H4.21973Z"
			fill={`${color}`} />
		<path
			d="M15.0002 22.75C14.7302 22.75 14.4802 22.6 14.3502 22.37C14.2202 22.13 14.2202 21.85 14.3602 21.61L15.4102 19.86C15.6202 19.51 16.0802 19.39 16.4402 19.6C16.8002 19.81 16.9102 20.27 16.7002 20.63L16.4302 21.08C19.1902 20.43 21.2602 17.95 21.2602 14.99C21.2602 14.58 21.6002 14.24 22.0102 14.24C22.4202 14.24 22.7602 14.58 22.7602 14.99C22.7502 19.27 19.2702 22.75 15.0002 22.75Z"
			fill={`${color}`} />
		<path
			d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9C1.25 4.73 4.73 1.25 9 1.25C9.27 1.25 9.52002 1.4 9.65002 1.63C9.78002 1.87 9.78001 2.15 9.64001 2.39L8.59003 4.14C8.38003 4.49 7.92 4.61 7.56 4.4C7.2 4.19 7.08999 3.73 7.29999 3.37L7.57001 2.92C4.81001 3.57 2.73999 6.05 2.73999 9.01C2.74999 9.41 2.41 9.75 2 9.75Z"
			fill={`${color}`} />
		<path
			d="M18.5 11.75C15.61 11.75 13.25 9.4 13.25 6.5C13.25 3.6 15.6 1.25 18.5 1.25C21.4 1.25 23.75 3.6 23.75 6.5C23.75 9.4 21.39 11.75 18.5 11.75ZM18.5 2.75C16.43 2.75 14.75 4.43 14.75 6.5C14.75 8.57 16.43 10.25 18.5 10.25C20.57 10.25 22.25 8.57 22.25 6.5C22.25 4.43 20.57 2.75 18.5 2.75Z"
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
			d="M12 15.7V15.81C12 16.09 11.78 16.31 11.5 16.31H2.5C2.22 16.31 2 16.09 2 15.81V15.7C2 13.94 2.44 13.5 4.22 13.5H9.78C11.56 13.5 12 13.94 12 15.7Z"
			fill={`${color}`} />
		<path
			d="M2.5 17.3086C2.22 17.3086 2 17.5286 2 17.8086V18.8086V19.7986C2 21.5586 2.44 21.9986 4.22 21.9986H9.78C11.56 21.9986 12 21.5586 12 19.7986V18.8086V17.8086C12 17.5286 11.78 17.3086 11.5 17.3086H2.5Z"
			fill={`${color}`} />
		<path
			d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18.5 11C20.9853 11 23 8.98528 23 6.5C23 4.01472 20.9853 2 18.5 2C16.0147 2 14 4.01472 14 6.5C14 8.98528 16.0147 11 18.5 11Z"
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
			d="M12 15.7V16.31H2V15.7C2 13.94 2.43997 13.5 4.21997 13.5H9.78003C11.56 13.5 12 13.94 12 15.7Z"
			fill={`${color}`} />
		<path
			d="M2 16.3101V17.8101V19.8001C2 21.5601 2.43997 22.0001 4.21997 22.0001H9.78003C11.56 22.0001 12 21.5601 12 19.8001V17.8101V16.3101H2Z"
			fill={`${color}`} />
		<g opacity="0.4">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M22 14.25C22.4142 14.25 22.75 14.5858 22.75 15C22.75 19.2842 19.2842 22.75 15 22.75C14.7298 22.75 14.4805 22.6047 14.3474 22.3695C14.2142 22.1344 14.2179 21.8458 14.3569 21.6141L15.4069 19.8641C15.62 19.5089 16.0807 19.3938 16.4359 19.6069C16.791 19.82 16.9062 20.2807 16.6931 20.6359L16.4218 21.0881C19.1909 20.4456 21.25 17.9666 21.25 15C21.25 14.5858 21.5858 14.25 22 14.25Z"
				fill={`${color}`} />
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M7.57821 2.91194C4.8091 3.55436 2.75 6.03342 2.75 9C2.75 9.41421 2.41421 9.75 2 9.75C1.58579 9.75 1.25 9.41421 1.25 9C1.25 4.71579 4.71579 1.25 9 1.25C9.2702 1.25 9.51952 1.39534 9.65265 1.63047C9.78578 1.8656 9.78214 2.15417 9.64312 2.38587L8.59313 4.13587C8.38002 4.49105 7.91933 4.60623 7.56414 4.39312C7.20896 4.18001 7.09378 3.71932 7.30689 3.36413L7.57821 2.91194Z"
				fill={`${color}`} />
		</g>
		<path
			opacity="0.4"
			d="M23 6.5H14C14 8.98 16.02 11 18.5 11C20.99 11 23 8.98 23 6.5Z"
			fill={`${color}`} />
		<path d="M23 6.5C23 4.01 20.99 2 18.5 2C16.02 2 14 4.01 14 6.5H23Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg
		width={`${size}`}
		height={`${size}`}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M2 17.0601H12"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M5.68976 22H4.22974C2.44974 22 2.00977 21.56 2.00977 19.8V15.7C2.00977 13.94 2.44974 13.5 4.22974 13.5H9.78973C11.5697 13.5 12.0098 13.94 12.0098 15.7V19.81C12.0098 21.57 11.5697 22.01 9.78973 22.01"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18.5 11C20.99 11 23 8.99 23 6.5C23 4.01 20.99 2 18.5 2C16.01 2 14 4.01 14 6.5C14 7.09 14.11 7.65 14.32 8.16"
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
			d="M2 17.0601H12"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M4.21997 13.5H9.78003C11.56 13.5 12 13.94 12 15.7V19.81C12 21.57 11.56 22.01 9.78003 22.01H4.21997C2.43997 22.01 2 21.57 2 19.81V15.7C2 13.94 2.43997 13.5 4.21997 13.5Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18.5 11C20.9853 11 23 8.98528 23 6.5C23 4.01472 20.9853 2 18.5 2C16.0147 2 14 4.01472 14 6.5C14 8.98528 16.0147 11 18.5 11Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
