<template>
	<DefaultLayout>

		<v-dialog v-model="showResults" max-width="500" closable>
			<v-card>
				<v-card-title class="d-flex justify-space-between align-center">
					Quiz Results
					<v-btn icon="mdi-close" variant="text" @click="showResults = false"></v-btn>
				</v-card-title>
				<v-card-text>
					<p>You got {{ correctAnswers }} out of {{ quizStore.quizData.length }} questions correct!</p>
				</v-card-text>
				<v-card-actions>
					<v-btn variant="flat" color="primary" to="/start">
						New Quiz
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>

		<v-slide-x-transition mode="out-in">
			<QuizCard :key="quizStore.currentQuestion" @toggle-results="toggleResults" />
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
const showResults = ref(false)

const correctAnswers = computed(() => {
	return quizStore.quizData.filter((question) => question.answerChosen && question.answerSelected === question.correct_answer).length
})

const pagesAvailable = computed(() => {

	const available = quizStore.quizData.filter((question) => question.answerChosen).length + 1;

	if (available > quizStore.quizData.length) {
		return quizStore.quizData.length;
	}

	return available;
})

function toggleResults() {
	showResults.value = !showResults.value
}

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