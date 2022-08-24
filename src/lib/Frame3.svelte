<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.23 20.77L20.77 17.23" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.77 20.77L17.23 17.23" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 10.5V13.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 10.5V13.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 10.5V13.5" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H13" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.2598 19.65C18.8498 19.65 18.5098 19.31 18.5098 18.9V7.1C18.5098 6.09 18.2998 5.75 17.0298 5.75H15.9898C14.7198 5.75 14.5098 6.09 14.5098 7.1V18.9C14.5098 19.31 14.1698 19.65 13.7598 19.65C13.3498 19.65 13.0098 19.31 13.0098 18.9V7.1C13.0098 5.18 13.9898 4.25 15.9898 4.25H17.0298C19.0398 4.25 20.0098 5.18 20.0098 7.1V18.9C20.0098 19.31 19.6698 19.65 19.2598 19.65Z" fill={`${color}`}/>
<path d="M10.7598 19.65C10.3498 19.65 10.0098 19.31 10.0098 18.9V12.1C10.0098 11.09 9.79977 10.75 8.52977 10.75H7.48977C6.21977 10.75 6.00977 11.09 6.00977 12.1V18.9C6.00977 19.31 5.66977 19.65 5.25977 19.65C4.84977 19.65 4.50977 19.31 4.50977 18.9V12.1C4.50977 10.18 5.48977 9.25 7.48977 9.25H8.52977C10.5398 9.25 11.5098 10.18 11.5098 12.1V18.9C11.5098 19.31 11.1698 19.65 10.7598 19.65Z" fill={`${color}`}/>
<path d="M22 19.75H2C1.59 19.75 1.25 19.41 1.25 19C1.25 18.59 1.58 18.25 2 18.25H22C22.41 18.25 22.75 18.59 22.75 19C22.75 19.41 22.42 19.75 22 19.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 19.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1V19.9C2.5 21.4 3.14 22 4.73 22H8.77C10.36 22 11 21.4 11 19.9Z" fill={`${color}`}/>
<path d="M21.5 19.64V15.36C21.5 14.06 20.5 13 19.27 13H15.23C14 13 13 14.06 13 15.36V19.64C13 20.94 14 22 15.23 22H19.27C20.5 22 21.5 20.94 21.5 19.64Z" fill={`${color}`}/>
<path d="M21.5 8.64V4.36C21.5 3.06 20.5 2 19.27 2H15.23C14 2 13 3.06 13 4.36V8.64C13 9.94 14 11 15.23 11H19.27C20.5 11 21.5 9.94 21.5 8.64Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.8 9H7.2C4 9 2 11 2 14.2V16.79C2 20 4 22 7.2 22H16.79C19.99 22 21.99 20 21.99 16.8V14.2C22 11 20 9 16.8 9Z" fill={`${color}`}/>
<path d="M15.8798 12.43L12.5298 15.78C12.2398 16.07 11.7598 16.07 11.4698 15.78L8.11984 12.43C7.82984 12.14 7.82984 11.66 8.11984 11.37C8.40984 11.08 8.88984 11.08 9.17984 11.37L11.2498 13.44V2.75C11.2498 2.34 11.5898 2 11.9998 2C12.4098 2 12.7498 2.34 12.7498 2.75V13.44L14.8198 11.37C14.9698 11.22 15.1598 11.15 15.3498 11.15C15.5398 11.15 15.7298 11.22 15.8798 11.37C16.1798 11.66 16.1798 12.13 15.8798 12.43Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.27 22C9.86 22 10.5 21.4 10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.73 2C14.14 2 13.5 2.6 13.5 4.1V12.9C13.5 14.4 14.14 15 15.73 15H19.77C21.36 15 22 14.4 22 12.9V4.1C22 2.6 21.36 2 19.77 2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M19.2598 18.9V7.1C19.2598 5.6 18.6198 5 17.0298 5H15.9898C14.3998 5 13.7598 5.6 13.7598 7.1V18.9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M5.25977 18.9V12.1C5.25977 10.6 5.89977 10 7.48977 10H8.52977C10.1198 10 10.7598 10.6 10.7598 12.1V18.9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 19H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
