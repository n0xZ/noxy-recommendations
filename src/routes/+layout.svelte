<script lang="ts">
	import 'virtual:uno.css';
	import '@unocss/reset/antfu.css';
	import MenuDropdown from '$lib/components/menu-dropdown.svelte';
</script>

<div class="h-full min-h-screen  w-full bg-dark-900 c-light-50 font-golosText ">
	<header class="p-6  font-golosText border-b-2 border-dark-800">
		<nav class="flex flex-row items-center justify-between container mx-auto max-w-xl text-xl">
			<a href="/">NX/R</a>
			<MenuDropdown />
		</nav>
	</header>

	<main class="min-h-screen">
		<slot />
	</main>
	<footer class="p-5  bg-dark-900   font-golosText border-t-2 border-dark-800">
		<ul class="container mx-auto max-w-xl  ">
			<p class="text-center">Desarrollado con <span class="font-mono">SVELTEKIT</span> 🧡</p>
		</ul>
	</footer>
</div>
