<script>
	let search = '';
	const size = [12, 16, 24, 32, 44, 64, 80];
	const variant = ['Linear', 'Outline', 'Bold', 'Bulk', 'Broken', 'TwoTone'];

	let showSelectSize = true;
	let showSelectVariant = true;

	$: selectedSize = '80';
	$: selectedVariant = 'Linear';
	$: color = '#fb923c';

	const icons = [
		{
			icon: '',
			name: 'Add'
		},
		{
			icon: '',
			name: 'Min'
		}
	];
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

<div
	class="grid 2xl:grid-cols-10 xl:grid-cols-8 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-2 2xl:max-w-[96rem] xl:max-w-[77rem] lg:max-w-[67rem] md:max-w-[48rem] sm:max-w-[38rem] max-w-[19rem] mx-auto pb-16">
	{#each icons as icon}
		{#if icon.name.toLowerCase().includes(search.toLowerCase())}
			<div
				class="w-36 h-36 border rounded-xl border-gray-700 bg-gray-800 mx-auto hover:border-orange-400 btn hover:-mt-1 w-">
				<div class="flex h-full">
					<div class="m-auto">
						<div
							class="mx-auto"
							class:w-3={selectedSize == '12'}
							class:h-3={selectedSize == '12'}
							class:w-4={selectedSize == '16'}
							class:h-4={selectedSize == '16'}
							class:w-6={selectedSize == '24'}
							class:h-6={selectedSize == '24'}
							class:w-8={selectedSize == '32'}
							class:h-8={selectedSize == '32'}
							class:w-11={selectedSize == '44'}
							class:h-11={selectedSize == '44'}
							class:w-16={selectedSize == '64'}
							class:h-16={selectedSize == '64'}
							class:w-20={selectedSize == '80'}
							class:h-20={selectedSize == '80'}
							style={`background-color: ${color};`}>
							&nbsp;
						</div>
						<div class="text-center text-sm text-gray-400 mt-2">{icon.name}</div>
					</div>
				</div>
			</div>
		{/if}
	{/each}
</div>

<style type="postcss">
	.btn {
		cursor: pointer;
	}
</style>
