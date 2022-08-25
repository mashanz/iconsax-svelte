<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V11.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M22 22L21 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V11.5C22.75 11.91 22.41 12.25 22 12.25C21.59 12.25 21.25 11.91 21.25 11.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H12C12.41 19.75 12.75 20.09 12.75 20.5C12.75 20.91 12.41 21.25 12 21.25Z" fill={`${color}`} />
		<path d="M11.9988 12.87C11.1588 12.87 10.3088 12.61 9.6588 12.08L6.5288 9.57996C6.2088 9.31996 6.14881 8.84997 6.4088 8.52997C6.66881 8.20997 7.13879 8.15997 7.45879 8.40997L10.5888 10.91C11.3488 11.52 12.6388 11.52 13.3988 10.91L16.5288 8.40997C16.8488 8.14997 17.3188 8.19997 17.5788 8.52997C17.8388 8.84997 17.7888 9.32996 17.4588 9.57996L14.3288 12.08C13.6888 12.61 12.8388 12.87 11.9988 12.87Z" fill={`${color}`} />
		<path d="M18.2 22.15C16.02 22.15 14.25 20.38 14.25 18.2C14.25 16.02 16.02 14.25 18.2 14.25C20.38 14.25 22.15 16.02 22.15 18.2C22.15 20.38 20.38 22.15 18.2 22.15ZM18.2 15.75C16.85 15.75 15.75 16.85 15.75 18.2C15.75 19.55 16.85 20.65 18.2 20.65C19.55 20.65 20.65 19.55 20.65 18.2C20.65 16.85 19.55 15.75 18.2 15.75Z" fill={`${color}`} />
		<path d="M21.9995 22.7499C21.8095 22.7499 21.6195 22.6799 21.4695 22.5299L20.4695 21.5299C20.1795 21.2399 20.1795 20.7599 20.4695 20.4699C20.7595 20.1799 21.2395 20.1799 21.5295 20.4699L22.5295 21.4699C22.8195 21.7599 22.8195 22.2399 22.5295 22.5299C22.3795 22.6799 22.1895 22.7499 21.9995 22.7499Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M17 3H7C4 3 2 4.5 2 8V15.96C2 18.25 3.85 20.1 6.14 20.1H12.4C12.98 20.1 13.48 19.61 13.42 19.03C13.28 17.5 13.78 15.85 15.14 14.52C15.7 13.97 16.39 13.55 17.14 13.31C18.39 12.91 19.6 12.96 20.67 13.33C21.32 13.55 22 13.08 22 12.39V8C22 4.5 20 3 17 3ZM17.47 8.59L14.34 11.09C13.68 11.62 12.84 11.88 12 11.88C11.16 11.88 10.31 11.62 9.66 11.09L6.53 8.59C6.21 8.33 6.16 7.86 6.41 7.53C6.67 7.21 7.14 7.15 7.46 7.41L10.59 9.91C11.35 10.52 12.64 10.52 13.4 9.91L16.53 7.41C16.85 7.15 17.33 7.2 17.58 7.53C17.84 7.86 17.79 8.33 17.47 8.59Z" fill={`${color}`} />
		<path d="M22.65 21.4489L21.9 20.6989C22.29 20.1089 22.52 19.3989 22.52 18.6389C22.52 16.5589 20.84 14.8789 18.76 14.8789C16.68 14.8789 15 16.5589 15 18.6289C15 20.6989 16.68 22.3889 18.76 22.3889C19.52 22.3889 20.23 22.1589 20.82 21.7689L21.57 22.5189C21.72 22.6689 21.91 22.7389 22.11 22.7389C22.31 22.7389 22.5 22.6689 22.65 22.5189C22.95 22.2289 22.95 21.7489 22.65 21.4489Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" fill={`${color}`} />
		<path fill-rule="evenodd" clip-rule="evenodd" d="M17.586 8.53196C17.8445 8.85561 17.7917 9.32754 17.4681 9.58605L14.3372 12.0868C13.0338 13.1244 10.9563 13.1244 9.65289 12.0868L9.65104 12.0853L6.53105 9.58531C6.2078 9.3263 6.15573 8.85429 6.41474 8.53105C6.67375 8.2078 7.14576 8.15573 7.46901 8.41474L10.588 10.914C11.3446 11.5155 12.6462 11.5154 13.4025 10.9135C13.4027 10.9135 13.4024 10.9136 13.4025 10.9135L16.532 8.41401C16.8556 8.15551 17.3275 8.20832 17.586 8.53196Z" fill={`${color}`} />
		<path d="M22.6609 21.47L21.9209 20.73C22.3009 20.15 22.5309 19.45 22.5309 18.7C22.5309 16.66 20.8708 15 18.8308 15C16.7908 15 15.1309 16.66 15.1309 18.7C15.1309 20.74 16.7908 22.4 18.8308 22.4C19.5808 22.4 20.2808 22.17 20.8608 21.79L21.6009 22.53C21.7509 22.68 21.9409 22.75 22.1309 22.75C22.3209 22.75 22.5109 22.68 22.6609 22.53C22.9509 22.24 22.9509 21.76 22.6609 21.47Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V11.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 20.4999H7C4 20.4999 2 18.9999 2 15.4999V12.4399" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M22 22L21 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V11.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<g opacity="0.4">
			<path d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M22 22L21 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</g>
	</svg>
{/if}
