<script lang="ts">
	import { Transition, Menu, MenuButton, MenuItem, MenuItems } from '@rgossiaux/svelte-headlessui';
</script>

<Menu class="relative inline-block text-left">
	<div>
		<MenuButton
			class="inline-flex w-full justify-center items-center rounded-md  bg-opacity-60 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
		>
			<svg
				fill="currentColor"
				stroke-width="0"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				height="1em"
				width="1em"
				style="overflow: visible;"
				class="h-6 w-6"
				><path
					fill-rule="evenodd"
					d="M14 5H2V3h12v2zm0 4H2V7h12v2zM2 13h12v-2H2v2z"
					clip-rule="evenodd"
				/></svg
			>
		</MenuButton>
	</div>
	<Transition
		enter="transition ease-out duration-100"
		enterFrom="transform opacity-0 scale-95"
		enterTo="transform opacity-100 scale-100"
		leave="transition ease-in duration-75"
		leaveFrom="transform opacity-100 scale-100"
		leaveTo="transform opacity-0 scale-95"
	>
		<MenuItems
			class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-neutral-900  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
		>
			<div class="px-1 py-1 ">
				<MenuItem>
					<a
						href="/react"
						class="group flex w-full items-center rounded-md px-2 py-2 text-sm  hover:bg-dark-500 hover-c-white duration-100 ease-in-out"
						>React</a
					>
				</MenuItem>
				<MenuItem>
					<a
						href="/vue"
						class="group flex w-full items-center rounded-md px-2 py-2 text-sm  hover:bg-dark-500 hover-c-white duration-100 ease-in-out"
						>Vue</a
					>
				</MenuItem>
				<MenuItem>
					<a
						href="/svelte"
						class="group flex w-full items-center rounded-md px-2 py-2 text-sm  hover:bg-dark-500 hover-c-white duration-100 ease-in-out"
						>Svelte</a
					>
				</MenuItem>
				<MenuItem>
					<a
						href="/web-development"
						class="group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-dark-500 hover-c-white duration-100 ease-in-out"
						>Desarrollo web</a
					>
				</MenuItem>
				<MenuItem>
					<a
						href="/software-engineering"
						class="group flex w-full items-center rounded-md px-2 py-2 text-sm  hover:bg-dark-500 hover-c-white duration-100 ease-in-out"
						>Desarrollo de software</a
					>
				</MenuItem>
			</div>
		</MenuItems>
	</Transition>
</Menu>
