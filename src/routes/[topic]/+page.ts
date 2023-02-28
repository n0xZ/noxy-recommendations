import { redirect, type Load } from '@sveltejs/kit';
import Papa from 'papaparse';
import type { Content } from '../../lib/utils/content';
import { PUBLIC_SHEET_URL } from '$env/static/public';
export const load: Load = async ({ params, fetch }) => {
	const data = await fetch(PUBLIC_SHEET_URL);
	const parsedData = await data.text();

	const contentFromSheets = await new Promise<Content[]>((resolve, reject) =>
		Papa.parse<Content>(parsedData, {
			header: true,
			complete: (result) => resolve(result.data),
			error: reject
		})
	);
	const filteredContentByTopic = contentFromSheets.filter((item) => item.topic === params.topic);
	console.log(filteredContentByTopic);
	if (!filteredContentByTopic.length) throw redirect(302, '/');
	return { filteredContentByTopic };
};
