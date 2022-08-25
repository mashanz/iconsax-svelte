<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.1 19.1498C14.26 19.1498 13.34 18.8798 12.41 18.3398L7.78 15.6698C6.15 14.7198 5.25 13.4198 5.25 11.9998C5.25 10.5798 6.15 9.2798 7.78 8.3398L12.41 5.6698C14.04 4.7298 15.61 4.5998 16.85 5.3098C18.08 6.0198 18.76 7.4498 18.76 9.3298V14.6698C18.76 16.5498 18.08 17.9798 16.85 18.6898C16.32 18.9998 15.73 19.1498 15.1 19.1498ZM15.1 6.3598C14.52 6.3598 13.86 6.5598 13.16 6.9698L8.53 9.6398C7.38 10.2998 6.75 11.1398 6.75 11.9998C6.75 12.8598 7.38 13.6998 8.53 14.3598L13.16 17.0298C14.31 17.6898 15.35 17.8198 16.1 17.3898C16.85 16.9598 17.26 15.9898 17.26 14.6698V9.3298C17.26 8.0098 16.85 7.0398 16.1 6.6098C15.8 6.4398 15.46 6.3598 15.1 6.3598Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18 12.75H7.81L10.82 15.76C11.11 16.05 11.11 16.53 10.82 16.82C10.67 16.97 10.48 17.04 10.29 17.04C10.1 17.04 9.91 16.97 9.76 16.82L5.47 12.53C5.33 12.39 5.25 12.2 5.25 12C5.25 11.8 5.33 11.61 5.47 11.47L9.76 7.18C10.05 6.89 10.53 6.89 10.82 7.18C11.11 7.47 11.11 7.95 10.82 8.24L7.81 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18 9.32993V14.6699C18 17.9899 15.65 19.3399 12.78 17.6899L11.5 16.9499C11.19 16.7699 11 16.4399 11 16.0799V7.91993C11 7.55993 11.19 7.22993 11.5 7.04993L12.78 6.30992C15.65 4.65992 18 6.00993 18 9.32993Z" fill={`${color}`} />
		<path opacity="0.4" d="M10.0005 8.79006V15.2201C10.0005 15.6101 9.58055 15.8501 9.25055 15.6501L8.15055 15.0101C5.28055 13.3601 5.28055 10.6401 8.15055 8.99006L9.25055 8.35006C9.58055 8.16006 10.0005 8.40006 10.0005 8.79006Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.57 5.92993L3.5 11.9999L9.57 18.0699" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12.82 12H3.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20.3296 12H16.8496" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
