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
			d="M10.45 6.71997L6.72998 3L3.01001 6.71997"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.72998 21V3"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M13.55 17.28L17.2701 21L20.9901 17.28"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M17.27 3V21"
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
			d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z"
			fill={`${color}`} />
		<path
			d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z"
			fill={`${color}`} />
		<path
			d="M17.28 21.7497C17.08 21.7497 16.89 21.6698 16.75 21.5298L13.03 17.8097C12.74 17.5197 12.74 17.0397 13.03 16.7497C13.32 16.4597 13.8 16.4597 14.09 16.7497L17.28 19.9397L20.4699 16.7497C20.7599 16.4597 21.24 16.4597 21.53 16.7497C21.82 17.0397 21.82 17.5197 21.53 17.8097L17.81 21.5298C17.67 21.6698 17.47 21.7497 17.28 21.7497Z"
			fill={`${color}`} />
		<path
			d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z"
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
			d="M10.9814 6.19L7.27141 2.48C7.20141 2.41 7.11141 2.35 7.01141 2.31C7.00141 2.31 6.99141 2.31 6.98141 2.3C6.90141 2.27 6.82141 2.25 6.73141 2.25C6.53141 2.25 6.34141 2.33 6.20141 2.47L2.47141 6.19C2.18141 6.48 2.18141 6.96 2.47141 7.25C2.76141 7.54 3.24141 7.54 3.53141 7.25L5.98141 4.8V21C5.98141 21.41 6.32141 21.75 6.73141 21.75C7.14141 21.75 7.48141 21.41 7.48141 21V4.81L9.92141 7.25C10.0714 7.4 10.2614 7.47 10.4514 7.47C10.6414 7.47 10.8314 7.4 10.9814 7.25C11.2714 6.96 11.2714 6.49 10.9814 6.19Z"
			fill={`${color}`} />
		<path
			d="M21.5283 16.75C21.2383 16.46 20.7583 16.46 20.4683 16.75L18.0183 19.2V3C18.0183 2.59 17.6783 2.25 17.2683 2.25C16.8583 2.25 16.5183 2.59 16.5183 3V19.19L14.0783 16.75C13.7883 16.46 13.3083 16.46 13.0183 16.75C12.7283 17.04 12.7283 17.52 13.0183 17.81L16.7283 21.52C16.7983 21.59 16.8883 21.65 16.9883 21.69C16.9983 21.69 17.0083 21.69 17.0183 21.7C17.0983 21.73 17.1883 21.75 17.2783 21.75C17.4783 21.75 17.6683 21.67 17.8083 21.53L21.5283 17.81C21.8183 17.51 21.8183 17.04 21.5283 16.75Z"
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
			d="M10.9795 6.19L7.2695 2.47998C7.1995 2.40998 7.10949 2.35 7.00949 2.31C6.99949 2.31 6.98946 2.30999 6.97946 2.29999C6.89946 2.26999 6.80945 2.25 6.71945 2.25C6.51945 2.25 6.32948 2.32997 6.18948 2.46997L2.46945 6.19C2.17945 6.48 2.17945 6.96 2.46945 7.25C2.75945 7.54 3.23951 7.54 3.52951 7.25L5.97946 4.79999V21C5.97946 21.41 6.31946 21.75 6.72946 21.75C7.13946 21.75 7.47946 21.41 7.47946 21V4.81L9.91947 7.25C10.0695 7.4 10.2595 7.46997 10.4495 7.46997C10.6395 7.46997 10.8295 7.4 10.9795 7.25C11.2695 6.96 11.2695 6.49 10.9795 6.19Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M21.5302 16.75C21.2402 16.46 20.7602 16.46 20.4702 16.75L18.0202 19.2V3C18.0202 2.59 17.6802 2.25 17.2702 2.25C16.8602 2.25 16.5202 2.59 16.5202 3V19.19L14.0802 16.75C13.7902 16.46 13.3102 16.46 13.0202 16.75C12.7302 17.04 12.7302 17.52 13.0202 17.81L16.7302 21.52C16.8002 21.59 16.8902 21.65 16.9902 21.69C17.0002 21.69 17.0102 21.69 17.0202 21.7C17.1002 21.73 17.1902 21.75 17.2802 21.75C17.4802 21.75 17.6702 21.67 17.8102 21.53L21.5302 17.81C21.8202 17.51 21.8202 17.04 21.5302 16.75Z"
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
			d="M13.5508 17.28L17.2708 21L20.9908 17.28"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M17.2695 10.01V21"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M17.2695 3V5.98999"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M10.4498 6.71997L6.72974 3L3.00977 6.71997"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.73047 3V14.09"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.73047 21V18.03"
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
		<g opacity="0.4">
			<path
				d="M10.4498 6.71997L6.72974 3L3.00977 6.71997"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M6.73047 21V3"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
		<path
			d="M13.5508 17.2803L17.2708 21.0002L20.9908 17.2803"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M17.2695 3V21"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
