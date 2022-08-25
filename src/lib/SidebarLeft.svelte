<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22H14.97C19.97 22 21.97 20 21.97 15Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M7.96997 2V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.97 9.43994L12.41 11.9999L14.97 14.5599" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14.9707 22.75H8.9707C3.5407 22.75 1.2207 20.43 1.2207 15V9C1.2207 3.57 3.5407 1.25 8.9707 1.25H14.9707C20.4007 1.25 22.7207 3.57 22.7207 9V15C22.7207 20.43 20.4107 22.75 14.9707 22.75ZM8.9707 2.75C4.3607 2.75 2.7207 4.39 2.7207 9V15C2.7207 19.61 4.3607 21.25 8.9707 21.25H14.9707C19.5807 21.25 21.2207 19.61 21.2207 15V9C21.2207 4.39 19.5807 2.75 14.9707 2.75H8.9707Z" fill={`${color}`} />
		<path d="M7.9707 22.75C7.5607 22.75 7.2207 22.41 7.2207 22V2C7.2207 1.59 7.5607 1.25 7.9707 1.25C8.3807 1.25 8.7207 1.59 8.7207 2V22C8.7207 22.41 8.3907 22.75 7.9707 22.75Z" fill={`${color}`} />
		<path d="M14.9696 15.3099C14.7796 15.3099 14.5896 15.2399 14.4396 15.0899L11.8796 12.5299C11.5896 12.2399 11.5896 11.7599 11.8796 11.4699L14.4396 8.90988C14.7296 8.61988 15.2096 8.61988 15.4996 8.90988C15.7896 9.19988 15.7896 9.67988 15.4996 9.96988L13.4796 11.9999L15.5096 14.0299C15.7996 14.3199 15.7996 14.7999 15.5096 15.0899C15.3596 15.2399 15.1696 15.3099 14.9696 15.3099Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 7.81125V16.1913C2 17.6813 2.36 18.9212 3.05 19.8713C3.34 20.2913 3.71 20.6612 4.13 20.9513C4.95 21.5513 5.99 21.9012 7.22 21.9812V2.03125C3.94 2.24125 2 4.37125 2 7.81125Z" fill={`${color}`} />
		<path d="M20.9507 4.13C20.6607 3.71 20.2907 3.34 19.8707 3.05C18.9207 2.36 17.6807 2 16.1907 2H8.7207V22H16.1907C19.8307 22 22.0007 19.83 22.0007 16.19V7.81C22.0007 6.32 21.6407 5.08 20.9507 4.13ZM15.5007 14.03C15.7907 14.32 15.7907 14.8 15.5007 15.09C15.3507 15.24 15.1607 15.31 14.9707 15.31C14.7807 15.31 14.5907 15.24 14.4407 15.09L11.8807 12.53C11.5907 12.24 11.5907 11.76 11.8807 11.47L14.4407 8.91C14.7307 8.62 15.2107 8.62 15.5007 8.91C15.7907 9.2 15.7907 9.68 15.5007 9.97L13.4807 12L15.5007 14.03Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.4" d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z" fill={`${color}`} />
		<path d="M8.7207 2V22H7.8107C7.6107 22 7.4107 21.99 7.2207 21.98V2.03C7.4107 2.01 7.6107 2 7.8107 2H8.7207Z" fill={`${color}`} />
		<path d="M14.9696 15.3099C14.7796 15.3099 14.5896 15.2399 14.4396 15.0899L11.8796 12.5299C11.5896 12.2399 11.5896 11.7599 11.8796 11.4699L14.4396 8.90988C14.7296 8.61988 15.2096 8.61988 15.4996 8.90988C15.7896 9.19988 15.7896 9.67988 15.4996 9.96988L13.4796 11.9999L15.5096 14.0299C15.7996 14.3199 15.7996 14.7999 15.5096 15.0899C15.3596 15.2399 15.1696 15.3099 14.9696 15.3099Z" fill={`${color}`} />
	</svg>
{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M7.9707 2V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M14.9702 9.43994L12.4102 11.9999L14.9702 14.5599" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path d="M2 13V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M7.9707 2V22" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
		<path opacity="0.4" d="M14.9702 9.43994L12.4102 11.9999L14.9702 14.5599" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
{/if}
