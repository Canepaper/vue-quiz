<!-- layouts/DrawerLayout.vue -->
<template>
	<v-main class="main-container">
		<v-container>
			<slot />
		</v-container>
	</v-main>
</template>

<script setup>


</script>

<style scoped>
.main-container {
	display: flex;
	align-items: center;
}
</style>