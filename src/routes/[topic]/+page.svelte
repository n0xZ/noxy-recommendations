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
</script>

<svelte:head>
	<title>Noxy - Recommendations | {$page.params.topic.toUpperCase()}</title>
</svelte:head>
<main class="h-full w-full prose prose-lg container mx-auto max-w-xl">
	{#if contentByVideo.length}
		<VideosRecommendation videosContent={contentByVideo} topic={actualTopic} />
	{/if}
	{#if contentByBlogs.length}
		<BlogRecommendations blogsContent={contentByBlogs} topic={actualTopic} />
	{/if}
	{#if contentByArticles.length}
		<ArticleRecommendations articlesContent={contentByArticles} topic={actualTopic} />
	{/if}
</main>
