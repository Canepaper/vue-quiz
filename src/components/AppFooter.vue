<template>
	<v-footer class="d-flex flex-column" elevation="4">
		<div class="d-flex justify-center gap-4 py-4">
			<v-btn v-for="link in links" :key="link.text" :href="link.to" :target="link.target" variant="text"
				rounded="xl" class="footer-btn">
				<v-icon :icon="link.icon" size="large" class="mr-2"></v-icon>
				{{ link.text }}
			</v-btn>
		</div>

		<v-divider></v-divider>

		<div class="pa-4 text-center">
			<div class="text-body-1 mb-2">
				This is a demo project made in Vue 3 with Vuetify.
			</div>
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