<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.00002 13C8.34002 13.33 7.79002 13.82 7.38002 14.43C7.15002 14.78 7.15002 15.22 7.38002 15.57C7.79002 16.18 8.34002 16.67 9.00002 17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M15.21 13C15.87 13.33 16.42 13.82 16.83 14.43C17.06 14.78 17.06 15.22 16.83 15.57C16.42 16.18 15.87 16.67 15.21 17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2.22998 8.01L21.45 8" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.89088 15.75C6.61088 15.75 6.35088 15.6 6.22088 15.34C6.03088 14.97 6.18088 14.52 6.56088 14.33C7.43088 13.9 8.17088 13.24 8.70088 12.44C8.88088 12.17 8.88088 11.83 8.70088 11.56C8.16088 10.76 7.42088 10.1 6.56088 9.67002C6.18088 9.49002 6.03088 9.04002 6.22088 8.66002C6.40088 8.29002 6.85088 8.14002 7.22088 8.33002C8.32088 8.88002 9.26088 9.71002 9.94088 10.73C10.4509 11.5 10.4509 12.5 9.94088 13.27C9.26088 14.29 8.32088 15.12 7.22088 15.67C7.12088 15.72 7.00088 15.75 6.89088 15.75Z" fill={`${color}`} />
		<path d="M17 15.75H13C12.59 15.75 12.25 15.41 12.25 15C12.25 14.59 12.59 14.25 13 14.25H17C17.41 14.25 17.75 14.59 17.75 15C17.75 15.41 17.41 15.75 17 15.75Z" fill={`${color}`} />
		<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21 10H3C2.45 10 2 10.45 2 11V16.19C2 16.39 2.01 16.59 2.03 16.79C2.23 19.87 4.13 21.77 7.21 21.97C7.41 21.99 7.61 22 7.81 22H16.19C16.39 22 16.59 21.99 16.79 21.97C19.87 21.77 21.77 19.87 21.97 16.79C21.99 16.59 22 16.39 22 16.19V11C22 10.45 21.55 10 21 10ZM8 16.15C8.34 16.65 8.8 17.06 9.33 17.33C9.71 17.51 9.86 17.96 9.67 18.34C9.54 18.6 9.27 18.75 9 18.75C8.89 18.75 8.77 18.72 8.67 18.67C7.89 18.29 7.23 17.7 6.76 16.99C6.36 16.39 6.36 15.61 6.76 15.01C7.23 14.3 7.89 13.71 8.67 13.33C9.04 13.14 9.49 13.29 9.67 13.66C9.86 14.04 9.71 14.49 9.33 14.67C8.8 14.94 8.34 15.35 8 15.85C7.94 15.94 7.94 16.06 8 16.15ZM17.45 16.99C16.97 17.7 16.31 18.29 15.54 18.67C15.43 18.72 15.32 18.75 15.21 18.75C14.93 18.75 14.67 18.6 14.54 18.34C14.35 17.96 14.5 17.51 14.87 17.33C15.41 17.06 15.87 16.65 16.2 16.15C16.27 16.06 16.27 15.94 16.2 15.85C15.87 15.35 15.41 14.94 14.87 14.67C14.5 14.49 14.35 14.04 14.54 13.66C14.72 13.29 15.17 13.14 15.54 13.33C16.31 13.71 16.97 14.3 17.45 15.01C17.85 15.61 17.85 16.39 17.45 16.99Z" fill={`${color}`} />
		<path d="M22 7.81V8C22 8.55 21.55 9 21 9L3 9.01C2.45 9.01 2 8.56 2 8.01V7.81C2 7.61 2.01 7.41 2.03 7.21C2.23 4.13 4.13 2.23 7.21 2.03C7.41 2.01 7.61 2 7.81 2H16.19C16.39 2 16.59 2.01 16.79 2.03C19.87 2.23 21.77 4.13 21.97 7.21C21.99 7.41 22 7.61 22 7.81Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill={`${color}`} />
		<path d="M6.89088 15.75C6.61088 15.75 6.35088 15.6 6.22088 15.34C6.03088 14.97 6.18088 14.52 6.56088 14.33C7.43088 13.9 8.17088 13.24 8.70088 12.44C8.88088 12.17 8.88088 11.83 8.70088 11.56C8.16088 10.76 7.42088 10.1 6.56088 9.67002C6.18088 9.49002 6.03088 9.04002 6.22088 8.66002C6.40088 8.29002 6.85088 8.14002 7.22088 8.33002C8.32088 8.88002 9.26088 9.71002 9.94088 10.73C10.4509 11.5 10.4509 12.5 9.94088 13.27C9.26088 14.29 8.32088 15.12 7.22088 15.67C7.12088 15.72 7.00088 15.75 6.89088 15.75Z" fill={`${color}`} />
		<path d="M17 15.75H13C12.59 15.75 12.25 15.41 12.25 15C12.25 14.59 12.59 14.25 13 14.25H17C17.41 14.25 17.75 14.59 17.75 15C17.75 15.41 17.41 15.75 17 15.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M8.99953 13C8.33953 13.33 7.78953 13.82 7.37953 14.43C7.14953 14.78 7.14953 15.22 7.37953 15.57C7.78953 16.18 8.33953 16.67 8.99953 17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M15.2109 13C15.8709 13.33 16.4209 13.82 16.8309 14.43C17.0609 14.78 17.0609 15.22 16.8309 15.57C16.4209 16.18 15.8709 16.67 15.2109 17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 13V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2.23047 8.01L21.4505 8" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M8.99953 13C8.33953 13.33 7.78953 13.82 7.37953 14.43C7.14953 14.78 7.14953 15.22 7.37953 15.57C7.78953 16.18 8.33953 16.67 8.99953 17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M15.2109 13C15.8709 13.33 16.4209 13.82 16.8309 14.43C17.0609 14.78 17.0609 15.22 16.8309 15.57C16.4209 16.18 15.8709 16.67 15.2109 17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M2.23047 8.01L21.4505 8" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
