<script lang="ts">
	import type { Content } from "$lib/utils/content";
	import ContentItem from "./content-item.svelte";


export let articlesContent : Content[]
export let topic: string;
	$: handleTitleColor = () => {
		if (topic === 'react') return 'c-sky-400';
		if (topic === 'vue') return 'c-emerald-400';
		if (topic === 'svelte') return 'c-orange-400';
		return 'c-neutral-50';
	};
</script>


<section class="h-full w-full prose prose-lg container mx-auto max-w-xl">
	<h2 class="{handleTitleColor()}">Artículos</h2>
	<article
		class="h-full w-full flex flex-col justify-center items-center  max-w-xl  gap-12    mt-12 mb-6   xl:p-0 p-2"
	>
		{#each articlesContent as content}
			<ContentItem {content} />
		{/each}
	</article>
</section>