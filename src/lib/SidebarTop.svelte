<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22H14.97C19.97 22 21.97 20 21.97 15Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 8.5H2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.56 15.4999L12 12.9399L9.44 15.4999" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9707 22.75H8.9707C3.5407 22.75 1.2207 20.43 1.2207 15V9C1.2207 3.57 3.5407 1.25 8.9707 1.25H14.9707C20.4007 1.25 22.7207 3.57 22.7207 9V15C22.7207 20.43 20.4107 22.75 14.9707 22.75ZM8.9707 2.75C4.3607 2.75 2.7207 4.39 2.7207 9V15C2.7207 19.61 4.3607 21.25 8.9707 21.25H14.9707C19.5807 21.25 21.2207 19.61 21.2207 15V9C21.2207 4.39 19.5807 2.75 14.9707 2.75H8.9707Z" fill={`${color}`}/>
<path d="M22 9.25H2C1.59 9.25 1.25 8.91 1.25 8.5C1.25 8.09 1.59 7.75 2 7.75H22C22.41 7.75 22.75 8.09 22.75 8.5C22.75 8.91 22.41 9.25 22 9.25Z" fill={`${color}`}/>
<path d="M14.5609 16.2499C14.3709 16.2499 14.1809 16.1799 14.0309 16.0299L12.0009 13.9999L9.97086 16.0299C9.68086 16.3199 9.20086 16.3199 8.91086 16.0299C8.62086 15.7399 8.62086 15.2599 8.91086 14.9699L11.4709 12.4099C11.7609 12.1199 12.2409 12.1199 12.5309 12.4099L15.0909 14.9699C15.3809 15.2599 15.3809 15.7399 15.0909 16.0299C14.9409 16.1799 14.7509 16.2499 14.5609 16.2499Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9493 4.13C20.6593 3.71 20.2893 3.34 19.8693 3.05C18.9193 2.36 17.6793 2 16.1893 2H7.8093C4.3693 2 2.2393 3.94 2.0293 7.22H21.9793C21.8993 5.99 21.5493 4.95 20.9493 4.13Z" fill={`${color}`}/>
<path d="M2 16.1888C2 17.6788 2.36 18.9188 3.05 19.8688C3.34 20.2888 3.71 20.6588 4.13 20.9488C5.08 21.6388 6.32 21.9987 7.81 21.9987H16.19C19.83 21.9987 22 19.8288 22 16.1888V8.71875H2V16.1888ZM8.91 14.4387L11.47 11.8787C11.76 11.5887 12.24 11.5887 12.53 11.8787L15.09 14.4387C15.24 14.5887 15.31 14.7787 15.31 14.9688C15.31 15.1588 15.24 15.3487 15.09 15.4987C14.8 15.7887 14.32 15.7887 14.03 15.4987L12 13.4787L9.97 15.4987C9.68 15.7887 9.2 15.7887 8.91 15.4987C8.62 15.2087 8.62 14.7387 8.91 14.4387Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 7.61 21.99 7.41 21.98 7.22C21.9 5.99 21.55 4.95 20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C4.37 2 2.24 3.94 2.03 7.22C2.01 7.41 2 7.61 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C5.08 21.64 6.32 22 7.81 22Z" fill={`${color}`}/>
<path d="M2 8.72022H22V7.81021C22 7.61022 21.99 7.41021 21.98 7.22021H2.03C2.01 7.41021 2 7.61022 2 7.81021V8.72022Z" fill={`${color}`}/>
<path d="M15.3109 14.9701C15.3109 14.7801 15.2409 14.5901 15.0909 14.4401L12.5309 11.8801C12.2409 11.5901 11.7609 11.5901 11.4709 11.8801L8.91086 14.4401C8.62086 14.7301 8.62086 15.2101 8.91086 15.5001C9.20086 15.7901 9.68086 15.7901 9.97086 15.5001L12.0009 13.4801L14.0309 15.5101C14.3209 15.8001 14.8009 15.8001 15.0909 15.5101C15.2409 15.3601 15.3109 15.1701 15.3109 14.9701Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 8.5H2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5595 15.4999L11.9995 12.9399L9.43945 15.4999" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.9707 12.98V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M22 8.5H2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M14.5595 15.4999L11.9995 12.9399L9.43945 15.4999" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
