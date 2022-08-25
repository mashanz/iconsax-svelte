<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 22H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2.94995 22L2.99995 9.96999C2.99995 9.35999 3.28995 8.78004 3.76995 8.40004L10.77 2.95003C11.49 2.39003 12.5 2.39003 13.23 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
		<path d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10 16.25V17.75" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10.5 7.5H13.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z" fill={`${color}`} />
		<path d="M3.7002 21.9997H2.2002L2.2502 9.96971C2.2502 9.11971 2.6402 8.32974 3.3102 7.80974L10.3102 2.35973C11.3002 1.58973 12.6902 1.58973 13.6902 2.35973L20.6902 7.79973C21.3502 8.31973 21.7502 9.12971 21.7502 9.96971V21.9997H20.2502V9.97972C20.2502 9.59972 20.0702 9.22973 19.7702 8.98973L12.7702 3.54973C12.3202 3.19973 11.6902 3.19973 11.2302 3.54973L4.2302 8.99974C3.9302 9.22974 3.7502 9.59972 3.7502 9.97972L3.7002 21.9997Z" fill={`${color}`} />
		<path d="M17 22.75H7C6.59 22.75 6.25 22.41 6.25 22V12.5C6.25 11.26 7.26 10.25 8.5 10.25H15.5C16.74 10.25 17.75 11.26 17.75 12.5V22C17.75 22.41 17.41 22.75 17 22.75ZM7.75 21.25H16.25V12.5C16.25 12.09 15.91 11.75 15.5 11.75H8.5C8.09 11.75 7.75 12.09 7.75 12.5V21.25Z" fill={`${color}`} />
		<path d="M10 18.5C9.59 18.5 9.25 18.16 9.25 17.75V16.25C9.25 15.84 9.59 15.5 10 15.5C10.41 15.5 10.75 15.84 10.75 16.25V17.75C10.75 18.16 10.41 18.5 10 18.5Z" fill={`${color}`} />
		<path d="M13.5 8.25H10.5C10.09 8.25 9.75 7.91 9.75 7.5C9.75 7.09 10.09 6.75 10.5 6.75H13.5C13.91 6.75 14.25 7.09 14.25 7.5C14.25 7.91 13.91 8.25 13.5 8.25Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10 15.5C9.59 15.5 9.25 15.84 9.25 16.25V17.75C9.25 18.16 9.59 18.5 10 18.5C10.41 18.5 10.75 18.16 10.75 17.75V16.25C10.75 15.84 10.41 15.5 10 15.5Z" fill={`${color}`} />
		<path d="M22 21.2488H21V9.97875C21 9.35875 20.72 8.77875 20.23 8.39875L13.23 2.95875C12.51 2.38875 11.49 2.38875 10.77 2.95875L3.77 8.39875C3.28 8.77875 3 9.35875 3 9.96875L2.95 21.2488H2C1.59 21.2488 1.25 21.5788 1.25 21.9988C1.25 22.4088 1.59 22.7488 2 22.7488H22C22.41 22.7488 22.75 22.4088 22.75 21.9988C22.75 21.5788 22.41 21.2488 22 21.2488ZM10.5 6.74875H13.5C13.91 6.74875 14.25 7.08875 14.25 7.49875C14.25 7.90875 13.91 8.24875 13.5 8.24875H10.5C10.09 8.24875 9.75 7.90875 9.75 7.49875C9.75 7.08875 10.09 6.74875 10.5 6.74875ZM17 21.2488H7V12.4987C7 11.6687 7.67 10.9987 8.5 10.9987H15.5C16.33 10.9987 17 11.6687 17 12.4987V21.2488Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22.75 22C22.75 22.41 22.41 22.75 22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.58 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.58 22.75 22Z" fill={`${color}`} />
		<path opacity="0.4" d="M20.9992 9.98017V21.2502H2.94922L2.99922 9.97016C2.99922 9.36016 3.27922 8.78022 3.76922 8.40022L10.7692 2.96021C11.4892 2.39021 12.5092 2.39021 13.2292 2.96021L20.2292 8.40022C20.7192 8.78022 20.9992 9.36017 20.9992 9.98017Z" fill={`${color}`} />
		<path d="M13.5 8.25H10.5C10.09 8.25 9.75 7.91 9.75 7.5C9.75 7.09 10.09 6.75 10.5 6.75H13.5C13.91 6.75 14.25 7.09 14.25 7.5C14.25 7.91 13.91 8.25 13.5 8.25Z" fill={`${color}`} />
		<path d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11ZM10.75 17.75C10.75 18.16 10.41 18.5 10 18.5C9.59 18.5 9.25 18.16 9.25 17.75V16.25C9.25 15.84 9.59 15.5 10 15.5C10.41 15.5 10.75 15.84 10.75 16.25V17.75Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 22H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M3 9.96999C3 9.35999 3.29 8.78004 3.77 8.40004L10.77 2.95003C11.49 2.39003 12.5 2.39003 13.23 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2.94922 22L2.97923 14.03" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10 16.25V17.75" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10.5 7.5H13.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 22H22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2.9502 22.0003L3.0002 9.97023C3.0002 9.36023 3.2902 8.78029 3.7702 8.40029L10.7702 2.95027C11.4902 2.39027 12.5002 2.39027 13.2302 2.95027L20.2302 8.39028C20.7202 8.77028 21.0002 9.35023 21.0002 9.97023V22.0003" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
		<path opacity="0.4" d="M15.5 11H8.5C7.67 11 7 11.67 7 12.5V22H17V12.5C17 11.67 16.33 11 15.5 11Z" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M10 16.25V17.75" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M10.5 7.5H13.5" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
