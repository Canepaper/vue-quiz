<!-- layouts/DrawerLayout.vue -->
<template>
	<CategoriesSidebar />
	<v-main>
		<v-container>
			<slot />
		</v-container>
	</v-main>
</template>

<script setup>
import CategoriesSidebar from '@/components/CategoriesSidebar.vue';
</script>