// @ts-check
import { defineStore } from "pinia";

type QuizData = Array<{
	type: "multiple" | "boolean";
	category: string;
	difficulty: string;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
	answerChosen: boolean;
	answerSelected: string | null;
}>;

export const useQuizStore = defineStore("quiz", {
	state: () => ({
		quizData: [] as QuizData,
		currentQuestion: 0,
	}),
	actions: {
		setQuizData(data: QuizData) {
			this.quizData = data;
		},
		setCurrentQuestion(index: number) {
			this.currentQuestion = index;
		},
		setAnswerChosen(answer: boolean) {
			this.quizData[this.currentQuestion].answerChosen = answer;
		},
		setAnswerSelected(answer: string) {
			this.quizData[this.currentQuestion].answerSelected = answer;
		},
	}
});
