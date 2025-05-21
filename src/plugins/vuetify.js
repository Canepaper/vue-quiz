// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const customTheme = {
	dark: false,
	colors: {
		primary: '#00796B',
		secondary: '#FF8F00',
		accent: '#536DFE',
		background: '#ECEFF1', // Soft blue-grey
		surface: '#F5F5F5', // Gentle light gray
		error: '#D84315',
		success: '#388E3C',
	},
};

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
	theme: {
		defaultTheme: "customTheme",
		themes: {
			customTheme,
		},
	},
});

