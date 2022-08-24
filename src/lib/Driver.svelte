<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.32 10H4.69002C3.21002 10 2.01001 8.79002 2.01001 7.32002V4.69002C2.01001 3.21002 3.22002 2.01001 4.69002 2.01001H19.32C20.8 2.01001 22 3.22002 22 4.69002V7.32002C22 8.79002 20.79 10 19.32 10Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.32 22H4.69002C3.21002 22 2.01001 20.79 2.01001 19.32V16.69C2.01001 15.21 3.22002 14.01 4.69002 14.01H19.32C20.8 14.01 22 15.22 22 16.69V19.32C22 20.79 20.79 22 19.32 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 5V7" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 5V7" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 17V19" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 17V19" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 6H18" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 18H18" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3198 10.75H4.68977C2.79977 10.75 1.25977 9.21002 1.25977 7.32002V4.69002C1.25977 2.80002 2.79977 1.26001 4.68977 1.26001H19.3198C21.2098 1.26001 22.7498 2.80002 22.7498 4.69002V7.32002C22.7498 9.21002 21.2098 10.75 19.3198 10.75ZM4.67976 2.75002C3.60976 2.75002 2.74977 3.62001 2.74977 4.68001V7.31001C2.74977 8.38001 3.61976 9.24002 4.67976 9.24002H19.3098C20.3798 9.24002 21.2398 8.37001 21.2398 7.31001V4.68001C21.2398 3.61001 20.3698 2.75002 19.3098 2.75002H4.67976Z" fill={`${color}`}/>
<path d="M19.3198 22.75H4.68977C2.79977 22.75 1.25977 21.21 1.25977 19.32V16.69C1.25977 14.8 2.79977 13.26 4.68977 13.26H19.3198C21.2098 13.26 22.7498 14.8 22.7498 16.69V19.32C22.7498 21.21 21.2098 22.75 19.3198 22.75ZM4.67976 14.75C3.60976 14.75 2.74977 15.62 2.74977 16.68V19.31C2.74977 20.38 3.61976 21.24 4.67976 21.24H19.3098C20.3798 21.24 21.2398 20.37 21.2398 19.31V16.68C21.2398 15.61 20.3698 14.75 19.3098 14.75H4.67976Z" fill={`${color}`}/>
<path d="M6 7.75C5.59 7.75 5.25 7.41 5.25 7V5C5.25 4.59 5.59 4.25 6 4.25C6.41 4.25 6.75 4.59 6.75 5V7C6.75 7.41 6.41 7.75 6 7.75Z" fill={`${color}`}/>
<path d="M10 7.75C9.59 7.75 9.25 7.41 9.25 7V5C9.25 4.59 9.59 4.25 10 4.25C10.41 4.25 10.75 4.59 10.75 5V7C10.75 7.41 10.41 7.75 10 7.75Z" fill={`${color}`}/>
<path d="M6 19.75C5.59 19.75 5.25 19.41 5.25 19V17C5.25 16.59 5.59 16.25 6 16.25C6.41 16.25 6.75 16.59 6.75 17V19C6.75 19.41 6.41 19.75 6 19.75Z" fill={`${color}`}/>
<path d="M10 19.75C9.59 19.75 9.25 19.41 9.25 19V17C9.25 16.59 9.59 16.25 10 16.25C10.41 16.25 10.75 16.59 10.75 17V19C10.75 19.41 10.41 19.75 10 19.75Z" fill={`${color}`}/>
<path d="M18 6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.41 5.25 18.75 5.59 18.75 6C18.75 6.41 18.41 6.75 18 6.75Z" fill={`${color}`}/>
<path d="M18 18.75H14C13.59 18.75 13.25 18.41 13.25 18C13.25 17.59 13.59 17.25 14 17.25H18C18.41 17.25 18.75 17.59 18.75 18C18.75 18.41 18.41 18.75 18 18.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.32 2H4.68C3.21 2 2 3.21 2 4.68V7.31C2 8.79 3.21 10 4.68 10H19.31C20.79 10 22 8.79 22 7.32V4.68C22 3.21 20.79 2 19.32 2ZM6.75 7C6.75 7.41 6.41 7.75 6 7.75C5.59 7.75 5.25 7.41 5.25 7V5C5.25 4.59 5.59 4.25 6 4.25C6.41 4.25 6.75 4.59 6.75 5V7ZM10.75 7C10.75 7.41 10.41 7.75 10 7.75C9.59 7.75 9.25 7.41 9.25 7V5C9.25 4.59 9.59 4.25 10 4.25C10.41 4.25 10.75 4.59 10.75 5V7ZM18 6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.41 5.25 18.75 5.59 18.75 6C18.75 6.41 18.41 6.75 18 6.75Z" fill={`${color}`}/>
<path d="M19.32 14H4.68C3.21 14 2 15.21 2 16.68V19.31C2 20.79 3.21 22 4.68 22H19.31C20.79 22 21.99 20.79 21.99 19.32V16.69C22 15.21 20.79 14 19.32 14ZM6.75 19C6.75 19.41 6.41 19.75 6 19.75C5.59 19.75 5.25 19.41 5.25 19V17C5.25 16.59 5.59 16.25 6 16.25C6.41 16.25 6.75 16.59 6.75 17V19ZM10.75 19C10.75 19.41 10.41 19.75 10 19.75C9.59 19.75 9.25 19.41 9.25 19V17C9.25 16.59 9.59 16.25 10 16.25C10.41 16.25 10.75 16.59 10.75 17V19ZM18 18.75H14C13.59 18.75 13.25 18.41 13.25 18C13.25 17.59 13.59 17.25 14 17.25H18C18.41 17.25 18.75 17.59 18.75 18C18.75 18.41 18.41 18.75 18 18.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M19.3198 10H4.68977C3.20977 10 2.00977 8.79001 2.00977 7.32001V4.69001C2.00977 3.21001 3.21977 2.01001 4.68977 2.01001H19.3198C20.7998 2.01001 21.9998 3.22001 21.9998 4.69001V7.32001C21.9998 8.79001 20.7898 10 19.3198 10Z" fill={`${color}`}/>
<path opacity="0.4" d="M19.3198 22H4.68977C3.20977 22 2.00977 20.79 2.00977 19.32V16.69C2.00977 15.21 3.21977 14.01 4.68977 14.01H19.3198C20.7998 14.01 21.9998 15.22 21.9998 16.69V19.32C21.9998 20.79 20.7898 22 19.3198 22Z" fill={`${color}`}/>
<path d="M6 7.75C5.59 7.75 5.25 7.41 5.25 7V5C5.25 4.59 5.59 4.25 6 4.25C6.41 4.25 6.75 4.59 6.75 5V7C6.75 7.41 6.41 7.75 6 7.75Z" fill={`${color}`}/>
<path d="M10 7.75C9.59 7.75 9.25 7.41 9.25 7V5C9.25 4.59 9.59 4.25 10 4.25C10.41 4.25 10.75 4.59 10.75 5V7C10.75 7.41 10.41 7.75 10 7.75Z" fill={`${color}`}/>
<path d="M6 19.75C5.59 19.75 5.25 19.41 5.25 19V17C5.25 16.59 5.59 16.25 6 16.25C6.41 16.25 6.75 16.59 6.75 17V19C6.75 19.41 6.41 19.75 6 19.75Z" fill={`${color}`}/>
<path d="M10 19.75C9.59 19.75 9.25 19.41 9.25 19V17C9.25 16.59 9.59 16.25 10 16.25C10.41 16.25 10.75 16.59 10.75 17V19C10.75 19.41 10.41 19.75 10 19.75Z" fill={`${color}`}/>
<path d="M18 6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.41 5.25 18.75 5.59 18.75 6C18.75 6.41 18.41 6.75 18 6.75Z" fill={`${color}`}/>
<path d="M18 18.75H14C13.59 18.75 13.25 18.41 13.25 18C13.25 17.59 13.59 17.25 14 17.25H18C18.41 17.25 18.75 17.59 18.75 18C18.75 18.41 18.41 18.75 18 18.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3198 10H4.68977C3.20977 10 2.00977 8.79002 2.00977 7.32002V4.69002C2.00977 3.21002 3.21977 2.01001 4.68977 2.01001H19.3198C20.7998 2.01001 21.9998 3.22002 21.9998 4.69002V7.32002" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.3198 22H4.68977C3.20977 22 2.00977 20.79 2.00977 19.32V16.69C2.00977 15.21 3.21977 14.01 4.68977 14.01H19.3198C20.7998 14.01 21.9998 15.22 21.9998 16.69V19.32C21.9998 20.79 20.7898 22 19.3198 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 5V7" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 5V7" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 17V19" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 17V19" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 6H18" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 18H18" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3198 9.99977H4.68977C3.20977 9.99977 2.00977 8.78978 2.00977 7.31978V4.68977C2.00977 3.20977 3.21977 2.00977 4.68977 2.00977H19.3198C20.7998 2.00977 21.9998 3.21977 21.9998 4.68977V7.31978C21.9998 8.78978 20.7898 9.99977 19.3198 9.99977Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.3198 21.9998H4.68977C3.20977 21.9998 2.00977 20.7898 2.00977 19.3198V16.6898C2.00977 15.2098 3.21977 14.0098 4.68977 14.0098H19.3198C20.7998 14.0098 21.9998 15.2198 21.9998 16.6898V19.3198C21.9998 20.7898 20.7898 21.9998 19.3198 21.9998Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M6 5V7" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M10 5V7" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M6 17V19" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M10 17V19" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M14 6H18" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M14 18H18" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
