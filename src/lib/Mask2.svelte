<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 12C17 14.76 14.76 17 12 17V7C14.76 7 17 9.24 17 12Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22V17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill={`${color}`}/>
<path d="M12 17.75C11.59 17.75 11.25 17.41 11.25 17V7C11.25 6.59 11.59 6.25 12 6.25C15.17 6.25 17.75 8.83 17.75 12C17.75 15.17 15.17 17.75 12 17.75ZM12.75 7.82001V16.19C14.74 15.84 16.25 14.09 16.25 12.01C16.25 9.93001 14.74 8.17001 12.75 7.82001Z" fill={`${color}`}/>
<path d="M12 17.75C8.83 17.75 6.25 15.17 6.25 12C6.25 8.83 8.83 6.25 12 6.25C12.41 6.25 12.75 6.59 12.75 7V17C12.75 17.41 12.41 17.75 12 17.75ZM11.25 7.82001C9.26 8.17001 7.75 9.92 7.75 12C7.75 14.08 9.26 15.83 11.25 16.18V7.82001Z" fill={`${color}`}/>
<path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V17C11.25 16.59 11.59 16.25 12 16.25C12.41 16.25 12.75 16.59 12.75 17V22C12.75 22.41 12.41 22.75 12 22.75Z" fill={`${color}`}/>
<path d="M12 7.75C11.59 7.75 11.25 7.41 11.25 7V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V7C12.75 7.41 12.41 7.75 12 7.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.6493 4.59125C16.8893 2.99125 14.5593 2.03125 11.9993 2.03125C6.4993 2.03125 2.0293 6.50125 2.0293 12.0013C2.0293 17.5013 6.4993 21.9712 11.9993 21.9712C14.5593 21.9712 16.8893 21.0112 18.6493 19.4112C20.6893 17.6012 21.9693 14.9412 21.9693 12.0013C21.9693 9.06125 20.6893 6.40125 18.6493 4.59125ZM11.9693 16.3912C11.9493 18.0413 10.7193 18.4412 9.5693 17.9812C7.1993 17.0312 5.5293 14.7113 5.5293 12.0013C5.5293 9.29125 7.1993 6.97125 9.5693 6.01125C10.7193 5.55125 11.9493 5.96125 11.9693 7.60125V16.3912Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M21.9693 11.9998C21.9693 14.9398 20.6893 17.5998 18.6493 19.4098C16.8893 21.0098 14.5593 21.9698 11.9993 21.9698C6.4993 21.9698 2.0293 17.4998 2.0293 11.9998C2.0293 6.49979 6.4993 2.02979 11.9993 2.02979C14.5593 2.02979 16.8893 2.98979 18.6493 4.58979C20.6893 6.39979 21.9693 9.05979 21.9693 11.9998Z" fill={`${color}`}/>
<path d="M11.9693 16.3902C11.9493 18.0402 10.7193 18.4402 9.5693 17.9802C7.1993 17.0302 5.5293 14.7102 5.5293 12.0002C5.5293 9.29024 7.1993 6.97024 9.5693 6.01024C10.7193 5.55024 11.9493 5.96024 11.9693 7.60024V16.3902Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 12C17 14.76 14.76 17 12 17V7C13.32 7 14.52 7.51001 15.42 8.35001" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22V17" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.30001 7.97 2.85001" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9693 11.9998C21.9693 14.9398 20.6893 17.5998 18.6493 19.4098C16.8893 21.0098 14.5593 21.9698 11.9993 21.9698C6.4993 21.9698 2.0293 17.4998 2.0293 11.9998C2.0293 6.49979 6.4993 2.02979 11.9993 2.02979C14.5593 2.02979 16.8893 2.98979 18.6493 4.58979C20.6893 6.39979 21.9693 9.05979 21.9693 11.9998Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M11.9693 16.3902C11.9493 18.0402 10.7193 18.4402 9.5693 17.9802C7.1993 17.0302 5.5293 14.7102 5.5293 12.0002C5.5293 9.29024 7.1993 6.97024 9.5693 6.01024C10.7193 5.55024 11.9493 5.96024 11.9693 7.60024V16.3902Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
