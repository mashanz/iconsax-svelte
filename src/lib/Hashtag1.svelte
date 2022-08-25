<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10 3L8 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M16 3L14 21" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M3.5 9H21.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2.5 15H20.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={`${color}`} />
		<path d="M14 17.75H10C7.93 17.75 6.25 16.07 6.25 14V10C6.25 7.93 7.93 6.25 10 6.25H14C16.07 6.25 17.75 7.93 17.75 10V14C17.75 16.07 16.07 17.75 14 17.75ZM10 7.75C8.76 7.75 7.75 8.76 7.75 10V14C7.75 15.24 8.76 16.25 10 16.25H14C15.24 16.25 16.25 15.24 16.25 14V10C16.25 8.76 15.24 7.75 14 7.75H10Z" fill={`${color}`} />
		<path d="M12 17.75C11.59 17.75 11.25 17.41 11.25 17V7C11.25 6.59 11.59 6.25 12 6.25C12.41 6.25 12.75 6.59 12.75 7V17C12.75 17.41 12.41 17.75 12 17.75Z" fill={`${color}`} />
		<path d="M17 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H17C17.41 11.25 17.75 11.59 17.75 12C17.75 12.41 17.41 12.75 17 12.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M8.05078 10.1408V11.3008H11.3108V8.05078H10.1508C8.99078 8.05078 8.05078 8.99078 8.05078 10.1408Z" fill={`${color}`} />
		<path d="M8.05078 13.8592C8.05078 15.0092 8.99078 15.9492 10.1408 15.9492H11.3008V12.6992H8.05078V13.8592Z" fill={`${color}`} />
		<path d="M12.6992 15.9492H13.8592C15.0092 15.9492 15.9492 15.0092 15.9492 13.8592V12.6992H12.6992V15.9492Z" fill={`${color}`} />
		<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM17.35 13.86C17.35 15.78 15.78 17.35 13.86 17.35H10.14C8.22 17.35 6.65 15.79 6.65 13.86V10.14C6.65 8.22 8.22 6.65 10.14 6.65H13.86C15.78 6.65 17.35 8.21 17.35 10.14V13.86Z" fill={`${color}`} />
		<path d="M13.8592 8.05078H12.6992V11.3108H15.9592V10.1508C15.9492 8.99078 15.0092 8.05078 13.8592 8.05078Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill={`${color}`} />
		<path
			d="M18.8192 10.5799C19.2192 10.5799 19.5492 10.25 19.5492 9.84995C19.5492 9.44995 19.2192 9.11995 18.8192 9.11995H15.2092L15.5992 5.61995C15.6392 5.21995 15.3592 4.85995 14.9492 4.80995C14.5492 4.76995 14.1892 5.04995 14.1392 5.45995L13.7292 9.11995H10.8992L11.2892 5.61995C11.3292 5.21995 11.0492 4.85995 10.6392 4.80995C10.2392 4.76995 9.87922 5.04995 9.82922 5.45995L9.42922 9.11995H5.89922C5.49922 9.11995 5.16922 9.44995 5.16922 9.84995C5.16922 10.25 5.49922 10.5799 5.89922 10.5799H9.26922L8.94922 13.43H5.17922C4.77922 13.43 4.44922 13.76 4.44922 14.16C4.44922 14.5599 4.77922 14.89 5.17922 14.89H8.78922L8.39922 18.3899C8.35922 18.7899 8.63922 19.15 9.04922 19.2C9.07922 19.2 9.09922 19.2 9.12922 19.2C9.49922 19.2 9.80922 18.9199 9.85922 18.5499L10.2692 14.89H13.1092L12.7192 18.3899C12.6792 18.7899 12.9592 19.15 13.3692 19.2C13.3992 19.2 13.4192 19.2 13.4492 19.2C13.8192 19.2 14.1292 18.9199 14.1792 18.5499L14.5892 14.89H18.1192C18.5192 14.89 18.8492 14.5599 18.8492 14.16C18.8492 13.76 18.5192 13.43 18.1192 13.43H14.7492L15.0692 10.5799H18.8192ZM13.2592 13.42H10.4192L10.7392 10.5699H13.5792L13.2592 13.42Z"
			fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14 7H10C8.35 7 7 8.35 7 10V14C7 15.65 8.35 17 10 17H14C15.65 17 17 15.65 17 14V10" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 7V17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7 12H17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 12.98V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<g opacity="0.4">
			<path d="M10 17H14C15.65 17 17 15.65 17 14V10C17 8.35 15.65 7 14 7H10C8.35 7 7 8.35 7 10V14C7 15.65 8.35 17 10 17Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M12 7V17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			<path d="M7 12H17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		</g>
	</svg>
{/if}
