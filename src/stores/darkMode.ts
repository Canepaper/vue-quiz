// @ts-check
import { defineStore } from "pinia";

export const useDarkModeStore = defineStore("darkMode", {
	state: () => ({
		isDark: false,
	}),
	actions: {
		toggleDarkMode() {
			this.isDark = !this.isDark;
		},
		setDarkMode(value: boolean) {
			this.isDark = value;
		},
	},
});
