<template>
  <v-app :theme="isDark ? 'dark' : 'customGreenTheme'">
    <AppHeader />
    <router-view />
    <AppFooter />
  </v-app>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { useDarkModeStore } from './stores/darkMode';
import { computed } from 'vue';
const darkModeStore = useDarkModeStore();

const isDark = computed(() => darkModeStore.isDark);
</script>

<style>
.v-main {
  flex: 1 0 auto;
}
</style>