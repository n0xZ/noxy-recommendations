type Topic = 'react' | 'vue' | 'solid' | 'svelte' | 'web-development' | 'software-engineering';
type Type = 'video' | 'blog' | 'article';
export type Content = {
	title: string;
	href: string;
	description: string;
	type?: Type;
	topic: Topic;
	author: string;
};
export const getContent = (): Content[] => [
	{
		title: 'Ryan Carniato ',
		author: 'Ryan Carniato',
		type: 'video',
		description:
			'Este canal contiene vários tópicos, así que prefiero no englobarlo en uno solo. Ryan Carniato es el creador del framework SolidJS, y en su canal de youtube se resuben los streams que realiza acerca de distíntos tópicos de la web. A mi opinión, un MUST si quieres profundizar en tópicos como JSX, reactividad, etc.',
		topic: 'web-development',
		href: 'https://www.youtube.com/@ryansolid'
	},
	{
		title: 'Midudev',
		author: 'Miguel Angel Durán',
		type: 'video',
		description:
			'Si a día de hoy, estás metido en desarrollo web, y nunca escuchaste hablar de Midudev, vamos por mal camino (Mentira, aunque me parecería rarísimo). Su contenido es TOP en lo que se refiere a material gratuito. un MUST total.',
		topic: 'react',
		href: 'https://www.youtube.com/@midudev'
	},
	{
		title: 'El blog de KCD',
		author: 'Kent C Dodds',
		type: 'blog',
		description:
			'Contiene bastante información en profundidad sobre React, Node, Remix, testing y demás temas relacionados a desarrollo web. A mi parecer, un MUST.',
		topic: 'react',
		href: 'https://kentcdodds.com/'
	},
	{
		title: 'El blog de Sergio Xalambrí',
		author: 'Sergio Xalambri',
		type: 'blog',
		description:
			'El blog de Sergio Xalambri contiene bastante información acerca de Remix, uno de los frameworks de React. Te va a interesar si estás trabajando con ello.',
		topic: 'react',
		href: 'https://sergiodxa.com/'
	},
	{
		title: 'El blog de TK Todo',
		author: 'Dominik (TK Todo)',
		type: 'blog',
		description:
			'Este blog contiene bastante información acerca de React, React Query (Librería de data-fetching y manejo del  caché, update del server-state. Resumidamente, todo lo que faltaría en React.) A mi parecer, otro MUST.',
		topic: 'react',
		href: 'https://tkdodo.eu/blog/'
	},
	{
		title: 'El blog de Anthony Fu',
		author: 'Anthony Fu',
		type: 'blog',
		description:
			'Antony Fu es uno de los core member de VueJS, Vite, Nuxt, además de ser el creador de Unocss, VueUse, Vitest, Slidev y Elk, además de vários proyectos Open Source. Si estás interesado en Vue y en CSS, recomiendo fuertemente leer su post. ',
		topic: 'vue',
		href: 'https://antfu.me/'
	},
	{
		title: 'Huntabyte',
		author: 'Huntabyte',
		type: 'video',
		description:
			'Contiene información acerca de Sveltekit. Muy buen contenido si estás interesado en Svelte.',
		topic: 'svelte',
		href: 'https://www.youtube.com/@Huntabyte/'
	}
];
