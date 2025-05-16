<template>
	<v-navigation-drawer elevation="0" width="300">
		<v-list-item title="Categories" subtitle="Select a category" class="mb-4" />
		<v-divider></v-divider>
		<v-list density="compact" nav select-strategy="one">
			<v-list-item color="primary" v-for="category in categories" :key="category.id"
				@click="selectedCategory = category.id" :value="category.id" :active="selectedCategory == category.id">
				<v-list-item-title>{{ category.name }}</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script setup>


</script>