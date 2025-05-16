<template>
	<DefaultLayout>
		<div class="d-flex flex-column align-center justify-center">
			<h1>Welcome to Quizle</h1>
			<img class="logo my-4" src="@/assets/quizle-logo.svg" alt="Quizle Logo" />
			<p>This is a demo website built using Vuetify and a trivia API to create quizzes.</p>
			<v-btn class="mt-6" to="/start">Get Started</v-btn>
		</div>
	</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
</script>

<style scoped>
.logo {
	width: 200px;
}
</style>