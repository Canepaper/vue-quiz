<!-- layouts/DrawerLayout.vue -->
<template>
	<v-main class="main-container" :class="{ 'background-image': !isDark }">
		<v-container>
			<slot />
		</v-container>
	</v-main>
</template>

<script setup>
import { useDarkModeStore } from '@/stores/darkMode';
import { computed } from 'vue';

const darkModeStore = useDarkModeStore();
const isDark = computed(() => darkModeStore.isDark);


</script>

<style scoped>
.main-container {
	display: flex;
	align-items: center;

}

.background-image {
	background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1)), url('@/assets/background2.avif');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
</style>