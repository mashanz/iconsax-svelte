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
			d="M9.56 18V13"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 15.5H7"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M8 2V5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16 2V5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15.81 3.41992C19.15 3.53992 20.84 4.76992 20.94 9.46992L21.07 15.6399C21.15 19.7599 20.2 21.8299 15.2 21.9399L9.20002 22.0599C4.20002 22.1599 3.16002 20.1199 3.08002 16.0099L2.94002 9.82992C2.84002 5.12992 4.49002 3.82992 7.81002 3.57992L15.81 3.41992Z"
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
			d="M9.56055 18.75C9.15055 18.75 8.81055 18.41 8.81055 18V13C8.81055 12.59 9.15055 12.25 9.56055 12.25C9.97055 12.25 10.3105 12.59 10.3105 13V18C10.3105 18.41 9.97055 18.75 9.56055 18.75Z"
			fill={`${color}`} />
		<path
			d="M12 16.25H7C6.59 16.25 6.25 15.91 6.25 15.5C6.25 15.09 6.59 14.75 7 14.75H12C12.41 14.75 12.75 15.09 12.75 15.5C12.75 15.91 12.41 16.25 12 16.25Z"
			fill={`${color}`} />
		<path
			d="M8 5.75C7.59 5.75 7.25 5.41 7.25 5V2C7.25 1.59 7.59 1.25 8 1.25C8.41 1.25 8.75 1.59 8.75 2V5C8.75 5.41 8.41 5.75 8 5.75Z"
			fill={`${color}`} />
		<path
			d="M16 5.75C15.59 5.75 15.25 5.41 15.25 5V2C15.25 1.59 15.59 1.25 16 1.25C16.41 1.25 16.75 1.59 16.75 2V5C16.75 5.41 16.41 5.75 16 5.75Z"
			fill={`${color}`} />
		<path
			d="M8.85002 22.8102C6.38002 22.8102 4.75002 22.2702 3.73002 21.1102C2.55002 19.7802 2.36001 17.7902 2.32001 16.0202L2.19002 9.85018C2.09002 5.12018 3.66002 3.15018 7.76002 2.84018L15.8 2.68018C15.82 2.68018 15.83 2.68018 15.84 2.68018C19.95 2.82018 21.59 4.72018 21.69 9.46018L21.81 15.6302C21.85 17.4002 21.73 19.4002 20.61 20.7702C19.59 22.0202 17.87 22.6302 15.2 22.6902L9.20001 22.8102C9.08001 22.8102 8.96002 22.8102 8.85002 22.8102ZM15.8 4.17018L7.83001 4.33018C5.03001 4.55018 3.60002 5.45018 3.69002 9.82018L3.82001 15.9902C3.86001 18.1102 4.17001 19.3502 4.85001 20.1202C5.61001 20.9802 6.98001 21.3602 9.18002 21.3102L15.18 21.1902C17.37 21.1502 18.73 20.7102 19.46 19.8202C20.11 19.0302 20.37 17.7802 20.32 15.6602L20.2 9.49018C20.1 5.13018 18.64 4.27018 15.8 4.17018Z"
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
			d="M8.28906 6.29C7.86906 6.29 7.53906 5.95 7.53906 5.54V2.75C7.53906 2.34 7.86906 2 8.28906 2C8.70906 2 9.03906 2.34 9.03906 2.75V5.53C9.03906 5.95 8.70906 6.29 8.28906 6.29Z"
			fill={`${color}`} />
		<path
			d="M15.7109 6.29C15.2909 6.29 14.9609 5.95 14.9609 5.54V2.75C14.9609 2.33 15.3009 2 15.7109 2C16.1309 2 16.4609 2.34 16.4609 2.75V5.53C16.4609 5.95 16.1309 6.29 15.7109 6.29Z"
			fill={`${color}`} />
		<path
			d="M19.57 4.5C18.91 4.01 17.96 4.48 17.96 5.31V5.41C17.96 6.58 17.12 7.66 15.95 7.78C14.6 7.92 13.46 6.86 13.46 5.54V4.5C13.46 3.95 13.01 3.5 12.46 3.5H11.54C10.99 3.5 10.54 3.95 10.54 4.5V5.54C10.54 6.33 10.13 7.03 9.51 7.42C9.42 7.48 9.32 7.53 9.22 7.58C9.13 7.63 9.03 7.67 8.92 7.7C8.8 7.74 8.67 7.77 8.53 7.78C8.37 7.8 8.21 7.8 8.05 7.78C7.91 7.77 7.78 7.74 7.66 7.7C7.56 7.67 7.46 7.63 7.36 7.58C7.26 7.53 7.16 7.48 7.07 7.42C6.44 6.98 6.04 6.22 6.04 5.41V5.31C6.04 4.54 5.22 4.08 4.57 4.41C4.56 4.42 4.55 4.42 4.54 4.43C4.5 4.45 4.47 4.47 4.43 4.5C4.4 4.53 4.36 4.55 4.33 4.58C4.05 4.8 3.8 5.05 3.59 5.32C3.48 5.44 3.39 5.57 3.31 5.7C3.3 5.71 3.29 5.72 3.28 5.74C3.19 5.87 3.11 6.02 3.04 6.16C3.02 6.18 3.01 6.19 3.01 6.21C2.95 6.33 2.89 6.45 2.85 6.58C2.82 6.63 2.81 6.67 2.79 6.72C2.73 6.87 2.69 7.02 2.65 7.17C2.61 7.31 2.58 7.46 2.56 7.61C2.54 7.72 2.53 7.83 2.52 7.95C2.51 8.09 2.5 8.23 2.5 8.37V17.13C2.5 19.82 4.68 22 7.37 22H16.63C19.32 22 21.5 19.82 21.5 17.13V8.37C21.5 6.78 20.74 5.39 19.57 4.5ZM12 16.25H10.31V18C10.31 18.41 9.97 18.75 9.56 18.75C9.14 18.75 8.81 18.41 8.81 18V16.25H7C6.59 16.25 6.25 15.91 6.25 15.5C6.25 15.09 6.59 14.75 7 14.75H8.81V13C8.81 12.59 9.14 12.25 9.56 12.25C9.97 12.25 10.31 12.59 10.31 13V14.75H12C12.41 14.75 12.75 15.09 12.75 15.5C12.75 15.91 12.41 16.25 12 16.25Z"
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
			d="M7.37 22H16.62C19.31 22 21.49 19.82 21.49 17.13V8.37C21.49 5.68 19.31 3.5 16.62 3.5H7.37C4.68 3.5 2.5 5.68 2.5 8.37V17.12C2.5 19.82 4.68 22 7.37 22Z"
			fill={`${color}`} />
		<path
			d="M8.28906 6.29C7.86906 6.29 7.53906 5.95 7.53906 5.54V2.75C7.53906 2.34 7.86906 2 8.28906 2C8.70906 2 9.03906 2.34 9.03906 2.75V5.53C9.03906 5.95 8.70906 6.29 8.28906 6.29Z"
			fill={`${color}`} />
		<path
			d="M15.7109 6.29C15.2909 6.29 14.9609 5.95 14.9609 5.54V2.75C14.9609 2.33 15.3009 2 15.7109 2C16.1309 2 16.4609 2.34 16.4609 2.75V5.53C16.4609 5.95 16.1309 6.29 15.7109 6.29Z"
			fill={`${color}`} />
		<path
			d="M12 14.75H10.31V13C10.31 12.59 9.97 12.25 9.56 12.25C9.15 12.25 8.81 12.59 8.81 13V14.75H7C6.59 14.75 6.25 15.09 6.25 15.5C6.25 15.91 6.59 16.25 7 16.25H8.81V18C8.81 18.41 9.15 18.75 9.56 18.75C9.97 18.75 10.31 18.41 10.31 18V16.25H12C12.41 16.25 12.75 15.91 12.75 15.5C12.75 15.09 12.41 14.75 12 14.75Z"
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
			d="M9.56055 18V13"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M12 15.5H7"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M8 2V5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16 2V5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M2.93983 9.82992C2.83983 5.12992 4.48983 3.82992 7.80983 3.57992L15.8098 3.41992C19.1498 3.53992 20.8398 4.76992 20.9398 9.46992L21.0698 15.6399C21.1498 19.7599 20.1998 21.8299 15.1998 21.9399L9.19983 22.0599C4.19983 22.1599 3.15983 20.1199 3.07983 16.0099L3.03983 13.8899"
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
		<g opacity="0.4">
			<path
				d="M9.56055 18V13"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
			<path
				d="M12 15.5H7"
				stroke={`${color}`}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round" />
		</g>
		<path
			d="M8 2V5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M16 2V5"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
		<path
			d="M15.8098 3.41992C19.1498 3.53992 20.8398 4.76992 20.9398 9.46992L21.0698 15.6399C21.1498 19.7599 20.1998 21.8299 15.1998 21.9399L9.19983 22.0599C4.19983 22.1599 3.15983 20.1199 3.07983 16.0099L2.93983 9.82992C2.83983 5.12992 4.48983 3.82992 7.80983 3.57992L15.8098 3.41992Z"
			stroke={`${color}`}
			stroke-width="1.5"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round" />
	</svg>
{/if}
