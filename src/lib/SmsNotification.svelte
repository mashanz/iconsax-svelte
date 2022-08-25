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
			d="M22 10.5V15.5C22 19 20 20.5 17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H14"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7 9L10.13 11.5C11.16 12.32 12.85 12.32 13.88 11.5L15.06 10.56"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z"
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
			d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H14C14.41 2.75 14.75 3.09 14.75 3.5C14.75 3.91 14.41 4.25 14 4.25H7C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V10.5C21.25 10.09 21.59 9.75 22 9.75C22.41 9.75 22.75 10.09 22.75 10.5V15.5C22.75 19.15 20.65 21.25 17 21.25Z"
			fill={`${color}`} />
		<path
			d="M11.9988 12.8698C11.1588 12.8698 10.3088 12.6098 9.6588 12.0798L6.5288 9.57978C6.2088 9.31978 6.14881 8.84978 6.4088 8.52978C6.66881 8.20978 7.13879 8.14978 7.45879 8.40978L10.5888 10.9098C11.3488 11.5198 12.6388 11.5198 13.3988 10.9098L14.5788 9.96978C14.8988 9.70978 15.3788 9.75977 15.6288 10.0898C15.8888 10.4098 15.8388 10.8898 15.5088 11.1398L14.3288 12.0798C13.6888 12.6098 12.8388 12.8698 11.9988 12.8698Z"
			fill={`${color}`} />
		<path
			d="M19.5 8.75C17.71 8.75 16.25 7.29 16.25 5.5C16.25 3.71 17.71 2.25 19.5 2.25C21.29 2.25 22.75 3.71 22.75 5.5C22.75 7.29 21.29 8.75 19.5 8.75ZM19.5 3.75C18.54 3.75 17.75 4.54 17.75 5.5C17.75 6.46 18.54 7.25 19.5 7.25C20.46 7.25 21.25 6.46 21.25 5.5C21.25 4.54 20.46 3.75 19.5 3.75Z"
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
			d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z"
			fill={`${color}`} />
		<path
			d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z"
			fill={`${color}`} />
		<path
			d="M20.72 9.31C20.02 9.53 19.25 9.57 18.45 9.37C17.11 9.02 16.02 7.95 15.65 6.61C15.47 5.96 15.46 5.32 15.57 4.74C15.7 4.1 15.25 3.5 14.61 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V10.26C22 9.6 21.36 9.1 20.72 9.31ZM15.52 11.15L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L14.58 9.97C14.9 9.71 15.38 9.76 15.63 10.09C15.89 10.41 15.84 10.89 15.52 11.15Z"
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
			d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z"
			fill={`${color}`} />
		<path
			d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M20.72 9.30977C21.35 9.10977 22 9.59978 22 10.2698V15.5098C22 19.0098 20 20.5098 17 20.5098H7C4 20.5098 2 19.0098 2 15.5098V8.50977C2 5.00977 4 3.50977 7 3.50977H14.61C15.26 3.50977 15.7 4.10978 15.58 4.73978C15.46 5.32978 15.48 5.95977 15.66 6.60977C16.03 7.94977 17.12 9.01977 18.46 9.36977C19.25 9.56977 20.02 9.52977 20.72 9.30977Z"
			fill={`${color}`} />
		<path
			d="M12.0008 12.8698C11.1608 12.8698 10.3108 12.6098 9.66076 12.0798L6.53075 9.57978C6.21075 9.31978 6.15076 8.84978 6.41076 8.52978C6.67076 8.20978 7.14075 8.14978 7.46075 8.40978L10.5908 10.9098C11.3508 11.5198 12.6407 11.5198 13.4007 10.9098L14.5807 9.96978C14.9007 9.70978 15.3808 9.75977 15.6308 10.0898C15.8908 10.4098 15.8408 10.8898 15.5108 11.1398L14.3307 12.0798C13.6907 12.6098 12.8408 12.8698 12.0008 12.8698Z"
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
			d="M2 8.5C2 5 4 3.5 7 3.5H14"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M22 10.5V15.5C22 19 20 20.5 17 20.5H7C4 20.5 2 19 2 15.5V12.98"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M7 9L10.13 11.5C11.16 12.32 12.85 12.32 13.88 11.5L15.06 10.56"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z"
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
			d="M22 10.5V15.5C22 19 20 20.5 17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H14"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M7 9L10.13 11.5C11.16 12.32 12.85 12.32 13.88 11.5L15.06 10.56"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
