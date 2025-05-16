// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const customGreenTheme = {
	dark: false,
	colors: {
		primary: "#388E3C", // rich green
		secondary: "#A5D6A7", // light green
		accent: "#81C784", // minty accent
		background: "#F1F8E9", // very light green background
		surface: "#E8F5E9", // slightly darker than background
		error: "#D32F2F",
		info: "#4CAF50",
		success: "#66BB6A",
		warning: "#FBC02D",
	},
};

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
	theme: {
		defaultTheme: "customGreenTheme",
		themes: {
			customGreenTheme,
		},
	},
});
