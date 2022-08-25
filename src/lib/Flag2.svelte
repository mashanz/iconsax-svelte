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
			d="M6.45001 2V22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.95001 4L15.05 7.5C18.35 8.9 18.35 11.3 15.25 12.9L6.95001 17"
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
			d="M6.44922 22.75C6.03922 22.75 5.69922 22.41 5.69922 22V2C5.69922 1.59 6.03922 1.25 6.44922 1.25C6.85922 1.25 7.19922 1.59 7.19922 2V22C7.19922 22.41 6.85922 22.75 6.44922 22.75Z"
			fill={`${color}`} />
		<path
			d="M6.94907 17.7501C6.66907 17.7501 6.40907 17.6001 6.27907 17.3301C6.09907 16.9601 6.24907 16.5101 6.61907 16.3301L14.9191 12.2301C16.1391 11.6001 16.8291 10.8401 16.7991 10.1301C16.7691 9.44011 16.0291 8.73011 14.7591 8.19011L6.65907 4.69011C6.26907 4.52011 6.09907 4.08011 6.25907 3.70011C6.41907 3.32011 6.86907 3.14011 7.24907 3.31011L15.3491 6.81011C17.8491 7.87011 18.2691 9.31011 18.2991 10.0701C18.3491 11.4001 17.3891 12.6401 15.5991 13.5601L7.28907 17.6701C7.17907 17.7301 7.05907 17.7501 6.94907 17.7501Z"
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
			d="M15.1992 7.16L7.19922 3.7V2.75C7.19922 2.34 6.85922 2 6.44922 2C6.03922 2 5.69922 2.34 5.69922 2.75V21.25C5.69922 21.66 6.03922 22 6.44922 22C6.85922 22 7.19922 21.66 7.19922 21.25V17.29L15.4192 13.23C15.4192 13.23 15.4192 13.23 15.4292 13.23C17.0892 12.37 17.9792 11.26 17.9292 10.09C17.8792 8.92 16.9092 7.88 15.1992 7.16Z"
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
			d="M6.44922 22C6.03922 22 5.69922 21.66 5.69922 21.25V2.75C5.69922 2.34 6.03922 2 6.44922 2C6.85922 2 7.19922 2.34 7.19922 2.75V21.25C7.19922 21.66 6.85922 22 6.44922 22Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M15.2001 7.16004L7.10008 3.66004C6.98008 3.60004 6.85008 3.62004 6.74008 3.69004C6.64008 3.76004 6.58008 3.87004 6.58008 4.00004V17C6.58008 17.13 6.65008 17.25 6.76008 17.32C6.82008 17.36 6.89008 17.38 6.96008 17.38C7.02008 17.38 7.07008 17.37 7.13008 17.34L15.4301 13.24C15.4301 13.24 15.4301 13.24 15.4401 13.24C17.1001 12.38 17.9901 11.27 17.9401 10.1C17.8801 8.92004 16.9101 7.88004 15.2001 7.16004Z"
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
			d="M6.44922 2V22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15.0492 7.5C18.3492 8.9 18.3492 11.3 15.2492 12.9L6.94922 17"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.94922 4L11.5392 5.98"
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
			d="M6.44922 2V22"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.34"
			d="M6.94922 4L15.0492 7.5C18.3492 8.9 18.3492 11.3 15.2492 12.9L6.94922 17"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
