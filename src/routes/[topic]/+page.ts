import { redirect, type Load } from '@sveltejs/kit';
import { getContent } from '../../lib/utils/content';

export const load: Load = async ({ params }) => {
	const filteredContentByTopic = getContent().filter((item) => item.topic === params.topic);
	if (!filteredContentByTopic.length) throw redirect(302, '/');
	return { filteredContentByTopic };
};
