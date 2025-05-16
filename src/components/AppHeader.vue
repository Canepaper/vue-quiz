<template>
	<v-app-bar elevation="0">
		<v-toolbar-title>
			<div class="d-flex align-center" style="cursor: pointer" @click="$router.push('/')">
				<img class="logo" src="@/assets/quizle-logo.svg" alt="Quizle Logo" />
				<div class="text-h6">Quizle</div>
			</div>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn v-if="!isDark" icon="mdi-moon-waning-crescent" @click="darkModeStore.toggleDarkMode"></v-btn>
		<v-btn v-else icon="mdi-white-balance-sunny" @click="darkModeStore.toggleDarkMode"></v-btn>
	</v-app-bar>
</template>

<script setup>
import { useDarkModeStore } from '@/stores/darkMode';
import { computed } from 'vue';

const darkModeStore = useDarkModeStore();

const isDark = computed(() => darkModeStore.isDark);

</script>

<style scoped>
.logo {
	height: 64px;
	width: 64px;
	padding: 10px;
	object-fit: cover;
}
</style>
