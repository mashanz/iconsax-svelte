<script>
	let search = '';
	let color = '#fb923c';
	const size = [12, 16, 24, 32, 44, 60, 80];

	const variant = ['Linear', 'Outline', 'Bold', 'Bulk', 'Broken', 'TwoTone'];

	let showSelectSize = true;
	let showSelectVariant = true;

	$: selectedSize = '80';
	$: selectedVariant = 'Linear';
</script>

<svelte:head>
	<title>Iconsax Svelte | Mashanz</title>
</svelte:head>

<h1 class="text-center text-6xl px-10 pt-28 pb-14">
	<span class="text-green-500 font-bold">ICONSAX</span> for
	<span class="text-orange-400 font-bold">SVELTE</span>
</h1>
<div class="w-full text-center pb-32">
	<a
		target="_blank"
		class="text-center px-5 py-3 border-2 border-orange-400 rounded-full mx-1"
		href="https://github.com/mashanz/iconsax-svelte">Get Started 🚀</a>

    <a
		target="_blank"
		class="text-center px-5 py-3 border-2 border-gray-700 rounded-full mx-1"
		href="https://www.npmjs.com/package/iconsax-svelte">Svelte</a>
</div>

<div class="p-10 flex">
	<div class="flex mx-auto">
		<!-- Search -->
		<div class="flex px-3 py-1 rounded-xl bg-gray-800">
			<div class="bg-white w-5 h-5 ml-0 mr-2 my-2" />
			<input
				type="text"
				bind:value={search}
				placeholder="search icons..."
				class="bg-gray-800 outline-none" />
		</div>
		<!-- Size -->
		<div class="mx-1 relative">
			<div
				class="px-3 py-3 rounded-xl bg-gray-800 btn"
				on:click={() => (showSelectSize = !showSelectSize)}>
				size: {selectedSize}
			</div>
			<div
				class="text-center border-2 border-orange-400 rounded-xl absolute w-full mt-2 py-2"
				class:hidden={showSelectSize}>
				{#each size as s}
					<div
						class="p-1 text-sm"
						on:click={() => {
							selectedSize = `${s}`;
							showSelectSize = !showSelectSize;
						}}>
						{s}
					</div>
				{/each}
			</div>
		</div>
		<!-- Variant -->
		<div class="mx-1 relative">
			<div
				class="px-3 py-3 rounded-xl bg-gray-800 btn"
				on:click={() => (showSelectVariant = !showSelectVariant)}>
				Variant: {selectedVariant}
			</div>
			<div
				class="text-center border-2 border-orange-400 rounded-xl absolute w-full mt-2 py-2"
				class:hidden={showSelectVariant}>
				{#each variant as v}
					<div
						class="p-1 text-sm"
						on:click={() => {
							selectedVariant = `${v}`;
							showSelectVariant = !showSelectVariant;
						}}>
						{v}
					</div>
				{/each}
			</div>
		</div>
		<!-- Color -->
		<div class="flex px-3 py-1 rounded-xl bg-gray-800">
			<input
				type="color"
				bind:value={color}
				placeholder="search icons..."
				class="bg-gray-800 outline-none m-auto btn" />
		</div>
	</div>
</div>

<style type="postcss">
	.btn {
		cursor: pointer;
	}
</style>
