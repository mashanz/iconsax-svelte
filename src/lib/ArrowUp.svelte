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
			d="M18.0701 9.57L12.0001 3.5L5.93005 9.57"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 20.4999V3.66992"
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
			d="M14.6698 18.75H9.3298C7.4498 18.75 6.0198 18.07 5.3098 16.84C4.5998 15.61 4.7298 14.03 5.6698 12.4L8.3398 7.77C9.2798 6.15 10.5798 5.25 11.9998 5.25C13.4198 5.25 14.7198 6.15 15.6598 7.78L18.3298 12.41C19.2698 14.04 19.3998 15.62 18.6898 16.85C17.9798 18.07 16.5498 18.75 14.6698 18.75ZM11.9998 6.75C11.1398 6.75 10.2998 7.38 9.6398 8.53L6.9698 13.16C6.3098 14.31 6.1798 15.35 6.6098 16.1C7.0398 16.85 8.0098 17.26 9.3298 17.26H14.6698C15.9898 17.26 16.9598 16.85 17.3898 16.1C17.8198 15.35 17.6898 14.31 17.0298 13.16L14.3598 8.53C13.6998 7.38 12.8598 6.75 11.9998 6.75Z"
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
			d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.53 12.03C15.38 12.18 15.19 12.25 15 12.25C14.81 12.25 14.62 12.18 14.47 12.03L12.75 10.31V15.5C12.75 15.91 12.41 16.25 12 16.25C11.59 16.25 11.25 15.91 11.25 15.5V10.31L9.53 12.03C9.24 12.32 8.76 12.32 8.47 12.03C8.18 11.74 8.18 11.26 8.47 10.97L11.47 7.97C11.76 7.68 12.24 7.68 12.53 7.97L15.53 10.97C15.82 11.26 15.82 11.74 15.53 12.03Z"
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
			d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
			fill={`${color}`} />
		<path
			d="M15.5295 10.9699L12.5295 7.96994C12.2395 7.67994 11.7595 7.67994 11.4695 7.96994L8.46945 10.9699C8.17945 11.2599 8.17945 11.7399 8.46945 12.0299C8.75945 12.3199 9.23945 12.3199 9.52945 12.0299L11.2495 10.3099V15.4999C11.2495 15.9099 11.5895 16.2499 11.9995 16.2499C12.4095 16.2499 12.7495 15.9099 12.7495 15.4999V10.3099L14.4695 12.0299C14.6195 12.1799 14.8095 12.2499 14.9995 12.2499C15.1895 12.2499 15.3795 12.1799 15.5295 12.0299C15.8195 11.7399 15.8195 11.2599 15.5295 10.9699Z"
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
			d="M18.0697 9.57L11.9997 3.5L5.92969 9.57"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 11.9999V3.66992"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 20.5V15.97"
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
			d="M18.0697 9.57L11.9997 3.5L5.92969 9.57"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M12 20.4999V3.66992"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
