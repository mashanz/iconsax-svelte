<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.36997 9.50993C2.28997 9.79993 2.29997 15.7099 6.36997 15.9999H16.03C17.2 16.0099 18.33 15.5699 19.2 14.7799C22.06 12.2799 20.53 7.27991 16.76 6.79991C15.41 -1.34009 3.61998 1.74993 6.40998 9.50993" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 16V19" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M18 21H14" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10 21H6" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M16.0598 16.7499C16.0498 16.7499 16.0398 16.7499 16.0198 16.7499H6.3598C3.7298 16.5699 2.5498 14.5499 2.5498 12.7499C2.5498 11.1699 3.45982 9.41994 5.43982 8.89994C4.91982 6.72994 5.39981 4.69989 6.80981 3.21989C8.44981 1.49989 11.0698 0.81994 13.3398 1.51994C15.3998 2.14994 16.8498 3.82989 17.3898 6.15989C19.1798 6.58989 20.6098 7.94994 21.1798 9.82994C21.8098 11.8899 21.2298 13.9999 19.6798 15.3499C18.7098 16.2499 17.4198 16.7499 16.0598 16.7499ZM6.39981 10.2599C4.78981 10.3899 4.06982 11.5999 4.06982 12.7499C4.06982 13.9099 4.79981 15.1299 6.42981 15.2499H16.0398C16.0498 15.2499 16.0598 15.2499 16.0698 15.2499C17.0498 15.2499 17.9898 14.8899 18.6998 14.2299C20.0198 13.0799 20.1098 11.4299 19.7598 10.2599C19.3998 9.08993 18.4098 7.76991 16.6698 7.54991C16.3398 7.50991 16.0798 7.25991 16.0198 6.92991C15.6798 4.87991 14.5698 3.46994 12.9098 2.95994C11.1998 2.43994 9.14982 2.96994 7.90982 4.26994C6.69982 5.53994 6.41981 7.30994 7.11981 9.26994C7.25981 9.65994 7.05983 10.0899 6.66983 10.2299C6.57983 10.2499 6.49981 10.2699 6.39981 10.2599Z"
			fill={`${color}`} />
		<path d="M12 19.75C11.59 19.75 11.25 19.41 11.25 19V16C11.25 15.59 11.59 15.25 12 15.25C12.41 15.25 12.75 15.59 12.75 16V19C12.75 19.41 12.41 19.75 12 19.75Z" fill={`${color}`} />
		<path d="M12 23.75C10.48 23.75 9.25 22.52 9.25 21C9.25 19.48 10.48 18.25 12 18.25C13.52 18.25 14.75 19.48 14.75 21C14.75 22.52 13.52 23.75 12 23.75ZM12 19.75C11.31 19.75 10.75 20.31 10.75 21C10.75 21.69 11.31 22.25 12 22.25C12.69 22.25 13.25 21.69 13.25 21C13.25 20.31 12.69 19.75 12 19.75Z" fill={`${color}`} />
		<path d="M18 21.75H14C13.59 21.75 13.25 21.41 13.25 21C13.25 20.59 13.59 20.25 14 20.25H18C18.41 20.25 18.75 20.59 18.75 21C18.75 21.41 18.41 21.75 18 21.75Z" fill={`${color}`} />
		<path d="M10 21.75H6C5.59 21.75 5.25 21.41 5.25 21C5.25 20.59 5.59 20.25 6 20.25H10C10.41 20.25 10.75 20.59 10.75 21C10.75 21.41 10.41 21.75 10 21.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19.2007 14.7811C18.3407 15.5711 17.2007 16.0111 16.0307 16.0011H6.3707C2.3007 15.7111 2.2907 9.80114 6.3707 9.51114H6.4107C3.6207 1.75114 15.4107 -1.33886 16.7607 6.80114C20.5307 7.28114 22.0607 12.2911 19.2007 14.7811Z" fill={`${color}`} />
		<path d="M18.75 21C18.75 21.41 18.41 21.75 18 21.75H14C13.95 21.75 13.91 21.75 13.86 21.73C13.57 22.47 12.84 23 12 23C11.16 23 10.43 22.47 10.14 21.73C10.09 21.75 10.05 21.75 10 21.75H6C5.59 21.75 5.25 21.41 5.25 21C5.25 20.59 5.59 20.25 6 20.25H10C10.05 20.25 10.09 20.25 10.14 20.27C10.34 19.75 10.75 19.34 11.27 19.14C11.25 19.09 11.25 19.05 11.25 19V16H12.75V19C12.75 19.05 12.75 19.09 12.73 19.14C13.25 19.34 13.66 19.75 13.86 20.27C13.91 20.25 13.95 20.25 14 20.25H18C18.41 20.25 18.75 20.59 18.75 21Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M19.2007 14.7799C18.3407 15.5699 17.2007 16.0099 16.0307 15.9999H6.3707C2.3007 15.7099 2.2907 9.79993 6.3707 9.50993H6.41071C3.62071 1.74993 15.4107 -1.34009 16.7607 6.79991C20.5307 7.27991 22.0607 12.2899 19.2007 14.7799Z" fill={`${color}`} />
		<path d="M18.75 21C18.75 21.41 18.41 21.75 18 21.75H14C13.95 21.75 13.91 21.75 13.86 21.73C13.57 22.47 12.84 23 12 23C11.16 23 10.43 22.47 10.14 21.73C10.09 21.75 10.05 21.75 10 21.75H6C5.59 21.75 5.25 21.41 5.25 21C5.25 20.59 5.59 20.25 6 20.25H10C10.05 20.25 10.09 20.25 10.14 20.27C10.34 19.75 10.75 19.34 11.27 19.14C11.25 19.09 11.25 19.05 11.25 19V16H12.75V19C12.75 19.05 12.75 19.09 12.73 19.14C13.25 19.34 13.66 19.75 13.86 20.27C13.91 20.25 13.95 20.25 14 20.25H18C18.41 20.25 18.75 20.59 18.75 21Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.40996 9.50993C3.61996 1.74993 15.41 -1.34009 16.76 6.79991C20.18 7.22991 21.76 11.3899 19.88 14.0199" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M6.3707 9.51001C2.2907 9.80001 2.3007 15.71 6.3707 16H16.0307" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 16V19" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10 21C10 19.9 10.9 19 12 19C13.1 19 14 19.9 14 21C14 22.1 13.1 23 12 23" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M18 21H14" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10 21H6" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.36973 9.51017C2.28973 9.80017 2.29973 15.7102 6.36973 16.0002H16.0297C17.1997 16.0102 18.3297 15.5702 19.1997 14.7802C22.0597 12.2802 20.5297 7.28015 16.7597 6.80015C15.4097 -1.33985 3.61974 1.75017 6.40974 9.51017" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M12 16V19" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M18 21H14" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M10 21H6" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
