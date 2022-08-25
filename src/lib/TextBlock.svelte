<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7 8.8899C10.15 7.3199 13.85 7.3199 17 8.8899" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 16.2999V7.92993" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={`${color}`} />
		<path d="M7.00051 9.63002C6.73051 9.63002 6.46051 9.48002 6.33051 9.22002C6.14051 8.85002 6.29051 8.40002 6.66051 8.21002C10.0005 6.54002 13.9905 6.54002 17.3305 8.21002C17.7005 8.40002 17.8505 8.85002 17.6705 9.22002C17.4805 9.59002 17.0405 9.74002 16.6605 9.56002C13.7405 8.10002 10.2505 8.10002 7.33051 9.56002C7.23051 9.61002 7.11051 9.63002 7.00051 9.63002Z" fill={`${color}`} />
		<path d="M12 17.0402C11.59 17.0402 11.25 16.7002 11.25 16.2902V7.93018C11.25 7.52018 11.59 7.18018 12 7.18018C12.41 7.18018 12.75 7.52018 12.75 7.93018V16.3002C12.75 16.7102 12.41 17.0402 12 17.0402Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.67 9.22C17.48 9.59 17.04 9.74 16.66 9.56C15.43 8.94 14.1 8.6 12.75 8.5V16.29C12.75 16.7 12.41 17.04 12 17.04C11.59 17.04 11.25 16.7 11.25 16.29V8.5C9.9 8.6 8.57 8.94 7.34 9.56C7.23 9.61 7.11 9.63 7 9.63C6.73 9.63 6.46 9.48 6.33 9.22C6.14 8.85 6.29 8.4 6.66 8.21C10 6.54 13.99 6.54 17.33 8.21C17.71 8.4 17.86 8.85 17.67 9.22Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill={`${color}`} />
		<path d="M17.3403 8.21002C14.0003 6.54002 10.0103 6.54002 6.67026 8.21002C6.29026 8.40002 6.14026 8.85002 6.33026 9.22002C6.46026 9.48002 6.73026 9.63002 7.00026 9.63002C7.11026 9.63002 7.23026 9.60002 7.34026 9.55002C8.57026 8.94002 9.90026 8.60002 11.2503 8.50002V16.29C11.2503 16.7 11.5903 17.04 12.0003 17.04C12.4103 17.04 12.7503 16.7 12.7503 16.29V8.50002C14.1003 8.60002 15.4303 8.94002 16.6603 9.55002C17.0303 9.73002 17.4803 9.59002 17.6703 9.21002C17.8603 8.85002 17.7103 8.40002 17.3403 8.21002Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 12.94V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7 8.8899C10.15 7.3199 13.85 7.3199 17 8.8899" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 16.2999V7.92993" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<g opacity="0.4">
			<path d="M7 8.89039C10.15 7.32039 13.85 7.32039 17 8.89039" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M12 16.2997V7.92969" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</g>
	</svg>
{/if}
