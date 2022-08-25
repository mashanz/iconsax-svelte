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
			d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
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
			d="M12 21.75C6.62 21.75 2.25 17.38 2.25 12C2.25 6.62 6.62 2.25 12 2.25C17.38 2.25 21.75 6.62 21.75 12C21.75 17.38 17.38 21.75 12 21.75ZM12 3.75C7.45 3.75 3.75 7.45 3.75 12C3.75 16.55 7.45 20.25 12 20.25C16.55 20.25 20.25 16.55 20.25 12C20.25 7.45 16.55 3.75 12 3.75Z"
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
			d="M19.6297 7.23844C19.9297 7.70844 19.7697 8.33844 19.2897 8.62844L18.6997 8.97844L5.58967 16.8384C5.10967 17.1284 4.47967 16.9684 4.19967 16.4784C3.19967 14.7384 2.74967 12.6184 3.13967 10.3984C3.79967 6.62844 6.89967 3.62844 10.6897 3.08844C14.4397 2.55844 17.8297 4.35844 19.6297 7.23844Z"
			fill={`${color}`} />
		<path
			d="M20.8892 13.4308C20.2092 17.6808 16.4492 20.9308 12.1392 21.0008C10.2392 21.0308 8.47917 20.4808 7.01917 19.4908C6.39917 19.0808 6.41917 18.1608 7.05917 17.7808L19.4692 10.4908C20.1192 10.1108 20.9192 10.5508 20.9792 11.3008C21.0292 12.0008 20.9992 12.7108 20.8892 13.4308Z"
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
			d="M20.12 8.13L18.7 8.98L4.76 17.34C3.66 15.85 3 14 3 12C3 7.03 7.03 3 12 3C15.58 3 18.68 5.1 20.12 8.13Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M20.9999 12.0002C20.9999 16.9702 16.9699 21.0002 11.9999 21.0002C9.52992 21.0002 7.29992 20.0102 5.66992 18.3902L5.75992 18.3402L19.6999 9.98018L20.6299 9.43018C20.8699 10.2502 20.9999 11.1102 20.9999 12.0002Z"
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
			d="M5.25 6.04C3.85 7.63 3 9.72 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3C11.29 3 10.6 3.08 9.94 3.24"
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
			d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
