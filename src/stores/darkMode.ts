// @ts-check
import { defineStore } from "pinia";
import { reactive, toRefs, onMounted, onUnmounted } from "vue";

interface DarkModeState {
	isDark: boolean;
}

export const useDarkModeStore = defineStore('darkMode', () => {
	const state = reactive<DarkModeState>({
		isDark: false,
	});

	function getSystemPreference(): boolean {
		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	function handleSystemPreferenceChange(e: MediaQueryListEvent) {
		state.isDark = e.matches;
		saveDarkMode();
	}

	function toggleDarkMode() {
		state.isDark = !state.isDark;
		saveDarkMode();
	}

	function saveDarkMode() {
		localStorage.setItem("darkMode", state.isDark.toString());
	}

	function setDarkMode(value: boolean) {
		state.isDark = value;
		saveDarkMode();
	}

	// Initialize dark mode based on system preference or saved preference
	function initializeDarkMode() {
		const savedPreference = localStorage.getItem("darkMode");
		if (savedPreference === null) {
			state.isDark = getSystemPreference();
		} else {
			state.isDark = savedPreference === "true";
		}
	}

	// Set up system preference listener
	let mediaQuery: MediaQueryList;
	function setupSystemPreferenceListener() {
		mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', handleSystemPreferenceChange);
	}

	function cleanupSystemPreferenceListener() {
		if (mediaQuery) {
			mediaQuery.removeEventListener('change', handleSystemPreferenceChange);
		}
	}

	// Initialize dark mode when store is created
	initializeDarkMode();
	setupSystemPreferenceListener();

	return {
		...toRefs(state),
		toggleDarkMode,
		saveDarkMode,
		setDarkMode,
		cleanupSystemPreferenceListener,
	};
}, {
	persist: true
});
