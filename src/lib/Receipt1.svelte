<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8 7H16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9 11H15" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19.42 11.75H16C15.59 11.75 15.25 11.41 15.25 11V4.01C15.25 3.27 15.54 2.58 16.06 2.06C16.58 1.54 17.27 1.25 18.01 1.25H18.02C19.27 1.26 20.45 1.75 21.35 2.64C22.25 3.55 22.74 4.75 22.74 6V8.42C22.75 10.41 21.41 11.75 19.42 11.75ZM16.75 10.25H19.42C20.58 10.25 21.25 9.58 21.25 8.42V6C21.25 5.14 20.91 4.32 20.3 3.7C19.69 3.1 18.88 2.76 18.02 2.75C18.02 2.75 18.02 2.75 18.01 2.75C17.68 2.75 17.36 2.88 17.12 3.12C16.88 3.36 16.75 3.67 16.75 4.01V10.25Z" fill={`${color}`} />
		<path d="M8.99976 23.33C8.52976 23.33 8.08977 23.15 7.75977 22.81L6.09973 21.14C6.00973 21.05 5.86978 21.04 5.76978 21.12L4.05975 22.4C3.52975 22.8 2.82974 22.87 2.22974 22.57C1.62974 22.27 1.25977 21.67 1.25977 21V6C1.25977 2.98 2.98977 1.25 6.00977 1.25H18.0098C18.4198 1.25 18.7598 1.59 18.7598 2C18.7598 2.41 18.4198 2.75 18.0098 2.75C17.3198 2.75 16.7598 3.31 16.7598 4V21C16.7598 21.67 16.3897 22.27 15.7897 22.57C15.1997 22.87 14.4898 22.8 13.9598 22.4L12.2498 21.12C12.1498 21.04 12.0097 21.06 11.9297 21.14L10.2498 22.82C9.90976 23.15 9.46976 23.33 8.99976 23.33ZM5.90973 19.57C6.36973 19.57 6.81973 19.74 7.15973 20.09L8.81976 21.76C8.87976 21.82 8.95976 21.83 8.99976 21.83C9.03976 21.83 9.11975 21.82 9.17975 21.76L10.8597 20.08C11.4797 19.46 12.4598 19.4 13.1498 19.93L14.8497 21.2C14.9597 21.28 15.0597 21.25 15.1097 21.22C15.1597 21.19 15.2498 21.13 15.2498 21V4C15.2498 3.55 15.3597 3.12 15.5497 2.75H5.99976C3.77976 2.75 2.74976 3.78 2.74976 6V21C2.74976 21.14 2.83977 21.2 2.88977 21.23C2.94977 21.26 3.04978 21.28 3.14978 21.2L4.85974 19.92C5.16974 19.69 5.53973 19.57 5.90973 19.57Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.96 4.96 21.59 6.73 19.69L6.74 19.68C7.56 18.81 8.81 18.88 9.52 19.83L10.53 21.18C11.34 22.25 12.65 22.25 13.46 21.18L14.47 19.83C15.19 18.87 16.44 18.8 17.26 19.68C19.04 21.58 20.49 20.95 20.49 18.29V7.04C20.5 3.01 19.56 2 15.78 2ZM15 11.75H9C8.59 11.75 8.25 11.41 8.25 11C8.25 10.59 8.59 10.25 9 10.25H15C15.41 10.25 15.75 10.59 15.75 11C15.75 11.41 15.41 11.75 15 11.75ZM16 7.75H8C7.59 7.75 7.25 7.41 7.25 7C7.25 6.59 7.59 6.25 8 6.25H16C16.41 6.25 16.75 6.59 16.75 7C16.75 7.41 16.41 7.75 16 7.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z" fill={`${color}`} />
		<path d="M16 7.75H8C7.59 7.75 7.25 7.41 7.25 7C7.25 6.59 7.59 6.25 8 6.25H16C16.41 6.25 16.75 6.59 16.75 7C16.75 7.41 16.41 7.75 16 7.75Z" fill={`${color}`} />
		<path d="M15 11.75H9C8.59 11.75 8.25 11.41 8.25 11C8.25 10.59 8.59 10.25 9 10.25H15C15.41 10.25 15.75 10.59 15.75 11C15.75 11.41 15.41 11.75 15 11.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M20.5 7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.96 4.96 21.59 6.73 19.69L6.74 19.68C7.56 18.81 8.81 18.88 9.52 19.83L10.53 21.18C11.34 22.25 12.65 22.25 13.46 21.18L14.47 19.83C15.19 18.87 16.44 18.8 17.26 19.68C19.04 21.58 20.49 20.95 20.49 18.29V11" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8 7H16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9 11H15" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M8 7H16" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M9 11H15" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
