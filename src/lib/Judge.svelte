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
			d="M20.0101 18.5101L15.0601 13.5601"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15.06 13.56L11.52 17.1C10.74 17.88 9.47 17.88 8.69 17.1L4.44999 12.86C3.66999 12.08 3.66999 10.81 4.44999 10.03L11.52 2.96C12.3 2.18 13.57 2.18 14.35 2.96L18.59 7.20002C19.37 7.98002 19.37 9.25001 18.59 10.03L15.06 13.56Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 21H8"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.56006 7.92004L13.6301 14.99"
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
			d="M20.01 19.26C19.82 19.26 19.63 19.19 19.48 19.04L14.53 14.09C14.24 13.8 14.24 13.32 14.53 13.03C14.82 12.74 15.3 12.74 15.59 13.03L20.54 17.98C20.83 18.27 20.83 18.75 20.54 19.04C20.39 19.19 20.2 19.26 20.01 19.26Z"
			fill={`${color}`} />
		<path
			d="M10.1095 18.4302C9.37946 18.4302 8.67946 18.1402 8.16946 17.6202L3.92945 13.3802C2.85945 12.3102 2.85945 10.5602 3.92945 9.49015L10.9995 2.42018C12.0695 1.35018 13.8195 1.35018 14.8895 2.42018L19.1295 6.66017C19.6495 7.18017 19.9395 7.87017 19.9395 8.60017C19.9395 9.33017 19.6495 10.0302 19.1295 10.5402L12.0595 17.6101C11.5395 18.1501 10.8495 18.4302 10.1095 18.4302ZM12.9395 3.12016C12.6195 3.12016 12.2995 3.24015 12.0595 3.49015L4.98947 10.5602C4.49947 11.0502 4.49947 11.8401 4.98947 12.3301L9.22946 16.5702C9.69946 17.0402 10.5195 17.0402 10.9995 16.5702L18.0695 9.50016C18.3095 9.26016 18.4395 8.95016 18.4395 8.62016C18.4395 8.29016 18.3095 7.97015 18.0695 7.74015L13.8295 3.50016C13.5795 3.24016 13.2595 3.12016 12.9395 3.12016Z"
			fill={`${color}`} />
		<path
			d="M8 21.75H2C1.59 21.75 1.25 21.41 1.25 21C1.25 20.59 1.59 20.25 2 20.25H8C8.41 20.25 8.75 20.59 8.75 21C8.75 21.41 8.41 21.75 8 21.75Z"
			fill={`${color}`} />
		<path
			d="M13.63 15.7398C13.44 15.7398 13.25 15.6698 13.1 15.5198L6.03 8.44986C5.74 8.15986 5.74 7.67986 6.03 7.38986C6.32 7.09986 6.8 7.09986 7.09 7.38986L14.16 14.4598C14.45 14.7498 14.45 15.2298 14.16 15.5198C14.02 15.6698 13.82 15.7398 13.63 15.7398Z"
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
			d="M20.5393 19.0413C20.3893 19.1913 20.1993 19.2613 20.0093 19.2613C19.8193 19.2613 19.6293 19.1913 19.4793 19.0413L14.5293 14.0913L15.0593 13.5613L15.5893 13.0312L20.5393 17.9812C20.8293 18.2712 20.8293 18.7513 20.5393 19.0413Z"
			fill={`${color}`} />
		<path
			d="M6.46937 9.27814L12.2694 15.0781C12.6594 15.4681 12.6594 16.0981 12.2694 16.4881L11.3694 17.3981C10.5594 18.1981 9.27938 18.1981 8.47937 17.3981L4.13938 13.0581C3.34938 12.2681 3.34938 10.9781 4.13938 10.1781L5.04938 9.26814C5.43938 8.88814 6.07937 8.88814 6.46937 9.27814Z"
			fill={`${color}`} />
		<path
			d="M18.5898 10.1897L14.7798 13.9897C14.3798 14.3897 13.7398 14.3897 13.3398 13.9897L7.55977 8.20969C7.15977 7.80969 7.15977 7.16969 7.55977 6.76969L11.3698 2.95969C12.1598 2.16969 13.4498 2.16969 14.2498 2.95969L18.5898 7.29969C19.3798 8.09969 19.3798 9.37969 18.5898 10.1897Z"
			fill={`${color}`} />
		<path
			d="M8 21.75H2C1.59 21.75 1.25 21.41 1.25 21C1.25 20.59 1.59 20.25 2 20.25H8C8.41 20.25 8.75 20.59 8.75 21C8.75 21.41 8.41 21.75 8 21.75Z"
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
			d="M20.5393 19.04C20.3893 19.19 20.1993 19.26 20.0093 19.26C19.8193 19.26 19.6293 19.19 19.4793 19.04L14.5293 14.09L15.0593 13.56L15.5893 13.03L20.5393 17.98C20.8293 18.27 20.8293 18.75 20.5393 19.04Z"
			fill={`${color}`} />
		<path
			opacity="0.4"
			d="M6.46938 9.28009L12.2694 15.0801C12.6594 15.4701 12.6594 16.1001 12.2694 16.4901L11.3694 17.4001C10.5594 18.2001 9.27937 18.2001 8.47937 17.4001L4.13938 13.0601C3.34938 12.2701 3.34938 10.9801 4.13938 10.1801L5.04938 9.27009C5.43938 8.89009 6.07938 8.89009 6.46938 9.28009Z"
			fill={`${color}`} />
		<path
			d="M18.5895 10.1899L14.7795 13.9899C14.3795 14.3899 13.7395 14.3899 13.3395 13.9899L7.56953 8.21994C7.16953 7.81994 7.16953 7.17994 7.56953 6.77994L11.3795 2.96994C12.1695 2.17994 13.4595 2.17994 14.2595 2.96994L18.5995 7.30994C19.3795 8.09994 19.3795 9.37994 18.5895 10.1899Z"
			fill={`${color}`} />
		<path
			d="M8 21.75H2C1.59 21.75 1.25 21.41 1.25 21C1.25 20.59 1.59 20.25 2 20.25H8C8.41 20.25 8.75 20.59 8.75 21C8.75 21.41 8.41 21.75 8 21.75Z"
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
			d="M20.0105 18.5101L15.0605 13.5601"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M18.6006 7.19995C19.3806 7.97995 19.3806 9.24994 18.6006 10.0299L15.0605 13.5699"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15.0602 13.56L11.5202 17.1C10.7402 17.88 9.47024 17.88 8.69024 17.1L4.45023 12.86C3.67023 12.08 3.67023 10.81 4.45023 10.03L11.5202 2.96C12.3002 2.18 13.5702 2.18 14.3502 2.96L15.8102 4.42002"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2 21H8"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M6.56055 7.91992L13.6306 14.9899"
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
			d="M20.0105 18.5101L15.0605 13.5601"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15.0602 13.56L11.5202 17.1C10.7402 17.88 9.47024 17.88 8.69024 17.1L4.45023 12.86C3.67023 12.08 3.67023 10.81 4.45023 10.03L11.5202 2.96C12.3002 2.18 13.5702 2.18 14.3502 2.96L18.5902 7.20002C19.3702 7.98002 19.3702 9.25001 18.5902 10.03L15.0602 13.56Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M2 21H8"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			opacity="0.4"
			d="M6.56055 7.91992L13.6306 14.9899"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
