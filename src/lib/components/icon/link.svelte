<script lang="ts">
	export let href: string;
	export let author:string
</script>

<a {href} target="_blank" rel="noreferrer" title="Ver contenido de {author}">
	<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="h-8 w-8"
		><g
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			><path stroke-dasharray="42" stroke-dashoffset="42" d="M11 5H5V19H19V13"
				><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="42;0" /></path
			><path stroke-dasharray="12" stroke-dashoffset="12" d="M13 11L20 4"
				><animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="0.6s"
					dur="0.3s"
					values="12;0"
				/></path
			><path stroke-dasharray="8" stroke-dashoffset="8" d="M21 3H15M21 3V9"
				><animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="0.9s"
					dur="0.2s"
					values="8;0"
				/></path
			></g
		></svg
	>
</a>
