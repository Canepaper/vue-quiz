<template>
	<DefaultLayout>
		<v-slide-x-transition mode="out-in">
			<QuizCard :key="quizStore.currentQuestion" />
		</v-slide-x-transition>
		<v-pagination v-model="currentPage" :length="pagesAvailable" :total-visible="7"
			@update:modelValue="quizStore.setCurrentQuestion(currentPage - 2)" />

		<div class="d-flex justify-center mt-4">
			<v-btn class="mb-4" to="/start" variant="text" color="primary">
				<v-icon start>mdi-arrow-left</v-icon>
				Back to Quiz Selection
			</v-btn>
		</div>
	</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import QuizCard from '@/components/QuizCard.vue';
import { useQuizStore } from '@/stores/quizStore';
import { computed, ref } from 'vue';

const quizStore = useQuizStore();

const pagesAvailable = computed(() => {

	const available = quizStore.quizData.filter((question) => question.answerChosen).length + 1;

	if (available > quizStore.quizData.length) {
		return quizStore.quizData.length;
	}

	return available;
})

const currentPage = computed({
	get() {
		return quizStore.currentQuestion + 1;
	},
	set(value) {
		console.log(value);
		quizStore.setCurrentQuestion(value);
	}
});
</script>

<style scoped></style>