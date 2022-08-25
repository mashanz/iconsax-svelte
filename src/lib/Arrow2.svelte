<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M17.28 10.45L21 6.72998L17.28 3.01001" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M3 6.72998H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.71997 13.55L3 17.2701L6.71997 20.9901" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21 17.27H3" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M17.2788 11.2002C17.0888 11.2002 16.8988 11.1302 16.7488 10.9802C16.4588 10.6902 16.4588 10.2102 16.7488 9.9202L19.9388 6.7302L16.7488 3.54019C16.4588 3.25019 16.4588 2.7702 16.7488 2.4802C17.0387 2.1902 17.5187 2.1902 17.8087 2.4802L21.5288 6.20023C21.6688 6.34023 21.7488 6.5302 21.7488 6.7302C21.7488 6.9302 21.6688 7.12022 21.5288 7.26022L17.8087 10.9802C17.6587 11.1202 17.4688 11.2002 17.2788 11.2002Z" fill={`${color}`} />
		<path d="M21 7.47998H3C2.59 7.47998 2.25 7.13998 2.25 6.72998C2.25 6.31998 2.59 5.97998 3 5.97998H21C21.41 5.97998 21.75 6.31998 21.75 6.72998C21.75 7.13998 21.41 7.47998 21 7.47998Z" fill={`${color}`} />
		<path d="M6.71997 21.75C6.52997 21.75 6.34 21.68 6.19 21.53L2.46997 17.81C2.32997 17.67 2.25 17.48 2.25 17.28C2.25 17.08 2.32997 16.89 2.46997 16.75L6.19 13.03C6.48 12.74 6.96 12.74 7.25 13.03C7.54 13.32 7.54 13.8 7.25 14.09L4.06 17.28L7.25 20.4699C7.54 20.7599 7.54 21.24 7.25 21.53C7.11 21.68 6.91997 21.75 6.71997 21.75Z" fill={`${color}`} />
		<path d="M21 18.02H3C2.59 18.02 2.25 17.68 2.25 17.27C2.25 16.86 2.59 16.52 3 16.52H21C21.41 16.52 21.75 16.86 21.75 17.27C21.75 17.68 21.41 18.02 21 18.02Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21.75 6.72922C21.75 6.52922 21.67 6.33922 21.53 6.19922L17.81 2.47922C17.52 2.18922 17.04 2.18922 16.75 2.47922C16.46 2.76922 16.46 3.24922 16.75 3.53922L19.2 5.98922H3C2.59 5.98922 2.25 6.32922 2.25 6.73922C2.25 7.14922 2.59 7.47922 3 7.47922H19.19L16.75 9.91922C16.46 10.2092 16.46 10.6892 16.75 10.9792C16.9 11.1292 17.09 11.1992 17.28 11.1992C17.47 11.1992 17.66 11.1292 17.81 10.9792L21.52 7.26922C21.59 7.19922 21.65 7.10922 21.69 7.00922C21.69 6.99922 21.69 6.98922 21.7 6.97922C21.73 6.89922 21.75 6.81922 21.75 6.72922Z" fill={`${color}`} />
		<path d="M21 16.5183H4.81L7.25 14.0783C7.54 13.7883 7.54 13.3083 7.25 13.0183C6.96 12.7283 6.48 12.7283 6.19 13.0183L2.48 16.7283C2.41 16.7983 2.35 16.8883 2.31 16.9883C2.31 16.9983 2.31 17.0083 2.3 17.0183C2.27 17.0983 2.25 17.1883 2.25 17.2783C2.25 17.4783 2.33 17.6683 2.47 17.8083L6.19 21.5283C6.34 21.6783 6.53 21.7483 6.72 21.7483C6.91 21.7483 7.1 21.6783 7.25 21.5283C7.54 21.2383 7.54 20.7583 7.25 20.4683L4.8 18.0183H21C21.41 18.0183 21.75 17.6783 21.75 17.2683C21.75 16.8583 21.41 16.5183 21 16.5183Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M21.75 6.7302C21.75 6.5302 21.67 6.34023 21.53 6.20023L17.81 2.4802C17.52 2.1902 17.04 2.1902 16.75 2.4802C16.46 2.7702 16.46 3.25019 16.75 3.54019L19.2 5.99021H3C2.59 5.99021 2.25 6.33021 2.25 6.74021C2.25 7.15021 2.59 7.49021 3 7.49021H19.19L16.75 9.93021C16.46 10.2202 16.46 10.7002 16.75 10.9902C16.9 11.1402 17.09 11.2102 17.28 11.2102C17.47 11.2102 17.66 11.1402 17.81 10.9902L21.52 7.28024C21.59 7.21024 21.65 7.12023 21.69 7.02023C21.69 7.01023 21.69 7.00021 21.7 6.99021C21.73 6.90021 21.75 6.8202 21.75 6.7302Z" fill={`${color}`} />
		<path d="M21 16.5202H4.81L7.25 14.0802C7.54 13.7902 7.54 13.3102 7.25 13.0202C6.96 12.7302 6.48 12.7302 6.19 13.0202L2.47998 16.7302C2.40998 16.8002 2.35 16.8902 2.31 16.9902C2.31 17.0002 2.30999 17.0102 2.29999 17.0202C2.26999 17.1002 2.25 17.1902 2.25 17.2802C2.25 17.4802 2.32997 17.6702 2.46997 17.8102L6.19 21.5302C6.34 21.6802 6.52997 21.7502 6.71997 21.7502C6.90997 21.7502 7.1 21.6802 7.25 21.5302C7.54 21.2402 7.54 20.7602 7.25 20.4702L4.79999 18.0202H21C21.41 18.0202 21.75 17.6802 21.75 17.2702C21.75 16.8602 21.41 16.5202 21 16.5202Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M17.2793 10.45L20.9993 6.72998L17.2793 3.01001" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10.0098 6.72998H20.9998" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M3 6.72998H5.98999" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.71997 13.55L3 17.2701L6.71997 20.9901" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M3 17.27H14.09" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20.9993 17.27H18.0293" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g opacity="0.4">
			<path d="M17.2812 10.4498L21.0012 6.72974L17.2812 3.00977" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M3 6.72949H21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</g>
		<path d="M6.71997 13.5498L3 17.2698L6.71997 20.9898" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M21 17.27H3" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
