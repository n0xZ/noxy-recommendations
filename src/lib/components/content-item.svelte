<script lang="ts">
	import type { Content } from '$lib/utils/content';

	export let content: Content;

	$: handleShadowGradientColor = () => {
		if (content.topic === 'react') return 'border-sky-400';
		if (content.topic === 'vue') return 'border-emerald-400';
		if (content.topic === 'svelte') return 'border-orange-400';
		return 'border-neutral-50';
	};
	$: handleTitleColor = () => {
		if (content.topic === 'react') return 'c-sky-400';
		if (content.topic === 'vue') return 'c-emerald-400';
		if (content.topic === 'svelte') return 'c-orange-400';
		return 'c-neutral-50';
	};
</script>

<aside class=" h-96 prose prose-lg   rounded-lg border-l-2 {handleShadowGradientColor()}     pl-5">
	<h3 class="{handleTitleColor()} ">{content.title}</h3>
	{#if content.type!=="video"}
		<h4>{content.author}</h4>
	{/if}
	<p class="c-neutral-400">{content.description}</p>
	<a href={content.href} target="_blank" rel="noreferrer">Ver contenido</a>
</aside>
