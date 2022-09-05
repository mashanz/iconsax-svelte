<script>
	let search = '';
	const size = [12, 16, 24, 32, 44, 64, 80];
	const variant = ['Linear', 'Outline', 'Bold', 'Bulk', 'Broken', 'TwoTone'];

	let showSelectSize = true;
	let showSelectVariant = true;
	let showIconDetail = false;

	$: selectedName = '';
	$: selectedSize = '80';
	$: selectedVariant = 'Linear';
	$: color = '#fb923c';

	import { icons } from '$lib/icons';
	import SearchNormal1 from '$lib/SearchNormal1.svelte';
</script>

<svelte:head>
	<title>Iconsax Svelte | Mashanz</title>
</svelte:head>

<main class="h-screen w-full bg-gray-900 text-white overflow-auto relative">
	<header class="text-xs flex p-10 max-w-7xl w-full m-auto">
		<div>
			&copy; Iconsax | <a class=" underline text-orange-400" href="https://iconsax.io"> official website </a>
			|
			<a class="underline text-orange-400" href="https://github.com/lusaxweb/iconsax"> github page </a>
		</div>
		<div class="flex-grow" />
		<div>
			Made by <a class="underline text-orange-400" href="https://github.com/mashanz">mashanz</a>
			inspired by
			<a class="underline text-orange-400" href="https://iconsax-react.pages.dev">Iconsax React</a>
		</div>
	</header>

	<section class="h-screen absolute mx-auto w-full top-20">
		<h1 class="text-center text-6xl px-10 pt-28 pb-14">
			<span class="text-green-500 font-bold">ICONSAX</span> for
			<span class="text-orange-400 font-bold">SVELTE</span>
		</h1>
		<div class="w-full text-center pb-32">
			<a target="_blank" class="text-center px-5 py-3 border-2 border-orange-400 rounded-full mx-1" href="https://github.com/mashanz/iconsax-svelte">Get Started 🚀</a>

			<a target="_blank" class="text-center px-5 py-3 border-2 border-gray-700 rounded-full mx-1" href="https://www.npmjs.com/package/iconsax-svelte">Svelte</a>
		</div>

		<div class="p-10 flex text-center">
			<div class="flex gap-2 flex-col md:flex-row mx-auto">
				<!-- Search -->
				<div class="flex px-3 py-1 rounded-xl bg-gray-800">
					<div class="w-5 h-5 ml-0 mr-2 my-2">
						<SearchNormal1 size={20} variant="Linear" color="#fb923c" />
					</div>

					<input type="text" bind:value={search} placeholder="search icons..." class="bg-gray-800 outline-none" />
				</div>
				<!-- Size -->
				<div class="relative">
					<div class="px-3 py-3 rounded-xl bg-gray-800 btn" on:click={() => (showSelectSize = !showSelectSize)}>
						size: {selectedSize}
					</div>
					<div class="text-center border-2 border-orange-400 rounded-xl absolute w-full mt-2 py-2 bg-gray-900" class:hidden={showSelectSize}>
						{#each size as s}
							<div
								class="p-1 text-sm btn"
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
				<div class="relative">
					<div class="px-3 py-3 rounded-xl bg-gray-800 btn" on:click={() => (showSelectVariant = !showSelectVariant)}>
						Variant: {selectedVariant}
					</div>
					<div class="text-center border-2 border-orange-400 rounded-xl absolute w-full mt-2 py-2 bg-gray-900" class:hidden={showSelectVariant}>
						{#each variant as v}
							<div
								class="p-1 text-sm btn"
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
					<input type="color" bind:value={color} placeholder="search icons..." class="bg-gray-800 outline-none m-auto btn" />
				</div>
			</div>
		</div>

		<div class="grid 2xl:grid-cols-10 xl:grid-cols-8 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-2 2xl:max-w-[96rem] xl:max-w-[77rem] lg:max-w-[67rem] md:max-w-[48rem] sm:max-w-[38rem] max-w-[19rem] mx-auto pb-16">
			{#each icons as icon}
				{#if icon.name.toLowerCase().includes(search.toLowerCase())}
					<button
						on:click={() => {
							showIconDetail = true;
							selectedName = icon.name;
						}}
						class="w-36 h-36 border rounded-xl border-gray-700 bg-gray-800 mx-auto hover:border-orange-400 btn hover:-mt-1 w-">
						<div class="flex h-full">
							<div class="m-auto">
								<div class="flex">
									<div class="mx-auto">
										<svelte:component this={icon.icon} size={selectedSize} variant={selectedVariant} {color} />
									</div>
								</div>
								<div class="text-center text-sm text-gray-400 mt-2">{icon.name}</div>
							</div>
						</div>
					</button>
				{/if}
			{/each}
		</div>
	</section>
</main>

{#if showIconDetail}
	<div class="absolute bottom-0 mx-auto md:right-10 w-full md:w-[40rem] border border-gray-700 rounded-t-xl p-2 text-white bg-gray-900">
		<div class="flex p-2">
			<div class="font-bold">Import</div>
			<div class="flex-grow" />
			<div class="btn" on:click={() => (showIconDetail = false)}>&#x2715;</div>
		</div>

		<div class="bg-gray-800 text-blue-500 rounded p-2 border-gray-700 border-2 font-mono text-sm mt-2">
			{`<script>`}<br />	
				&nbsp;&nbsp;<span class="text-blue-700">import</span> <span class="text-white">{selectedName}</span> from <span class="text-white">'iconsax-svelte/{selectedName}.svelte'</span>;<br/>
			{`</script>`}
		</div>
		<div class="font-bold p-2">Usage</div>
		<div class="bg-gray-800 rounded p-2 border-gray-700 border-2 font-mono text-sm mt-2">
			<div class="text-gray-600">
				&lt;<span class="text-orange-400 font-bold">{selectedName}</span>
			</div>
			<div>
				&nbsp;&nbsp; <span class="text-green-500">size</span>=<span class="text-blue-500">
					"{selectedSize}"
				</span>
			</div>
			<div>
				&nbsp;&nbsp; <span class="text-green-500">color</span>=<span class="text-blue-500">
					"{color}"
				</span>
			</div>
			<div>
				&nbsp;&nbsp; <span class="text-green-500">variant</span>=<span class="text-blue-500">
					"{selectedVariant}"
				</span>
			</div>
			<div class="text-gray-600">/&gt;</div>
		</div>
	</div>
{/if}
