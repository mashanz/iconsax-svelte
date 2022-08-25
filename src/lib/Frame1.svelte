<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.00999 20.5L3.98999 15.49" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9.01001 3.5V20.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.99 3.5L20.01 8.51" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.99 20.5V3.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12.1605 11.62C12.1305 11.62 12.1105 11.62 12.0805 11.62C12.0305 11.61 11.9605 11.61 11.9005 11.62C9.00055 11.53 6.81055 9.25 6.81055 6.44C6.81055 3.58 9.14055 1.25 12.0005 1.25C14.8605 1.25 17.1905 3.58 17.1905 6.44C17.1805 9.25 14.9805 11.53 12.1905 11.62C12.1805 11.62 12.1705 11.62 12.1605 11.62ZM12.0005 2.75C9.97055 2.75 8.31055 4.41 8.31055 6.44C8.31055 8.44 9.87055 10.05 11.8605 10.12C11.9105 10.11 12.0505 10.11 12.1805 10.12C14.1405 10.03 15.6805 8.42 15.6905 6.44C15.6905 4.41 14.0305 2.75 12.0005 2.75Z" fill={`${color}`} />
		<path d="M12.1696 22.55C10.2096 22.55 8.23961 22.05 6.74961 21.05C5.35961 20.13 4.59961 18.87 4.59961 17.5C4.59961 16.13 5.35961 14.86 6.74961 13.93C9.74961 11.94 14.6096 11.94 17.5896 13.93C18.9696 14.85 19.7396 16.11 19.7396 17.48C19.7396 18.85 18.9796 20.12 17.5896 21.05C16.0896 22.05 14.1296 22.55 12.1696 22.55ZM7.57961 15.19C6.61961 15.83 6.09961 16.65 6.09961 17.51C6.09961 18.36 6.62961 19.18 7.57961 19.81C10.0696 21.48 14.2696 21.48 16.7596 19.81C17.7196 19.17 18.2396 18.35 18.2396 17.49C18.2396 16.64 17.7096 15.82 16.7596 15.19C14.2696 13.53 10.0696 13.53 7.57961 15.19Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M20.4098 6.96141V8.79141C20.4098 9.43141 20.1098 10.0314 19.5898 10.4014L8.58984 18.4614C7.87984 18.9814 6.90984 18.9814 6.20984 18.4514L4.76984 17.3714C4.11984 16.8814 3.58984 15.8214 3.58984 15.0114V6.96141C3.58984 5.84141 4.44984 4.60141 5.49984 4.21141L10.9698 2.16141C11.5398 1.95141 12.4598 1.95141 13.0298 2.16141L18.4998 4.21141C19.5498 4.60141 20.4098 5.84141 20.4098 6.96141Z" fill={`${color}`} />
		<path d="M18.8216 12.3414C19.4816 11.8614 20.4116 12.3314 20.4116 13.1514V15.0314C20.4116 15.8414 19.8816 16.8914 19.2316 17.3814L13.7616 21.4714C13.2816 21.8214 12.6416 22.0014 12.0016 22.0014C11.3616 22.0014 10.7216 21.8214 10.2416 21.4614L9.41157 20.8414C8.87157 20.4414 8.87157 19.6314 9.42157 19.2314L18.8216 12.3414Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M8.02 4.62012H6.98C5.39 4.62012 4.75 5.22012 4.75 6.74012V18.6201H10.25V6.74012C10.24 5.22012 9.6 4.62012 8.02 4.62012Z" fill={`${color}`} />
		<path opacity="0.4" d="M16.52 9.62012H15.48C13.89 9.62012 13.25 10.2301 13.25 11.7401V18.6201H18.75V11.7401C18.75 10.2301 18.1 9.62012 16.52 9.62012Z" fill={`${color}`} />
		<path d="M2.75 17.8799H21.25C21.66 17.8799 22 18.2199 22 18.6299C22 19.0399 21.66 19.3799 21.25 19.3799H2.75C2.34 19.3799 2 19.0399 2 18.6199C2 18.1999 2.34 17.8799 2.75 17.8799Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M18.4408 5.56006L13.8008 10.2001" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M22 2L21 3" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M13 6.16992V10.9999H17.83" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.01023 20.5002L3.99023 15.4902" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9.00977 3.5V20.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<g opacity="0.4">
			<path d="M14.9902 3.5L20.0102 8.51" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M14.9902 20.5V3.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		</g>
	</svg>
{/if}
