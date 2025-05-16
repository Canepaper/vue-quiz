<template>

	<v-card class="quiz-card mx-auto mb-4" color="surface">
		<v-card-title>
			Question {{ quizStore.currentQuestion + 1 }} of {{ quizStore.quizData.length }}
		</v-card-title>
		<v-card-text>
			<v-alert v-if="answerChosen" class="mb-4" :title="answerIsCorrect === true ? 'Correct' : 'Incorrect'"
				:text="answerIsCorrect === true ? 'Your answer was correct!' : 'Your answer was incorrect!'"
				variant="tonal" :type="answerIsCorrect === true ? 'success' : 'error'"></v-alert>
			<p>{{ currentQuestion.question }}</p>
			<v-list class="mt-4">
				<v-list-item v-for="(answer, index) in answers" :key="index" :disabled="answerChosen"
					@click="selectedAnswer = answer; quizStore.setAnswerSelected(answer)"
					:active="selectedAnswer === answer" active-color="primary" variant="outlined" rounded="lg"
					class="mb-2">
					{{ answer }}
				</v-list-item>
			</v-list>
		</v-card-text>
		<v-card-actions class="d-flex justify-space-between">
			<v-btn variant="outlined" color="primary" :disabled="quizStore.currentQuestion === 0"
				@click="quizStore.setCurrentQuestion(quizStore.currentQuestion - 1)">Previous</v-btn>

			<v-btn v-if="!answerChosen" :disabled="!answerSelected" @click="processAnswer">Check
				Answer</v-btn>
			<v-btn v-if="answerChosen && quizStore.currentQuestion !== quizStore.quizData.length - 1" variant="outlined"
				color="primary" :disabled="quizStore.currentQuestion === quizStore.quizData.length - 1"
				@click="quizStore.setCurrentQuestion(quizStore.currentQuestion + 1)">Next</v-btn>

			<v-btn v-if="answerChosen && quizStore.currentQuestion === quizStore.quizData.length - 1" variant="flat"
				color="primary">
				View Results
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script setup>
import { useQuizStore } from '../stores/quizStore.ts';
import { computed, ref } from 'vue';

const selectedAnswer = ref(null)
const quizStore = useQuizStore()

const currentQuestion = computed(() => {
	const question = quizStore.quizData[quizStore.currentQuestion]
	return {
		...question,
		question: question?.question?.replace(/&quot;/g, '"')
			.replace(/&#039;/g, "'")
			.replace(/&amp;/g, '&')
			.replace(/&eacute;/g, 'é')
			.replace(/&iacute;/g, 'í')
			.replace(/&deg;/g, '°')
			.replace(/&ldquo;/g, '"')
			.replace(/&rdquo;/g, '"')
	}
})

const answerChosen = computed(() => currentQuestion.value?.answerChosen)
const answerSelected = computed(() => currentQuestion.value?.answerSelected)
const correctAnswer = computed(() => currentQuestion.value?.correct_answer)
const incorrectAnswers = computed(() => currentQuestion.value?.incorrect_answers || [])

const answerIsCorrect = computed(() => answerSelected.value === correctAnswer.value)

const answers = computed(() => {
	const shuffled = [correctAnswer.value, ...incorrectAnswers.value]
	return shuffled.sort(() => Math.random() - 0.5)
})

function processAnswer() {
	quizStore.setAnswerChosen(true)
}
</script>

<style scoped>
.quiz-card {
	max-width: 500px;
}
</style>