<template>
	<v-footer class="text-center d-flex flex-column align-center" elevation="1">
		<div class="d-flex ga-3">
			<v-btn v-for="link in links" :key="link.text" :href="link.to" :target="link.target" variant="text" rounded
				density="comfortable" width="40">
				<v-icon :icon="link.icon" size="large"></v-icon>
			</v-btn>
		</div>

		<v-divider class="my-2" thickness="2" width="50"></v-divider>

		<div class="text-caption">
			This is a demo project made by Jacob Sijsma (j-web.dev)
		</div>


		<v-divider class="my-2" thickness="2" width="50"></v-divider>

		<div class="text-center mt-2">
			{{ new Date().getFullYear() }} — <strong>Jacob Sijsma</strong>
		</div>
	</v-footer>
</template>

<script setup>

const links = [
	{
		icon: 'mdi-home',
		to: 'https://j-web.dev',
		target: '_blank',
		text: 'j-web.dev',
	},
	{
		icon: 'mdi-linkedin',
		to: 'https://linkedin.com',
		target: '_blank',
		text: 'LinkedIn',
	},
	{
		icon: 'mdi-github',
		to: 'https://github.com',
		target: '_blank',
		text: 'GitHub',
	},
];

</script>

<style scoped></style>