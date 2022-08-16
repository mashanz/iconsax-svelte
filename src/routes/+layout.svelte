<script>
	import '../app.css';
</script>

<main class="h-screen w-full bg-gray-900 text-white overflow-auto">
	<header class="text-xs flex p-10">
		<div>
			&copy; Iconsax | <a class=" underline text-orange-400" href="https://iconsax.io">
				official website
			</a>
			|
			<a class="underline text-orange-400" href="https://github.com/lusaxweb/iconsax">
				github page
			</a>
		</div>
		<div class="flex-grow" />
		<div>
			Made by <a class="underline text-orange-400" href="https://github.com/mashanz">mashanz</a>
			inspired by
			<a class="underline text-orange-400" href="iconsax-react.pages.dev">Iconsax React</a>
		</div>
	</header>

	<section class="bg-gray-900">
		<slot />
	</section>
</main>
