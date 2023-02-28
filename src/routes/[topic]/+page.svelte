<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	import VideosRecommendation from '$lib/components/videos-recommendation.svelte';
	import BlogRecommendations from '$lib/components/blog-recommendations.svelte';
	import ArticleRecommendations from '$lib/components/article-recommendations.svelte';

	export let data: PageData;
	$: actualTopic = $page.params.topic;
	$: contentByVideo = data.filteredContentByTopic.filter((item) => item.type === 'video');
	$: contentByBlogs = data.filteredContentByTopic.filter((item) => item.type === 'blog');
	$: contentByArticles = data.filteredContentByTopic.filter((item) => item.type === 'article');
	$: handleTitleColor = () => {
		if (actualTopic === 'react') return 'c-sky-400';
		if (actualTopic === 'vue') return 'c-emerald-400';
		if (actualTopic === 'svelte') return 'c-orange-400';
		return 'c-neutral-50';
	};
</script>

<svelte:head>
	<title>Noxy - Recommendations | {$page.params.topic.toUpperCase()}</title>
</svelte:head>
<main
	class="h-full w-full prose prose-lg container mx-auto max-w-xl mt-10"
	
>
	<h1 class="text-center">
		Contenido sobre: <span class={handleTitleColor()}>{actualTopic.toUpperCase()}</span>
	</h1>
	{#if contentByVideo.length}
		<VideosRecommendation  videosContent={contentByVideo} topic={actualTopic} />
	{/if}
	{#if contentByBlogs.length}
		<BlogRecommendations blogsContent={contentByBlogs} topic={actualTopic} />
	{/if}
	{#if contentByArticles.length}
		<ArticleRecommendations articlesContent={contentByArticles} topic={actualTopic} />
	{/if}
</main>
