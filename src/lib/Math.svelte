<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14.4207 5.63965H21.7007" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2.29956 5.64014H9.57956" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.4207 15.3301H21.7007" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.4207 21.3896H21.7007" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M18.0894 9.27V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2.29956 22L9.57956 14.73" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9.57956 22L2.29956 14.73" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21.6997 6.39014H14.4297C14.0197 6.39014 13.6797 6.05014 13.6797 5.64014C13.6797 5.23014 14.0197 4.89014 14.4297 4.89014H21.6997C22.1097 4.89014 22.4497 5.23014 22.4497 5.64014C22.4497 6.05014 22.1097 6.39014 21.6997 6.39014Z" fill={`${color}`} />
		<path d="M9.58078 6.39014H2.30078C1.89078 6.39014 1.55078 6.05014 1.55078 5.64014C1.55078 5.23014 1.89078 4.89014 2.30078 4.89014H9.57078C9.98078 4.89014 10.3208 5.23014 10.3208 5.64014C10.3208 6.05014 9.99078 6.39014 9.58078 6.39014Z" fill={`${color}`} />
		<path d="M21.6997 16.0801H14.4297C14.0197 16.0801 13.6797 15.7401 13.6797 15.3301C13.6797 14.9201 14.0197 14.5801 14.4297 14.5801H21.6997C22.1097 14.5801 22.4497 14.9201 22.4497 15.3301C22.4497 15.7401 22.1097 16.0801 21.6997 16.0801Z" fill={`${color}`} />
		<path d="M21.6997 22.1401H14.4297C14.0197 22.1401 13.6797 21.8001 13.6797 21.3901C13.6797 20.9801 14.0197 20.6401 14.4297 20.6401H21.6997C22.1097 20.6401 22.4497 20.9801 22.4497 21.3901C22.4497 21.8001 22.1097 22.1401 21.6997 22.1401Z" fill={`${color}`} />
		<path d="M18.0898 10.02C17.6798 10.02 17.3398 9.68 17.3398 9.27V2C17.3398 1.59 17.6798 1.25 18.0898 1.25C18.4998 1.25 18.8398 1.59 18.8398 2V9.27C18.8398 9.69 18.5098 10.02 18.0898 10.02Z" fill={`${color}`} />
		<path d="M2.30023 22.7499C2.11023 22.7499 1.92023 22.6799 1.77023 22.5299C1.48023 22.2399 1.48023 21.7599 1.77023 21.4699L9.04023 14.1999C9.33023 13.9099 9.81024 13.9099 10.1002 14.1999C10.3902 14.4899 10.3902 14.9699 10.1002 15.2599L2.83023 22.5299C2.69023 22.6799 2.50023 22.7499 2.30023 22.7499Z" fill={`${color}`} />
		<path d="M9.58 22.7499C9.39 22.7499 9.2 22.6799 9.05 22.5299L1.78 15.2599C1.49 14.9699 1.49 14.4899 1.78 14.1999C2.07 13.9099 2.55 13.9099 2.84 14.1999L10.11 21.4699C10.4 21.7599 10.4 22.2399 10.11 22.5299C9.96 22.6799 9.77 22.7499 9.58 22.7499Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM11.03 17.66C11.32 17.95 11.32 18.43 11.03 18.72C10.88 18.87 10.69 18.94 10.5 18.94C10.31 18.94 10.12 18.87 9.97 18.72L8.25 17L6.53 18.72C6.38 18.86 6.19 18.94 6 18.94C5.81 18.94 5.62 18.87 5.47 18.72C5.18 18.43 5.18 17.95 5.47 17.66L7.19 15.94L5.47 14.22C5.18 13.93 5.18 13.45 5.47 13.16C5.76 12.87 6.24 12.87 6.53 13.16L8.25 14.88L9.97 13.16C10.26 12.87 10.74 12.87 11.03 13.16C11.32 13.45 11.32 13.93 11.03 14.22L9.31 15.94L11.03 17.66ZM10.5 8.81H6C5.59 8.81 5.25 8.47 5.25 8.06C5.25 7.65 5.59 7.31 6 7.31H10.5C10.91 7.31 11.25 7.65 11.25 8.06C11.25 8.47 10.91 8.81 10.5 8.81ZM18 18.56H13.5C13.09 18.56 12.75 18.22 12.75 17.81C12.75 17.4 13.09 17.06 13.5 17.06H18C18.41 17.06 18.75 17.4 18.75 17.81C18.75 18.22 18.41 18.56 18 18.56ZM18 14.81H13.5C13.09 14.81 12.75 14.47 12.75 14.06C12.75 13.65 13.09 13.31 13.5 13.31H18C18.41 13.31 18.75 13.65 18.75 14.06C18.75 14.47 18.41 14.81 18 14.81ZM18 8.81H16.52V10.31C16.52 10.72 16.18 11.06 15.77 11.06C15.36 11.06 15.02 10.72 15.02 10.31V8.81H13.5C13.09 8.81 12.75 8.47 12.75 8.06C12.75 7.65 13.09 7.31 13.5 7.31H15.02V5.81C15.02 5.4 15.36 5.06 15.77 5.06C16.18 5.06 16.52 5.4 16.52 5.81V7.31H18C18.41 7.31 18.75 7.65 18.75 8.06C18.75 8.47 18.41 8.81 18 8.81Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill={`${color}`} />
		<path d="M10.5 8.81006H6C5.59 8.81006 5.25 8.47006 5.25 8.06006C5.25 7.65006 5.59 7.31006 6 7.31006H10.5C10.91 7.31006 11.25 7.65006 11.25 8.06006C11.25 8.47006 10.91 8.81006 10.5 8.81006Z" fill={`${color}`} />
		<path d="M18 14.8101H13.5C13.09 14.8101 12.75 14.4701 12.75 14.0601C12.75 13.6501 13.09 13.3101 13.5 13.3101H18C18.41 13.3101 18.75 13.6501 18.75 14.0601C18.75 14.4701 18.41 14.8101 18 14.8101Z" fill={`${color}`} />
		<path d="M18 18.5601H13.5C13.09 18.5601 12.75 18.2201 12.75 17.8101C12.75 17.4001 13.09 17.0601 13.5 17.0601H18C18.41 17.0601 18.75 17.4001 18.75 17.8101C18.75 18.2201 18.41 18.5601 18 18.5601Z" fill={`${color}`} />
		<path d="M18 7.31006H16.52V5.81006C16.52 5.40006 16.18 5.06006 15.77 5.06006C15.36 5.06006 15.02 5.40006 15.02 5.81006V7.31006H13.5C13.09 7.31006 12.75 7.65006 12.75 8.06006C12.75 8.47006 13.09 8.81006 13.5 8.81006H15.02V10.3101C15.02 10.7201 15.36 11.0601 15.77 11.0601C16.18 11.0601 16.52 10.7201 16.52 10.3101V8.81006H18C18.41 8.81006 18.75 8.47006 18.75 8.06006C18.75 7.65006 18.41 7.31006 18 7.31006Z" fill={`${color}`} />
		<path d="M9.30945 15.9399L11.0295 14.2199C11.3195 13.9299 11.3195 13.4499 11.0295 13.1599C10.7395 12.8699 10.2595 12.8699 9.96945 13.1599L8.24945 14.8799L6.52945 13.1599C6.23945 12.8699 5.75945 12.8699 5.46945 13.1599C5.17945 13.4499 5.17945 13.9299 5.46945 14.2199L7.18945 15.9399L5.46945 17.6599C5.17945 17.9499 5.17945 18.4299 5.46945 18.7199C5.61945 18.8699 5.80945 18.9399 5.99945 18.9399C6.18945 18.9399 6.37945 18.8699 6.52945 18.7199L8.24945 16.9999L9.96945 18.7199C10.1195 18.8699 10.3095 18.9399 10.4995 18.9399C10.6895 18.9399 10.8795 18.8699 11.0295 18.7199C11.3195 18.4299 11.3195 17.9499 11.0295 17.6599L9.30945 15.9399Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2.30078 5.63989H9.58078" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.4199 15.3301H21.6999" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.4199 21.3899H21.6999" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M20.9609 5.63989H21.7009" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.4199 5.63989H17.6899" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M18.0898 9.27V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9.58039 14.73L8.15039 16.15" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2.30078 22L5.81078 18.49" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9.58078 22L2.30078 14.73" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14.4199 5.63965H21.6999" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M2.29883 5.64014H9.57883" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M14.4199 15.3301H21.6999" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M14.4199 21.3896H21.6999" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M18.0898 9.27V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2.29883 22L9.57883 14.73" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M9.57883 22L2.29883 14.73" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
