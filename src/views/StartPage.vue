<template>
	<DefaultLayout>
		<div class="d-flex flex-column align-center justify-center">
			<img class="logo my-4" src="@/assets/quizle-logo.svg" alt="Quizle Logo" />

			<h1 class="text-center mb-4">Customize your Quiz!</h1>
			<p>Customize your quiz experience by selecting a category, difficulty, and number of questions.</p>

			<div class="mt-4 mb-4 w-100" style="max-width: 700px">
				<v-row class="w-100">
					<v-col cols="12" sm="12" md="6" lg="6" class="mx-auto">
						<v-select v-model="selectedCategory" :items="categories" item-title="name" item-value="id"
							label="Select Category" variant="outlined" class="mt-6" />
					</v-col>

					<v-col cols="12" sm="12" md="6" lg="6" class="mx-auto">
						<v-text-field v-model="numberOfQuestions" label="Number of Questions" variant="outlined"
							class="mt-6" type="number"
							:rules="[v => v >= 1 || 'Minimum is 1', v => v <= 50 || 'Maximum is 50']" min="1"
							max="50" />
					</v-col>
				</v-row>

				<v-row class="w-100">
					<v-col sm="12" md="6" lg="6">
						<p class="mt-4 text-center">Select Difficulty</p>
						<div class="mt-6 mb-6 d-flex justify-center">
							<v-btn-group>
								<v-btn variant="outlined" :color="selectedDifficulty === 'easy' ? 'success' : undefined"
									@click="selectedDifficulty = 'easy'">
									Easy
								</v-btn>
								<v-btn variant="outlined"
									:color="selectedDifficulty === 'medium' ? 'warning' : undefined"
									@click="selectedDifficulty = 'medium'">
									Medium
								</v-btn>
								<v-btn variant="outlined" :color="selectedDifficulty === 'hard' ? 'error' : undefined"
									@click="selectedDifficulty = 'hard'">
									Hard
								</v-btn>
							</v-btn-group>
						</div>
					</v-col>

					<v-col sm="12" md="6" lg="6">
						<p class="mt-4 text-center">Question Type</p>
						<div class="mt-6 mb-6 d-flex justify-center">
							<v-btn-group>
								<v-btn variant="outlined" :color="!isMultipleChoice ? 'primary' : undefined"
									@click="isMultipleChoice = false">
									True/False
								</v-btn>
								<v-btn variant="outlined" :color="isMultipleChoice ? 'primary' : undefined"
									@click="isMultipleChoice = true">
									Multiple Choice
								</v-btn>
							</v-btn-group>
						</div>
					</v-col>
				</v-row>
			</div>
			<v-btn variant="outlined" :loading="loading" :disabled="loading" color="primary" size="large"
				@click="fetchTriviaQuestions">Start Quiz</v-btn>

		</div>
	</DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useQuizStore } from '../stores/quizStore.ts';
import { useRouter } from 'vue-router';

import { ref, computed } from 'vue';

const loading = ref(false)
const selectedCategory = ref(9)
const selectedDifficulty = ref('easy')
const isMultipleChoice = ref(true)
const numberOfQuestions = ref(10)

const router = useRouter()
const quizStore = useQuizStore()

async function fetchTriviaQuestions() {
	loading.value = true

	const response = await fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions.value}&category=${selectedCategory.value}&difficulty=${selectedDifficulty.value}&type=${isMultipleChoice.value ? 'multiple' : 'boolean'}`)
	const data = await response.json()

	const quizData = data.results.map(question => ({
		...question,
		answerChosen: false,
		answerSelected: null
	}))

	quizStore.setQuizData(quizData)
	quizStore.setCurrentQuestion(0)

	loading.value = false

	await router.push('/quiz')
}

const categories = [
	{
		id: 9,
		name: "General Knowledge"
	},
	{
		id: 10,
		name: "Entertainment: Books"
	},
	{
		id: 11,
		name: "Entertainment: Film"
	},
	{
		id: 12,
		name: "Entertainment: Music"
	},
	{
		id: 13,
		name: "Entertainment: Musicals & Theatres"
	},
	{
		id: 14,
		name: "Entertainment: Television"
	},
	{
		id: 15,
		name: "Entertainment: Video Games"
	},
	{
		id: 16,
		name: "Entertainment: Board Games"
	},
	{
		id: 17,
		name: "Science & Nature"
	},
	{
		id: 18,
		name: "Science: Computers"
	},
	{
		id: 19,
		name: "Science: Mathematics"
	},
	{
		id: 20,
		name: "Mythology"
	},
	{
		id: 21,
		name: "Sports"
	},
	{
		id: 22,
		name: "Geography"
	},
	{
		id: 23,
		name: "History"
	},
	{
		id: 24,
		name: "Politics"
	},
	{
		id: 25,
		name: "Art"
	},
	{
		id: 26,
		name: "Celebrities"
	},
	{
		id: 27,
		name: "Animals"
	},
	{
		id: 28,
		name: "Vehicles"
	},
	{
		id: 29,
		name: "Entertainment: Comics"
	},
	{
		id: 30,
		name: "Science: Gadgets"
	},
	{
		id: 31,
		name: "Entertainment: Japanese Anime & Manga"
	},
	{
		id: 32,
		name: "Entertainment: Cartoon & Animations"
	}
]

</script>

<style scoped>
.logo {
	width: 200px;
}
</style>