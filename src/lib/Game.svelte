<script>
	export let size = 24;
	export let color = '#000';
	export let variant = 'Linear';
</script>

{#if variant === 'Linear'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.57002 12.46L6.52002 15.51" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.55005 12.49L9.60005 15.54" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.53 14H13.54" stroke={`${color}`} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.47 14H17.48" stroke={`${color}`} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 15.98V15.96" stroke={`${color}`} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 12.04V12.02" stroke={`${color}`} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V13C22 8 20 6 15 6H9C4 6 2 8 2 13V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.01 2L13 3.01C12.99 3.56 12.55 4 12 4H11.97C11.42 4 10.98 4.45 10.98 5C10.98 5.55 11.43 6 11.98 6H12.98" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'Outline'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.51996 16.2599C6.32996 16.2599 6.13996 16.1899 5.98996 16.0399C5.69996 15.7499 5.69996 15.2699 5.98996 14.9799L9.03996 11.9299C9.32996 11.6399 9.80996 11.6399 10.1 11.9299C10.39 12.2199 10.39 12.6999 10.1 12.9899L7.04996 16.0399C6.89996 16.1799 6.70996 16.2599 6.51996 16.2599Z" fill={`${color}`}/>
<path d="M9.60023 16.2899C9.41023 16.2899 9.22023 16.2199 9.07023 16.0699L6.02023 13.0199C5.73023 12.7299 5.73023 12.2499 6.02023 11.9599C6.31023 11.6699 6.79023 11.6699 7.08023 11.9599L10.1302 15.0099C10.4202 15.2999 10.4202 15.7799 10.1302 16.0699C9.98023 16.2199 9.79023 16.2899 9.60023 16.2899Z" fill={`${color}`}/>
<path d="M13.5403 15C12.9903 15 12.5303 14.55 12.5303 14C12.5303 13.45 12.9703 13 13.5203 13H13.5403C14.0903 13 14.5403 13.45 14.5403 14C14.5403 14.55 14.1003 15 13.5403 15Z" fill={`${color}`}/>
<path d="M17.4797 15C16.9297 15 16.4697 14.55 16.4697 14C16.4697 13.45 16.9097 13 17.4597 13H17.4797C18.0297 13 18.4797 13.45 18.4797 14C18.4797 14.55 18.0297 15 17.4797 15Z" fill={`${color}`}/>
<path d="M15.5 16.97C14.95 16.97 14.5 16.53 14.5 15.98V15.96C14.5 15.41 14.95 14.96 15.5 14.96C16.05 14.96 16.5 15.41 16.5 15.96C16.5 16.51 16.06 16.97 15.5 16.97Z" fill={`${color}`}/>
<path d="M15.5 13.03C14.95 13.03 14.5 12.59 14.5 12.04V12.02C14.5 11.47 14.95 11.02 15.5 11.02C16.05 11.02 16.5 11.47 16.5 12.02C16.5 12.57 16.06 13.03 15.5 13.03Z" fill={`${color}`}/>
<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V13C1.25 7.57 3.57 5.25 9 5.25H15C20.43 5.25 22.75 7.57 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75ZM9 6.75C4.39 6.75 2.75 8.39 2.75 13V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 8.39 19.61 6.75 15 6.75H9Z" fill={`${color}`}/>
<path d="M12.9902 6.75H11.9902C11.0302 6.75 10.2402 5.96 10.2402 5C10.2402 4.04 11.0202 3.25 11.9802 3.25C12.1402 3.25 12.2502 3.14 12.2602 3L12.2702 1.99C12.2802 1.58 12.6102 1.25 13.0202 1.25H13.0302C13.4402 1.26 13.7802 1.6 13.7702 2.01L13.7602 3.02C13.7502 3.97 12.9602 4.75 12.0102 4.75C11.8502 4.75 11.7502 4.86 11.7502 5C11.7502 5.14 11.8602 5.25 12.0002 5.25H13.0002C13.4102 5.25 13.7502 5.59 13.7502 6C13.7502 6.41 13.4002 6.75 12.9902 6.75Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bold'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.65 5.71875H7.35C4.4 5.71875 2 8.11875 2 11.0687V16.6488C2 19.5988 4.4 21.9988 7.35 21.9988H16.65C19.6 21.9988 22 19.5988 22 16.6488V11.0687C22 8.11875 19.6 5.71875 16.65 5.71875ZM14.5 12.0188C14.5 11.4688 14.95 11.0188 15.5 11.0188C16.05 11.0188 16.5 11.4688 16.5 12.0188C16.5 12.5688 16.05 13.0287 15.5 13.0287C14.95 13.0287 14.5 12.5888 14.5 12.0388V12.0188ZM10.13 16.0688C9.98 16.2188 9.79 16.2888 9.6 16.2888C9.41 16.2888 9.22 16.2188 9.07 16.0688L8.04 15.0387L7.05 16.0288C6.9 16.1788 6.71 16.2488 6.52 16.2488C6.33 16.2488 6.14 16.1788 5.99 16.0288C5.7 15.7388 5.7 15.2587 5.99 14.9688L6.98 13.9788L6.02 13.0188C5.73 12.7288 5.73 12.2488 6.02 11.9588C6.31 11.6688 6.79 11.6688 7.08 11.9588L8.04 12.9188L9.03 11.9288C9.32 11.6388 9.8 11.6388 10.09 11.9288C10.38 12.2188 10.38 12.6988 10.09 12.9887L9.1 13.9788L10.13 15.0088C10.42 15.2988 10.42 15.7788 10.13 16.0688ZM13.54 14.9988C12.99 14.9988 12.53 14.5488 12.53 13.9988C12.53 13.4488 12.97 12.9988 13.52 12.9988H13.54C14.09 12.9988 14.54 13.4488 14.54 13.9988C14.54 14.5488 14.1 14.9988 13.54 14.9988ZM15.5 16.9688C14.95 16.9688 14.5 16.5288 14.5 15.9788V15.9587C14.5 15.4087 14.95 14.9587 15.5 14.9587C16.05 14.9587 16.5 15.4087 16.5 15.9587C16.5 16.5087 16.06 16.9688 15.5 16.9688ZM17.48 14.9988C16.93 14.9988 16.47 14.5488 16.47 13.9988C16.47 13.4488 16.91 12.9988 17.46 12.9988H17.48C18.03 12.9988 18.48 13.4488 18.48 13.9988C18.48 14.5488 18.04 14.9988 17.48 14.9988Z" fill={`${color}`}/>
<path d="M13.6394 2.71L13.6294 3.65C13.6194 4.53 12.8894 5.26 11.9994 5.26C11.8494 5.26 11.7594 5.36 11.7594 5.49C11.7594 5.62 11.8594 5.72 11.9894 5.72H10.3794C10.3694 5.65 10.3594 5.57 10.3594 5.49C10.3594 4.59 11.0894 3.86 11.9794 3.86C12.1294 3.86 12.2294 3.76 12.2294 3.63L12.2394 2.69C12.2494 2.31 12.5594 2 12.9394 2H12.9494C13.3394 2 13.6394 2.32 13.6394 2.71Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Bulk'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1309 15.0099L9.10094 13.9799L10.0909 12.9899C10.3809 12.6999 10.3809 12.2199 10.0909 11.9299C9.80094 11.6399 9.32094 11.6399 9.03094 11.9299L8.04094 12.9199L7.08094 11.9599C6.79094 11.6699 6.31094 11.6699 6.02094 11.9599C5.73094 12.2499 5.73094 12.7299 6.02094 13.0199L6.98094 13.9799L5.99094 14.9699C5.70094 15.2599 5.70094 15.7399 5.99094 16.0299C6.14094 16.1799 6.33094 16.2499 6.52094 16.2499C6.71094 16.2499 6.90094 16.1799 7.05094 16.0299L8.04094 15.0399L9.07094 16.0699C9.22094 16.2199 9.41094 16.2899 9.60094 16.2899C9.79094 16.2899 9.98094 16.2199 10.1309 16.0699C10.4209 15.7799 10.4209 15.2999 10.1309 15.0099Z" fill={`${color}`}/>
<path d="M13.5393 15C12.9893 15 12.5293 14.55 12.5293 14C12.5293 13.45 12.9693 13 13.5193 13H13.5393C14.0893 13 14.5393 13.45 14.5393 14C14.5393 14.55 14.0993 15 13.5393 15Z" fill={`${color}`}/>
<path d="M17.4807 15C16.9307 15 16.4707 14.55 16.4707 14C16.4707 13.45 16.9107 13 17.4607 13H17.4807C18.0307 13 18.4807 13.45 18.4807 14C18.4807 14.55 18.0407 15 17.4807 15Z" fill={`${color}`}/>
<path d="M15.5 16.97C14.95 16.97 14.5 16.53 14.5 15.98V15.96C14.5 15.41 14.95 14.96 15.5 14.96C16.05 14.96 16.5 15.41 16.5 15.96C16.5 16.51 16.06 16.97 15.5 16.97Z" fill={`${color}`}/>
<path d="M15.5 13.03C14.95 13.03 14.5 12.59 14.5 12.04V12.02C14.5 11.47 14.95 11.02 15.5 11.02C16.05 11.02 16.5 11.47 16.5 12.02C16.5 12.57 16.06 13.03 15.5 13.03Z" fill={`${color}`}/>
<path opacity="0.4" d="M22 11.07V16.65C22 19.6 19.6 22 16.65 22H7.35C4.4 22 2 19.6 2 16.65V11.07C2 8.11997 4.4 5.71997 7.35 5.71997H16.65C19.6 5.71997 22 8.11997 22 11.07Z" fill={`${color}`}/>
<path d="M13.6394 2.71L13.6294 3.65C13.6194 4.53 12.8894 5.26 11.9994 5.26C11.8494 5.26 11.7594 5.36 11.7594 5.49C11.7594 5.62 11.8594 5.72 11.9894 5.72H10.3794C10.3694 5.65 10.3594 5.57 10.3594 5.49C10.3594 4.59 11.0894 3.86 11.9794 3.86C12.1294 3.86 12.2294 3.76 12.2294 3.63L12.2394 2.69C12.2494 2.31 12.5594 2 12.9394 2H12.9494C13.3394 2 13.6394 2.32 13.6394 2.71Z" fill={`${color}`}/>
</svg>

{:else if variant === 'Broken'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.56953 12.46L6.51953 15.51" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.55078 12.49L9.60078 15.54" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5293 14H13.5393" stroke={`${color}`} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.4707 14H17.4807" stroke={`${color}`} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 15.98V15.96" stroke={`${color}`} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 12.04V12.02" stroke={`${color}`} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 15C2 20 4 22 9 22H15C20 22 22 20 22 15V13C22 8 20 6 15 6H9C5.25 6 3.19 7.12 2.39 9.8" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.0105 2L13.0005 3.01C12.9905 3.56 12.5505 4 12.0005 4H11.9705C11.4205 4 10.9805 4.45 10.9805 5C10.9805 5.55 11.4305 6 11.9805 6H12.9805" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{:else if variant === 'TwoTone'}
	<svg width={`${size}`} height={`${size}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.4">
<path d="M9.56953 12.46L6.51953 15.51" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5498 12.4902L9.5998 15.5402" stroke={`${color}`} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path opacity="0.4" d="M13.5303 14H13.5403" stroke={`${color}`} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M17.4697 14H17.4797" stroke={`${color}`} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M15.5 15.98V15.96" stroke={`${color}`} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M15.5 12.04V12.02" stroke={`${color}`} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V13C22 8 20 6 15 6H9C4 6 2 8 2 13V15C2 20 4 22 9 22Z" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.0105 2L13.0005 3.01C12.9905 3.56 12.5505 4 12.0005 4H11.9705C11.4205 4 10.9805 4.45 10.9805 5C10.9805 5.55 11.4305 6 11.9805 6H12.9805" stroke={`${color}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

{/if}
