import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import StartPage from "../views/StartPage.vue";
import QuizPage from "../views/QuizPage.vue";
const routes = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/start", name: "Start", component: StartPage },
	{ path: "/quiz", name: "Quiz", component: QuizPage },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
