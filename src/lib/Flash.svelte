<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.31993 13.28H12.4099V20.48C12.4099 21.54 13.7299 22.04 14.4299 21.24L21.9999 12.64C22.6599 11.89 22.1299 10.72 21.1299 10.72H18.0399V3.51997C18.0399 2.45997 16.7199 1.95997 16.0199 2.75997L8.44994 11.36C7.79994 12.11 8.32993 13.28 9.31993 13.28Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8.5 4H1.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7.5 20H1.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M4.5 12H1.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M13.57 22.3801C13.34 22.3801 13.11 22.3401 12.89 22.2601C12.14 21.9801 11.66 21.2801 11.66 20.4801V14.0301H9.31997C8.55997 14.0301 7.89996 13.6001 7.58996 12.9101C7.27996 12.2201 7.39996 11.4401 7.89996 10.8701L15.47 2.27006C16 1.67006 16.82 1.46006 17.57 1.75006C18.32 2.03006 18.7999 2.73006 18.7999 3.53006V9.98006H21.14C21.9 9.98006 22.56 10.4101 22.87 11.1001C23.18 11.7901 23.06 12.5701 22.56 13.1401L14.99 21.7401C14.62 22.1601 14.1 22.3801 13.57 22.3801ZM16.88 3.12006C16.79 3.12006 16.68 3.15006 16.59 3.26006L9.01995 11.8701C8.85995 12.0501 8.91997 12.2301 8.94997 12.3001C8.97997 12.3701 9.07997 12.5401 9.31997 12.5401H12.41C12.82 12.5401 13.16 12.8801 13.16 13.2901V20.4901C13.16 20.7401 13.34 20.8401 13.42 20.8701C13.5 20.9001 13.6999 20.9501 13.8599 20.7601L21.43 12.1501C21.59 11.9701 21.53 11.7901 21.5 11.7201C21.47 11.6501 21.37 11.4801 21.13 11.4801H18.04C17.63 11.4801 17.29 11.1401 17.29 10.7301V3.53006C17.29 3.28006 17.11 3.18006 17.03 3.15006C17 3.13006 16.94 3.12006 16.88 3.12006Z" fill={`${color}`} />
		<path d="M8.5 4.75H1.5C1.09 4.75 0.75 4.41 0.75 4C0.75 3.59 1.09 3.25 1.5 3.25H8.5C8.91 3.25 9.25 3.59 9.25 4C9.25 4.41 8.91 4.75 8.5 4.75Z" fill={`${color}`} />
		<path d="M7.5 20.75H1.5C1.09 20.75 0.75 20.41 0.75 20C0.75 19.59 1.09 19.25 1.5 19.25H7.5C7.91 19.25 8.25 19.59 8.25 20C8.25 20.41 7.91 20.75 7.5 20.75Z" fill={`${color}`} />
		<path d="M4.5 12.75H1.5C1.09 12.75 0.75 12.41 0.75 12C0.75 11.59 1.09 11.25 1.5 11.25H4.5C4.91 11.25 5.25 11.59 5.25 12C5.25 12.41 4.91 12.75 4.5 12.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.31994 13.2814H12.4099V20.4814C12.4099 21.5414 13.7299 22.0414 14.4299 21.2414L21.9999 12.6414C22.6599 11.8914 22.1299 10.7214 21.1299 10.7214H18.0399V3.52143C18.0399 2.46143 16.7199 1.96143 16.0199 2.76143L8.44994 11.3614C7.79994 12.1114 8.32994 13.2814 9.31994 13.2814Z" fill={`${color}`} />
		<path d="M8.5 4.75H1.5C1.09 4.75 0.75 4.41 0.75 4C0.75 3.59 1.09 3.25 1.5 3.25H8.5C8.91 3.25 9.25 3.59 9.25 4C9.25 4.41 8.91 4.75 8.5 4.75Z" fill={`${color}`} />
		<path d="M7.5 20.75H1.5C1.09 20.75 0.75 20.41 0.75 20C0.75 19.59 1.09 19.25 1.5 19.25H7.5C7.91 19.25 8.25 19.59 8.25 20C8.25 20.41 7.91 20.75 7.5 20.75Z" fill={`${color}`} />
		<path d="M4.5 12.75H1.5C1.09 12.75 0.75 12.41 0.75 12C0.75 11.59 1.09 11.25 1.5 11.25H4.5C4.91 11.25 5.25 11.59 5.25 12C5.25 12.41 4.91 12.75 4.5 12.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12.0005 3.66992V20.3299L11.2005 21.2399C10.0905 22.4999 9.1805 22.1599 9.1805 20.4799V13.2799H6.0905C4.6905 13.2799 4.3005 12.4199 5.2305 11.3699L12.0005 3.66992Z" fill={`${color}`} />
		<path opacity="0.4" d="M18.77 12.6299L12 20.3299V3.6699L12.8 2.7599C13.91 1.4999 14.82 1.8399 14.82 3.5199V10.7199H17.91C19.31 10.7199 19.7 11.5799 18.77 12.6299Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22.0004 12.63C22.6604 11.88 22.1304 10.71 21.1304 10.71H18.0404V3.50996C18.0404 2.44996 16.7204 1.94996 16.0204 2.74996L8.45043 11.35C7.79043 12.1 8.32043 13.27 9.32043 13.27H12.4104V20.47C12.4104 21.53 13.7304 22.03 14.4304 21.23L19.0604 15.97" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M8.5 4H1.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7.5 20H1.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M4.5 12H1.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.31993 13.28H12.4099V20.48C12.4099 21.54 13.7299 22.04 14.4299 21.24L21.9999 12.64C22.6599 11.89 22.1299 10.72 21.1299 10.72H18.0399V3.51997C18.0399 2.45997 16.7199 1.95997 16.0199 2.75997L8.44994 11.36C7.79994 12.11 8.32993 13.28 9.31993 13.28Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M8.5 4H1.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M7.5 20H1.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M4.5 12H1.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
