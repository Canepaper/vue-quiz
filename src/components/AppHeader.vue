<template>
	<v-app-bar elevation="0">
		<v-toolbar-title>
			<div class="d-flex align-center" style="cursor: pointer" @click="$router.push('/')">
				<img class="logo" src="@/assets/quizle-logo.svg" alt="Quizle Logo" />
				<div class="text-h6">Quizle</div>
			</div>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn v-if="!isDark" size="large" class="px-4" @click="toggleAndSaveDarkMode">
			<v-icon size="large" class="mr-2">mdi-moon-waning-crescent</v-icon>
			Dark Mode
		</v-btn>
		<v-btn v-else size="large" class="px-4" @click="toggleAndSaveDarkMode">
			<v-icon size="large" class="mr-2">mdi-white-balance-sunny</v-icon>
			Light Mode
		</v-btn>
	</v-app-bar>
</template>

<script setup>
import { useDarkModeStore } from '@/stores/darkMode';
import { computed } from 'vue';

const darkModeStore = useDarkModeStore();

const isDark = computed(() => darkModeStore.isDark);

const toggleAndSaveDarkMode = () => {
	darkModeStore.toggleDarkMode();
	darkModeStore.saveDarkMode();
};

</script>

<style scoped>
.logo {
	height: 64px;
	width: 64px;
	padding: 10px;
	object-fit: cover;
}
</style>
