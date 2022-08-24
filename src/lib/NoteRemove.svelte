<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 14H12" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 5.95996L3.25 2.20996" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.96002 2.25L3.21002 6" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 10H15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 2H16C19.33 2.18 21 3.41 21 7.99V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 9.01001V15.98C3 19.99 4 22 9 22H12C12.17 22 14.84 22 15 22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 16L15 22V19C15 17 16 16 18 16H21Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 14.75H7C6.59 14.75 6.25 14.41 6.25 14C6.25 13.59 6.59 13.25 7 13.25H12C12.41 13.25 12.75 13.59 12.75 14C12.75 14.41 12.41 14.75 12 14.75Z" fill={`${color}`}/>
<path d="M6.99945 6.7099C6.80945 6.7099 6.61945 6.6399 6.46945 6.4899L2.71945 2.7399C2.42945 2.4499 2.42945 1.9699 2.71945 1.6799C3.00945 1.3899 3.48945 1.3899 3.77945 1.6799L7.52945 5.4299C7.81945 5.7199 7.81945 6.1999 7.52945 6.4899C7.37945 6.6299 7.18945 6.7099 6.99945 6.7099Z" fill={`${color}`}/>
<path d="M3.21039 6.74994C3.02039 6.74994 2.83039 6.67994 2.68039 6.52994C2.39039 6.23994 2.39039 5.75994 2.68039 5.46994L6.43039 1.71994C6.72039 1.42994 7.20039 1.42994 7.49039 1.71994C7.78039 2.00994 7.78039 2.48994 7.49039 2.77994L3.74039 6.52994C3.60039 6.67994 3.40039 6.74994 3.21039 6.74994Z" fill={`${color}`}/>
<path d="M15 10.75H7C6.59 10.75 6.25 10.41 6.25 10C6.25 9.59 6.59 9.25 7 9.25H15C15.41 9.25 15.75 9.59 15.75 10C15.75 10.41 15.41 10.75 15 10.75Z" fill={`${color}`}/>
<path d="M21 16.75C20.59 16.75 20.25 16.41 20.25 16V7.99C20.25 3.76 18.81 2.9 15.96 2.75H10C9.59 2.75 9.25 2.41 9.25 2C9.25 1.59 9.59 1.25 10 1.25H16C20.1 1.47 21.75 3.42 21.75 7.99V16C21.75 16.41 21.41 16.75 21 16.75Z" fill={`${color}`}/>
<path d="M15 22.7498H9C3.38 22.7498 2.25 20.1598 2.25 15.9798V9.00977C2.25 8.59977 2.59 8.25977 3 8.25977C3.41 8.25977 3.75 8.59977 3.75 9.00977V15.9798C3.75 19.6998 4.48 21.2498 9 21.2498H15C15.41 21.2498 15.75 21.5898 15.75 21.9998C15.75 22.4098 15.41 22.7498 15 22.7498Z" fill={`${color}`}/>
<path d="M15 22.75C14.9 22.75 14.81 22.73 14.71 22.69C14.43 22.57 14.25 22.3 14.25 22V19C14.25 16.58 15.58 15.25 18 15.25H21C21.3 15.25 21.58 15.43 21.69 15.71C21.8 15.99 21.74 16.31 21.53 16.53L15.53 22.53C15.39 22.67 15.19 22.75 15 22.75ZM18 16.75C16.42 16.75 15.75 17.42 15.75 19V20.19L19.19 16.75H18Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.97 1H3.03C1.76 1 1 1.76 1 3.03V5.97C1 7.24 1.76 8 3.03 8H5.97C7.24 8 8 7.24 8 5.97V3.03C8 1.76 7.24 1 5.97 1ZM6.47 5.56C6.72 5.81 6.72 6.22 6.47 6.47C6.34 6.59 6.17 6.65 6.01 6.65C5.85 6.65 5.69 6.59 5.56 6.47L4.49 5.41L3.45 6.47C3.32 6.59 3.16 6.65 2.98 6.65C2.82 6.65 2.66 6.59 2.53 6.47C2.28 6.22 2.28 5.81 2.53 5.56L3.6 4.5L2.54 3.45C2.29 3.2 2.29 2.79 2.54 2.54C2.79 2.29 3.2 2.29 3.45 2.54L4.49 3.6L5.55 2.54C5.8 2.29 6.21 2.29 6.46 2.54C6.71 2.79 6.71 3.2 6.46 3.45L5.41 4.5L6.47 5.56Z" fill={`${color}`}/>
<path d="M21.4995 15.8197C21.4995 15.9697 21.4495 16.1197 21.3195 16.2497C19.8695 17.7097 17.2895 20.3097 15.8095 21.7997C15.6795 21.9397 15.5095 21.9997 15.3395 21.9997C15.0095 21.9997 14.6895 21.7397 14.6895 21.3597V17.8597C14.6895 16.3997 15.9295 15.1897 17.4495 15.1897C18.3995 15.1797 19.7195 15.1797 20.8495 15.1797C21.2395 15.1797 21.4995 15.4897 21.4995 15.8197Z" fill={`${color}`}/>
<path d="M21.4995 15.8197C21.4995 15.9697 21.4495 16.1197 21.3195 16.2497C19.8695 17.7097 17.2895 20.3097 15.8095 21.7997C15.6795 21.9397 15.5095 21.9997 15.3395 21.9997C15.0095 21.9997 14.6895 21.7397 14.6895 21.3597V17.8597C14.6895 16.3997 15.9295 15.1897 17.4495 15.1897C18.3995 15.1797 19.7195 15.1797 20.8495 15.1797C21.2395 15.1797 21.4995 15.4897 21.4995 15.8197Z" fill={`${color}`}/>
<path d="M16.63 2H10.5C9.95 2 9.5 2.45 9.5 3V6.5C9.5 8.16 8.16 9.5 6.5 9.5H3.5C2.95 9.5 2.5 9.95 2.5 10.5V17.13C2.5 19.82 4.68 22 7.37 22H12.19C12.74 22 13.19 21.55 13.19 21V17.86C13.19 15.56 15.1 13.69 17.45 13.69C17.98 13.68 19.27 13.68 20.5 13.68C21.05 13.68 21.5 13.24 21.5 12.68V6.87C21.5 4.18 19.32 2 16.63 2ZM8.72 17.01H6.08C5.67 17.01 5.33 16.67 5.33 16.26C5.33 15.84 5.67 15.5 6.08 15.5H8.72C9.15 15.5 9.47 15.84 9.47 16.26C9.47 16.67 9.15 17.01 8.72 17.01ZM11.51 13.3H6.08C5.67 13.3 5.33 12.96 5.33 12.55C5.33 12.13 5.67 11.79 6.08 11.79H11.51C11.92 11.79 12.27 12.13 12.27 12.55C12.27 12.96 11.92 13.3 11.51 13.3Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.97 1H3.03C1.76 1 1 1.76 1 3.03V5.97C1 7.24 1.76 8 3.03 8H5.97C7.24 8 8 7.24 8 5.97V3.03C8 1.76 7.24 1 5.97 1ZM6.47 5.56C6.72 5.81 6.72 6.22 6.47 6.47C6.34 6.59 6.17 6.65 6.01 6.65C5.85 6.65 5.69 6.59 5.56 6.47L4.49 5.41L3.45 6.47C3.32 6.59 3.16 6.65 2.98 6.65C2.82 6.65 2.66 6.59 2.53 6.47C2.28 6.22 2.28 5.81 2.53 5.56L3.6 4.5L2.54 3.45C2.29 3.2 2.29 2.79 2.54 2.54C2.79 2.29 3.2 2.29 3.45 2.54L4.49 3.6L5.55 2.54C5.8 2.29 6.21 2.29 6.46 2.54C6.71 2.79 6.71 3.2 6.46 3.45L5.41 4.5L6.47 5.56Z" fill={`${color}`}/>
<path opacity="0.4" d="M16.63 2H7.78C7.92 2.29 8 2.63 8 3.03V5.97C8 7.24 7.24 8 5.97 8H3.03C2.84 8 2.67 7.98 2.5 7.94V17.13C2.5 19.82 4.68 22 7.37 22H15.34C15.51 22 15.68 21.94 15.81 21.8C17.29 20.31 19.87 17.71 21.32 16.25C21.45 16.12 21.5 15.97 21.5 15.82V6.87C21.5 4.18 19.32 2 16.63 2Z" fill={`${color}`}/>
<path d="M21.4995 15.8202C21.4995 15.9702 21.4495 16.1202 21.3195 16.2502C19.8695 17.7102 17.2895 20.3102 15.8095 21.8002C15.6795 21.9402 15.5095 22.0002 15.3395 22.0002C15.0095 22.0002 14.6895 21.7402 14.6895 21.3602V17.8602C14.6895 16.4002 15.9295 15.1902 17.4495 15.1902C18.3995 15.1802 19.7195 15.1802 20.8495 15.1802C21.2395 15.1802 21.4995 15.4902 21.4995 15.8202Z" fill={`${color}`}/>
<path d="M14.7794 12.71H7.35938C6.93938 12.71 6.60938 12.37 6.60938 11.96C6.60938 11.55 6.94938 11.21 7.35938 11.21H14.7794C15.1994 11.21 15.5294 11.55 15.5294 11.96C15.5294 12.37 15.1994 12.71 14.7794 12.71Z" fill={`${color}`}/>
<path d="M11.9994 16.4199H7.35938C6.93938 16.4199 6.60938 16.0799 6.60938 15.6699C6.60938 15.2499 6.94938 14.9199 7.35938 14.9199H11.9994C12.4194 14.9199 12.7494 15.2599 12.7494 15.6699C12.7494 16.0799 12.4194 16.4199 11.9994 16.4199Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 14H12" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 5.95996L3.25 2.20996" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.96094 2.25L3.21094 6" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 10H15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 2H16C19.33 2.18 21 3.41 21 7.99" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 9.01001V15.98C3 19.99 4 22 9 22H12C12.17 22 14.84 22 15 22" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 16L15 22V19C15 17 16 16 18 16H21Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M7 14H12" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.4">
<path d="M7 5.95996L3.25 2.20996" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.96094 2.25L3.21094 6" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path opacity="0.4" d="M7 10H15" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 2H16C19.33 2.18 21 3.41 21 7.99V16" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 9.00977V15.9798C3 19.9898 4 21.9998 9 21.9998H12C12.17 21.9998 14.84 21.9998 15 21.9998" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 16L15 22V19C15 17 16 16 18 16H21Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
