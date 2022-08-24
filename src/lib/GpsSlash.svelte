<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18.88C9.92 19.28 10.93 19.5 12 19.5C16.14 19.5 19.5 16.14 19.5 12C19.5 10.93 19.28 9.92 18.88 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.21 6.6C15.86 5.3 14.02 4.5 12 4.5C7.86 4.5 4.5 7.86 4.5 12C4.5 14.01 5.29 15.84 6.58 17.19" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 4V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12H2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 12H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.12 9.88L9.88 14.12C9.34 13.58 9 12.83 9 12C9 10.34 10.34 9 12 9C12.83 9 13.58 9.34 14.12 9.88Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 2L2 22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20.2498C10.85 20.2498 9.74002 20.0198 8.70002 19.5598C8.32002 19.3898 8.15002 18.9498 8.31002 18.5698C8.48002 18.1898 8.92002 18.0198 9.30002 18.1798C10.15 18.5498 11.06 18.7398 12 18.7398C15.72 18.7398 18.75 15.7098 18.75 11.9898C18.75 11.0498 18.56 10.1398 18.19 9.28976C18.02 8.90976 18.2 8.46976 18.58 8.29976C18.96 8.13976 19.4 8.30976 19.57 8.68976C20.03 9.72976 20.26 10.8398 20.26 11.9898C20.25 16.5498 16.55 20.2498 12 20.2498Z" fill={`${color}`}/>
<path d="M6.58 17.94C6.38 17.94 6.19 17.86 6.04 17.71C4.56 16.16 3.75 14.14 3.75 12C3.75 7.45 7.45 3.75 12 3.75C14.15 3.75 16.18 4.57 17.73 6.06C18.03 6.35 18.04 6.82 17.75 7.12C17.46 7.42 16.99 7.43 16.69 7.14C15.42 5.92 13.76 5.25 12 5.25C8.28 5.25 5.25 8.28 5.25 12C5.25 13.75 5.92 15.41 7.13 16.67C7.42 16.97 7.41 17.44 7.11 17.73C6.96 17.87 6.77 17.94 6.58 17.94Z" fill={`${color}`}/>
<path d="M12 4.75C11.59 4.75 11.25 4.41 11.25 4V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2V4C12.75 4.41 12.41 4.75 12 4.75Z" fill={`${color}`}/>
<path d="M4 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H4C4.41 11.25 4.75 11.59 4.75 12C4.75 12.41 4.41 12.75 4 12.75Z" fill={`${color}`}/>
<path d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V20C11.25 19.59 11.59 19.25 12 19.25C12.41 19.25 12.75 19.59 12.75 20V22C12.75 22.41 12.41 22.75 12 22.75Z" fill={`${color}`}/>
<path d="M22 12.75H20C19.59 12.75 19.25 12.41 19.25 12C19.25 11.59 19.59 11.25 20 11.25H22C22.41 11.25 22.75 11.59 22.75 12C22.75 12.41 22.41 12.75 22 12.75Z" fill={`${color}`}/>
<path d="M9.88 14.87C9.69 14.87 9.5 14.8 9.35 14.65C8.64 13.94 8.25 13 8.25 12C8.25 9.93 9.93 8.25 12 8.25C13 8.25 13.94 8.64 14.65 9.35C14.94 9.64 14.94 10.12 14.65 10.41L10.41 14.65C10.26 14.8 10.07 14.87 9.88 14.87ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 12.34 9.83 12.67 9.97 12.97L12.97 9.97C12.67 9.83 12.34 9.75 12 9.75Z" fill={`${color}`}/>
<path d="M1.99945 22.7499C1.80945 22.7499 1.61945 22.6799 1.46945 22.5299C1.17945 22.2399 1.17945 21.7599 1.46945 21.4699L21.4695 1.46994C21.7595 1.17994 22.2395 1.17994 22.5295 1.46994C22.8195 1.75994 22.8195 2.23994 22.5295 2.52994L2.52945 22.5299C2.37945 22.6799 2.18945 22.7499 1.99945 22.7499Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.7509 11.9987C22.7509 12.4087 22.4109 12.7487 22.0009 12.7487H19.9609C19.6109 16.5587 16.5609 19.6087 12.7509 19.9587V21.9987C12.7509 22.4087 12.4109 22.7487 12.0009 22.7487C11.5909 22.7487 11.2509 22.4087 11.2509 21.9987V19.9587C10.6409 19.9087 10.0409 19.7787 9.47092 19.5887C8.76092 19.3487 8.54092 18.4487 9.07092 17.9187L11.8809 15.1087C11.9209 15.1187 11.9509 15.1187 11.9909 15.1187C13.7209 15.1187 15.1109 13.7287 15.1109 11.9987C15.1109 11.9587 15.1109 11.9287 15.1009 11.8887L17.9109 9.07873C18.4409 8.54873 19.3409 8.76873 19.5809 9.47873C19.7709 10.0487 19.9009 10.6387 19.9509 11.2587H22.0009C22.4109 11.2487 22.7509 11.5887 22.7509 11.9987Z" fill={`${color}`}/>
<path d="M21.77 2.23C21.47 1.93 20.98 1.93 20.68 2.23L17.07 5.84C15.87 4.85 14.37 4.2 12.74 4.05V2C12.74 1.59 12.4 1.25 11.99 1.25C11.58 1.25 11.24 1.59 11.24 2V4.04C7.43 4.4 4.38 7.44 4.03 11.25H2C1.59 11.25 1.25 11.59 1.25 12C1.25 12.41 1.59 12.75 2 12.75H4.04C4.19 14.38 4.84 15.88 5.83 17.08L2.22 20.69C1.92 20.99 1.92 21.48 2.22 21.78C2.38 21.92 2.57 22 2.77 22C2.97 22 3.16 21.92 3.31 21.77L21.77 3.31C22.08 3.01 22.08 2.53 21.77 2.23ZM8.88 12C8.88 10.28 10.28 8.88 12 8.88C12.58 8.88 13.12 9.05 13.58 9.33L9.33 13.58C9.05 13.12 8.88 12.58 8.88 12Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M18.9405 8.06006L15.1105 11.8901C15.1205 11.9301 15.1205 11.9601 15.1205 12.0001C15.1205 13.7201 13.7205 15.1201 12.0005 15.1201C11.9605 15.1201 11.9305 15.1201 11.8905 15.1101L8.06055 18.9401C9.22055 19.6201 10.5705 20.0001 12.0005 20.0001C16.4105 20.0001 20.0005 16.4101 20.0005 12.0001C20.0005 10.5701 19.6205 9.22006 18.9405 8.06006Z" fill={`${color}`}/>
<path opacity="0.4" d="M17.65 6.35L14.2 9.8C13.64 9.23 12.86 8.88 12 8.88C10.28 8.88 8.88 10.28 8.88 12C8.88 12.86 9.23 13.64 9.8 14.2L6.35 17.65C4.9 16.2 4 14.2 4 12C4 7.59 7.59 4 12 4C14.2 4 16.2 4.9 17.65 6.35Z" fill={`${color}`}/>
<path d="M14.2009 9.79988L9.80086 14.1999C9.23086 13.6399 8.88086 12.8599 8.88086 11.9999C8.88086 10.2799 10.2809 8.87988 12.0009 8.87988C12.8609 8.87988 13.6409 9.22988 14.2009 9.79988Z" fill={`${color}`}/>
<path d="M12.75 2V4.04H12.74C12.5 4.01 12.25 4 12 4C11.75 4 11.5 4.01 11.26 4.04H11.25V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2Z" fill={`${color}`}/>
<path d="M4 12C4 12.25 4.01 12.51 4.04 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H4.04C4.01 11.49 4 11.75 4 12Z" fill={`${color}`}/>
<path d="M12.75 19.96V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V19.96H11.26C11.5 19.99 11.75 20 12 20C12.25 20 12.5 19.99 12.74 19.96H12.75Z" fill={`${color}`}/>
<path d="M22.7509 12C22.7509 12.41 22.4109 12.75 22.0009 12.75H19.9609C19.9909 12.51 20.0009 12.25 20.0009 12C20.0009 11.75 19.9909 11.49 19.9609 11.25H22.0009C22.4109 11.25 22.7509 11.59 22.7509 12Z" fill={`${color}`}/>
<path d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18.88C9.92 19.28 10.93 19.5 12 19.5C16.14 19.5 19.5 16.14 19.5 12C19.5 10.93 19.28 9.92 18.88 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.77 10.01C4.59 10.64 4.5 11.31 4.5 12C4.5 14.01 5.29 15.84 6.58 17.19" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.21 6.6C15.86 5.3 14.02 4.5 12 4.5C10.08 4.5 8.33 5.22 7 6.41" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 4V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12H2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 12H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.12 9.88L9.88 14.12C9.34 13.58 9 12.83 9 12C9 10.34 10.34 9 12 9C12.83 9 13.58 9.34 14.12 9.88Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 2L2 22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.21 6.6C15.86 5.3 14.02 4.5 12 4.5C7.86 4.5 4.5 7.86 4.5 12C4.5 14.01 5.29 15.84 6.58 17.19" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 4V2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12H2" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.4">
<path d="M9 18.88C9.92 19.28 10.93 19.5 12 19.5C16.14 19.5 19.5 16.14 19.5 12C19.5 10.93 19.28 9.92 18.88 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 12H22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path d="M14.12 9.88L9.88 14.12C9.34 13.58 9 12.83 9 12C9 10.34 10.34 9 12 9C12.83 9 13.58 9.34 14.12 9.88Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 2L2 22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
